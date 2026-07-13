# Yorum Ayrıştırma Anatomisi

> Sistem `yorumlar/` içindeki her yorumu bu başlıklara göre etiketler, sonra temaları kümeler. Yorumda bilgi yoksa o satırı boş bırakır, uydurmaz.

## Her yorum için etiketlenecek başlıklar
1. **Duygu:** olumlu / karışık (hem över hem takılır) / eleştiri (şikayet, düşük puan).
2. **Ana tema:** yorumun asıl konusu tek kelimeyle (ör. kuruluk, koku, boyut, kargo, fiyat, hassasiyet, doku).
3. **Somut kelime/cümle:** müşterinin kendi ağzından geçen çarpıcı ifade (satış diline HAM MALZEME budur, birebir sakla).
4. **Satın alma sinyali (varsa):** neden aldığını / hangi derdi çözdüğünü söylüyor mu.
5. **Güven sinyali (varsa):** neye güvendiğini söylüyor mu (koku, sonuç, kişisel dokunuş, kargo, tekrar alma).
6. **İtiraz/tereddüt (varsa):** neye takıldığını, neden puan kırdığını, neyi eksik bulduğunu söylüyor mu.

## Tema kümeleme (tek tek etiketlemeden sonra)
Etiketlenen yorumlar üç gruba toplanır. Her temanın KAÇ yorumda geçtiği sayılır (frekans = önem sinyali):

1. **Neden alıyorlar (satın alma sebepleri):** hangi dert, hangi tetikleyen an, hangi ihtiyaç tekrar ediyor. (Ör. "kışın cildim kuruyor", "kimyasaldan kaçıyorum", "hassas cildime yaramıyordu".)
2. **Neye güveniyorlar (güven unsurları):** ürünün/markanın hangi yanına güven duyuyorlar, neyi övüyorlar, neden tekrar alıyorlar. (Ör. koku, hızlı emilim, yağlı bırakmama, kargo hızı, el yazısı not.)
3. **Neye takılıyorlar (itirazlar):** hangi şikayet, tereddüt, iade sebebi tekrar ediyor. (Ör. "kavanoz küçük", "pahalı", "kaç günde etki eder belli değil", "kapak sızdırdı".)

## En sık gelen itiraz (en önemli okuma)
"Neye takılıyorlar" grubunda en çok tekrar eden itiraz işaretlenir. Kural:
- **En sık itiraz = satış sayfanda ve reklamında BAŞTAN cevaplaman gereken şey.** Müşteri onu yazmışsa, yazmayan onlarca kişi de aynı sebeple almaktan vazgeçmiştir.
- İtirazı ÇÜRÜTEN gerçek müşteri cümlesi ara: bir müşteri "küçük" derken başka bir müşteri "azıcık yetiyor, aylarca gidiyor" demiş olabilir. Bu, itirazın hazır ve inandırıcı cevabıdır.
- İtirazı çürüten gerçek cümle yoksa markanın `01-marka.md` içindeki dürüst cevabını kullan; o da yoksa placeholder bırak.

## Satış diline çevirme (her ana tema için üç çıktı)
Her ana tema (özellikle en sık geçenler) şu üçe çevrilir:
- **Satış açısı:** o temada hangi faydayı, müşterinin kendi kelimesiyle öne çıkaracağın. (Ham malzeme: adım 3'te sakladığın çarpıcı cümleler.)
- **İtiraz cevabı:** o temayla ilgili tereddüde baştan verilen cevap (mümkünse başka müşterinin sözüyle).
- **Reklam kancası:** kaydırmayı durduracak 1-2 açılış cümlesi, yine müşteri dilinden.

## Anti-uydurma (bu sistemin çekirdeği)
- Sistem yorumlarda GEÇMEYEN bir fayda, sonuç, süre ya da garanti ÜRETMEZ. Kanıt müşteri cümlesidir; kanıtı olmayan iddia yazılmaz.
- "Bir haftada", "cildini gençleştirir", "kesin sonuç" gibi yorumlarda dayanağı olmayan iddialar yasak.
- Her satış açısının / itiraz cevabının / kancanın altında hangi gerçek yorum(lar)dan çıktığı yazılır. Kaynağı olmayan satır silinir.

## Yorum erişimi hakkında dürüst not (kitleye anlat)
- **Ana yol yapıştırmadır.** Trendyol, Amazon, Shopify, Judge.me gibi platformların çoğunda yorumlar sayfaya JavaScript ile, kaydırınca ya da giriş yapınca yüklenir; ücretsiz güvenilir otomatik indirme yolu yoktur. Yorumları elle kopyalayıp `yorumlar/` içine yapıştırırsın (2 dakikalık iş).
- **Link okuma en iyi çabadır.** Yorumları düz sayfada gösteren basit bir site linkin varsa sistem onu okumayı dener; okuyamazsa "yapıştır" der, uydurma yorum üretmez.
- Tema çıkarma, en sık itirazı bulma ve satış cephanesi üretimi tamamen otomatiktir; manuel olan tek şey yorumları sisteme sokmaktır.
