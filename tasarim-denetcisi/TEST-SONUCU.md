# Test sonucu · sistem gerçekten çalıştırıldı · 27 Tem 2026

> Bu dosya, sistemin tanıtıldığı gibi çalıştığının kanıtıdır. Aşağıdaki her şey bu makinede gerçekten koştu.
> Test edilen sistem, kullanıcının kendi makinesinde çalışacak olanın aynısı: Claude Code, bu klasördeki `CLAUDE.md` + `format/olcutler.md` talimatlarıyla, girdi olarak yalnız bir PNG.

## Test kurgusu

1. Kasten kötü kurulmuş bir açılış sayfası hazırlandı (kurgusal ürün: "Randevu Defteri"). Gerçek bir marka değil, gerçek veri yok.
2. Sayfanın tam sayfa ekran görüntüsü alındı (masaüstü 1280px, mobil 390px). `ekranlar/` klasörüne kondu.
3. **Sisteme yalnız PNG verildi.** HTML dosyası verilmedi, adres verilmedi. Sistem kodu görmedi.
4. Sistem sekiz başlığı ölçtü, `ciktilar/ORNEK-CIKTI-denetim.md` raporunu üretti.
5. Raporun Bölüm D'sindeki düzeltme talimatı olduğu gibi kopyalanıp uygulandı.
6. Düzeltilmiş sayfanın ekran görüntüsü alındı ve ölçümler tekrarlandı.

## Görüntüden yapılan tahmin ne kadar doğru çıktı

Sistem ekran görüntüsünden ölçtüğü için değerleri "yaklaşık" diye işaretliyor. Ne kadar yaklaşık olduğunu görmek için, denetim bittikten SONRA sayfanın gerçek değerleri tarayıcıdan çekildi ve karşılaştırıldı. Sistem bu gerçek değerleri denetim sırasında görmedi.

| Ölçüm | Sistemin görüntüden dediği | Sayfanın gerçek değeri | Tuttu mu |
|---|---|---|---|
| Ayrı yazı boyutu sayısı | 12 | 12 (13,14,15,16,17,18,19,20,21,23,24,27) | evet |
| Ayrı köşe yarıçapı sayısı | 7 | 7 (3,4,5,7,9,12,14) | evet |
| Ayrı gölge sayısı | 4 | 4 | evet |
| Kahraman paragrafı satır uzunluğu | yaklaşık 120 karakter | 231 karakter / 2 satır = 116 | evet |
| Hakkında paragrafı satır uzunluğu | yaklaşık 150 karakter | 305 karakter / 2 satır = 153 | evet |
| Gövde satır aralığı | 1,35 kat | 22,95 / 17 = 1,35 | evet |
| Kahraman paragrafı kontrastı | yaklaşık 2,3:1 | `#AAAAAA` beyaz üstünde = 2,32:1 | evet |
| Kart metni kontrastı | yaklaşık 2,9:1 | `#999999` beyaz üstünde = 2,85:1 | evet |
| Buton yükseklikleri | yaklaşık 33-36px | 33px ve 36px | evet |
| Kartlarda kenarlık + gölge birlikte | var | `border: 1px` + `box-shadow` ikisi de var | evet |

On ölçümün onu da tuttu. Ekran görüntüsü, bu sekiz başlığı denetlemek için yeterli girdi.

## Düzeltme talimatı uygulandıktan sonra

| Ölçüt | Önce | Sonra | Kabul aralığı | Durum |
|---|---|---|---|---|
| Ayrı yazı boyutu | 12 | **5** (14,16,20,28,44) | 3-5 | geçti |
| Ayrı köşe yarıçapı | 7 | **2** (8,12) | 1-2 | geçti |
| Ayrı gölge | 4 | **1** | en fazla 2 | geçti |
| Gövde satır genişliği | 1226px | **578px** (65ch) | 45-75 karakter | geçti |
| Gövde satır aralığı | 1,35 | **1,6** | 1,5-1,7 | geçti |
| İkincil metin kontrastı | 2,32:1 | **7,7:1** (`#52525B`) | en az 4,5:1 | geçti |
| Buton yüksekliği | 33px | **52px** | en az 44px | geçti |
| Buton iç boşluğu | 8px eşit | **12px 24px** | yatay ≈ 2x dikey | geçti |
| Kartlarda kenarlık + gölge | ikisi de | **yalnız gölge** | biri | geçti |
| Kahramanda birincil buton | 3 | **1** | 1 | geçti |
| Ana metin rengi | `#000000` | **`#18181B`** | saf siyah değil | geçti |
| Yer tutucu kalıntısı | 2 (gri kutu + lorem ipsum) | **0** | 0 | geçti |

Kanıt dosyaları: `kanit/01-once-masaustu.png`, `kanit/02-sonra-masaustu.png`, `kanit/olcum-once.json`, `kanit/olcum-sonra.json`.

## Dürüst notlar

- **Yer tutucu kutusu kaldırılınca kahraman bölümünde boşluk kaldı.** Talimatın 1. maddesi "görsel yoksa kutuyu tamamen kaldır" diyordu, uygulandı ve sayfada geniş bir boşluk oluştu. Sistem bunu kendisi yakalamaz, ikinci bir denetim koşulursa boşluk ritmi başlığında çıkar. Gerçek kullanımda oraya gerçek ürün görseli konur.
- **Sistem yeniden tasarlamıyor.** Düzeltilmiş sayfa hâlâ aynı sayfa: aynı metin, aynı bölüm sırası, aynı mavi. Değişen yalnız görsel yürütme. Bu bilinçli bir sınır, `CLAUDE.md`'de yazılı.
- **Ekran görüntüsünün göremediği şeyler var.** Fare üstüne gelince ne oluyor, odak halkası var mı, sayfa ne kadar hızlı açılıyor. Sistem bunları denetlemiyor ve raporun Bölüm E'sinde açıkça listeliyor. Uydurmuyor.
- **Kontrast oranları hesapla doğrulandı**, göz kararı değil. WCAG 2.1 bağıl parlaklık formülü kullanıldı.
- **Test sayfası kurgusaldır.** "Randevu Defteri" diye bir ürün yok, ekran görüntüsündeki fiyatlar ve metinler bu test için yazıldı.
