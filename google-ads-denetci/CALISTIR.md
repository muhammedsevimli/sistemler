# ÇALIŞTIR · Tek Komut

> Denetim tek adım. Önce raporu Google Ads'ten dışa aktarıp `veri/` klasörüne koy (nasıl: `veri/OKU-veri-cikarma-rehberi.md`), sonra bu komutu çalıştır.
> Claude Code `CLAUDE.md` sayesinde hesap + anatomi + format dosyalarını zaten okuyacak.

## Adım 1 · Raporu hazırla (komut değil, elle)
1. `hesap/01-hesap.md` dosyasını kendi işinle doldur (ne satıyorsun, kime, hedef ROAS/CPA, ne DEĞİLSİN). Doldurulmuş örnek: `hesap/ORNEK-01-hesap.md`.
2. Google Ads'ten **Arama terimleri raporunu** (varsa **Kampanyalar raporunu** da) dışa aktar, `veri/` klasörüne yapıştır. Nasıl aktaracağın: `veri/OKU-veri-cikarma-rehberi.md`.

## Adım 2 · Hesabı denetle (kopyala)

```
google ads hesabımı denetle. veri klasöründeki raporları oku, boşa giden reklam paramı bul ve öncelikli düzeltme listesi çıkar.

kurallar:
- önce hesap + anatomi + format + veri dosyalarını okuduğunu tek satırla söyle.
- her arama terimini sınıflandır: alakalı+dönüşen / alakalı+dönüşmemiş (izle) / boşa giden (işine uygun değil).
- boşa giden tutarı SADECE işaretli satırların maliyet kolonunu toplayarak hesapla. hangi satırları topladığını maliyetleriyle göster. harcamanın yüzde kaçı olduğunu yaz.
- alakalı ama dönüşmemiş terimi boşa giden sayma, ayrı "izle" kovasına koy.
- eksik negatif kelimeleri bul: boşa giden terimlerde tekrar eden kök kelimeler.
- boşa giden çoğunlukla geniş eşleşmeden geliyorsa o kampanyayı işaretle ama dönüşen terimi kesecek öneri verme.
- kampanya raporu varsa yüksek maliyet düşük roas kampanyayı bul, bütçe payını ve roas'ını yaz.
- tahmini tasarrufu SADECE veriden çıkar, uydurma çarpan kullanma.
- veride olmayan hiçbir rakamı uydurma. veri eksikse "şu raporu/kolonu da ver" de.
- çıktıyı ciktilar/ klasörüne YYYY-AA-GG-denetim.md olarak yaz. em dash kullanma.
```

## Kısa versiyon (acele edince)
```
veri klasöründeki google ads raporlarını denetle. boşa giden harcamayı satır maliyetlerini toplayarak hesapla, eksik negatifleri ve yüksek maliyet düşük getiri kampanyayı çıkar, öncelikli düzeltme listesi ver. sadece veriden, uydurma. çıktıyı ciktilar'a yaz.
```

## Adım 3 · Bir düzeltmeyi uyguladığında (kopyala)
```
şu düzeltmeyi uyguladım: <negatif ekledim / kampanyayı kıstım / eşleşmeyi değiştirdim>. hesap/01-hesap.md "uygulanan düzeltmeler" bölümüne bugünün tarihiyle ekle. gelecek ay yeni raporu denetlerken bunu hesaba kat, aynı öneriyi tekrar verme, sonucu karşılaştır.
```

## Not
Ne kadar uzun tarih aralığı dışa aktarırsan denetim o kadar isabetli olur. Son 30 gün iyi bir başlangıç. Az satırla (10'dan az arama terimi) sıralama zayıf çıkar. Dönüşüm ve dönüşüm değeri kolonlarını mutlaka dahil et; onlar olmadan boşa gideni ile dönüşeni ayırmak zorlaşır.
