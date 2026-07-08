# Satış CRM · Ekip / Ortak Kullanım Kurulumu

> Sistem iki modda çalışır.
> **Yerel mod (varsayılan):** `satis-crm.html`'e çift tıkla, hemen çalışır. Veri o bilgisayarda durur. Kurulum yok.
> **Ortak mod (ekip):** aşağıdaki tek seferlik ~10 dakikalık kurulumla ekip aynı veriyi görür. Müdür herkesin işini tek panoda izler. Sunucu kiralamadan, üyeliksiz, token'sız, sadece senin Google hesabın.

Teknik olman gerekmiyor. Kopyala-yapıştır ile bitiyor. Takılırsan Claude Code'a "şu adımda kaldım" de.

---

## Ne kuruyoruz (1 cümle)
Ücretsiz bir Google Sheet'i sistemin ortak deposu yapıyoruz. `satis-crm.html` bu Sheet'e bağlanıyor; ekipteki herkes aynı linke bağlanınca aynı veriyi görüyor.

---

## Adım 1 · Boş bir Google Sheet aç
- Tarayıcıda **sheets.new** yaz, Enter. Boş bir tablo açılır. Adını "Satış CRM Veri" yap (istersen).

## Adım 2 · Apps Script'i aç
- Üst menü: **Uzantılar → Apps Script** (İngilizce: Extensions → Apps Script). Yeni bir sekme açılır, içinde `Code.gs` diye boş bir dosya olur.

## Adım 3 · Kodu yapıştır
- O dosyadaki her şeyi sil.
- Paketteki **`kod-google-apps-script.gs`** dosyasının içeriğini olduğu gibi kopyala, buraya yapıştır.
- Üstteki **disket (Kaydet)** simgesine bas.

## Adım 4 · Web uygulaması olarak yayınla (Deploy)
- Sağ üstte mavi **Deploy → New deployment** (Dağıt → Yeni dağıtım).
- Dişli/tür seçiminde **Web app**'i seç.
- İki ayarı ŞÖYLE yap (ÖNEMLİ, yanlışı çalışmaz):
  - **Execute as (Çalıştıran):** `Me` (kendi Google hesabın)
  - **Who has access (Erişebilen):** `Anyone` (Herkes)
- **Deploy**'a bas. Google bir kez izin ister → kendi hesabınla **Allow / İzin ver** (kendi betiğin, güvenli).
- Sonunda bir **Web app URL** verir: `https://script.google.com/macros/s/....../exec` ile biter. **Bu linki kopyala.**

## Adım 5 · CRM'i bağla
- `satis-crm.html`'i aç → sağ üst **Ayarlar** → **Ortak veri** kutusuna o `.../exec` linkini yapıştır → **Bağlan**.
- Üstteki rozet "ortak · bağlı" olur. İlk bağlanışta bilgisayarındaki mevcut veri ortak depoya taşınır.

## Adım 6 · Ekibe dağıt
- Ekipteki herkes **aynı `satis-crm.html`** dosyasını açar (mail/klasörle paylaş) ve **Ayarlar → Ortak veri**'ye **aynı linki** yapıştırıp **Bağlan** der.
- Artık herkes aynı veriyi görür. Bir temsilci not düşünce diğerlerinde ~20 saniyede görünür (ya da sayfa yenileyince hemen). Müdür de aynı linke bağlanıp **Ay Sonu Paneli**nden herkesi izler.

---

## Güncelleme (kodu değiştirirsen)
Apps Script'te **Deploy → Manage deployments → (kalem) Edit → Version: New version → Deploy**. Link aynı kalır, bağlı herkes yeni sürümü kullanır.

## Güvenlik (oku, önemli)
- **Web app linki = şifre gibidir.** Linki olan veriyi görebilir/değiştirebilir. Sadece ekibinle paylaş, herkese açık yerde yazma.
- Veri **senin Google Drive'ında**, senin Sheet'inde durur. Üçüncü tarafa gitmiyor.
- Daha sıkı güvenlik istersen (linke ek bir gizli anahtar) Claude Code'a "CRM ortak moduna gizli anahtar ekle" de; 2 dakikalık ekleme.

## Sık sorunlar
- **"Bağlan" sonrası çalışmadı:** link `.../exec` ile mi bitiyor (sonunda `/dev` değil)? Deploy'da "Anyone" seçtin mi? İkisini kontrol et.
- **Google izin ekranı korkuttu:** kendi betiğin, kendi verin. "Advanced → Go to (proje adı)" → Allow.
- **Ekip göremiyor:** herkesin aynı `.../exec` linkini Ayarlar'a girmesi lazım; farklı link = farklı veri.

## Ortak mod istemiyorsan
Hiç uğraşma. Yerel modda kal (Ayarlar'da Ortak veri boş). Veriyi elle paylaşmak için **Ayarlar → Yedek al / Yedekten yükle** (JSON) yeterli.
