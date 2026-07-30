# Ajan Filosu

İşleri tek tek sıraya dizip beklemeyi bitiren sistem. Yapılacakları bir dosyaya yazıyorsun; sistem hangisinin hangisini beklediğini çözüyor, beklemeyenleri aynı anda ayrı çalışanlara dağıtıyor, her biri kendi klasöründe koşuyor ve sonunda tek rapor bırakıyor.

**Sistem her şeyi paralelleştirmiyor.** Asıl işi bağımlılığı doğru çözmek; paralellik onun sonucu.

## Ne işe yarıyor

Tek pencerede çalışıyorsun. Bir iş bitene kadar oturup ekrana bakıyorsun, bitince sıradakini başlatıyorsun. Akşam olduğunda üç işten biri bitmiş oluyor. Oysa o üç işin ikisinin birbiriyle hiçbir alakası yok.

Sistem şunu yapıyor:

1. İşleri okuyup her biri için üç şey çıkarıyor: girdisi ne, çıktısı ne, **hangi dosyalara yazacak**.
2. İki tür bağımlılığı ayrı ayrı işaretliyor:
   - **Veri bağımlılığı:** B, A'nın çıktısına muhtaç.
   - **Yazma çakışması:** ikisi aynı dosyaya yazacak. Mantıken bağımsız olsalar bile paralelleştirmiyor.
3. Dalgalara ayırıyor ve **duruyor.** Planı okuyup onaylamadan koşmuyor.
4. Onaydan sonra dalgadaki işleri aynı anda başlatıyor. Her çalışan yalnız kendi klasörüne yazıyor.
5. Bitince tek sayfalık rapor bırakıyor. On klasör gezmiyorsun.

**Yapmadığı şey:** her şeyi hızlandırmıyor. Tek uzun işin varsa hiçbir şey kazandırmıyor. Geri alınamaz işleri (silme, gönderme, ödeme) asla paralel koşturmuyor. Kazancı da şişirmiyor.

## Kurulum

```bash
npx degit muhammedsevimli/sistemler/ajan-filosu ajan-filosu
```

Ya da yeşil **Code → Download ZIP**. Komut satırıyla uğraşmak istemiyorsan Claude Code'u aç ve şu adresi ver, "bunu benim için kur" de:

```text
github.com/muhammedsevimli/sistemler/tree/main/ajan-filosu
```

## Çalıştırma

1. `sen/01-isler.md` dosyasına yapılacakları yaz. **Sıra verme, bağımlılık yazma.**
2. Claude Code'u bu klasörde aç, `planla` yaz. Plan `plan/` klasörüne düşüyor ve sistem duruyor.
3. Planı oku. Aynı dosyaya yazan iki iş aynı dalgada mı, geri alınamaz bir iş paralel dalgaya düşmüş mü, bak.
4. Sorun yoksa `koş` yaz.

Rapor `ciktilar/` klasörüne düşüyor. Ayrıntı: `CALISTIR.md`.

**Plan aşamasındaki duruş bilerek var.** Bağımlılık haritası yanlışsa en ucuz düzeltme anı orasıdır. Koştuktan sonra bulursan iş çoktan bozulmuştur.

## Gerçekten çalışıyor mu

Evet, ölçümüyle. Tamamı `TEST-SONUCU.md` içinde.

Beş işlik bir liste kuruldu: üç gerçekten bağımsız iş, bir veri bağımlılığı, bir de izolasyon sınırını ihlal eden iş.

**Sistem doğru ayırdı.** Dalga 1'e üç bağımsız işi koydu, dalga 2'ye onların çıktısına muhtaç olanı, dalga 3'e de `isler/` dışına yazdığı için bilerek sıraya aldığı işi.

**Dalga 1'de üç çalışan aynı anda koştu.** Tek tek süreleri 91, 40 ve 70 saniye. Duvar saati **91 saniye**, toplamları 201. Dalga içinde **2,2 kat** kazanç.

**Bağımlılık zinciri çalıştı.** Dalga 2'deki iş üç çıktıyı okudu ve hiçbirinde tek başına bulunmayan gözlemler üretti.

**İzolasyon tuttu.** Koşu sonrası dosya sistemi tarandı: 4 çalışan, 4 dosya, her biri kendi klasöründe, kendi klasörü dışına yazan **yok**, aynı dosyaya iki çalışanın dokunması **yok**.

### Dürüst rakam

| | Süre |
|---|---|
| Gerçek toplam | ~176 sn |
| Sırayla koşsaydı | ~286 sn |
| **Genel kazanç** | **1,63 kat** |

**Üç kat değil.** Rapor bunu şişirmedi ve sebebini yazdı: dalga 2 tek iş olduğu için seri koştu ve genel oranı aşağı çekti. Dalga 1'in kendi içindeki kazanç 2,2 kattı.

Paralellik süreyi iş sayısına bölmüyor, **en uzun işin süresine** indiriyor.

### Test edilmeyenler

Dürüstlük için: dört çalışan sınırı, bir çalışanın başarısız olma senaryosu ve gerçek bir yazma çakışması bu koşuda tetiklenmedi. Kurallar tanımlı, plan aşamasında doğrulandı, koşu aşamasında değil.

Örnek raporun tamamı: `ORNEK-CIKTI.md`. Plan: `plan/2026-07-29-plan.md`.

## Klasör yapısı

```text
ajan-filosu/
  CLAUDE.md              Claude Code otomatik okur
  AGENTS.md              Codex, Windsurf, Kilo ve 20+ araç okur
  .cursor/rules/         Cursor okur
  CALISTIR.md            iki komut, arada bir duruş
  format/plan-format.md  plan iskeleti (A-F bölümleri)
  format/rapor-format.md rapor iskeleti (A-F bölümleri)
  sen/01-isler.md        yapılacaklar, filo defteri
  plan/                  bağımlılık planları
  isler/                 her iş kendi klasöründe, çalışanlar buraya yazar
  ciktilar/              birleşik raporlar
  ORNEK-CIKTI.md         gerçek bir koşu raporu
  TEST-SONUCU.md         uçtan uca test kaydı, ölçümlü
```

## Neden her şey paralel değil

| Durum | Neden sıraya konur |
|---|---|
| İki iş aynı dosyaya yazıyor | Aynı anda yazarlarsa biri diğerini eziyor. Sessizce bozuluyor. |
| B, A'nın çıktısına muhtaç | Girdisi hazır olmadan koşarsa boşa koşuyor. |
| İş geri alınamaz | Silme, gönderme, ödeme. Tek tek ve sırayla, gözün üstünde. |
| İş bir dakikadan kısa | Ayrı çalışan açmanın maliyeti kazancından fazla. |

Şüphedeyse sıraya koyar. Yanlış paralellik sessizce bozar, sıralılık yalnız yavaşlatır.

## Desteklenen araçlar

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/` |
| Codex, Google Antigravity, Windsurf, Kilo ve 20+ araç | `AGENTS.md` |

---

Bu sistemi **Muhammed Sevimli** kurdu. AI ile gerçek satış ve büyüme sistemleri. Kurarken takılırsan ya da adım adım anlatımlı rehber istersen yaz:

- Web: https://muhammedsevimli.com
- X: https://x.com/_msevimli
- Instagram: https://instagram.com/msevimli_
- Threads: https://threads.com/@msevimli_
- YouTube: https://youtube.com/@msevimli
- E-posta: hey@muhammedsevimli.com

## Lisans

[MIT](LICENSE)
