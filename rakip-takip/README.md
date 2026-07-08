# Haftalık Rakip Takipçisi 🧩

Rakiplerini senin yerine izleyen, her pazartesi tek bir rapor bırakan bir sistem. İzlemek istediğin rakiplerin herkese açık yayın akışını haftada bir tarar, geçen haftaya göre yeni ne yaptılarsa bulur, her birini özetler ve senin markana hangi açıyla uyarlanacağını önerir.

Rapor sana link yığını vermez. Her yeni içerik için iki şey yazar: ne yayınlanmış (kısa özet) ve senin markanla hangi açıdan uyarlanır (somut öneri). Yani raporu okuduğunda o hafta üreteceğin içeriğin fikri çoktan önünde olur. Son karar sende: öneriyi olduğu gibi kullanır, değiştirir ya da atlarsın.

Tek dosya çalışır, kurulum yok, anahtar yok, ücret yok. `node rakip-takip.mjs` yazarsın, raporu alırsın.

## Ne işe yarıyor

Rakipleri tek tek gezip "bu hafta ne yaptılar" diye bakmak sürekli ertelenen bir iş, baksan da bir sürü post arasında "bunu biz nasıl kullanırız" sorusuna kimse cevap vermiyor. Bu sistem o işi bitiriyor: rakiplerin yayınlarını tarar, sadece geçen haftadan sonraki yeni içerikleri ayıklar (aynı şeyi iki kez saymaz), her yeni içeriği özetler ve markana bir uyarlama açısı önerir. Sen sadece okuyup karar verirsin.

## Gerekli

- **Node.js 18 ya da üstü.** Bilgisayarına bir kere kurarsın, `node` komutu çalışır hale gelir. Başka hiçbir paket kurmana gerek yok, sistem sıfır bağımlılıkla (Node'un kendi `fetch`'i ile) çalışır.
- **Rakiplerinin RSS adresleri.** RSS, bir sitenin ya da kanalın yeni içeriklerini makinelerin okuyabildiği liste. Çoğu blog `site.com/feed` verir, YouTube kanalı için hazır adres var (aşağıda).
- Terminal kullanmayı bilmene gerek yok. Klasörde bir komut satırı açıp tek satır yazıyorsun.

## Kurulum

Üç yol var, en kolayı üçüncüsü.

**1. Tek komut (degit).** Sadece bu sistemi indirir:

```bash
npx degit muhammedsevimli/sistemler/rakip-takip rakip-takip
```

**2. Klonla ya da ZIP indir.** Yeşil **Code → Download ZIP** ile indir, ya da:

```bash
git clone https://github.com/muhammedsevimli/sistemler.git
```

**3. Klasörü AI aracına ver, "kur" de.** Bu klasörü Claude Code / Cursor / Codex'e aç, "bu rakip takip sistemini benim rakiplerim için kur" de. Rakip listeni ve marka dosyalarını seninle birlikte doldurur.

## Nasıl çalıştırılır

Klasörde bir komut satırı aç ve şunu yaz:

```bash
node rakip-takip.mjs
```

Sistem her rakibin RSS'ini çeker, geçen haftadan sonraki yeni içerikleri bulur, her birini özetler, markana uyarlama önerisi üretir ve `raporlar/` klasörüne `rapor-YYYY-MM-DD.md` diye bir dosya yazar. Ekranda şuna benzer bir özet görürsün:

```text
rapor yazildi: raporlar/rapor-2026-07-08.md
yeni hareket: 6 · ulasilamayan: 0 · izlenen: 5 · uyarlama: heuristik
```

İlk çalışmada son 7 günün tüm yeni içerikleri rapora girer. Sonraki her çalıştırmada sistem `veri/snapshot.json`'a gördüğü her şeyi kaydeder, böylece aynı içerik iki hafta üst üste "yeni" görünmez. `veri/` ve `raporlar/` klasörleri ilk çalıştırmada kendiliğinden oluşur, onlara elle dokunma.

Raporun neye benzediğini önceden görmek için pakette hazır bir örnek var: `ornek-rapor.md`.

### İnternetsiz test

Sistem gerçekten çalışıyor mu, internet gerekmeden 1 dakikada gör:

```bash
node rakip-takip.mjs --offline ornek-besleme.json
```

`raporlar/` klasöründe bugünün raporu oluştuysa, her öğede "ne yayınlanmış" ve "senin markanla uyarlama" satırları varsa ve komutu ikinci kez çalıştırdığında "yeni hareket: 0" diyorsa sistem çalışıyor.

## Rakip ekleme

`rakipler.json` dosyasını aç. İçinde temsili örnekler var: site, haber, youtube ve iki instagram rakibi. Kendi rakiplerinle değiştir.

RSS rakipleri için tek gereken bir ad ve RSS adresi:

```json
[
  { "ad": "Rakip A (blog)", "rss": "https://rakip-sitesi.com/feed" },
  { "ad": "Rakip B (youtube)", "rss": "https://www.youtube.com/feeds/videos.xml?channel_id=KANAL_ID" }
]
```

RSS adresini nasıl bulursun:

- **Blog ya da haber sitesi:** genelde `site.com/feed` ya da `site.com/rss` çalışır. Tarayıcıda deneyip XML görünüyorsa doğrudur.
- **YouTube kanalı:** `https://www.youtube.com/feeds/videos.xml?channel_id=KANAL_ID`. Kanal ID'sini kanalın "hakkında" sayfasından ya da URL'sinden alırsın (`UC` ile başlayan blok).

İstediğin kadar rakip ekleyebilirsin, sistem hepsini tarar. Bir rakibe `not` alanı eklersen o not raporda başlığın altında görünür ("bu rakip fiyat kırdı mı bak" gibi bir hatırlatma).

### Markanı sisteme tanıt (uyarlama için)

Sistem sadece "rakip ne yaptı" demez, "senin markanla nasıl uyarlanır" da der. Bunu iyi yapabilmesi için `marka-hafizasi/` klasöründeki üç dosyayı bir kere doldur: `marka.md` (ne yapıyorsun), `kitle.md` (kime), `ses.md` (nasıl konuşuyorsun). Birkaç satır yeter. Boş bıraksan da sistem çalışır, sadece öneriler daha genel olur. (Drop 1 "Marka Hafızası" sistemini kurduysan aynı üç dosyayı buraya kopyalayabilirsin.)

Buraya müşteri verisi ya da özel bilgi koyma, sadece kendi markanı tanıtan genel bilgiler yazılır.

## Instagram takibi (iki katman)

Instagram'ın herkese açık bir RSS'i yok, o yüzden IG desteği iki katman olarak gelir. Bir instagram rakibi eklemek için `rakipler.json`'a RSS yerine şu satırı yazarsın:

```json
{ "tur": "instagram", "handle": "rakipmarka" }
```

`handle` rakibin kullanıcı adı (başındaki `@` opsiyonel).

- **Katman 1, manuel (varsayılan, anahtarsız, her zaman çalışır).** Bir token vermezsen sistem Instagram'a hiç bağlanmaz. Onun yerine raporda "Instagram · manuel kontrol" bölümü oluşur: her IG rakibin için `instagram.com/handle` linkini ve 2 dakikalık bir kontrol listesini yazar. Gördüğünü hemen altındaki boşluğa yapıştırırsın, raporun tamamlanır. Bu yol ne olursa olsun patlamaz.
- **Katman 2, Apify ile otomatik (opsiyonel).** Gönderileri elle bakmak yerine otomatik çekmek istersen kendi Apify hesabından bir token verirsin. Ücretsiz bir hesapla başlar, birkaç rakibi haftada bir taramak pratikte bedava. Token varken IG rakipleri de tıpkı RSS rakipleri gibi özetlenir ve uyarlanır:

```bash
# Windows (PowerShell)
$env:APIFY_TOKEN="senin-apify-token"; node rakip-takip.mjs

# Mac/Linux
APIFY_TOKEN="senin-apify-token" node rakip-takip.mjs
```

Apify bir an cevap vermezse ya da hata verirse sistem durmaz, o hesap otomatik olarak "manuel kontrol" bölümüne düşer ve raporu yine bitirir. Kullanılan actor'ü `APIFY_IG_ACTOR`, çekilecek gönderi sayısını `APIFY_IG_RESULTS` ile değiştirebilirsin.

## Uyarlamayı kim yazıyor (iki mod)

Ekranda gördüğün `uyarlama: heuristik` ya da `uyarlama: ai` satırı önerilerin nasıl üretildiğini söyler.

- **Sezgisel mod (varsayılan, anahtarsız):** içeriği beş açıdan (satış, sistem, zevk, karar yorgunluğu, owned demand) birine oturtur ve sana hazır bir başlangıç açısı verir. İnternet ya da anahtar gerekmez.
- **AI modu (opsiyonel):** bir AI anahtarı verirsen sistem `marka-hafizasi/` dosyalarını bağlam olarak verir ve her içerik için gerçekten senin sesinle yazılmış bir öneri ister. OpenAI uyumlu herhangi bir sağlayıcı çalışır:

```bash
# Windows (PowerShell)
$env:AI_API_KEY="senin-anahtarin"; $env:AI_MODEL="gpt-4o-mini"; node rakip-takip.mjs
```

AI bir an cevap veremezse sistem durmaz, o içerik için sezgisel öneriye düşer ve raporu yine bitirir.

## E-posta teslimi (opsiyonel)

Rapor dosyasını her hafta elle açmak yerine doğrudan e-postana düşür. Ekstra paket kurmana gerek yok, e-posta dosyası (`eposta-gonder.mjs`) pakette hazır ve hiçbir dış kütüphane kullanmaz. Kendi e-posta hesabının SMTP bilgisini ortam değişkeni olarak verip komutu `--eposta` ile çalıştırırsın:

```bash
# Windows (PowerShell)
$env:SMTP_HOST="smtp.gmail.com"
$env:SMTP_USER="senin-adresin@gmail.com"
$env:SMTP_PASS="uygulama-sifren"
$env:SMTP_TO="raporun-gelecegi-adres@gmail.com"
node rakip-takip.mjs --eposta
```

Gmail kullanıyorsan normal şifren çalışmaz, Google hesabından bir "uygulama şifresi" (App Password) üretip onu `SMTP_PASS`'a yaz. Outlook, Yandex, kendi alan adın da aynı şekilde çalışır. `SMTP_PORT` vermezsen 465 kullanılır. Rapor her durumda `raporlar/` klasörüne de yazılır, e-posta gönderilemezse sistem bunu net bir mesajla söyler ve dosya durmaya devam eder.

## Her pazartesi otomatik

Her pazartesi elle çalıştırmak istemiyorsan Windows Görev Zamanlayıcı'ya (Task Scheduler) haftalık bir görev ekle: program `node`, argüman `rakip-takip.mjs` (e-posta için `--eposta` ekle), başlangıç klasörü bu klasör. Bilgisayar kapalıyken de gelsin istersen sunucuda çalışan bir sürüm de var, kurulum dökümanında anlatılıyor.

## Güvenlik notu

`rakipler.json` sadece herkese açık RSS adresleri içerir, hiçbir müşteri verisi, anahtar ya da giriş bilgisi yoktur. SMTP şifren ve AI anahtarın dosyaların içine yazılmaz, sadece ortam değişkeni olarak verilir ve senin bilgisayarında kalır. Sistem yalnızca herkese açık yayınları okur ve raporu yalnızca senin verdiğin e-posta adresine gönderir.

## Kimin için

Rakiplerini takip etmesi gereken ama vakti olmayan herkes: kurucular, içerik üreticiler, ajanslar, küçük ekipler. Kod bilmene gerek yok.

---

**Muhammed Sevimli** tarafından kuruldu. AI ile gerçek satış ve büyüme sistemleri kuruyorum ve Türkçe anlatıyorum. Sistemleri ve arkasındaki mantığı [YouTube](https://youtube.com/@msevimli)'ta gösteriyorum, günlük notları [X](https://x.com/_msevimli)'te paylaşıyorum. Kurarken takılırsan ya da birebir destek istersen [e-posta](mailto:hey@muhammedsevimli.com) at.

Web: [muhammedsevimli.com](https://muhammedsevimli.com) · Instagram: [@msevimli_](https://instagram.com/msevimli_) · X: [@_msevimli](https://x.com/_msevimli) · YouTube: [@msevimli](https://youtube.com/@msevimli) · E-posta: hey@muhammedsevimli.com

Katkı memnuniyetle. Bir sistemi geliştirdin ya da yeni bir fikrin mi var? Bir PR aç. Takıldığın yer ya da sorun mu var? Bir issue aç, yardımcı olurum.

## Lisans

MIT · bu sistemleri istediğin gibi kullan.
