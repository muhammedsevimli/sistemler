# 02 · Hedef (hangi ürünün mantığını çıkarıyoruz)

> Sistemin senden istediği ikinci ve son şey: bir URL. Gerisini sistem kendisi geziyor.
> Tek bir ürün ver. İki ürünü aynı anda verirsen plan bulanıklaşır; ikinciyi ayrı koşuda incele.

## Hedef URL
<ör. https://ornek-urun.com>

## Neyi merak ediyorsun (isteğe bağlı, tarama odağını keskinleştirir)
Boş bırakırsan sistem beş başlığı da standart çıkarır. Yazarsan o başlığa daha çok kazar.
- <ör. bu ürün ilk 5 dakikada kullanıcıya ne gösteriyor da kalıyorlar.>
- <ör. fiyatı neye göre artıyor, benim müşterimde bu ölçü çalışır mı.>
- <ör. arkada hangi verileri tutuyor olabilir.>

## Hangi sayfalar taransın (sistem bunları kendisi dener)
Sistem aşağıdaki sırayı otomatik izler. Elinde doğrudan link varsa buraya yapıştır, sistem tahmin etmekle uğraşmaz.
- Ana sayfa: <URL>
- Özellikler: <URL ya da boş bırak, sistem /features, /product, /ozellikler dener>
- Fiyat: <URL ya da boş bırak, sistem /pricing, /fiyat, /plans dener>
- Dokümantasyon: <URL ya da boş bırak, sistem /docs, /help, /api dener>

## Tarama sınırı (sistem bu kurallara uyar)
- Yalnız herkese açık sayfalar. Giriş isteyen, ücretli duvar arkasındaki, kayıt gerektiren sayfa taranmaz.
- `robots.txt` ile kapatılmış ya da erişimi reddedilen sayfa taranmaz, "erişilemedi" diye işaretlenir.
- Sitenin tasarımı, metni, görselleri kopyalanmaz. Yalnız ne yaptığı okunur.

## İncelenenler defteri (kalıcı hafıza · sistem doldurur, sen de ekleyebilirsin)
Her incelemeden sonra tek satır. İkinci üründen itibaren sistem burayı da okur ve tekrar eden desenleri gösterir.

| Tarih | Ürün / URL | Aldığım fikir | Almadığım şey | Karar |
|---|---|---|---|---|
| <2026-07-24> | <ornek-urun.com> | <ör. ilk değer anını kayıttan önce gösteriyor> | <ör. ekip yönetimi, v1'de gereksiz> | <ör. kendi sürümüme başlıyorum> |
