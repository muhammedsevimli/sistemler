# Ürün Planı · URL'den Kurulum Planı · Otomatik Okuma Kuralı (evrensel kopya)

> Bu dosya `CLAUDE.md` ile birebir aynı içeriktedir. `CLAUDE.md`'yi Claude Code okur; bu dosyayı Codex, Cursor, Windsurf gibi `AGENTS.md` standardını kullanan araçlar okur. Hangi aracı kullanırsan kullan sistem aynı çalışır.
> Birini değiştirirsen diğerini de aynı şekilde değiştir.
> Sen hiçbir şey ayarlamıyorsun. Araç bu klasörde çalışırken bu dosyayı kendiliğinden yükler.
> Amaç: beğendiğin bir ürünün mantığını çıkarmak ve onu SENİN işine uyarlanmış, sırayla kurulabilir bir plana çevirmek. Sen sadece bir URL veriyorsun; sistem siteyi kendisi geziyor, mantığını söküyor, üç dosya üretiyor: ürün planı, veri şeması, Claude Code prompt seti.

## Bu sistemin duruşu (değişmez, en önemli bölüm)
Bu sistem bir **klon üreticisi değildir.** Hedef ürünün mantığını çıkarır, kopyasını değil.

- Sistem hiçbir yerde "aynısını kur" demez. Çıktı hep "senin nişinde, senin kurabileceğin sürüm"dür.
- Marka adı, logo, renk sistemi, birebir arayüz tasarımı, sayfa metni, ikon seti, telifli içerik ve lisanslı kaynak kod KOPYALANMAZ. Sistem bunları "kopyalanmaz" diye ayrı bir listede işaretler.
- Kopyalanabilen tek şey: bir ürünün **mantığı**. Yani hangi işi hangi sırayla çözdüğü, hangi nesneleri tuttuğu, kullanıcıyı ilk değere nasıl götürdüğü, neye göre para aldığı. Bunlar fikir düzeyindedir ve zaten sitede herkese açık yazar.
- Hedef ürünün kitlesi ile senin kitlen aynı değildir. Sistem `sen/01-profil.md`'yi okur ve her özelliği senin nişine göre yeniden sıralar. Hedefte olan bir özellik senin v1'ine girmeyebilir; hedefte hiç olmayan bir özellik senin nişinde şart olabilir. Sistem ikisini de ayrı tabloda gösterir.
- Sistem hedef üründe lisans (açık kaynak lisansı, kullanım şartı) tespit ederse bunu rapora yazar ve "kodu almak yok, mantığı çıkarmak var" notunu düşer.

## Sistem ne yapıyor (iki faz)
1. **Otomatik site okuma (sen kopyalamıyorsun):** `sen/02-hedef.md`'deki URL'i alır. Claude Code'un WEB ARAÇLARIYLA (WebFetch + WebSearch) ana sayfayı, özellikler sayfasını, fiyat sayfasını ve varsa dokümantasyonu KENDİSİ gezer. Her sayfadan gerçekten yazan bilgiyi çeker, kaynak linkiyle `cozumleme/cozumleme-YYYY-AA-GG.md` dosyasına yazar. Erişemediği sayfayı "erişilemedi" diye işaretler, içerik uydurmaz.
2. **Senin sürümüne çevirme (otomatik):** Çözümlemeyi `sen/01-profil.md` ile birleştirir ve `ciktilar/` klasörüne üç dosya yazar: ürün planı, veri şeması, Claude Code prompt seti.

## FAZ 1 · Site okuma istendiğinde
`sen/01-profil.md` ve `sen/02-hedef.md` dosyalarını oku. Sonra hedef URL için sırayla:

1. **Ana sayfa:** `WebFetch` ile hedef URL'i çek. Şunları çıkar: ürün tek cümleyle ne yapıyor, kime hitap ediyor (sayfada yazan kitle ifadeleri), sayfada adı geçen tüm özellikler.
2. **Özellikler sayfası:** ana sayfada özellik linki varsa (`/features`, `/product`, `/urunler`, `/ozellikler` gibi) onu da `WebFetch` ile çek. Özellik envanterini genişlet. Her özelliğin yanına hangi sayfada geçtiğini yaz.
3. **Fiyat sayfası:** `/pricing`, `/fiyat`, `/plans` ya da ana sayfadaki fiyat bölümünü çek. Şunları çıkar: fiyat neye göre artıyor (kullanıcı sayısı, kullanım hacmi, site sayısı, özellik paketi), plan basamakları ve sayfada LİTERAL yazan rakamlar, ücretsiz deneme var mı, her planda ortak olan ne.
4. **Dokümantasyon:** `/docs`, `/help`, `/support`, `/api` varsa çek. Doküman başlıkları veri modelinin en dürüst kaynağıdır: hangi nesneler var, hangi metrikler tutuluyor, hangi ayarlar nereye bağlı. Varsa metrik/tanım sayfasını ayrıca çek.
5. **Boşluk kalırsa `WebSearch`:** bir sayfaya erişilemediyse ya da fiyat mantığı belirsizse `WebSearch` ile "<ürün adı> pricing" / "<ürün adı> features" araması yap. Yalnız arama sonucunda LİTERAL geçen bilgiyi al, yorum ekleme.
6. **Lisans / kullanım şartı:** ürün açık kaynaksa ya da sayfada lisans geçiyorsa lisans adını aynen yaz.

Çektiğin her bilgiyi `cozumleme/cozumleme-YYYY-AA-GG.md` dosyasına `format/cozumleme-format.md` yapısında yaz. Her satırda kaynak URL zorunlu. Sonda tek satır özet: hangi sayfa çekildi, hangisine erişilemedi.

## FAZ 2 · Plan istendiğinde şu dosyaları SIRAYLA oku (zorunlu)
1. `sen/01-profil.md` · kimsin, kime hizmet veriyorsun, ne kurabilirsin, sınırların ne.
2. `sen/02-hedef.md` · hedef URL ve neyi merak ettiğin.
3. `format/kurallar.md` · çekirdek / süs ayrım testi, kopyalama koruması, anti uydurma kuralları.
4. `format/plan-format.md` · üç çıktının yapısı.
5. `cozumleme/` klasöründeki en güncel çözümleme dosyası.

Bu dosyaları okumadan üretme. İşe başlarken önce "profil + hedef + kurallar + format + çözümleme okundu" de.

## FAZ 2 adımları (sistem içeride şunları yapar)
1. **Özellikleri kovalara ayır.** Çözümlemedeki her özelliği `format/kurallar.md`'deki teste sok ve dört kovadan birine koy: ÇEKİRDEK (v1), DESTEK (v1.5), SÜS (sonra), GİRME (senin sınırların ya da altyapı yükü nedeniyle hiç). Her satırda tek cümle gerekçe zorunlu. Gerekçesiz kova yok.
2. **Nişe uyarlama tablosunu kur.** İki sütun: (a) hedefte var ama senin nişinde gereksiz, (b) hedefte yok ama senin nişinde şart. (b) sütunu profil dosyandan ve TR gerçeğinden çıkar. Bu tablo klon ile uyarlamayı ayıran yerdir, boş bırakılmaz.
3. **Kullanıcı akışını yaz.** Üç halka: kayıt, ilk değer anı (kullanıcının "tamam, işe yarıyor" dediği ilk an), tekrar gelme sebebi. İlk değer anına kaç adımda varıldığını say. Senin sürümünde bu sayıyı düşürecek tek değişikliği yaz.
4. **Veri şemasını çıkar.** Doküman başlıkları, metrik tanımları ve arayüz anlatımından hangi nesnelerin tutulduğunu çıkar. Sade tablo listesi yaz: tablo adı, alanlar, hangi tabloyla ilişkili. Her tablonun yanına "bu neden var" tek cümle. Sonra aynı şemanın SENİN v1'in için sadeleşmiş halini yaz (daha az tablo, daha az alan).
5. **Fiyat mantığını çıkar.** Fiyat neye göre artıyor ve bu senin nişinde çalışır mı. Çalışmıyorsa nedenini yaz ve senin nişine uyan ölçü birimini öner. Sayfada rakam yoksa rakam UYDURMA, "fiyat sayfasında rakam yok" yaz.
6. **Prompt setini yaz.** `format/plan-format.md`'deki kurala göre sırayla yapıştırılacak promptlar üret. Her prompt tek iş yapar, bir öncekinin çıktısını girdi alır ve sonunda "bitince şunu görmelisin" kabul satırı taşır.
7. **Üç dosyayı yaz.** `ciktilar/YYYY-AA-GG-urun-plani.md`, `ciktilar/YYYY-AA-GG-veri-semasi.md`, `ciktilar/YYYY-AA-GG-promptlar.md`.

## Değişmez üretim kuralları
- **Özellik UYDURMA.** Yalnız `cozumleme/` içinde gerçekten çekilmiş, kaynak linki olan bilgiyi kullan. Sayfada görmediğin özelliği yazma.
- **Fiyat UYDURMA.** Fiyat sayfası yoksa ya da erişilemediyse "fiyat bilgisi alınamadı" yaz. Rakam tahmin etme, "muhtemelen aylık şu kadardır" deme.
- **Şema bir ÇIKARIMDIR.** Veri şeması dosyasının en üstüne bunu yaz: bu şema ürünün gerçek veritabanı değildir, herkese açık sayfalardan yapılmış bir çıkarımdır. Her tablonun yanına çıkarımın hangi kanıta dayandığını yaz (hangi sayfada hangi ifade).
- **Emin değilsen "belirsiz" de.** Doldurma yapma. Belirsiz kalan yeri raporda ayrı başlıkta topla ("burası siteden anlaşılmıyor").
- **Kopyalama koruması.** Marka adı, logo, tasarım, sayfa metni, telifli içerik ve lisanslı kod için ayrı bir "kopyalanmaz" listesi yaz. Çıktının hiçbir yerinde "aynısını kur", "klonla", "birebir yap" cümlesi geçmez.
- **Ayrışma zorunlu.** Plan dosyasında "sen neyi farklı yapıyorsun" başlığı boş bırakılamaz. En az bir somut ayrışma yaz (dil, niş, fiyat ölçüsü, tek bir derde odak).
- **Riskli alanı işaretle.** Ödeme altyapısı, kişisel veri, sağlık, hukuk, finans gibi izin ya da uyum isteyen parçalar varsa v1'den çıkar ve "bu parça izin/uyum ister" notu koy.
- **Em dash (uzun tire) çıktının HİÇBİR yerinde yok.** Ayraç gerekirse nokta, virgül, iki nokta ya da orta nokta (·).
- **Motivasyon dili, gelir vaadi, abartı yok.** "Bunu kurarsan patlarsın" gibi cümleler yasak. Sistem soğukkanlı bir ürün analisti gibi konuşur.

## Çıktı nereye yazılır
Her koşu üç dosya üretir, hepsi `ciktilar/` klasörüne:
- `YYYY-AA-GG-urun-plani.md` · özellik kovaları, nişe uyarlama tablosu, kullanıcı akışı, v1 kapsamı ve kurulum sırası, fiyat mantığı, kopyalanmaz listesi, belirsizler.
- `YYYY-AA-GG-veri-semasi.md` · hedef üründen çıkarılan şema (kanıtlı) ve senin v1 şeman (sade).
- `YYYY-AA-GG-promptlar.md` · sırayla yapıştırılacak Claude Code promptları, her birinin kabul satırıyla.

## Kalıcı hafıza
Yeni bir hedef ürün incelediğinde `sen/02-hedef.md`'nin en altındaki "incelenenler defteri"ne tarih atarak yaz: hangi ürün, ne öğrendin, hangi fikri aldın, neyi almadın. İkinci ürünü incelediğinde sistem eski defteri de okur ve tekrar eden desenleri ("bu tip ürünlerin hepsinde şu var") ayrı başlıkta gösterir. Zamanla bu defter senin ürün sezginin kalıcı kaydı olur.
