# Bu klasörü SİSTEM dolduruyor (sen kopyalamıyorsun)

> `cozumleme/` klasörüne sen elle bir şey koymuyorsun. Adım 1'i çalıştırınca sistem hedef siteyi kendisi geziyor ve okuduklarını buraya yazıyor.
> Her koşu tek dosya: `cozumleme-YYYY-AA-GG.md`.

## Sistem ne yapıyor
`sen/02-hedef.md`'deki URL'i alıyor, Claude Code'un web araçlarıyla (WebFetch + WebSearch) şu sayfaları sırayla deniyor:

1. Ana sayfa · ürün ne yapıyor, kime
2. Özellikler sayfası · `/features`, `/product`, `/ozellikler`
3. Fiyat sayfası · `/pricing`, `/fiyat`, `/plans`
4. Dokümantasyon · `/docs`, `/help`, `/api`
5. Lisans / kullanım şartı (varsa)

Her sayfadan gerçekten yazan bilgiyi çekiyor, kaynak linkiyle bu klasöre yazıyor.

## Sistemin her bilgi için yazdığı şey
- Bilgi (sayfada yazdığı gibi, kısaltılmış)
- Kaynak URL
- Hangi başlığa girdiği (ürün tanımı, özellik, akış, veri ipucu, fiyat, lisans)

## Erişilemeyen sayfa ne oluyor
Sistem sayfayı çekemezse (404, giriş istiyor, bot koruması, zaman aşımı) tarama künyesine "erişilemedi" yazıyor ve sebebini koyuyor. O sayfadan geleceğini varsaydığı bilgiyi UYDURMUYOR. Fiyat sayfasına erişilemediyse çıktıda fiyat rakamı olmaz, "fiyat bilgisi alınamadı" yazar.

## Dürüst sınır
- Yalnız herkese açık sayfalar okunur. Giriş isteyen, ücretli duvar arkasındaki, kayıt gerektiren sayfa okunmaz.
- Bazı siteler otomatik okumaya kapalıdır (bot koruması, 403). Sistem dener, açamazsa açamadığını yazar.
- Buradaki her şey bir DIŞ okumadır. Ürünün gerçek veritabanı, gerçek kullanıcı sayısı, gerçek kârı sitede yazmaz.
- Sitenin tasarımı, metni ve görselleri kopyalanmaz. Yalnız ne yaptığı okunur.
