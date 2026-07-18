# Google Ads Denetimi · 18 Tem 2026

> Kaynak: `veri/ORNEK-arama-terimleri.md` + `veri/ORNEK-kampanyalar.md` (kurgusal "Meşe El Yapımı Ahşap" örnek seti).
> UYARI: Bu örnek settir. Gerçek denetim için kendi raporunu `veri/` klasörüne koy, bu dosya kendi verinle yeniden üretilir.
> Kolon eşleme: Maliyet=Cost, Dönş.=Conversions, Dönş. değeri=Conv. value, Tıklama=Clicks, Gösterim=Impr., Eşleşme türü=Match type. Tüm kolonlar mevcut, eksik kolon yok.

## (a) Özet kutu

| | |
|---|---|
| Denetlenen dönem | 18 Haz 2026 · 17 Tem 2026 (son 30 gün) |
| Toplam reklam harcaması | 4.015 TL |
| Boşa giden tutar | 1.615 TL · harcamanın %40'ı |
| Strateji dışı / düşük getiri | 260 TL (toptan · 1 dönüşüm geldi, ayrı ele alındı) |
| İzle kovası (alakalı ama dönüşmemiş) | 330 TL (boşa giden değil) |
| Tahmini aylık tasarruf | 1.615 TL (kesilen satırlar 0 dönüşüm, dönüşüm kaybı yok) |
| Tahmini ROAS (boşa giden kesilirse) | 11.550 / 2.400 = 4,81x (bugün 2,88x). Tahmini, harcama tam yer değiştirmeyebilir. |

## (b) Boşa giden dökümü

Bu satırlar `hesap/01-hesap.md` "ne DEĞİLSİN" tanımına giriyor, maliyeti var, 0 dönüşüm getirdi.

| Arama terimi | Kampanya | Eşleşme | Maliyet | Dönş. | Neden boşa |
|---|---|---|---|---|---|
| ahşap kesme tahtası nasıl yapılır | Genel Ahşap Ürün - Geniş | Geniş | 280 | 0 | bilgi amaçlı (nasıl) |
| kesme tahtası nasıl temizlenir | Genel Ahşap Ürün - Geniş | Geniş | 300 | 0 | bilgi amaçlı (nasıl) |
| ahşap nasıl cilalanır | Genel Ahşap Ürün - Geniş | Geniş | 160 | 0 | bilgi amaçlı (nasıl) |
| ahşap kaşık boyama | Genel Ahşap Ürün - Geniş | Geniş | 95 | 0 | DIY / kendin yap (boyama) |
| ucuz plastik kesme tahtası | Genel Ahşap Ürün - Geniş | Geniş | 190 | 0 | ucuz + plastik, segmente ters |
| ikinci el ahşap tabak | Genel Ahşap Ürün - Geniş | Geniş | 70 | 0 | ikinci el |
| meşe kereste fiyatları | Genel Ahşap Ürün - Geniş | Geniş | 240 | 0 | kereste / ham madde |
| ahşap ham madde | Genel Ahşap Ürün - Geniş | Geniş | 80 | 0 | ham madde |
| ikea kesme tahtası | Genel Ahşap Ürün - Geniş | Geniş | 200 | 0 | rakip / başka marka |

Boşa giden toplam = 280 + 300 + 160 + 95 + 190 + 70 + 240 + 80 + 200 = **1.615 TL**
Toplam harcamanın yüzdesi = 1.615 / 4.015 = **%40**.
Not: 9 satırın 9'u da `Genel Ahşap Ürün - Geniş` kampanyasından ve hepsi `Geniş eşleşme`. Sızıntı tek kampanyada yoğunlaşmış.

### Strateji dışı / düşük getiri (dönüştü ama hedef dışı, boşa giden sayılmadı)

| Arama terimi | Kampanya | Eşleşme | Maliyet | Dönş. | Dönş. değeri | ROAS |
|---|---|---|---|---|---|---|
| toptan kesme tahtası | Genel Ahşap Ürün - Geniş | Geniş | 260 | 1 | 300 | 1,15 |

"Toptan" `hesap/01-hesap.md` "ne DEĞİLSİN"e giriyor. 1 dönüşüm geldi (300 TL değer) o yüzden boşa gidene koymadım, ama ROAS 1,15 · hedef 4x'in çok altında. Segment dışı, düşük getiri. Karar senin: kesersen 260 TL harcama durur, 300 TL değer de gider.

## (c) Bu hafta düzelt (öncelik sırasıyla)

1. **Negatif kelime ekle (en yüksek etki · 1.615 TL/ay durdurur).**
   `Genel Ahşap Ürün - Geniş` kampanyasına ya da hesap seviyesine şu negatifleri ekle. Yanında durduracağı aylık harcama:
   - `nasıl` · 740 TL (nasıl yapılır 280 + nasıl temizlenir 300 + nasıl cilalanır 160)
   - `kereste` · 240 TL
   - `plastik` (veya `ucuz`) · 190 TL
   - `ikea` · 200 TL
   - `ham madde` · 80 TL
   - `boyama` · 95 TL
   - `ikinci el` · 70 TL
   Toplam durdurulan = 1.615 TL/ay. Negatifleri dar kökle ekle ki dönüşen terimleri kesmesin.
   Opsiyonel: `toptan` negatifi (260 TL/ay) · ama 1 dönüşüm getirdi, eklemeden önce toptan segmentini gerçekten istemiyorsan ekle.

2. **`Genel Ahşap Ürün - Geniş` kampanyasını yeniden kur (bütçe payı sorunu).**
   Bu kampanya toplam bütçenin %51,9'unu (2.085 TL) yiyor ama ROAS 0,79 · hedef 4x'in çok altında. Bütçenin yarısından fazlası buraya gidiyor ve zarar ediyor. Kıs ve temizle. Boşta kalan bütçeyi hedef üstü çalışan `Kesme Tahtası - Arama`ya (ROAS 4,19) kaydır.

3. **Eşleşme türünü değiştir · ama dönüşeni koruyarak.**
   Boşa gidenin tamamı bu kampanyanın `Geniş eşleşme`sinden geliyor. AMA aynı geniş eşleşmede dönüşen bir terim var: `zeytin ağacı kesme tahtası` (210 TL, 3 dönüşüm, 1.350 TL değer, ROAS 6,43). Geniş eşleşmeyi topluca öldürme.
   Yap: `zeytin ağacı kesme tahtası`yı ayrı bir `Sıralı` ya da `Tam eşleşme` reklam grubuna al (ideali `Kesme Tahtası - Arama` altına), sonra `Genel Ahşap Ürün - Geniş`i negatiflerle temizle ya da kapat. Böylece dönüşen aramayı kaybetmezsin.

4. **(ikincil) Düşük CTR / yüksek CPC sinyali.**
   Hesap ortalama CTR %5,5. Boşa giden bilgi amaçlı terimler yüksek gösterim düşük getiriyle bu kampanyayı şişiriyor (örn. `kesme tahtası nasıl temizlenir` 2.000 gösterim, 0 dönüşüm; `meşe kereste fiyatları` CPC 4,0 TL, 0 dönüşüm). Madde 1 ve 2'yi yapınca bu kendiliğinden düzelir, ayrıca bir iş gerekmez.

## (d) İzle kovası (boşa giden DEĞİL)

| Arama terimi | Kampanya | Maliyet | Dönş. | Neden izle |
|---|---|---|---|---|
| ahşap servis tahtası | Kesme Tahtası - Arama | 330 | 0 | İşine uygun ürün (servis tahtası satıyorsun) ama 0 dönüşüm. |

Bu terim alakalı, o yüzden boşa gidene saymadım. Ama dönüşmedi de. Bir dahaki denetimde tekrar bak. Dönüşmüyorsa açılış sayfası, fiyat ya da dönüşüm izleme tarafına bakmak gerekebilir. Şimdilik kesme.

## (e) Veri durumu / sonraki adım

- Bu denetim örnek set üzerinden yapıldı. **Kendi raporunu `veri/` klasörüne koy**, dosya kendi verinle yeniden üretilsin. Nasıl dışa aktaracağın: `veri/OKU-veri-cikarma-rehberi.md`.
- Örnek sette tüm kolonlar tamdı (dönüşüm, dönüşüm değeri, tarih aralığı, eşleşme türü). Kendi raporunda dönüşüm değeri kolonu yoksa ROAS ve tahmini ROAS satırını çıkaramam, o kolonu da dışa aktar.
- Bir düzeltmeyi uygularsan (negatif ekledin, kampanya kıstın) `hesap/01-hesap.md` en altındaki "uygulanan düzeltmeler" bölümüne tarih atarak yaz. Sonraki ay denetiminde aynı sızıntıyı iki kez önermem, düzeltmenin işe yarayıp yaramadığını karşılaştırırım (`CALISTIR.md` Adım 3 · write-back).
