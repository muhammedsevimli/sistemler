# Koşu raporu · 2026-07-29

> FAZ 3 çıktısı. Plan: `plan/2026-07-29-plan.md`. Ham çıktılar: `isler/*/SONUC.md`.

## Bölüm A · Özet

| | |
|---|---|
| Koşulan iş | 5 |
| Biten | 5 |
| Yapılamayan | 0 |
| Atlanan | 0 |
| Dalga sayısı | 3 |

Koşu başarılı. Elle müdahale gerekmedi, hiçbir çalışan takılmadı.

---

## Bölüm B · İş iş sonuç

### B1 · Script envanteri · **bitti**
- **Ne üretti:** `isler/1-scriptler/SONUC.md`. 9 python scripti, toplam 1182 satır, her biri tek cümlelik özetle.
- **Not:** Docstring'i olmayan tek dosyayı (`_l3_scan.py`) baştan sona okuyup özetlemiş, tahmin etmemiş. Emin olamadığı script yok.

### B2 · Araştırma envanteri · **bitti**
- **Ne üretti:** `isler/2-arastirma/SONUC.md`. 40 markdown dosyası, 4 alt klasör, en büyük 5'i boyutuyla.
- **Not:** Alt klasör dağılımını ayrı belirtmiş: kökte 24, `gemini-analiz/` içinde 15, `raw/heygen/` içinde 1.

### B3 · Sistem listesi · **bitti**
- **Ne üretti:** `isler/3-sistemler/SONUC.md`. 17 sistem klasörü, 17'sinde de README var.
- **Not:** 15 kelimeyi aşan 4 açıklamayı kısalttığını ayrıca yazmış.

### B4 · Repo haritası · **bitti**
- **Ne üretti:** `isler/4-harita/SONUC.md`. Üç envanterin sentezi, üç gözlem.
- **Not:** Kendi sınırını da yazmış: bir gözlemin dayanağı envanter tanımları, sistem klasörlerinin içini açmamış çünkü izolasyon kuralı buna izin vermiyor. Bilmediğini bildiğini söylemiş.

### B5 · Filo defteri girdisi · **bitti**
- **Ne üretti:** `sen/01-isler.md` içindeki filo defterine tek satır ders.
- **Not:** Bu iş `isler/` dışına yazdığı için kendi dalgasında ve sıralı koştu.

---

## Bölüm C · Yapılamayanlar

Hepsi bitti. Başarısız ya da atlanan iş yok.

---

## Bölüm D · Gerçekleşen zamanlama

| Dalga | İşler | Aynı anda mı | Gerçek süre |
|---|---|---|---|
| 1 | 1, 2, 3 | evet | **91 sn** (tek tek: 91, 40, 70) |
| 2 | 4 | tek | 85 sn |
| 3 | 5 | tek, sıralı | birkaç saniye |

| | Süre |
|---|---|
| Gerçek toplam | **~176 sn** |
| Sırayla koşsaydı | ~286 sn (91+40+70+85) |
| Kazanç | 110 sn |

**Dürüst okuma:** genel kazanç **1,63 kat**, 3 kat değil. Dalga 1'in kendi içinde kazancı 2,2 kat (201 sn iş, 91 sn duvar saati) ama dalga 2 tek iş olduğu için seri koştu ve genel oranı aşağı çekti.

Bu, sistemin "kazancı şişirme" kuralının çalıştığı yer. Üç işi paralel koşturmak süreyi üçe bölmüyor; süreyi **en uzun işin süresine** indiriyor. Dalga 1'de en uzun iş 91 saniyeydi, toplam da 91 saniye oldu.

---

## Bölüm E · Çakışma kontrolü

| Kontrol | Sonuç |
|---|---|
| Kendi klasörü dışına yazan çalışan | **yok** |
| Aynı dosyaya iki çalışanın yazması | **yok** |
| Eksik `SONUC.md` | **yok** (4/4 yazıldı) |

Koşu sonrası dosya sistemi tarandı. `isler/` altında tam 4 dosya var, her biri kendi klasöründe. `isler/` dışına yazan çalışan olmadı. İzolasyon bozulmadı, çıktıya güvenilebilir.

---

## Bölüm F · Filo defteri girdisi

Deftere eklenecek satır:

```text
2026-07-29 · Üç okuma işi paralel koştu, çakışma çıkmadı. Genel kazanç 1,63 kat, dalga 1 içinde 2,2 kat. Ders: kazanç en uzun işin süresine bağlı, iş sayısına değil. Tek işlik dalga eklemek genel oranı düşürüyor; mümkünse dalga 2'ye de iş toplamalı.
```
