# Satış Sayfası + Ödeme · Otomatik Okuma Kuralı

> Bu dosya, bu klasörde açtığın her Claude Code oturumunun BAŞINDA otomatik okunur.
> Sen hiçbir şey ayarlamıyorsun. Claude Code bu klasörde çalışırken bu dosyayı kendiliğinden yükler.
> Amaç: ürününü ya da hizmetini bir dosyaya yazınca, satılabilir bir sayfanın hem metnini hem de tek dosyalık çalışan HTML halini üretmek. Sayfayı herhangi bir ücretsiz statik hostinge sürükleyip bırakınca yayında olur.

## Bu sistemin duruşu (değişmez)
Bu sistem SAYFAYI kurar, PARAYA dokunmaz. Ödeme sağlayıcısı kurmaz, hesap açmaz, komisyon ayarlamaz, kart bilgisi işlemez, hiçbir credential (kullanıcı adı, şifre, API anahtarı) istemez. Sen zaten aldığın hazır ödeme linkini (Stripe Payment Link, Gumroad, Lemon Squeezy, Shopify, iyzico link vb.) tek satırda dosyaya yazarsın, sistem onu sayfadaki butona bağlar. E-posta toplama da aynı mantık: kendi form uç noktanı (Formspree, Google Form, Klaviyo, Mailchimp gömme) tek satırda verirsin, sistem forma bağlar. Para akışı ve mail listesi senin hesabında kalır, sistem sadece sayfayı yazar.

## Sistem ne yapıyor (üç faz)
1. **Metin (satış yazısı):** `sen/01-urun.md` dosyasını okur. Ürünün ne olduğunu, kime olduğunu, hangi derde çare olduğunu, fiyatını, kanıtını okur ve satış metnini yazar: başlık, alt başlık, kimin için, dert, çözüm, ne kapsıyor, kanıt, fiyat, sık sorulan, iade ve iletişim, CTA. Metni `ciktilar/<slug>-metin.md` dosyasına yazar.
2. **Sayfa (tek dosya HTML):** `format/sablon.html` iskeletini alır, metni ve `sen/02-baglantilar.md`'deki form uç noktasıyla ödeme linkini yerine koyar, `ciktilar/<slug>-satis-sayfasi.html` dosyasını üretir. Bağımlılık yok, build yok, internet olmadan da açılır (tek dosya, dışarıdan font/script çekmez).
3. **Lansman kontrol listesi:** `format/lansman-kontrol.md` listesini o ürüne göre doldurup `ciktilar/<slug>-lansman-kontrol.md` dosyasına yazar. Yayına almadan önce tek tek işaretlersin.

## FAZ 1 · Satış metni istendiğinde şu dosyaları SIRAYLA oku (zorunlu)
1. `sen/01-urun.md` · ürün ne, kime, hangi dert, ne kapsıyor, fiyat, kanıt, iade, iletişim, ne DEĞİL.
2. `sen/02-baglantilar.md` · form uç noktası, ödeme linki, buton yazıları, renk.
3. `format/sayfa-format.md` · sayfanın bölüm sırası ve her bölümün yazım kuralı.

Bu dosyaları okumadan üretme. İşe başlarken önce "ürün + bağlantılar + format okundu" de.

### Eksik bilgi kuralı (en sert kural)
`sen/01-urun.md` içinde bir alan BOŞSA o bölümü UYDURMA.
- Kanıt yoksa: kanıt bölümünü sayfaya HİÇ KOYMA. Uydurma müşteri yorumu, uydurma yıldız, uydurma "300 kişi kullandı", uydurma "%40 arttı" YAZMA. Metin raporunun sonunda "kanıt alanı boş, sayfaya kanıt bölümü konmadı; ilk müşterilerden bir cümle alınca şuraya eklenir" diye yaz.
- Fiyat yoksa: fiyat yerine "fiyat girilmedi" uyarısı ver ve sayfayı fiyatsız üretme, üretmeden önce sor.
- İade politikası yoksa: uydurma ("14 gün koşulsuz iade" gibi) YAZMA, "iade koşulunu sen yazmalısın" uyarısı ver.
- İletişim yoksa: sayfa yayınlanamaz, uyar.
- Genel kural: **dosyada yazmayan hiçbir bilgi sayfaya girmez.** Emin değilsen "bu bilgi dosyada yok" de.

### Ne DEĞİL koruması
`sen/01-urun.md` içindeki "ne DEĞİL / sunmadıkların" satırlarını oku. Sayfa, operatörün sunmadığı hiçbir şeyi ima etmez. Örnek: operatör "birebir görüşme vermiyorum" yazdıysa metinde "istediğin an bana ulaş, birlikte bakalım" gibi bir cümle KURMA.

### Dil ve ses kuralları (satış metni)
- Sade Türkçe, konuşur gibi. Okuyan kişi teknik değil.
- **Em dash (uzun tire) yok.** Ayraç gerekirse nokta, virgül, iki nokta, orta nokta (·).
- **Abartı vaat yok:** "garanti", "kesin sonuç", "%X kazanç garantisi", "hayatın değişir", "kaçırma", "son 3 kontenjan" (gerçekten öyle değilse) yasak. Aciliyet ancak GERÇEKSE ve dosyada yazıyorsa yazılır.
- **Motivasyon dili yok.** Sayfa soğukkanlı ve net konuşur.
- **"Olay X değil Y" tezat kalıbı yok.** Tezatı düz kur.
- Gelir vaadi ve gelir rakamı flexing yok.
- Sağlık, finans, hukuk gibi alanlarda sonuç vaadi yazma; "eğitim/bilgilendirme amaçlıdır" notu ekle.
- İkinci tekil ("sen") kullan, kurumsal dil kurma.

## FAZ 2 · HTML sayfa üretimi
`format/sablon.html` dosyasını oku ve şu yer tutucuları doldur:

| Yer tutucu | Nereden gelir |
|---|---|
| `{{BASLIK}}` | metnin ana başlığı |
| `{{ALT_BASLIK}}` | tek cümlelik açıklama |
| `{{MARKA}}` | `sen/01-urun.md` marka/satıcı adı |
| `{{KIMIN_ICIN}}` | kim için maddeleri (liste) |
| `{{DERT}}` | dert paragrafı |
| `{{COZUM}}` | çözüm paragrafı |
| `{{KAPSAM}}` | ne kapsıyor maddeleri (liste) |
| `{{KANIT}}` | kanıt bloğu. Kanıt yoksa bu bloğun TAMAMI silinir |
| `{{FIYAT}}` · `{{FIYAT_NOTU}}` | fiyat ve tek satır not (ör. KDV dahil, tek seferlik) |
| `{{SSS}}` | sık sorulanlar (soru + cevap) |
| `{{IADE}}` · `{{ILETISIM}}` | iade koşulu ve iletişim satırı |
| `{{ODEME_LINKI}}` | `sen/02-baglantilar.md` içindeki ödeme linki, `href` içine |
| `{{ODEME_BUTON}}` | ödeme butonunun yazısı |
| `{{FORM_ACTION}}` | `sen/02-baglantilar.md` içindeki form uç noktası, `<form action>` içine |
| `{{FORM_BASLIK}}` · `{{FORM_NOT}}` | e-posta bloğunun başlığı ve tek satır notu |
| `{{VURGU_RENK}}` | marka vurgu rengi (verilmediyse şablon varsayılanı kalır) |

Kurallar:
- Üretilen dosya TEK dosya olacak. Dış CSS, dış JavaScript, dış font, dış görsel ÇEKME. `<style>` sayfanın içinde durur.
- `<meta name="viewport" content="width=device-width, initial-scale=1">` her zaman kalır (mobil uyum).
- Koyu/açık tema uyumu `prefers-color-scheme` ile şablonda hazır, silme.
- Ödeme linki verilmemişse butonun `href`'ini `#` yapma; butonu `ODEME_LINKI_BURAYA` yazan görünür bir uyarı halinde bırak ki kullanıcı unutmasın.
- Form uç noktası verilmemişse `action="FORM_ACTION_BURAYA"` bırak ve sayfanın altına görünür bir "form bağlanmadı" notu koy.
- Sayfada takip kodu, analytics, çerez, üçüncü taraf script YOK (kullanıcı sonra kendisi ekler).
- Sayfa metninde em dash yok.

Sayfayı `ciktilar/<slug>-satis-sayfasi.html` olarak yaz. `<slug>` = ürün adının küçük harfli, boşluksuz, Türkçe karakterleri sadeleştirilmiş hali.

## FAZ 3 · Lansman kontrol listesi
`format/lansman-kontrol.md` listesini ürüne özel doldur (form uç noktasının adı, ödeme sağlayıcısının adı, fiyat, iade satırı) ve `ciktilar/<slug>-lansman-kontrol.md` dosyasına yaz. Liste, kullanıcının yayına almadan önce GERÇEKTEN test edeceği maddelerden oluşur; "her şey hazır" deme, test ettirt.

## Değişmez üretim kuralları
- **Bilgi UYDURMA.** Dosyada olmayan özellik, sayı, yorum, müşteri, kurum, ödül, sertifika sayfaya girmez.
- **Kanıt uydurma yasağı ayrıca geçerli.** Uydurma yorum, uydurma isim, uydurma yüzde, uydurma "X kişi aldı" yok. Kanıt yoksa bölüm yok.
- **Abartı vaat yasağı.** Garanti, kesin sonuç, "bu sayfa satışını katlar" gibi cümle yok.
- **Credential isteme.** Ödeme sağlayıcı hesabı, API anahtarı, panel şifresi asla istenmez. Sistem yalnız hazır bir linki sayfaya bağlar.
- **Fiyat ve para birimi dosyada yazdığı gibi yazılır**, indirim uydurulmaz, üstü çizili sahte eski fiyat konmaz.
- **Em dash (uzun tire) çıktının hiçbir yerinde yok:** ne metinde, ne HTML'de, ne kontrol listesinde.
- **Yasal asgari:** sayfada satıcı adı, fiyat, iade/iptal koşulu ve iletişim yolu bulunur. Biri eksikse sistem uyarır.
- **Erişilebilirlik asgarisi:** metin ile arka plan kontrastı düşük olmaz, buton en az 44 piksel yüksekliğinde, form alanının `<label>` etiketi olur, sayfa dili `lang="tr"`.

## Çıktı nereye yazılır
Her koşuda `ciktilar/` klasörüne üç dosya:
- `ciktilar/<slug>-metin.md` · satış metni (bölüm bölüm, düzenlenebilir)
- `ciktilar/<slug>-satis-sayfasi.html` · çift tıkla açılan tek dosyalık sayfa
- `ciktilar/<slug>-lansman-kontrol.md` · yayın öncesi test listesi

## Kalıcı hafıza
Ürünü güncellersen `sen/01-urun.md`'yi güncelle, sayfayı yeniden ürettir. Yayına aldığın sayfanın adresini ve yayın tarihini `sen/02-baglantilar.md` en altındaki "yayın defteri" bölümüne yaz. Bir başlık ya da fiyat değişikliğinden sonra ne olduğunu da oraya not et; sonraki sayfalar bu defterden beslenir.
