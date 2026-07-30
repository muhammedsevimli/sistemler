# Ajan Filosu · Otomatik Okuma Kuralı

> Bu dosya, bu klasörde açtığın her Claude Code oturumunun BAŞINDA otomatik okunur.
> Sen hiçbir şey ayarlamıyorsun. Claude Code bu klasörde çalışırken bu dosyayı kendiliğinden yükler.
> Amaç: işleri tek tek sıraya dizip beklemeyi bırakmak. Sen yapılacakları bir dosyaya yazarsın; sistem hangisinin hangisini beklediğini çözer, beklemeyenleri aynı anda ayrı çalışanlara dağıtır, her biri kendi klasöründe çalışır ve sonunda tek rapor bırakır.

## Bu sistemin duruşu (değişmez)

Bu sistem **her şeyi paralelleştirmez.** Paralellik bedava değil: her iş için ayrı bir çalışan açmak kurulum maliyeti getirir ve iki çalışan aynı dosyaya dokunursa iş bozulur.

Sistemin asıl işi **bağımlılık haritasını doğru çıkarmak.** Paralellik onun sonucu. Bir işin gerçekten bağımsız olduğundan emin değilse sıraya koyar. Yanlış paralelleştirme, sıralı çalışmaktan pahalıdır çünkü hatayı sonradan bulursun.

## Girdi

`sen/01-isler.md` dosyasına yapılacakları yazıyorsun. Serbest biçim, madde madde. Sıra vermiyorsun, bağımlılık yazmıyorsun. O senin işin değil.

## FAZ 1 · `planla` dendiğinde

`sen/01-isler.md` ve `format/plan-format.md` dosyalarını oku. Sonra:

1. **Her işi tek cümleye indir.** Belirsizse kullanıcıya sor, tahmin etme. "Siteyi düzelt" bir iş değil, iş listesi.
2. **Her iş için üç şey belirle:**
   - **Girdisi ne:** hangi dosya, hangi bilgi, hangi başka işin çıktısı.
   - **Çıktısı ne:** hangi dosyayı yazacak, hangi klasöre.
   - **Dokunduğu yer:** hangi dosyalara YAZACAK. Okuma sayılmaz, yalnız yazma sayılır.
3. **Bağımlılık haritasını çıkar.** İki tür bağımlılık var, ikisi de sıraya sokar:
   - **Veri bağımlılığı:** B, A'nın çıktısına muhtaç.
   - **Yazma çakışması:** A ve B aynı dosyaya yazacak. Mantıken bağımsız olsalar bile PARALELLEŞTİRME. Bu kural veri bağımlılığından daha sıkıdır çünkü sessizce bozar.
4. **Dalgalara ayır.** Dalga 1 = hiçbir şeyi beklemeyen işler. Dalga 2 = yalnız dalga 1'i bekleyenler. Böyle devam.
5. **Planı yaz:** `plan/YYYY-AA-GG-plan.md`, `format/plan-format.md` yapısında.

**Planı yazdıktan sonra DUR.** Kullanıcı okumadan koşma. Bağımlılık haritası yanlışsa en ucuz düzeltme anı burasıdır.

## FAZ 2 · `koş` dendiğinde

`plan/` klasöründeki en yeni planı oku. Sonra dalga dalga ilerle:

1. **Her iş için klasör aç:** `isler/<slug>/`. İçine `BRIEF.md` yaz: iş ne, girdisi ne, çıktısı ne, nereye yazacak, bitince ne döndürecek.
2. **Dalgadaki işleri AYNI ANDA başlat.** Her iş ayrı bir çalışan. Tek mesajda hepsini birden çağır, sırayla değil.
3. **Her çalışan YALNIZ kendi klasörüne yazar.** `isler/<slug>/` dışına çıkmak yasak. Bu izolasyon kuralı, paralelliğin çalışmasının tek sebebi.
4. **Her çalışan bitince `isler/<slug>/SONUC.md` yazar:** ne yaptı, ne üretti, nerede takıldı, neyi yapamadı.
5. **Dalga bitmeden sonrakine geçme.** Dalga 2'nin girdisi dalga 1'in çıktısı.
6. **Bir çalışan başarısız olursa dalgayı durdurma.** Diğerleri devam eder. Başarısız işi raporda "yapılamadı" diye işaretle, sebebini yaz, ona bağlı sonraki işleri "atlandı" yap.

## FAZ 3 · Rapor

Bütün dalgalar bitince `ciktilar/YYYY-AA-GG-rapor.md` yaz, `format/rapor-format.md` yapısında. Her `isler/<slug>/SONUC.md` dosyasını oku ve birleştir.

Rapor tek sayfa olacak. Kullanıcı on ayrı klasör gezmeyecek, bir dosya okuyup ne olduğunu anlayacak.

## Değişmez üretim kuralları

- **Şüphedeysen sıraya koy.** Bir işin bağımsız olduğundan emin değilsen paralelleştirme. Yanlış paralellik sessizce bozar, sıralılık yalnız yavaşlatır.
- **Aynı dosyaya yazan iki iş asla aynı dalgada olmaz.** İstisnası yok.
- **Geri alınamaz işleri paralelleştirme.** Dosya silme, veri tabanı değiştirme, dışarıya bir şey gönderme (mail, post, ödeme) tek tek ve sırayla yapılır. Bunları ayrı bir dalgaya al ve plana "bu dalga sıralı" diye yaz.
- **Çalışan sayısını sınırla.** Aynı anda en fazla 4 iş. Daha fazlası makineyi ve modeli boğar, hız kazancı tersine döner.
- **Küçük işleri paralelleştirme.** Bir iş bir dakikadan kısaysa ayrı çalışan açmanın maliyeti kazancından fazla. Onları tek bir işte birleştir.
- **İzolasyonu bozma.** Çalışan kendi klasörü dışına yazamaz. Ortak bir şey gerekiyorsa o iş dalga dışına, sıralı bölüme alınır.
- **Uydurma rapor yazma.** Bir çalışan bitiremediyse "bitti" yazma. `SONUC.md` boşsa raporda "çıktı üretmedi" yaz.
- **Em dash (uzun tire) çıktının HİÇBİR yerinde yok.** Ayraç gerekirse nokta, virgül, iki nokta ya da orta nokta (·).

## Çıktı nereye yazılır

- Plan: `plan/YYYY-AA-GG-plan.md`
- Her işin ham çıktısı: `isler/<slug>/SONUC.md`
- Birleşik rapor: `ciktilar/YYYY-AA-GG-rapor.md`

## Filo defteri (kalıcı hafıza)

Bir koşu bittikten sonra, gerçekte ne kadar sürdüğünü ve neyin yanlış planlandığını `sen/01-isler.md` en altındaki "filo defteri" bölümüne tek satır yaz. Özellikle şunu yaz: paralel sandığın ama aslında çakışan işler. Sonraki planlar bu defteri okur ve aynı hatayı tekrarlamaz.
