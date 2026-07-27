# Marka Hafızası 🧩

Markanı bir kere yaz, AI bir daha unutmasın. Claude Code, Cursor, Codex ve `AGENTS.md` okuyan her araçta çalışan, üç dosyalık, kod gerektirmeyen bir marka hafızası.

Her yeni sohbette markanı sıfırdan anlatmaktan, ton kaymasından ve geçen ay verdiğin kararın unutulmasından kurtaran kalıcı bir sistem. Bir kere dolduruyorsun; sistem her üretimden önce bu dosyaları kendiliğinden okuyor.

## Ne işe yarıyor

İçerik, mail ya da teklif yazarken artık "biz kimiz, nasıl konuşuruz, ne satıyoruz" diye baştan yazmıyorsun. Sistem markanın çekirdeğini (kim, kime, hangi sesle) üç dosyada tutuyor ve AI aracın bunları her açılışta otomatik okuyor. Yeni kararlar da dosyaya inip hafızayı haftadan haftaya büyütüyor.

## Gerekli

- **Claude Code, Cursor, Codex** ya da `AGENTS.md` okuyan başka bir AI aracı. Terminal kullanmana gerek yok.
- Bir klasör ve 15 dakika. Yeni bir şey öğrenmiyorsun, kafandakini dosyaya döküyorsun.

## Desteklenen araçlar

Aynı hafıza kuralı üç ayrı dosyada tutulur; hangi aracı kullanırsan onu okur. Senin bir şey yapman gerekmez.

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/marka-hafizasi.mdc` |
| Codex, Google Antigravity, Windsurf, Kilo ve 20+ araç | `AGENTS.md` (evrensel açık standart) |

## Kurulum

Üç yol var, en kolayı üçüncüsü.

**1. Tek komut (degit).** Klasörü olduğu gibi indirir:

```bash
npx degit muhammedsevimli/sistemler/marka-hafizasi marka-hafizasi
```

**2. Klonla ya da ZIP indir.** Yeşil **Code → Download ZIP** ile indir, ya da:

```bash
git clone https://github.com/muhammedsevimli/sistemler.git
```

**3. Klasörü AI aracına ver, "kur" de.** En kolayı. Bu klasörü Claude Code / Cursor / Codex'e aç, "bu marka hafızası sistemini benim markam için kur" de. Dosyaları seninle birlikte doldurur.

Sonra `hafiza/` içindeki üç dosyayı kendi markanla doldur:

- `01-marka-kimlik.md`: kim, kime, ne satıyorsun, ne değilsin, kanıt
- `02-ses.md`: ton, hitap, kelimeler, **yasak kelimeler**, örnek cümleler
- `03-kararlar.md`: bu ay ne öne çıkıyor, şu an dokunulmayacak konular

`CLAUDE.md`, `AGENTS.md`, `.cursor/rules/` ve `HAFTALIK-DONGU.md` olduğu gibi kalır, değiştirmene gerek yok.

Sonra marka bilgisi vermeden bir üretim iste:

> bu haftaki ürün için tek bir instagram başlığı yaz. bana marka hakkında soru sorma, hafızadan çalış.

Sistem üç dosyayı okuyup markana uygun, doğru tonda, bu ayki ürünü öne çıkaran bir metin yazar. Tek kelime marka bilgisi vermedin.

## Gerçekten çalışıyor mu? 30 saniyede test et

- **Hafıza:** marka bilgisi vermeden bir başlık iste. Markanı biliyorsa geçti.
- **Ton:** yasak kelimelerinden birini kullandı mı. Kullanmadıysa geçti.
- **Karar:** "şu an dokunma" dediğin ürünü öne çıkardı mı. Çıkarmadıysa geçti.
- **Geri yazma:** "şu başlık tuttu, kaydet" de. `03-kararlar.md`'ye eklediyse geçti.

## Haftalık döngü

Haftada bir, 5 dakika (`HAFTALIK-DONGU.md`): ne öğrendin, ne öne çıkacak, ton kaydı mı, eskiyeni arşivle, küçük bir üretimle test et. Bunu yaparsan sistem seninle büyür.

## Örnek çıktı

`ORNEK-CIKTI.md` içinde, kurgusal bir marka ("Urla Sofrası") için sistemin gerçekten ürettiği örnek var; prompt'ta tek kelime marka bilgisi yokken. (Örnekler tamamen kurgusaldır.)

## Kimin için

Markası olan ve AI ile içerik/mail/teklif üreten herkes: kurucular, içerik üreticiler, ajanslar, küçük ekipler. Kod bilmene gerek yok.

---

**Muhammed Sevimli** tarafından kuruldu. AI ile gerçek satış ve büyüme sistemleri kuruyorum ve Türkçe anlatıyorum. Sistemleri ve arkasındaki mantığı [YouTube](https://youtube.com/@msevimli)'ta gösteriyorum, günlük notları [X](https://x.com/_msevimli)'te paylaşıyorum. Kurarken takılırsan ya da birebir destek istersen [e-posta](mailto:hey@muhammedsevimli.com) at.

Web: [muhammedsevimli.com](https://muhammedsevimli.com) · Instagram: [@msevimli_](https://instagram.com/msevimli_) · Threads: [@msevimli_](https://threads.com/@msevimli_)

Katkı memnuniyetle. Bir sistemi geliştirdin ya da yeni bir fikrin mi var? Bir PR aç. Takıldığın yer ya da sorun mu var? Bir issue aç, yardımcı olurum.

## Lisans

MIT · bu sistemleri istediğin gibi kullan.
