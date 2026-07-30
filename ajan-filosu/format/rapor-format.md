# Rapor formatı

> Dosya adı: `ciktilar/YYYY-AA-GG-rapor.md`. FAZ 3 çıktısı.
> Amaç: kullanıcı on ayrı klasör gezmesin. Tek dosya okusun, ne olduğunu anlasın.

---

## Bölüm A · Özet

Üç satır, fazlası yok.

| | |
|---|---|
| Koşulan iş | X |
| Biten | X |
| Yapılamayan | X |
| Atlanan (bağlı olduğu iş yapılamadı) | X |
| Dalga sayısı | X |

Altına tek cümle: koşu başarılı mı, yoksa elle müdahale gerekiyor mu.

---

## Bölüm B · İş iş sonuç

Her iş için kısa blok. Uzun anlatım yok, `isler/<slug>/SONUC.md` zaten duruyor.

### B1 · <iş adı> · **bitti** / **yapılamadı** / **atlandı**
- **Ne üretti:** hangi dosya, nerede.
- **Not:** varsa tek satır. Takıldığı yer, eksik bıraktığı şey, kullanıcının bakması gereken nokta.

**Kural:** "bitti" yalnız `SONUC.md` gerçekten çıktı bildirdiyse yazılır. Dosya boşsa ya da çalışan bir şey üretmediyse **"çıktı üretmedi"** yazılır. Uydurma tamamlama yok.

---

## Bölüm C · Yapılamayanlar

Yalnız başarısız ve atlanan işler. Boşsa "hepsi bitti" yazılır.

| İş | Ne oldu | Sonraki adım |
|---|---|---|
| | hata / eksik girdi / erişilemedi | kullanıcı ne yapmalı |

**Atlanan işler ayrıca işaretlenir:** hangi işe bağlı oldukları için atlandıkları yazılır. Kullanıcı zinciri görsün.

---

## Bölüm D · Gerçekleşen zamanlama

Plandaki tahminle gerçek arasındaki fark. Bu bölüm sonraki planları düzeltir.

| Dalga | İşler | Tahmin | Gerçek |
|---|---|---|---|
| | | | |

Altına: toplam gerçek süre, sırayla koşsaydı tahmini süre, gerçekleşen kazanç.

**Kural:** kazanç şişirilmez. Paralellik beklenenden az kazandırdıysa bu yazılır. Sebebi biliniyorsa (bir iş diğerlerinden çok uzun sürdü, kurulum maliyeti yüksekti) tek satır eklenir.

---

## Bölüm E · Çakışma kontrolü

Koşu sonrası doğrulama. Her çalışan gerçekten kendi klasöründe mi kaldı.

| Kontrol | Sonuç |
|---|---|
| Kendi klasörü dışına yazan çalışan | var / yok |
| Aynı dosyaya iki çalışanın yazması | var / yok |
| Eksik `SONUC.md` | var / yok |

**Bu bölüm boş geçilmez.** İzolasyon bozulduysa raporun en üstüne uyarı yazılır, çünkü o koşunun çıktısına güvenilemez.

---

## Bölüm F · Filo defteri girdisi

Bu koşudan çıkan tek satırlık ders. `sen/01-isler.md` altındaki deftere eklenecek metin burada hazır yazılır, kullanıcı kopyalasın.

Özellikle şunlar yazılır:
- Paralel sanılıp aslında çakışan işler.
- Tahmini çok yanlış çıkan işler.
- Bir daha aynı planda yapılmaması gereken şey.

Ders çıkmadıysa "bu koşudan ders çıkmadı" yazılır, uydurma ders yazılmaz.
