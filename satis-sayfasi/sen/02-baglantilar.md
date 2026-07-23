# 02 · Bağlantılar (form uç noktası + ödeme linki)

> Burası sistemin sayfaya bağlayacağı iki satır. Sistem hesap açmıyor, ödeme sağlayıcısı kurmuyor, senden şifre ya da API anahtarı istemiyor. Sen hazır linkini yapıştırıyorsun, sistem sayfadaki forma ve butona bağlıyor.
> Aşağıdaki değerler KURGUSAL örnektir. Kendi linkini yapıştırırken üzerine yaz.

---

## E-posta toplama · form uç noktası

Tek satırda, formun gideceği adres. Doldurmadıysan sistem `FORM_ACTION_BURAYA` bırakır ve sayfaya görünür bir uyarı koyar.

```text
FORM_ACTION: https://formspree.io/f/ORNEKKOD
```

Nereden alınır (ücretsiz katmandan başlayarak):

| Yol | Ne yaparsın | Ne alırsın |
|---|---|---|
| Formspree | formspree.io'da ücretsiz hesap aç, yeni form oluştur | `https://formspree.io/f/xxxxxxx` adresi. Gelen her kayıt mailine düşer |
| Google Form | Google Form aç, tek soru "e-posta", Gönder, `<>` ikonundan gömme kodunu al | Gömülü form. Bu durumda `FORM_GOMME` satırına gömme kodunu yapıştır |
| Klaviyo / Mailchimp | listenin gömülü form kodunu al | Gömme kodu. Aynı şekilde `FORM_GOMME` satırına |

Google Form ya da Klaviyo gömme kodu kullanacaksan `FORM_ACTION` satırını boş bırak ve gömme kodunu buraya yapıştır:

```text
FORM_GOMME: (boş)
```

Form alanı yazıları:

```text
FORM_BASLIK: kontenjan açılınca haber vereyim
FORM_NOT: sadece yeni dönem tarihini yazıyorum, başka mail göndermiyorum
FORM_BUTON: haber ver
```

---

## Ödeme · hazır ödeme linki

Tek satırda, butonun gideceği adres. Doldurmadıysan sistem butonu `ODEME_LINKI_BURAYA` yazan görünür bir uyarı olarak bırakır.

```text
ODEME_LINKI: https://buy.stripe.com/test_ORNEK_LINK
ODEME_BUTON: kaydımı yap · 4.800 TL
```

Nereden alınır (sistem bunlardan hiçbirini senin yerine açmaz, sen bir kere açarsın):

| Sağlayıcı | Ne için uygun | Nasıl link alınır |
|---|---|---|
| Stripe Payment Link | yurt dışı kart, dijital ürün ve hizmet | Stripe panelinde Payment links, ürünü ve fiyatı gir, linki kopyala |
| Gumroad | dijital ürün, şablon, e-kitap | ürünü oluştur, ürün sayfasının linkini kopyala |
| Lemon Squeezy | dijital ürün, abonelik | ürün oluştur, checkout linkini kopyala |
| Shopify | fiziksel ürün, kargolu satış | ürünü oluştur, ürün linkini ya da checkout linkini kopyala |
| iyzico link ile ödeme | Türkiye kartları, TL tahsilat | panelde ödeme linki oluştur, tutarı gir, linki kopyala |

> Sistem para akışına dokunmaz. Tahsilat, komisyon, iade ve fatura tamamen senin sağlayıcı hesabında yürür. Sayfa yalnızca kullanıcıyı o linke götürür.

---

## Görünüm (opsiyonel)

```text
VURGU_RENK: #b4552f
MARKA_UST_YAZI: Tezgah Atölye
```

Renk vermezsen şablonun varsayılan rengi kalır.

---

## Yayın defteri (sayfayı yayına aldıkça buraya yaz)

| Tarih | Sayfa adresi | Not |
|---|---|---|
| (örnek) 2026-07-25 | tezgahatolye.example/comlek | ilk yayın, başlıkta "dört cumartesi" vurgusu |
