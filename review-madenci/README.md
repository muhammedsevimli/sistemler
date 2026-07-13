# Review Madenci · Müşteri Yorumu Satış Madencisi 🔎

Ürününün altındaki dağınık müşteri yorumlarını yapıştır, sistem tekrar eden temaları çıkarsın, en sık gelen itirazı bulsun ve her tema için satış açısı, itiraz cevabı ve reklam kancası yazsın. Claude Code, Cursor, Codex ve `AGENTS.md` okuyan her araçta çalışan, kod gerektirmeyen bir müşteri yorumu satış madencisi.

Her satış metni yazarken "müşterim aslında neyi seviyor, neye takılıyor" diye yorumları baştan tek tek okumaktan kurtaran bir sistem. Yorumları bir kere klasöre döküyorsun; sonra tek komutla sistem müşterinin kendi kelimelerinden satış cephanesi çıkarıyor. Boş sayfadan değil, müşterinin ağzından çıkan gerçeğin üstünden başlıyorsun.

## Ne işe yarıyor

Satış metni yazarken en zor kısım boş sayfa. Bu sistem o sayfayı müşterinin ŞU AN yazdığı gerçek yorumlarla dolduruyor, sonra o gerçeği senin markanın sesine çeviriyor. İki fazda çalışıyor:

1. **Girdi hazırlama.** Ürününün yorumlarını (Trendyol, Amazon, Shopify, Instagram, Google, Etsy, nereden geliyorsa) `yorumlar/` klasörüne yapıştırırsın. Ana yol budur ve her platformda çalışır. Yorumları düz gösteren basit bir site linkin varsa sistem onu okumayı da dener.
2. **Çözümleme ve satış cephanesi.** Sistem tüm yorumları tarar, tekrar eden temaları üç gruba kümeler (neden alıyorlar, neye güveniyorlar, neye takılıyorlar), her temanın kaç yorumda geçtiğini sayar, en sık gelen itirazı bulur ve her ana temayı `marka/` dosyalarından okuduğu senin sesinle satış diline çevirir: satış açısı, itiraz cevabı, reklam kancası. Her açının altında o açının çıktığı gerçek yorum (kanıt).

Dürüst sınır: Trendyol, Amazon, Shopify, Judge.me gibi platformların çoğunda yorumlar sayfaya sonradan (JavaScript ile), kaydırınca ya da giriş yapınca yüklenir. Ücretsiz, güvenilir bir otomatik yorum indirme yolu yoktur. Bu yüzden ana yol yorumları elle kopyalayıp `yorumlar/` içine yapıştırmaktır (2 dakikalık iş). Tema çıkarma, en sık itirazı bulma ve satış cephanesi üretimi tamamen otomatiktir.

## Gerekli

- **Claude Code, Cursor, Codex** ya da `AGENTS.md` okuyan başka bir AI aracı. Terminal kullanmana gerek yok.
- Bir klasör ve 15 dakika. Yeni bir şey öğrenmiyorsun, markanı dosyaya döküp yorumları yapıştırıyorsun.
- Ürününe gelmiş en az 8-10 yorum. Ne kadar çok yorum, o kadar net tema.

## Desteklenen araçlar

Aynı okuma kuralı üç ayrı dosyada tutulur; hangi aracı kullanırsan onu okur. Senin bir şey yapman gerekmez.

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/review-madenci.mdc` |
| Codex, Google Antigravity, Windsurf, Kilo ve 20+ araç | `AGENTS.md` (evrensel açık standart) |

## Kurulum

Üç yol var, en kolayı üçüncüsü.

**1. Tek komut (degit).** Klasörü olduğu gibi indirir:

```bash
npx degit muhammedsevimli/sistemler/review-madenci review-madenci
```

**2. Klonla ya da ZIP indir.** Yeşil **Code → Download ZIP** ile indir, ya da:

```bash
git clone https://github.com/muhammedsevimli/sistemler.git
```

**3. Klasörü AI aracına ver, "kur" de.** En kolayı. Bu klasörü Claude Code / Cursor / Codex'e aç, "bu review madenciyi benim markam için kur" de. Marka dosyalarını seninle birlikte doldurur.

Sonra sistemin okuduğu dosyalar şunlar. Marka kısmını kendinle doldur, yorumları yapıştır:

- `marka/01-marka.md`: kim, kime, ne satıyorsun, ne değilsin, kanıt
- `marka/02-ses.md`: ton, hitap, kelimeler, **yasak kelimeler**, örnek cümleler
- `marka/03-itiraz-hafizasi.md`: çıkan itirazlar ve tutan cevaplar (başta boş, sistem doldurur)
- `format/yorum-ayristirma.md`: her yorumu nasıl etiketleyeceği (hazır gelir, istersen ayarla)
- `format/cikti-format.md`: satış cephanesinin yapısı (hazır gelir, istersen ayarla)
- `yorumlar/`: müşteri yorumlarını buraya yapıştırırsın (yapıştırma rehberi klasörün içinde)

`CLAUDE.md`, `AGENTS.md`, `.cursor/rules/` ve `CALISTIR.md` olduğu gibi kalır, değiştirmene gerek yok.

Sonra iki adım. Önce yorumları yapıştır (`yorumlar/OKU-yapistirma-rehberi.md` anlatır), sonra çözümle:

> yorumlar'daki müşteri yorumlarını çözümle ve markama uyarlanmış satış cephanesi çıkar

Sistem temaları kümeler, en sık itirazı bulur, her ana temaya satış açısı, itiraz cevabı ve reklam kancası yazar, hepsini müşterinin kendi dilinden kurar. Tam komutlar için `CALISTIR.md` dosyasına bak.

## Gerçekten çalışıyor mu? 30 saniyede test et

- **Ses:** yasak kelimelerinden birini kullandı mı. Kullanmadıysa geçti.
- **Kanıt:** her satış açısının altına o açının çıktığı gerçek yorumu koydu mu. Koyduysa geçti.
- **Uydurmama:** yorumlarda geçmeyen bir fayda, sonuç ya da garanti icat etti mi, yoksa placeholder mı bıraktı. Placeholder bıraktıysa geçti.
- **İtiraz:** "neye takılıyorlar" grubunda en sık gelen itirazı işaretledi mi, kaç yorumda geçtiğini saydı mı. Saydıysa geçti.

## İtiraz hafızası büyür · sistem seninle keskinleşsin

Bir itiraz cevabı ya da satış açısı gerçekten işe yaradığında (satışta, reklamda tuttuğunda) "bu tuttu, itiraz hafızasına ekle" de. Sistem onu `marka/03-itiraz-hafizasi.md` dosyasına tarih atarak yazar: hangi itiraz, hangi cevap tuttu, kaynağı hangi müşteri cümlesi. Sistem her ay yeni yorumlarla tekrar çalışır; bu dosya senin sektörünün canlı itiraz ve cevap hafızası olur, sonraki üretimler oradan da beslenir.

## Örnek çıktı

`ORNEK-CIKTI.md` içinde, kurgusal bir marka ("Reyhan Doğal Bakım") için sistemin gerçekten ürettiği tam satış cephanesi var: tarama özeti, tema kümeleri, en sık gelen itiraz ve tema başına satış açısı + itiraz cevabı + reklam kancası. Girdi olarak yalnızca kurgusal bir nemlendiriciye gelmiş 20 yorum verilmişti. (Örnekler tamamen kurgusaldır; gerçek marka, müşteri ya da sayı yoktur.)

## Kimin için

Ürün satan herkes: e-ticaret markaları, esnaf, kurucular, performans pazarlamacıları, ajanslar, küçük ekipler. Elinde müşteri yorumu olup onu satış metnine, itiraz cevabına ve reklam kancasına çevirmek isteyen. Tasarım ya da kod bilmene gerek yok; sistem metin ve yön verir, tasarımı Canva'da ya da tasarımcınla tamamlarsın.

---

**Muhammed Sevimli** tarafından kuruldu. AI ile gerçek satış ve büyüme sistemleri kuruyorum ve Türkçe anlatıyorum. Sistemleri ve arkasındaki mantığı [YouTube](https://youtube.com/@msevimli)'ta gösteriyorum, günlük notları [X](https://x.com/_msevimli)'te paylaşıyorum. Kurarken takılırsan ya da birebir destek istersen [e-posta](mailto:hey@muhammedsevimli.com) at.

Web: [muhammedsevimli.com](https://muhammedsevimli.com) · Instagram: [@msevimli_](https://instagram.com/msevimli_) · Threads: [@msevimli_](https://threads.net/@msevimli_)

Katkı memnuniyetle. Bir sistemi geliştirdin ya da yeni bir fikrin mi var? Bir PR aç. Takıldığın yer ya da sorun mu var? Bir issue aç, yardımcı olurum.

## Lisans

MIT · bu sistemleri istediğin gibi kullan.
