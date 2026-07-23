# Test Sonucu · Ürün Planı (URL'den Kurulum Planı)

> Sistemin FAZ 1 talimatları, Claude Code'un web araçlarıyla (WebFetch) 24 Tem 2026'da GERÇEKTEN çalıştırıldı.
> Bu araçlar, teslim edilen sistemin kullanıcının kendi Claude Code'unda çağırdığı araçların birebir aynısıdır. Yani bu, sistemin çekirdek otomasyonunun gerçek koşusudur.
> Kurgusal operatör profili: Türkiye'de mahalle esnafına (fırın, kuaför, kafe, butik) basit site kuran küçük bir dijital atölye, 20 mevcut müşteri, kod yazmıyor.
> Hedef: gerçek, herkese açık, tanınmış bir ürün sitesi (plausible.io). Marka adı yalnız bu iç raporlarda geçer, hiçbir public metinde geçmez.

## 8 test koşuldu, 8'i geçti

| # | Test | Sonuç |
|---|---|---|
| 1 | Otomatik site okuma | GEÇTİ |
| 2 | Çekirdek / süs ayrımı | GEÇTİ |
| 3 | Veri şeması çıkarımı (kanıtlı) | GEÇTİ |
| 4 | Prompt setinin sırayla bağlanması | GEÇTİ |
| 5 | Anti uydurma (fiyat ve erişilemeyen sayfa) | GEÇTİ |
| 6 | Kopyalama koruması ve nişe uyarlama | GEÇTİ |
| 7 | Em dash denetimi (grep) | GEÇTİ |
| 8 | Diske yazma (write back) | GEÇTİ |

---

## TEST 1 · Otomatik site okuma → GEÇTİ

Sayfalar `WebFetch` ile gerçekten çekildi. Kaynak kaynak sonuç:

| Sayfa | Yöntem | Sonuç |
|---|---|---|
| https://plausible.io/ | `WebFetch` | **ÇALIŞTI.** Ürün tanımı, 5 kitle segmenti ve adlandırılmış özellik listesi döndü. |
| https://plausible.io/#pricing | `WebFetch` | **ÇALIŞTI.** Fiyatın sayfa görüntüleme hacmiyle arttığı, 3 literal rakam (9 / 14 / 19 dolar), 30 günlük deneme, plan kapasiteleri döndü. |
| https://plausible.io/docs | `WebFetch` | **ÇALIŞTI.** Tam doküman başlık haritası döndü (kurulum, panel, hedefler, ayarlar, ekip, faturalama, API). |
| https://plausible.io/docs/metrics-definitions | `WebFetch` | **ÇALIŞTI.** Metrik ve boyut tanımları aynen döndü. Veri şeması çıkarımının ana dayanağı bu sayfa. |
| https://plausible.io/open-source-website-analytics | `WebFetch` | **ÇALIŞTI.** Lisans adı aynen döndü: "GNU Affero General Public License Version 3 (AGPLv3) or any later version". |
| https://plausible.io/docs/turkiye-fiyatlandirma-2026 | `WebFetch` | **ERİŞİLEMEDİ · HTTP 404.** Bilerek denenen, var olmayan sayfa (anti uydurma testi). |

Ham çıktı: `cozumleme/cozumleme-2026-07-24.md`. 5 sayfa çekildi, 1 sayfaya erişilemedi, **35 adlandırılmış özellik** ve **14 veri modeli ipucu** toplandı. Çözümleme dosyasında 15 kaynak URL var, kaynaksız satır yok.

## TEST 2 · Çekirdek / süs ayrımı → GEÇTİ

35 özellik dört kovaya dağıtıldı, her satırda tek cümle gerekçe var. Grep ile sayıldı:
- ÇEKİRDEK (v1): **7** (kural: en fazla 5 ile 7, sınırda kaldı)
- DESTEK (v1.5): **7**
- SÜS: **10**
- GİRME: **10**
- Kova tablosuna girmeyen 5 satır ayrı başlıkta gerekçelendirildi (ikisi tek satırda birleşti, üçü ürünün niteliği olduğu için lisans ve kurulum sırası bölümlerine düştü). Sessizce atılan özellik yok.

Ayrımın gerçekten çalıştığının kanıtı: sitede en görünür yerde duran özellikler (huni analizi, kullanıcı yolculukları, AI trafiği, Search Console) SÜS kovasına düştü, çünkü kurgusal operatörün müşterilerinde aylık 500 ile 5000 ziyaret var ve bu hacimde huni istatistiği gürültüdür. Sistem "sitede öne çıkan özellik önemlidir" tuzağına düşmedi.

## TEST 3 · Veri şeması çıkarımı → GEÇTİ

Hedef üründen **12 tablo** çıkarıldı (`site`, `olay`, `oturum`, `hedef`, `huni`, `segment`, `not`, `hesap` ve `ekip_uyesi`, `paylasilan_link`, `abonelik`, `aktarim_isi`, `rapor_aboneligi`). Her tablonun altında **Dayanak** satırı var: grep ile 12 dayanak sayıldı, dayanaksız tablo yok.

Örnek zincir (çıkarımın nasıl kurulduğu): metrik tanımları sayfasında "Total Visits/Sessions: set of actions a user takes on your site", "Bounce Rate", "Entry Pages", "Exit Pages" yazıyor. Bu dört ifade tek tek olaylardan hesaplanamaz, olayların üstünde bir gruplama katmanı gerektirir. Sistem buradan `oturum` tablosunu çıkardı ve dayanağını yazdı.

Şema dosyasının en üstünde zorunlu uyarı var: bu şema ürünün gerçek veritabanı değildir, açık sayfalardan yapılmış bir çıkarımdır. Çıkarılamayanlar ("çerezsiz tekilleştirme nasıl yapılıyor", "oturum penceresi kaç dakika") ayrı başlıkta dürüstçe listelendi.

Sadeleştirme de çalıştı: operatörün v1 şeması **5 tabloya** indi (kural: 6'yı geçme). `oturum` tablosu tamamen atıldı ve nedeni yazıldı (hemen çıkma oranı bu kitlenin sorduğu soru değil).

## TEST 4 · Prompt setinin sırayla bağlanması → GEÇTİ

**9 prompt** üretildi (kural: 6 ile 10 arası). Zincir kontrolü:
- Prompt 1 şemayı kurar (kural: ilk prompt her zaman şema).
- Prompt 2, 3, 4, 5, 6, 7, 8 ilk cümlesinde bir öncekine açıkça bağlanıyor ("önceki adımda kurduğun şemanın üstüne", "önceki adımdaki takip betiğine", "önceki adımda hazırladığın günlük özetin üstüne").
- Prompt 9 yayına alma ve ilk müşteriye gösterme adımı (kural: son prompt yayın).
- Her promptun sonunda "bitince şunu görmelisin" kabul satırı var: grep 10 eşleşme buldu (9 prompt + 1 giriş uyarısı).
- Promptların hiçbirinde kod yok, hepsi düz Türkçe talimat.

Zincirin gerçekten bağlı olduğunun kanıtı: Prompt 4'te kurulan günlük özet işi, Prompt 5'teki panelin veri kaynağı olarak kullanılıyor; "Takılırsan" bölümü de bu bağı geri referansla doğruluyor ("panel yavaş açılıyorsa Prompt 4'teki iş çalışmıyordur").

## TEST 5 · Anti uydurma → GEÇTİ

Üç ayrı yerde sınandı:

1. **Var olmayan sayfa:** `https://plausible.io/docs/turkiye-fiyatlandirma-2026` bilerek istendi. HTTP 404 döndü. Sistem bu sayfayı tarama künyesine "erişilemedi, sayfa yok" diye yazdı ve o sayfadan geleceği varsayılan hiçbir bilgiyi (Türkiye'ye özel fiyat, yerel ödeme seçeneği) çıktıya koymadı. Belirsizler listesine "Türkiye'ye özel fiyat bulunamadı" satırı düştü.
2. **Rakamı olmayan plan:** Enterprise planında sitede rakam yerine "custom" yazıyor. Sistem rakam üretmedi, "fiyat yazmıyor" dedi. Diğer üç plan için yalnız sayfada literal yazan 9 / 14 / 19 dolar alındı.
3. **Sayfada olmayan detay:** Starter dışındaki planların sayfa görüntüleme sınırı sitede yazmıyor. Sistem tahmin etmedi, belirsizler listesine yazdı. Aynı şekilde oturum penceresi, saklama süresi ve tekilleştirme yöntemi "siteden anlaşılmıyor" olarak işaretlendi.

Çözümleme dosyasında "erişilemedi" ifadesi 3 yerde geçiyor, uydurulmuş rakam yok.

## TEST 6 · Kopyalama koruması ve nişe uyarlama → GEÇTİ

- Çıktıların hiçbirinde "aynısını kur", "klonla", "birebir yap", "ücretsiz sürümünü çıkar" cümlesi yok. Grep ile doğrulandı: bu ifadeler yalnız sistemin KURAL dosyalarında, yasaklandıkları yerde geçiyor.
- Kopyalanmaz listesi yazıldı: marka adı, logo, renk sistemi, panel tasarımı, sayfa metinleri, doküman içeriği ve kaynak kod.
- **Lisans yakalandı.** Sistem hedefin açık kaynak olduğunu ve lisansının AGPLv3 olduğunu tespit etti, sonra bunun pratik anlamını yazdı: kendi sunucunda çalıştırabilirsin, ama kodu alıp kapalı bir hizmet olarak satamazsın. Plan koda hiç dokunmuyor, açık sayfalarda yazan mantığı çıkarıyor.
- **Nişe uyarlama tablosu doldu, ikinci sütun boş kalmadı.** Hedefte var ama nişte gereksiz: 6 madde (GA aktarımı, huni ve kullanıcı yolculuğu, ekip ve roller, Data Studio ve API, AI trafiği ve kaydırma derinliği, hacim bazlı fiyat). Hedefte yok ama nişte şart: 6 madde, hepsi profil dosyasındaki bir satıra bağlandı (temas sayacı, Türkçe gündelik dil, WhatsApp aylık görsel, ajans ekranı, kartsız yıllık ödeme, mobil öncelikli tek ekran).
- Ayrışma başlığı boş kalmadı: 4 somut ayrışma yazıldı, en güçlüsü ölçülen şeyin değişmesi (ziyaret yerine temas: arama, WhatsApp, yol tarifi).
- Kullanıcı akışında somut uyarlama: hedefte ilk değer anına 3 adımda varılıyor ve son adım kullanıcının kendi site koduna dokunmasını gerektiriyor. Operatörün sürümünde kurulum yükü operatöre geçtiği için kullanıcı tarafındaki adım sayısı **3'ten 0'a** indi.
- Riskli parçalar v1'den çıkarıldı ve gerekçelendirildi: ödeme altyapısı, gelir ve sipariş takibi, ham IP saklama (kişisel veri), uzun veri saklama.

## TEST 7 · Em dash denetimi → GEÇTİ

Tüm drop klasöründe grep ile sayıldı:
- Em dash (U+2014): **0**
- En dash (U+2013): **0**

Ayraç olarak orta nokta (·), virgül ve iki nokta kullanıldı. Motivasyon dili, gelir vaadi, "X değil Y" yapay tezat yok.

## TEST 8 · Diske yazma (write back) → GEÇTİ

Sistem çıktıyı ekrana değil dosyaya yazdı. Diskte duran gerçek dosyalar:

```text
system/urun-plani/
  CLAUDE.md
  AGENTS.md
  CALISTIR.md
  README.md
  TEST-SONUCU.md
  sen/01-profil.md
  sen/02-hedef.md
  format/kurallar.md
  format/cozumleme-format.md
  format/plan-format.md
  cozumleme/OKU-nasil-doluyor.md
  cozumleme/cozumleme-2026-07-24.md        <- FAZ 1 gerçek çıktısı
  ciktilar/ORNEK-CIKTI-urun-plani.md       <- FAZ 2 çıktı 1
  ciktilar/ORNEK-CIKTI-veri-semasi.md      <- FAZ 2 çıktı 2
  ciktilar/ORNEK-CIKTI-promptlar.md        <- FAZ 2 çıktı 3
```

`CLAUDE.md` ile `AGENTS.md` birebir aynı içerikte (yalnız üst not farklı), yani sistem Claude Code dışındaki `AGENTS.md` standardını okuyan araçlarda da aynı şekilde çalışır.

## Test edilemeyenler (dürüst sınır)

- **Bot korumalı siteler:** hedef site otomatik okumaya açıktı. Bot koruması olan (403 dönen) bir siteyle davranış bu koşuda sınanmadı; sistem tasarım gereği "erişilemedi" der ve o kısmı boş bırakır, bu davranışın 404 hali TEST 5'te doğrulandı. [test edilmedi: 403 dönen hedef]
- **`WebSearch` ile boşluk doldurma:** bu koşuda tüm sayfalar `WebFetch` ile alındığı için arama yedeğine düşülmedi. Talimatta duruyor ama bu koşuda tetiklenmedi. [test edilmedi: yedek yol tetiklenmedi]
- **İncelenenler defterinin ikinci üründe birikmesi:** tek ürün incelendi, ikinci koşudaki desen karşılaştırması sınanmadı. [test edilmedi: tek koşu]
- **Prompt setinin gerçekten çalışan ürün üretmesi:** promptlar bu koşuda uçtan uca çalıştırılıp bir ürün kurulmadı. Zincir yapısı, tek iş kuralı ve kabul kriterleri doğrulandı; ürünün kurulması kullanıcının kendi işidir. [test edilmedi: ürün kurulumu kapsam dışı]
- **Planın ticari isabeti:** plan kurulum sırası verir, talep garantisi vermez. Bir ürünün neden tuttuğu çoğu zaman sitesinde yazmaz. [test edilemez: pazar doğrulaması kullanıcının işi]
