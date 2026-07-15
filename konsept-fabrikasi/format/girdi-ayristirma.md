# Girdi Ayrıştırma Anatomisi

> Sistem `girdi/` içindeki üç dosyayı bu başlıklara göre okur. Girdide bilgi yoksa o satırı boş bırakır, uydurmaz.

## 1) Kazanan reklamlar (`girdi/kazanan-reklamlar.md`)
Her kazanan reklam için çıkarılacak başlıklar:
1. **Kanca (hook):** reklamın ilk cümlesi / kaydırmayı durduran açılış. (dert / soru / sayı / karşı görüş / merak / mizah.)
2. **Vaat / teklif:** ne söz veriyor. Sonuç, kolaylık, tazelik, risksizlik, hediye, değer.
3. **Kime konuşuyor:** dilinden ve dert seçiminden kime seslendiği. Yaş sinyali, hayat tarzı, kullanım anı.
4. **Duygu:** hangi duyguya basıyor (rahatlama, pişmanlıktan kaçınma, keyif, ait olma, akıllı harcama, güven).
5. **Format:** video / tek görsel / carousel / UGC.
6. **Kanıt:** sayı, garanti, yorum ekranı, kullanıcı gösterimi.
7. **Ne kadardır dönüyor / performans notu:** varsa "kaç aydır en iyi", "en çok satan reklam". En uzun tutan reklam en güçlü sinyaldir.

## 2) Müşteri yorumları (`girdi/musteri-yorumlari.md`)
Sistem yorumlardan şunları toplar:
- **Tekrar eden övgü:** müşteriler asıl neyi seviyor (aynı şey birçok yorumda geçiyorsa o senin gerçek satış açındır).
- **Müşterinin kendi cümlesi:** müşterinin kullandığı somut ifade en güçlü reklam kancasıdır. Onu ham malzeme olarak sakla ("market kahvesine geri dönemiyorum" gibi).
- **Tekrar eden itiraz:** satın almadan önceki tereddüt (fiyat, taahhüt, "işe yarar mı"). Her itiraz bir konsept fırsatıdır: itirazı açıkça karşılayan bir kanca.
- **İtirazı çürüten cümle:** başka bir müşterinin o itirazı boşa çıkaran sözü (en ikna edici kanıt budur).

## 3) En beğenilen yorumlar (`girdi/begenilen-yorumlar.md`)
Sosyal medyada en çok beğeni alan yorumlar viral açının haritasıdır:
- **Viral duygu:** mizah, haklı öfke, "vay be" anı, kabullenme. En çok beğenilen yorum kitlenin sesli düşüncesidir.
- **Söylenmemiş gerçek:** herkesin hissedip söylemediği şey (çok beğeni = herkes onaylıyor). Bunu bir kancaya çevir.

## Örüntü çıkarma (üç girdiyi birleştir)
Hepsi ayrıştıktan sonra sistem şu dört soruyu yanıtlar:
- Hangi kanca tipi tekrar tutmuş (dert / duyusal / sayı / sosyal kanıt / karşı görüş / mizah)?
- Ortak vaat tipi ne (tazelik / kolaylık / değer / risksizlik / ait olma)?
- Ortak duygu ne (rahatlama, pişmanlıktan kaçınma, keyif, güven, akıllı harcama)?
- En sık itiraz ne, onu çürüten en iyi müşteri cümlesi hangisi?
Bu dört cevap "çalıştığı belli olan mantık"tır. 50 konsept bu mantıktan türer; kelimeleri müşterinin gerçek sesinden, mantığı kazanan reklamlardan alır.

## Dürüst not (kitleye anlat)
- Sistem senin verdiğin girdiyle çalışır: girdi ne kadar gerçek ve zenginse çıktı o kadar isabetli olur. Uydurma yorum ya da sahte kazanan reklam koyarsan sistem yanlış örüntü öğrenir.
- Sistem müşteri yorumu uydurmaz. Bir yorumu tırnak içinde kullanacaksa senin verdiğin gerçek yorumlardan alır.
- "Kazanan reklam" nereden bilinir: reklam hesabındaki en iyi dönen (en çok satan / en uzun süre yayında kalan) reklamların. Reklam vermiyorsan en çok etkileşim alan organik postlarını kazanan olarak verebilirsin.
