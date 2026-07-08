// uyarla.mjs
// Rakibin yeni her icerigini OZETLER ve "senin markanla su aciyla uyarlanir" onerisi uretir.
// Bu, sistemin yeni kalbidir: rapor artik link yigini degil, her ogenin ozeti + uyarlama onerisi.
// Son karar her zaman Muhammed'de; sistem sadece hazir bir baslangic acisi verir.
//
// Iki mod (otomatik secilir):
//   1. AI modu  (AI_API_KEY env varsa): marka hafizasi dosyalarini (marka + kitle + ses) baglam
//      olarak verip, OpenAI-uyumlu bir sohbet API'sinden {ozet, mantik, uyarlama} ister.
//      AI_API_URL / AI_MODEL ile herhangi bir OpenAI-uyumlu saglayici (OpenAI, OpenRouter,
//      yerel Ollama, vb.) calisir. Sifir npm paketi; sadece yerlesik fetch.
//   2. Sezgisel (heuristik) mod  (anahtar yoksa): ozet dogrudan feed'in kendi aciklamasindan
//      cikarilir; uyarlama, icerigi 5 operator merceginden (satis, sistem, zevk, karar
//      yorgunlugu, owned demand) birine kaba eslestirip hazir bir aci + kopyala-yapistir
//      AI komutu onerir. Internet ya da anahtar gerektirmez, her zaman bir cikti verir.
//
// Gizlilik: marka hafizasi dosyalari TEMSILIDIR. Gercek musteri verisi / ozel anahtar burada tutulmaz.

import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

// --- marka hafizasi baglami: marka-hafizasi/ klasorundeki tum .md dosyalarini oku ---
export function markaHafizasiOku(kok) {
  const dizin = join(kok, "marka-hafizasi");
  if (!existsSync(dizin)) return "";
  const parcalar = [];
  for (const dosya of readdirSync(dizin)) {
    if (!dosya.endsWith(".md")) continue;
    try {
      const govde = readFileSync(join(dizin, dosya), "utf8").trim();
      if (govde) parcalar.push(`# ${dosya}\n${govde}`);
    } catch {
      // dosya okunamazsa atla
    }
  }
  // baglami makul tut (uzun dosyalarda ilk ~4000 karakter yeter)
  return parcalar.join("\n\n").slice(0, 4000);
}

// --- 5 operator merceği: kaba anahtar-kelime eslestirmesi (sezgisel mod) ---
const MERCEKLER = [
  { ad: "satış", anahtarlar: ["fiyat", "kampanya", "indirim", "satis", "satış", "teklif", "promosyon", "sepet", "sale", "discount", "offer"] },
  { ad: "sistem", anahtarlar: ["otomasyon", "workflow", "sistem", "entegrasyon", "surec", "süreç", "araç", "arac", "tool", "automation", "ai", "yapay zeka"] },
  { ad: "zevk (taste)", anahtarlar: ["tasarim", "tasarım", "marka", "gorsel", "görsel", "estetik", "kalite", "design", "brand", "rebrand"] },
  { ad: "karar yorgunluğu", anahtarlar: ["sec", "seç", "karar", "karmasa", "karmaşa", "basit", "kolay", "rehber", "kılavuz", "guide", "how to", "nasil", "nasıl"] },
  { ad: "owned demand", anahtarlar: ["topluluk", "email", "e-posta", "liste", "abone", "icerik", "içerik", "takipci", "takipçi", "newsletter", "community", "webinar", "etkinlik"] },
];

function mercekBul(metin) {
  const alt = (metin || "").toLowerCase();
  let enIyi = null;
  let enCok = 0;
  for (const m of MERCEKLER) {
    const say = m.anahtarlar.reduce((n, k) => (alt.includes(k) ? n + 1 : n), 0);
    if (say > enCok) { enCok = say; enIyi = m.ad; }
  }
  return enIyi || "sistem"; // eslesme yoksa markanin omurgasi: sistem
}

// feed aciklamasini duz metne indir, makul uzunlukta kes
function ozetKes(s, uzunluk = 300) {
  const duz = (s || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (duz.length <= uzunluk) return duz;
  return duz.slice(0, uzunluk).replace(/\s+\S*$/, "") + "...";
}

// --- Sezgisel (heuristik) uyarlama: anahtar yoksa her zaman calisir ---
export function uyarlaHeuristik(item) {
  const kaynakOzet = ozetKes(item.aciklama) || item.baslik;
  const mercek = mercekBul(`${item.baslik} ${item.aciklama || ""}`);
  const uyarlama =
    `bu icerik "${mercek}" mercegine oturuyor. senin markanda su aciyla bir versiyonu olabilir: ` +
    `rakibin yaptigini "ben bunu kendi isimde nasil kurardim/kullanirdim" sorusuyla ele al, ` +
    `haber degil kendi kurdugun sistem uzerinden anlat. ` +
    `hazir komut: marka + kitle + ses dosyalarini bir AI'a ver, sonra "su rakip sunu yayinlamis: '${item.baslik}'. ` +
    `bunu benim sesimle, ${mercek} acisindan, kendi sistemim uzerinden anlatan bir icerik acisi oner" de.`;
  return {
    ozet: kaynakOzet,
    mantik: "", // sezgisel modda ayri mantik cikarilmaz; ozet + aci yeterli
    uyarlama,
    kaynak: "heuristik",
  };
}

// --- AI uyarlama: marka hafizasini baglam verip {ozet, mantik, uyarlama} ister ---
export async function uyarlaAI(item, markaBaglam, cfg) {
  const url = cfg.url || process.env.AI_API_URL || "https://api.openai.com/v1/chat/completions";
  const key = cfg.key || process.env.AI_API_KEY;
  const model = cfg.model || process.env.AI_MODEL || "gpt-4o-mini";
  if (!key) throw new Error("AI_API_KEY yok");

  const sistem =
    "Sen bir Turkce icerik stratejistisin. Sana bir markanin hafiza dosyalari (marka kimligi, " +
    "kitlesi, ses kurallari) ve bir RAKIBIN yeni yayinladigi bir icerik verilecek. Gorevin: " +
    "(1) icerigin kisa ozeti, (2) rakibin bunu neden yapmis olabileceginin mantigi, (3) BU markanin " +
    "kendi sesiyle ve acisiyla bu konuya nasil girebilecegine dair somut bir uyarlama onerisi. " +
    "Ses kurallarina uy: em dash (uzun tire) kullanma, 'X degil Y' kalibi kurma, motivasyon dili ve " +
    "gelir ovunmesi yok, uydurma isim yok. Rakibi kopyalamayi degil, kendi sistemi uzerinden " +
    "yeniden yorumlamayi oner. SADECE su JSON'u don, baska hicbir sey yazma: " +
    '{"ozet": "...", "mantik": "...", "uyarlama": "..."}';

  const kullanici =
    `MARKA HAFIZASI:\n${markaBaglam || "(hafiza dosyasi verilmedi; genel operator-founder bakisi kullan)"}\n\n` +
    `RAKIP: ${item.rakipAd || "bilinmeyen"}\n` +
    `RAKIBIN YENI ICERIGI (baslik): ${item.baslik}\n` +
    `ICERIK OZETI/METNI: ${ozetKes(item.aciklama, 800) || "(feed sadece baslik verdi)"}\n\n` +
    `Yukaridaki JSON semasiyla cevap ver.`;

  const govde = {
    model,
    messages: [
      { role: "system", content: sistem },
      { role: "user", content: kullanici },
    ],
    temperature: 0.4,
    response_format: { type: "json_object" },
  };

  const r = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
    body: JSON.stringify(govde),
  });
  if (!r.ok) throw new Error(`AI HTTP ${r.status}`);
  const veri = await r.json();
  const icerik = veri?.choices?.[0]?.message?.content;
  if (!icerik) throw new Error("AI bos cevap");
  let cozum;
  try {
    cozum = JSON.parse(icerik);
  } catch {
    // bazen model JSON'u metne gomer; ilk { ... } blogunu cek
    const m = icerik.match(/\{[\s\S]*\}/);
    if (!m) throw new Error("AI JSON cozulemedi");
    cozum = JSON.parse(m[0]);
  }
  return {
    ozet: (cozum.ozet || "").trim() || ozetKes(item.aciklama) || item.baslik,
    mantik: (cozum.mantik || "").trim(),
    uyarlama: (cozum.uyarlama || "").trim(),
    kaynak: "ai",
  };
}

// --- Tek giris noktasi: AI dene, olmazsa sezgisele dus ---
export async function uyarla(item, markaBaglam, cfg = {}) {
  const key = cfg.key || process.env.AI_API_KEY;
  if (key) {
    try {
      return await uyarlaAI(item, markaBaglam, cfg);
    } catch (e) {
      // AI patlarsa sistem durmaz; sezgiselle devam eder ve nedeni not duser.
      const h = uyarlaHeuristik(item);
      h.kaynak = `heuristik (AI hatasi: ${e.message})`;
      return h;
    }
  }
  return uyarlaHeuristik(item);
}
