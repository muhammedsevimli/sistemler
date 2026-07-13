# Ad Spy · Rakip Reklam Çözümleyici 🎯

Rakiplerini bir kere yaz, sistem Meta Reklam Kütüphanesi linklerini üretsin. Aktif reklamları yapıştır, sistem hangi reklamların aylardır döndüğünü okuyup örüntüyü çıkarsın ve markanın sesiyle 10 reklam konsepti yazsın. Claude Code, Cursor, Codex ve `AGENTS.md` okuyan her araçta çalışan, kod gerektirmeyen bir rakip reklam çözümleyici.

Her kampanyada "rakip ne yapıyor, hangi reklamı tutuyor" diye baştan araştırmaktan kurtaran bir sistem. Rakiplerini bir kere dosyaya döküyorsun; sonra tek komutla sistem çalışan reklam mantığını çıkarıp senin ürününe ve tonuna giydiriyor. Boş sayfadan değil, kanıtlanmış bir mantığın üstünden başlıyorsun.

## Ne işe yarıyor

Reklam yazarken en zor kısım boş sayfa. Bu sistem o sayfayı rakibinin ŞU AN para bastığı reklamlarla dolduruyor, sonra o mantığı senin markana çeviriyor. İki fazda çalışıyor:

1. **Link üretimi.** `marka/03-rakipler.md` içindeki her rakip için Meta Reklam Kütüphanesi (herkese açık) arama linkini üretir. Linke tıklarsın, o rakibin şu an dönen aktif reklamlarını görürsün.
2. **Çözümleme ve üretim.** Gördüğün aktif reklamları `rakip-reklamlari/` klasörüne yapıştırırsın. Sistem her reklamı ayrıştırır (kanca, vaat, kime, format, kanıt, ne kadardır dönüyor), aylardır döneni "kazandıran aday" işaretler, tekrar eden örüntüyü çıkarır ve `marka/` dosyalarından okuduğu senin sesinle 10 konsept yazar. Her konseptin altında "hangi rakip mantığından geldi" ve "neden tutabilir" satırı.

Dürüst sınır: Meta Reklam Kütüphanesi herkese açık ve ücretsizdir, ama ürün reklamları için ücretsiz otomatik indirme yoktur. Reklamın metni tarayıcıda görünür; bu yüzden "reklamı görme" adımı tek tıklık bir aç-ve-yapıştır işidir. Ayrıştırma, örüntü çıkarma ve 10 konsept üretimi tamamen otomatiktir.

## Gerekli

- **Claude Code, Cursor, Codex** ya da `AGENTS.md` okuyan başka bir AI aracı. Terminal kullanmana gerek yok.
- Bir klasör ve 15 dakika. Yeni bir şey öğrenmiyorsun, markanı ve rakiplerini dosyaya döküyorsun.
- Meta Reklam Kütüphanesi'ni açacak bir tarayıcı. Hesap gerekmez.

## Desteklenen araçlar

Aynı okuma kuralı üç ayrı dosyada tutulur; hangi aracı kullanırsan onu okur. Senin bir şey yapman gerekmez.

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/ad-spy.mdc` |
| Codex, Google Antigravity, Windsurf, Kilo ve 20+ araç | `AGENTS.md` (evrensel açık standart) |

## Kurulum

Üç yol var, en kolayı üçüncüsü.

**1. Tek komut (degit).** Klasörü olduğu gibi indirir:

```bash
npx degit muhammedsevimli/sistemler/ad-spy ad-spy
```

**2. Klonla ya da ZIP indir.** Yeşil **Code → Download ZIP** ile indir, ya da:

```bash
git clone https://github.com/muhammedsevimli/sistemler.git
```

**3. Klasörü AI aracına ver, "kur" de.** En kolayı. Bu klasörü Claude Code / Cursor / Codex'e aç, "bu rakip reklam çözümleyiciyi benim markam için kur" de. Marka ve rakip dosyalarını seninle birlikte doldurur.

Sonra sistemin okuduğu dosyalar şunlar. Marka ve rakip kısmını kendinle doldur:

- `marka/01-marka.md`: kim, kime, ne satıyorsun, ne değilsin, kanıt
- `marka/02-ses.md`: ton, hitap, kelimeler, **yasak kelimeler**, örnek cümleler
- `marka/03-rakipler.md`: takip ettiğin rakipler (sistem bunlardan Meta Reklam Kütüphanesi linki üretir)
- `format/reklam-ayristirma.md`: her reklamı hangi başlıklara böleceği (hazır gelir, istersen ayarla)
- `format/konsept-format.md`: 10 konseptin yapısı (hazır gelir, istersen ayarla)
- `rakip-reklamlari/`: aktif reklamları buraya yapıştırırsın (yapıştırma rehberi klasörün içinde)

`CLAUDE.md`, `AGENTS.md`, `.cursor/rules/` ve `CALISTIR.md` olduğu gibi kalır, değiştirmene gerek yok.

Sonra iki komut. Önce linkleri al:

> rakiplerimin meta ads library linklerini üret

Linke tıkla, açılan kütüphanede aktif reklamları `rakip-reklamlari/<rakip>.md` içine yapıştır (nasıl yapıştıracağın `rakip-reklamlari/OKU-yapistirma-rehberi.md` içinde). Sonra çözümle:

> rakip-reklamlari'ndaki reklamları çözümle ve markama uyarlanmış 10 konsept çıkar

Sistem rakipleri ayrıştırır, örüntüyü çıkarır, 10 konsept yazar. Tam komutlar için `CALISTIR.md` dosyasına bak.

## Gerçekten çalışıyor mu? 30 saniyede test et

- **Ses:** yasak kelimelerinden birini kullandı mı. Kullanmadıysa geçti.
- **Sinyal:** aylardır dönen reklamı "kazandıran aday" işaretledi mi, kısa süredir döneni test aşaması saydı mı. Ayırdıysa geçti.
- **Örüntü:** rakibin cümlesini kopyaladı mı, yoksa mantığını alıp senin sesine mi çevirdi. Mantığı aldıysa geçti.
- **Kanıt:** sende olmayan indirim ya da garanti uydurdu mu, yoksa placeholder mu bıraktı. Placeholder bıraktıysa geçti.

## Rakip listesi büyür · sistem seninle keskinleşsin

Yeni bir rakip fark edince `marka/03-rakipler.md` dosyasına ekle. Sistem her ay aynı linklerden tekrar çalışır; liste senin sektörünün canlı reklam hafızası olur. Bir konsept gerçekten tuttuğunda (satış, tıklama, kaydetme) "bu tuttu" de. Sistem onu `marka/03-rakipler.md` en altına tarih atarak yazar, sonraki üretimler oradan da beslenir.

## Örnek çıktı

`ORNEK-CIKTI.md` içinde, kurgusal bir marka ("Sırma Ev Tekstili") için sistemin gerçekten ürettiği tam çözümleme var: rakip reklam ayrıştırma tablosu, çıkan örüntü ve 10 konsept. Girdi olarak yalnızca kurgusal iki rakibin reklamları verilmişti. (Örnekler tamamen kurgusaldır; gerçek marka, müşteri ya da sayı yoktur.)

## Kimin için

Reklam veren herkes: e-ticaret markaları, performans pazarlamacıları, ajanslar, kurucular, küçük ekipler, esnaf. Rakibinin çalışan reklamını görüp kendi diline çevirmek isteyen. Tasarım ya da kod bilmene gerek yok; sistem metin ve yön verir, tasarımı Canva'da ya da tasarımcınla tamamlarsın.

---

**Muhammed Sevimli** tarafından kuruldu. AI ile gerçek satış ve büyüme sistemleri kuruyorum ve Türkçe anlatıyorum. Sistemleri ve arkasındaki mantığı [YouTube](https://youtube.com/@msevimli)'ta gösteriyorum, günlük notları [X](https://x.com/_msevimli)'te paylaşıyorum. Kurarken takılırsan ya da birebir destek istersen [e-posta](mailto:hey@muhammedsevimli.com) at.

Web: [muhammedsevimli.com](https://muhammedsevimli.com) · Instagram: [@msevimli_](https://instagram.com/msevimli_) · Threads: [@msevimli_](https://threads.net/@msevimli_)

Katkı memnuniyetle. Bir sistemi geliştirdin ya da yeni bir fikrin mi var? Bir PR aç. Takıldığın yer ya da sorun mu var? Bir issue aç, yardımcı olurum.

## Lisans

MIT · bu sistemleri istediğin gibi kullan.
