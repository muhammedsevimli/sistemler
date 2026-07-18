# Raporu Nasıl Dışa Aktarırsın (5 dakika)

> Sistem hesabına bağlanmıyor. Sen raporu Google Ads panelinden alıp bu klasöre koyuyorsun. Teknik bir şey yok: aç, dışa aktar, yapıştır.
> İki rapor var. En önemlisi **Arama terimleri raporu**. Zamanın varsa **Kampanyalar raporu**nu da ekle, bütçe denetimi o zaman çalışır.

## Önce tarih aralığını ayarla
Google Ads'e gir (`ads.google.com`). Sağ üstteki tarih seçicisinden **Son 30 gün** seç. (Daha uzun aralık daha isabetli denetim demektir; 90 gün de olur.)

## Rapor 1 · Arama terimleri raporu (asıl kaynak)
Bu rapor, reklamlarını GERÇEKTE hangi aramaların tetiklediğini gösterir. Boşa giden para burada saklıdır.

1. Sol menüden **Kampanyalar** altındaki **Arama terimleri** (İngilizce panelde: Insights and reports, Search terms) bölümüne gir. Kısa yol: soldaki menüde arama grupları arasında "Arama terimleri" yazar.
2. Üstteki kolonları kontrol et. Şu kolonlar görünsün (yoksa kolon ekle · sağ üstteki "Sütunlar" / Columns ikonu):
   - Arama terimi
   - Eşleşme türü
   - Kampanya
   - Reklam grubu
   - Gösterim (Impr.)
   - Tıklama (Clicks)
   - Maliyet (Cost)
   - Dönş. (Conversions)
   - Dönş. değeri (Conv. value)
3. Sağ üstteki **indirme ikonu** (aşağı ok) · biçim olarak **CSV** ya da **Excel (.xlsx)** seç, indir. En kolayı: tabloyu fareyle seçip kopyala (Ctrl+A sonra Ctrl+C tablo üzerindeyken).
4. Bu klasörde `arama-terimleri.md` adında bir dosya aç, indirdiğin/kopyaladığın tabloyu içine yapıştır. CSV'yi Not Defteri ile açıp içeriğini yapıştırman da yeterli. Sistem tabloyu okur, biçim mükemmel olmak zorunda değil.

> Doldurulmuş örnek: `veri/ORNEK-arama-terimleri.md`. Kendi dosyan bu yapıya benzesin yeter.

## Rapor 2 · Kampanyalar raporu (bütçe denetimi için)
Bu rapor, hangi kampanyanın çok para yiyip az getirdiğini gösterir.

1. Sol menüden **Kampanyalar**a gir.
2. Kolonlar görünsün: Kampanya, Maliyet, Dönş., Dönş. değeri, (varsa) Dönüşüm değeri / maliyet ya da ROAS.
3. Aynı şekilde indir ya da kopyala.
4. Bu klasörde `kampanyalar.md` adında bir dosya aç, yapıştır.

> Doldurulmuş örnek: `veri/ORNEK-kampanyalar.md`.

## İpuçları
- **Dönüşüm ve dönüşüm değeri kolonlarını atlama.** Boşa gideni dönüşenden ayırmak için gerekli. Dönüşüm izlemen kurulu değilse sistem yine boşa gideni bulur ama getiri yorumu yapamaz, sana bunu söyler.
- Rakamları düzeltme, olduğu gibi yapıştır. TL işareti, binlik ayraç kalabilir, sistem okur.
- Emin olmadığın kolonu boş bırak. Sistem uydurmaz, eksikse "şu kolonu da ver" der.
- Para birimi neyse (TL, USD, EUR) sistem onu kullanır, çevirmez.
