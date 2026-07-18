# Çıktı Formatı · Denetim Raporu

> Sistem denetimi `ciktilar/YYYY-AA-GG-denetim.md` dosyasına şu yapıda yazar. Amaç: kullanıcı 30 saniyede boşa gideni görüp bu hafta ne yapacağını bilsin.

## (a) Özet kutu (en üstte)
Tek bakışta okunur:
- **Denetlenen dönem:** rapordaki tarih aralığı (veride yoksa "belirtilmemiş" yaz).
- **Toplam reklam harcaması:** verideki maliyet toplamı.
- **Boşa giden tutar:** işaretli satır maliyet toplamı + harcamanın yüzdesi. (Örn. "1.615 TL · harcamanın %40'ı".)
- **Strateji dışı / düşük getiri:** varsa ayrı satır (dönüşen ama "ne değilsin"e giren).
- **Tahmini aylık tasarruf:** boşa giden kesilirse. + varsa ROAS'ın nereye çıkacağı (tahmini notuyla).

## (b) Boşa giden dökümü (şeffaflık)
Tablo: arama terimi · kampanya · eşleşme türü · maliyet · dönş. · neden boşa (bilgi amaçlı / DIY / rakip / ucuz-ikinci el / ne değilsin).
Tablonun altında: "Boşa giden toplam = şu satırların maliyet toplamı: X + Y + Z + ... = TOPLAM". Toplamı açıkça göster.
Ayrı küçük tablo: strateji dışı / düşük getiri satırları (dönüştü ama hedef dışı), ROAS'larıyla.

## (c) Öncelikli "bu hafta düzelt" listesi (asıl değer)
Numaralı, en yüksek etkiden başlayarak. Her madde somut ve uygulanabilir:
1. **Negatif kelime ekle:** hangi negatifler, hangi kampanya/hesap seviyesine, bunları eklersen ayda ne kadar harcamayı durdurursun.
2. **Kampanya kıs / yeniden kur:** hangi kampanya, neden (bütçe payı + ROAS), ne yap.
3. **Eşleşme türünü değiştir:** hangi kampanya geniş eşleşmeden sıralı/tama, dönüşen terimi koruyarak.
4. (varsa) düşük CTR / yüksek CPC işareti.
Her maddenin yanında tahmini etki (veriden). Sistem hesaba dokunmadığı için hep öneri kipi: "şunu ekle", "şunu kıs".

## (d) İzle kovası
Alakalı ama dönüşmemiş terimler. "Bunlar boşa giden değil, ama dönüşmedi de. Bir dahaki denetimde tekrar bak; açılış sayfası / fiyat / dönüşüm izleme tarafına da bakmak gerekebilir." Boşa gidenle karıştırma.

## (e) Veri eksikse / sonraki adım
Eksik kolon ya da rapor varsa burada iste (dönüşüm değeri yoksa, kampanya raporu yoksa, tarih aralığı belirsizse). Kullanıcı bir düzeltme uygulayınca `CALISTIR.md` Adım 3 ile write-back yapmasını hatırlat.

## Dil kuralları
- Em dash yok. Ayraç: nokta, virgül, iki nokta, orta nokta (·).
- Sade, operator dili. Abartı, motivasyon, gelir hava atma yok.
- Rakamları binlik ayraçla okunur yaz (1.615 TL). Para birimini verideki gibi koru.
- Her iddianın arkasında veri satırı olsun. Gerekçesiz "bu kötü" deme.
