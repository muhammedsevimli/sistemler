# ÇALIŞTIR · İki Komut

> Sistem iki adımda çalışır. Bu dosyayı açıp ilgili komutu kopyala, Claude Code'a yapıştır.
> Sen hiçbir sayfa açıp kopyalamıyorsun. `sen/02-hedef.md`'ye bir URL yazarsın, siteyi sistem geziyor.
> Claude Code `CLAUDE.md` sayesinde profil, hedef, kurallar ve format dosyalarını zaten okuyacak.

## Adım 1 · Ürünü oku ve mantığını çıkar (kopyala)

```
sen/02-hedef.md'deki ürünü oku ve mantığını çıkar.

kurallar:
- sen/01-profil.md ve sen/02-hedef.md dosyalarını oku.
- web araçlarınla (WebFetch + WebSearch) siteyi kendin gez:
  - ana sayfayı WebFetch ile çek: ne yapıyor, kime hitap ediyor, hangi özellikler yazıyor.
  - özellikler sayfasını dene (/features, /product, /ozellikler).
  - fiyat sayfasını dene (/pricing, /fiyat, /plans). fiyat neye göre artıyor, hangi rakamlar literal yazıyor.
  - dokümantasyonu dene (/docs, /help, /api). doküman başlıkları veri modelinin en dürüst kaynağı.
  - açık kaynaksa lisans adını aynen al.
- bir sayfaya erişemezsen "erişilemedi" yaz ve sebebini koy. o sayfadan geleceğini varsaydığın bilgiyi uydurma.
- fiyat sayfası yoksa ya da rakam yazmıyorsa "fiyat bilgisi alınamadı" yaz. rakam tahmin etme.
- her satıra kaynak url koy. sayfada görmediğin özelliği yazma.
- siteden anlaşılmayanları "belirsizler" başlığında topla, boş bırakma.
- çıktıyı format/cozumleme-format.md yapısında cozumleme/cozumleme-YYYY-AA-GG.md dosyasına yaz.
```

Sistem sayfaları kendisi gezer ve gerçekten yazan bilgiyi `cozumleme/` içine yazar. Bu klasöre sen elle bir şey koymuyorsun. Nasıl doluyor: `cozumleme/OKU-nasil-doluyor.md`.

## Adım 2 · Kendi planına çevir (kopyala)

```
cozumleme klasöründeki çözümlemeyi benim ürün planıma çevir.

kurallar:
- önce profil + hedef + kurallar + format + çözümleme dosyalarını okuduğunu tek satırla söyle.
- her özelliği format/kurallar.md'deki üç soruya sok (çıkarma testi, ilk değer testi, sıklık testi) ve dört kovadan birine koy: ÇEKİRDEK v1, DESTEK v1.5, SÜS, GİRME. her satıra tek cümle gerekçe. çekirdek en fazla 7 madde.
- nişe uyarlama tablosunu kur: hedefte var ama benim nişimde gereksiz olanlar, hedefte yok ama benim nişimde şart olanlar. ikinci sütunu boş bırakma, profilimden çıkar.
- kullanıcı akışını yaz: kayıt, ilk değer anı, tekrar gelme sebebi. benim sürümümde ilk değer anına kaç adımda varıyorum.
- veri şemasını çıkar: hangi nesneler var, alanları ne, neyle ilişkili. her tablonun dayanağını yaz (hangi sayfada hangi ifade). sonra benim v1'im için sadeleşmiş şemayı yaz, 6 tabloyu geçme.
- fiyat mantığını çıkar: neye göre artıyor, bu ölçü benim nişimde çalışır mı, çalışmıyorsa bana uyan ölçü ne.
- claude code prompt setini yaz: 6 ile 10 arası, her prompt tek iş yapıyor, her biri bir öncekinin çıktısına bağlanıyor, her birinin sonunda "bitince şunu görmelisin" satırı var. ilk prompt şemayı kurar, son prompt yayına alır.
- kopyalanmaz listesini yaz: marka, logo, tasarım, sayfa metni, telifli içerik, lisanslı kod. lisans varsa adını yaz.
- "aynısını kur", "klonla", "birebir yap" deme. ben kendi nişime uyarlanmış bir ürün kuruyorum.
- "sen neyi farklı yapıyorsun" başlığını boş bırakma, en az bir somut ayrışma yaz.
- özellik ve fiyat uydurma. emin olmadığına "belirsiz" de. em dash kullanma, motivasyon dili yok.
- üç dosyayı ciktilar klasörüne yaz: YYYY-AA-GG-urun-plani.md, YYYY-AA-GG-veri-semasi.md, YYYY-AA-GG-promptlar.md.
```

## Tek komut (acele edince: hem oku hem plana çevir)

```
sen/02-hedef.md'deki ürünü web araçlarınla kendin gez (ana sayfa, özellikler, fiyat, doküman), mantığını çıkar ve benim planıma çevir.
çözümlemeyi cozumleme klasörüne, üç çıktıyı (ürün planı, veri şeması, prompt seti) ciktilar klasörüne yaz. kurallar ve format dosyalarına uy. profilimdeki nişe uyarla, klon önerme, erişemediğin sayfayı "erişilemedi" işaretle, fiyat ve özellik uydurma.
```

## Not
Tek ürün ver. İki ürünü aynı koşuda incelersen plan bulanıklaşır; ikinciyi ayrı koşuda incele, sistem `sen/02-hedef.md`'deki incelenenler defterinden ikisini birlikte okur.
`sen/01-profil.md` ne kadar dolu olursa plan o kadar senin olur. Profil boşsa çıktı genel bir ürün planına döner.
Çıkan prompt setini sırayla kullan. Bir promptun kabul satırını göremediysen bir sonrakine geçme, o adımı düzelt.
