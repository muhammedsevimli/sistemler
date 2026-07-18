# Google Ads Denetçisi · Boşa Giden Reklam Parası 🔍

Google Ads raporunu bir kere dışa aktar, sistem hangi aramaların para yiyip işine dönüşmediğini kendi verinden bulsun. Boşa giden toplam tutarı satır satır hesaplasın, eksik negatif kelimeleri çıkarsın, bütçeyi yanlış dağıtan kampanyayı işaretlesin ve sana "bu hafta düzelt" listesi versin. Claude Code, Cursor, Codex ve `AGENTS.md` okuyan her araçta çalışan, kod gerektirmeyen bir Google Ads denetçisi.

Her ay hesaba girip "param nereye gidiyor" diye tek tek arama terimi elemekten kurtaran bir sistem. Raporu bir kere yapıştırıyorsun; sistem işine uygun aramayı boşa gidenden ayırıyor, boşa giden tutarı verideki maliyet kolonundan topluyor ve öncelik sırasıyla ne yapman gerektiğini söylüyor. Boş bir tahminle değil, kendi rakamınla başlıyorsun.

## Ne işe yarıyor

Google Ads'te para en çok "işine uygun olmayan aramaya tıklama" olarak sızar: birisi "nasıl temizlenir" arar, reklamına tıklar, sen ödersin, o kişi hiçbir zaman satın almaz. Bu sistem o sızıntıyı senin raporundan bulup rakamıyla önüne koyar. İki raporu okur:

1. **Arama terimleri raporu** (asıl kaynak): reklamlarını gerçekte hangi aramaların tetiklediği, her aramanın kaç tıklama, ne kadar maliyet, kaç dönüşüm getirdiği. Boşa giden para burada saklıdır.
2. **Kampanyalar raporu** (varsa): kampanya bazında maliyet, dönüşüm, dönüşüm değeri, ROAS. Bütçenin nereye yanlış dağıldığını gösterir.

Sonra beş denetim yapar: boşa giden harcama, eksik negatif kelimeler, hatalı eşleşme türü, bütçe yanlış dağılımı, düşük CTR / yüksek maliyet sinyalleri. Çıktı: boşa giden toplam tutar (senin verinden hesaplanır, uydurulmaz) + öncelikli düzeltme listesi + tahmini tasarruf.

Dürüst sınır: bu sistem hesabına bağlanmaz. Google Ads'in resmi API'si var ama geliştirici jetonu ve OAuth kurulumu ister, teknik bir iştir. Bu yüzden ana yol: raporu panelden dışa aktar, `veri/` klasörüne yapıştır. Okuma, hesaplama ve düzeltme listesi tamamen otomatiktir; değişiklikleri hesapta sen yaparsın. Sistem ne yapacağını söyler, hesaba dokunmaz.

## Gerekli

- **Claude Code, Cursor, Codex** ya da `AGENTS.md` okuyan başka bir AI aracı. Terminal kullanmana gerek yok.
- Bir klasör ve 15 dakika. Yeni bir şey öğrenmiyorsun, hesabını dosyaya döküp raporu yapıştırıyorsun.
- Google Ads hesabına erişim (raporu dışa aktarmak için). Dönüşüm izlemen kuruluysa denetim daha isabetli olur.

## Desteklenen araçlar

Aynı okuma kuralı üç ayrı dosyada tutulur; hangi aracı kullanırsan onu okur. Senin bir şey yapman gerekmez.

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/google-ads-denetci.mdc` |
| Codex, Google Antigravity, Windsurf, Kilo ve 20+ araç | `AGENTS.md` (evrensel açık standart) |

## Kurulum

Üç yol var, en kolayı üçüncüsü.

**1. Tek komut (degit).** Klasörü olduğu gibi indirir:

```bash
npx degit muhammedsevimli/sistemler/google-ads-denetci google-ads-denetci
```

**2. Klonla ya da ZIP indir.** Yeşil **Code → Download ZIP** ile indir, ya da:

```bash
git clone https://github.com/muhammedsevimli/sistemler.git
```

**3. Klasörü AI aracına ver, "kur" de.** En kolayı. Bu klasörü Claude Code / Cursor / Codex'e aç, "bu Google Ads denetçisini benim hesabım için kur" de. Hesap dosyasını seninle birlikte doldurur.

Sonra sistemin okuduğu dosyalar şunlar. Hesap kısmını kendinle doldur:

- `hesap/01-hesap.md`: ne satıyorsun, kime, hedef ROAS/CPA, ne DEĞİLSİN (hangi aramalar boşa)
- `format/denetim-anatomisi.md`: beş denetim ve boşa giden tutarı hesaplama kuralı (hazır gelir)
- `format/cikti-format.md`: denetim raporunun yapısı (hazır gelir)
- `veri/`: Google Ads raporlarını buraya yapıştırırsın (dışa aktarma rehberi klasörün içinde)

`CLAUDE.md`, `AGENTS.md`, `.cursor/rules/` ve `CALISTIR.md` olduğu gibi kalır, değiştirmene gerek yok.

Sonra tek komut. Önce raporu hazırla (nasıl: `veri/OKU-veri-cikarma-rehberi.md`), sonra denetle:

> google ads hesabımı denetle. boşa giden reklam paramı bul ve öncelikli düzeltme listesi çıkar

Sistem her arama terimini sınıflandırır, boşa giden tutarı satır maliyetlerini toplayarak hesaplar, düzeltme listesini çıkarır. Tam komut için `CALISTIR.md` dosyasına bak.

## Gerçekten çalışıyor mu? 30 saniyede test et

- **Rakam:** boşa giden tutarı hangi satırların maliyetini toplayarak bulduğunu gösterdi mi. Gösterdiyse geçti.
- **Ayrım:** işine uygun ama dönüşmemiş terimi "izle" kovasına mı koydu, yoksa hepsini boşa giden mi saydı. Ayırdıysa geçti.
- **Uydurma:** veride olmayan bir çarpan ("2 katına çıkar", "cironu artırır") kullandı mı, yoksa sadece veriden mi konuştu. Sadece veriden konuştuysa geçti.
- **Öneri kipi:** "şu kampanyayı durdurdum" mu dedi, yoksa "şunu kıs, şu negatifi ekle" mi. Öneri kipinde kaldıysa geçti.

## Hesabın büyür · sistem seninle keskinleşsin

Bir düzeltmeyi uyguladığında (negatif ekledin, kampanya kıstın) sisteme "şunu yaptım" de. Sistem onu `hesap/01-hesap.md` en altındaki "uygulanan düzeltmeler" bölümüne tarih atarak yazar. Bir sonraki ay yeni raporu denetlerken bunu okur: aynı sızıntıyı iki kez önermez, düzeltmenin işe yarayıp yaramadığını karşılaştırır. Hesabın hafızası birikir.

## Örnek çıktı

`ORNEK-CIKTI.md` içinde, kurgusal bir işletme ("Meşe El Yapımı Ahşap") için sistemin gerçekten ürettiği tam denetim var: özet kutu, boşa giden satırların dökümü, öncelikli düzeltme listesi ve izle kovası. Girdi olarak yalnızca kurgusal bir arama terimleri ve kampanyalar raporu verilmişti. (Örnekler tamamen kurgusaldır; gerçek marka, hesap, müşteri ya da sayı yoktur.)

## Kimin için

Google Ads'te para harcayan herkes: e-ticaret markaları, hizmet veren işletmeler, performans pazarlamacıları, ajanslar, kurucular, küçük ekipler, esnaf. Hesabını kendi yöneten ama "param nereye gidiyor" sorusuna net bir cevap isteyen. Teknik bilgi ya da kod gerekmez; sistem raporunu okur, rakamı hesaplar ve ne yapacağını söyler, değişikliği sen uygularsın.

---

**Muhammed Sevimli** tarafından kuruldu. AI ile gerçek satış ve büyüme sistemleri kuruyorum ve Türkçe anlatıyorum. Sistemleri ve arkasındaki mantığı [YouTube](https://youtube.com/@msevimli)'ta gösteriyorum, günlük notları [X](https://x.com/_msevimli)'te paylaşıyorum. Kurarken takılırsan ya da birebir destek istersen [e-posta](mailto:hey@muhammedsevimli.com) at.

Web: [muhammedsevimli.com](https://muhammedsevimli.com) · Instagram: [@msevimli_](https://instagram.com/msevimli_) · Threads: [@msevimli_](https://threads.net/@msevimli_)

Katkı memnuniyetle. Bir sistemi geliştirdin ya da yeni bir fikrin mi var? Bir PR aç. Takıldığın yer ya da sorun mu var? Bir issue aç, yardımcı olurum.

## Lisans

MIT · bu sistemleri istediğin gibi kullan.
