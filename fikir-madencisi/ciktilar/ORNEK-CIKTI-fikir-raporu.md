# Fikir Raporu · 2026-07-20 · Yerel Randevu + Küçük E-ticaret

> Bu rapor, otomatik taranan gerçek sinyallerden (`sinyaller/toplanan-2026-07-20.md`) üretildi.
> profil + kaynaklar + kriterler + format + toplanan sinyaller okundu.

## A) Tarama özeti
Hacker News'ten 6, web/forumdan 3 sinyal otomatik çekildi (Reddit bu ortamda WebFetch politikasıyla erişilemedi, dolaylı arama net ek sinyal vermedi; X yarı otomatik, taranmadı). 9 sinyal 5 ayrı fikre indi. En çok tekrar eden dert: randevu no-show (randevu alıp gelmeyen müşteri, kaybedilen ciro). Bu koşuda açık "öderim" cümlesi çıkmadı; para sinyali çoğunlukla dolaylı (kaybedilen ciro, kaçan müşteri) ve mevcut ücretli rakiplerin varlığıyla teyit ediliyor (salonrandevu.app, KolaySiparis, Komşum).

## B) Puan tablosu (tüm fikirler)
| # | Fikir (tek cümle) | Pazar | Fizibilite | Rekabet boşluğu | TR uyumu | Toplam | Sinyal |
|---|---|---|---|---|---|---|---|
| 1 | Randevulu esnaf için no-show azaltan kaporalı randevu + hatırlatma | 5 | 4 | 3 | 5 | 17 | güçlü |
| 2 | Instagram/DM sipariş takip paneli (mikro butik) | 4 | 4 | 3 | 5 | 16 | orta |
| 3 | Yerel işletme yorum yanıt aracı (AI taslak) | 4 | 4 | 4 | 4 | 16 | orta |
| 4 | Apartman/site aidat takip + hatırlatma | 4 | 4 | 2 | 5 | 15 | orta |
| 5 | Mikro e-ticaret çok kanallı iade tek panel | 4 | 3 | 3 | 4 | 14 | orta |

## C) En iyi 5 fikir · detay kartı

### Fikir 1 · Kaporalı randevu + no-show hatırlatma · toplam 17/20 · sinyal güçlü
- **fikir:** randevu alan yerel esnaf (kuaför, berber, güzellik, klinik) için, gelmeyen müşteri kaynaklı ciro kaybını azaltan; küçük kapora alan ve otomatik hatırlatma gönderen basit randevu aracı.
- **nereden çıktı:** Hacker News (Sinyal 1 "scheduling is a big pain point ... no one addresses it in a humane way", Sinyal 2 "wants to avoid no-shows") + Ekşi/web (Sinyal 4: randevu saatleri tutmuyor, no-show maddi kayıp). Üç ayrı kaynak, tekrar eden dert.
- **puanlar:** pazar 5 · fizibilite 4 · rekabet boşluğu 3 · TR uyumu 5
  - pazar 5: randevulu işletme sayısı çok, no-show sürekli ve ölçülebilir ciro kaybı, konu etrafında zaten ödenen ürünler var.
  - fizibilite 4: randevu sayfası + WhatsApp/SMS hatırlatma AI ile kurulabilir; tek zor parça kapora tahsilatı (iyzico), o da öğrenilebilir.
  - rekabet boşluğu 3: salonrandevu.app ve Google Play uygulamaları var; boşluk, kapora-öncelikli ve WhatsApp-yerel, mikro salona ucuz gelen sade sürüm.
  - TR uyumu 5: WhatsApp kültürü, iyzico ile kapora, yerel esnaf kitlesi net.
- **ilk MVP (bu hafta kurulacak en küçük sürüm):** tek işletme için randevu formu + randevudan önce otomatik WhatsApp hatırlatma + opsiyonel küçük kapora linki.
- **risk / boşluk:** kapora tahsilatı ve müşterinin kaporaya alışması; mevcut oyunculardan ayrışma net anlatılmalı.
- **para modeli fikri:** işletme başı aylık abonelik (ör. düşük sabit ücret); tahsilat iyzico ile.

### Fikir 2 · Instagram/DM sipariş takip paneli · toplam 16/20 · sinyal orta
- **fikir:** Instagram DM'den sipariş alan mikro butik ve el yapımı satıcı için, siparişi Excel karmaşasından çıkarıp tek tabloda durumuyla (alındı/ödendi/kargolandı) gösteren sade panel.
- **nereden çıktı:** web/forum (Sinyal 6: "elle girilen siparişlerde hata kaçınılmaz ... müşteri kaybına neden oluyor", Excel anlık durum gösteremiyor). Birden çok kaynak.
- **puanlar:** pazar 4 · fizibilite 4 · rekabet boşluğu 3 · TR uyumu 5
  - pazar 4: çok sayıda IG mikro satıcı, düzenli dert, dolaylı ciro kaybı.
  - fizibilite 4: elle giriş + durum panelinden MVP hızlı çıkar; IG DM otomatik entegrasyonu daha ağır, ilk sürümde şart değil.
  - rekabet boşluğu 3: KolaySiparis var; boşluk, tam paneli ağır bulan mikro satıcıya en sade tek tablo.
  - TR uyumu 5: IG ticareti TR'de çok yaygın, yerel kitle net.
- **ilk MVP:** siparişi elle ekleyen + durum sütunlu + gün sonu "bekleyen/kargolanacak" listesi veren panel.
- **risk / boşluk:** IG'den otomatik veri çekme sınırları; ilk sürüm elle giriş kalırsa değer yeterli mi test edilmeli.
- **para modeli fikri:** aylık abonelik; başlangıçta ücretsiz küçük katman + ödenen üst katman.

### Fikir 3 · Yerel işletme yorum yanıt aracı · toplam 16/20 · sinyal orta
- **fikir:** Google/harita yorumlarına yetişemeyen yerel işletme için, gelen yorumları toplayıp markanın tonunda AI taslak yanıt öneren araç (işletme onaylayıp gönderir).
- **nereden çıktı:** Hacker News (Sinyal 7 "Every small business who cares about their Google Maps standing responds to bad reviews", Sinyal 8 herkese açık yanıt talebi). Birden çok yorum.
- **puanlar:** pazar 4 · fizibilite 4 · rekabet boşluğu 4 · TR uyumu 4
  - pazar 4: harita sıralamasını önemseyen çok yerel işletme, yorum yanıtı sürekli iş.
  - fizibilite 4: yorumları çekmek + Türkçe AI taslak; Google Business bağlantısı tek zor parça.
  - rekabet boşluğu 4: TR'de ucuz, Türkçe tonlu AI yanıt aracı az; net boşluk.
  - TR uyumu 4: evrensel dert, Türkçe yanıt tonlaması yerel avantaj, tahsilat çözülebilir.
- **ilk MVP:** işletmenin son yorumlarını listeleyip her birine Türkçe taslak yanıt üreten sayfa.
- **risk / boşluk:** Google yorum verisine erişim kuralları; taslakların gerçekten işletme sesini tutması.
- **para modeli fikri:** aylık abonelik, yorum hacmine göre katman.

### Fikir 4 · Apartman/site aidat takip + hatırlatma · toplam 15/20 · sinyal orta
- **fikir:** apartman/site yöneticisi için, kim ödedi kim ödemedi karmaşasını Excel'den çıkarıp otomatik borç takibi ve hatırlatma yapan sade araç.
- **nereden çıktı:** web/forum (Sinyal 5: "kim aidatını ödemedi?" sürekli soruluyor, ödeme/duyuru/borç ayrı yerlerde karışıyor). Forum + bloglar.
- **puanlar:** pazar 4 · fizibilite 4 · rekabet boşluğu 2 · TR uyumu 5
  - pazar 4: çok bina var ama yöneticiler çoğu gönüllü, ödeme isteği düşük olabilir.
  - fizibilite 4: tablo + hatırlatma + ödeme takibi kurulabilir.
  - rekabet boşluğu 2: pazar kalabalık, Komşum ÜCRETSİZ, AidatYönet/aidatpro/netyonetim yerleşik; ayrışma zor.
  - TR uyumu 5: tamamen TR'ye özel bir dert.
- **ilk MVP:** daire listesi + aylık ödeme işaretleme + ödemeyene otomatik hatırlatma.
- **risk / boşluk:** ücretsiz güçlü rakip fiyat baskısı; ayrışma net değilse girme.
- **para modeli fikri:** bina başı düşük aylık; ücretsiz rakip yüzünden fiyatlama hassas.

### Fikir 5 · Mikro e-ticaret çok kanallı iade tek panel · toplam 14/20 · sinyal orta
- **fikir:** birden çok kanaldan (pazar yeri, IG, mail) iade talebi gelen mikro satıcı için, iadeleri tek panelde durumuyla toplayan araç.
- **nereden çıktı:** Hacker News (Sinyal 9: "Only if things like returns are automated can you actually scale"). Birden çok yorum.
- **puanlar:** pazar 4 · fizibilite 3 · rekabet boşluğu 3 · TR uyumu 4
  - pazar 4: çok satıcı, iade maliyetli ve sürekli.
  - fizibilite 3: çok kanal entegrasyonu ağır parça; ilk sürüm elle giriş olabilir.
  - rekabet boşluğu 3: büyük platform modülleri var, mikro satıcıya ağır; boşluk sade tek tablo.
  - TR uyumu 4: TR pazar yerleri, ama entegrasyon sürtünmesi var.
- **ilk MVP:** iade taleplerini elle/tek formla toplayıp durum takibi yapan panel.
- **risk / boşluk:** çok kanal entegrasyonu olmadan değer sınırlı; hangi kanaldan başlanacağı netleşmeli.
- **para modeli fikri:** aylık abonelik; iade hacmine göre katman.

## D) Bu hafta buradan başla
**Fikir 1 · Kaporalı randevu + no-show hatırlatma.** Neden bu: en güçlü ve en çok tekrar eden sinyal (üç ayrı kaynak), en net TR uyumu, kaybedilen ciro ölçülebilir olduğu için değer anlatımı kolay. İlk adım: tek bir kuaför/berber için randevu formu + randevudan 3 saat önce otomatik WhatsApp hatırlatma kur, kaporayı ikinci sürüme bırak. İlk 3 müşteriyi kendi çevrendeki randevulu esnaftan (mahalle kuaförü, tanıdık güzellik salonu) bul, bir hafta bedava kullandır, no-show sayısındaki düşüşü ölç.

## E) Elenenler / bekleyenler
- Randevu sistemlerine "entegrasyon" isteği (Sinyal 3): tek yorum, zayıf; kendi başına ürün değil, Fikir 1'in özelliği olarak beklet.
- HN "someone should build a blind-interview job site": profil dışı (SMB aracı değil), elendi.
- HN "OSS için Kickstarter alternatifi": profil dışı, elendi.
- HN "iyi görünen bir todo uygulaması": jenerik, niş ve para sinyali yok, elendi.

---
karar senin; bu rapor sıralı bir pusula, kesin emir değil.
