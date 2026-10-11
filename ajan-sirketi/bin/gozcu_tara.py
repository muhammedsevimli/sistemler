#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Gözcünün tarayıcısı.

sirket/radar/kaynaklar.md listesindeki herkese açık kaynakları okur, son N günün maddelerini
sirket/radar/ham-<YYYY-MM-DD>.json dosyasına yazar. Gözcü raporunu bu dosyadan yazar.

- Yalnız okur (HTTP GET). Hiçbir yere veri göndermez, giriş yapmaz, anahtar istemez.
- Yalnız Python 3 standart kütüphanesi. Windows, Mac ve Linux'ta aynı çalışır.
- Bir kaynak açılmazsa onu atlar, hatayı dosyaya yazar ve devam eder.

Kullanım (proje klasöründen):
  python bin/gozcu_tara.py                      tarama
  python bin/gozcu_tara.py --gun 7              son 7 günü tara
  python bin/gozcu_tara.py --kanal-bul <adres>  YouTube kanal adresinden channel_id bulur
  python bin/gozcu_tara.py --dene <tür> <adres> tek kaynağı dener, dosya yazmaz
Mac'te ve Linux'ta `python` yerine `python3` yaz.
"""

import argparse
import datetime as dt
import email.utils
import gzip
import html
import json
import re
import ssl
import statistics
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
import zlib
from pathlib import Path

KOK = Path(__file__).resolve().parent.parent
RADAR = KOK / "sirket" / "radar"
KAYNAKLAR = RADAR / "kaynaklar.md"

TARAYICI = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
            "(KHTML, like Gecko) Chrome/126.0 Safari/537.36")
REDDIT_AJANI = "ajan-sirketi-gozcu/1.0 (herkese acik RSS okuyucu)"
ZAMAN_ASIMI = 20
EN_BUYUK_GOVDE = 6_000_000
KAYNAK_BASINA_EN_COK = 15
VARSAYILAN_GUN = 4
BEKLEME = 5

TURLER = {
    "youtube": "youtube", "yt": "youtube",
    "haber": "haber", "news": "haber", "google": "haber",
    "rss": "rss", "atom": "rss", "besleme": "rss",
    "site": "site", "blog": "site",
    "sitemap": "sitemap",
    "reddit": "reddit",
    "link": "link", "elle": "link",
}

GIRIS_ISTEYEN = ("instagram.com", "facebook.com", "fb.com", "threads.net", "threads.com", "linkedin.com")


# ---------------------------------------------------------------- yardımcılar

def utf8_cikti():
    for akis in (sys.stdout, sys.stderr):
        try:
            akis.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass


def simdi():
    return dt.datetime.now(dt.timezone.utc)


def getir(url, ajan=TARAYICI):
    """Tek bir GET isteği. Gövdeyi bayt olarak döner. data parametresi yok: POST yapılamaz."""
    host = urllib.parse.urlsplit(url).netloc.lower()
    basliklar = {"User-Agent": ajan, "Accept-Language": "tr-TR,tr;q=0.9,en;q=0.8"}
    if host.endswith("youtube.com") or host.endswith("google.com"):
        # AB izin sayfasına düşmemek için yalnız okuma çerezleri
        basliklar["Cookie"] = "CONSENT=YES+1; SOCS=CAI"
    istek = urllib.request.Request(url, headers=basliklar, method="GET")
    for deneme in (1, 2):
        try:
            return _oku(istek)
        except urllib.error.HTTPError as e:
            if deneme == 2 or e.code not in (429, 500, 502, 503, 504):
                raise
        except (urllib.error.URLError, TimeoutError, ConnectionError) as e:
            if deneme == 2 or "CERTIFICATE_VERIFY_FAILED" in str(e):
                raise
        time.sleep(BEKLEME)  # geçici hata (yoğunluk, bağlantı koptu): bir kez daha dene


def _oku(istek):
    with urllib.request.urlopen(istek, timeout=ZAMAN_ASIMI) as yanit:
        govde = yanit.read(EN_BUYUK_GOVDE)
        kodlama = (yanit.headers.get("Content-Encoding") or "").lower()
        if "gzip" in kodlama:
            govde = gzip.decompress(govde)
        elif "deflate" in kodlama:
            govde = zlib.decompress(govde)
        return govde, yanit.geturl()


def metin(govde):
    for k in ("utf-8", "cp1254", "latin-1"):
        try:
            return govde.decode(k)
        except UnicodeDecodeError:
            continue
    return govde.decode("utf-8", errors="replace")


def hata_metni(e):
    if isinstance(e, ValueError) and not isinstance(e, UnicodeError):
        return str(e)
    if isinstance(e, urllib.error.HTTPError):
        return f"HTTP {e.code}"
    if isinstance(e, urllib.error.URLError):
        sebep = e.reason
        if isinstance(sebep, ssl.SSLCertVerificationError) or "CERTIFICATE_VERIFY_FAILED" in str(sebep):
            return ("SSL sertifikası doğrulanamadı. Mac'te Python klasöründeki "
                    "'Install Certificates.command' dosyasını bir kez çalıştır.")
        return f"bağlantı kurulamadı ({sebep})"
    if isinstance(e, ET.ParseError):
        return "besleme okunamadı (XML değil ya da bozuk)"
    if isinstance(e, TimeoutError):
        return f"zaman aşımı ({ZAMAN_ASIMI} sn)"
    return f"{type(e).__name__}: {e}"


def sade(s, sinir=400):
    if not s:
        return ""
    s = re.sub(r"<[^>]+>", " ", s)
    s = html.unescape(s)
    s = re.sub(r"\s+", " ", s).strip()
    return s if len(s) <= sinir else s[: sinir - 1].rstrip() + "…"


ISO = re.compile(r"^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2}))?(?:\.\d+)?)?\s*(Z|[+-]\d{2}:?\d{2})?$")


def tarih_coz(s):
    if not s:
        return None
    s = s.strip()
    m = ISO.match(s)
    if m:
        y, a, g, sa, dk, sn, bolge = m.groups()
        tz = dt.timezone.utc
        if bolge and bolge != "Z":
            isaret = 1 if bolge[0] == "+" else -1
            rakam = bolge[1:].replace(":", "")
            tz = dt.timezone(isaret * dt.timedelta(hours=int(rakam[:2]), minutes=int(rakam[2:])))
        return dt.datetime(int(y), int(a), int(g), int(sa or 0), int(dk or 0), int(sn or 0), tzinfo=tz)
    try:
        t = email.utils.parsedate_to_datetime(s)
        if t.tzinfo is None:
            t = t.replace(tzinfo=dt.timezone.utc)
        return t
    except (TypeError, ValueError, IndexError):
        return None


def yerel(etiket):
    return etiket.rsplit("}", 1)[-1] if isinstance(etiket, str) else ""


def xml_kok(govde):
    govde = re.sub(rb"<!DOCTYPE[^>]*>", b"", govde, count=1)
    return ET.fromstring(govde)


def cocuk(el, ad):
    for c in el:
        if yerel(c.tag) == ad:
            return c
    return None


def cocuk_metin(el, *adlar):
    for ad in adlar:
        c = cocuk(el, ad)
        if c is not None and (c.text or "").strip():
            return c.text.strip()
    return ""


# ---------------------------------------------------------------- besleme okuyucu

def besleme_maddeleri(govde):
    """RSS 2.0, RSS 1.0 ve Atom için ortak okuyucu. YouTube izlenme bilgisini de alır."""
    kok = xml_kok(govde)
    kok_ad = yerel(kok.tag)
    if kok_ad in ("urlset", "sitemapindex"):
        raise ValueError("bu adres bir site haritası, türünü 'sitemap' yap")
    maddeler = []
    for el in kok.iter():
        ad = yerel(el.tag)
        if ad not in ("item", "entry"):
            continue
        baslik = cocuk_metin(el, "title")
        link = ""
        for c in el:
            if yerel(c.tag) == "link":
                if c.get("href") and c.get("rel", "alternate") == "alternate":
                    link = c.get("href")
                    break
                if (c.text or "").strip():
                    link = c.text.strip()
                    break
        tarih = cocuk_metin(el, "pubDate", "published", "date", "updated", "issued")
        ozet = cocuk_metin(el, "description", "summary", "content", "encoded")
        madde = {"baslik": sade(baslik, 200), "link": link, "tarih_ham": tarih, "ozet": sade(ozet)}
        kaynak = cocuk(el, "source")
        if kaynak is not None and (kaynak.text or "").strip():
            madde["yayin_yeri"] = kaynak.text.strip()
        grup = cocuk(el, "group")
        if grup is not None:
            if not madde["ozet"]:
                madde["ozet"] = sade(cocuk_metin(grup, "description"))
            topluluk = cocuk(grup, "community")
            if topluluk is not None:
                ist = cocuk(topluluk, "statistics")
                yildiz = cocuk(topluluk, "starRating")
                if ist is not None and ist.get("views", "").isdigit():
                    madde["izlenme"] = int(ist.get("views"))
                if yildiz is not None and yildiz.get("count", "").isdigit():
                    madde["begeni"] = int(yildiz.get("count"))
        vid = cocuk_metin(el, "videoId")
        if vid:
            madde["video_id"] = vid
            if "/shorts/" in link:
                madde["bicim"] = "shorts"
        maddeler.append(madde)
    return maddeler


def sitemap_maddeleri(govde, derinlik=0):
    kok = xml_kok(govde)
    kok_ad = yerel(kok.tag)
    if kok_ad == "sitemapindex":
        if derinlik > 0:
            return []
        alt = []
        for sm in kok:
            if yerel(sm.tag) != "sitemap":
                continue
            loc = cocuk_metin(sm, "loc")
            son = tarih_coz(cocuk_metin(sm, "lastmod"))
            if loc:
                alt.append((son or dt.datetime(1970, 1, 1, tzinfo=dt.timezone.utc), loc))
        alt.sort(reverse=True)
        maddeler = []
        for _, loc in alt[:3]:
            try:
                g, _u = getir(loc)
                maddeler.extend(sitemap_maddeleri(g, derinlik + 1))
            except Exception:
                continue
        return maddeler
    maddeler = []
    for u in kok:
        if yerel(u.tag) != "url":
            continue
        loc = cocuk_metin(u, "loc")
        if not loc:
            continue
        parca = urllib.parse.urlsplit(loc).path.rstrip("/").rsplit("/", 1)[-1]
        baslik = urllib.parse.unquote(parca).replace("-", " ").replace("_", " ").strip() or loc
        maddeler.append({"baslik": baslik[:200], "link": loc, "tarih_ham": cocuk_metin(u, "lastmod"),
                         "ozet": "", "not": "başlık adresten çıkarıldı (site haritasında başlık yok)"})
    return maddeler


# ---------------------------------------------------------------- kaynak türleri

KANAL_DESENLERI = [
    r'<link rel="canonical" href="https://www\.youtube\.com/channel/(UC[\w-]{22})"',
    r'"externalId":"(UC[\w-]{22})"',
    r'<meta itemprop="identifier" content="(UC[\w-]{22})"',
    r'"browseId":"(UC[\w-]{22})"',
    r'"channelId":"(UC[\w-]{22})"',
]


def kanal_id_bul(adres):
    adres = adres.strip()
    m = re.search(r"(UC[\w-]{22})", adres)
    if m and ("/channel/" in adres or "channel_id=" in adres or adres.startswith("UC")):
        return m.group(1)
    if adres.startswith("@"):
        adres = "https://www.youtube.com/" + adres
    if not adres.startswith("http"):
        adres = "https://" + adres
    govde, son_adres = getir(adres)
    if "consent." in son_adres:
        raise ValueError("YouTube izin sayfasına yönlendirdi, channel_id sayfadan okunamadı")
    sayfa = metin(govde)
    for desen in KANAL_DESENLERI:
        m = re.search(desen, sayfa)
        if m:
            return m.group(1)
    raise ValueError("sayfa kaynağında channelId bulunamadı")


def youtube_besleme(adres):
    if "feeds/videos.xml" in adres:
        return adres
    return "https://www.youtube.com/feeds/videos.xml?channel_id=" + kanal_id_bul(adres)


def haber_adresi(adres, gun):
    if adres.startswith("http"):
        return adres
    sorgu = adres if "when:" in adres else f"{adres} when:{gun}d"
    return ("https://news.google.com/rss/search?q=" + urllib.parse.quote_plus(sorgu)
            + "&hl=tr&gl=TR&ceid=TR:tr")


def reddit_adresi(adres):
    if adres.startswith("http"):
        return adres
    a = adres.strip().strip("/")
    if a.startswith("r/"):
        return f"https://www.reddit.com/{a}/new/.rss"
    return "https://www.reddit.com/search.rss?sort=new&q=" + urllib.parse.quote_plus(a)


def site_beslemesi_bul(adres):
    """Ana sayfadan RSS/Atom bağlantısını bulur; yoksa yaygın yolları ve site haritasını dener."""
    if not adres.startswith("http"):
        adres = "https://" + adres
    denenen = []
    try:
        govde, son = getir(adres)
        sayfa = metin(govde)
        for etiket in re.findall(r"<link[^>]+>", sayfa, flags=re.I):
            if re.search(r'type=["\']application/(rss|atom)\+xml["\']', etiket, flags=re.I):
                h = re.search(r'href=["\']([^"\']+)["\']', etiket, flags=re.I)
                if h and "comments" not in h.group(1):
                    return "rss", urllib.parse.urljoin(son, html.unescape(h.group(1)))
    except Exception as e:
        denenen.append(f"ana sayfa: {hata_metni(e)}")
    taban = urllib.parse.urljoin(adres if adres.endswith("/") else adres + "/", "/")
    for yol, tur in (("feed", "rss"), ("rss", "rss"), ("feed.xml", "rss"), ("rss.xml", "rss"),
                     ("atom.xml", "rss"), ("sitemap.xml", "sitemap"), ("sitemap_index.xml", "sitemap")):
        u = urllib.parse.urljoin(taban, yol)
        try:
            govde, _ = getir(u)
            kok = xml_kok(govde)
            ad = yerel(kok.tag)
            if ad in ("urlset", "sitemapindex"):
                return "sitemap", u
            if ad in ("rss", "feed", "RDF"):
                return "rss", u
        except Exception as e:
            denenen.append(f"{yol}: {hata_metni(e)}")
    raise ValueError("sitede besleme ya da site haritası bulunamadı (" + "; ".join(denenen[:3]) + ")")


def link_oku(adres, not_metni):
    """Elle eklenen tek bağlantı. X ve TikTok için anahtarsız oEmbed, diğerleri için sayfa başlığı."""
    host = urllib.parse.urlsplit(adres).netloc.lower()
    madde = {"baslik": "", "link": adres, "tarih_ham": "", "ozet": "", "elle": True}
    if not_metni:
        madde["sahibin_notu"] = not_metni
    try:
        if host.endswith("x.com") or host.endswith("twitter.com"):
            g, _ = getir("https://publish.twitter.com/oembed?omit_script=1&url=" + urllib.parse.quote(adres, safe=""))
            veri = json.loads(metin(g))
            madde["baslik"] = "X gönderisi: " + veri.get("author_name", "")
            ham = veri.get("html", "")
            p = re.search(r"<p[^>]*>(.*?)</p>", ham, flags=re.S)
            madde["ozet"] = sade(p.group(1) if p else ham)
            t = re.findall(r">([A-Z][a-z]+ \d{1,2}, \d{4})</a>", ham)
            if t:
                try:
                    madde["tarih_ham"] = dt.datetime.strptime(t[-1], "%B %d, %Y").strftime("%Y-%m-%d")
                except ValueError:
                    pass
            return madde
        if host.endswith("tiktok.com"):
            g, _ = getir("https://www.tiktok.com/oembed?url=" + urllib.parse.quote(adres, safe=""))
            veri = json.loads(metin(g))
            madde["baslik"] = "TikTok: " + veri.get("author_name", "")
            madde["ozet"] = sade(veri.get("title", ""))
            return madde
        if any(host.endswith(h) for h in GIRIS_ISTEYEN):
            madde["okunamadi"] = "bu site giriş istiyor, yalnız sahibin notu kullanılır"
            return madde
        if host == "news.google.com":
            madde["okunamadi"] = ("Google Haberler yönlendirme bağlantısı; haberin kendi sitesindeki adresini "
                                  "yapıştırırsan başlığı okunur. Şimdilik sahibin notu kullanılır")
            return madde
        g, _ = getir(adres)
        sayfa = metin(g)

        def meta(*adlar):
            for a in adlar:
                m = re.search(r'<meta[^>]+(?:property|name|itemprop)=["\']' + re.escape(a)
                              + r'["\'][^>]*content=["\']([^"\']*)["\']', sayfa, flags=re.I)
                if m:
                    return html.unescape(m.group(1))
            return ""
        t = re.search(r"<title[^>]*>(.*?)</title>", sayfa, flags=re.S | re.I)
        madde["baslik"] = sade(meta("og:title") or (t.group(1) if t else ""), 200)
        madde["ozet"] = sade(meta("og:description", "description"))
        madde["tarih_ham"] = meta("article:published_time", "datePublished", "date")
    except Exception as e:
        madde["okunamadi"] = hata_metni(e) + "; yalnız sahibin notu kullanılır"
    return madde


# ---------------------------------------------------------------- kaynak listesi

def kaynaklari_oku(yol):
    if not yol.exists():
        return None, None
    gun = None
    kaynaklar = []
    for satir in yol.read_text(encoding="utf-8").splitlines():
        m = re.match(r"^\s*[-*]?\s*gun\s*:\s*(\d+)", satir, flags=re.I)
        if m:
            gun = int(m.group(1))
            continue
        if not satir.strip().startswith("|"):
            continue
        hucre = [h.strip() for h in satir.strip().strip("|").split("|")]
        if len(hucre) < 3 or set("".join(hucre)) <= set("-: "):
            continue
        ad, tur, adres = hucre[0], hucre[1].lower(), hucre[2].strip("`<> ")
        not_metni = hucre[3] if len(hucre) > 3 else ""
        if ad.lower() in ("ad", "kim") or tur in ("tür", "tur"):
            continue
        if not adres or adres.startswith("...") or tur not in TURLER:
            continue
        kaynaklar.append({"ad": ad, "tur": TURLER[tur], "adres": adres, "not": not_metni})
    return gun, kaynaklar


# ---------------------------------------------------------------- tarama

def kaynak_tara(k, gun, simdi_t):
    tur, adres = k["tur"], k["adres"]
    durum = {"ad": k["ad"], "tur": tur, "adres": adres}
    if tur == "link":
        madde = link_oku(adres, k.get("not", ""))
        t = tarih_coz(madde.pop("tarih_ham", ""))
        if t:
            madde["tarih"] = t.astimezone().isoformat(timespec="minutes")
            madde["saat_once"] = round(max((simdi_t - t).total_seconds() / 3600, 0.0), 1)
        durum["okunan_adres"] = adres
        return durum, [madde], 1
    if tur == "youtube":
        okunan = youtube_besleme(adres)
        ham, _ = getir(okunan)
        maddeler = besleme_maddeleri(ham)
    elif tur == "haber":
        okunan = haber_adresi(adres, gun)
        ham, _ = getir(okunan)
        maddeler = besleme_maddeleri(ham)
    elif tur == "reddit":
        okunan = reddit_adresi(adres)
        ham, _ = getir(okunan, ajan=REDDIT_AJANI)
        maddeler = besleme_maddeleri(ham)
    elif tur == "rss":
        okunan = adres
        ham, _ = getir(okunan)
        maddeler = besleme_maddeleri(ham)
    elif tur == "sitemap":
        okunan = adres
        ham, _ = getir(okunan)
        maddeler = sitemap_maddeleri(ham)
    else:  # site
        bulunan_tur, okunan = site_beslemesi_bul(adres)
        ham, _ = getir(okunan)
        maddeler = besleme_maddeleri(ham) if bulunan_tur == "rss" else sitemap_maddeleri(ham)
        durum["bulunan_tur"] = bulunan_tur
    durum["okunan_adres"] = okunan
    toplam = len(maddeler)

    if tur == "youtube":
        izl = [m["izlenme"] for m in maddeler if "izlenme" in m]
        if izl:
            durum["kanal_medyan_izlenme"] = int(statistics.median(izl))
            durum["kanal_son_video_sayisi"] = len(izl)

    sinir = simdi_t - dt.timedelta(days=gun)
    secilen = []
    tarihsiz = 0
    for m in maddeler:
        t = tarih_coz(m.pop("tarih_ham", ""))
        if t is None:
            tarihsiz += 1
            continue
        if t < sinir:
            continue
        m["tarih"] = t.astimezone().isoformat(timespec="minutes")
        saat = max((simdi_t - t).total_seconds() / 3600, 0.0)
        m["saat_once"] = round(saat, 1)
        if "izlenme" in m:
            m["saatlik_izlenme"] = round(m["izlenme"] / max(saat, 1.0), 1)
            if durum.get("kanal_medyan_izlenme"):
                m["kanal_medyanina_oran"] = round(m["izlenme"] / max(durum["kanal_medyan_izlenme"], 1), 2)
        secilen.append(m)
    secilen.sort(key=lambda x: x["tarih"], reverse=True)
    if tarihsiz:
        durum["tarihsiz_atlanan"] = tarihsiz
    return durum, secilen[:KAYNAK_BASINA_EN_COK], toplam


def onceki_tarama():
    # Yazmadan önce okunur: aynı gün ikinci tarama olursa sabahki dosya önceki tarama sayılır.
    adaylar = sorted(RADAR.glob("ham-*.json"))
    if not adaylar:
        return None, {}
    son = adaylar[-1]
    try:
        veri = json.loads(son.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return None, {}
    izl = {}
    for m in veri.get("maddeler", []):
        if "izlenme" in m and m.get("link"):
            izl[m["link"]] = m["izlenme"]
    return {"dosya": son.name, "zaman": veri.get("tarama_zamani")}, izl


def tara(gun_arg):
    gun_dosya, kaynaklar = kaynaklari_oku(KAYNAKLAR)
    if kaynaklar is None:
        print(f"kaynak listesi yok: {KAYNAKLAR}. Önce 'rakiplerimi izle' komutunu çalıştır.")
        return 2
    if not kaynaklar:
        print("kaynak listesinde okunabilir satır yok (tablo: | Ad | Tür | Adres | Not |).")
        return 2
    gun = gun_arg or gun_dosya or VARSAYILAN_GUN
    simdi_t = simdi()
    yerel_simdi = simdi_t.astimezone()
    dosya_adi = f"ham-{yerel_simdi.strftime('%Y-%m-%d')}.json"
    onceki, onceki_izl = onceki_tarama()
    onceki_t = tarih_coz(onceki["zaman"]) if onceki and onceki.get("zaman") else None

    durumlar, hatalar, tum = [], [], []
    for k in kaynaklar:
        try:
            durum, maddeler, toplam = kaynak_tara(k, gun, simdi_t)
        except Exception as e:  # ağ hatası, bozuk besleme: kaynağı atla, devam et
            hatalar.append({"ad": k["ad"], "tur": k["tur"], "adres": k["adres"], "hata": hata_metni(e)})
            print(f"  ATLANDI  {k['ad']} ({k['tur']}): {hata_metni(e)}")
            continue
        for m in maddeler:
            m["kaynak"] = k["ad"]
            m["tur"] = k["tur"]
            if k.get("not") and k["tur"] != "link":
                m["kaynak_notu"] = k["not"]
            if onceki_t and "izlenme" in m and m.get("link") in onceki_izl:
                once = onceki_izl[m["link"]]
                gecen = (simdi_t - onceki_t).total_seconds() / 3600
                m["onceki_izlenme"] = once
                m["onceki_taramadan_beri_artis"] = m["izlenme"] - once
                if gecen > 0.5:
                    m["iki_tarama_arasi_saatlik_artis"] = round((m["izlenme"] - once) / gecen, 1)
        durum["okunan_madde"] = toplam
        durum["son_gunlerde"] = len(maddeler)
        durumlar.append(durum)
        tum.extend(maddeler)
        print(f"  TAMAM    {k['ad']} ({k['tur']}): {len(maddeler)} madde (beslemede {toplam})")

    sonuc = {
        "tarama_zamani": simdi_t.isoformat(timespec="seconds"),
        "yerel_saat": yerel_simdi.isoformat(timespec="minutes"),
        "gun": gun,
        "onceki_tarama": onceki,
        "kaynak_sayisi": len(kaynaklar),
        "basarili_kaynak": len(durumlar),
        "hatali_kaynak": len(hatalar),
        "madde_sayisi": len(tum),
        "not": ("izlenme ve beğeni yalnız YouTube beslemesinde var. Haber, blog, site haritası ve "
                "Reddit beslemelerinde izlenme bilgisi yok."),
        "kaynaklar": durumlar,
        "hatalar": hatalar,
        "maddeler": tum,
    }
    RADAR.mkdir(parents=True, exist_ok=True)
    hedef = RADAR / dosya_adi
    with open(hedef, "w", encoding="utf-8", newline="\n") as f:
        f.write(json.dumps(sonuc, ensure_ascii=False, indent=2) + "\n")
    print(f"kaynak {len(durumlar)}/{len(kaynaklar)} okundu, {len(tum)} madde (son {gun} gün), "
          f"dosya: {hedef.relative_to(KOK).as_posix()}")
    return 0


def main():
    utf8_cikti()
    p = argparse.ArgumentParser(description="Gözcünün tarayıcısı: herkese açık kaynakları okur.")
    p.add_argument("--gun", type=int, help="son kaç gün (varsayılan kaynaklar.md'deki 'gun', yoksa 4)")
    p.add_argument("--kanal-bul", metavar="ADRES", help="YouTube kanal adresinden channel_id bulur")
    p.add_argument("--dene", nargs=2, metavar=("TUR", "ADRES"), help="tek kaynağı dener, dosya yazmaz")
    a = p.parse_args()
    if a.kanal_bul:
        try:
            kid = kanal_id_bul(a.kanal_bul)
        except Exception as e:
            print(f"bulunamadı: {hata_metni(e)}")
            return 1
        print(f"channel_id: {kid}")
        print(f"besleme: https://www.youtube.com/feeds/videos.xml?channel_id={kid}")
        return 0
    if a.dene:
        tur = TURLER.get(a.dene[0].lower())
        if not tur:
            print("tür şunlardan biri olmalı: " + ", ".join(sorted(set(TURLER.values()))))
            return 1
        gun = a.gun or VARSAYILAN_GUN
        try:
            durum, maddeler, toplam = kaynak_tara({"ad": "deneme", "tur": tur, "adres": a.dene[1]}, gun, simdi())
        except Exception as e:
            print(f"okunamadı: {hata_metni(e)}")
            return 1
        print(f"okundu: {durum.get('okunan_adres')} · beslemede {toplam}, son {gun} günde {len(maddeler)} madde")
        for m in maddeler[:5]:
            ek = f" · {m['izlenme']} izlenme" if "izlenme" in m else ""
            print(f"  - {m.get('tarih', '')[:16]} {m['baslik'][:90]}{ek}")
        return 0
    return tara(a.gun)


if __name__ == "__main__":
    sys.exit(main())
