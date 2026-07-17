# Müşteri Bulucu · Aday Bulma + İlk Mesaj 🔦

Nişini bir kere yaz, sistem Meta Reklam Kütüphanesi linklerini üretsin. O nişte şu an reklam veren markaları yapıştır, sistem hangisinin bütçesi olduğunu okuyup adayları sıralasın ve her birine reklamından çıkardığı somut bir detayla ilk mesajı yazsın. Claude Code, Cursor, Codex ve `AGENTS.md` okuyan her araçta çalışan, kod gerektirmeyen bir aday bulucu.

Müşteri ararken en zor kısım kime yazacağını bilmemek. Bu sistem o listeyi reklam veren markalardan kuruyor: reklam veriyorsa bütçesi var demektir. Nişini bir kere dosyaya döküyorsun; sonra iki komutla sıralı aday listesi ve her adaya özel ilk mesaj çıkıyor. Boş listeden değil, para harcadığı belli olan markalardan başlıyorsun.

## Ne işe yarıyor

Soğuk mesajın çöpe gitmesinin iki sebebi var: yanlış kişiye yazmak ve herkese aynı şeyi yazmak. Bu sistem ikisini de kapatıyor. İki fazda çalışıyor:

1. **Link üretimi.** `hedef/01-nis.md` içindeki her arama terimi için Meta Reklam Kütüphanesi (herkese açık) arama linkini üretir. Linke tıklarsın, o nişte şu an reklam veren markaları görürsün.
2. **Sıralama ve mesaj.** Gördüğün markaları `adaylar/` klasörüne yapıştırırsın. Sistem her adayı ayrıştırır (ne satıyor, ne kadardır reklam veriyor, kaç varyant, zayıf noktası ne), üç eksenden puanlar (bütçe sinyali + zayıflığın senin hizmetinle çözülebilirliği + fiyat aralığına uygunluk), adayları sıralar ve her birine ÖZEL bir ilk mesaj yazar. Her mesajın altında "hangi reklamdan hangi gözlem geldi" ve "neden cevap verebilir" satırı.

Sıralamanın çapası bütçe sinyali. Aylardır kesintisiz dönen reklam, para kazandırdığı için dönüyordur; iki haftalık tek reklam henüz test aşamasında olabilir. Sistem bu ikisini ayırır ve puanı gerekçesiyle yazar, katılmazsan kendi kararını verebilirsin.

Dürüst sınır: Meta Reklam Kütüphanesi herkese açık ve ücretsizdir, ama ürün reklamları için ücretsiz otomatik indirme yoktur. Reklamın metni tarayıcıda görünür; bu yüzden "markayı görme" adımı tek tıklık bir aç-ve-yapıştır işidir. Ayrıştırma, bütçe sinyali okuma, puanlama, sıralama ve mesaj üretimi tamamen otomatiktir.

## Gerekli

- **Claude Code, Cursor, Codex** ya da `AGENTS.md` okuyan başka bir AI aracı. Terminal kullanmana gerek yok.
- Bir klasör ve 15 dakika. Yeni bir şey öğrenmiyorsun, hizmetini ve nişini dosyaya döküyorsun.
- Meta Reklam Kütüphanesi'ni açacak bir tarayıcı. Hesap gerekmez.

## Desteklenen araçlar

Aynı okuma kuralı üç ayrı dosyada tutulur; hangi aracı kullanırsan onu okur. Senin bir şey yapman gerekmez.

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/musteri-bulucu.mdc` |
| Codex, Google Antigravity, Windsurf, Kilo ve 20+ araç | `AGENTS.md` (evrensel açık standart) |

## Kurulum

Üç yol var, en kolayı üçüncüsü.

**1. Tek komut (degit).** Klasörü olduğu gibi indirir:

```bash
npx degit muhammedsevimli/sistemler/musteri-bulucu musteri-bulucu
```

**2. Klonla ya da ZIP indir.** Yeşil **Code → Download ZIP** ile indir, ya da:

```bash
git clone https://github.com/muhammedsevimli/sistemler.git
```

**3. Klasörü AI aracına ver, "kur" de.** En kolayı. Bu klasörü Claude Code / Cursor / Codex'e aç, "bu müşteri bulucuyu benim hizmetim için kur" de. Hizmet ve niş dosyalarını seninle birlikte doldurur.

Sonra sistemin okuduğu dosyalar şunlar. Hizmet ve niş kısmını kendinle doldur:

- `marka/01-hizmet.md`: ne satıyorsun, kime, paketler + gerçek fiyat aralığı, hangi zayıf noktayı çözüyorsun, ne DEĞİLSİN
- `marka/02-ses.md`: ton, hitap, kelimeler, **yasak kelimeler**, örnek cümleler
- `hedef/01-nis.md`: hangi nişte, hangi ülkede aday arıyorsun + arama terimleri (sistem bunlardan link üretir)
- `format/aday-ayristirma.md`: her adayı hangi başlıklara böleceği + sıralama puanı (hazır gelir, istersen ayarla)
- `format/mesaj-format.md`: ilk mesajın yapısı (hazır gelir, istersen ayarla)
- `adaylar/`: kütüphanede gördüğün markaları buraya yapıştırırsın (yapıştırma rehberi klasörün içinde)

Her doldurulacak dosyanın yanında doldurulmuş kurgusal bir örnek var (`marka/ORNEK-01-hizmet.md`, `marka/ORNEK-02-ses.md`, `hedef/ORNEK-01-nis.md`, `adaylar/ORNEK-adaylar.md`). Takılırsan örneğe bak.

`CLAUDE.md`, `AGENTS.md`, `.cursor/rules/` ve `CALISTIR.md` olduğu gibi kalır, değiştirmene gerek yok.

Sonra iki komut. Önce linkleri al:

> nişimin meta reklam kütüphanesi linklerini üret

Linke tıkla, açılan kütüphanede gördüğün markaları `adaylar/<niş>.md` içine yapıştır (nasıl yapıştıracağın `adaylar/OKU-yapistirma-rehberi.md` içinde). Sonra sırala:

> adaylar klasöründeki markaları çözümle, bana sıralı aday listesi ve her adaya özel ilk mesajı yaz

Sistem adayları ayrıştırır, puanlar, sıralar ve mesajları yazar. Tam komutlar için `CALISTIR.md` dosyasına bak.

## Gerçekten çalışıyor mu? 30 saniyede test et

- **Bütçe sinyali:** aylardır reklam vereni "bütçesi var" işaretledi mi, iki haftalık markayı test aşaması saydı mı. Ayırdıysa geçti.
- **Kişiye özel:** her mesajda o markanın reklamından gelen SOMUT bir detay var mı, yoksa "reklamlarınızı gördüm" mü diyor. Somut detay varsa geçti.
- **Dürüstlük:** senin işin olmayan bir adayı yukarı çekti mi, yoksa "bu nişin dışında, yazma" dedi mi. Dürüstçe elediyse geçti.
- **Ses:** yasak kelimelerinden birini ya da toplu gönderim dilini kullandı mı. Kullanmadıysa geçti.
- **Uydurmama:** sende olmayan bir referans ya da sayı icat etti mi, yoksa placeholder mu bıraktı. Placeholder bıraktıysa geçti.
- **Tek soru:** mesaj tek net soruyla mı bitiyor, yoksa seçenek yığınıyla mı. Tek soruysa geçti.

## Niş listesi büyür · sistem seninle keskinleşsin

Yeni bir arama terimi ya da niş fark edince `hedef/01-nis.md` dosyasına ekle. Kitlenin gerçekten kullandığı kelimeyi yaz, kurumsal tanımı değil; tek terim tek liste demektir. Bir mesaj gerçekten cevap aldığında "bu cevap aldı" de. Sistem onu `hedef/01-nis.md` en altına tarih atarak yazar (hangi zayıf nokta, hangi cümle tuttu), sonraki üretimler oradan da beslenir.

## Örnek çıktı

`ORNEK-CIKTI.md` içinde, kurgusal bir hizmet (e-ticaret markalarına reklam yaratıcısı üreten biri) için sistemin gerçekten ürettiği tam tur var: 6 adayın ayrıştırma tablosu, puan kırılımıyla sıralı liste ve dört adaya özel ilk mesaj. İki aday için mesaj yok, nedeni de yazılı. Girdi olarak yalnızca kurgusal 6 markanın reklamları verilmişti. (Örnekler tamamen kurgusaldır; gerçek marka, kişi ya da sayı yoktur.)

## Kimin için

Müşteri arayan herkes: freelancer'lar, ajanslar, danışmanlar, küçük stüdyolar, yeni başlayan hizmet verenler. Reklam veren markalara hizmet satan biriysen (yaratıcı, metin, tasarım, video, reklam yönetimi, e-ticaret operasyonu) doğrudan işine yarar. Kod bilmene gerek yok; sistem listeyi ve mesajı verir, göndermeyi sen yaparsın.

Bu bir toplu mesaj aracı değil. Otomatik gönderim yok, liste satın alma yok, kopyala-yapıştır şablon yok. Sistem az sayıda adaya, okunacak kalitede mesaj yazman için var.

---

**Muhammed Sevimli** tarafından kuruldu. AI ile gerçek satış ve büyüme sistemleri kuruyorum ve Türkçe anlatıyorum. Sistemleri ve arkasındaki mantığı [YouTube](https://youtube.com/@msevimli)'ta gösteriyorum, günlük notları [X](https://x.com/_msevimli)'te paylaşıyorum. Kurarken takılırsan ya da birebir destek istersen [e-posta](mailto:hey@muhammedsevimli.com) at.

Web: [muhammedsevimli.com](https://muhammedsevimli.com) · Instagram: [@msevimli_](https://instagram.com/msevimli_) · Threads: [@msevimli_](https://threads.net/@msevimli_)

Katkı memnuniyetle. Bir sistemi geliştirdin ya da yeni bir fikrin mi var? Bir PR aç. Takıldığın yer ya da sorun mu var? Bir issue aç, yardımcı olurum.

## Lisans

MIT · bu sistemleri istediğin gibi kullan.
