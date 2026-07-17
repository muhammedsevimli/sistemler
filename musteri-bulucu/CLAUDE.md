# Müşteri Bulucu · Aday Bulma + İlk Mesaj · Otomatik Okuma Kuralı

> Bu dosya, bu klasörde açtığın her Claude Code oturumunun BAŞINDA otomatik okunur.
> Sen hiçbir şey yapmıyorsun. Claude Code bu klasörde çalışırken bu dosyayı kendiliğinden yükler.
> Amaç: hizmetini her seferinde baştan anlatmamak; nişini bir kere dosyaya yaz, sonra tek komutla sıralı aday listesi + her adaya özel ilk mesaj al.

## Sistem ne yapıyor (iki faz)
1. **Link üretimi (otomatik):** `hedef/01-nis.md` içindeki niş ve ülke bilgisinden Meta Reklam Kütüphanesi (Meta Ads Library, herkese açık reklam arşivi) arama linklerini üretir. Sen linke tıklar, o nişte ŞU AN reklam veren markaları görürsün. Reklam veriyorsa bütçesi var demektir.
2. **Ayrıştırma + sıralama + mesaj (otomatik):** Kütüphanede gördüğün markaları ve reklamlarını `adaylar/` klasörüne yapıştırırsın. Sistem her adayı ayrıştırır (ne satıyor, ne kadardır reklam veriyor, reklamının zayıf noktası), adayları senin hizmetine uygunluğa göre SIRALAR, sonra her adaya ÖZEL bir ilk mesaj yazar.

> DÜRÜST SINIR: Meta Reklam Kütüphanesi herkese açıktır ama ticari ürün reklamları için ücretsiz otomatik indirme (API) yoktur; reklamların metni tarayıcıda görünür. Bu yüzden markayı kütüphaneden GÖRME adımı tek tıklık manuel bir "aç ve yapıştır" adımıdır. Ayrıştırma, sıralama ve mesaj üretimi tamamen otomatiktir. Detay: `format/aday-ayristirma.md` en alt.

## FAZ 1 · Link istendiğinde
`hedef/01-nis.md` dosyasını oku. Her niş terimi için Meta Reklam Kütüphanesi linkini şu şablonla üret ve tek tek yaz:

```text
https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=TR&q=<NIS>&search_type=keyword_unordered&media_type=all
```

- `<NIS>` yerine niş terimini koy (boşlukları %20 yap: "diş kliniği" -> "di%C5%9F%20klini%C4%9Fi"). Türkçe karakterleri URL kodla.
- `country=TR` yerine `hedef/01-nis.md` içindeki ülke kodunu kullan (DE, US, NL...). Dosyada ülke yazmıyorsa TR varsay ve bunu tek satırla söyle.
- `hedef/01-nis.md` içinde birden fazla arama terimi varsa HER BİRİ için ayrı link üret. Eş anlamlıları ve kitlenin gerçekten kullandığı kelimeyi ayrı ayrı dene; tek terim tek liste demektir, çeşitlilik aday sayısını artırır.
- Linkleri verdikten sonra kullanıcıya tek satırla söyle: "linke tıkla, gördüğün markaları ve reklam metinlerini `adaylar/<niş>.md` içine yapıştır, sonra 2. komutu çalıştır."

## FAZ 2 · Aday listesi + mesaj istendiğinde şu dosyaları SIRAYLA oku (zorunlu)
1. `marka/01-hizmet.md` · ne satıyorsun, kime, fiyat aralığı, ne DEĞİLSİN.
2. `marka/02-ses.md` · nasıl yazıyorsun, hitap, yasak kelimeler.
3. `hedef/01-nis.md` · hangi nişte, hangi ülkede aday arıyorsun.
4. `format/aday-ayristirma.md` · her adayı hangi başlıklara ayıracağın + sıralama puanı.
5. `format/mesaj-format.md` · ilk mesajı hangi yapıda yazacağın.
6. `adaylar/` klasöründeki tüm dosyalar · ayrıştırılacak ham adaylar.

Bu dosyaları okumadan üretme. İşe başlarken önce "hizmet + ses + niş + format + ham adaylar okundu" de.

## Ayrıştırma adımları (sistem içeride şunları yapar)
1. **Ayrıştır:** `adaylar/` içindeki her markayı `format/aday-ayristirma.md` başlıklarına böl (ne satıyor, kime, ne kadardır reklam veriyor, kaç farklı reklam, format, zayıf nokta).
2. **Bütçe sinyali oku:** aylardır reklam veren markayı "bütçesi var" işaretle. Uzun süre dönen reklam para harcandığı için dönüyordur. Yeni başlamış marka test aşamasında olabilir, bütçe sinyali zayıftır.
3. **Zayıf nokta bul:** her reklamda şu dört şeyden hangisi eksik: kanca zayıf (ilk cümle tutmuyor), teklif belirsiz (ne alacağı anlaşılmıyor), tek format (hepsi aynı tip görsel, test yok), sosyal kanıt yok (referans/sayı/yorum yok). Zayıf noktayı REKLAMDAN GÖSTEREREK yaz, genel geçer laf etme.
4. **Sırala:** `format/aday-ayristirma.md` içindeki puanla sırala: bütçe sinyali + zayıflığın senin hizmetinle çözülebilirliği + `marka/01-hizmet.md` fiyat aralığına uygunluk. En üstteki, yazınca en çok cevap ihtimali olan adaydır.
5. **Mesaj yaz:** her aday için `format/mesaj-format.md` yapısında ÖZEL ilk mesaj. Neyi fark ettin (o markaya özel, reklamından), ne öneriyorsun, tek net soru.

## Değişmez üretim kuralları
- `marka/02-ses.md` içindeki YASAK kelimeleri ASLA kullanma. Yasak kalıp gördüğünde mesajı baştan yaz.
- `marka/01-hizmet.md` içindeki "ne DEĞİLİM" satırlarına ters düşme. Yapmadığın işi teklif etme.
- **Mesaj kişiye özel olacak, kopyala-yapıştır şablon değil.** Her mesajda o markanın reklamından gelen SOMUT bir detay geçecek. Detay yoksa mesajı yazma, "bu aday için yeterli bilgi yok, kütüphaneden 1-2 reklam daha yapıştır" de.
- **Tek soru kuralı:** mesajın sonunda bir tane net soru olur. İki soru, üç seçenek, "ne dersin" yığını yok.
- Uydurma sayı, sahte vaat, olmayan referans YOK. Senin sayın/işin `marka/01-hizmet.md` içinde yoksa mesaja `[buraya kendi örneğini/sayını koy]` placeholder bırak, uydurma.
- Adayın adına, sektörüne dair olmayan bilgi uydurma. Sadece `adaylar/` içinde yazana dayan. Emin değilsen yazma.
- **Spam değil:** mesaj kısa, kişiye özel, tek soru, satış baskısı yok. Toplu gönderim dili ("merhaba, hizmetlerimizi tanıtmak istiyorum") YASAK.
- Em dash (uzun tire) çıktının HİÇBİR yerinde yok: ne mesajda, ne başlıkta, ne not satırında. Ayraç gerekirse nokta, virgül, iki nokta ya da orta nokta (·).

## Çıktı nereye yazılır
Her turu `ciktilar/` klasörüne tek dosya olarak yaz: `ciktilar/YYYY-AA-GG-<nis>.md`.
Dosya içinde: (a) aday ayrıştırma tablosu, (b) SIRALI aday listesi (puan + neden bu sırada), (c) her adaya özel ilk mesaj, (d) platform notu (DM/Instagram "sen", LinkedIn/e-posta "siz").

## Aday listesi büyür (kalıcı hafıza)
Yeni bir niş ya da arama terimi fark edince `hedef/01-nis.md` dosyasına ekle. Bir mesaj gerçekten cevap aldığında `hedef/01-nis.md` en altındaki "cevap alan açılar" bölümüne tarih atarak yaz (hangi zayıf nokta, hangi cümle tuttu). Sonraki üretimler oradan da beslenir; sistem her turda senin işine daha çok benzer.
