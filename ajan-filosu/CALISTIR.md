# Çalıştır

İki komut. Arada bir duruş var, o duruş bilerek konuldu.

## 1. İşleri yaz

`sen/01-isler.md` dosyasını aç, yapılacakları madde madde yaz.

**Sıra verme, bağımlılık yazma.** Onu sistem çözecek.

Tek dikkat edeceğin şey somutluk:

- Kötü: "siteyi düzelt"
- İyi: "anasayfadaki fiyat tablosunu mobilde tek sütuna indir"

Sistem belirsiz bir madde görürse sana sorar, tahmin etmez.

Listede silme, mail gönderme, ödeme ya da veri tabanı değiştirme varsa dosyanın "geri alınamaz işler" bölümüne de yaz. Sistem bunları asla paralel koşturmaz.

## 2. Planı çıkar

Claude Code'u bu klasörde aç ve şunu yaz:

```text
planla
```

Sistem her işin girdisini, çıktısını ve **hangi dosyalara yazacağını** çıkarır. Sonra iki tür bağımlılığı ayrı ayrı işaretler:

- **Veri bağımlılığı:** B, A'nın çıktısına muhtaç.
- **Yazma çakışması:** ikisi aynı dosyaya yazacak. Mantıken bağımsız olsalar bile paralel koşamazlar.

Sonuç `plan/` klasörüne düşer ve **sistem durur.**

## 3. Planı oku, sonra koş

Bu duruş bilerek var. Bağımlılık haritası yanlışsa en ucuz düzeltme anı burasıdır. Koştuktan sonra bulursan iş çoktan bozulmuştur.

Şunlara bak:

- İşler doğru anlaşılmış mı
- "YAZACAĞI dosyalar" sütunu eksiksiz mi
- Aynı dosyaya yazan iki iş aynı dalgada mı (olmamalı)
- Geri alınamaz bir iş paralel dalgaya düşmüş mü (düşmemeli)

Sorun yoksa:

```text
koş
```

## Ne oluyor

Sistem her iş için `isler/<ad>/` klasörü açıyor. Aynı dalgadaki işleri **aynı anda** başlatıyor, her çalışan yalnız kendi klasörüne yazıyor. Dalga bitmeden sonrakine geçmiyor.

Bitince `ciktilar/` klasörüne tek bir rapor düşüyor. On klasör gezmiyorsun, bir dosya okuyorsun.

---

## Neden her şey paralel değil

Bu sistemin işi paralellik değil, **bağımlılığı doğru çözmek.** Paralellik onun sonucu.

Sistem şu durumlarda bilerek sıraya koyar:

| Durum | Neden |
|---|---|
| İki iş aynı dosyaya yazıyor | Aynı anda yazarlarsa biri diğerini eziyor. Sessizce bozuluyor, sonradan buluyorsun. |
| B, A'nın çıktısına muhtaç | Girdisi hazır olmadan koşarsa boşa koşuyor. |
| İş geri alınamaz | Silme, gönderme, ödeme. Bunlar tek tek ve sırayla, gözün üstünde. |
| İş bir dakikadan kısa | Ayrı çalışan açmanın maliyeti kazancından fazla. |

Şüphedeyse sıraya koyar. Yanlış paralellik sessizce bozar, sıralılık yalnız yavaşlatır.

---

## Sık sorulanlar

**Kaç iş aynı anda koşuyor?**
En fazla 4. Daha fazlası makineyi ve modeli boğuyor, hız kazancı tersine dönüyor.

**Dört işi paralel koşturursam dört kat mı hızlanır?**
Hayır. Süre en uzun işin süresi kadar olur, dörtte biri değil. Ayrıca her çalışanın kurulum maliyeti var. Rapor sana gerçekleşen kazancı yazıyor, şişirmiyor.

**Bir çalışan hata verirse ne oluyor?**
Diğerleri devam ediyor. Başarısız iş raporda "yapılamadı" diye işaretleniyor, ona bağlı sonraki işler "atlandı" oluyor. Zinciri görüyorsun.

**Çalışanlar birbirinin dosyasını bozar mı?**
Bozmaması için her biri kendi klasörüne kilitli. Rapor sonunda ayrıca kontrol var: kendi klasörü dışına yazan oldu mu, aynı dosyaya iki çalışan dokundu mu. İzolasyon bozulduysa raporun en üstüne uyarı düşüyor.

**Planı beğenmezsem?**
`sen/01-isler.md` dosyasını düzelt ve `planla` de. Plan üzerine yazılır, koşmadığın sürece hiçbir şey olmaz.
