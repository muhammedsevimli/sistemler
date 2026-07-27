# Fiyat Çözücü

Claude Code'un içinde çalışan, rakip verisiyle fiyat kuran bir sistem. Ürününü ve rakiplerini bir dosyaya yazıyorsun; sistem rakiplerin herkese açık fiyat sayfalarını kendisi açıyor, paketlerini ve rakamlarını kaynağıyla çekiyor, hangi özelliğin hangi seviyede verildiğini matrise döküyor, sektörün neye göre ücret aldığını çıkarıyor ve sana gerekçeli bir üç paket yapısı veriyor. Fiyatını gizleyen rakip için rakam uydurmuyor. Sen fiyat yapıştırmıyorsun.

## Ne işe yarıyor

Ürün ya da hizmet hazır, fiyatı tavana bakarak koyuyorsun. Ucuz yazınca hem iş değersiz görünüyor hem kendini sömürüyorsun, pahalı yazınca kimse dönmüyor. Rakibin ne aldığını tam bilmiyorsun; bilsen bile kendi paketini nasıl kuracağını bilmiyorsun.

Bu sistem rakiplerin fiyat sayfalarını gerçekten okur, paketleri kaynağıyla çıkarır, özellik x paket matrisi kurar, değer eksenini gerekçesiyle seçer, üç paket önerir ve her rakamın altına dayanağını yazar. Sana emir vermez, gelir vaat etmez.

## Kurulum

Tek komut (degit kuruluysa):

```text
npx degit muhammedsevimli/sistemler/fiyat-cozucu fiyat-cozucu
```

Komutla uğraşmak istemezsen: bu klasörü indir, `fiyat-cozucu` adıyla bilgisayarına koy. Sonra Claude Code'u bu klasörde aç ve "bunu benim işim için kur" de. `sen/01-urun.md` içine ne sattığını ve maliyetini, `sen/02-rakipler.md` içine rakiplerini yaz, gerisi hazır.

Adım adım anlatım ve teknik olmayanlar için "klasör nasıl açılır" bölümü: kurulum rehberi (Notion teslim sayfası).

## Nasıl çalışıyor

İki faz:

1. **Fiyat çekimi.** `sen/02-rakipler.md` dosyasına rakiplerinin ismini yazarsın. Sistem Claude Code'un web araçlarıyla (WebFetch + WebSearch) fiyat sayfalarını kendisi açar; paket adı, rakam, para birimi, faturalama dönemi, fiyatın neye göre arttığı ve dahil özellikler kaynak URL'siyle `veri/` klasörüne iner. URL yanlışsa doğrusunu arar. Fiyat sayfada yoksa `fiyat açık değil` yazar, rakam uydurmaz.
2. **Analiz.** Çekilen veriden özellik x paket matrisi, değer ekseni seçimi, üç paket önerisi (her paket için bilerek dışarıda bırakılanlarla birlikte), Türkiye uyarlaması seçenekleri ve zam protokolü çıkar. Çıktı `ciktilar/` klasörüne yazılır.

## Dosya yapısı

```text
fiyat-cozucu/
  CLAUDE.md            sistemin beyni (Claude Code otomatik okur)
  AGENTS.md            aynı içerik, evrensel ajan standardı (Codex, Cursor, Windsurf okur)
  CALISTIR.md          iki komut: fiyatları çek + raporu çıkar
  sen/
    01-urun.md         ne satıyorsun, kime, maliyetin, kapasiten, yapmadıkların
    02-rakipler.md     rakip listesi + yerel referanslar + fiyat defteri
  format/
    kurallar.md        veri kalite etiketleri, değer ekseni cetveli, paket kurma kuralları
    rapor-format.md    raporun yapısı
  veri/                sistemin çektiği gerçek fiyatlar buraya YAZILIR
  ciktilar/            fiyat raporu buraya yazılır
```

## Dürüst sınır

- **Sistem talep ölçmez.** Rakip yapısını ve senin maliyetini okur. Kaç kişinin ne kadar ödeyeceğini bilmez ve tahmin etmez. Gelir projeksiyonu, dönüşüm oranı ve "şu fiyatı koyarsan şu kadar satarsın" cümlesi bu sistemde yasaktır.
- **Fiyatını göstermeyen rakip için rakam üretmez.** O satır `fiyat açık değil` kalır ve hiçbir ortalamaya girmez. Sayfaya erişilemezse `kaynak yok` yazar.
- **Kur uydurmaz.** Farklı para birimlerini birbirine çevirmez. TL önerisi ancak TL fiyat gösteren yerel kaynak eklersen çıkar.
- **Sayfa tarih damgalıdır.** Rakip fiyatını değiştirmiş olabilir. Ayda bir yeniden çalıştır, eski dosyalar durur, rakiplerin zam geçmişini de görürsün.
- **Hukuki tavsiye vermez.** Abonelik, otomatik yenileme, cayma hakkı ve KDV konularında "bu madde hukuki teyit ister" notu düşer.
- Fiyat kararı senin. Sistem gerekçeli bir yapı verir, doğrulaması gerçek satış konuşmasında olur.

## Muhammed Sevimli

AI ile gerçek satış ve büyüme sistemleri kuruyorum. Bir yerde takılırsan yaz, bakarım.

- Web: https://muhammedsevimli.com
- Instagram: https://instagram.com/msevimli_
- X: https://x.com/_msevimli
- Threads: https://threads.com/@msevimli_
- YouTube: https://youtube.com/@msevimli
- E-posta: hey@muhammedsevimli.com

Claude Code ile inşa edildi.
