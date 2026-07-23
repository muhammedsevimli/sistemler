# Kurallar · veri kalitesi, değer ekseni, paket kurma

Bu dosya sistemin analiz cetvelidir. FAZ 2'de zorunlu okunur.

## 1 · Veri kalite etiketleri (her rakip satırı bunlardan birini alır)
| Etiket | Ne demek | Ortalamaya girer mi |
|---|---|---|
| `fiyat çekildi` | sayfada rakam var, kaynak URL kayıtlı | evet |
| `fiyat açık değil` | sayfa var ama rakam yok (teklif alın / demo iste) | HAYIR |
| `kaynak yok` | sayfaya erişilemedi (404, engel, boş içerik) | HAYIR |
| `kısmen çekildi` | bazı paketlerin rakamı var, bazılarında yok | yalnız rakamı olan paket girer |

Ortalama, medyan ve bant hesabına yalnız `fiyat çekildi` satırları girer. Katılmayanların sayısı raporda yazılır. Elde ikiden az geçerli rakam varsa bant üretme, "yeterli veri yok" yaz.

## 2 · Değer ekseni cetveli
Fiyatın neye göre arttığına değer ekseni denir. Gözlemlenen ana eksenler:

| Eksen | Fiyat neyle artar | Ne zaman uyar | Riski |
|---|---|---|---|
| Koltuk / kullanıcı | sisteme giren kişi sayısı | değer kişi başına üretiliyorsa | müşteri hesap paylaşır, yarı zamanlı personel cezalandırılır |
| Kullanım hacmi | işlem, mesaj, rezervasyon, kontör adedi | maliyet her kullanımda artıyorsa | müşteri fatura sürprizinden korkar, ürünü AZ kullanmaya başlar |
| Kaynak adedi | takvim, şube, lokasyon, sağlayıcı | değer fiziksel kapasiteyle büyüyorsa | küçük müşteri hemen tavana çarpar |
| Özellik seti | pakete konan yetenek | yetenekler net ayrışıyorsa | tek başına kullanılırsa büyüyen müşteriden pay alamazsın |
| Sabit tek fiyat | artmaz | ürün tek işi yapıyorsa ve müşteriler benzerse | büyük müşteri küçük müşteriyle aynı parayı öder |

**Eksen seçme kuralı:** iki soruyu ayrı ayrı cevapla.
1. Müşterinin aldığı değer hangi sayı büyüyünce büyüyor.
2. Senin maliyetin hangi sayı büyüyünce büyüyor.
Aynı sayıysa tek eksen kur. Farklıysa ANA eksen değer tarafından kurulur, İKİNCİ eksen maliyet tarafını kapatır (dahil adet + aşım fiyatı). Maliyet tarafını ana eksen yapmak müşteriyi ürünü az kullanmaya iter, bu da ürünün taşıdığı değeri düşürür.

## 3 · Paket kurma kuralları
- **Üç paket.** Daha azı büyüyen müşteriden pay almanı engeller, daha fazlası karar felci yapar. Kurumsal ihtiyaç varsa dördüncü kutu "görüşelim" olur, rakam yazılmaz.
- **Her pakette kimin için satırı zorunlu.** Paket bir müşteri profiline karşılık gelmiyorsa paket değildir.
- **Bilerek dışarıda bırakılan zorunlu.** Her paketin altında "bu pakette bilerek yok" listesi ve her maddenin tek satır sebebi olur. Sebep yazılamıyorsa o özellik pakete konur.
- **Taşıyıcı özellik orta pakete konur.** Taşıyıcı özellik = müşterinin asıl derdini çözen şey. Giriş paketi ürünü tanıtır, taşıyıcı özelliği tam vermez.
- **Orta ile üst arasındaki sıçrama görünür olur.** Üst pakete yalnız büyük müşterinin ihtiyacı olan şey konur (çoklu şube, marka kaldırma, API, öncelikli destek). Küçük müşteri üst pakete bakınca "bunlar bana lazım değil" demeli.
- **Marjinal maliyetli kalem sınırsız verilmez.** SMS, mesaj, işlem, depolama: dahil adet + aşım birim fiyatı. "Sınırsız" yazmak maliyetini müşterinin davranışına teslim etmektir.
- **Taban kontrolü.** Giriş paketi fiyatı, o müşteriye hizmet etmenin değişken maliyetinin altına inemez. `sen/01-urun.md` maliyet bölümünü oku, iniyorsa uyar.
- **Yıllık indirim bandı veriden okunur,** kafadan konmaz. Çekilen rakiplerin yıllık ve aylık rakamlarından gerçek indirim yüzdesini hesapla, bandı yaz.

## 4 · Yasak cümleler (bunlardan biri çıktıya girerse rapor geçersiz)
- "Bu fiyatı koyarsan şu kadar satarsın."
- "Dönüşüm oranın yaklaşık şu olur."
- "Aylık gelirin şu kadar olur", "şu kadar müşteriyle şu ciroya ulaşırsın."
- "Müşterilerin yüzde şu kadarı orta paketi seçer."
- "Bu rakip muhtemelen şu bandı alıyordur."
- "Kur yaklaşık şu kabul edilirse" (kaynaklı ve tarihli değilse).
- "Rakibin paketini aynen kur."

Sistem talep eğrisi ölçmez. Ölçmediği şeyi söylemez. Bir soru veriyle cevaplanamıyorsa cevabı "bunu bu veriyle bilemem, şunu ölçersen bilirsin" olur.

## 5 · Ne zaman "yeterli veri yok" denir
- Elde ikiden az `fiyat çekildi` rakibi varsa: bant ve medyan üretilmez, yalnız yapı analizi yapılır.
- Operatör maliyetini yazmadıysa: taban kontrolü yapılmaz, "maliyet bilgisi verilmedi" notu düşülür.
- Yerel referans çekilemediyse: TL rakamı önerilmez, yapı önerisi para biriminden bağımsız verilir ve eksik açıkça yazılır.
- Operatör kime sattığını yazmadıysa: paket profilleri kurulmaz.

## 6 · Hukuki sınır
Fiyatlandırma; abonelik, otomatik yenileme, cayma hakkı, mesafeli satış ve KDV mevzuatına dokunur. Sistem bu konularda gözlem ve seçenek sunar, hukuki tavsiye vermez. Otomatik yenileme, fiyat değişikliği bildirimi ve iade koşullarında rapora "bu madde hukuki teyit ister" notu düşülür.
