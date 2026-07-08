// apify-ig.mjs
// Instagram destegi · OPSIYONEL ikinci katman (varsayilan DEGIL).
// Sifir bagimlilik: sadece Node.js yerlesik fetch. npm YOK.
//
// Iki katmanli tasarim (SERT KURAL: son kullanici denediginde hicbir sey patlamaz):
//   1. VARSAYILAN (token yok): bu dosya hicbir sey cekmez, bos + sinyal doner.
//      Ana akis (rakip-takip.mjs) o zaman "Instagram · manuel kontrol" bolumu yazar.
//   2. OPSIYONEL (APIFY_TOKEN varsa): Apify Instagram scraper actor'unu REST ile cagirir
//      (cookie gerektirmeyen, kullanici adi kabul eden bir post scraper), donen postlari
//      rakip-takip'in bekledigi item sekline ({baslik, link, tarih, aciklama}) map'ler.
//
// Neden RSS-bridge (RSSHub/RSS-Bridge) YOK: 2026'da Instagram RSS koprusu burner sessionid
// cookie ister, kirilgan ve sik patlar. Bilincli olarak KULLANMIYORUZ. Sadece: varsayilan
// manuel + opsiyonel Apify.
//
// HATA POLITIKASI: bu dosyadaki hicbir yol THROW ETMEZ. Token yoksa / actor hata verirse /
// zaman asarsa -> { ok:false, items:[], sebep } doner ve loglar. Ana akis manuel'e duser.
//
// Ortam degiskenleri (env):
//   APIFY_TOKEN        Apify API token'in (yoksa katman kapali, manuel'e duser)
//   APIFY_IG_ACTOR     kullanilacak actor (varsayilan: apify~instagram-post-scraper)
//   APIFY_IG_RESULTS   kac post cekilecek (varsayilan: 30)
//   APIFY_TIMEOUT_MS   actor cagrisi zaman asimi ms (varsayilan: 90000)
//   APIFY_IG_INPUT     (ileri seviye) farkli bir actor icin ozel girdi JSON'u

const APIFY_TABAN = "https://api.apify.com/v2";

// Token var mi? (ana akis hangi katmana gidecegine buna gore karar verir)
export function apifyVarMi() {
  return Boolean(process.env.APIFY_TOKEN);
}

// Elle bakis icin temiz profil linki (basindaki @ atilir).
export function igProfilUrl(handle) {
  const h = (handle || "").replace(/^@+/, "").trim();
  return `https://instagram.com/${h}`;
}

// caption'in ilk cumlesini kisa bir baslik olarak al.
function ilkCumle(metin, uzunluk = 90) {
  const duz = (metin || "").replace(/\s+/g, " ").trim();
  if (!duz) return "";
  const kesim = duz.split(/(?<=[.!?])\s/)[0] || duz;
  return kesim.length <= uzunluk ? kesim : kesim.slice(0, uzunluk).replace(/\s+\S*$/, "") + "...";
}

// Tek bir Apify post kaydini rakip-takip'in item sekline map'ler.
// Alan adlari actor'e gore biraz degisebilir; savunmaci okuruz.
function postMap(p, handle) {
  const owner = p.ownerUsername || p.username || (handle || "").replace(/^@+/, "");
  const caption = (p.caption ?? p.text ?? p.title ?? "").toString();
  const kod = p.shortCode || p.shortcode || p.code || "";
  const link = p.url || p.postUrl || (kod ? `https://www.instagram.com/p/${kod}/` : "");
  const tarih = p.timestamp || p.taken_at || p.takenAt || p.date || "";
  const turHam = (p.type || p.productType || "gonderi").toString().toLowerCase();
  const turEt =
    turHam.includes("video") || turHam.includes("clip") || turHam.includes("reel")
      ? "reel/video"
      : turHam.includes("sidecar") || turHam.includes("carousel")
        ? "carousel"
        : "gonderi";
  const olcum = [];
  if (Number.isFinite(p.likesCount) && p.likesCount >= 0) olcum.push(`${p.likesCount} begeni`);
  if (Number.isFinite(p.commentsCount) && p.commentsCount >= 0) olcum.push(`${p.commentsCount} yorum`);
  const olcumEt = olcum.length ? ` [${turEt} · ${olcum.join(" · ")}]` : ` [${turEt}]`;
  const baslik = ilkCumle(caption) || `${owner} · Instagram ${turEt}`;
  const aciklama = caption
    ? caption + olcumEt
    : `${owner} Instagram'da bir ${turEt} paylasti (metin yok).${olcum.length ? ` [${olcum.join(" · ")}]` : ""}`;
  return { baslik, link, tarih, aciklama, tur: "instagram", handle: (handle || "").replace(/^@+/, "") };
}

/**
 * Bir Instagram kullanici adinin son postlarini Apify uzerinden ceker.
 * ASLA throw etmez. Token yoksa / hata / zaman asimi -> { ok:false, items:[], sebep }.
 * @param {string} handle  instagram kullanici adi (@ opsiyonel)
 * @param {{token?,actor?,limit?,timeoutMs?}} opt
 * @returns {Promise<{ok:boolean, items:Array, sebep:string}>}
 */
export async function igPostGetir(handle, opt = {}) {
  const token = opt.token || process.env.APIFY_TOKEN;
  if (!token) return { ok: false, items: [], sebep: "APIFY_TOKEN yok (varsayilan: manuel kontrol)" };

  const temizHandle = (handle || "").replace(/^@+/, "").trim();
  if (!temizHandle) return { ok: false, items: [], sebep: "handle bos" };

  const actor = opt.actor || process.env.APIFY_IG_ACTOR || "apify~instagram-post-scraper";
  const limit = Number(opt.limit || process.env.APIFY_IG_RESULTS || 30);
  const timeoutMs = Number(opt.timeoutMs || process.env.APIFY_TIMEOUT_MS || 90000);
  const url = `${APIFY_TABAN}/acts/${actor}/run-sync-get-dataset-items?token=${encodeURIComponent(token)}`;

  // Varsayilan actor (instagram-post-scraper) username[] ile beslenir; cookie gerektirmez.
  // Farkli/URL-tabanli bir actor kullanacaksan APIFY_IG_INPUT ile kendi girdini verirsin.
  let girdi = null;
  if (process.env.APIFY_IG_INPUT) {
    try {
      girdi = JSON.parse(process.env.APIFY_IG_INPUT);
    } catch {
      girdi = null; // bozuk JSON -> varsayilan girdiye dus
    }
  }
  if (!girdi || typeof girdi !== "object") {
    girdi = { username: [temizHandle], resultsLimit: limit };
  } else if (Array.isArray(girdi.username) && girdi.username.length === 0) {
    girdi.username = [temizHandle]; // sablon girdiyi bu handle ile doldur
  }

  const kontrol = new AbortController();
  const zaman = setTimeout(() => kontrol.abort(), timeoutMs);
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(girdi),
      signal: kontrol.signal,
    });
    if (!r.ok) {
      console.error(`[apify-ig] ${temizHandle}: HTTP ${r.status} (manuel kontrole dusuluyor)`);
      return { ok: false, items: [], sebep: `Apify HTTP ${r.status}` };
    }
    const veri = await r.json();
    // run-sync-get-dataset-items dogrudan bir dizi doner; savunmaci okuruz.
    const liste = Array.isArray(veri) ? veri : Array.isArray(veri?.items) ? veri.items : [];
    const items = liste
      .filter((p) => p && typeof p === "object")
      .map((p) => postMap(p, temizHandle))
      .filter((it) => it.link); // link yoksa dedupe/rapor calismaz -> ele
    return { ok: true, items, sebep: items.length ? "" : "Apify bos liste dondu" };
  } catch (e) {
    const sebep = e.name === "AbortError" ? `Apify zaman asimi (${timeoutMs}ms)` : `Apify hata: ${e.message}`;
    console.error(`[apify-ig] ${temizHandle}: ${sebep} (manuel kontrole dusuluyor)`);
    return { ok: false, items: [], sebep };
  } finally {
    clearTimeout(zaman);
  }
}
