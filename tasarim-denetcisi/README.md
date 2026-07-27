# Tasarım Denetçisi

Kurduğun sayfanın neden ucuz göründüğünü söyleyen sistem. Sayfanın ekran görüntüsünü veriyorsun; sistem sekiz başlıkta tek tek ölçüyor, hangisinin neden amatör durduğunu rakamıyla yazıyor ve düzeltmeyi olduğu gibi yapıştırabileceğin tek bir talimat bloğuna çeviriyor.

**Kod dosyası vermiyorsun.** Sayfayı Claude Code ile de kurmuş olabilirsin, Lovable ile de, Framer ile de, Canva ile de. Ekran görüntüsü hepsinde var.

## Ne işe yarıyor

Yapay zekayla bir sayfa kuruyorsun. Çalışıyor, içerik de doğru. Ama ekrana bakınca bir şey tutmuyor. Neyin yanlış olduğunu söyleyemiyorsun, sadece ucuz göründüğünü görüyorsun. Tasarımcı değilsin, ne soracağını da bilmiyorsun. Sonuçta kurduğun şeyi kimseye göstermiyorsun.

Sistem sekiz başlıkta ölçüyor:

1. Yazı hiyerarşisi
2. Satır uzunluğu ve satır aralığı
3. Boşluk ritmi
4. Renk ve kontrast
5. Gölge, kenarlık ve köşe yarıçapı
6. Buton ve tıklanabilir öğeler
7. Hizalama ve ızgara
8. Görsel ve ikon tutarlılığı

Her bulguya üç satır yazıyor: **şu an ne** (ölçülen değer), **olması gereken ne** (kabul aralığı), **neden** (bu fark okuyucuda ne yapıyor). Sonunda tek bir düzeltme talimatı bloğu çıkıyor, her madde somut değerle yazılı.

**Sistemin yapmadığı şey:** sayfanı yeniden tasarlamıyor. Metnini, bölüm sıranı, konseptini değiştirmeyi önermiyor. Marka rengini ve yazı tipini değiştirmiyor. Ekran görüntüsünde görünmeyen şeyi denetlemiyor ve uydurmuyor, "ölçülemedi" diye ayrı bölüme yazıyor.

## Kurulum

```bash
npx degit muhammedsevimli/sistemler/tasarim-denetcisi tasarim-denetcisi
```

Ya da yeşil **Code → Download ZIP** ile indir, `tasarim-denetcisi` klasörünü al.

Komut satırıyla uğraşmak istemiyorsan: Claude Code'u (ya da Codex'i) aç ve şu adresi ver, "bunu benim için kur" de.

```text
github.com/muhammedsevimli/sistemler/tree/main/tasarim-denetcisi
```

## Çalıştırma

Üç adım:

1. Sayfanın ekran görüntüsünü al ve `ekranlar/` klasörüne at. Tek bir PNG yetiyor. Nasıl tam sayfa alınır: `ekranlar/OKU-nasil-koyulur.md`.
2. İstersen `sen/01-marka.md` dosyasına marka renklerini ve yazı tiplerini yaz. Boş bırakırsan da çalışır.
3. Claude Code'u bu klasörde aç ve `denetle` yaz.

Rapor `ciktilar/` klasörüne düşer. Ayrıntı: `CALISTIR.md`.

Raporun sonundaki **Bölüm D · Düzeltme talimatı** bloğunu kopyalayıp sayfayı hangi araçla kurduysan ona yapıştırıyorsun.

## Gerçekten çalışıyor mu

Evet, kanıtıyla. `TEST-SONUCU.md` dosyasında tamamı var. Özet:

Kasten kötü kurulmuş bir açılış sayfası hazırlandı, sisteme yalnız ekran görüntüsü verildi. Kod dosyası verilmedi, adres verilmedi.

**Sistemin görüntüden yaptığı tahminler ne kadar doğru çıktı:** denetim bittikten sonra sayfanın gerçek değerleri tarayıcıdan çekilip karşılaştırıldı. On ölçümün onu tuttu. On iki ayrı yazı boyutu, yedi ayrı köşe yarıçapı, dört ayrı gölge, 116 ve 153 karakterlik satırlar, 2,32:1 ve 2,85:1 kontrast oranları, 33 piksellik butonlar.

**Düzeltme talimatı uygulanınca ne oldu:** on iki ölçütün on ikisi kabul aralığına girdi.

| Ölçüt | Önce | Sonra |
|---|---|---|
| Ayrı yazı boyutu | 12 | 5 |
| Ayrı köşe yarıçapı | 7 | 2 |
| Ayrı gölge | 4 | 1 |
| Gövde satır genişliği | 1226px | 578px |
| İkincil metin kontrastı | 2,32:1 | 7,7:1 |
| Buton yüksekliği | 33px | 52px |
| Yer tutucu kalıntısı | 2 | 0 |

Önce ve sonra kareleri: `kanit/01-once-masaustu.png`, `kanit/02-sonra-masaustu.png`. Örnek denetim raporunun tamamı: `ORNEK-CIKTI.md`.

Test sayfası kurgusaldır, gerçek bir marka değildir.

## Klasör yapısı

```text
tasarim-denetcisi/
  CLAUDE.md                      Claude Code otomatik okur
  AGENTS.md                      Codex, Windsurf, Kilo ve 20+ araç otomatik okur
  .cursor/rules/                 Cursor otomatik okur
  CALISTIR.md                    üç adımlık kullanım
  format/olcutler.md             sekiz başlık, ölçüm yöntemi, kabul aralıkları
  format/rapor-format.md         rapor iskeleti
  sen/01-marka.md                marka ve sınırlar (opsiyonel)
  ekranlar/                      ekran görüntülerini buraya koyuyorsun
  ciktilar/                      raporlar buraya düşüyor
  kanit/                         test kanıtı: önce ve sonra kareleri
  ORNEK-CIKTI.md                 gerçek bir denetim raporu
  TEST-SONUCU.md                 uçtan uca test kaydı
```

## Ölçütler nereden geliyor

Rakamlar keyfi değil. Satır uzunluğu aralığı (45-75 karakter) yerleşik okunabilirlik pratiğinden, kontrast eşiği (4,5:1) WCAG 2.1 AA'dan, dokunma hedefi (44px) mobil arayüz kılavuzlarının ortak alt sınırından geliyor. Boşluk ölçeği (4/8 taban) ve gölge kuralları yaygın tasarım sistemi pratiği. Hepsi `format/olcutler.md` içinde gerekçesiyle yazılı.

## Desteklenen araçlar

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/` |
| Codex, Google Antigravity, Windsurf, Kilo ve 20+ araç | `AGENTS.md` |

Ekran görüntüsünü okuyabilen her araçta çalışır.

---

Bu sistemi **Muhammed Sevimli** kurdu. AI ile gerçek satış ve büyüme sistemleri. Kurarken takılırsan ya da adım adım anlatımlı rehber istersen yaz:

- Web: https://muhammedsevimli.com
- X: https://x.com/_msevimli
- Instagram: https://instagram.com/msevimli_
- YouTube: https://youtube.com/@msevimli
- E-posta: hey@muhammedsevimli.com
