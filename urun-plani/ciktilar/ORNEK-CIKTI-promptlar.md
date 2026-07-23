# Claude Code Prompt Seti · 2026-07-24 · Operatör: kurgusal (Meydan Dijital)

> Bu promptlar sırayla yapıştırılır. Her biri tek iş yapar ve bir öncekinin çıktısının üstüne biner.
> Bir promptun "bitince şunu görmelisin" satırını göremediysen bir sonrakine GEÇME. O adımı düzelt, sonra devam et.
> Promptlarda kod yok, ne istediğin düz Türkçe yazıyor. Teknoloji seçimini Claude Code yapıyor, sen sınır koyuyorsun.
> Dayanak: `ciktilar/ORNEK-CIKTI-urun-plani.md` (v1 kapsamı) ve `ciktilar/ORNEK-CIKTI-veri-semasi.md` (5 tablo).

---

## Prompt 1 · Proje iskeleti ve veri şeması (30 dakika)

```text
küçük işletmeler için basit bir ziyaretçi ve temas paneli kuruyorum. bugün sadece iskeleti ve veri şemasını istiyorum, ekran yok.

beş tablo olacak:
- musteri: işletme adı, iletişim numarası, panel anahtarı, başlangıç tarihi, aylık ücret, ödeme dönemi, durum
- site: müşteri, alan adı, takip kodu anahtarı, ekleme tarihi
- olay: site, tür (sayfa veya temas), temas türü (arama, whatsapp, yol tarifi), sayfa yolu, zaman, şehir, cihaz, kaynak
- gunluk_ozet: site, tarih, ziyaret sayısı, arama sayısı, whatsapp sayısı, yol tarifi sayısı, en çok gelen kaynak
- aylik_ozet_gorseli: müşteri, ay, görsel dosya yolu, gönderildi mi, gönderim tarihi

sınırlar:
- olabildiğince az parça kullan. tek bir proje klasörü, tek veritabanı dosyası. karmaşık kurulum istemiyorum.
- ziyaretçinin ip adresini hiçbir yerde saklama. şehir bilgisini çıkardıktan sonra ip'yi at.
- şu an ekran, giriş, tasarım yok. sadece şema ve projenin ayağa kalkması.
- kurduğun her şeyi tek dosyalık bir KURULUM.md içine yaz, ben sonra okuyacağım.

bitince şunu görmelisin: proje çalışıyor, beş tablo oluşmuş, veritabanına elle bir test müşterisi ekleyip listeleyebiliyorsun.
```

---

## Prompt 2 · Takip kodu ve olay toplama (45 dakika)

```text
önceki adımda kurduğun şemanın üstüne, siteye eklenecek takip kodunu ve olayı kaydeden ucu yaz.

istediğim:
- müşterinin sitesine tek satırla eklenebilen küçük bir betik. sayfa açılınca bir "sayfa" olayı gönderiyor.
- olay gönderirken şunları taşısın: hangi site (takip kodu anahtarı ile), sayfa yolu, nereden gelindiği (yönlendiren), cihaz telefon mu masaüstü mü.
- sunucu tarafında olayı alıp olay tablosuna yazan uç. şehir bilgisini çıkar, ip'yi kaydetme.
- betik küçük olsun, sayfayı yavaşlatmasın. çerez koyma, kalıcı kimlik tutma.

sınır: şu an panel yok, sadece veri düşsün.

bitince şunu görmelisin: bir test html sayfası açtığında olay tablosuna tek satır düşüyor, içinde sayfa yolu ve cihaz bilgisi var, ip alanı hiç yok.
```

---

## Prompt 3 · Temas tıklamalarını yakala (30 dakika)

```text
önceki adımdaki takip betiğine temas yakalamayı ekle. bu ürünün en önemli özelliği bu.

istediğim:
- sayfadaki telefon linklerine (tel: ile başlayan) tıklanınca "arama" türünde temas olayı gitsin.
- whatsapp linklerine (wa.me veya whatsapp içeren) tıklanınca "whatsapp" türünde temas olayı gitsin.
- harita ve yol tarifi linklerine tıklanınca "yol tarifi" türünde temas olayı gitsin.
- aynı ziyaretçiden 30 dakika içindeki aynı tür temas tek sayılsın. bu 30 dakikayı ayar olarak tut, koda gömme.
- müşteri hiçbir şey ayarlamasın. link zaten sayfada varsa sistem kendisi yakalasın.

bitince şunu görmelisin: test sayfasında telefon linkine tıkladığında olay tablosuna tür "temas", temas türü "arama" olan kayıt düşüyor. iki kere tıklarsan yine tek kayıt kalıyor.
```

---

## Prompt 4 · Günlük özet işi (20 dakika)

```text
önceki adımlarda toplanan ham olayların üstüne günlük özet hesaplayan bir iş yaz.

istediğim:
- günde bir kere çalışıp her site için o günün rakamlarını gunluk_ozet tablosuna yazsın: ziyaret sayısı, arama, whatsapp, yol tarifi, en çok gelen kaynak.
- panel bundan sonra ham olayları saymasın, bu özete baksın.
- işi elle de tetikleyebileyim (test için).
- ham olaylar 12 ay sonra silinsin, özet kalsın. bu temizliği aynı işin içine koy ama süreyi ayar olarak tut.

bitince şunu görmelisin: işi elle çalıştırdığında gunluk_ozet tablosunda bugünün satırı oluşuyor ve rakamlar ham olay sayısıyla birebir tutuyor.
```

---

## Prompt 5 · Panel ekranı, mobil öncelikli (60 dakika)

```text
önceki adımda hazırladığın günlük özetin üstüne müşterinin göreceği tek ekranlı paneli kur.

ekran sırası yukarıdan aşağı:
1. en üstte büyük ve gündelik türkçe cümle: "bu hafta 43 kişi baktı, 6 kişi seni aradı".
2. altında üç temas kutusu: arama, whatsapp, yol tarifi. bu hafta ve geçen hafta rakamı yan yana.
3. altında ziyaret grafiği, son 30 gün.
4. en altta nereden geldiler listesi (kaynak kırılımı), en fazla beş satır.

sınırlar:
- telefonda tek ekranda okunabilsin. ilk rakam için kaydırma gerekmesin.
- metrik adı yazma, cümle yaz. "bounce rate", "unique visitor" gibi terim kullanma.
- kullanıcı teknik değil. ayar, süzgeç, tarih seçici koyma. tek görünüm yeter.
- panel adresi tahmin edilemeyecek bir anahtar taşısın, giriş ekranı olmasın.

bitince şunu görmelisin: telefondan panel linkini açtığında ilk ekranda "kaç kişi aradı" rakamını kaydırmadan görüyorsun, başka müşterinin linkini denediğinde onun verisi görünmüyor.
```

---

## Prompt 6 · Şu an sitede kaç kişi var (20 dakika)

```text
önceki adımda kurduğun panelin en üstüne canlı sayaç ekle.

istediğim:
- son beş dakikada olay göndermiş ziyaretçi sayısı. "şu an sitede 2 kişi var" diye yazsın.
- kimse yoksa rakam yerine "şu an kimse yok" yazsın, sıfır göstermek kötü duruyor.
- sayfa açıkken kendi kendine tazelensin, kullanıcı yenilemek zorunda kalmasın.

bu sayaç ürünün kurulduğunu kanıtlayan yer. müşteriye ilk gösterdiğimde buraya bakacak.

bitince şunu görmelisin: iki sekmede test sitesini açtığında panelde sayı iki oluyor, sekmeleri kapatıp beş dakika sonra "şu an kimse yok" yazıyor.
```

---

## Prompt 7 · Ajans ekranı (40 dakika)

```text
önceki adımlarda kurduğun panelin yanına bana özel bir ekran daha kur. bu ekranı müşteri değil ben açacağım.

istediğim:
- tüm müşteriler tek listede: işletme adı, bu hafta ziyaret, bu hafta temas sayısı.
- bu hafta teması geçen haftaya göre belirgin düşen müşteri satırı işaretlensin. eşiği ayar olarak tut.
- listeden bir müşteriye tıklayınca onun panelini açsın.
- bu ekran gizli kalsın, benim ayrı bir anahtarımla açılsın.

sınır: yeni tablo ekleme, mevcut günlük özetten hesapla.

bitince şunu görmelisin: üç test müşterisi listede görünüyor, birinin temas sayısını elle düşürdüğünde o satır "düşüş" işareti alıyor.
```

---

## Prompt 8 · Aylık özet görseli (40 dakika)

```text
önceki adımlardaki verinin üstüne, müşteriye whatsapp'tan göndereceğim aylık özet görselini üret.

istediğim:
- tek görsel dosya. içinde: ay adı, işletme adı, kaç kişi baktı, kaç kişi aradı, kaç kişi whatsapp'tan yazdı, kaç kişi yol tarifi aldı. bir de geçen aya göre ok işareti.
- telefonda okunacak, yazılar büyük olsun. dört rakamdan fazlası olmasın.
- bir müşteri için tek komutla üretilsin ve dosya olarak insin. gönderimi ben elle yapacağım.
- üretilen görsel aylik_ozet_gorseli tablosuna kaydedilsin, iki kere üretmeyeyim.

bitince şunu görmelisin: bir müşteri için komutu çalıştırdığında görsel dosya iniyor, telefonda açtığında dört rakam da okunabiliyor, tabloda kaydı görünüyor.
```

---

## Prompt 9 · Yayına al ve ilk müşteriye göster (30 dakika)

```text
önceki adımlarda kurduğumuz her şeyi tek bir yerde yayına al.

istediğim:
- projeyi ucuz ya da ücretsiz bir yerde ayağa kaldır. veritabanı da orada dursun, ayrı servis kurma.
- takip kodunun müşteri sitesine nasıl ekleneceğini iki cümlelik bir talimata çevir, ben kendim yapacağım.
- yedekleme: veritabanının günlük kopyası alınsın.
- son olarak KURULUM.md dosyasını güncelle: neyi nereye kurduk, hangi ayar nerede, bir şey bozulursa nereye bakacağım.

bitince şunu görmelisin: gerçek bir müşteri sitesine takip kodunu ekliyorsun, on dakika sonra panel linkinde gerçek ziyaret ve temas rakamları görünüyor.
```

---

## Takılırsan (en sık üç yer)

1. **Olay düşmüyor.** Önce takip kodunun sayfada gerçekten yüklendiğini kontrol et, sonra sunucu ucunun adresini. Prompt 2'nin kabul satırına geri dön, o adım geçmeden ileri gitme.
2. **Temas sayısı şişik geliyor.** Aynı tıklamanın tekrar sayılması olur. Prompt 3'teki 30 dakika penceresi ayarını kontrol et, ayar koda gömülmüş olabilir.
3. **Panel yavaş açılıyor.** Panel ham olayları sayıyordur. Prompt 4'teki günlük özet işi çalışmıyor demektir; panelin özete baktığından emin ol.

## Not
Bu set 9 prompt. Kural 6 ile 10 arasıydı, sınırdayız. Yeni bir özellik eklemek istersen önce plan dosyasındaki kovalara geri dön: eklemek istediğin şey ÇEKİRDEK kovasında mı, yoksa v1'i şişiriyor musun.
