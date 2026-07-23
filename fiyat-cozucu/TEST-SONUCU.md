# TEST SONUCU · Fiyat Çözücü · 2026-07-26

> Sistem bu makinede gerçekten kuruldu ve uçtan uca çalıştırıldı. Aşağıdaki her testin ham kanıtı dosya yolu, grep sayısı ya da gerçekten çekilmiş veri olarak yazılıdır.
> Test operatörü **kurgusaldır** (Meydan Randevu). Rakipler ve fiyatlar **gerçektir**, herkese açık fiyat sayfalarından çekilmiştir.

**Sonuç: 10 test / 10 geçti. 0 test edilemedi.**

---

## Test 1 · Otomatik fiyat sayfası çekimi (gerçek veri, kaynak URL'li) · GEÇTİ
Sistemin FAZ 1 talimatları, teslim edilen sistemin kullanıcının makinesinde çağıracağı araçların aynısıyla (WebFetch, WebSearch) gerçekten koşuldu.

Gerçekten çekilen rakamlar (özet, tamamı `veri/cekilen-2026-07-26.md`):
- **Calendly** (calendly.com/pricing): Free $0 · Standard $10/koltuk/ay (yıllık) · Teams $16/koltuk/ay (yıllık) · Enterprise "$15k/yıl'dan başlar"
- **Setmore** (setmore.com/pricing): Free $0 (4 kullanıcı, ayda 200 randevu) · Pro $5/kullanıcı/ay yıllık, $12/kullanıcı/ay aylık · Live Receptionist eklentisi $99/ay
- **SimplyBook.me** (simplybook.me/en/pricing): Free €0 (50 rezervasyon) · Basic €11,90 / €13,90 (100 rezervasyon, 5 sağlayıcı) · Standard €24,90 / €29,90 (500 rezervasyon, 15 sağlayıcı) · Premium €49,90 / €59,90 (2.000 rezervasyon, 30 sağlayıcı)
- **Acuity Scheduling** (acuityscheduling.com/pricing): Starter $16 / $20 (1 takvim) · Standard $27 / $34 (6 takvim) · Premium $49 / $61 (36 takvim) · ücretsiz plan yok
- **BizimHesap** (bizimhesap.com/fiyatlar): Temel Ticaret ₺870/ay + KDV, yıllık ₺10.440 + KDV · Tam Ticaret ₺1.100/ay + KDV, yıllık ₺13.200 + KDV · kontör: 200 → ₺490, 1.000 → ₺1.800, 100.000 → ₺99.000 (hepsi + KDV)
- **Paraşüt** (parasut.com/on-muhasebe-fiyatlari): e-Portal ₺150/ay + KDV (120 hediye kontör) · e-Fatura + Ön Muhasebe ₺940/ay + KDV, yıllık ₺11.280 (300 hediye kontör)

Kanıt: `veri/cekilen-2026-07-26.md` içinde 9 adet `https://` kaynak satırı.

**Yan bulgu (URL kurtarma yolu gerçekten çalıştı):** 3 URL HTTP 404 döndü (`squarespace.com/scheduling/pricing`, `parasut.com/fiyatlandirma`, `parasut.com/fiyatlar`). Sistem tasarımı gereği WebSearch ile doğru fiyat sayfasını aradı, buldu ve tekrar çekti. Acuity ve Paraşüt verisi bu yolla geldi. 404'ler dosyada kayıtlı, gizlenmedi.

## Test 2 · Özellik x paket matrisi kuruldu · GEÇTİ
`ciktilar/ORNEK-CIKTI-fiyat-raporu.md` B bölümü. 14 satır özellik x 4 rakip. Hücre değerleri `giriş` / `orta` / `üst` / `yok` / `belirtilmemiş`.
Matristen iki gerçek okuma çıktı:
- **Giriş seviyesinde verilenler:** randevu sayfası (4/4), e-posta hatırlatma (3 kaynakta giriş ya da ilk ücretli), online ödeme alma (3/4).
- **Üst paket tetikleyicileri:** API erişimi (4/4 en üst), marka kaldırma (3 kaynakta üst), çoklu lokasyon (görüldüğü 2 kaynakta üst), SMS hatırlatma (Setmore ve Acuity'de giriş seviyesinin bir üstünde).

## Test 3 · Değer ekseni gerekçeli seçildi · GEÇTİ
Rapor C bölümü. Altı kaynağın kullandığı eksen tek tek yazıldı (koltuk, kullanıcı, rezervasyon hacmi, takvim adedi, özellik paketi + kontör).
Sistem iki soruyu ayrı cevapladı: değer personel sayısıyla büyüyor, maliyet SMS adediyle büyüyor. İkisi farklı olduğu için ana eksen personel bandı, ikinci eksen SMS dahil adedi + aşım seçildi.
Seçilmeyen 5 eksenin her biri için tek satır gerekçe yazıldı. Örnek gerekçe (hacim ekseni): işletme para biriktirmek için hatırlatma göndermekten kaçınır, ürün değer üretmeyi bırakır.

## Test 4 · Üç paket + bilerek dışarıda bırakılanlar · GEÇTİ
Rapor D bölümü. Tezgah ₺299 + KDV · Salon ₺599 + KDV · Zincir ₺1.099 + KDV.
Her pakette "bu pakette bilerek YOK" listesi ve her maddenin tek satır sebebi var (toplam 11 madde).
Fiyat çarpanları çekilen gerçek veriden türetildi: orta = giriş × 1,7 ile 2,1 (Acuity 27/16 = 1,69 · SimplyBook 24,90/11,90 = 2,09) · üst = orta × 1,8 ile 2,0 (Acuity 49/27 = 1,81 · SimplyBook 49,90/24,90 = 2,00). Uygulanan: 599/299 = 2,00 · 1.099/599 = 1,83. İkisi de gözlenen bandın içinde.
Orta paketin "seçilmesi istenen" olması dört mekanizmayla kuruldu ve yazıldı. Yüzde tahmini verilmedi.

## Test 5 · Anti uydurma · fiyatı gizli rakip için rakam ÜRETİLMEDİ · GEÇTİ
- **Zenoti** (zenoti.com/pricing): sayfa açıldı, içerik geldi, hiçbir para biriminde rakam yok, ziyaretçi teklif ve demo adımına yönlendiriliyor. Sistem `fiyat açık değil` yazdı, tahmin üretmedi, hiçbir ortalamaya katmadı.
- **Fresha** (fresha.com/for-business/pricing): sayfa çekildi, dönen içerikte ücret ya da komisyon bilgisi yok. Sistem "komisyon alıyordur" demedi, `kaynak yok` yazdı, ortalamaya katmadı.
- **Paket bazında gizli fiyatlar:** Setmore Enterprise, SimplyBook Enterprise, Acuity Enterprise ve Calendly'nin alt sınır veren Enterprise satırı da bant hesabına alınmadı.
- **Calendly aylık rakamları:** sayfa "aylık daha pahalı" diyor ama rakam vermiyor. `sayfada belirtilmemiş` işaretlendi, tahmin edilmedi.

Kanıt: `veri/cekilen-2026-07-26.md` içinde 11 satır `fiyat açık değil` / `kaynak yok` işareti. Raporda 4 ayrı yerde "ortalamaya katılmadı / girmedi" ifadesi.

## Test 6 · Gelir ve dönüşüm projeksiyonu YOK (grep teyitli) · GEÇTİ
Komut:
```text
grep -rniE "gelir projeksiyon|ciro tahmin|dönüşüm oranı .* (olur|beklen)|şu kadar satarsın|aylık gelirin .* olur|müşterilerin %[0-9]" system/
```
Sonuç: **8 eşleşme, hepsi kural dosyalarında** (`CLAUDE.md`, `AGENTS.md`, `CALISTIR.md`, `format/kurallar.md`, `README.md`), yani bu cümleleri YASAKLAYAN satırlarda.
Üretilen raporda:
```text
grep -cniE "satarsın|dönüşüm oran|projeksiyon|ciro|MRR|müşterilerin %" ciktilar/ORNEK-CIKTI-fiyat-raporu.md
```
Sonuç: **0**.

## Test 7 · Kur uydurma yasağı · GEÇTİ
Elde üç para birimi vardı (USD, EUR, TRY). Sistem hiçbirini diğerine çevirmedi.
- USD bandı ayrı hesaplandı (ilk ücretli paket: $5 · $10 · $16).
- EUR tek gözlem olduğu için bant kurulmadı, tek veri olarak yazıldı.
- TL önerisi YALNIZ iki yerel TL kaynağının bandına (₺150 tek işlevli · ₺870 ile ₺1.100 tam kapsamlı) dayandırıldı. Yurt dışı rakiplerden yalnız yapı (kademe sayısı, çarpan, hangi özellik hangi seviyede) okundu.
- Raporun G bölümünde bu sınır açıkça yazıldı: "USD ve EUR rakamlarından TL rakamı türetilmedi."

## Test 8 · Türkiye uyarlaması KARAR olarak değil SEÇENEK olarak sunuldu · GEÇTİ
Rapor E bölümü, 5 başlık: para birimi · kur eşiği · KDV gösterimi · yıllık faturalama ve ödeme yolu · yurt dışı ikili fiyat.
`Seçenek A` ifadesi 3 yerde, her birinde `Seçenek B` ve "hangi durumda hangisi" satırı var. Kur eşiği maddesinde sistem oran uydurmadı, ölçülecek sayıyı tarif etti ve eşiği operatöre bıraktı.
KDV önerisinin dayanağı gerçek veri: iki yerel kaynağın ikisi de fiyatı `+ KDV` gösteriyor.
Ödeme alışkanlığı maddesine dürüstlük notu düşüldü: "bu madde çekilen fiyat sayfalarından gelmiyor, ölçülmüş veri değil."

## Test 9 · Em dash 0 (grep teyitli) · GEÇTİ
Kontrol: `system/` ağacındaki tüm dosyalarda U+2014 (uzun tire) karakteri `grep -rc` ile arandı. Sıfırdan farklı sayı dönen dosya sayısı: **0**.
Rapor dosyası ayrıca tek tek kontrol edildi: **0**.

## Test 10 · Write back diskte · GEÇTİ
Sistem çıktısını gerçekten dosyaya yazdı, ekrana basıp bırakmadı.
- `veri/cekilen-2026-07-26.md` (çekilen ham fiyatlar, kaynak URL'li)
- `ciktilar/ORNEK-CIKTI-fiyat-raporu.md` (matris + eksen + üç paket + TR uyarlaması + zam protokolü + bilmedikleri)
Sistemde toplam **11 dosya** var: `CLAUDE.md`, `AGENTS.md`, `CALISTIR.md`, `README.md`, `TEST-SONUCU.md`, `sen/01-urun.md`, `sen/02-rakipler.md`, `format/kurallar.md`, `format/rapor-format.md`, `veri/OKU-nasil-doluyor.md`, `veri/cekilen-2026-07-26.md`, `ciktilar/ORNEK-CIKTI-fiyat-raporu.md`.

---

## Ek kontroller (kapsam ve kapı testleri)

**"Ne değilsin" koruması · GEÇTİ.** `sen/01-urun.md` yapmıyorum listesi: muhasebe, fatura, stok, ödeme kuruluşu olma, yerinde kurulum, donanım, çağrı merkezi. Üretilen üç paketin hiçbirinde bu kalemler yok. Zincir paketinin "bilerek YOK" listesinde bu maddeler açıkça gerekçelendirildi (`sen/01-urun.md` yapmıyorum listesine referansla). Grep kontrolü: paket içeriklerinde yasak hizmet 0 eşleşme.

**Marjinal maliyet koruması · GEÇTİ.** Hiçbir pakette "sınırsız SMS" verilmedi. Üç pakette de dahil adet var (250 / 1.000 / 2.500) ve "sınırsız SMS" iki pakette açıkça "bilerek YOK" listesinde.

**Eksik veri kapısı · GEÇTİ.** `sen/01-urun.md` SMS'in maliyet olduğunu yazıyor ama **birim maliyet rakamı vermiyor**. Sistem aşım fiyatını uydurmadı. Raporun taban kontrolü bölümünde "değişken maliyet kontrolü YAPILAMADI, birim maliyet rakamı verilmemiş" yazdı ve kuralı verdi (aşım fiyatı ≥ birim maliyet × 2), rakamı operatöre bıraktı.

**Çelişkiyi yorumla doldurmama · GEÇTİ.** BizimHesap sayfasında yıllık toplam listelenen aylığın tam 12 katı olmasına rağmen sayfa tasarruf iddia ediyor. Sistem bunu `çelişki notu` olarak yazdı, aritmetiği gösterdi (10.440 + 4.560 = 15.000 → ayda ₺1.250) ve sonucu `çıkarım (kesin değil)` diye etiketledi. Kesin bilgi gibi sunmadı.
Aynı disiplin Paraşüt'te de uygulandı: arama sonucunda geçen "₺6.120 tasarruf" ifadesi fiyat sayfasında doğrulanmadığı için veri olarak kullanılmadı.

**Riskli sapma bildirimi · GEÇTİ.** Sistem sektör normundan bilinçli ayrıldığı 3 yeri işaretledi (kaporayı giriş paketinden çıkarma, ücretsiz plan koymama, üst paketi yerel tavana yaklaştırma) ve her biri için itiraz gelirse geri dönüş planı yazdı.

**Hukuki sınır · GEÇTİ.** Abonelik fiyat değişikliği bildirimi ve yurt dışı faturalama maddelerine "bu madde hukuki teyit ister" notu düşüldü, hukuki tavsiye verilmedi.

---

## Test edilemeyenler
Yok. Bu turda `[test edilemedi]` işaretlenen madde bulunmuyor.

## Bilinen sınırlar (dürüstlük)
1. **Sistem talep ölçmüyor.** Rakip yapısını ve operatör maliyetini okuyor. Fiyatın doğruluğu ancak gerçek satış konuşmalarında test edilir. Bu sınır hem `CLAUDE.md` kurallarında hem raporun G bölümünde yazılı.
2. **Yerel örneklem küçük.** TL bandı iki yerel kaynağa dayanıyor. Kullanıcı kendi sektöründen üç dört yerel kaynak daha eklerse bant sağlamlaşır. Rapor bunu G bölümünde söylüyor.
3. **Fiyat sayfaları tarih damgalı.** 2026-07-26'da çekildi, rakipler fiyatını değiştirebilir. Sistem ayda bir yeniden çalıştırılmak üzere tasarlandı ve eski `veri/` dosyalarını silmiyor.
4. **Bazı sayfalar bot erişimine kapalı olabilir.** Bu turda 3 URL 404 döndü ve WebSearch ile kurtarıldı. Farklı bir ortamda başka bir sayfa erişilemeyebilir; sistem o durumda `kaynak yok` yazacak şekilde kurulu, uydurmuyor.
