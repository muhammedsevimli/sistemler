# Test Sonucu · Satış Sayfası + Ödeme

> Sistem kurgusal bir operatörle uçtan uca çalıştırıldı. GERÇEK bir `.html` dosyası üretildi, gerçek bir tarayıcıda (Chromium) açıldı, ekran görüntüsü alındı ve otomatik denetimden geçirildi.
> Kurgusal operatör 1: **Tezgah Atölye** · ürün: Çömlek Başlangıç Kursu · 4 hafta · 4.800 TL.
> Kurgusal operatör 2 (eksik bilgi testi): **Sırma Ev Tekstili** · ürün: keten yatak örtüsü · 3.200 TL.
> Marka, kişi, adres ve linklerin tamamı kurgusaldır. Gerçek müşteri, gerçek ödeme hesabı, gerçek credential kullanılmadı.

## Sonuç: 18/18 GEÇTİ

Denetim betiği tüm sistem dosyalarını ve üretilen iki sayfayı taradı. Ham çıktı aşağıda madde madde.

| Üretilen dosya | Boyut / kanıt |
|---|---|
| `ciktilar/comlek-baslangic-kursu-satis-sayfasi.html` | 7.121 bayt, diskte var, tarayıcıda açıldı |
| `ciktilar/comlek-baslangic-kursu-metin.md` | satış metni, bölüm bölüm |
| `ciktilar/comlek-baslangic-kursu-lansman-kontrol.md` | ürüne özel doldurulmuş kontrol listesi |
| `ciktilar/test-eksik-bilgi/sirma-ev-tekstili-satis-sayfasi.html` | eksik bilgi davranışı kanıtı |
| `ciktilar/ekran-goruntusu/*.png` | 5 gerçek tarayıcı ekran görüntüsü |

---

## TEST 1 · Satış metni marka sesiyle üretildi → GEÇTİ
`sen/01-urun.md` okundu, `format/sayfa-format.md` sırası uygulandı: başlık, alt başlık, fiyat kutusu, kimin için, dert, çözüm, ne kapsıyor, sık sorulan, e-posta bloğu, alt bilgi. Metin `ciktilar/comlek-baslangic-kursu-metin.md` dosyasına yazıldı. Başlık ne satıldığını ilk cümlede söylüyor ("Hiç çamura dokunmamışlar için dört cumartesilik çömlek kursu"), slogan değil. Dil "sen" diliyle, kurumsal kalıp yok, sıfat yığını yok.

## TEST 2 · HTML gerçekten üretildi ve geçerli → GEÇTİ
- Dosya diskte: `comlek-baslangic-kursu-satis-sayfasi.html`, 7.121 bayt.
- Python `html.parser` ile etiket denetimi: **eşleşmeyen etiket 0, kapanmamış etiket 0**.
- `<!DOCTYPE html>` var, `lang="tr"` var.
- Tek dosya kanıtı: `<link>` 0, `<script>` 0, `@import` 0, dış font çağrısı 0. İnternetsiz açılır.
- Gerçek tarayıcı testi (Chromium, Playwright): sayfa `file://` üzerinden açıldı, hata vermeden render oldu, Türkçe karakterler doğru (İ, ı, ö, ü, ş, ç, ğ, â).

## TEST 3 · Form uç noktası doğru yere bağlanıyor → GEÇTİ
Sayfadaki tek `<form>` etiketinin `action` değeri: `https://formspree.io/f/ORNEKKOD` (yani `sen/02-baglantilar.md` içindeki `FORM_ACTION` satırının birebir kendisi). Tarayıcıda DOM üzerinden okundu: `action=https://formspree.io/f/ORNEKKOD`, `method=POST`, `input type=email`, `required=True`, `<label for="eposta">` eşleşiyor.

## TEST 4 · Ödeme linki doğru yere bağlanıyor → GEÇTİ
Sayfadaki iki ödeme butonunun `href` değeri: `https://buy.stripe.com/test_ORNEK_LINK` (yani `ODEME_LINKI` satırının kendisi). Tarayıcıda ölçüldü: buton yüksekliği 60 piksel, buton yazısı "kaydımı yap · 4.800 TL". Sistem hiçbir ödeme hesabı açmadı, hiçbir credential istemedi; hazır linki sayfaya bağladı.

## TEST 5 · Anti-uydurma (kanıt yoksa kanıt yok) → GEÇTİ
`sen/01-urun.md` içindeki kanıt alanı bilerek **boş** bırakıldı. Sonuç:
- Sayfanın görünen metninde "kanıt" bölümü YOK.
- Uydurma müşteri yorumu YOK, uydurma isim YOK, uydurma yıldız YOK.
- Yüzde deseni taraması (`%\d+`, `\d+%`) görünen metinde 0 sonuç verdi (CSS içindeki `width:100%` gibi teknik değerler hariç tutularak tarandı).
- "X kişi katıldı / aldı / kullandı" deseni 0 sonuç.
- Metin raporunun sonuna dürüst not düştü: "kanıt alanı boş, sayfaya kanıt bölümü konmadı; ilk dönem sonunda izinli tek cümle alınca eklenir".

## TEST 6 · Abartı vaat koruması → GEÇTİ
Yasak kelime taraması sayfada 0 sonuç: garanti, kesin sonuç, hayatın değişir, kaçırma, "son 3", %100, mutlaka kazan, katlanır, binlerce. Sayfa hiçbir sonuç vaat etmiyor, yalnız ne alacağını söylüyor. Fiyatın yanında sahte üstü çizili eski fiyat yok, sahte aciliyet yok.

## TEST 7 · Em dash denetimi → GEÇTİ
Sistem klasöründeki 13 dosyanın tamamı tarandı (CLAUDE.md, AGENTS.md, CALISTIR.md, README.md, sen/, format/, ciktilar/ dahil). **Em dash (U+2014): 0. En dash (U+2013): 0.** Ayraç olarak orta nokta (·) ve virgül kullanıldı.

## TEST 8 · Mobil + erişilebilirlik → GEÇTİ
- `<meta name="viewport" content="width=device-width, initial-scale=1">` var.
- Gerçek mobil viewport testi (390x844, dokunmatik, 2x piksel yoğunluğu): **yatay kaydırma yok** (`scrollWidth > innerWidth` false). Masaüstünde (1100x900) de yatay kaydırma yok.
- Dokunma hedefi: ödeme butonu 60 piksel yükseklik (44 piksel eşiğinin üstünde), form butonu ve e-posta alanı 52 piksel.
- Form etiketi: `<label for="eposta">` var, `input id="eposta"` ile eşleşiyor.
- Kontrast ölçümü (WCAG 2.1 formülü, AA eşiği 4.5):

| Alan | Oran |
|---|---|
| açık tema gövde yazısı | 17.23 |
| açık tema soluk yazı | 8.88 |
| koyu tema gövde yazısı | 16.59 |
| koyu tema soluk yazı | 8.73 |
| ödeme butonu yazısı | 4.91 |
| uyarı butonu yazısı | 8.31 |

Hepsi AA eşiğinin üstünde. Koyu ve açık tema `prefers-color-scheme` ile çalışıyor, ikisi de tarayıcıda ayrı ayrı render edilip görüntülendi.

## TEST 9 · Yasal asgari → GEÇTİ
Sayfada satıcı adı (Tezgah Atölye), fiyat (4.800 TL), iade ve iptal koşulu, iletişim adresi dördü birden var. Biri eksik olsaydı sistem uyaracaktı (TEST 11d bunu gösteriyor).

## TEST 10 · "Ne değil" koruması → GEÇTİ
Operatörün sunmadığı hizmetler (`sertifika`, `birebir özel ders`, `malzeme satışı`, `serbest atölye kullanımı`) sayfada 0 kez geçiyor, ima da edilmiyor. Buna karşılık "kim için değil" bilgisi (14 yaş altı alınmıyor, ileri seviye değil) sayfaya AÇIKÇA yazıldı; yanlış kişiyi eleme dürüstlüğü korundu.

## TEST 11 · Eksik bilgi davranışı (ikinci koşu) → GEÇTİ
İkinci kurgusal operatör (Sırma Ev Tekstili) ödeme linkini, form uç noktasını, iade koşulunu, sık sorulanları ve kanıtı BOŞ bıraktı. Üretilen sayfa: `ciktilar/test-eksik-bilgi/sirma-ev-tekstili-satis-sayfasi.html`, ekran görüntüsü `ciktilar/ekran-goruntusu/eksik-bilgi-uyarilari.png`.

| Boş alan | Sistemin davranışı | Doğrulama |
|---|---|---|
| ödeme linki | buton kırmızı uyarıya döndü, `ODEME_LINKI_BURAYA` yazıyor, "sayfa yayına hazır değil" diyor | `href="#"` sayfada 0 kez geçiyor, sessiz bozuk buton yok |
| form uç noktası | `action="FORM_ACTION_BURAYA"` kaldı + formun altında kırmızı uyarı: "gönderilen e-postalar hiçbir yere ulaşmaz" | metinde birebir bulundu |
| iade koşulu | uydurma koşul yazılmadı, yerine "iade koşulu girilmedi, sen yaz" uyarısı | "14 gün" ve "koşulsuz iade" ifadeleri 0 kez geçiyor |
| kanıt | bölüm hiç açılmadı | görünen metinde kanıt yok |
| sık sorulanlar | soru uydurulmadı, bölüm hiç açılmadı | görünen metinde SSS yok |

Bu sayfanın HTML'i de geçerli (etiket hatası 0), mobilde yatay kaydırma yok.

---

## Ekran görüntüleri (gerçek tarayıcı çıktısı)
`ciktilar/ekran-goruntusu/` klasöründe:
- `masaustu-acik.png` · 1100x900, açık tema
- `masaustu-koyu.png` · 1100x900, koyu tema
- `mobil-acik.png` · 390x844, tam sayfa, açık tema
- `mobil-koyu.png` · 390x844, tam sayfa, koyu tema
- `eksik-bilgi-uyarilari.png` · eksik bilgi uyarılarının göründüğü sayfa

## Test edilemeyenler (dürüst sınır)
- **Gerçek ödeme akışı:** kurgusal Stripe test linki kullanıldı, gerçek bir tahsilat yapılmadı. Sistem zaten para akışına dokunmuyor; butonun doğru adrese gitmesi test edildi, paranın hesaba düşmesi kullanıcının kendi sağlayıcı hesabında test edeceği bir şey. `lansman-kontrol.md` B bölümü bunu madde madde test ettiriyor. [test edilemedi: gerçek tahsilat, kasıtlı olarak kapsam dışı]
- **Gerçek form gönderimi:** kurgusal Formspree kodu kullanıldı, gerçek bir mail düşmedi. `action` değerinin doğru yere yazıldığı DOM üzerinden doğrulandı; mailin gerçekten düşmesi kullanıcının kendi form hesabına bağlı. `lansman-kontrol.md` C bölümü bunu test ettiriyor. [test edilemedi: gerçek uç nokta, kullanıcının kendi hesabı gerekiyor]
- **Statik hosting yayını:** dosya Netlify Drop / Cloudflare Pages / GitHub Pages'e yüklenmedi. Dosya tek parça ve dış bağımlılığı olmadığı için sürükle bırak yayına uygun; yine de canlı bir adreste test edilmedi. [test edilemedi: yayın kullanıcının hesabında yapılır]
- **Safari ve gerçek telefon:** render Chromium üzerinde mobil viewport taklidiyle test edildi. Gerçek iPhone Safari ya da Android Chrome cihazında açılmadı. [test edilemedi: fiziksel cihaz yok]
- **Sayfanın satış performansı:** bir sayfanın gerçekten satıp satmadığı ancak trafik gelince ölçülür. Sistem sayfayı kurar, satışı garanti etmez.
