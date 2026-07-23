# Lansman Kontrol Listesi · Çömlek Başlangıç Kursu (Tezgah Atölye)

> Sayfa: `comlek-baslangic-kursu-satis-sayfasi.html` · Fiyat: 4.800 TL · Ödeme: Stripe Payment Link · Form: Formspree
> Maddeleri gerçekten test edip işaretle. Hepsi işaretlenmeden sayfayı kimseye yollama.

## A · Sayfa açılıyor mu
- [ ] `comlek-baslangic-kursu-satis-sayfasi.html` dosyasına çift tıkladığında tarayıcıda açılıyor.
- [ ] Telefonunda aç. "Hiç çamura dokunmamışlar için dört cumartesilik çömlek kursu" başlığı taşmıyor, ödeme butonu ekrana sığıyor, yatay kaydırma yok.
- [ ] Telefonun karanlık modunu aç kapa. İki modda da yazı okunuyor.
- [ ] Sekmede görünen başlık doğru: "Hiç çamura dokunmamışlar için dört cumartesilik çömlek kursu · Tezgah Atölye".

## B · Ödeme gerçekten çalışıyor mu (en kritik)
- [ ] "kaydımı yap · 4.800 TL" butonuna tıkla. Stripe ödeme sayfasına gidiyor.
- [ ] Açılan Stripe sayfasında ürün adı "Çömlek Başlangıç Kursu · 4 hafta" yazıyor.
- [ ] Açılan sayfada tutar 4.800 TL. Farklıysa Stripe tarafındaki fiyatı düzelt, satmaya başlama.
- [ ] Link şu an test linki (`buy.stripe.com/test_...`). CANLI linkle değiştirmeden yayına çıkma.
- [ ] Stripe test kartıyla bir kayıt dene, ödemenin panelde göründüğünü gör.
- [ ] Ödemeden sonra kişiye ne gidiyor (kayıt onayı maili, kurs tarihi, adres) bir kere kendin gör.

## C · E-posta formu gerçekten mail düşürüyor mu
- [ ] Formspree formuna kendi e-postanı yaz, "haber ver"e bas.
- [ ] Kayıt Formspree hesabındaki mail adresine düştü mü. Spam klasörüne de bak.
- [ ] Gönderdikten sonra kullanıcının gördüğü teşekkür ekranını bir kere kendin gör.
- [ ] Form adresi hâlâ `ORNEKKOD` içeriyorsa sayfa yayına HAZIR DEĞİL, kendi form kodunla değiştir.

## D · Yazan bilgi doğru mu
- [ ] Fiyat 4.800 TL, "KDV dahil" notu doğru.
- [ ] İade koşulu (7 gün kuralı, ilk hafta sonrası kalan 3 hafta iadesi) gerçekten uygulayacağın koşul.
- [ ] İletişim adresi gerçek. Şu an `merhaba@tezgahatolye.example` yazıyor, kendi adresinle değiştir.
- [ ] Satıcı adı sayfada yazıyor.
- [ ] Sayfada uydurma katılımcı yorumu, uydurma sayı, uydurma sertifika yok. Kanıt alanın boş olduğu için kanıt bölümü de yok.
- [ ] Kurs tarihleri ve saat (cumartesi 10:00 ile 13:00) bu dönem için doğru.
- [ ] Kontenjan 8 kişi gerçekten 8 kişi. Sayfada yazan sayı ile atölyedeki torna sayısı uyuşuyor.

## E · Yayına alma
- [ ] `.html` dosyasını ücretsiz statik hostinge sürükle bırak (Netlify Drop en hızlısı, Cloudflare Pages ve GitHub Pages de olur). Adres oluştu.
- [ ] Adresi başka bir cihazdan aç, çalışıyor.
- [ ] Adresi bir arkadaşına yolla, tek cümlede ne satıldığını anlıyor mu diye sor. Anlamadıysa başlığı düzelt.
- [ ] Sayfa adresini `sen/02-baglantilar.md` yayın defterine yaz.

## F · İlk 48 saat
- [ ] Formdan gelen ilk kayda cevap yaz.
- [ ] İlk ödemede kayıt onayının gerçekten gittiğini doğrula.
- [ ] Gelen soruları not et. Tekrar eden soru varsa `sen/01-urun.md` sık sorulanlara ekle, sayfayı yeniden ürettir.
- [ ] İlk dönem bitince bir katılımcıdan izinli tek cümle al, kanıt alanına yaz, sayfayı yeniden ürettir.
