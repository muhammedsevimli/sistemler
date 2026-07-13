# Ad Spy · Rakip Reklam Çözümleyici · Otomatik Okuma Kuralı (AGENTS.md)

> Bu dosya evrensel AGENTS.md açık standardıdır. Codex, Google Antigravity, Windsurf, Kilo ve 20+ AI aracı bu klasörde çalışırken bunu otomatik okur.
> Claude Code için aynı kural `CLAUDE.md` dosyasında, Cursor için `.cursor/rules/ad-spy.mdc` dosyasında.
> Amaç: rakibinin çalışan reklamlarını her seferinde baştan anlatmamak; rakipleri bir kere dosyaya yaz, sonra tek komutla ayrıştırma + kendi markana uyarlanmış 10 reklam konsepti al.

## Sistem ne yapıyor (iki faz)
1. **Link üretimi (otomatik):** `marka/03-rakipler.md` içindeki rakip listesinden her rakip için Meta Ads Library (Meta Reklam Kütüphanesi, herkese açık) arama linkini üretir. Sen linke tıklar, o rakibin ŞU AN dönen (aktif) reklamlarını görürsün.
2. **Çözümleme + üretim (otomatik):** Kütüphanede gördüğün aktif reklamları `rakip-reklamlari/` klasörüne yapıştırırsın. Sistem her reklamı ayrıştırır (kanca, vaat, kime, format, kanıt, ne kadardır dönüyor), tekrar eden örüntüyü bulur, sonra bu mantığı `marka/` dosyalarından okuduğu senin markana ve sesine giydirip 10 reklam konsepti çıkarır.

> DÜRÜST SINIR: Meta Reklam Kütüphanesi herkese açıktır ama ticari ürün reklamları için ücretsiz otomatik indirme (API) yoktur; reklamların metni tarayıcıda görünür. Bu yüzden reklamı kütüphaneden GÖRME adımı tek tıklık manuel bir "aç ve yapıştır" adımıdır. Ayrıştırma, örüntü çıkarma ve 10 konsept üretimi tamamen otomatiktir. Detay: `format/reklam-ayristirma.md` en alt.

## FAZ 1 · Link istendiğinde
`marka/03-rakipler.md` dosyasını oku. Her rakip için Meta Ads Library linkini şu şablonla üret ve tek tek yaz:

```text
https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=TR&q=<RAKIP ADI>&search_type=keyword_unordered&media_type=all
```

- `<RAKIP ADI>` yerine rakibin adını koy (boşlukları %20 yap: "Yumağ Ev" -> "Yumağ%20Ev").
- Rakibin sayfa numarası (page id) elindeyse daha kesin link: `q=` yerine `view_all_page_id=<NUMARA>` kullan.
- `country=TR` reklamların Türkiye'de gösterilenlerini süzer; başka ülke istiyorsan iki harfli kodu değiştir (DE, US...).
- Linkleri verdikten sonra kullanıcıya tek satırla söyle: "linke tıkla, aktif reklamları `rakip-reklamlari/<rakip>.md` içine yapıştır, sonra çözümle komutunu çalıştır."

## FAZ 2 · Çözümleme + 10 konsept istendiğinde şu dosyaları SIRAYLA oku (zorunlu)
1. `marka/01-marka.md` · kim, kime, ne satıyoruz, ne değiliz, kanıt.
2. `marka/02-ses.md` · nasıl konuşuyoruz, hitap, yasak kelimeler.
3. `marka/03-rakipler.md` · takip edilen rakipler.
4. `format/reklam-ayristirma.md` · her reklamı hangi başlıklara ayıracağın.
5. `format/konsept-format.md` · 10 konsepti hangi yapıda yazacağın.
6. `rakip-reklamlari/` klasöründeki tüm dosyalar · çözümlenecek ham reklamlar.

Bu dosyaları okumadan üretme. İşe başlarken önce "marka + ses + rakipler + format + ham reklamlar okundu" de.

## Çözümleme adımları (sistem içeride şunları yapar)
1. **Ayrıştır:** `rakip-reklamlari/` içindeki her reklamı `format/reklam-ayristirma.md` başlıklarına böl (kanca, vaat, kime, format, kanıt, CTA, ne kadardır dönüyor).
2. **Sinyal oku:** başlangıç tarihi eski olan (aylardır dönen) reklamı "kazandıran aday" işaretle. Uzun süre dönen reklam para harcandığı için dönüyordur; kısa süredir dönen henüz test aşamasında olabilir.
3. **Örüntü çıkar:** tüm reklamlarda tekrar eden kancayı, ortak teklif tipini, ortak duyguyu ve kime konuştuklarını topla. Bu, "çalıştığı belli olan mantık"tır.
4. **Markana giydir:** bu mantığı `marka/01-marka.md` ve `marka/02-ses.md` üzerinden SENİN ürününe ve sesine uyarla. 10 konsept üret (`format/konsept-format.md` yapısında).

## Değişmez üretim kuralları
- `marka/02-ses.md` içindeki YASAK kelimeleri ASLA kullanma. Yasak kalıp gördüğünde konsepti baştan yaz.
- `marka/01-marka.md` içindeki "ne DEĞİLİZ" satırlarına ters düşme (rakip öyle diyor diye sen de deme).
- Rakibin reklamını KOPYALAMA. Mantığını (kanca tipi, teklif tipi, kime) al, kelimelerini değil. Çıktı senin markanın sesinde, senin teklifinle olur.
- Uydurma sayı, sahte indirim, olmayan garanti YOK. Senin teklifin/sayın `marka/01-marka.md` içinde yoksa konsepte `[buraya kendi sayını/teklifini koy]` placeholder bırak, uydurma.
- Her konseptin altına "hangi rakip mantığından geldi" ve "neden tutabilir" tek satırını yaz. Şeffaflık kredibilitedir.
- Em dash (uzun tire) çıktının HİÇBİR yerinde yok: ne konsept metninde, ne başlıkta, ne not satırında. Ayraç gerekirse nokta, virgül, iki nokta ya da orta nokta (·).

## Çıktı nereye yazılır
Her çözümlemeyi `ciktilar/` klasörüne tek dosya olarak yaz: `ciktilar/YYYY-AA-GG-<rakip-ya-da-tema>.md`.
Dosya içinde: (a) rakip reklam ayrıştırma tablosu, (b) çıkan örüntü özeti, (c) 10 konsept, (d) platform notu (Instagram "sen" / LinkedIn "siz").

## Rakip listesi büyür (kalıcı hafıza)
Yeni bir rakip fark edince `marka/03-rakipler.md` dosyasına ekle. Sistem her ay aynı linklerden tekrar çalışır; rakip listesi senin sektörünün canlı reklam hafızası olur. Bir konsept gerçekten tuttuğunda `marka/03-rakipler.md` en altındaki "tutan açılar" bölümüne tarih atarak yaz, sonraki üretimler oradan da beslenir.
