# Trend Radarı · Nişinde Patlayan İçerik Açıları 📡

Nişini bir kere yaz, sistem o nişin Reddit topluluklarında son bir haftada en çok yükselen başlıkları kendisi çeksin. Tekrar eden hook kalıplarını çıkarsın, sıcaktan soğuğa sıralasın ve markanın sesiyle "bu hafta üret" brief'i yazsın. Claude Code, Cursor, Codex ve `AGENTS.md` okuyan her araçta çalışan, kod gerektirmeyen bir içerik trend radarı.

Her hafta boş ekrana bakmayı bitiren bir sistem. Nişini bir kere dosyaya döküyorsun; sonra tek komutla sistem gerçek topluluk verisinden çalışan içerik açılarını çıkarıp senin konuna ve tonuna giydiriyor. Boş fikirden değil, o hafta gerçekten konuşulan derdin üstünden başlıyorsun.

## Ne işe yarıyor

İçerik üretmenin en zor kısmı "bu hafta neyi anlatsam". Bu sistem o boşluğu, nişinin topluluklarında ŞU AN en çok tutan başlıklarla dolduruyor, sonra o mantığı senin markana çeviriyor. İki fazda çalışıyor:

1. **Reddit taraması (otomatik, gerçek).** `hedef/01-nis.md` içindeki her subreddit'in son bir haftada en çok yükselen başlıklarını Reddit'in herkese açık RSS akışından (`top/.rss?t=week`) çeker. Bu adım gerçek ve tam otomatiktir: RSS ücretsizdir, üyelik ya da anahtar istemez, kurulum yoktur. Sen tık bile atmıyorsun, manuel yapıştırma yok.
2. **Açı çıkarımı ve brief.** Çekilen başlıkları (ve istersen elle yapıştırdığın YouTube/TikTok/Reels örneklerini) okur, tekrar eden hook kalıplarını, açıları ve formatları çıkarır, sıcaktan soğuğa sıralar ve markanın sesiyle "bu hafta üret" brief'i yazar. Her açı için hangi hook tutuyor, kanıtı (kaç başlıkta tekrar etti, feed'in neresinde duruyor, hangi topluluk), senin nişine nasıl uyarlanır, örnek başlık ve format önerisi.

Dürüst sınır: Reddit anahtarsız `.json` ucunu kapattı (artık `403` döner), ama herkese açık RSS akışı hâlâ açık ve anahtarsız `200` verir; sistem bu yüzden RSS kullanır. RSS'te oy (upvote) sayısı yoktur, sistem bunu uydurmaz; sıcaklığı iki gerçek sinyalden okur: frekans (aynı hook kaç başlıkta tekrar etti) ve feed sırası (`top/.rss` zaten sıralıdır, üstteki o hafta en çok tutandır). YouTube/TikTok/Reels için ücretsiz güvenilir bir otomatik yol yoktur; onlar opsiyonel "aç ve yapıştır" katmanıdır. Oy sayısını da isteyen ileri kullanıcı için opsiyonel Reddit OAuth yolu `CLAUDE.md` en altındadır.

## Gerekli

- **Claude Code, Cursor, Codex** ya da `AGENTS.md` okuyan başka bir AI aracı. Terminal kullanmana gerek yok (Reddit çekimini sistem `curl` ile kendisi yapar, komutu sana verir).
- Bir klasör ve 15 dakika. Yeni bir şey öğrenmiyorsun, nişini ve markanı dosyaya döküyorsun.
- İnternet bağlantısı. Reddit RSS herkese açıktır, hesap gerekmez.

## Desteklenen araçlar

Aynı okuma kuralı üç ayrı dosyada tutulur; hangi aracı kullanırsan onu okur. Senin bir şey yapman gerekmez.

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/trend-radari.mdc` |
| Codex, Google Antigravity, Windsurf, Kilo ve 20+ araç | `AGENTS.md` (evrensel açık standart) |

## Kurulum

Üç yol var, en kolayı üçüncüsü.

**1. Tek komut (degit).** Klasörü olduğu gibi indirir:

```bash
npx degit muhammedsevimli/sistemler/trend-radari trend-radari
```

**2. Klonla ya da ZIP indir.** Yeşil **Code → Download ZIP** ile indir, ya da:

```bash
git clone https://github.com/muhammedsevimli/sistemler.git
```

**3. Klasörü AI aracına ver, "kur" de.** En kolayı. Bu klasörü Claude Code / Cursor / Codex'e aç, "bu trend radarını benim nişim için kur" de. Niş ve marka dosyalarını seninle birlikte doldurur.

Sonra sistemin okuduğu dosyalar şunlar. Niş ve marka kısmını kendinle doldur:

- `hedef/01-nis.md`: dilin/ülken, nişin tek cümle, taranacak subreddit'ler (en az 3), opsiyonel arama terimleri
- `marka/01-marka.md`: kim, kime, hangi platform/format, ne üretiyorsun, **ne DEĞİLSİN**
- `marka/02-ses.md`: ton, hitap, kelimeler, **yasak kelimeler**, örnek başlıklar
- `format/trend-analizi.md`: hook kalıplarını nasıl çıkaracağı + brief yapısı (hazır gelir, istersen ayarla)
- `veri/`: sistem Reddit verisini buraya kendi yazar; opsiyonel YouTube/TikTok/Reels örneklerini buraya yapıştırırsın (rehber klasörün içinde)

`CLAUDE.md`, `AGENTS.md`, `.cursor/rules/` ve `CALISTIR.md` olduğu gibi kalır, değiştirmene gerek yok.

Sonra iki komut. Önce nişini tara:

> nişimin reddit topluluklarını tara

Sistem her subreddit'in RSS akışını kendisi çeker, en çok yükselen başlıkları `veri/` klasörüne yazar. Sen tık atmıyorsun. Sonra brief'i al:

> veri klasöründeki başlıkları çözümle, bana "bu hafta üret" brief'i yaz

Sistem başlıkları hook kalıbına göre gruplar, sıcaktan soğuğa sıralar, ilk 3-4 açıyı senin sesinle örnek başlıkla yazar. Tam komutlar için `CALISTIR.md` dosyasına bak.

## Gerçekten çalışıyor mu? 30 saniyede test et

- **Veri:** başlıklar gerçek mi. Sistem `veri/` dosyasına HTTP kodunu ve kaç başlık çektiğini yazdı mı, uydurma başlık var mı. Gerçek çekim yaptıysa geçti.
- **Sıcaklık:** oy sayısı uydurdu mu, yoksa sıcaklığı frekans (kaç tekrar) + feed sırasından mı okudu. Sinyalden okuduysa geçti.
- **Örüntü:** İngilizce başlığı olduğu gibi kopyaladı mı, yoksa altındaki kalıbı alıp senin nişine mi çevirdi. Kalıbı aldıysa geçti.
- **Şerit:** "ne DEĞİLSİN"e giren trendi "üret" diye önerdi mi, yoksa gördüğünü ama neden atladığını mı yazdı. Atladıysa geçti.

## Radar keskinleşir · sistem seninle gelişsin

Yeni bir subreddit ya da arama terimi fark edince `hedef/01-nis.md` dosyasına ekle. Sistem her hafta aynı topluluklardan tekrar tarar; liste senin nişinin canlı trend hafızası olur. Bir açıyı gerçekten üretip sonucunu gördüğünde (tuttu ya da tutmadı) "bu tuttu / tutmadı" de. Sistem onu `hedef/01-nis.md` en altındaki "tutan açılar" bölümüne tarih atarak yazar, sonraki briefler oradan da beslenir.

## Örnek çıktı

`ORNEK-CIKTI.md` içinde, kurgusal bir "ev içi bitki bakımı" içerik üreticisi için sistemin gerçekten ürettiği tam brief var: veri özeti, sıcaktan soğuğa açı listesi (frekans + feed sırası kanıtıyla), "bu hafta üret" ilk 4 ve atlananlar. Girdi olarak Reddit'ten 18 Temmuz 2026'da canlı çekilmiş gerçek başlıklar (83 başlık, 4 subreddit) kullanıldı. Marka kurgusaldır; Reddit başlıkları herkese açık gerçek gönderi başlıklarıdır (kullanıcı adı ya da kişisel veri yok).

## Kimin için

İçerik üreten herkes: YouTuber, kısa video üreticisi, sosyal medya yöneticisi, kurucu, esnaf, ekip. Her hafta "neyi anlatsam" derdini bitirmek, boş fikirden değil o hafta gerçekten konuşulan derdin üstünden başlamak isteyen. Tasarım ya da kod bilmene gerek yok; sistem konu ve açı verir, üretimi kendi hattında tamamlarsın.

---

**Muhammed Sevimli** tarafından kuruldu. AI ile gerçek satış ve büyüme sistemleri kuruyorum ve Türkçe anlatıyorum. Sistemleri ve arkasındaki mantığı [YouTube](https://youtube.com/@msevimli)'ta gösteriyorum, günlük notları [X](https://x.com/_msevimli)'te paylaşıyorum. Kurarken takılırsan ya da birebir destek istersen [e-posta](mailto:hey@muhammedsevimli.com) at.

Web: [muhammedsevimli.com](https://muhammedsevimli.com) · Instagram: [@msevimli_](https://instagram.com/msevimli_) · Threads: [@msevimli_](https://threads.com/@msevimli_)

Katkı memnuniyetle. Bir sistemi geliştirdin ya da yeni bir fikrin mi var? Bir PR aç. Takıldığın yer ya da sorun mu var? Bir issue aç, yardımcı olurum.

## Lisans

MIT · bu sistemleri istediğin gibi kullan.
