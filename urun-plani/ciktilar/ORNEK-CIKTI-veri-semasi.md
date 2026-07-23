# Veri Şeması · 2026-07-24 · Hedef: plausible.io · Operatör: kurgusal (Meydan Dijital)

> **Uyarı:** bu şema hedef ürünün gerçek veritabanı DEĞİLDİR. Herkese açık sayfalardan (doküman başlıkları, metrik tanımları, fiyat sayfası) yapılmış bir çıkarımdır. Her tablonun altında çıkarımın dayanağı yazılıdır. Dayanağı olmayan tablo yazılmadı.

---

## 1. Hedef üründen çıkarılan şema

### `site`
- **Neden var:** kullanıcı birden çok alan adı izleyebiliyor, her biri ayrı kayıt olmak zorunda.
- **Dayanak:** "Add your website", "The Sites page", "Sites API" başlıkları · https://plausible.io/docs · fiyatta site sayısı sınırı (3 site, 10 site) · https://plausible.io/#pricing
- **Alanlar:** alan adı, sahibi, zaman dilimi, oluşturma tarihi, herkese açık mı, saklama süresi
- **İlişki:** `hesap` altında, `olay` üstünde

### `olay`
- **Neden var:** ürünün topladığı en küçük birim. Sayfa görüntüleme de özel olay da aynı tabloya düşüyor.
- **Dayanak:** "Events API", "Custom properties: attach custom data when sending pageviews and events" · https://plausible.io/docs/metrics-definitions
- **Alanlar:** site, tür (sayfa görüntüleme veya özel olay), sayfa yolu, zaman, ülke, bölge, şehir, tarayıcı, işletim sistemi, ekran boyutu, kaynak, kanal, UTM alanları, yönlendiren, tutar (gelir olaylarında), özel alanlar
- **İlişki:** `site` altında, `oturum` içinde

### `oturum`
- **Neden var:** hemen çıkma oranı, ziyaret süresi, giriş ve çıkış sayfası tek tek olaylardan hesaplanamaz. Olayların üstünde bir gruplama katmanı olması gerekiyor.
- **Dayanak:** "Total Visits/Sessions: set of actions a user takes on your site", "Bounce Rate", "Visit Duration", "Entry Pages", "Exit Pages" · https://plausible.io/docs/metrics-definitions
- **Alanlar:** site, başlangıç, bitiş, giriş sayfası, çıkış sayfası, sayfa sayısı, hemen çıktı mı, kaynak
- **İlişki:** `site` altında, `olay` üstünde

### `hedef`
- **Neden var:** kullanıcının "başarı" saydığı olayı ayrıca tanımlaması ve dönüşüm oranı hesaplanması gerekiyor.
- **Dayanak:** "Goals/Events: track desired actions people take on your site", "Conversion Rate", "Unique Conversions", "Total Conversions", "codeless goals" · https://plausible.io/docs/metrics-definitions
- **Alanlar:** site, ad, tür (sayfa hedefi veya olay hedefi), eşleşme kuralı, gelir takibi açık mı
- **İlişki:** `site` altında, `olay` ile eşleşiyor

### `huni`
- **Neden var:** sıralı adımlarda nerede kaybedildiği ayrı bir tanım gerektiriyor.
- **Dayanak:** "Funnels: sequence of steps and visitor drop off points" · https://plausible.io/docs/metrics-definitions
- **Alanlar:** site, ad, sıralı adımlar (hedef listesi)
- **İlişki:** `hedef` listesine bağlı

### `segment`
- **Neden var:** kaydedilmiş süzgeçler kullanıcı başına saklanıyor.
- **Dayanak:** "Saved Segments" · https://plausible.io/#pricing · "Filters and segments" · https://plausible.io/docs
- **Alanlar:** site, ad, süzgeç kuralları, sahibi, paylaşımlı mı
- **İlişki:** `site` altında

### `not`
- **Neden var:** grafiğe tarih işaretlemek ayrı bir kayıt.
- **Dayanak:** "Annotations" · https://plausible.io/docs ve https://plausible.io/#pricing
- **Alanlar:** site, tarih, metin, ekleyen
- **İlişki:** `site` altında

### `hesap` ve `ekip_uyesi`
- **Neden var:** birden çok kişi aynı veriye bakıyor ve rolleri farklı.
- **Dayanak:** "Team settings", "Users and roles", "Single Sign-On" · https://plausible.io/docs · fiyatta ekip üyesi sınırı · https://plausible.io/#pricing
- **Alanlar:** e-posta, ad, iki adımlı doğrulama açık mı, rol, hangi ekipte
- **İlişki:** `hesap` 1 ile n `ekip_uyesi`, `ekip_uyesi` n ile n `site`

### `paylasilan_link`
- **Neden var:** panel dışarıya giriş olmadan gösterilebiliyor, bu ayrı bir erişim kaydı demek.
- **Dayanak:** "Shared links", "Embed dashboard" · https://plausible.io/docs
- **Alanlar:** site, tahmin edilemez anahtar, parola var mı, oluşturma tarihi
- **İlişki:** `site` altında

### `abonelik`
- **Neden var:** plan, kapasite sınırı ve fatura tutuluyor.
- **Dayanak:** "Subscription plans", "Change plan", "Download invoices", "Trial to paid" · https://plausible.io/docs · basamak ve sınırlar · https://plausible.io/#pricing
- **Alanlar:** hesap, plan adı, aylık sayfa görüntüleme sınırı, site sınırı, ekip sınırı, saklama süresi, dönem (aylık veya yıllık), deneme bitiş tarihi
- **İlişki:** `hesap` altında

### `aktarim_isi`
- **Neden var:** dış kaynaktan veri alma ve dışa aktarma uzun süren, durumu takip edilen işler.
- **Dayanak:** "Import from Google Analytics", "Import stats", "Export stats" · https://plausible.io/docs
- **Alanlar:** site, kaynak, durum, başlangıç, bitiş, kapsanan tarih aralığı
- **İlişki:** `site` altında

### `rapor_aboneligi`
- **Neden var:** e-posta ve Slack raporları ile sıçrama bildirimleri kime, hangi sıklıkta gideceğini bilmek zorunda.
- **Dayanak:** "Email reports", "Slack reports", "Traffic spike notifications" · https://plausible.io/docs
- **Alanlar:** site, kanal (e-posta veya Slack), sıklık, alıcı, eşik (sıçrama bildirimi için)
- **İlişki:** `site` altında

**Çıkarılamayanlar:** ziyaretçinin çerezsiz nasıl tekilleştirildiği, oturumun kaç dakika sessizlikten sonra bittiği, ham verinin ne kadar süre tutulup ne zaman özete indiği. Bunlar sitede yazmıyor, uydurulmadı.

---

## 2. Senin v1 şeman (sadeleşmiş, 5 tablo)

### `musteri`
- **Neden var:** operatörün her müşterisi ayrı bir işletme, panel ve fatura ona bağlı.
- **Hedef şemadan neyi attım:** `hesap`, `ekip_uyesi` ve rol yapısını attım. Bu nişte paneli tek kişi açıyor, rol matrisi kurmak boş iş.
- **Alanlar:** işletme adı, iletişim numarası, panel anahtarı, başlangıç tarihi, aylık ücret, ödeme dönemi (yıllık peşin)
- **İlişki:** 1 ile n `site`

### `site`
- **Neden var:** her müşterinin bir sitesi var, veriler ona bağlanıyor.
- **Hedef şemadan neyi attım:** zaman dilimi ve saklama süresi alanlarını attım, hepsi Türkiye ve 12 ay sabit.
- **Alanlar:** müşteri, alan adı, takip kodu anahtarı, ekleme tarihi
- **İlişki:** `musteri` altında, `olay` üstünde

### `olay`
- **Neden var:** tek toplama birimi. Sayfa görüntüleme ve temas tıklaması aynı tabloya düşüyor.
- **Hedef şemadan neyi attım:** UTM alanlarının çoğunu, ekran boyutunu, özel serbest alanları ve gelir tutarını attım. Bu nişte kimse kampanya parametresi kullanmıyor, ciro verisi de v1'e girmiyor.
- **Alanlar:** site, tür (sayfa veya temas), temas türü (arama, WhatsApp, yol tarifi), sayfa yolu, zaman, şehir, cihaz (telefon veya masaüstü), kaynak
- **İlişki:** `site` altında
- **Not:** IP adresi SAKLANMIYOR. Şehir bilgisi çıkarıldıktan sonra IP atılıyor. Bu tek karar kişisel veri yükünün büyük kısmını kaldırıyor.

### `gunluk_ozet`
- **Neden var:** panel her açılışta ham olayları saymasın. Günde bir kere özet çıkarılır, panel özete bakar.
- **Hedef şemadan neyi attım:** `oturum` tablosunu tamamen attım. Hemen çıkma oranı ve ziyaret süresi bu kitlenin sorduğu sorular değil. Onun yerine gün bazlı sayı tutuyorum.
- **Alanlar:** site, tarih, ziyaret sayısı, tekil gün sayacı, arama sayısı, WhatsApp sayısı, yol tarifi sayısı, en çok gelen kaynak
- **İlişki:** `site` altında

### `aylik_ozet_gorseli`
- **Neden var:** tekrar gelme sebebi bu. Her ayın başında müşteriye WhatsApp'tan giden tek görsel.
- **Hedef şemadan neyi attım:** `rapor_aboneligi` tablosunun çok kanallı yapısını attım. Tek kanal var: WhatsApp, elle gönderiliyor.
- **Alanlar:** müşteri, ay, görsel dosya yolu, gönderildi mi, gönderim tarihi
- **İlişki:** `musteri` altında

**Attığım diğer tablolar ve nedeni:** `huni` ve `segment` (bu trafik hacminde anlamsız), `not` (ayda bir kullanılır), `paylasilan_link` (panel anahtarı zaten `musteri` içinde), `abonelik` (v1'de tahsilat elle, plan kavramı yok), `aktarim_isi` (taşınacak geçmiş veri yok).

## 3. İlişki haritası

```text
musteri            1 ile n   site
site               1 ile n   olay
site               1 ile n   gunluk_ozet
musteri            1 ile n   aylik_ozet_gorseli
olay               n ile 1   site        (gunluk_ozet gece toplu hesaplanır)
```

## 4. Şemayı bozacak sorular
- **Olay tablosu ne kadar büyür:** 20 müşteri, aylık ortalama 3000 ziyaret. Yılda yaklaşık 720 bin satır. Bu bir sorun değil, ama 200 müşteride sorun olur. Kararın: ham olayları 12 ay sonra sil, `gunluk_ozet` kalsın. Bunu ilk günden yaz, sonra taşımak zor.
- **Aynı tıklama iki kere sayılırsa:** kullanıcı telefona iki kere basarsa iki arama mı sayacaksın. Karar: aynı ziyaretçiden 30 dakika içindeki aynı tür temas tek sayılır. Bu pencereyi bir alanda tut, sabit yazma.
- **Tekilleştirmeyi nasıl yapacaksın:** çerez koymayacaksan "tekil ziyaretçi" diye kesin bir sayı veremezsin. Karar: panelde "tekil ziyaretçi" yerine "ziyaret" yaz. Veremeyeceğin sayıyı vaat etme.
- **Müşteri ayrılırsa verisi ne olacak:** silinecek mi, dondurulacak mı. Karar: `musteri` üzerinde bir durum alanı tut, silme işini geciktir. Yanlışlıkla silinen veri geri gelmez.
- **Panel anahtarı sızarsa:** tahmin edilemez uzun anahtar kullan ve anahtarı yenileyebilir yap. Tek alan, ama sonradan eklemek can sıkar.
