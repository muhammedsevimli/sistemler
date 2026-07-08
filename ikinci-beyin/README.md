# İkinci Beyin 🧩

İşini bir kere dosyalara yaz, AI her işte geçmişi zaten bilsin. Claude Code, Cursor, Codex ve `AGENTS.md` okuyan her araçta çalışan, kod gerektirmeyen bir çalışma hafızası.

Her yeni işte bilgisayarına "hangi projedeyiz, geçen ay neye karar verdik, o müşteri ne istemişti" diye baştan anlatmaktan kurtaran kalıcı bir sistem. Beyni bir kere kuruyorsun; sistem her işten önce sadece o işe gereken parçayı kendiliğinden yüklüyor.

## Ne işe yarıyor

Teklif yazarken geçen seferki fiyatı, mail atarken o müşteriyle konuştuğun son şeyi, plan yaparken verdiğin kararları artık sen hatırlatmıyorsun. Sistem işinin çekirdeğini, projelerini, kararlarını, kişilerini ve kaynaklarını dosyalarda tutuyor. Her işten önce önce indeksi ve çekirdeği okuyor, sonra göreve göre doğru dosyayı çekiyor. Yeni her karar tekrar dosyaya iniyor, beyin haftadan haftaya doluyor.

Fark bu: markadan farklı olarak burada tek bir "ses" değil, işinin bütün hafızası duruyor. Sistem her şeyi değil, o işe gerekeni yüklüyor; bağlam temiz kalıyor, beyin büyüdükçe daha da işine yarıyor.

## Gerekli

- **Claude Code, Cursor, Codex** ya da `AGENTS.md` okuyan başka bir AI aracı. Terminal kullanmana gerek yok.
- Bir klasör ve 20 dakika. Yeni bir şey öğrenmiyorsun, kafanda taşıdığın işi dosyaya döküyorsun.

## Desteklenen araçlar

Aynı bağlam kuralı üç ayrı dosyada tutulur; hangi aracı kullanırsan onu okur. Senin bir şey yapman gerekmez.

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/ikinci-beyin.mdc` |
| Codex, Google Antigravity, Windsurf, Kilo ve 20+ araç | `AGENTS.md` (evrensel açık standart) |

## Kurulum

Üç yol var, en kolayı üçüncüsü.

**1. Tek komut (degit).** Klasörü olduğu gibi indirir:

```bash
npx degit muhammedsevimli/sistemler/ikinci-beyin ikinci-beyin
```

**2. Klonla ya da ZIP indir.** Yeşil **Code → Download ZIP** ile indir, ya da:

```bash
git clone https://github.com/muhammedsevimli/sistemler.git
```

**3. Klasörü AI aracına ver, "kur" de.** En kolayı. Bu klasörü Claude Code / Cursor / Codex'e aç, "bu ikinci beyin sistemini benim işim için kur" de. Dosyaları seninle birlikte doldurur.

Sonra `beyin/` içindeki dosyaları kendi işinle doldur:

- `01-cekirdek.md`: kim, ne yapıyorsun, kime, şu anki öncelik, ne değilsin, kanıt
- `02-ses.md`: ton, hitap, kelimeler, **yasak kelimeler** (metin üretirsen)
- `03-projeler.md`: aktif projeler, durum, sıradaki adım
- `04-kisiler.md`: müşteriler, iş ortakları, kim ne için
- `05-kararlar.md`: biriken kararlar, "şu an dokunma", ne öne çıkıyor
- `06-kaynaklar.md`: araçlar, linkler, şablonlar (şifre YAZMA, sadece nerede olduğunu yaz)

`00-indeks.md`, `CLAUDE.md`, `AGENTS.md`, `.cursor/rules/` ve `HAFTALIK-DONGU.md` olduğu gibi kalır, değiştirmene gerek yok. Yeni dosya eklersen sadece `00-indeks.md` haritasına bir satır ekle.

Sonra iş bilgisi vermeden bir üretim iste:

> yeni bir müşteriye gönderilecek kısa bir instagram gönderi metni yaz. bana iş hakkında soru sorma, beyinden çalış.

Sistem önce hangi dosyaları okuduğunu söyler ("cekirdek + ses + kararlar okundu"), sonra işine uygun, doğru tonda, öne çıkan teklifini iten bir metin yazar. Tek kelime iş bilgisi vermedin.

## Gerçekten çalışıyor mu? 30 saniyede test et

- **Hafıza:** iş bilgisi vermeden bir üretim iste. Doğru dosyaları çekip işini biliyorsa geçti.
- **Bağlam:** "şu projede en son neredeyiz" diye sor. `03-projeler.md` yükleyip doğru durumu söylediyse geçti.
- **Karar koruması:** "şu an dokunma" dediğin işi teklif et. Kabul etmeyip kararı hatırlattıysa geçti.
- **Geri yazma:** "yeni karar: ... bunu beyne kaydet" de. `05-kararlar.md` en üstüne tarih atarak eklediyse geçti.

## Haftalık döngü

Haftada bir, 5 dakika (`HAFTALIK-DONGU.md`): ne oldu, projeler güncel mi, yeni kişi/kaynak girdi mi, öncelik değişti mi, indeks doğru mu. Bunu yaparsan beyin seninle büyür, eskiyen bilgi arşive iner.

## Örnek çıktı

`ORNEK-CIKTI.md` içinde, kurgusal bir işletme ("Piksel Atölye", tek kişilik web stüdyosu) için sistemin gerçekten ürettiği dört örnek var; prompt'ta tek kelime iş bilgisi yokken. Farklı işlerde farklı dosya yüklüyor. (Örnekler tamamen kurgusaldır.)

## Kimin için

Aynı anda birden çok iş, proje ve müşteri taşıyan herkes: kurucular, freelance'çılar, tek kişilik stüdyolar, küçük ekipler. Aynı brief'i onuncu kez yazmaktan yorulan herkes. Kod bilmene gerek yok.

---

**Muhammed Sevimli** tarafından kuruldu. AI ile gerçek satış ve büyüme sistemleri kuruyorum ve Türkçe anlatıyorum. Sistemleri ve arkasındaki mantığı [YouTube](https://youtube.com/@msevimli)'ta gösteriyorum, günlük notları [X](https://x.com/_msevimli)'te paylaşıyorum. Kurarken takılırsan ya da birebir destek istersen [e-posta](mailto:hey@muhammedsevimli.com) at.

Web: [muhammedsevimli.com](https://muhammedsevimli.com) · Instagram: [@msevimli_](https://instagram.com/msevimli_) · Threads: [@msevimli_](https://threads.net/@msevimli_)

Katkı memnuniyetle. Bir sistemi geliştirdin ya da yeni bir fikrin mi var? Bir PR aç. Takıldığın yer ya da sorun mu var? Bir issue aç, yardımcı olurum.

## Lisans

MIT · bu sistemleri istediğin gibi kullan.
