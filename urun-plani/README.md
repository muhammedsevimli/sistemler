# Ürün Planı

Claude Code'un içinde çalışan bir ürün çözümleyici. Beğendiğin bir ürünün adresini veriyorsun; sistem o siteyi kendisi geziyor (ana sayfa, özellikler, fiyat, doküman), ürünün mantığını söküyor ve senin işine uyarlanmış üç dosya yazıyor: ürün planı, veri şeması, sırayla yapıştıracağın Claude Code prompt seti. Bir klon üreticisi değil. Hangi özelliğin senin ilk sürümüne girmediğini ve nedenini de yazıyor.

## Ne işe yarıyor

Beğendiğin bir araç var, "ben de bunun benzerini kurarım" diyorsun. Sonra ekrana bakıyorsun. Hangi özelliği önce yapacaksın, veriyi nasıl tutacaksın, Claude Code'a ne yazacaksın belli değil. Ya hiç başlamıyorsun ya da ortada bırakıyorsun.

Bu sistem o boşluğu dolduruyor. Ürünün ne yaptığını ve kime yaptığını çıkarıyor, özellikleri çekirdek ve süs diye ayırıyor (hangisi olmadan ürün ürün değil), kullanıcı akışını ve ilk değer anını buluyor, arkada hangi verilerin tutulduğunu çıkarıyor, fiyatın neye göre arttığını okuyor. Sonra bunları senin nişine göre yeniden sıralayıp kurulum sırasına çeviriyor.

## Kurulum

Tek komut (degit kuruluysa):

```text
npx degit muhammedsevimli/sistemler/urun-plani urun-plani
```

Komutla uğraşmak istemezsen: bu klasörü indir, `urun-plani` adıyla bilgisayarına koy. Sonra Claude Code'u bu klasörde aç ve "bunu benim işim için kur" de. `sen/01-profil.md` içine kime hizmet verdiğini yaz, `sen/02-hedef.md` içine bir URL koy, gerisi hazır.

Adım adım anlatım ve teknik olmayanlar için "klasör nasıl açılır" bölümü: kurulum rehberi (Notion teslim sayfası).

## Nasıl çalışıyor

İki faz:

1. **Site okuma.** `sen/02-hedef.md`'ye bir URL yazarsın. Sistem Claude Code'un web araçlarıyla (WebFetch + WebSearch) ana sayfayı, özellikler sayfasını, fiyat sayfasını ve dokümantasyonu kendisi gezer. Gerçekten yazan bilgiyi kaynak linkiyle `cozumleme/` içine yazar. Erişemediği sayfayı "erişilemedi" diye işaretler, içerik uydurmaz.
2. **Senin planına çevirme.** Çözümlemeyi profilinle birleştirir ve `ciktilar/` içine üç dosya yazar: ürün planı (kovalar, uyarlama tablosu, v1 sırası), veri şeması (tablolar ve ilişkiler), prompt seti (sırayla yapıştırılacak, her biri kabul kriterli).

## Dosya yapısı

```text
urun-plani/
  CLAUDE.md            sistemin beyni (Claude Code otomatik okur)
  AGENTS.md            aynı içerik (Codex, Cursor, Windsurf okur)
  CALISTIR.md          iki komut: oku + plana çevir
  sen/
    01-profil.md       kime hizmet veriyorsun, ne kurabilirsin, sınırların
    02-hedef.md        hedef url + incelenenler defteri
  format/
    kurallar.md        çekirdek/süs testi, kopyalama koruması, anti uydurma
    cozumleme-format.md  site okuma çıktısının yapısı
    plan-format.md     üç çıktının yapısı
  cozumleme/           sistemin siteden çektiği gerçek bilgi buraya YAZILIR
  ciktilar/            ürün planı + veri şeması + prompt seti buraya yazılır
```

## Bu bir klon üreticisi değil

Sistem hiçbir yerde "aynısını kur" demez. Marka, logo, tasarım, sayfa metni ve lisanslı kaynak kod kopyalanmaz listesine yazılır. Kopyalanabilen tek şey mantıktır: hangi işi hangi sırayla çözdüğü, hangi verileri tuttuğu, kullanıcıyı ilk değere nasıl götürdüğü. Sistem senin profilini okur ve iki tablo kurar: hedefte var ama senin nişinde gereksiz olanlar, hedefte yok ama senin nişinde şart olanlar. İkinci tablo senin ürününün var olma sebebidir ve boş bırakılmaz.

## Dürüst sınır

- Sistem yalnız herkese açık sayfaları okur. Giriş isteyen ya da ücretli duvar arkasındaki sayfa okunmaz. Bazı siteler otomatik okumaya kapalıdır (bot koruması, 403); sistem dener, açamazsa açamadığını yazar.
- Sistem özellik ve fiyat uydurmaz. Fiyat sayfasında rakam yoksa "fiyat bilgisi alınamadı" yazar.
- Veri şeması bir çıkarımdır, ürünün gerçek veritabanı değildir. Her tablonun yanında çıkarımın dayanağı yazar.
- Plan sana kurulum sırası verir, talep garantisi vermez. Bir ürünün neden tuttuğu çoğu zaman sitesinde yazmaz.

## Muhammed Sevimli

AI ile gerçek satış ve büyüme sistemleri kuruyorum. Bir yerde takılırsan yaz, bakarım.

- Instagram: https://instagram.com/msevimli_
- X: https://x.com/_msevimli
- Threads: https://threads.net/@msevimli_
- YouTube: https://youtube.com/@msevimli
- E-posta: hey@muhammedsevimli.com

Claude Code ile inşa edildi.
