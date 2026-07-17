# Adayları Nasıl Yapıştırırsın (2 dakika)

> 1. komut sana link verdi. Şimdi o linkten gördüğün markaları buraya taşıyorsun. Teknik bir şey yok: bak, kopyala, yapıştır.

## Adım adım
1. Sistemin verdiği linke tıkla. Meta Reklam Kütüphanesi açılır (herkese açık, üyelik gerekmez).
2. Karşına o nişte **şu an reklam veren** markalar gelir. Her kartın üstünde marka adı, altında reklam metni, köşesinde "Yayınlanma tarihi" yazar.
3. Sana uygun görünen markaları seç. Her marka için şunları kopyala:
   - marka adı
   - reklamın metni (üstteki yazı + başlık + buton yazısı)
   - "Yayınlanma tarihi" (bu bütçe sinyali, en önemli veri)
   - kaç farklı reklamı dönüyor (kütüphane "X reklam sonucu" der)
   - format (tek görsel / video / carousel)
4. Bu klasörde bir dosya aç (`di%C5%9F-klinigi.md` gibi, niş adıyla), aşağıdaki şablona yapıştır.
5. `CALISTIR.md` Adım 2 komutunu çalıştır.

## Şablon (her marka için bir blok)
```text
## <Marka adı>
Ne satıyor: <tek cümle>
Yayınlanma tarihi: <kütüphanede yazan tarih>
Kaç reklam dönüyor: <sayı>
Format: <tek görsel / video / carousel>
Reklam metni:
<reklamın tam metnini buraya yapıştır>
Buton: <Daha Fazla Bilgi / Şimdi Satın Al / Mesaj Gönder ...>
Not: <video ise tek satır ne gösteriyor. yoksa boş bırak.>

---
```

## İpuçları
- **Tarih en değerli veri.** Aylardır dönen reklam = para kazandırdığı için dönüyor = bütçesi var. Sistem sıralamayı buna dayandırır, atlamadan yapıştır.
- Metni düzeltme, olduğu gibi yapıştır. Yazım hatası bile sinyal.
- Emin olmadığın alanı boş bırak. Sistem uydurmaz, boşsa boş der.
- 4-5 marka iyi bir başlangıç. Az marka = zayıf sıralama.
- Video reklamda metin azsa tek satır not düş ("kadın ürünü kutudan çıkarıyor"). Sistem videoyu izlemez, notunu kullanır.

> Doldurulmuş örnek: `adaylar/ORNEK-adaylar.md`.
