# Denetim · Randevu Defteri anasayfa · 2026-07-27

> Girdi: `ekranlar/anasayfa-masaustu.png` (1280 genişlik, tam sayfa) + `ekranlar/anasayfa-mobil.png` (390 genişlik).
> Sayfa adresi verilmedi, denetim yalnız ekran görüntüsü üzerinden yapıldı. Piksel değerleri yaklaşıktır.
> Marka dosyası boş, bu yüzden renk ve yazı tipi önerileri serbest.

---

## Bölüm A · Envanter

| Ne | Kaç |
|---|---|
| Ayrı yazı boyutu | 12 (yaklaşık 13px ile 27px arası) |
| Ayrı yazı kalınlığı | 2 (normal, kalın) |
| Ayrı renk (nötrler hariç) | 3 doygun renk (mavi, turuncu, yeşil) |
| Buton | 5 dolu birincil görünümlü, 0 ikincil |
| Bölüm | 6 (üst menü, kahraman, özellikler, hakkında, fiyatlar, alt bilgi) |
| İkon | 4, hepsi emoji |
| Görsel | 0 gerçek görsel, 1 yer tutucu kutu |

Denetlenen görüntüler: masaüstü tam sayfa, mobil tam sayfa. Adres verilmediği için tarayıcı doğrulaması yapılmadı.

---

## Bölüm B · Sekiz başlık ölçüm tablosu

| # | Başlık | Şu an ne | Olması gereken | Önem |
|---|---|---|---|---|
| 1 | Yazı hiyerarşisi | 12 ayrı yazı boyutu. Aralarında 1px farkla ayrılan basamaklar var (13/14/15/16/17/18/19/20/21) | 3-5 boyut, basamaklar arası gözle görülür fark | YÜKSEK |
| 2 | Satır uzunluğu ve satır aralığı | Kahraman paragrafı yaklaşık 120 karakter, hakkında paragrafı yaklaşık 150 karakter. Gövde satır aralığı 1,35 kat | 45-75 karakter, gövde aralığı 1,5-1,7 kat | YÜKSEK |
| 3 | Boşluk ritmi | Ölçülen boşluklar 7, 9, 11, 13, 17, 19, 23, 27, 33, 41. Ortak çarpan yok | Hepsi 4 ya da 8 tabanının katı | ORTA |
| 4 | Renk ve kontrast | Gövde metni saf siyah. Açıklama metinleri gri, kontrast yaklaşık 2,3:1 ve 2,9:1. Üç doygun renk yan yana | Kontrast en az 4,5:1. Saf siyah yok. Tek vurgu rengi | YÜKSEK |
| 5 | Gölge, kenarlık, köşe yarıçapı | 4 ayrı gölge, hepsi koyu ve yayvan. Kartlarda kenarlık ve gölge birlikte. 7 ayrı köşe yarıçapı (3, 4, 5, 7, 9, 12, 14) | En fazla 2 gölge, kenarlık ya da gölge, tek yarıçap | YÜKSEK |
| 6 | Buton ve tıklanabilir öğeler | Kahraman bölümünde 3 dolu buton yan yana, üçü farklı renkte. Buton yüksekliği yaklaşık 36px ve 33px. İç boşluk yatay ve dikeyde eşit | Tek birincil buton. En az 44px yükseklik. Yatay iç boşluk dikeyin 2 katı | YÜKSEK |
| 7 | Hizalama ve ızgara | İçerik 1280px ekranda kenardan kenara uzanıyor, kapsayıcı sınırı yok. "Neden Randevu Defteri" başlığı sola dayalı, altındaki 150 karakterlik paragraf ortalanmış. Kartlar ve fiyat kutuları eşit yükseklikte değil | Tek sol kenar, kapsayıcı sınırı, uzun paragraf ortalanmaz, eşit yükseklik | YÜKSEK |
| 8 | Görsel ve ikon tutarlılığı | 4 ikonun dördü de emoji. Kahraman bölümünde gri yer tutucu kutu ("Buraya ürün ekran görüntüsü gelecek"). Hakkında paragrafı "Lorem ipsum dolor sit amet." ile bitiyor | İkon seti, yer tutucu kalıntısı yok | YÜKSEK |

---

## Bölüm C · Bulgular, önem sırasına dizili

### C1 · [YÜKSEK] Sayfada iki yer tutucu kalıntısı duruyor
- **Şu an:** Kahraman bölümünde 1226x190 piksel gri kutu, içinde "Buraya ürün ekran görüntüsü gelecek" yazıyor. Hakkında paragrafının son cümlesi "Lorem ipsum dolor sit amet."
- **Olması gereken:** Yer tutucu kalıntısı sıfır (ölçüt 8).
- **Neden:** Ziyaretçi sayfanın bitmediğini görür ve ürünün de bitmediğini varsayar. Bu sayfadaki tek en pahalı hata budur, diğer yedi başlık düzelse bile bu duruyorsa sayfa amatör kalır.

### C2 · [YÜKSEK] Kahraman bölümünde üç birincil buton yan yana
- **Şu an:** "Hemen Başla" (mavi), "Demo İzle" (turuncu), "Fiyatları Gör" (yeşil). Üçü de dolu, üçü de farklı renkte, üçü de aynı görsel ağırlıkta. Üst menüde dördüncü bir dolu buton daha var.
- **Olması gereken:** Tek birincil buton, diğerleri çerçeveli ya da düz metin bağlantı (ölçüt 6).
- **Neden:** Okuyucu hangisinin ana eylem olduğunu bilemez ve seçim yapmak yerine hiçbirine dokunmaz. Bu başlık görünüm kadar dönüşüm meselesidir.

### C3 · [YÜKSEK] Açıklama metinleri okunamayacak kadar açık gri
- **Şu an:** Kahraman paragrafı `#AAAAAA`, beyaz üstünde kontrast yaklaşık **2,3:1**. Kart açıklamaları ve fiyat maddeleri `#999999`, yaklaşık **2,9:1**. Alt bilgi yine 2,3:1.
- **Olması gereken:** En az 4,5:1 (ölçüt 4, WCAG AA).
- **Neden:** Bu metinler gündüz telefonda okunmaz. Sayfanın en çok bilgi taşıyan cümleleri en okunmaz haldeki cümleler.

### C4 · [YÜKSEK] Yazı ölçeği yok, 12 ayrı boyut var
- **Şu an:** 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 27 piksel. Aralarında 1px farkla ayrılan basamaklar var.
- **Olması gereken:** 3-5 boyut, ardışık basamaklar arasında gözle görülür fark (ölçüt 1).
- **Neden:** 16px ile 17px iki ayrı hiyerarşi basamağı değildir, kazadır. Okuyucu neyin daha önemli olduğunu göremez, sayfa düz bir metin yığınına dönüşür.

### C5 · [YÜKSEK] Metin satırları iki kat fazla uzun, satır aralığı dar
- **Şu an:** Kahraman paragrafı yaklaşık 120 karakter, hakkında paragrafı yaklaşık 150 karakter. Metinler 1280px ekranda kenardan kenara uzanıyor, kapsayıcı sınırı yok. Gövde satır aralığı 1,35 kat.
- **Olması gereken:** 45-75 karakter, satır aralığı 1,5-1,7 kat (ölçüt 2).
- **Neden:** Göz satır sonundan satır başına dönerken yerini kaybediyor ve aynı satırı iki kez okuyor. Dar satır aralığı bunu ağırlaştırıyor. Metin okunmaz olmuyor, okunmak istenmiyor.

### C6 · [YÜKSEK] Uzun paragraf ortalanmış, başlığı sola dayalı
- **Şu an:** "Neden Randevu Defteri" başlığı sola dayalı ve 13px içeriden başlıyor. Altındaki 305 karakterlik paragraf ortalanmış.
- **Olması gereken:** Üç satırdan uzun metin ortalanmaz. Başlık ve paragrafı aynı sol kenardan başlar (ölçüt 7).
- **Neden:** Ortalanmış uzun metinde her satırın başlangıcı farklı yerde olur, göz her satırda yeni bir başlangıç arar. Başlığın 13px kayması da başlığı kendi paragrafından koparıyor.

### C7 · [YÜKSEK] Her kutuda kenarlık ve ağır gölge birlikte
- **Şu an:** Özellik kartlarında ve fiyat kutularında `1px` kenarlık ile `0 8px 20px rgba(0,0,0,0.3)` gölge aynı anda. Sayfada 4 ayrı gölge tanımı var, hepsi koyu.
- **Olması gereken:** Kenarlık ya da gölge, ikisi birden değil. En fazla 2 gölge seviyesi, düşük opaklıkta (ölçüt 5).
- **Neden:** İkisi de "bu kutu ayrı bir yüzey" demenin yoludur, ikisi birden söylenince kutu kalınlaşır. Kutudan çıkan varsayılan koyu gölge, şablon hissinin ana kaynağıdır.

### C8 · [ORTA] Butonlar dokunma alanının altında ve iç boşlukları eşit
- **Şu an:** Kahraman butonları yaklaşık 36px, fiyat kutusu butonları yaklaşık 33px yüksekliğinde. İç boşluk yatayda ve dikeyde eşit (9px, 8px).
- **Olması gereken:** En az 44px yükseklik, yatay iç boşluk dikeyin yaklaşık 2 katı (ölçüt 6).
- **Neden:** 33px buton telefonda ıskalanır. Eşit iç boşluk butonu tıknaz gösterir ve elle yazıldığını ele verir.

### C9 · [ORTA] Boşluklar bir ölçeğe oturmuyor
- **Şu an:** Ölçülen boşluklar 7, 9, 11, 13, 17, 19, 23, 27, 33, 41 piksel. Ortak çarpan yok.
- **Olması gereken:** Hepsi 4 ya da 8 tabanının katı: 8, 12, 16, 24, 32, 48, 64 (ölçüt 3).
- **Neden:** Tek tek fark edilmez, toplamda "rastgele" hissi verir. En kolay düzeltilen ve en çok fark yaratan başlık budur.

### C10 · [ORTA] Aynı satırdaki kutular eşit yükseklikte değil
- **Şu an:** Üç özellik kartının içerik uzunlukları farklı olduğu için üçü de farklı yükseklikte. Fiyat kutularında aynı sorun daha belirgin, "Esnaf" kutusu diğer ikisinden uzun.
- **Olması gereken:** Aynı satırdaki kartlar eşit yükseklikte, buton alta sabitlenmiş (ölçüt 7).
- **Neden:** Basamaklanan kart altları gözü rahatsız eder ve karşılaştırmayı zorlaştırır. Fiyat tablosunda bu doğrudan karar vermeyi engeller.

### C11 · [ORTA] İkonların hepsi emoji
- **Şu an:** Logo dahil dört ikonun dördü de emoji (takvim, para kesesi, zil).
- **Olması gereken:** Tek bir ikon setinden, aynı çizgi kalınlığında ikonlar (ölçüt 8).
- **Neden:** Emoji her işletim sisteminde farklı çiziliyor, kontrol sende değil. Ayrıca emoji her zaman renkli ve dolu, yanındaki ince yazıyla ağırlık uyuşmazlığı yaratıyor.

### C12 · [DÜŞÜK] Yedi ayrı köşe yarıçapı
- **Şu an:** 3, 4, 5, 7, 9, 12, 14 piksel. Yan yana duran üç kahraman butonunun üçünde üç farklı yarıçap var (9, 3, 14).
- **Olması gereken:** Tek değer, iç içe öğeler için en fazla iki (ölçüt 5).
- **Neden:** Yan yana duran aynı işlevdeki üç butonun farklı köşelenmesi, tek tek yazıldığını ele verir.

### C13 · [DÜŞÜK] Gövde metni saf siyah
- **Şu an:** Başlıklar ve gövde `#000000`.
- **Olması gereken:** Neredeyse siyah, koyu gri yönünde (ölçüt 4).
- **Neden:** Saf siyah beyaz üstünde sert bir kenar oluşturur. Tek başına kimse şikayet etmez ama toplamda ucuz görünümü besler.

---

## Bölüm D · Düzeltme talimatı (yapıştırılabilir)

```text
Aşağıdaki tasarım düzeltmelerini bu sayfaya uygula. Maddeleri sırayla, tek tek uygula.
Sayfanın metnini, bölüm sırasını ve içeriğini DEĞİŞTİRME. Yalnız görsel yürütmeye dokun.
Marka renkleri ve yazı tipleri sabit, onlara dokunma.

1. [YÜKSEK] Yer tutucuları temizle.
   Şu an: kahraman bölümünde "Buraya ürün ekran görüntüsü gelecek" yazan gri kutu var, hakkında paragrafı "Lorem ipsum dolor sit amet." ile bitiyor.
   Yap: gri kutuyu gerçek ürün görseliyle değiştir; görsel yoksa kutuyu tamamen kaldır. "Lorem ipsum dolor sit amet." cümlesini sil.

2. [YÜKSEK] Kahraman bölümünde tek birincil buton bırak.
   Şu an: "Hemen Başla" (mavi dolu), "Demo İzle" (turuncu dolu), "Fiyatları Gör" (yeşil dolu) yan yana.
   Yap: yalnız "Hemen Başla" dolu kalsın. "Demo İzle" çerçeveli olsun (arka plan şeffaf, 1px kenarlık, metin rengi vurgu rengi). "Fiyatları Gör" düz metin bağlantı olsun. Turuncu ve yeşili sayfadan kaldır.

3. [YÜKSEK] Açık gri metinleri koyulaştır.
   Şu an: kahraman paragrafı ve alt bilgi #AAAAAA (kontrast 2,3:1), kart açıklamaları ve fiyat maddeleri #999999 (2,9:1).
   Yap: ikincil metin rengini #52525B yap (beyaz üstünde yaklaşık 7:1). Hiçbir metin 4,5:1'in altında kalmasın.

4. [YÜKSEK] Yazı ölçeğini beş basamağa indir.
   Şu an: 12 ayrı boyut (13,14,15,16,17,18,19,20,21,23,24,27).
   Yap: yalnız şu beş boyut kullanılsın: 14 (küçük), 16 (gövde), 20 (alt başlık), 28 (bölüm başlığı), 44 (sayfa başlığı). Her metni bunlardan birine yuvarla.

5. [YÜKSEK] Metin genişliğini ve satır aralığını düzelt.
   Şu an: paragraflar 1226px genişlikte, satır başına yaklaşık 120-150 karakter. Gövde satır aralığı 1,35.
   Yap: sayfaya 1120px genişliğinde ortalanmış bir kapsayıcı ekle. Tüm gövde paragraflarına max-width: 65ch ver. Gövde line-height 1.6, başlıklarda 1.2 yap.

6. [YÜKSEK] Hakkında bölümünü sola hizala.
   Şu an: "Neden Randevu Defteri" başlığı 13px içeriden sola dayalı, altındaki 305 karakterlik paragraf ortalanmış.
   Yap: başlıktaki 13px sol boşluğu kaldır. Paragrafı sola dayalı yap. Başlık ve paragraf aynı sol kenardan başlasın.

7. [YÜKSEK] Kenarlık ile gölgeyi ayır, gölgeleri hafiflet.
   Şu an: kartlarda ve fiyat kutularında 1px kenarlık ile 0 8px 20px rgba(0,0,0,0.3) gölge birlikte. Sayfada 4 ayrı gölge var.
   Yap: kartlardan kenarlığı kaldır. Tek bir gölge tanımı kullan: 0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06). Sayfadaki bütün gölgeleri bununla değiştir.

8. [ORTA] Butonları büyüt ve iç boşluğu dengele.
   Şu an: buton yükseklikleri yaklaşık 33-36px, iç boşluk yatay ve dikeyde eşit.
   Yap: bütün butonlara min-height: 44px ve padding: 12px 24px ver.

9. [ORTA] Boşlukları 8 tabanına oturt.
   Şu an: 7, 9, 11, 13, 17, 19, 23, 27, 33, 41 piksel karışık.
   Yap: bütün boşlukları şu değerlerden birine yuvarla: 8, 16, 24, 32, 48, 64, 96. Bölüm araları 96px, bölüm içi başlık altı 24px, kart içi 24px olsun.

10. [ORTA] Aynı satırdaki kutuları eşitle.
    Şu an: özellik kartları ve fiyat kutuları içerik uzunluğuna göre farklı yükseklikte.
    Yap: kart kaplarına align-items: stretch ver, kartları flex sütun yap, butonu margin-top: auto ile alta sabitle.

11. [ORTA] Emoji ikonları değiştir.
    Şu an: takvim, para kesesi, zil ikonlarının hepsi emoji.
    Yap: tek bir çizgisel ikon seti kullan (örneğin Lucide), hepsi 24px ve aynı çizgi kalınlığında olsun. Logodaki emojiyi de kaldır.

12. [DÜŞÜK] Köşe yarıçapını tekleştir.
    Şu an: 3, 4, 5, 7, 9, 12, 14 piksel karışık.
    Yap: butonlarda ve girdi alanlarında 8px, kartlarda ve büyük kutularda 12px kullan. Başka değer kalmasın.

13. [DÜŞÜK] Saf siyahı değiştir.
    Şu an: metin rengi #000000.
    Yap: ana metin rengini #18181B yap.

Uyguladıktan sonra değiştirdiğin her maddeyi tek satırda listele.
Emin olmadığın bir madde varsa uygulamadan önce sor.
```

---

## Bölüm E · Bu görüntüden ölçülemeyenler

- Fareyle üstüne gelince ve tıklayınca butonlarda ne oluyor
- Klavyeyle gezinirken odak halkası görünüyor mu
- Sayfa ne kadar sürede açılıyor
- Animasyon ve geçişler
- Karanlık tema
- Tablet genişliği (yalnız 1280 ve 390 görüntüsü geldi)

Odak halkasını da denetlememi istersen, klavyeyle sekme tuşuna basılı haldeki bir ekran görüntüsü ekle.

---

## Bölüm F · Önceki denetimle karşılaştırma

Bu sayfanın ilk denetimi. Karşılaştırılacak önceki rapor yok.
