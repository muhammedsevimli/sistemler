# Reklam Ayrıştırma Anatomisi

> Sistem `rakip-reklamlari/` içindeki her reklamı bu başlıklara böler. Yapıştırılan reklamda bilgi yoksa o satırı boş bırakır, uydurmaz.

## Her reklam için çıkarılacak başlıklar
1. **Kanca (hook):** reklamın ilk cümlesi / dikkat çeken açılış. İnsanın kaydırmayı durdurduğu yer. (Örn. dert cümlesi, soru, sayı, karşı görüş.)
2. **Vaat / teklif:** ne söz veriyor, teklif ne. İndirim mi, hediye mi, sonuç mu, kolaylık mı, garanti mi.
3. **Kime konuşuyor:** dilinden, dert seçiminden, örnekten kime seslendiği. Yaş sinyali, hayat tarzı, kullanım anı.
4. **Format:** video mu, tek görsel mi, carousel mi, sadece metin mi. (Kütüphanede her reklamın türü görünür.)
5. **Kanıt:** sayı, garanti, "X kişi aldı", yorum ekran görüntüsü, ünlü/kullanıcı gösterimi, ödül.
6. **CTA (çağrı):** ne istiyor. Satın al, siteye git, dm at, kaydol, teklifi gör.
7. **Ne kadardır dönüyor:** kütüphanedeki "yayına girdi" tarihi. Bu en değerli sinyal (aşağıda).

## Kazandıran sinyali (en önemli okuma)
Meta Reklam Kütüphanesi her aktif reklamın yayına giriş tarihini gösterir. Kural:
- **Aylardır dönen reklam = kazandıran aday.** Kimse zarar eden reklama aylarca para vermez. Uzun süre dönüyorsa dönüştürüyordur.
- **Birkaç günlük / haftalık reklam = test aşaması.** Henüz kazandığı belli değil, kopyalanacak model olarak zayıf.
- **Aynı kancanın birden çok varyasyonu aktifse** rakip o kancaya para basıyordur, kanca güçlüdür.
Sistem uzun süredir döneni ve çok varyasyonlu kancayı öne çıkarır; örüntüyü asıl bunlardan kurar.

## Örüntü çıkarma (tek tek reklamdan sonra)
Tüm reklamlar ayrıştıktan sonra sistem şu soruları yanıtlar:
- Hangi kanca tipi tekrar ediyor (dert / sayı / karşı görüş / merak / sosyal kanıt)?
- Ortak teklif tipi ne (indirim / hediye / kolaylık / risksizlik / topluluk)?
- Ortak duygu ne (rahatlama, korku kaçırma, ait olma, statü, tasarruf)?
- Hepsi aynı kişiye mi konuşuyor, yoksa farklı segmentlere mi?
Bu dört cevap "çalıştığı belli olan mantık"tır. 10 konsept bu mantıktan türer, rakibin kelimelerinden değil.

---

## Meta Reklam Kütüphanesi hakkında dürüst notlar (kitleye anlat)
- **Herkese açık ve ücretsizdir.** `facebook.com/ads/library` adresinden herkes, hesapsız, bir markanın o an dönen reklamlarını görebilir. Meta bunu şeffaflık için zorunlu tutar.
- **Reklamların metni tarayıcıda görünür:** üstteki yazı, başlık, buton, yayına giriş tarihi. Sistem asıl bu metni çözümler; kanca ve teklif zaten bu metindedir.
- **Video reklamların görüntüsünü sistem tek başına izleyemez.** İzlediğin videoda önemli bir şey varsa (ilk 3 saniyede ne oluyor, ekranda ne yazıyor) tek satır not düşersin, sistem onu da kullanır. Not yoksa uydurmaz; metinden çıkarabildiğini çıkarır.
- **Ücretsiz otomatik indirme (API) ticari ürün reklamlarını çoğu ülkede vermez.** Meta'nın resmi Ad Library API'si sadece siyaset/seçim/toplumsal konu reklamlarını döndürür; ürün reklamları yalnızca tarayıcı arayüzünde görünür. Bu yüzden "reklamı görme" adımı tek tıklık bir aç-ve-yapıştır işidir, otomatik kazıma değil. Ayrıştırma ve üretim otomatiktir.
