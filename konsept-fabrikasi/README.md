# Konsept Fabrikası · 50 Statik Reklam Konsepti 🏭

Markanın işe yarayan reklamlarını ve gerçek müşteri sesini bir kere dosyaya koy, sistem her sabah (ya da tek komutla) markanın sesinden 50 taze statik reklam konsepti çıkarsın. Claude Code, Cursor, Codex ve `AGENTS.md` okuyan her araçta çalışan, kod gerektirmeyen bir konsept fabrikası.

Reklam yazarken en zor kısım boş sayfa. Bu sistem o sayfayı senin ZATEN tuttuğu belli olan reklamlarınla ve müşterinin kendi cümleleriyle dolduruyor, sonra o mantığı yeni açılara çeviriyor. Rakibinden değil, kendi kanıtından besleniyor: en iyi dönen reklamların artı gerçek müşteri yorumların. Sabah kalkınca önünde 50 konsept hazır olur, beğendiğini tasarıma geçirir, gerisini elersin.

## Ne işe yarıyor

Girdi olarak üç şey veriyorsun: (1) markanın kazanan (en iyi dönen) reklamları, (2) müşteri yorumları, (3) sosyal medyada en beğenilen yorumlar. Sistem bunlardan neyin tuttuğunu çıkarıyor (hangi kanca, hangi vaat, hangi duygu tekrar ediyor), sonra bu mantığı `marka/` dosyalarından okuduğu senin markana ve sesine giydirip 50 statik reklam konsepti üretiyor. Her konsept üç satır: kanca, görsel yönergesi, tek satır gerekçe (hangi kazanan reklamdan ya da müşteri cümlesinden geldi).

50 konsept doldurma değil. Sistem üç eksende rotasyon yapıyor: kanca tipi (dert, duyusal, sayı, sosyal kanıt, karşı görüş, mizah, itiraz çürütme, ritüel, karşılaştırma, hediye) x segment x duygu. Aynı kancayı kelime değiştirip 50 kez yazmaz; her konsept tek fikir taşır ve başlığında `[kanca tipi · segment]` etiketi görünür, böylece çeşitlilik gözle görülür.

Önemli ayrım: bu sistem senin kendi kazanan reklamlarını ve müşteri sesini madenler, rakip reklamını değil. Rakip reklamlarını çözmek istiyorsan o ayrı sistem (Ad Spy).

## Gerekli

- **Claude Code, Cursor, Codex** ya da `AGENTS.md` okuyan başka bir AI aracı. Terminal kullanmana gerek yok.
- Bir klasör ve 15 dakika. Yeni bir şey öğrenmiyorsun, markanı ve girdilerini dosyaya döküyorsun.
- En az 3-4 kazanan reklam, 8-10 müşteri yorumu, 3-5 beğenilen yorum. Girdi ne kadar zenginse örüntü o kadar net çıkar.

## Desteklenen araçlar

Aynı okuma kuralı üç ayrı dosyada tutulur; hangi aracı kullanırsan onu okur. Senin bir şey yapman gerekmez.

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/konsept-fabrikasi.mdc` |
| Codex, Google Antigravity, Windsurf, Kilo ve 20+ araç | `AGENTS.md` (evrensel açık standart) |

## Kurulum

Üç yol var, en kolayı üçüncüsü.

**1. Tek komut (degit).** Klasörü olduğu gibi indirir:

```bash
npx degit muhammedsevimli/sistemler/konsept-fabrikasi konsept-fabrikasi
```

**2. Klonla ya da ZIP indir.** Yeşil **Code → Download ZIP** ile indir, ya da:

```bash
git clone https://github.com/muhammedsevimli/sistemler.git
```

**3. Klasörü AI aracına ver, "kur" de.** En kolayı. Bu klasörü Claude Code / Cursor / Codex'e aç, "bu konsept fabrikasını benim markam için kur" de. Marka ve girdi dosyalarını seninle birlikte doldurur.

Sonra sistemin okuduğu dosyalar şunlar. Marka ve girdi kısmını kendinle doldur:

- `marka/01-marka.md`: kim, kime, ne satıyorsun, ne değilsin, kanıt
- `marka/02-ses.md`: ton, hitap, kelimeler, **yasak kelimeler**, örnek cümleler
- `marka/03-kazanan-hafiza.md`: tutan açılar (başta boş, sistem doldurur)
- `format/girdi-ayristirma.md`: girdileri hangi başlıklara böleceği (hazır gelir, istersen ayarla)
- `format/konsept-format.md`: 50 konseptin yapısı ve çeşitlilik kuralı (hazır gelir, istersen ayarla)
- `girdi/kazanan-reklamlar.md`, `girdi/musteri-yorumlari.md`, `girdi/begenilen-yorumlar.md`: girdilerini buraya yapıştırırsın (yapıştırma rehberi ve dolu örnek klasörün içinde)

`CLAUDE.md`, `AGENTS.md`, `.cursor/rules/` ve `CALISTIR.md` olduğu gibi kalır, değiştirmene gerek yok.

Sonra tek komut. Girdi dosyalarını doldurduktan sonra çalıştır:

> girdi klasöründeki kazanan reklamları, müşteri yorumlarını ve en beğenilen yorumları çözümle ve bana 50 statik reklam konsepti çıkar

Sistem girdileri ayrıştırır, örüntüyü çıkarır, markanın sesiyle 50 çeşitli konsept yazar ve `ciktilar/` klasörüne koyar. Tam komut için `CALISTIR.md` dosyasına bak.

## Her sabah otomatik istiyorsan

Çekirdek iş tek komutla çalışır. "Uyurken çalışsın, sabah 50 konsept hazır olsun" istiyorsan aynı tek komutu her sabah çalıştıran bir görev kurarsın (Windows Görev Zamanlayıcı ya da Mac cron). Kurulum adım adım: `otomasyon/KUR-otomasyon.md`. Sihirli görünmez bir otomasyon yok; her sabah dosyası, aynı tek komutun zamanlanmış hâlidir. İstemezsen komutu ne zaman istersen elle çalıştırırsın, ikisi de aynı çıktıyı verir.

## Gerçekten çalışıyor mu? 30 saniyede test et

- **Çeşitlilik:** 50 konsept gerçekten farklı mı, yoksa aynı kancanın kelime değiştirilmiş kopyası mı. Başlıklardaki `[kanca tipi · segment]` etiketleri dönüyorsa geçti.
- **Ses:** yasak kelimelerinden birini kullandı mı. Kullanmadıysa geçti.
- **Uydurmama:** sende olmayan sayıyı, indirimi ya da garantiyi icat etti mi, yoksa placeholder mı bıraktı. Placeholder bıraktıysa geçti.
- **Kanıt:** her konseptin gerekçe satırında hangi kazanan reklamdan ya da müşteri cümlesinden geldiğini yazdı mı. Yazdıysa geçti.

## Kazanan hafıza büyür · sistem seninle keskinleşsin

Bir konsept gerçekten tuttuğunda (satış, tıklama, kaydetme) "bu tuttu, kazanan hafızaya ekle" de. Sistem onu `marka/03-kazanan-hafiza.md` dosyasına tarih atarak yazar: hangi kanca tipi, neden tuttu, sonraki turda birincil yapılacak açı. Yeni bir kazanan reklam ya da çok beğenilen yorum çıktığında ilgili `girdi/` dosyasına ekle. Girdi zenginleştikçe örüntü keskinleşir; sistem her turda senin işine daha çok benzer.

## Örnek çıktı

`ORNEK-CIKTI.md` içinde, kurgusal bir marka ("Değirmen Kahve") için sistemin gerçekten ürettiği tam 50 konsept var: girdi özeti, çıkan örüntü, on gruba bölünmüş 50 konsept, sabah eleme notu ve platform notu. Girdi olarak yalnızca kurgusal 4 kazanan reklam, 10 müşteri yorumu ve 3 beğenilen yorum verilmişti. (Örnekler tamamen kurgusaldır; gerçek marka, müşteri ya da sayı yoktur.)

## Kimin için

Reklam veren ya da düzenli reklam görseli üreten herkes: e-ticaret markaları, performans pazarlamacıları, ajanslar, kurucular, küçük ekipler, esnaf. Elinde tutan bir reklam ve gerçek müşteri yorumu olup onu her hafta taze konseptlere çevirmek isteyen. Tasarım ya da kod bilmene gerek yok; sistem metin ve yön verir, tasarımı Canva'da ya da tasarımcınla tamamlarsın.

---

**Muhammed Sevimli** tarafından kuruldu. AI ile gerçek satış ve büyüme sistemleri kuruyorum ve Türkçe anlatıyorum. Sistemleri ve arkasındaki mantığı [YouTube](https://youtube.com/@msevimli)'ta gösteriyorum, günlük notları [X](https://x.com/_msevimli)'te paylaşıyorum. Kurarken takılırsan ya da birebir destek istersen [e-posta](mailto:hey@muhammedsevimli.com) at.

Web: [muhammedsevimli.com](https://muhammedsevimli.com) · Instagram: [@msevimli_](https://instagram.com/msevimli_) · Threads: [@msevimli_](https://threads.net/@msevimli_)

Katkı memnuniyetle. Bir sistemi geliştirdin ya da yeni bir fikrin mi var? Bir PR aç. Takıldığın yer ya da sorun mu var? Bir issue aç, yardımcı olurum.

## Lisans

MIT · bu sistemleri istediğin gibi kullan.
