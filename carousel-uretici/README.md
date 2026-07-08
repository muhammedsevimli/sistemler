# Carousel + Hook Üretici 🧩

Konu ver, sistem markanın sesiyle 3 kapak hook'u ve 7 slaytlık carousel çıkarsın. Claude Code, Cursor, Codex ve `AGENTS.md` okuyan her araçta çalışan, kod gerektirmeyen bir carousel üreticisi.

Her carousel için markanı, tonunu ve slayt yapısını baştan anlatmaktan kurtaran bir sistem. Marka dosyalarını bir kere dolduruyorsun; sonra tek satır konu veriyorsun, sistem format ve sese uygun tam carousel'ı yazıyor.

## Ne işe yarıyor

Instagram ya da LinkedIn carousel'ı yazarken artık "biz kimiz, nasıl konuşuruz, kaç slayt olsun, kapak ne olsun" diye baştan kurmuyorsun. Sistem markanın çekirdeğini ve carousel formatını beş dosyada tutuyor, AI aracın bunları her açılışta otomatik okuyor. Sen sadece konuyu veriyorsun:

1. **3 hook** üretir (dert açısı, sayı açısı, karşı görüş açısı). Her biri kapak slaytı olabilir, birini seçersin.
2. **7 slayt** yazar: kapak + 5 gövde + kapanış (tek net CTA). Her slaytın altında tasarımcıya "görsel:" yönergesi.
3. **LinkedIn çevirisi** verir: aynı slaytlar, hitap "siz"e döner.

Tutan bir açı çıkınca "bu tuttu" diyorsun, sistem onu swipe-file'a yazıyor ve bir sonraki carousel'da örnek alıyor.

## Gerekli

- **Claude Code, Cursor, Codex** ya da `AGENTS.md` okuyan başka bir AI aracı. Terminal kullanmana gerek yok.
- Bir klasör ve 15 dakika. Yeni bir şey öğrenmiyorsun, markanı dosyaya döküyorsun.

## Desteklenen araçlar

Aynı okuma kuralı üç ayrı dosyada tutulur; hangi aracı kullanırsan onu okur. Senin bir şey yapman gerekmez.

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/carousel-uretici.mdc` |
| Codex, Google Antigravity, Windsurf, Kilo ve 20+ araç | `AGENTS.md` (evrensel açık standart) |

## Kurulum

Üç yol var, en kolayı üçüncüsü.

**1. Tek komut (degit).** Klasörü olduğu gibi indirir:

```bash
npx degit muhammedsevimli/sistemler/carousel-uretici carousel-uretici
```

**2. Klonla ya da ZIP indir.** Yeşil **Code → Download ZIP** ile indir, ya da:

```bash
git clone https://github.com/muhammedsevimli/sistemler.git
```

**3. Klasörü AI aracına ver, "kur" de.** En kolayı. Bu klasörü Claude Code / Cursor / Codex'e aç, "bu carousel üreticisini benim markam için kur" de. Marka dosyalarını seninle birlikte doldurur.

Sonra sistemin her carousel'da okuduğu dosyalar şunlar. Marka kısmını kendi markanla doldur:

- `marka/01-marka.md`: kim, kime, ne satıyorsun, ne değilsin, kanıt
- `marka/02-ses.md`: ton, hitap, kelimeler, **yasak kelimeler**, örnek cümleler
- `marka/03-swipe.md`: tutan hook ve açılar (boş başlar, her tutan işle büyür)
- `format/carousel-format.md`: slayt anatomisi ve kaç slayt kuralı (hazır gelir, istersen ayarla)
- `format/hook-kaliplari.md`: hook formül bankası (hazır gelir, istersen ayarla)

`CLAUDE.md`, `AGENTS.md`, `.cursor/rules/` ve `URET.md` olduğu gibi kalır, değiştirmene gerek yok.

Sonra sadece konuyu ver:

> şu konuda carousel çıkar: küçük işletme neden indirim yapmadan da satabilir

Sistem beş dosyayı okuyup 3 hook + 7 slayt + görsel yönergeleri + LinkedIn çevirisi yazar. Tek kelime marka ya da format bilgisi vermedin. Tam komut için `URET.md` dosyasına bak.

## Gerçekten çalışıyor mu? 30 saniyede test et

- **Ses:** yasak kelimelerinden birini kullandı mı. Kullanmadıysa geçti.
- **Format:** kapak durdurucu mu, son slayt tek CTA mı, her slaytta "görsel:" satırı var mı. Varsa geçti.
- **Kanıt:** uydurma sayı koydu mu, yoksa placeholder mu bıraktı. Placeholder bıraktıysa geçti.
- **Geri yazma:** "şu açı tuttu, kaydet" de. `marka/03-swipe.md` en üstüne eklediyse geçti.

## Swipe-file · sistem seninle büyüsün

Bir hook ya da açı iyi çalıştığında (kaydetme, yorum, paylaşım) "bu tuttu" de. Sistem onu `marka/03-swipe.md` en üstüne tarih atarak yazar. Böylece kazanılmış taktikler dosyası her carousel'la büyür, sistem senin işine daha çok benzer.

## Örnek çıktı

`ORNEK-CIKTI.md` içinde, kurgusal bir marka ("Meydan Fırın") için sistemin gerçekten ürettiği tam carousel var; prompt'ta tek satır konu dışında hiçbir bilgi yokken. (Örnekler tamamen kurgusaldır.)

## Kimin için

Markası olan ve carousel üreten herkes: kurucular, içerik üreticiler, ajanslar, küçük ekipler, esnaf. Tasarım ya da kod bilmene gerek yok; sistem metin ve görsel yönergesi verir, tasarımı Canva'da ya da tasarımcınla tamamlarsın.

---

**Muhammed Sevimli** tarafından kuruldu. AI ile gerçek satış ve büyüme sistemleri kuruyorum ve Türkçe anlatıyorum. Sistemleri ve arkasındaki mantığı [YouTube](https://youtube.com/@msevimli)'ta gösteriyorum, günlük notları [X](https://x.com/_msevimli)'te paylaşıyorum. Kurarken takılırsan ya da birebir destek istersen [e-posta](mailto:hey@muhammedsevimli.com) at.

Web: [muhammedsevimli.com](https://muhammedsevimli.com) · Instagram: [@msevimli_](https://instagram.com/msevimli_) · Threads: [@msevimli_](https://threads.net/@msevimli_)

Katkı memnuniyetle. Bir sistemi geliştirdin ya da yeni bir fikrin mi var? Bir PR aç. Takıldığın yer ya da sorun mu var? Bir issue aç, yardımcı olurum.

## Lisans

MIT · bu sistemleri istediğin gibi kullan.
