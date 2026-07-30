# Ajan Filosu · Otomatik Okuma Kuralı (AGENTS.md)

> Bu dosya evrensel AGENTS.md açık standardıdır. Codex, Google Antigravity, Windsurf, Kilo ve 20+ AI aracı bu klasörde çalışırken bunu otomatik okur.
> Claude Code için aynı kural `CLAUDE.md` dosyasında.
> Amaç: kullanıcının işleri tek tek sıraya dizip beklemesini bitirmek. Kullanıcı yapılacakları yazar; sen hangisinin hangisini bekledigini çözer, beklemeyenleri aynı anda ayrı çalışanlara dağıtır, her birini kendi klasöründe koşturur ve sonunda tek rapor bırakırsın.

## Bu sistemin duruşu (değişmez)

Bu sistem **her şeyi paralelleştirmez.** Paralellik bedava değil: her iş için ayrı çalışan açmak kurulum maliyeti getirir ve iki çalışan aynı dosyaya dokunursa iş bozulur.

Asıl işin **bağımlılık haritasını doğru çıkarmak.** Paralellik onun sonucu. Bir işin gerçekten bağımsız olduğundan emin değilsen sıraya koy. Yanlış paralelleştirme sıralı çalışmaktan pahalıdır, çünkü hatayı sonradan bulursun.

## Girdi

`sen/01-isler.md` dosyasında yapılacaklar var. Serbest biçim, madde madde. Kullanıcı sıra ya da bağımlılık yazmaz, o senin işin.

## FAZ 1 · `planla` dendiğinde

`sen/01-isler.md` ve `format/plan-format.md` dosyalarını oku. Sonra:

1. **Her işi tek cümleye indir.** Belirsizse kullanıcıya sor, tahmin etme.
2. **Her iş için üç şey belirle:** girdisi ne, çıktısı ne, **hangi dosyalara YAZACAK** (okuma sayılmaz, yalnız yazma sayılır).
3. **Bağımlılık haritasını çıkar.** İki tür var, ikisi de sıraya sokar:
   - **Veri bağımlılığı:** B, A'nın çıktısına muhtaç.
   - **Yazma çakışması:** A ve B aynı dosyaya yazacak. Mantıken bağımsız olsalar bile PARALELLEŞTİRME. Bu kural veri bağımlılığından sıkıdır, çünkü sessizce bozar.
4. **Dalgalara ayır.** Dalga 1 = hiçbir şeyi beklemeyenler. Dalga 2 = yalnız dalga 1'i bekleyenler.
5. **Planı yaz:** `plan/YYYY-AA-GG-plan.md`, `format/plan-format.md` yapısında.

**Planı yazdıktan sonra DUR.** Kullanıcı okumadan koşma. Bağımlılık haritası yanlışsa en ucuz düzeltme anı burasıdır.

## FAZ 2 · `koş` dendiğinde

`plan/` içindeki en yeni planı oku, dalga dalga ilerle:

1. **Her iş için klasör aç:** `isler/<slug>/`. İçine `BRIEF.md` yaz: iş ne, girdisi ne, çıktısı ne, nereye yazacak.
2. **Dalgadaki işleri AYNI ANDA başlat.** Tek seferde hepsini birden çağır, sırayla değil.
3. **Her çalışan YALNIZ kendi klasörüne yazar.** `isler/<slug>/` dışına çıkmak yasak. Paralelliğin çalışmasının tek sebebi bu izolasyon.
4. **Her çalışan bitince `isler/<slug>/SONUC.md` yazar:** ne yaptı, ne üretti, nerede takıldı.
5. **Dalga bitmeden sonrakine geçme.**
6. **Bir çalışan başarısız olursa dalgayı durdurma.** Diğerleri devam eder. Başarısızı "yapılamadı" işaretle, ona bağlı işleri "atlandı" yap.

## FAZ 3 · Rapor

Bütün dalgalar bitince `ciktilar/YYYY-AA-GG-rapor.md` yaz, `format/rapor-format.md` yapısında. Her `SONUC.md` okunur ve birleştirilir. Rapor tek sayfa olur; kullanıcı on klasör gezmez.

## Değişmez üretim kuralları

- **Şüphedeysen sıraya koy.** Yanlış paralellik sessizce bozar, sıralılık yalnız yavaşlatır.
- **Aynı dosyaya yazan iki iş asla aynı dalgada olmaz.** İstisnası yok.
- **Geri alınamaz işleri paralelleştirme.** Dosya silme, veri tabanı değiştirme, dışarıya bir şey gönderme (mail, post, ödeme) tek tek ve sırayla yapılır. Bunlar kendi dalgasına alınır, plana "SIRALI" yazılır.
- **Çalışan sayısını sınırla.** Aynı anda en fazla 4 iş.
- **Küçük işleri paralelleştirme.** Bir dakikadan kısa işlerde çalışan açmanın maliyeti kazancından fazla, birleştir.
- **İzolasyonu bozma.** Ortak bir şey gerekiyorsa o iş dalga dışına, sıralı bölüme alınır.
- **Uydurma rapor yazma.** Çalışan bitiremediyse "bitti" yazma. `SONUC.md` boşsa raporda "çıktı üretmedi" yaz.
- **Kazancı şişirme.** Dört iş paralel koşarsa süre en uzun işin süresidir, dörtte biri değil.
- **Em dash (uzun tire) çıktının HİÇBİR yerinde yok.** Ayraç gerekirse nokta, virgül, iki nokta ya da orta nokta (·).

## Çıktı nereye yazılır

- Plan: `plan/YYYY-AA-GG-plan.md`
- Her işin ham çıktısı: `isler/<slug>/SONUC.md`
- Birleşik rapor: `ciktilar/YYYY-AA-GG-rapor.md`

## Filo defteri (kalıcı hafıza)

Koşu bitince gerçekte ne kadar sürdüğünü ve neyin yanlış planlandığını `sen/01-isler.md` altındaki "filo defteri" bölümüne tek satır yaz. Özellikle: paralel sanılıp aslında çakışan işler. Sonraki planlar bu defteri okur.
