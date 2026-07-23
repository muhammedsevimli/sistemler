# Bu klasör nasıl doluyor

Buraya sen elle bir şey koymuyorsun. Bu klasörü sistem dolduruyor.

`sen/02-rakipler.md` dosyasına rakiplerinin ismini (ve biliyorsan fiyat sayfası adresini) yazıyorsun. Sonra `CALISTIR.md` içindeki 1. adım komutunu Claude Code'a veriyorsun. Sistem o rakiplerin fiyat sayfalarını kendisi açıyor, paketleri ve rakamları çıkarıyor ve buraya `cekilen-YYYY-AA-GG.md` adıyla yazıyor.

## Her çekim dosyasında ne olur
- Rakip adı, kaynak URL, çekim tarihi
- Paket tablosu: paket adı, aylık fiyat, yıllık fiyat, para birimi, fiyatın neye göre arttığı, pakete dahil özellikler
- Durum etiketi: `fiyat çekildi` · `fiyat açık değil` · `kaynak yok` · `kısmen çekildi`
- Sayfa kendi içinde çelişiyorsa `çelişki notu`
- Sonda özet: kaç rakipten fiyat çekildi, kaçı fiyatını gizliyor, kaçına erişilemedi

## Uydurma yasağı burada başlıyor
Sistem yalnız sayfada GERÇEKTEN gördüğü rakamı yazar.
- Rakip fiyatını göstermiyorsa (teklif alın, demo iste): satır `fiyat açık değil` kalır. Tahmin yazılmaz. O rakip hiçbir ortalamaya girmez.
- Sayfa açılmadıysa (404, engel): satır `kaynak yok` kalır, denenen adres ve hata yazılır. O da ortalamaya girmez.
- Sayfada olmayan bir özellik pakete yazılmaz, `sayfada belirtilmemiş` denir.
- Farklı para birimleri kur uydurularak birbirine çevrilmez.

## Eski dosyalar silinmez
Her çekim ayrı tarihle durur. Üç ay sonra tekrar çalıştırdığında eski dosya yerinde kalır. Böylece rakiplerin fiyat geçmişini de görürsün: kim zam yapmış, kim paket bölmüş, kim ücretsiz katmanı daraltmış.

## Ne sıklıkta çekilir
Ayda bir yeter. Sektörün hareketliyse iki ayda bir de olur. Fiyat sayfaları sık değişmez, ama değiştiğinde sessizce değişir.
