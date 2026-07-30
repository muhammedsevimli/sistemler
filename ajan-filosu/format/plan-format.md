# Plan formatı

> Dosya adı: `plan/YYYY-AA-GG-plan.md`. FAZ 1 çıktısı. Yazıldıktan sonra DURULUR, kullanıcı okur, sonra koşulur.

---

## Bölüm A · İşler

Her iş tek satır. Belirsiz iş plana girmez, kullanıcıya sorulur.

| # | İş | Girdisi | Çıktısı | YAZACAĞI dosyalar |
|---|---|---|---|---|
| 1 | | | | |

**"YAZACAĞI dosyalar" sütunu bu tablonun en önemli sütunu.** Okuma sayılmaz, yalnız yazma sayılır. İki işin bu sütunu kesişiyorsa aynı dalgaya konamazlar.

---

## Bölüm B · Bağımlılık haritası

İki tür bağımlılık ayrı ayrı yazılır. Karıştırılmaz, çünkü sebepleri farklı.

**Veri bağımlılığı** (B, A'nın çıktısına muhtaç):

```text
1 → 3    (3'ün girdisi 1'in çıktısı)
2 → 5
```

**Yazma çakışması** (aynı dosyaya yazıyorlar, mantıken bağımsız olsalar bile):

```text
4 ↔ 6    (ikisi de rapor.md yazıyor)
```

Çakışma varsa hangisinin önce koşacağı belirtilir ve sebebi yazılır.

Hiçbir bağımlılık yoksa bu bölüme "bağımlılık yok, hepsi tek dalgada" yazılır.

---

## Bölüm C · Dalgalar

| Dalga | İşler | Aynı anda mı | Neden |
|---|---|---|---|
| 1 | 1, 2, 4 | evet | hiçbiri birbirini beklemiyor, yazdıkları dosyalar ayrı |
| 2 | 3, 5 | evet | ikisi de dalga 1'i bekliyor, birbirlerini beklemiyor |
| 3 | 6 | tek | 4 ile aynı dosyaya yazıyor |

**Kurallar:**
- Bir dalgada en fazla **4** iş. Fazlaysa dalgayı böl.
- Geri alınamaz işler (silme, gönderme, ödeme, veri tabanı değiştirme) **kendi dalgasında ve sıralı** koşar. Dalga satırına "SIRALI" yazılır.
- Bir dakikadan kısa işler ayrı çalışan almaz, birleştirilir. Birleştirme yapıldıysa hangi işlerin birleştiği yazılır.

---

## Bölüm D · Paralelleştirilmeyenler ve nedeni

Sistemin bilerek sıraya koyduğu işler. Bu bölüm boş kalmamalı; boşsa büyük ihtimalle bir çakışma kaçırılmıştır.

| İş | Neden sıralı |
|---|---|
| | veri bağımlılığı / yazma çakışması / geri alınamaz / çok küçük |

---

## Bölüm E · Tahmini kazanç

Dürüst tahmin. Şişirme.

| | Süre |
|---|---|
| Hepsi sırayla koşarsa | |
| Dalgalarla koşarsa | |
| Kazanç | |

**Kural:** Kazanç, en uzun dalga zincirinden hesaplanır, iş sayısından değil. Dört iş paralel koşuyorsa süre en uzun işin süresidir, dörtte biri değil. Ayrıca her çalışan için kurulum maliyeti vardır; tahmine onu da kat.

Süreleri bilmiyorsan "bilinmiyor" yaz, uydurma.

---

## Bölüm F · Onay

Plan burada biter. Koşmadan önce kullanıcı şunları kontrol eder:

- [ ] İşler doğru anlaşılmış mı
- [ ] "YAZACAĞI dosyalar" sütunu eksiksiz mi
- [ ] Aynı dosyaya yazan iki iş aynı dalgada mı (olmamalı)
- [ ] Geri alınamaz bir iş paralel dalgaya düşmüş mü (düşmemeli)

Onaydan sonra `koş`.
