# Fiyat Raporu · Meydan Randevu · 2026-07-26

8 kaynak tarandı. 6'sından fiyat çekildi. 1'i fiyatını herkese açık göstermiyor (Zenoti). 1'inin fiyat sayfasından veri alınamadı (Fresha). Ortalama, medyan ve bant hesabına yalnız fiyatı çekilen 6 kaynak girdi.

Okunan dosyalar: `sen/01-urun.md` · `sen/02-rakipler.md` · `format/kurallar.md` · `format/rapor-format.md` · `veri/cekilen-2026-07-26.md`

---

## A · Veri özeti ve kaynak durumu

| Kaynak | Kaynak URL | Durum | Fiyat ekseni | Para birimi |
|---|---|---|---|---|
| Calendly | calendly.com/pricing | `fiyat çekildi` | koltuk başına | USD |
| Setmore | setmore.com/pricing | `fiyat çekildi` | kullanıcı başına + ücretsizde hacim tavanı | USD |
| SimplyBook.me | simplybook.me/en/pricing | `fiyat çekildi` | rezervasyon hacmi + sağlayıcı adedi | EUR |
| Acuity Scheduling | acuityscheduling.com/pricing | `fiyat çekildi` | takvim adedi | USD |
| Zenoti | zenoti.com/pricing | `fiyat açık değil` | okunamadı | okunamadı |
| Fresha | fresha.com/for-business/pricing | `kaynak yok` | okunamadı | okunamadı |
| BizimHesap (yerel) | bizimhesap.com/fiyatlar | `fiyat çekildi` | paket + kontör hattı | TRY, KDV hariç |
| Paraşüt (yerel) | parasut.com/on-muhasebe-fiyatlari | `fiyat çekildi` | paket + hediye kontör | TRY, KDV hariç |

**Hesaba katılmayanlar ve nedeni**
- **Zenoti:** sayfa açıldı, hiçbir para biriminde tek bir rakam yok, ziyaretçi teklif ve demo adımına yönlendiriliyor. Rakam tahmin edilmedi. Bandın dışında bırakıldı. Tek gözlem olarak kaldı: bu segmentin üst ucunda fiyatını gizleyip satış görüşmesiyle fiyatlayan bir oyuncu var.
- **Fresha:** fiyat sayfası çekildi ama dönen içerikte ücret, komisyon oranı ya da abonelik rakamı bulunmadı. "Komisyon alıyordur" diye yorum yapılmadı, satır `kaynak yok` kaldı.
- **Enterprise satırları:** Setmore, SimplyBook ve Acuity'nin Enterprise paketlerinde rakam yok. Calendly'nin Enterprise satırı bir alt sınır veriyor ("$15k/yıl'dan başlar"), tek paket fiyatı vermiyor. Hiçbiri bant hesabına girmedi.
- **Calendly aylık rakamları:** sayfa "aylık faturalama daha pahalıdır" diyor ama rakam vermiyor. `sayfada belirtilmemiş`, tahmin edilmedi.

**Çelişki notu (BizimHesap):** yıllık tutarlar listelenen aylık fiyatın tam 12 katı (870 × 12 = 10.440 · 1.100 × 12 = 13.200), yani listelenen fiyat üzerinden yıllık indirim görünmüyor. Buna rağmen sayfa ₺4.560 ve ₺4.800 tasarruftan bahsediyor. `çıkarım (kesin değil)`: iddia doğruysa gerçek aylık fiyat ₺1.250 ve ₺1.500 olmalı, gösterilen rakamlar yıllık ödemeye karşılık gelen aylık eşdeğer olmalı. Sayfa bunu yazmadığı için kesin sayılmadı.

**Sayı olarak ne çıktı (yalnız çekilen veriden)**
- USD tarafında ilk ücretli paket bandı (yıllık faturalama): $5 (Setmore, kullanıcı başına) · $10 (Calendly, koltuk başına) · $16 (Acuity, sabit, 1 takvim). Orta değer $10.
- EUR tarafında ilk ücretli paket: €11,90 (SimplyBook). Tek gözlem olduğu için bant kurulmadı.
- **USD ve EUR birbirine çevrilmedi, TL'ye çevrilmedi. Kur uydurulmadı.** Farklı para birimleri arasında karşılaştırma yalnız yapı üzerinden yapıldı.
- Üç kademeli yapıların çarpanları: orta paket girişin 1,69 katı (Acuity 27/16) ve 2,09 katı (SimplyBook 24,90/11,90). Üst paket ortanın 1,81 katı (Acuity 49/27) ve 2,00 katı (SimplyBook 49,90/24,90). **Gözlenen bant: orta ≈ giriş × 1,7 ile 2,1 · üst ≈ orta × 1,8 ile 2,0.**
- Gerçek yıllık indirim (aylık ve yıllık rakamı birlikte verilen kaynaklardan): Acuity yaklaşık %20, SimplyBook yaklaşık %17 ile %20. Calendly sayfasında yazan oranlar %16 ve %20. **Setmore aykırı: $12'den $5'e, yaklaşık %58.** Aykırı değer banda katılmadı, ayrı işaretlendi.
- Yerel TL bandı (KDV hariç): tek işlevli ürün ₺150/ay (Paraşüt e-Portal) · tam kapsamlı ön muhasebe ₺870 ile ₺1.100/ay (BizimHesap Temel ve Tam, Paraşüt ₺940). İki yerel kaynak da fiyatı **KDV hariç** gösteriyor.
- İki yerel kaynak da kullanım tarafını ayrı kontör hattıyla satıyor. BizimHesap'ta kontör birim fiyatı adet büyüdükçe düşüyor (200'lük pakette kontör başına ₺2,45, 100.000'lik pakette ₺0,99).

---

## B · Özellik x paket matrisi

Hücre değerleri: `giriş` (ücretsiz ya da ilk ücretli seviye), `orta`, `üst`, `yok`, `belirtilmemiş` (sayfada geçmiyor, tahmin edilmedi).

| Özellik | Calendly | Setmore | SimplyBook.me | Acuity |
|---|---|---|---|---|
| Ücretsiz katman | giriş (Free) | giriş (Free) | giriş (Free) | **yok** (sayfa açıkça yazıyor) |
| Online randevu sayfası / widget | giriş | giriş | giriş | giriş |
| E-posta hatırlatma | orta (Standard) | giriş (Free) | belirtilmemiş | giriş (Starter) |
| SMS hatırlatma | belirtilmemiş (tür yazmıyor) | orta (Pro) | belirtilmemiş | orta (Standard) |
| Online ödeme alma | orta (Standard) | giriş (Free) | orta (Basic) | giriş (Starter) |
| Kapora / depozito | belirtilmemiş | belirtilmemiş | orta (Basic) | belirtilmemiş |
| İki yönlü takvim senkronu | orta (Standard, çoklu takvim) | orta (Pro) | belirtilmemiş | belirtilmemiş |
| Marka kaldırma | belirtilmemiş | orta (Pro) | üst (Premium, kısmi · Enterprise, tam) | üst (Premium) |
| API erişimi | üst (Enterprise) | orta (Pro) | üst (Enterprise) | üst (Premium) |
| SSO / SAML | üst (Teams eklenti, Enterprise) | belirtilmemiş | orta (Standard) | belirtilmemiş |
| Uyum sertifikası (HIPAA vb.) | üst (Enterprise, güvenlik incelemesi) | belirtilmemiş | orta (Standard) | üst (Premium) |
| Çoklu lokasyon yönetimi | belirtilmemiş | belirtilmemiş | üst (Enterprise) | üst (Premium) |
| Öncelikli destek | orta (Standard, 7/24 sohbet) | orta (Pro) | belirtilmemiş | belirtilmemiş |
| Gelişmiş yönlendirme (round robin, lead) | üst (Teams) | belirtilmemiş | belirtilmemiş | belirtilmemiş |

### Okuma 1 · sektörde giriş seviyesinde verilen
Online randevu sayfası ve widget: 4 kaynağın 4'ünde de giriş seviyesinde. E-posta hatırlatma: rakamı çekilen 3 kaynakta giriş ya da ilk ücretli seviyede. Online ödeme alma: 4 kaynağın 3'ünde giriş ya da ilk ücretli seviyede.
**Sonuç:** bu üçü için ayrı para istemek zor. Bunlar ürünün var olma şartı, üst pakete konursa fiyat itirazı buradan gelir.

### Okuma 2 · üst paket tetikleyicileri
- **API erişimi:** 4 kaynağın 4'ünde de en üst seviyede (Setmore'da Pro, ki Pro onun tek ücretli paketi).
- **Marka kaldırma:** rakamı çekilen 3 kaynakta üst ya da tek ücretli seviyede.
- **Çoklu lokasyon:** görüldüğü 2 kaynakta üst seviyede.
- **Uyum sertifikası:** görüldüğü 3 kaynakta orta ve üst seviyede.
- **SMS hatırlatma:** görüldüğü 2 kaynakta (Setmore, Acuity) giriş seviyesinin BİR ÜSTÜNDE. İkisi de e-postayı giriş seviyede verip SMS'i yukarı koymuş.

**En kritik bulgu:** SMS'i giriş seviyesinden yukarı koymak sektörde iki bağımsız kaynakta tekrar ediyor. Bunun teknik sebebi büyük olasılıkla gönderilen her mesajın gerçek bir birim maliyeti olması. Aynı mantık `sen/01-urun.md` içindeki maliyet yapına birebir uyuyor.

---

## C · Değer ekseni

### Rakipler neye göre ücret alıyor
| Kaynak | Eksen |
|---|---|
| Calendly | koltuk başına (kişi) |
| Setmore | kullanıcı başına (kişi) + ücretsiz katmanda hacim tavanı (ayda 200 randevu) |
| SimplyBook.me | kullanım hacmi (ayda 50 / 100 / 500 / 2.000 rezervasyon) + kaynak adedi (sağlayıcı) + özellik adedi |
| Acuity | kaynak adedi (1 / 6 / 36 takvim) |
| BizimHesap | özellik seti paketi + ayrı kullanım hattı (kontör) |
| Paraşüt | özellik seti paketi + hediye kullanım (kontör) |

Yani sektörde tek bir doğru eksen yok. İki büyük aile var: **kişi sayısı** (Calendly, Setmore) ve **kapasite ya da kullanım** (SimplyBook, Acuity). Yerel iki kaynak ise ana ekseni özellik paketine kurup kullanımı ayrı hatta atmış.

### Senin işin için iki soru

**1. Müşterinin aldığı değer hangi sayıyla büyüyor.**
Meydan Randevu'nun ürettiği değer, gelmeyen müşteri yüzünden boş kalan saatin azalması. Bir salonda boş kalabilecek saat sayısı personel sayısıyla büyüyor. 1 kişilik berberde kurtarılan saat az, 8 kişilik güzellik salonunda çok daha fazla. Şube sayısı da aynı yönde çarpan.
→ **Değer ekseni: personel sayısı (ve şube sayısı).**

**2. Senin maliyetin hangi sayıyla büyüyor.**
Sabit maliyetin (sunucu, altyapı) müşteri sayısından bağımsız. Değişken maliyetin tek kalem: gönderilen SMS.
→ **Maliyet ekseni: gönderilen SMS adedi.**

İki sayı farklı. `format/kurallar.md` §2 kuralı gereği ana eksen değer tarafından kurulur, ikinci eksen maliyet tarafını kapatır.

### Seçim
- **Ana eksen: personel bandı.** Kişi BAŞINA değil, BANT olarak (1-2 personel / 8 personele kadar / sınırsız personel + şube). Gerekçe: hedef kitlende yarı zamanlı ve dönemlik personel yaygın. Kişi başına fiyatlarsan işletme hesap paylaşarak sayıyı düşük gösterir, sen de her ay personel sayısını denetlemek zorunda kalırsın. Bant, kişi başına modelin kapasite mantığını korur ve denetim yükünü kaldırır.
- **İkinci eksen: SMS dahil adedi + aşım.** Her pakette dahil bir SMS adedi olur, üstü birim fiyatla faturalanır. Hiçbir pakette sınırsız SMS olmaz. Gerekçe: her mesaj gerçek para, sınırsız demek maliyetini müşterinin davranışına teslim etmek demek. Sektörde de aynı refleks var (Setmore ve Acuity SMS'i giriş seviyesinden yukarı koymuş).

### Seçilmeyen eksenler ve nedeni
- **Rezervasyon hacmi (SimplyBook modeli):** ana eksen olarak seçilmedi. Senin taşıyıcı değerin hatırlatma göndermek. Hacme göre fiyatlarsan işletme para biriktirmek için hatırlatma göndermekten kaçınır, ürün değer üretmeyi bırakır, iptal riski artar. Bu ters teşviki kurmaya değmez.
- **Koltuk başına (Calendly modeli):** ana eksen olarak seçilmedi, mantığı bant halinde alındı. Sebep yukarıda.
- **Takvim adedi (Acuity modeli):** salonlarda takvim sayısı zaten personel sayısına eşit, ayrı bir eksen olarak fazladan bir şey söylemiyor. Personel bandı daha anlaşılır.
- **Sabit tek fiyat (şu anki durumun):** bırakıldı. 1 kişilik berberle 8 kişilik salon aynı parayı ödüyor, büyüyen müşteriden pay alamıyorsun.
- **Komisyon modeli:** değerlendirilemedi. Bu modeli kullandığı bilinen kaynağın (Fresha) fiyat verisi çekilemedi, o yüzden hakkında yorum yapılmadı.

---

## D · Üç paket önerisi

> Fiyatlar TRY, hepsi **+ KDV**, aylık faturalama. Dayanak: iki yerel kaynağın ikisi de TL ve KDV hariç gösteriyor. Yurt dışı rakiplerin USD ve EUR rakamları TL rakamı üretmek için KULLANILMADI (kur uydurulmadı); onlardan yalnız YAPI okundu (kaç kademe, hangi çarpan, hangi özellik hangi seviyede).

### Paket 1 · Tezgah · ₺299/ay + KDV
- **Kimin için:** tek başına ya da bir yardımcıyla çalışan berber, kuaför, tırnak stüdyosu, tek koltuklu klinik.
- **İçinde ne var:** 1 ile 2 personel · online randevu sayfası · e-posta onay ve hatırlatma · **250 SMS hatırlatma dahil** · mobil yönetim · temel gelmeyen müşteri listesi.
- **Bu pakette bilerek YOK:**
  - Online kapora alma. Sebep: kapora, gelmeme derdini en sert çözen özellik. Onu bir üst pakete taşıyıcı olarak koyuyoruz.
  - İki yönlü takvim senkronu. Sebep: tek kişilik işletmede çakışma riski düşük, ihtiyaç orta segmentte başlıyor (Calendly ve Setmore da bunu giriş seviyeden yukarıda veriyor).
  - Marka kaldırma. Sebep: 3 kaynağın 3'ünde üst ya da tek ücretli pakette. Sektör normu.
  - Sınırsız SMS. Sebep: her mesaj gerçek maliyet. Hiçbir pakette olmayacak.
- **Fiyatın dayanağı:** yerel bantta tek işlevli ürünün tabanı ₺150/ay + KDV (Paraşüt e-Portal). Meydan Randevu tek belge geçidinden geniş (personel, randevu sayfası, hatırlatma), tam kapsamlı ön muhasebe paketinden (₺870 ile ₺1.100) dar. Tabanın yaklaşık iki katı, tam kapsam bandının yaklaşık üçte biri.

### Paket 2 · Salon · ₺599/ay + KDV
- **Kimin için:** 3 ile 8 personelli tek şubeli salon, klinik, veteriner. Hedef kitlenin çoğunluğu.
- **İçinde ne var:** 8 personele kadar · Tezgah'ın tümü · **online kapora alma** · **1.000 SMS dahil** · iki yönlü takvim senkronu · personel bazında doluluk ve gelmeyen müşteri raporu · öncelikli destek.
- **Bu pakette bilerek YOK:**
  - Marka kaldırma. Sebep: üst paket tetikleyicisi, 3 kaynakta da üstte.
  - API erişimi. Sebep: 4 kaynağın 4'ünde de en üst seviyede. Sektörün en tutarlı üst paket tetikleyicisi.
  - Çoklu şube yönetimi. Sebep: tek şubeli işletmenin ihtiyacı yok, üst paketin varlık sebebi bu.
- **Fiyatın dayanağı:** çekilen üç kademeli yapılarda orta paket girişin 1,7 ile 2,1 katı (Acuity 1,69 · SimplyBook 2,09). 299 × 2,00 = 598, yuvarlandı.

### Paket 3 · Zincir · ₺1.099/ay + KDV
- **Kimin için:** 2 ile 5 şubesi olan, personel sayısı değişken küçük zincir.
- **İçinde ne var:** sınırsız personel, 5 şubeye kadar · Salon'un tümü · **2.500 SMS dahil** · marka kaldırma (randevu sayfası zincirin markasıyla görünür) · API erişimi · şube karşılaştırma raporu · kurulum ve personel eğitimi (ilk ay).
- **Bu pakette bilerek YOK:**
  - Sınırsız SMS. Sebep: aynı kural, marjinal maliyeti olan kalem sınırsız verilmez.
  - Yerinde kurulum, donanım, çağrı merkezi. Sebep: `sen/01-urun.md` "yapmıyorum" listesinde. Sunmadığın hizmet pakete girmez.
  - Muhasebe, fatura, stok. Sebep: aynı liste.
  - 5 şubeden fazlası. Sebep: solo operatör kapasiten sınırlı. Daha büyüğü için rakam yazma, "görüşelim" kutusu koy.
- **Fiyatın dayanağı:** gözlenen üst çarpan ortanın 1,8 ile 2,0 katı (Acuity 1,81 · SimplyBook 2,00). 599 × 1,83 = 1.096, yuvarlandı. Bu rakam yerel tam kapsamlı ön muhasebe bandının üst ucuna (₺1.100) denk geliyor, yani yerel pazarın küçük işletme yazılımına ödemeye alışkın olduğu tavanın hemen altında duruyor.

### Orta paket neden seçilmesi istenen paket
Mekanizma dört parçalı:
1. **Personel bandı sıçraması.** Hedef kitlen 1 ile 8 personel arası. Giriş paketi 2 personelde bitiyor, yani hedef kitlenin büyük kısmı zaten giriş bandına sığmıyor.
2. **Taşıyıcı özellik orta pakette.** Gelmeme derdinin en sert çözümü olan online kapora yalnız Salon'da var.
3. **Üst paket dar kapı.** Zincir paketindeki her şey (çoklu şube, marka kaldırma, API) tek şubeli işletme için gereksiz. Tek şubeli müşteri Zincir'e bakıp "bunlar bana lazım değil" diyor ve ortada duruyor.
4. **Değer artışı fiyat artışını geçiyor.** Giriş 299'dan orta 599'a fiyat 2,0 kat artarken personel kapasitesi 4 kat, dahil SMS 4 kat artıyor.

> Kaç kişinin hangi paketi seçeceğine dair sayı verilmedi ve verilmeyecek. Bu sistem talep ölçmez.

### Taban kontrolü
- Sabit maliyet ayda yaklaşık ₺900 (`sen/01-urun.md`). Giriş paketi 4 müşteride sabit maliyeti karşılıyor (299 × 4 = 1.196).
- **Değişken maliyet kontrolü YAPILAMADI.** `sen/01-urun.md` SMS'in gerçek para olduğunu yazıyor ama **birim maliyet rakamı verilmemiş**. SMS aşım fiyatını sistem uyduramaz. Kural şu: aşım birim fiyatı, senin ödediğin SMS birim maliyetinin en az 2 katı olsun (aradaki fark destek ve tahsilat maliyetini karşılar). Rakamı `sen/01-urun.md`'ye yazarsan bir sonraki raporda dahil adetleri de kontrol edilir.

### Riskli sapmalar (bilinçli, itiraz planıyla)
1. **Kapora ve online ödemeyi giriş paketinden çıkardık.** Sektör normu tersi: Setmore ücretsizde, Acuity giriş pakette, SimplyBook ilk ücretli pakette ödeme alma veriyor. Bu bilinçli bir sapma, çünkü senin taşıyıcı değerin kapora. **İtiraz gelirse:** giriş pakete düz online ödemeyi koy, kaporayı orta pakette tut. İkisi ayrı özellik, ayrılabilir.
2. **Ücretsiz plan koymadık.** Çekilen 4 rakibin 3'ünde ücretsiz katman var, Acuity'de yok. `sen/01-urun.md` kırmızı çizgisi ücretsiz sonsuz plan istemiyor (destek yükü). Acuity aynı tercihi yapmış ve sayfasında bunu açıkça yazıyor. **Karşılığı:** ücretsiz plan yerine deneme süresi koy. Çekilen kaynaklarda deneme 7 gün (Acuity) ile 14 gün (Calendly, BizimHesap, Paraşüt) arasında.
3. **Üst paket yerel tavanın hemen altında.** ₺1.099 rakamı, yerel pazarın tam kapsamlı iş yazılımına ödediği banda (₺870 ile ₺1.100) çıkıyor. Tek işlevli bir araç için bu iddialı bir yer. Dayanağı çoklu şube ve marka kaldırma. **İtiraz gelirse:** dahil SMS'i 2.500'den 1.500'e çekip fiyatı ₺899'a indir, marka kaldırmayı koru.

---

## E · Türkiye uyarlaması (karar değil, seçenek)

### 1. Para birimi
- **Seçenek A · TL sabit fiyat.** Yerel iki kaynağın ikisi de TL sabit gösteriyor. Alıcın Türkiye'deki salon sahibi, TL bekliyor. Anlatması kolay, itiraz azaltır.
- **Seçenek B · döviz endeksli fiyat.** Maliyetinin bir kısmı (sunucu, altyapı) genelde dövizle faturalanır, bu kısmı korur. Ama küçük işletme müşterisi her ay değişen faturayı sevmez ve iptal sebebi olur.
- **Hangi durumda hangisi:** yurt dışı müşterin yokken A. Gelirinin dörtte birinden fazlası yurt dışına dönerse B'yi yalnız o segmentte düşün.

### 2. Kur oynaklığı ve gözden geçirme eşiği
`sen/01-urun.md` altı ayda birden sık fiyat değiştirmek istemediğini yazıyor. Buna uyan yapı: fiyatı sabit tut, ama **altyapı maliyetinin aylık gelire oranı** için bir eşik belirle ve o eşiği geçince gözden geçir. Eşiğin rakamını sen koyarsın, sistem senin adına oran uydurmaz. Ölçmen gereken tek sayı: altyapı gideri ÷ aylık abonelik geliri.

### 3. KDV fiyatta görünsün mü
- **Seçenek A · `+ KDV` yaz.** Yerel iki kaynağın ikisi de böyle yapıyor (BizimHesap "₺870/ay + KDV", Paraşüt "₺150 + KDV"). İşletmeye satıyorsun, alıcın KDV'yi zaten indiriyor, listelenen rakam düşük görünür.
- **Seçenek B · KDV dahil tek rakam yaz.** Alıcı ödeyeceği toplamı görür, satış konuşmasında "bir de üstüne KDV mi" sürprizi çıkmaz.
- **Hangi durumda hangisi:** alıcın şirket ya da şahıs işletmesi ve fatura alıyorsa A (yerel norm bu). Alıcının önemli kısmı KDV indiremiyorsa B.
- **Not:** hangisini seçersen seç, sayfada ve sözleşmede AYNI gösterimi kullan. Karışık gösterim itiraz üretir.

### 4. Yıllık faturalama ve yerel ödeme alışkanlığı
- Çekilen veride yıllık indirim bandı %16 ile %20 (Acuity %20, SimplyBook %17 ile %20, Calendly sayfasında %16 ve %20). Setmore %58 ile aykırı, banda katılmadı.
- Yerel iki kaynakta yıllık toplam listelenen aylığın tam 12 katı görünüyor (yukarıdaki çelişki notu). Yani yerel pazarda yıllık indirimi açıkça ilan etmek zorunlu bir norm değil.
- **Seçenek A · yıllıkta %17 indirim** ("2 ay bedava" çerçevesi, anlatması kolay).
- **Seçenek B · yıllıkta indirim yok, yerine ek SMS kontörü** (nakit akışını korur, birim fiyatını düşürmez).
- **Ödeme yolu:** aylıkta kredi kartıyla otomatik yenileme, yıllıkta havale ve EFT seçeneğini de aç. Yıllık peşin tahsilat nakit akışını rahatlatır.
- **Dürüstlük notu:** Türkiye'deki ödeme alışkanlığı hakkında bu raporda ÖLÇÜLMÜŞ veri yok. Bu madde çekilen fiyat sayfalarından gelmiyor, genel gözlem olarak duruyor. Kendi müşterilerine hangi yolla ödemek istediklerini sor, cevabı `sen/02-rakipler.md` fiyat defterine yaz.

### 5. Yurt dışı müşteri ve ikili fiyat
Şu an yurt dışı müşterin yok. Olduğunda: **ayrı sayfa, ayrı para birimi.** Aynı sayfada iki para birimini yan yana gösterme; alıcı ikisini çarpıp karşılaştırır ve ucuz olanı ister. Ayrıca yurt dışı satışta faturalama ve vergi tarafı değişir, bu **hukuki teyit ister**.

---

## F · Zam ve fiyat değiştirme protokolü

### Mevcut müşteriye ne olacak
**Seçilen yol: 12 ay fiyat kilidi.** Bir müşteri hangi fiyattan girdiyse 12 ay o fiyatı öder. 12. ayın sonunda güncel fiyata geçer, geçiş öncesi haber verilir.
Alternatif yol kademeli geçiş (zam iki ya da üç taksitte uygulanır). İkisinden birini seç, ikisini aynı anda uygulama, müşteri hangi kuralın geçerli olduğunu anlamaz.

### Haber süresi ve kanal
- Aylık abonede: yeni fiyattan **en az 30 gün önce** e-posta + panel içi bildirim.
- Yıllık abonede: yenileme tarihinden **en az 30 gün önce** aynı iki kanaldan.
- Bildirimde üç şey olur: eski fiyat, yeni fiyat, yürürlük tarihi. Gerekçe tek cümle, savunma paragrafı yazma.
- **Bu madde hukuki teyit ister:** abonelikte fiyat değişikliği bildirimi ve otomatik yenileme koşulları tüketici ve mesafeli satış mevzuatına tabidir. Süreleri ve metni bir hukukçuya doğrulat.

### Hangi eşikte zam yapılır
Aşağıdakilerden **en az ikisi** birlikte gerçekleşmeden zam yok:
1. SMS birim maliyetin ya da altyapı giderin, fiyatı son koyduğun tarihe göre belirgin arttı (rakamı sen tanımla, `sen/01-urun.md` maliyet bölümünü güncelleyerek).
2. Pakete son 12 ayda yeni ve gerçekten kullanılan bir yetenek eklendi.
3. Son fiyat değişikliğinin üzerinden 12 aydan fazla geçti.

Tek başına "rakip zam yaptı" zam sebebi sayılmaz. Rakibin maliyet yapısını bilmiyorsun.

### Yasak davranışlar
- **Sessiz zam:** haber vermeden yenilemede yüksek tutar çekmek.
- **Limit daraltma:** aynı fiyata daha az vermek (dahil SMS'i 1.000'den 700'e düşürmek gibi). Bu da zamdır, aynı bildirim kuralına tabidir.
- **Eski paketi sessizce kapatmak:** eski paketi ya koru ya da kapat, kararını duyur.
- **Kişiye özel gizli indirim:** aynı paket için farklı müşteriye farklı fiyat, duyulduğunda güveni bitirir. İndirim yapılacaksa kuralı olsun (yıllık ödeme, erken dönem müşterisi gibi).

---

## G · Bu raporun bilmedikleri

1. **Talep ölçülmedi.** Bu rapor rakiplerin yapısını ve senin maliyetini okur. Kaç kişinin ₺599'a evet diyeceğini BİLMEZ ve tahmin etmez. Fiyat önerisinin doğruluğu ancak gerçek satış konuşmalarında test edilir.
2. **Fiyatını göstermeyenlerin rakamı bilinmiyor.** Zenoti fiyat vermiyor, Fresha'nın fiyat verisi çekilemedi. Bu ikisi hiçbir hesaba girmedi. Segmentin üst ucunda ne olduğu konusunda kör nokta var.
3. **Para birimleri çevrilmedi.** USD ve EUR rakamlarından TL rakamı türetilmedi. TL önerisi yalnız iki yerel kaynağın TL bandına dayanıyor. İki kaynak az bir örneklem. Üç dört yerel kaynak daha eklersen bant sağlamlaşır.
4. **Yerel kaynaklar birebir rakip değil.** BizimHesap ve Paraşüt ön muhasebe satıyor, randevu satmıyor. Onlardan okunan şey TL bandı, KDV gösterimi ve kontör alışkanlığı; paket içeriği değil.
5. **Sayfalar tarih damgalı.** Hepsi 2026-07-26'da çekildi. Rakipler fiyatını değiştirmiş olabilir. Ayda bir yeniden çalıştır.
6. **Ödeme alışkanlığı maddesi ölçülmüş veri değil**, genel gözlem. E bölümünde işaretlendi.
7. **Sonraki adım:** bu üç paketi bir sayfaya koy, beş gerçek işletme sahibiyle konuş, itirazın nerede geldiğini not al. İtiraz fiyatta mı, paket içeriğinde mi, KDV gösteriminde mi. Cevabı `sen/02-rakipler.md` fiyat defterine yaz, bir sonraki raporda sistem oradan da okur.
