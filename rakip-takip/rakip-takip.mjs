// rakip-takip.mjs
// Haftalik Rakip Takipcisi · tek dosya, sifir bagimlilik (sadece Node.js ile calisir)
//
// Ne yapar:
//   1. rakipler.json listesindeki her rakibin PUBLIC RSS/Atom akisini ceker
//      (blog RSS'i, YouTube kanal RSS'i, herhangi bir RSS veren kaynak).
//   2. Bu haftaki icerikleri, gecen haftanin anlik goruntusuyle (snapshot) karsilastirir.
//   3. YENI olanlari bulur (link bazli dedupe) ve pazartesi bir ozet rapor dosyasi yazar:
//      raporlar/rapor-YYYY-MM-DD.md
//   4. Bu haftanin ham verisini veri/snapshot.json'a yazar (gelecek hafta ile kiyas icin).
//
// Calistirma:
//   node rakip-takip.mjs                 -> canli calisir (internet gerekir), rapor DOSYAYA yazilir
//   node rakip-takip.mjs --eposta        -> rapor dosyaya yazilir VE e-postayla gonderilir (VARSAYILAN teslim)
//   node rakip-takip.mjs --offline PATH  -> internet yerine yerel ornek besleme (test icin)
//   node rakip-takip.mjs --gun 7         -> "yeni" penceresini 7 gun say (varsayilan)
//
// Not: Node 18+ yerlesik fetch kullanir. Rapor uretimi icin harici paket YOK, npm install YOK.
//      E-posta gonderimi de sifir bagimlidir (eposta-gonder.mjs, sadece node:tls kullanir).
//      E-posta icin ortam degiskenleri (env) gerekir: SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_TO
//      (opsiyonel SMTP_PORT varsayilan 465, SMTP_FROM varsayilan SMTP_USER).

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { epostaGonder } from "./eposta-gonder.mjs";
import { uyarla, markaHafizasiOku } from "./uyarla.mjs";
import { apifyVarMi, igPostGetir, igProfilUrl } from "./apify-ig.mjs";

const KOK = dirname(fileURLToPath(import.meta.url));
const VERI = join(KOK, "veri");
const RAPORLAR = join(KOK, "raporlar");
const SNAPSHOT = join(VERI, "snapshot.json");
const RAKIPLER = join(KOK, "rakipler.json");

// --- arguman ayikla ---
const argv = process.argv.slice(2);
const offlineIdx = argv.indexOf("--offline");
const OFFLINE = offlineIdx !== -1 ? argv[offlineIdx + 1] : null;
const gunIdx = argv.indexOf("--gun");
const PENCERE_GUN = gunIdx !== -1 ? Number(argv[gunIdx + 1]) : 7;
const EPOSTA = argv.includes("--eposta");

// --- yardimci: cok basit RSS/Atom ayiklayici (regex tabanli, bagimlilik yok) ---
// Amac mukemmel XML parse degil; RSS <item> ve Atom <entry> icinden baslik+link+tarih cekmek.
function xmlBloklar(xml, etiket) {
  const out = [];
  // <item> ya da <item attr="..."> ile baslayan bloklari yakalar.
  const re = new RegExp(`<${etiket}(?:\\s[^>]*)?>[\\s\\S]*?<\\/${etiket}>`, "gi");
  const m = xml.match(re);
  if (m) out.push(...m);
  return out;
}

function ic(blok, etiket) {
  // CDATA'yi da yakalar
  const re = new RegExp(`<${etiket}[^>]*>([\\s\\S]*?)<\\/${etiket}>`, "i");
  const m = blok.match(re);
  if (!m) return "";
  return m[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();
}

function atomLink(blok) {
  // Atom: <link href="..."/> ; alternate rel tercih et
  const linkler = [...blok.matchAll(/<link\b([^>]*)\/?>/gi)].map((x) => x[1]);
  let secili = null;
  for (const attrs of linkler) {
    const href = (attrs.match(/href="([^"]+)"/i) || [])[1];
    if (!href) continue;
    const rel = (attrs.match(/rel="([^"]+)"/i) || [])[1] || "alternate";
    if (rel === "alternate") return href;
    if (!secili) secili = href;
  }
  return secili || "";
}

function parseFeed(xml) {
  const kayitlar = [];
  const rssItems = xmlBloklar(xml, "item");
  if (rssItems.length) {
    for (const it of rssItems) {
      kayitlar.push({
        baslik: temizle(ic(it, "title")),
        link: temizle(ic(it, "link")),
        tarih: ic(it, "pubDate") || ic(it, "dc:date") || "",
        // ozet kaynagi: RSS aciklamasi ya da tam govde (content:encoded)
        aciklama: temizle(ic(it, "content:encoded") || ic(it, "description") || ""),
      });
    }
    return kayitlar;
  }
  const atomEntries = xmlBloklar(xml, "entry");
  for (const en of atomEntries) {
    kayitlar.push({
      baslik: temizle(ic(en, "title")),
      link: temizle(atomLink(en)),
      tarih: ic(en, "published") || ic(en, "updated") || "",
      // ozet kaynagi: Atom ozeti ya da tam icerik
      aciklama: temizle(ic(en, "summary") || ic(en, "content") || ""),
    });
  }
  return kayitlar;
}

function temizle(s) {
  return (s || "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function tarihMs(s) {
  const t = Date.parse(s);
  return Number.isNaN(t) ? null : t;
}

// YENI ogeleri ayikla: daha once gorulmemis link VE (tarih penceresinde ya da tarih yok).
// gorulenSet + yeniLinkler yan etkiyle guncellenir (dedupe kalicilagi icin). RSS ve IG ayni motoru kullanir.
function yenileriAyikla(kayitlar, gorulenSet, yeniLinkler, simdi, pencereMs) {
  const yeniler = [];
  for (const k of kayitlar) {
    if (!k.link) continue;
    if (gorulenSet.has(k.link)) continue;
    const t = tarihMs(k.tarih);
    const pencerede = t == null ? true : simdi - t <= pencereMs;
    if (pencerede) yeniler.push(k);
    yeniLinkler.push(k.link); // gorulen kabul et (bir sonraki hafta tekrar sayilmasin)
  }
  return yeniler;
}

async function kaynakCek(rakip) {
  if (OFFLINE) {
    // Test modu: internet yerine yerel dosyadan besle.
    // Ornek besleme dosyasi: { "<url>": "<xml govdesi>", ... }
    const veri = JSON.parse(readFileSync(OFFLINE, "utf8"));
    const xml = veri[rakip.rss];
    if (xml == null) throw new Error(`offline besleme bulunamadi: ${rakip.rss}`);
    return xml;
  }
  const r = await fetch(rakip.rss, {
    headers: { "user-agent": "rakip-takipcisi/1.0 (+kisisel arastirma)" },
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return await r.text();
}

function snapshotOku() {
  if (!existsSync(SNAPSHOT)) return { gorulen_linkler: [] };
  try {
    return JSON.parse(readFileSync(SNAPSHOT, "utf8"));
  } catch {
    return { gorulen_linkler: [] };
  }
}

function bugunISO() {
  return new Date().toISOString().slice(0, 10);
}

async function main() {
  if (!existsSync(RAKIPLER)) {
    console.error(`rakipler.json yok. Once ornek listeyi ${RAKIPLER} olarak olustur.`);
    process.exit(1);
  }
  if (!existsSync(VERI)) mkdirSync(VERI, { recursive: true });
  if (!existsSync(RAPORLAR)) mkdirSync(RAPORLAR, { recursive: true });

  const rakipler = JSON.parse(readFileSync(RAKIPLER, "utf8"));
  const markaBaglam = markaHafizasiOku(KOK); // marka + kitle + ses dosyalari (uyarlama baglami)
  const uyarlamaModu = process.env.AI_API_KEY ? "ai" : "heuristik";
  const onceki = snapshotOku();
  const gorulenSet = new Set(onceki.gorulen_linkler || []);
  const simdi = Date.now();
  const pencereMs = PENCERE_GUN * 24 * 60 * 60 * 1000;

  const raporSatirlari = [];
  const yeniLinkler = [];
  let toplamYeni = 0;
  const hatalar = [];
  const igManuel = []; // Instagram · otomatik cekilemeyenler (varsayilan: token yok) -> manuel bolum
  let igOtomatikSayi = 0;

  for (const rakip of rakipler) {
    // --- Instagram dali (OPSIYONEL ikinci katman; ASLA crash yok) ---
    // Varsayilan: APIFY_TOKEN yok -> manuel kontrol bolumune dus. Token varsa Apify ile cek.
    if (rakip.tur === "instagram") {
      if (!apifyVarMi()) {
        igManuel.push({ rakip, sebep: "APIFY_TOKEN yok" });
        continue;
      }
      const sonuc = await igPostGetir(rakip.handle);
      if (!sonuc.ok || !sonuc.items.length) {
        // token var ama cekim bos/hata verdi -> yine manuel'e dus (rapor her durumda uretilir)
        igManuel.push({ rakip, sebep: sonuc.sebep || "Apify veri dondurmedi" });
        continue;
      }
      // Apify item'lari AYNI dedupe + uyarlama motorundan gecer (RSS ile birebir ayni akis)
      const yeniler = yenileriAyikla(sonuc.items, gorulenSet, yeniLinkler, simdi, pencereMs);
      for (const y of yeniler) {
        const s = await uyarla({ ...y, rakipAd: rakip.ad }, markaBaglam);
        y.ozet = s.ozet;
        y.mantik = s.mantik;
        y.uyarlama = s.uyarlama;
        y.uyarlamaKaynak = s.kaynak;
      }
      igOtomatikSayi += 1;
      toplamYeni += yeniler.length;
      raporSatirlari.push({ rakip, yeniler, toplam: sonuc.items.length });
      continue;
    }

    // --- RSS/Atom dali (site/haber/youtube · VARSAYILAN, degismedi) ---
    let kayitlar = [];
    try {
      const xml = await kaynakCek(rakip);
      kayitlar = parseFeed(xml);
    } catch (e) {
      hatalar.push({ rakip: rakip.ad, hata: e.message });
      continue;
    }

    const yeniler = yenileriAyikla(kayitlar, gorulenSet, yeniLinkler, simdi, pencereMs);

    // her yeni ogeyi ozetle + markaya uyarlama onerisi uret (rapor artik link yigini degil)
    for (const y of yeniler) {
      const sonuc = await uyarla({ ...y, rakipAd: rakip.ad }, markaBaglam);
      y.ozet = sonuc.ozet;
      y.mantik = sonuc.mantik;
      y.uyarlama = sonuc.uyarlama;
      y.uyarlamaKaynak = sonuc.kaynak;
    }

    toplamYeni += yeniler.length;
    raporSatirlari.push({ rakip, yeniler, toplam: kayitlar.length });
  }

  // --- rapor metnini kur ---
  const tarih = bugunISO();
  const md = [];
  md.push(`# Haftalik Rakip Raporu · ${tarih}`);
  md.push("");
  md.push(`> Son ${PENCERE_GUN} gunde ${rakipler.length} rakipte ${toplamYeni} yeni hareket bulundu.`);
  md.push(`> Her oge: ne yayinlanmis (ozet) + senin markana uyarlama onerisi. Son karar sende.`);
  md.push(`> Uyarlama uretimi: ${uyarlamaModu === "ai" ? "AI (marka hafizasi dosyalarindan besleniyor)" : "sezgisel (AI anahtari yok; operator merceginden kaba aci)"}.`);
  md.push("");

  if (toplamYeni === 0) {
    md.push("Bu hafta izlenen rakiplerde yeni bir yayin yakalanmadi.");
    md.push("");
  }

  for (const s of raporSatirlari) {
    if (!s.yeniler.length) continue;
    md.push(`## ${s.rakip.ad}`);
    if (s.rakip.not) md.push(`> ${s.rakip.not}`);
    md.push("");
    for (const y of s.yeniler) {
      const tarihEtiket = y.tarih ? ` · ${new Date(tarihMs(y.tarih) || Date.now()).toISOString().slice(0, 10)}` : "";
      md.push(`### ${y.baslik}${tarihEtiket}`);
      md.push(`- ne yayinlamis: ${y.ozet || "(feed sadece baslik verdi)"}`);
      if (y.mantik) md.push(`- mantigi: ${y.mantik}`);
      md.push(`- senin markanla uyarlama: ${y.uyarlama}`);
      md.push(`- kaynak (istersen bak): ${y.link}`);
      md.push("");
    }
  }

  // Instagram · manuel kontrol (varsayilan yol: token yok, ya da otomatik cekim bos/hata)
  if (igManuel.length) {
    md.push("## Instagram · manuel kontrol");
    md.push("");
    md.push(
      "> Instagram'in herkese acik RSS'i yok. APIFY_TOKEN vermediysen (varsayilan) ya da otomatik cekim bir sey dondurmediyse " +
        "bu hesaplari 2 dakikada elle bakarsin. Gordugunu asagidaki bosluga yapistirinca raporun tamam olur."
    );
    md.push("");
    for (const m of igManuel) {
      const h = (m.rakip.handle || "").replace(/^@+/, "");
      md.push(`### @${h} · ${igProfilUrl(h)}`);
      if (m.rakip.not) md.push(`> ${m.rakip.not}`);
      md.push("- son 1 haftada yeni gonderi var mi? (reel, carousel, sabitlenen story)");
      md.push("- hangi kampanya / format / kanca one cikmis?");
      md.push("- senin markana nasil uyarlanir? (tek cumle, kendi sistemin uzerinden)");
      md.push("- gordugunu buraya yapistir:");
      md.push("  - ");
      md.push("");
    }
  }

  // sessiz kalanlar (bu hafta hic yeni hareketi olmayan rakipler)
  const sessizler = raporSatirlari.filter((s) => !s.yeniler.length && !hatalar.find((h) => h.rakip === s.rakip.ad));
  if (sessizler.length) {
    md.push("## Bu hafta sessiz kalanlar");
    md.push("");
    for (const s of sessizler) md.push(`- ${s.rakip.ad}`);
    md.push("");
  }

  if (hatalar.length) {
    md.push("## Ulasilamayan kaynaklar");
    md.push("");
    for (const h of hatalar) md.push(`- ${h.rakip}: ${h.hata}`);
    md.push("");
  }

  md.push("---");
  md.push(`Bir sonraki rapor otomatik gelecek pazartesi olusur. Toplam izlenen kaynak: ${rakipler.length}.`);

  const raporMetni = md.join("\n");
  const raporYolu = join(RAPORLAR, `rapor-${tarih}.md`);
  writeFileSync(raporYolu, raporMetni, "utf8");

  // --- snapshot guncelle (butun gorulen linkleri biriktir) ---
  const birlesikGorulen = [...gorulenSet, ...yeniLinkler];
  writeFileSync(
    SNAPSHOT,
    JSON.stringify(
      { son_calisma: new Date().toISOString(), gorulen_linkler: [...new Set(birlesikGorulen)] },
      null,
      2
    ),
    "utf8"
  );

  console.log(`rapor yazildi: ${raporYolu}`);
  console.log(
    `yeni hareket: ${toplamYeni} · ulasilamayan: ${hatalar.length} · izlenen: ${rakipler.length} · uyarlama: ${uyarlamaModu} · instagram(oto/manuel): ${igOtomatikSayi}/${igManuel.length}`
  );

  // --- VARSAYILAN TESLIM: e-posta (yalniz --eposta verilirse) ---
  if (EPOSTA) {
    const smtp = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
    };
    if (!smtp.host || !smtp.user || !smtp.pass || !smtp.to) {
      console.error(
        "e-posta gonderilemedi: SMTP ayarlari eksik. " +
          "Gerekli ortam degiskenleri: SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_TO " +
          "(opsiyonel: SMTP_PORT=465, SMTP_FROM). Rapor yine de dosyaya yazildi: " +
          raporYolu
      );
      process.exitCode = 2;
      return;
    }
    try {
      await epostaGonder({
        ...smtp,
        subject: `Haftalik Rakip Raporu · ${tarih} (${toplamYeni} yeni hareket)`,
        text: raporMetni,
        html: raporHtmlKur(raporSatirlari, sessizler, hatalar, tarih, toplamYeni, PENCERE_GUN, uyarlamaModu, igManuel),
      });
      console.log(`rapor e-postayla gonderildi: ${smtp.to}`);
    } catch (e) {
      console.error(`e-posta gonderilemedi: ${e.message}. Rapor dosyada duruyor: ${raporYolu}`);
      process.exitCode = 2;
    }
  }
}

// Rapor govdesini basit, tiklanabilir HTML'e cevirir (e-posta icin).
function raporHtmlKur(raporSatirlari, sessizler, hatalar, tarih, toplamYeni, pencereGun, uyarlamaModu, igManuel = []) {
  const esc = (s) =>
    (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const p = [];
  p.push(`<h2>Haftalik Rakip Raporu &middot; ${tarih}</h2>`);
  p.push(`<p>Son ${pencereGun} gunde <b>${toplamYeni}</b> yeni hareket bulundu. Her oge: ozet + senin markana uyarlama onerisi. Son karar sende.</p>`);
  p.push(`<p style="color:#888;font-size:13px">Uyarlama uretimi: ${uyarlamaModu === "ai" ? "AI (marka hafizasi dosyalarindan)" : "sezgisel (operator merceginden kaba aci)"}.</p>`);
  if (toplamYeni === 0) p.push(`<p>Bu hafta izlenen rakiplerde yeni bir yayin yakalanmadi.</p>`);
  for (const s of raporSatirlari) {
    if (!s.yeniler.length) continue;
    p.push(`<h3>${esc(s.rakip.ad)}</h3>`);
    if (s.rakip.not) p.push(`<p><i>${esc(s.rakip.not)}</i></p>`);
    for (const y of s.yeniler) {
      p.push(`<div style="margin:0 0 16px 0;padding:0 0 12px 0;border-bottom:1px solid #eee">`);
      p.push(`<p style="margin:0 0 4px 0"><b>${esc(y.baslik)}</b></p>`);
      p.push(`<p style="margin:0 0 4px 0"><b>ne yayinlamis:</b> ${esc(y.ozet || "(feed sadece baslik verdi)")}</p>`);
      if (y.mantik) p.push(`<p style="margin:0 0 4px 0"><b>mantigi:</b> ${esc(y.mantik)}</p>`);
      p.push(`<p style="margin:0 0 4px 0"><b>senin markanla uyarlama:</b> ${esc(y.uyarlama)}</p>`);
      p.push(`<p style="margin:0;font-size:13px"><a href="${esc(y.link)}">kaynak (istersen bak)</a></p>`);
      p.push(`</div>`);
    }
  }
  if (igManuel.length) {
    p.push(`<h3>Instagram &middot; manuel kontrol</h3>`);
    p.push(
      `<p style="color:#888;font-size:13px">Instagram'in herkese acik RSS'i yok. APIFY_TOKEN vermediysen (varsayilan) ya da otomatik cekim bir sey dondurmediyse bu hesaplari 2 dakikada elle bakarsin.</p>`
    );
    for (const m of igManuel) {
      const h = (m.rakip.handle || "").replace(/^@+/, "");
      p.push(`<div style="margin:0 0 16px 0;padding:0 0 12px 0;border-bottom:1px solid #eee">`);
      p.push(`<p style="margin:0 0 4px 0"><b><a href="${esc(igProfilUrl(h))}">@${esc(h)}</a></b></p>`);
      if (m.rakip.not) p.push(`<p style="margin:0 0 4px 0"><i>${esc(m.rakip.not)}</i></p>`);
      p.push(
        `<ul style="margin:0;padding-left:18px">` +
          `<li>son 1 haftada yeni gonderi var mi? (reel, carousel, sabitlenen story)</li>` +
          `<li>hangi kampanya / format / kanca one cikmis?</li>` +
          `<li>senin markana nasil uyarlanir? (tek cumle, kendi sistemin uzerinden)</li>` +
          `<li>gordugunu buraya yapistir:</li>` +
          `</ul>`
      );
      p.push(`</div>`);
    }
  }
  if (sessizler.length) p.push(`<p><i>Bu hafta sessiz kalanlar:</i> ${esc(sessizler.map((s) => s.rakip.ad).join(", "))}</p>`);
  if (hatalar.length) p.push(`<p><i>Ulasilamayan:</i> ${esc(hatalar.map((h) => h.rakip).join(", "))}</p>`);
  return p.join("\n");
}

export { main };

// Dogrudan `node rakip-takip.mjs` ile calistirildiginda calisir; baska bir dosyadan
// import edildiginde (test kosumu) otomatik calismaz. eposta-gonder.mjs ile ayni desen.
if (process.argv[1] && process.argv[1].replace(/\\/g, "/").endsWith("rakip-takip.mjs")) {
  main().catch((e) => {
    console.error("beklenmedik hata:", e);
    process.exit(1);
  });
}
