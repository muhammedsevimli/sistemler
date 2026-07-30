# Test sonucu · sistem gerçekten çalıştırıldı · 29 Tem 2026

> Bu dosya, sistemin tanıtıldığı gibi çalıştığının kanıtıdır. Aşağıdaki her şey bu makinede gerçekten koştu.
> Test edilen şey benzetim değil: gerçek işler, gerçek paralel çalışanlar, gerçek süreler.

## Test kurgusu

Beş işlik bir liste kuruldu. Liste bilerek şu üç şeyi içerecek biçimde tasarlandı:

1. **Üç gerçekten bağımsız iş** (paralellik test edilsin)
2. **Bir veri bağımlılığı** (zincir test edilsin: 4 numara, 1-2-3'ün çıktısına muhtaç)
3. **Bir izolasyon sınırı ihlali** (5 numara `isler/` dışına yazıyor, sistem onu sıraya almalı)

İşler gerçek repo üzerinde okuma işleriydi, hiçbir şey bozulmadı.

## FAZ 1 gerçekten koştu

Plan üretildi: `plan/2026-07-29-plan.md`.

Sistem doğru ayırdı:
- **Dalga 1:** iş 1, 2, 3 · paralel · farklı klasörlere yazıyorlar, çakışma yok
- **Dalga 2:** iş 4 · tek · üçünün çıktısına muhtaç
- **Dalga 3:** iş 5 · **SIRALI** · `isler/` dışına, ortak bir dosyaya yazıyor

5 numaralı işi doğru yakaladı. Mantıken tek başına ve bağımsız görünüyordu ama ortak dosyaya yazdığı için kendi sıralı dalgasına alındı. İzolasyon kuralının çalıştığı yer burası.

## FAZ 2 gerçekten koştu

Dalga 1'de **üç çalışan aynı anda** başlatıldı. Tek tek süreleri:

| İş | Süre |
|---|---|
| 1 · script envanteri | 91 sn |
| 2 · araştırma envanteri | 40 sn |
| 3 · sistem listesi | 70 sn |

**Duvar saati: 91 saniye.** Toplamları 201 saniye. Yani dalga 1 içinde kazanç **2,2 kat**.

Dalga 2 (iş 4) 85 saniye sürdü ve dalga 1'in üç çıktısını gerçekten okudu. Ürettiği sentez, üç envanterin hiçbirinde tek başına bulunmayan gözlemler içeriyor. Zincir çalıştı.

## Çıktılar gerçek

Dört çalışan dört dosya üretti, hepsi dolu:

| Dosya | İçerik |
|---|---|
| `isler/1-scriptler/SONUC.md` | 9 script, 1182 satır, her biri özetli |
| `isler/2-arastirma/SONUC.md` | 40 markdown, 4 alt klasör, en büyük 5 |
| `isler/3-sistemler/SONUC.md` | 17 sistem klasörü, 17/17 README |
| `isler/4-harita/SONUC.md` | üçünün sentezi, üç gözlem |

Çalışanlar dürüstlük kurallarına da uydu: biri docstring'i olmayan dosyayı tahmin etmek yerine baştan sona okudu, biri kısalttığı satırları ayrıca belirtti, biri kendi sınırını yazdı ("sistem klasörlerinin içini açmadım çünkü izolasyon kuralı izin vermiyor").

## İzolasyon doğrulandı

Koşu bitince dosya sistemi tarandı.

| Kontrol | Sonuç |
|---|---|
| `isler/` altındaki dosya sayısı | 4, her biri kendi klasöründe |
| Kendi klasörü dışına yazan çalışan | **yok** |
| Aynı dosyaya iki çalışanın yazması | **yok** |
| Eksik `SONUC.md` | **yok** |

Dört çalışan, dört dosya, sıfır taşma.

## Dürüst rakam

| | Süre |
|---|---|
| Gerçek toplam | ~176 sn |
| Sırayla koşsaydı | ~286 sn |
| **Genel kazanç** | **1,63 kat** |

**Üç kat değil.** Rapor bunu şişirmedi, 1,63 yazdı ve sebebini de yazdı: dalga 2 tek iş olduğu için seri koştu ve genel oranı aşağı çekti. Dalga 1'in kendi içindeki kazanç 2,2 kattı.

Bu, sistemin "kazancı şişirme" kuralının çalıştığı yer. Paralellik süreyi iş sayısına bölmüyor, **en uzun işin süresine** indiriyor.

## Dürüst notlar

- **Bu sistem her şeyi hızlandırmaz.** Tek uzun işin varsa hiçbir şey kazandırmaz. Kazanç yalnız birbirini beklemeyen birden çok iş olduğunda çıkar.
- **Test işleri okuma işiydi.** Yazma işlerinde çakışma riski gerçek, sistem de zaten o yüzden yazma çakışmasını veri bağımlılığından daha sıkı kuralla ele alıyor. Ama bu testte gerçek bir yazma çakışması senaryosu koşulmadı; kural plan aşamasında doğrulandı, koşu aşamasında değil.
- **Dört çalışan sınırı test edilmedi.** Bu koşuda en fazla üç çalışan aynı andaydı.
- **Bir çalışanın başarısız olma senaryosu test edilmedi.** Dördü de bitti. "Yapılamadı" ve "atlandı" yolları kodda ve talimatta tanımlı ama bu koşuda tetiklenmedi.
- **Süreler bu makineye ve o anki yüke özel.** Başka bir makinede farklı çıkar. Oran (kazanç kat sayısı) daha anlamlı, mutlak saniye değil.
