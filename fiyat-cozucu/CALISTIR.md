# ÇALIŞTIR · İki Komut

> Fiyatlama iki adım. Bu dosyayı açıp ilgili komutu kopyala, Claude Code'a yapıştır.
> Sen fiyat yapıştırmıyorsun. Rakiplerinin ismini `sen/02-rakipler.md` dosyasına bir kere yazarsın, sistem fiyat sayfalarını kendisi açar.
> Claude Code `CLAUDE.md` sayesinde ürün + rakip + kural + format dosyalarını zaten okuyacak.

## Önce (bir kereye mahsus, 10 dakika)
1. `sen/01-urun.md` dosyasını aç, örnek içeriği sil, kendi ürününü yaz. En önemli üç yer: **maliyetin**, **kime sattığın**, **yapmadıkların**.
2. `sen/02-rakipler.md` dosyasına rakiplerinin ismini yaz. URL biliyorsan ekle, bilmiyorsan sadece isim yeter, sistem doğru sayfayı arar.
3. Türkiye'ye satıyorsan B bölümüne en az iki tane **TL fiyatını herkese açık gösteren** yerli ürün ekle. TL bandı ve KDV gösterimi oradan okunuyor.

## Adım 1 · Rakip fiyatlarını çek (kopyala)

```
rakiplerimin fiyatlarını çek.

kurallar:
- sen/01-urun.md ve sen/02-rakipler.md dosyalarını oku.
- her rakibin fiyat sayfasını WebFetch ile kendin aç. url yoksa ya da 404 dönerse WebSearch ile doğru fiyat sayfasını bul, sonra tekrar çek. bulduğun doğru url'yi sen/02-rakipler.md'ye geri yaz.
- her paket için şunları aynen çıkar: paket adı, fiyat rakamı, para birimi, aylık ve yıllık ayrı ayrı, fiyatın neye göre arttığı (koltuk / kullanıcı / hacim / takvim / şube / sabit), pakete dahil özellikler, ücretsiz katman var mı, deneme süresi.
- fiyatını göstermeyen rakip için rakam uydurma. "fiyat açık değil" yaz. o rakip hiçbir ortalamaya girmesin.
- sayfaya erişemezsen "kaynak yok" yaz, denediğin adresi ve hatayı yaz. o da ortalamaya girmesin.
- sayfada geçmeyen özelliği pakete yazma, "sayfada belirtilmemiş" de.
- farklı para birimlerini birbirine çevirme, kur uydurma.
- sayfa kendi içinde çelişiyorsa (yıllık toplam aylığın 12 katına eşitken indirim iddiası varsa gibi) çelişki notu düş, aritmetiği göster, boşluğu yorumla doldurma.
- hepsini veri/cekilen-YYYY-AA-GG.md dosyasına yaz. sonda tek satır özet: kaç rakipten fiyat çekildi, kaçı fiyatını gizliyor, kaçına erişilemedi.
```

## Adım 2 · Fiyat raporunu çıkar (kopyala)

```
çekilen veriden fiyat raporumu çıkar.

kurallar:
- önce ürün + rakipler + kurallar + format + çekilen veri dosyalarını okuduğunu tek satırla söyle.
- özellik x paket matrisi kur. satır özellik, sütun rakip ve seviye. sayfada olmayan hücreye "sayfada belirtilmemiş" yaz. matrisin altına iki okuma çıkar: sektörde neyin giriş seviyede verildiği, neyin üst paket tetikleyicisi olduğu.
- değer eksenini çıkar. her rakibin hangi eksenle fiyatladığını yaz. sonra iki soruyu ayrı cevapla: müşterinin aldığı değer hangi sayıyla büyüyor, benim maliyetim hangi sayıyla büyüyor. aynıysa tek eksen, farklıysa ana eksen değer tarafında ikinci eksen maliyet tarafında olsun. seçmediğin eksenler için tek satır sebep yaz.
- üç paket öner. her paket için: fiyat, kimin için, içinde ne var, bu pakette bilerek ne YOK ve neden, fiyatın hangi çekilen veriden geldiği.
- orta paketi bilinçli olarak seçilmesi istenen paket yap ve bunu hangi mekanizmayla kurduğunu yaz. kaç kişinin hangi paketi seçeceğine dair sayı verme.
- marjinal maliyeti olan kalemi (sms, mesaj, işlem) hiçbir pakette sınırsız verme. dahil adet + aşım fiyatı olarak yaz.
- benim yapmıyorum listemdeki hiçbir hizmeti pakete koyma.
- türkiye uyarlamasını karar olarak değil seçenek olarak yaz: para birimi, kur eşiği, kdv gösterimi, yerel ödeme alışkanlığı, yurt dışı için ikili fiyat. her birinde seçenek a / seçenek b / hangi durumda hangisi.
- zam protokolü yaz: mevcut müşteriye ne olacak, kaç gün önce hangi kanaldan haber, hangi eşiklerde zam, hangi davranış yasak.
- gelir projeksiyonu yapma, dönüşüm oranı uydurma, "şu fiyatı koyarsan şu kadar satarsın" deme. bilmediklerini sonda ayrı bölümde yaz.
- em dash kullanma. çıktıyı ciktilar/YYYY-AA-GG-fiyat-raporu.md dosyasına yaz.
```

## Tek komut (acele edince: hem çek hem raporla)

```
rakiplerimin fiyat sayfalarını web araçlarınla kendin çek, veri klasörüne kaynak url'siyle yaz, sonra özellik x paket matrisi kur, değer eksenini gerekçesiyle seç, üç paket öner ve türkiye uyarlaması + zam protokolü yaz.
fiyatını göstermeyen rakip için rakam uydurma, ortalamaya katma. gelir ve dönüşüm projeksiyonu yapma. çıktıyı ciktilar klasörüne koy.
```

## Not
Rapor ne kadar iyi olursa olsun fiyat kararını sen veriyorsun. Raporu çıkardıktan sonraki adım şu: üç paketi bir sayfaya koy, beş gerçek müşteri adayıyla konuş, itirazın nerede geldiğini `sen/02-rakipler.md` içindeki fiyat defterine yaz. Sistem bir sonraki raporda orayı da okuyor.
Ayda bir tekrar çalıştır. Eski `veri/` dosyaları silinmiyor, böylece rakiplerin zam geçmişini de görüyorsun.
