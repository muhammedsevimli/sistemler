# Rapor formatı · fiyat raporu hangi yapıda yazılır

> Sistem `ciktilar/YYYY-AA-GG-fiyat-raporu.md` dosyasını tam olarak bu yapıda yazar. Bölüm atlanmaz. Bir bölüm için veri yoksa bölüm silinmez, altına "veri yok, sebep şu" yazılır.

## Başlık
`# Fiyat Raporu · <ürün adı> · <tarih>` ve altına tek satır: kaç rakip tarandı, kaçından fiyat çekildi, kaçı fiyatını göstermiyor, kaçına erişilemedi.

## A · Veri özeti ve kaynak durumu
Tablo: rakip · kaynak URL · durum etiketi (`fiyat çekildi` / `fiyat açık değil` / `kaynak yok` / `kısmen çekildi`) · fiyat ekseni · para birimi.
Altına: hangi satırların ortalamaya katılmadığı ve nedeni. Çelişki notu varsa burada.

## B · Özellik x paket matrisi
Satır = özellik, sütun = rakip ve seviye. Hücre değerleri: `giriş`, `orta`, `üst`, `yok`, `sayfada belirtilmemiş`.
Matrisin altına iki okuma:
1. **Sektörde giriş seviyesinde verilen:** bunlar için ayrı para istemek zor.
2. **Üst paket tetikleyicileri:** insanların yukarı çıkmak için para verdiği şeyler.

## C · Değer ekseni
- Her rakibin kullandığı eksen tek satır.
- Operatörün işi için iki soru: değer hangi sayıyla büyüyor, maliyet hangi sayıyla büyüyor.
- Seçilen ana eksen + gerekçe. İkinci eksen gerekiyorsa o da + gerekçe.
- Seçilmeyen eksenler ve neden seçilmediği (tek satır).

## D · Üç paket önerisi
Her paket için ayrı kart:
- **Ad ve fiyat** (para birimi ve KDV gösterimi açık, faturalama dönemi açık)
- **Kimin için** (tek cümle, somut profil)
- **İçinde ne var** (madde madde)
- **Bu pakette bilerek YOK** (madde + tek satır sebep)
- **Fiyatın dayanağı** (hangi çekilen veriden, hangi mantıkla; kaynak satırına referans)

Kartların altına:
- **Orta paket neden seçilmesi istenen paket** (mekanizma yazılır: giriş pakette eksik bırakılan taşıyıcı özellik, orta ile üst arasındaki sıçrama, üst paketin yalnız büyük müşteriye hitap etmesi). Yüzde ya da adet tahmini YAZILMAZ.
- **Taban kontrolü:** giriş paketi değişken maliyetin üstünde mi.
- **Riskli sapmalar:** sektör normundan bilinçli ayrıldığın yerler ve itiraz gelirse geri dönüş planı.

## E · Türkiye uyarlaması (karar değil, seçenek)
Her başlık `Seçenek A / Seçenek B / hangi durumda hangisi` biçiminde:
1. Para birimi (TL sabit mi, döviz endeksli mi)
2. Kur oynaklığı ve gözden geçirme eşiği
3. KDV fiyatta görünsün mü (dahil tek rakam mı, `+ KDV` mi)
4. Yerel ödeme alışkanlığı (kart, havale/EFT, taksit)
5. Yurt dışı müşteri varsa ikili fiyat sayfası
Her maddede gerekçe çekilen yerel veriye bağlanır. Yerel veri yoksa "yerel referans çekilemedi" yazılır ve öneri verilmez.

## F · Zam ve fiyat değiştirme protokolü
- Mevcut müşteriye ne olacak (fiyat kilidi süresi ya da kademeli geçiş, birini seç)
- Kaç gün önce, hangi kanaldan haber
- Hangi eşiklerde zam yapılır (en az iki eşik birlikte gerçekleşmeden zam yok)
- Yasak davranışlar (sessiz zam, aynı fiyata limit daraltma)
- "Bu madde hukuki teyit ister" notu gereken yerler

## G · Bu raporun bilmedikleri
Dürüstlük bölümü. Sistem burada açıkça yazar:
- Talep ölçülmedi. Bu rapor rakip yapısını ve maliyeti okur, kaç kişinin ne kadar ödeyeceğini bilmez.
- Fiyatını göstermeyen rakiplerin rakamı bilinmiyor.
- Çekilen sayfalar tarih damgalıdır, rakip fiyatını değiştirmiş olabilir.
- Bir sonraki adım: fiyatı gerçek alıcıya sor, satış konuşmasında itiraz nerede geliyor onu ölç.
