# Ürün Planı · 2026-07-24 · Hedef: plausible.io · Operatör: kurgusal (Meydan Dijital)

> Bu dosya sistemin gerçek koşusundan çıktı. Girdi: bir URL ve `sen/01-profil.md`.
> Kurgusal operatör: Türkiye'de mahalle esnafına (fırın, kuaför, kafe, butik) basit site kuran küçük bir dijital atölye. 20 mevcut müşteri. Kod yazmıyor, Claude Code ile kuruyor.
> Bu bir klon planı değildir. Hedefin mantığı çıkarıldı, plan operatörün nişine uyarlandı.

## 1. Künye
Hedef: https://plausible.io · Tarama tarihi: 24 Tem 2026 · Okunan sayfa: 5 (ana sayfa, fiyat bölümü, doküman haritası, metrik tanımları, açık kaynak sayfası) · Erişilemeyen: 1 (denenen yerelleştirilmiş fiyat sayfası, HTTP 404). Toplanan özellik: 35. Ham çözümleme: `cozumleme/cozumleme-2026-07-24.md`.

## 2. Bu ürün ne yapıyor, kime yapıyor
Web sitesi analitiği yapıyor: siteye kim geldi, nereden geldi, ne yaptı. Ayrıştığı yer sadelik ve gizlilik. Çerez koymuyor, kalıcı kimlik tutmuyor, takip kodu küçük, tüm rakamlar tek sayfada duruyor. Sayfada kendini büyük analitik araçlarının karmaşıklığına karşı konumluyor.

Kitlesi geniş: e-ticaret, SaaS, ajanslar ve serbest çalışanlar, içerik üreticileri, kurumsal. Yani ürün hem ayda milyon sayfa görüntüleyen bir yayıncıya hem tek sayfalık siteye aynı paneli veriyor. Fiyat sayfa görüntüleme hacmiyle artıyor, üstüne site sayısı ve ekip kapasitesi kapıları biniyor.

## 3. Özellik kovaları

| Özellik | Kova | Gerekçe |
|---|---|---|
| Site ekleme + takip kodu | ÇEKİRDEK | Bu olmadan hiç veri yok, ürünün girişi burası |
| Çerezsiz, kimlik tutmayan ölçüm | ÇEKİRDEK | Ürünün ana vaadi bu, çıkarırsan geriye sıradan bir sayaç kalır |
| Tek sayfalık sade panel | ÇEKİRDEK | İlk değer anının gösterildiği yer, menü labirenti kurmanın anlamı yok |
| Gerçek zamanlı "şu an kaç kişi" | ÇEKİRDEK | Kurulumun çalıştığını 30 saniyede kanıtlıyor, ilk değer anını buraya bağlıyorum |
| Kaynak ve kanal kırılımı | ÇEKİRDEK | "Kim geldi" kadar "nereden geldi" sorusu da her müşteride var |
| Temas hedefleri (telefon, WhatsApp, yol tarifi tıklaması) | ÇEKİRDEK | Bu nişin tek gerçek sorusu, aşağıdaki uyarlama tablosunda gerekçesi var |
| Çok site tek ekran (ajans görünümü) | ÇEKİRDEK | Operatörün 20 müşterisi var, tek tek panel açmak günlük operasyonu kilitler |
| E-posta ve Slack raporları | DESTEK | Değerli ama ilk sürümde panel linki yeter |
| Paylaşılan link (müşteriye panel verme) | DESTEK | İlk 20 müşteride linki operatör elle paylaşabilir |
| Dönem karşılaştırma (bu ay, geçen ay) | DESTEK | İkinci aydan itibaren anlamlı, birinci ayda karşılaştırılacak veri yok |
| İç trafiği hariç tutma | DESTEK | Operatörün kendi ziyaretleri rakamı bozuyor, ama bir hafta beklenebilir |
| Bot filtreleme | DESTEK | Düşük trafikte bot oranı fark ediliyor, basit bir kural v1.5'te yeter |
| Trafik sıçraması bildirimi | DESTEK | Müşteriyi memnun eder, kurulumu ucuz, ama ilk değer anında yeri yok |
| Kod gerektirmeyen hedef tanımlama | DESTEK | Operatör hedefleri kendisi kuruyor, arayüzden tanımlama v1'de gerekmiyor |
| Notlar (grafiğe not düşme) | SÜS | Ayda bir kullanılır, kurulum maliyeti düşük ama sırası sonda |
| Kaydırma derinliği | SÜS | Dört sayfalık esnaf sitesinde okuma derinliği ölçmenin karşılığı yok |
| Huni analizi | SÜS | Aylık birkaç yüz ziyaretçide huni istatistiği gürültüden ibaret |
| Kullanıcı yolculukları | SÜS | Aynı sebep, hacim yok |
| Kaydedilmiş segmentler | SÜS | Bu kullanıcı süzgeç kurmuyor, hazır ekrana bakıyor |
| Search Console entegrasyonu | SÜS | Güzel satış argümanı, kurulumu ayrı bir iş, v1'i geciktirir |
| AI araç trafiği takibi | SÜS | Bu hacimde ölçülebilir bir sinyal çıkmaz |
| Dosya indirme takibi | SÜS | Esnaf sitesinde indirilen dosya neredeyse yok (menü PDF'i istisna) |
| Panel gömme (embed) | SÜS | Paylaşılan link aynı işi daha ucuza görüyor |
| 404 sayfası takibi | SÜS | Operatörün işine yarar, müşterinin gündeminde değil |
| Ekip yönetimi, roller | GİRME | Ölçek özelliği. Tek operatör ve tek işletme sahibi var, rol matrisi kurmak boş iş |
| Tek oturum açma (SSO) | GİRME | Kurumsal özellik, bu nişte hiç talep edilmeyecek |
| İki adımlı doğrulama | GİRME | v1'de giriş bile en sade haliyle kurulacak, güvenlik katmanı sonra |
| Google Analytics veri aktarımı | GİRME | Müşterilerin çoğunda taşınacak geçmiş veri yok |
| Stats, Events, Sites API üçlüsü | GİRME | Dışarıdan veri çekecek kimse yok, bakım maliyeti bedava değil |
| Data Studio bağlayıcısı | GİRME | Bu kullanıcı rapor aracı kullanmıyor |
| Beyaz etiket entegrasyon | GİRME | Ürün zaten operatörün markasıyla çıkıyor, ayrı katman gereksiz |
| Ham olay dışa aktarımı | GİRME | Kurumsal ihtiyaç, altyapı yükü ürünün kendisinden büyük |
| Gelir ve sipariş takibi | GİRME | Ciro verisi işlemek ayrı bir sorumluluk, v1'de girilmez |
| 5 yıl veri saklama | GİRME | Uzun saklama depolama maliyeti demek, v1'de 12 ay yeter |

ÇEKİRDEK: 7 madde. Sınırda, daha fazlası v1'i şişirir.

**Kova tablosuna girmeyen 5 satır ve nedeni** (çözümlemedeki 35 özellikten kalanlar, sessizce atılmadı):
- Hafif takip kodu: bir özellik değil, kalite ölçüsü. v1 kurulum sırasının 2. adımına sınır olarak geçti ("betik küçük olsun").
- AB'de barındırma: ürünün niteliği. Senin nişinde karşılığı "veri Türkiye'de mi" sorusudur, v1'de barındırma yerini not et, satış argümanı olarak sonra kullan.
- Açık kaynak olma: ürünün niteliği ve lisans konusu. Kopyalanmaz listesine düştü.
- Dış bağlantı tıklaması takibi ve form gönderimi takibi: ikisi birleşip ÇEKİRDEK'teki "temas hedefleri" satırına dönüştü. Bu nişte anlamlı dış bağlantı zaten telefon, WhatsApp ve harita linkidir.

## 4. Nişe uyarlama tablosu

**Hedefte var, senin nişinde gereksiz**

| Özellik | Neden gereksiz |
|---|---|
| Google Analytics veri aktarımı | Müşterilerinin çoğunda GA hiç kurulmamış, taşınacak geçmiş yok |
| Huni ve kullanıcı yolculuğu | Aylık 500 ile 5000 ziyaretçide bu analizler istatistiksel olarak gürültü |
| Ekip yönetimi, roller, SSO | Paneli tek kişi açıyor: işletme sahibi. Rol kavramı yok |
| Data Studio bağlayıcısı ve API üçlüsü | Bu kullanıcı veriyi başka araca taşımıyor, tek ekrana bakıyor |
| AI trafiği ve kaydırma derinliği | Dört sayfalık esnaf sitesinde ölçülebilir karşılığı yok |
| Sayfa görüntüleme hacmine göre fiyat | Müşterilerin hepsi en alt basamakta kalır, fiyat hiç büyümez |

**Hedefte yok, senin nişinde şart**

| İhtiyaç | Neden şart | Nereden çıktı (profil satırı) |
|---|---|---|
| Temas sayacı: telefon tıklaması, WhatsApp tıklaması, yol tarifi tıklaması panelin en üstünde | Müşteri "kaç kişi geldi" diye sormuyor, "kaç kişi beni aradı" diye soruyor. Ürünün ana rakamı bu olmalı | "müşterim kaç kişi geldi demiyor, kaç kişi beni aradı diyor" |
| Türkçe panel ve gündelik dil ("bu hafta 43 kişi baktı, 6 kişi aradı") | Kullanıcı teknik değil, İngilizce metrik adı ilk ekranda kapatır | "sahipleri teknik değil, telefondan bakıyor" |
| WhatsApp'tan tek görsellik aylık özet | Rapor okumuyor, ekran görüntüsü istiyor. Ürünün tekrar gelme sebebi bu görsel olacak | "rapor beklemez, WhatsApp'tan tek ekran görüntüsü ister" |
| Ajans ekranı: 20 müşteri tek listede, düşüş yaşayan müşteri işaretli | Operatörün asıl kullanıcısı kendisi. Hangi müşteride sinyal düştüğünü görmezse müşteri kaybını sonradan öğrenir | "hâlihazırda 20 küçük işletme müşterim var" |
| Kartsız ödeme: yıllık peşin, havale | Aylık kart aboneliği kültürü zayıf, tahsilat kırılma noktası | "kredi kartıyla aylık abonelik kültürü zayıf, havale ile yıllık ödemeyi seviyorlar" |
| Telefonda tek ekran (mobil öncelikli panel) | Kullanıcı masaüstü açmıyor, telefondan bakıyor | "telefondan bakıyor, uzun panel okumuyor" |

## 5. Kullanıcı akışı

**Hedef üründe**
- Kayıt: 30 gün deneme, kart istenmiyor.
- İlk değer anı: hesap aç, siteyi ekle, takip kodunu siteye yerleştir, panelde gerçek zamanlı ziyaretçiyi gör. Üç adım, ve üçüncü adım kullanıcının kendi sitesinin koduna dokunmasını gerektiriyor. Teknik olmayan biri için asıl kopma noktası burası.
- Tekrar gelme sebebi: biriken geçmiş veri, e-posta ve Slack raporları, sıçrama bildirimi.

**Senin sürümünde**
- Kayıt: işletme sahibi hiç kayıt olmuyor. Siteyi zaten sen kurdun, kodu sen yerleştiriyorsun. Ona sadece bir link gidiyor.
- İlk değer anı: işletme sahibi linke ilk tıkladığında dolu bir ekran görüyor, en üstte "bu hafta 6 kişi seni aradı" yazıyor. **Kullanıcı tarafında adım sayısı 3'ten 0'a iniyor.** Kurulum yükünü ürüne değil operatöre veriyorsun, çünkü operatör zaten o sitenin içinde.
- Tekrar gelme sebebi: her ayın başında WhatsApp'a düşen tek görsellik özet. Kullanıcı paneli hatırlamak zorunda değil, panel onu buluyor.

## 6. Sen neyi farklı yapıyorsun
1. **Ölçtüğün şey farklı.** Hedef ürün ziyaret ölçüyor, sen teması ölçüyorsun: arama, WhatsApp, yol tarifi. Aynı veri, farklı ana rakam. Esnaf için ciroya en yakın sayı bu.
2. **Kurulum yükü kullanıcıda değil.** Kodu operatör yerleştiriyor, işletme sahibi hiçbir teknik adıma dokunmuyor.
3. **Fiyat ölçün farklı.** Trafik hacmine değil izlenen site sayısına göre. Bu nişte trafik hiç büyümüyor, müşteri sayısı büyüyor.
4. **Rapor dili gündelik Türkçe.** Metrik adı değil cümle: "bu hafta 43 kişi baktı, 6 kişi aradı".

## 7. v1 kapsamı ve kurulum sırası

1. **Veri şemasını kur.** Beş tablo: `musteri`, `site`, `olay`, `oturum`, `temas_hedefi`. Bitince: boş veritabanı ayakta, tablolar oluşmuş.
2. **Takip kodunu yaz.** Siteye eklenen küçük bir betik. Sayfa açılışında tek olay gönderiyor. Bitince: test sitesinde tek satır olay kaydı düşüyor.
3. **Temas tıklamalarını yakala.** `tel:` linkleri, WhatsApp linkleri, harita bağlantıları otomatik olay olarak kaydediliyor. Bitince: test sayfasında telefona tıkladığında olay tablosuna "arama" kaydı düşüyor.
4. **Paneli kur (tek ekran, mobil öncelikli).** En üstte temas sayıları, altta ziyaret, altta kaynak kırılımı. Bitince: telefonda tek ekranda okunabiliyor, kaydırmadan ana rakam görünüyor.
5. **Gerçek zamanlı sayacı ekle.** "Şu an sitede 2 kişi var". Bitince: iki sekme açtığında sayı iki oluyor.
6. **Site linkini paylaşılabilir yap.** Her müşteriye tahmin edilemeyecek bir panel linki. Bitince: linki gizli sekmede açtığında panel giriş sormadan geliyor, başka müşterinin verisi görünmüyor.
7. **Ajans ekranını kur.** Tüm müşteriler tek listede, bu hafta temas düşen müşteri işaretli. Bitince: 3 test müşterisi listede, biri "düşüş" etiketli.
8. **Aylık özet görselini üret.** Tek görsel, dört rakam, ay adı. Bitince: bir müşteri için görsel dosya olarak iniyor, WhatsApp'tan gönderilebiliyor.

## 8. v1'e girmeyenler ve nedeni
- Giriş ve şifre sistemi: v1'de gizli link yeter, giriş ekranı kurmak ilk sürümü bir hafta geciktirir.
- Ekip, roller, SSO: bu nişte hiç talep yok.
- Ödeme altyapısı: tahsilat v1'de havale ile elle yapılıyor, ödeme entegrasyonu ayrı bir uyum işi.
- Gelir ve sipariş takibi: ciro verisi işlemek ayrı sorumluluk doğurur.
- Huni, kullanıcı yolculuğu, segment: bu trafik hacminde anlamsız.
- GA aktarımı, API, Data Studio: kullanıcı yok, bakım maliyeti var.
- Uzun veri saklama: v1'de 12 ay, sonrası özetlenip saklanır.

## 9. Fiyat mantığı
- **Hedefte:** fiyat aylık sayfa görüntüleme hacmiyle artıyor, üstüne site sayısı ve ekip kapasitesi kapıları biniyor. Sayfada literal yazan rakamlar: Starter 9 dolar (10 bin sayfa görüntülemeye kadar), Growth 14 dolar (3 site, 3 ekip üyesi), Business 19 dolar (10 site, 10 ekip üyesi, 5 yıl saklama), Enterprise için rakam yazmıyor. 30 gün ücretsiz deneme, kart istemiyor. Kaynak: https://plausible.io/#pricing
- **Bu ölçü senin nişinde çalışmaz.** Müşterilerinin sitesi ayda 500 ile 5000 arası görüntüleniyor. Hepsi en alt basamakta kalır, gelirin hiç büyümez. Üstelik ödeyen kişi ile paneli kullanan kişi farklı: ödeyen sensin ya da işletme, kullanan işletme sahibi.
- **Sana uyan ölçü:** izlenen site başına aylık sabit ücret. Senin gelirin müşteri sayınla büyür, trafikle değil. Yıllık peşin ödemede indirim koy, çünkü nişin havaleyle yıllık ödemeyi seviyor. Deneme süresi yerine ilk ay ücretsiz ver: müşteri zaten senin, kart bilgisi toplamana gerek yok.
- Not: bu bölüm bir fiyat kararı değil, fiyat MANTIĞI çıkarımıdır. Rakamı kendi maliyetine ve müşteri konuşmalarına göre koyarsın.

## 10. Kopyalanmaz listesi
- Marka adı, logo, marka renkleri, yazı tipi sistemi
- Panelin birebir ekran düzeni ve grafik tasarımı
- Sayfa metinleri, slogan, karşılaştırma tabloları
- Doküman metinleri ve görselleri
- **Kaynak kod.** Ürün açık kaynak ve lisansı sayfada aynen şöyle yazıyor: "GNU Affero General Public License Version 3 (AGPLv3) or any later version". Bu lisans kendi sunucunda çalıştırmana izin verir, ama kodu alıp değiştirip kapalı bir hizmet olarak satmana izin vermez (değişikliklerini açmak zorunda kalırsın). Bu plan koda hiç dokunmuyor: sitede herkese açık yazan mantığı çıkarıp senin nişine uyarlıyor, sen kendi ürününü sıfırdan kuruyorsun. Kaynak: https://plausible.io/open-source-website-analytics

## 11. Belirsizler ve riskler
- Starter dışındaki planların sayfa görüntüleme sınırı sitede yazmıyor, sınır aşılınca ne olduğu da yazmıyor.
- Oturumun ne kadar sessizlikten sonra bittiği yazmıyor. Kendi şemanda bu pencereyi sen tanımlamak zorundasın (öneri: 30 dakika, sonra ölç ve değiştir).
- Çerezsiz tekilleştirmenin nasıl yapıldığı teknik olarak açıklanmıyor. Senin v1'inde ziyaretçiyi tekilleştirme, günlük kaba bir sayı yeter.
- Enterprise fiyatı yok, rakam üretilmedi.
- **Kişisel veri riski:** ziyaretçinin IP adresini ham haliyle saklarsan kişisel veri işlemeye girersin. v1'de ham IP saklama, yalnız şehir bilgisini tut ve IP'yi at. Bu tek karar sana uyum yükünün büyük kısmını atlatır.
- **Talep riski:** bu plan ürünün nasıl kurulacağını söyler, kimsenin buna para vereceğini garanti etmez. 20 müşterinden 3'üne sor, "bu ekran için ayda ne verirsin" de. Cevap gelmeden kurulum sırasına başlama.
