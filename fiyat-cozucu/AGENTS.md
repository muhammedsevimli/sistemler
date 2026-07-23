# Fiyat Çözücü · Rakip Verisiyle Fiyatlama Sistemi · Ajan Talimatı

> Bu dosya evrensel ajan standardıdır (`AGENTS.md`). Codex, Cursor, Windsurf ve benzeri araçlar bu dosyayı okur.
> İçeriği `CLAUDE.md` ile birebir aynıdır. Claude Code `CLAUDE.md`'yi, diğer araçlar bu dosyayı yükler. İkisini birden güncelle.
> Amaç: ürününün ya da hizmetinin fiyatını tavana bakarak değil, rakiplerin herkese açık fiyat sayfalarından GERÇEKTEN çekilmiş veriyle koymak.
> Not: aşağıda "Claude Code'un web araçları" diye geçen yerler senin aracının web arama ve sayfa çekme yetenekleridir. Web erişimin yoksa FAZ 1'i çalıştırma, operatöre "web erişimim yok" de.

## Bu sistemin duruşu (değişmez)
Bu sistem fiyat ARAŞTIRMASINI sana devreder, fiyat KARARINI sana bırakır. Rakiplerin fiyat sayfalarını kendisi açar, paketleri ve rakamları kaynağıyla çıkarır, matrise döker, sektörün neye göre ücret aldığını okur ve gerekçeli bir yapı önerir. "Bu fiyatı koy" emri vermez, "bu fiyatı koyarsan şu kadar satarsın" demez.

## Sistem ne yapıyor (iki faz)
1. **Otomatik fiyat çekimi (sen yapıştırmıyorsun):** `sen/02-rakipler.md` dosyasındaki rakip isim ve URL'lerini okur. Claude Code'un web araçlarıyla (WebFetch + WebSearch) rakiplerin herkese açık fiyat sayfalarını kendisi açar; paket adı, fiyat rakamı, para birimi, faturalama dönemi (aylık/yıllık), metriklendirme (koltuk, kullanıcı, hacim, kaynak adedi) ve pakete dahil özellikleri kaynak URL'siyle `veri/cekilen-YYYY-AA-GG.md` dosyasına yazar. Fiyat bulamadığı rakip için rakam UYDURMAZ, "fiyat açık değil" ya da "sayfaya erişilemedi" diye işaretler.
2. **Analiz + fiyat yapısı (otomatik):** Çekilen veriden özellik x paket matrisi kurar, değer eksenini çıkarır, üç paket önerir, Türkiye uyarlamasını seçenek olarak sunar ve zam protokolü yazar. Çıktı `ciktilar/YYYY-AA-GG-fiyat-raporu.md` dosyasına iner.

## FAZ 1 · Rakip fiyat çekimi istendiğinde
`sen/01-urun.md` (ne satıyorsun, maliyetin, kapasiten, sınırların) ve `sen/02-rakipler.md` (rakip listesi) dosyalarını oku. Sonra her rakip için sırayla:

1. **Doğrudan çek:** `sen/02-rakipler.md`'de URL varsa `WebFetch` ile o adresi aç. Sayfadan şunları AYNEN çıkar: paket adı, fiyat rakamı, para birimi, faturalama dönemi (aylık/yıllık ve varsa ikisinin ayrı rakamı), fiyatın neye göre arttığı (koltuk / kullanıcı / hacim / kaynak adedi / sabit), pakete dahil özellikler, ücretsiz katman var mı, deneme süresi.
2. **URL yoksa ya da 404 dönerse:** `WebSearch` ile doğru fiyat sayfasını bul (`<rakip adı> pricing`, `<rakip adı> fiyatlandırma`, `site:<alan adı> fiyat`). Bulduğun adresi `WebFetch` ile tekrar dene. Bulduğun doğru URL'yi `sen/02-rakipler.md`'ye geri yaz (kaynak listesi büyür).
3. **Fiyat sayfada yoksa (teklif alın / demo iste / iletişime geçin):** o rakibi `fiyat açık değil` diye işaretle. Rakam TAHMİN ETME, "muhtemelen şu banttadır" YAZMA. Bu rakip hiçbir ortalamaya, medyana ya da banda KATILMAZ. Yalnızca "bu segmentte fiyatını gizleyen oyuncu var" gözlemi olarak raporda kalır.
4. **Sayfaya hiç erişilemezse (404, engel, boş içerik):** `kaynak yok · erişilemedi` yaz, denenen URL'yi ve dönen hatayı yaz. Bu da ortalamaya KATILMAZ.
5. **Yerel referans:** Operatör Türkiye'ye satıyorsa en az iki TR kaynağını da aynı yöntemle çek (TL fiyat gösteren, herkese açık fiyat sayfası olan yerli ürünler). TL bandı, KDV gösterimi ve yerel paketleme alışkanlığı buradan okunur. Yurt dışı rakiplerin rakamı TL bandı üretmek için KULLANILMAZ.

Her rakip için `veri/cekilen-YYYY-AA-GG.md` dosyasına şu satırları yaz: rakip · kaynak URL · çekim tarihi · paketler tablosu (ad, aylık, yıllık, para birimi, metrik, dahil özellikler) · durum (`fiyat çekildi` / `fiyat açık değil` / `kaynak yok`). Sonda tek satır özet: kaç rakipten fiyat çekildi, kaç tanesi fiyatını gizliyor, kaç tanesine erişilemedi.

## FAZ 2 · Fiyat raporu istendiğinde şu dosyaları SIRAYLA oku (zorunlu)
1. `sen/01-urun.md` · ne satıyorsun, kime, maliyetin ne, kapasiten ne, neyi yapmıyorsun.
2. `sen/02-rakipler.md` · hangi rakipler tarandı.
3. `format/kurallar.md` · anti uydurma kuralları, değer ekseni cetveli, paket kurma kuralları.
4. `format/rapor-format.md` · raporun hangi yapıda yazılacağı.
5. `veri/` klasöründeki tüm dosyalar · çekilen gerçek fiyatlar.

Bu dosyaları okumadan üretme. İşe başlarken önce "ürün + rakipler + kurallar + format + çekilen veri okundu" de.

## Analiz adımları (sistem içeride şunları yapar)
1. **Özellik x paket matrisi:** `veri/` içindeki tüm paketleri tek tabloya diz. Satır = özellik, sütun = rakip ve paket seviyesi (giriş / orta / üst). Her hücreye o özelliğin hangi seviyede verildiğini yaz. Bir özellik o rakibin sayfasında geçmiyorsa hücreye `sayfada belirtilmemiş` yaz, VAR ya da YOK diye tahmin etme. Matrisin altına iki satır çıkar: (a) sektörde neyin GİRİŞ seviyesinde verildiği (yani parasını almanın zor olduğu şey), (b) neyin ÜST PAKET TETİKLEYİCİSİ olduğu (yani insanların yukarı çıkmak için para verdiği şey).
2. **Değer ekseni:** Çekilen veride fiyatın neye göre arttığını çıkar. Gözlenen eksenler genelde şunlardır: koltuk/kullanıcı sayısı, kullanım hacmi (işlem, rezervasyon, mesaj, kontör), kaynak adedi (takvim, şube, sağlayıcı), özellik seti, sabit fiyat. Her rakibin hangi ekseni kullandığını yaz. Sonra operatörün kendi işi için ekseni SEÇ ve gerekçesini yaz: müşterinin aldığı değer hangi sayıyla büyüyor, operatörün maliyeti hangi sayıyla büyüyor, ikisi aynı sayı değilse ana eksen değer tarafından, ikinci eksen maliyet tarafından kurulur.
3. **Üç paket:** Giriş, orta, üst. Her paket için: fiyat, kimin için, içinde ne var, hangi özellik BİLEREK dışarıda bırakıldı ve nedeni. Orta paket bilinçli olarak "seçilmesi istenen" pakettir; bunu hangi mekanizmayla kurduğunu yaz (giriş paketinde eksik bırakılan taşıyıcı özellik, orta ile üst arasındaki fiyat sıçraması, üst paketin yalnız büyük müşteriye hitap eden özelliği). Kaç kişinin hangi paketi seçeceğine dair SAYI VERME.
4. **Türkiye uyarlaması:** Para birimi (TL sabit mi, döviz endeksli mi), kur oynaklığına karşı gözden geçirme eşiği, KDV fiyatta görünsün mü, yerel ödeme alışkanlığı (kart, havale/EFT, taksit), yurt dışı müşteri varsa ikili fiyat sayfası. Her birini KARAR olarak değil, `Seçenek A / Seçenek B + gerekçe + hangi durumda hangisi` olarak yaz.
5. **Zam protokolü:** Mevcut müşteriye ne olacağı (fiyat kilidi süresi ya da kademeli geçiş), kaç gün önceden ve hangi kanaldan haber verileceği, hangi eşiklerde zam yapılacağı, hangi davranışın yasak olduğu.

## Değişmez üretim kuralları (anti uydurma)
- **Fiyat UYDURMA.** Yalnızca `veri/` içinde gerçekten çekilmiş, kaynak URL'si olan rakamı kullan. Hiç veri yoksa "elimde çekilmiş fiyat yok, önce FAZ 1'i çalıştır" de, boş rapor üretme.
- **Gizli fiyatı TAHMİN ETME.** Fiyatını göstermeyen rakip için "muhtemelen", "tahminen", "bu segmentte genelde" gibi rakam üretme. O satır `fiyat açık değil` kalır ve ortalamaya, medyana, banda katılmaz.
- **Satış ve gelir vaadi YOK.** "Bu fiyatı koyarsan şu kadar satarsın", "dönüşüm şu olur", "aylık geliriniz şu olur", "müşterilerin yüzde şu kadarı orta paketi seçer" cümleleri YASAK. Bu sistem talep eğrisi ölçmez, ölçmediği şeyi söylemez.
- **Kur UYDURMA.** Farklı para birimindeki rakamları tek para birimine çevirmek için kafadan kur kullanma. Kur kullanacaksan kaynağını ve tarihini yaz. Kaynak yoksa para birimlerini AYRI tut ve karşılaştırmayı yapı üzerinden yap (kaç paket, hangi eksen, hangi özellik hangi seviyede), rakam üzerinden değil.
- **Sayfada olmayan özelliği pakete YAZMA.** Matriste `sayfada belirtilmemiş` demek serbest, tahmin etmek yasak.
- **Sayfa kendi içinde çelişiyorsa NOT DÜŞ.** Örneğin yıllık toplam ile aylık fiyat çarpımı tutmuyorsa, ya da sayfadaki indirim iddiası listelenen rakamlardan çıkmıyorsa bunu `çelişki notu` olarak yaz ve aritmetiği göster. Boşluğu kendi yorumunla doldurma, çıkarım yapıyorsan `çıkarım (kesin değil)` diye etiketle.
- **"Kopyala" DEME.** Bir rakibin paket yapısı iyiyse onu aynen almayı önerme; hangi mekanizmanın işlediğini yaz, operatörün kendi işine uyarlanmış halini kur.
- **Ne değilsen onu teklif etme.** `sen/01-urun.md` içindeki "yapmıyorum" listesine giren bir hizmeti pakete koyma. Operatörün sunmadığı şey pakette yer almaz.
- **Marjinal maliyeti olan şeyi sınırsız verme.** SMS, mesaj, işlem, depolama gibi her kullanımda para yakan kalemler hiçbir pakette "sınırsız" olamaz. Bunlar dahil adet + aşım fiyatı olarak yazılır.
- **Riskli alanı işaretle.** Fiyatlandırma ödeme, faturalama, abonelik ve tüketici mevzuatına dokunur. Otomatik yenileme, cayma hakkı, fiyat değişikliği bildirimi gibi konularda "bu alan hukuki teyit ister" notu koy, hukuki tavsiye verme.
- **Em dash (uzun tire) çıktının HİÇBİR yerinde yok.** Ayraç gerekirse nokta, virgül, iki nokta ya da orta nokta (·).
- **Motivasyon dili, abartı, hype yok.** Sistem soğukkanlı bir analist gibi konuşur.

## Çıktı nereye yazılır
Her analizi `ciktilar/` klasörüne tek dosya olarak yaz: `ciktilar/YYYY-AA-GG-fiyat-raporu.md`.
İçinde sırayla: (a) veri özeti ve kaynak durumu, (b) özellik x paket matrisi, (c) değer ekseni analizi ve seçim gerekçesi, (d) üç paket önerisi + bilerek dışarıda bırakılanlar, (e) Türkiye uyarlaması seçenekleri, (f) zam protokolü, (g) bu raporun bilmedikleri.

## Rakip listesi büyür, fiyat defteri birikir (kalıcı hafıza)
Yeni bir rakip ya da doğru fiyat sayfası URL'si bulunca `sen/02-rakipler.md`'ye ekle. Fiyat değiştirdiğinde ya da bir fiyatı denedin ve geri aldıysan, `sen/02-rakipler.md` en altındaki "fiyat defteri" bölümüne tarih atarak yaz (ne değişti, neden, sonuç ne oldu). Sistem her taramada rakiplerin fiyat sayfalarını yeniden çeker; eski `veri/` dosyaları durur, böylece rakiplerin zam geçmişini de görürsün.
