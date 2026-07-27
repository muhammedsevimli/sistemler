# Satış CRM 🧩

Satış ve çağrı merkezi ekipleri için basit bir müşteri takip sistemi. Tek dosya, çift tıkla açılır, sunucu ve üyelik istemez. Her müşteri tek kartta durur, temsilci iki satır not düşer, sistem takip gününü kendi koyar, o gün aranacaklar sabah listeye düşer.

Çağrı merkezinde ve satışta her müşteri ayrı yerde durur: biri excel'de, biri whatsapp'ta, biri temsilcinin aklında. Sonra kim aranacaktı, kime söz verilmişti, hangi görüşme nerede kaldı, hepsi kaybolur. Bu sistem hepsini tek panoya toplar.

## Ne işe yarıyor

- Her müşteri tek kartta: kim, hangi aşamada, en son ne konuşuldu, bir sonraki adım ne.
- Görüşme biter bitmez temsilci iki satır not düşer, sistem tarihi ve takip gününü kendi koyar.
- O gün aranacaklar sabah otomatik listeye düşer, gecikmişler en üstte, kimse unutulmaz.
- Ay sonunda hangi temsilcinin kaç görüşmede kaç satış çıkardığı tek ekranda belli olur.

Temsilci excel'le boğuşmaz, müdür "bugün kim ne yaptı" diye tek tek sormaz, ekranda görür.

## Gerekli

- Bir bilgisayar ve bir tarayıcı (Chrome, Edge, Firefox fark etmez). İnternet, üyelik, sunucu gerekmez.
- `satis-crm.html` ve `crm-cekirdek.js` (bu pakette). İki dosya aynı klasörde yan yana durur.

## Kurulum (yerel mod, varsayılan)

Üç yol var, en kolayı üçüncüsü.

**1. Tek komut (degit).** Klasörü olduğu gibi indirir:

```bash
npx degit muhammedsevimli/sistemler/satis-crm satis-crm
```

**2. Klonla ya da ZIP indir.** Yeşil **Code → Download ZIP** ile indir, ya da:

```bash
git clone https://github.com/muhammedsevimli/sistemler.git
```

**3. Klasörü AI aracına ver, "aç ve uyarla" de.** En kolayı. Bu klasörü Claude Code ya da Cursor'a aç, "şu iki dosyayı aç" ya da "aşamaları benim satış hattıma göre değiştir" de. Kod yazman gerekmez.

Sonra `satis-crm.html` ile `crm-cekirdek.js`'i **aynı klasöre** koy ve `satis-crm.html`'e **çift tıkla**. Tarayıcında açılır, örnek müşterilerle dolu bir pano gelir. İlk açılışta 6 örnek müşteri ve 3 temsilci ile gelir (gerçek değil, kurgusal). Kendi verine geçmeye hazır olunca **Ayarlar → Örnek veriyi temizle** de, **+ Müşteri** ile kendi listeni gir.

Veri bu bilgisayarın tarayıcısında durur. Sunucuya ya da üçüncü tarafa gitmez.

## Nasıl görünür

Kısa bir tur için `ORNEK-CIKTI.md`'ye bak: sabah listesi, müşteri kartı, görüşme notu ve ay sonu paneli örnek veriyle nasıl görünüyor. (Örnekler tamamen kurgusaldır.)

## Ekip / ortak mod (opsiyonel)

Yerel mod tek bilgisayar içindir. Ekip aynı veriyi görsün istiyorsan, tek seferlik ~10 dakikalık bir kurulumla sistemi ücretsiz bir Google Sheet'e bağlarsın: sunucu kiralamadan, üyeliksiz, sadece kendi Google hesabınla. Adım adım anlatım paketteki **`ORTAK-KURULUM.md`** dosyasında. `kod-google-apps-script.gs` bu mod için.

Bağlandıktan sonra ekipteki herkes aynı linki girer, aynı veriyi görür. Bir temsilci not düşünce diğerlerinde saniyeler içinde görünür. Müdür de aynı panelden herkesi izler.

## Güvenlik

- **Ortak moddaki web app linki şifre gibidir.** Linki olan veriyi görür ve değiştirir. Sadece ekibinle paylaş, herkese açık yerde yazma.
- Ortak modda veri **senin Google Drive'ında**, senin Sheet'inde durur. Üçüncü tarafa gitmez.
- Yerel modda veri sadece o bilgisayarın tarayıcısında durur.
- Daha sıkı güvenlik istersen (linke ek gizli anahtar) Claude Code'a "CRM ortak moduna gizli anahtar ekle" de.

## Kimin için

Satış ekipleri, çağrı merkezleri, küçük işletmeler: müşteri takibi excel ile whatsapp arasında dağılan herkes. Kod bilmene gerek yok.

## Paketteki dosyalar

- `satis-crm.html` · sistemin kendisi, çift tıkla aç.
- `crm-cekirdek.js` · kurallar dosyası, `satis-crm.html` ile aynı klasörde dursun.
- `ornek-veri.json` · kurgusal örnek veri (6 müşteri, 3 temsilci).
- `ORTAK-KURULUM.md` · ekip / ortak mod kurulumu.
- `kod-google-apps-script.gs` · ortak mod için Google Apps Script kodu.

---

**Muhammed Sevimli** tarafından kuruldu. AI ile gerçek satış ve büyüme sistemleri kuruyorum ve Türkçe anlatıyorum. Sistemleri ve arkasındaki mantığı [YouTube](https://youtube.com/@msevimli)'ta gösteriyorum, günlük notları [X](https://x.com/_msevimli)'te paylaşıyorum. Kurarken takılırsan ya da birebir destek istersen [e-posta](mailto:hey@muhammedsevimli.com) at.

Web: [muhammedsevimli.com](https://muhammedsevimli.com) · Instagram: [@msevimli_](https://instagram.com/msevimli_) · Threads: [@msevimli_](https://threads.com/@msevimli_)

Katkı memnuniyetle. Bir sistemi geliştirdin ya da yeni bir fikrin mi var? Bir PR aç. Takıldığın yer ya da sorun mu var? Bir issue aç, yardımcı olurum.

## Lisans

MIT · bu sistemleri istediğin gibi kullan.
