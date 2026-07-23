# Lansman Kontrol Listesi · şablon

> Sistem bu listeyi senin ürününe göre doldurup `ciktilar/<slug>-lansman-kontrol.md` dosyasına yazar. Sen yayına almadan önce maddeleri GERÇEKTEN test edip işaretlersin. Hepsi işaretlenmeden paylaşma.

## A · Sayfa açılıyor mu
- [ ] `.html` dosyasına çift tıkladığında tarayıcıda açılıyor, bozuk kutu ya da boş alan yok.
- [ ] Telefonunda aç. Yazı taşmıyor, buton ekrana sığıyor, yatay kaydırma çıkmıyor.
- [ ] Telefonun karanlık modunu aç kapa. İki modda da yazı okunuyor.
- [ ] Sayfa başlığı (tarayıcı sekmesinde görünen yazı) doğru.

## B · Ödeme gerçekten çalışıyor mu (en kritik)
- [ ] Ödeme butonuna tıkla. Kendi ödeme sağlayıcının sayfasına gidiyor.
- [ ] Açılan sayfada ÜRÜN ADI doğru mu.
- [ ] Açılan sayfada FİYAT sayfadakiyle birebir aynı mı. Farklıysa düzelt, satmaya başlama.
- [ ] Sağlayıcı test modundaysa canlı moda al. Test linkiyle yayına çıkma.
- [ ] Bir kere kendin gerçek ödeme yap ya da sağlayıcının test kartıyla dene. Ödemenin hesabına düştüğünü gör.
- [ ] Ödeme sonrası alıcıya ne gidiyor (mail, teslimat linki, randevu) bir kere kendin gör.

## C · E-posta formu gerçekten mail düşürüyor mu
- [ ] Forma kendi e-postanı yaz, gönder.
- [ ] Kayıt sana ulaştı mı (Formspree ise mailine, Google Form ise tabloya, Klaviyo/Mailchimp ise listeye). Spam klasörüne de bak.
- [ ] Gönderdikten sonra kullanıcı ne görüyor (teşekkür sayfası ya da mesaj) bir kere kendin gör.
- [ ] Form uç noktası hâlâ `FORM_ACTION_BURAYA` yazıyorsa sayfa yayına HAZIR DEĞİL.

## D · Yazan bilgi doğru mu
- [ ] Fiyat doğru, para birimi doğru, KDV durumu yazıyor.
- [ ] İade ve iptal koşulu sayfada yazıyor ve senin gerçekten uygulayacağın koşul.
- [ ] İletişim yolu sayfada yazıyor ve o adres/numara gerçekten senin.
- [ ] Satıcı adı sayfada yazıyor.
- [ ] Sayfada uydurma yorum, uydurma sayı, uydurma rozet yok. Kanıtın yoksa kanıt bölümü de yok.
- [ ] Tarih, süre, kontenjan gibi bilgiler bugünkü gerçeğe uyuyor.

## E · Yayına alma
- [ ] Dosyayı ücretsiz bir statik hostinge sürükle bırak (Netlify Drop, Cloudflare Pages, GitHub Pages). Adres oluştu.
- [ ] Adresi başka bir cihazdan aç, çalışıyor.
- [ ] Adresi bir arkadaşına yolla, tek cümlede ne satıldığını anlıyor mu diye sor. Anlamadıysa başlığı düzelt.
- [ ] Sayfa adresini `sen/02-baglantilar.md` içindeki yayın defterine yaz.

## F · İlk 48 saat
- [ ] Formdan gelen ilk kayda cevap yaz.
- [ ] İlk ödemede teslimatın gerçekten çalıştığını doğrula.
- [ ] Gelen soruları not et, tekrar edeni sık sorulanlara ekleyip sayfayı yeniden ürettir.
