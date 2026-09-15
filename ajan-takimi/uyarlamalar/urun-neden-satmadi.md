# Uyarlama · ürün neden satmadı

Soru kalıbı: "**\<ürün\>** lansmanında **\<X\>** kişi sayfayı gördü, **\<Y\>** kişi satın aldı. Neden bu kadar düşük kaldı."

Tek sonuç, tek soru. "Ürünümüz neden satmıyor" diye sorma, o bir soru değil. Belirli bir lansmanı, belirli bir dönemi sor.

## Dört teori

| Rol | Teori |
|---|---|
| **Pazarlamacı** | Vaat yanlış kuruldu. Sayfaya gelen insan ürünün ne işe yaradığını ilk ekranda anlamadı, başlık ve ilk paragraf yanlış şeyi vaat etti. Trafiği getiren mesajla sayfadaki mesaj aynı değildi. |
| **Editör** | Sayfanın kendisi engelledi. Yükleme süresi, mobil yerleşim, form uzunluğu, ödeme adımındaki sürtünme. İnsan ikna oldu ama akış onu döktü. |
| **Şüpheci** | Yanlış kitle geldi. Satın alma niyeti olmayan bir trafik kaynağı sayfayı doldurdu, dönüşüm oranı bu yüzden düştü. Ürünle ya da sayfayla ilgisi yok. |
| **Psikolog** | Fiyat değil, risk durdurdu. İnsan ürünü istedi ama "bu bana uyar mı, param yanar mı" sorusunu çözemedi. İade, deneme, kanıt ya da örnek çıktı yoktu. |

Matematikçi'nin teorisi yok, değiştirme.

## Matematikçi'nin bakacağı veri alanları

Bu alanları `veri/` klasörüne koy. Hangisi yoksa açıkça "veri yok" yaz, hakem eksiği eksik olarak işaretlesin.

**Huni sayıları**
- Sayfa görüntüleme, tekil ziyaretçi
- Ödeme sayfasına giden sayısı
- Ödemeyi başlatan sayısı
- Tamamlayan sayısı
- Her adımdaki düşüş oranı

**Sayfa davranışı**
- Ortalama sayfada kalma süresi
- Kaydırma derinliği (ilk ekranda çıkanların oranı)
- Mobil ve masaüstü ayrı ayrı dönüşüm
- Sayfa yükleme süresi

**Trafik kaynağı**
- Kaynak kırılımı (her kaynak kaç ziyaretçi, kaç satış)
- Kaynak başına ortalama sayfada kalma
- Geri dönen ziyaretçi oranı

**Karşılaştırma**
- Aynı ürünün önceki bir lansmanı ya da benzer bir ürünün aynı sayfa yapısıyla sonucu
- O lansmanda fiyat, vaat ve sayfa yapısı neydi

**Niyet sinyalleri**
- Sepete ekleyip ödemeye geçmeyen sayısı
- Gelen soru ve e-posta sayısı, hangi konuda
- İade koşulu sayfada var mıydı, kanıt bölümü var mıydı

## Ayırt eden rakamlar

- Sayfada kalma kısa ve kaydırma sığsa **Pazarlamacı** güçlenir, insan mesajı alamadan çıkmış.
- Kaydırma derin ve ödemeye giriş yüksek ama tamamlama düşükse **Editör** güçlenir, akış dökmüş.
- Bir trafik kaynağının dönüşümü diğerlerinden belirgin düşükse ve hacmi büyükse **Şüpheci** güçlenir.
- Sepete ekleme yüksek, tamamlama düşük ve gelen soruların çoğu "bana uyar mı" ise **Psikolog** güçlenir.
