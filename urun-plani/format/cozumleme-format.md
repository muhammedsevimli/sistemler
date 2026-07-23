# Çözümleme Formatı · FAZ 1 Çıktısı

> Sistem taradığı siteyi bu yapıda `cozumleme/cozumleme-YYYY-AA-GG.md` dosyasına yazar.
> Kural: her satırda kaynak URL. Kaynağı olmayan bilgi yazılmaz.

## A) Tarama künyesi
Tek tablo. Hangi sayfa denendi, ne oldu.

| Sayfa | URL | Sonuç |
|---|---|---|
| Ana sayfa | <url> | çekildi / erişilemedi (sebep) |
| Özellikler | <url> | çekildi / erişilemedi (sebep) |
| Fiyat | <url> | çekildi / erişilemedi (sebep) |
| Dokümantasyon | <url> | çekildi / erişilemedi (sebep) |
| Lisans / kullanım şartı | <url> | çekildi / yok |

## B) Ürün tek cümlede
Ne yapıyor, kime. Sayfada yazan ifadelerle, süslemeden. Kaynak URL.

## C) Kime hitap ediyor (sayfada yazan kitle)
Madde madde. Sayfada geçen kitle ifadeleri aynen. Yorum ekleme, sayfada yoksa "sayfada kitle yazmıyor" de.

## D) Özellik envanteri (ham liste)
Sayfalarda adı geçen her özellik. Bu aşamada ayıklama YOK, ayıklama FAZ 2'de olur.

| # | Özellik | Nerede geçiyor (URL) | Tek cümle ne işe yarıyor |
|---|---|---|---|

## E) Kullanıcı akışı (sayfadan okunabildiği kadar)
- Kayıt: nasıl başlıyor, kart isteniyor mu, deneme var mı.
- İlk değer anı: kullanıcı ilk olarak neyi görüyor da "işe yarıyor" diyor. Kaç adım sonra.
- Tekrar gelme sebebi: kullanıcı buraya neden geri dönüyor (bildirim, rapor, biriken veri, ekip).
Her satırın yanına dayanağı yaz. Sayfadan anlaşılmıyorsa "belirsiz" yaz.

## F) Veri modeli ipuçları (ham)
Doküman başlıkları, metrik tanımları, ayar sayfaları, API başlıkları. Hangi nesnelerin var olduğuna dair her ipucu.

| İpucu (aynen) | Nereden (URL) | Hangi nesneye işaret ediyor |
|---|---|---|

## G) Fiyat mantığı
- Fiyat neye göre artıyor: <kullanım hacmi / kullanıcı sayısı / birim sayısı / özellik paketi / belirsiz>
- Basamaklar ve LİTERAL rakamlar: sayfada yazan rakamlar aynen. Yoksa "fiyat bilgisi alınamadı".
- Ücretsiz deneme / ücretsiz katman: var mı, ne kadar.
- Her planda ortak olan: <liste>
- Üst basamaklar neyi açıyor: <liste>
Kaynak URL zorunlu.

## H) Lisans ve kullanım şartı
Ürün açık kaynaksa lisans adı aynen. Değilse "kapalı kaynak" ya da "sayfada lisans bilgisi yok".

## I) Belirsizler (siteden anlaşılmayanlar)
Madde madde. Bu liste boş bırakılmaz. Örnek: "verinin kaç gün saklandığı yazmıyor", "ekip planında kaç kişi olduğu belirsiz".

## J) Tek satır özet
Kaç sayfa çekildi, kaç sayfaya erişilemedi, kaç özellik toplandı.
