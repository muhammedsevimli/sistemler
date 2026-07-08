/*
 * Satış CRM · ortak veri sunucusu (Google Apps Script Web App)
 * ------------------------------------------------------------
 * Ekip aynı veriyi görsün diye satis-crm.html buraya bağlanır. Veri tek bir
 * Google Sheet'te (bu betiğin bağlı olduğu tablo, "veri" sayfası, A1 hücresi) durur.
 *
 * Kurulum adım adım: ORTAK-KURULUM.md
 * Yayınlama (Deploy) ayarı ZORUNLU: "Execute as: Me (kendim)" + "Who has access: Anyone (herkes)".
 *   - "Execute as: Me" → betik senin Sheet'ine erişir.
 *   - "Who has access: Anyone" → ekipteki temsilciler (senin Google hesabına girmeden) kullanabilir.
 *
 * Güvenlik/tutarlılık:
 *   - Yazma işlemleri LockService ile SIRAYA alınır → iki kişi aynı anda kaydedince veri bozulmaz.
 *   - Birleştirme SUNUCUDA, müşteri bazında yapılır → farklı müşterilerde çalışan iki temsilci
 *     birbirinin kaydını EZMEZ (son-yazan yalnızca aynı müşteride geçerli, o da nadir).
 *   - Betik yalnızca kendi Sheet'ini okur/yazar; başka veriye erişmez.
 */

function doGet() {
  return json_(oku_());
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    var govde = (e && e.postData && e.postData.contents) ? e.postData.contents : "{}";
    var istek = JSON.parse(govde);
    var veri = oku_();

    switch (istek.op) {
      case "upsert":
        if (!istek.musteri || !istek.musteri.id) return json_({ ok: false, hata: "musteri/id yok" });
        var yeni = true;
        for (var i = 0; i < veri.musteriler.length; i++) {
          if (veri.musteriler[i].id === istek.musteri.id) { veri.musteriler[i] = istek.musteri; yeni = false; break; }
        }
        if (yeni) veri.musteriler.push(istek.musteri);
        break;
      case "delete":
        if (!istek.id) return json_({ ok: false, hata: "id yok" });
        veri.musteriler = veri.musteriler.filter(function (m) { return m.id !== istek.id; });
        break;
      case "temsilciler":
        veri.temsilciler = Array.isArray(istek.temsilciler) ? istek.temsilciler : [];
        break;
      case "replaceAll":
        veri = normalize_(istek.veri);
        break;
      default:
        return json_({ ok: false, hata: "bilinmeyen islem: " + istek.op });
    }

    yaz_(veri);
    return json_({ ok: true, veri: veri });
  } catch (err) {
    return json_({ ok: false, hata: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (e2) {}
  }
}

function sayfa_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName("veri");
  if (!sh) sh = ss.insertSheet("veri");
  return sh;
}

function normalize_(v) {
  if (!v || typeof v !== "object") v = {};
  if (!Array.isArray(v.musteriler)) v.musteriler = [];
  if (!Array.isArray(v.temsilciler)) v.temsilciler = [];
  return v;
}

function oku_() {
  var s = String(sayfa_().getRange("A1").getValue() || "");
  if (!s) return { temsilciler: [], musteriler: [] };
  try { return normalize_(JSON.parse(s)); } catch (err) { return { temsilciler: [], musteriler: [] }; }
}

function yaz_(v) {
  sayfa_().getRange("A1").setValue(JSON.stringify(normalize_(v)));
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
