# Sistemler

Muhammed Sevimli'nin AI ile kurduğu gerçek sistemlerin açık koleksiyonu. Her sistem kendi klasöründe, tek başına indirilip kullanılabilir. Hepsi sade, çoğu tek bir markdown paketi; kod bilmene gerek yok.

## Sistemler

| Sistem | Ne işe yarar | Klasör |
|---|---|---|
| Marka Hafızası | Markanı bir kere yaz, AI bir daha unutmasın. Claude Code, Cursor, Codex ve 20+ araçta çalışan üç dosyalık marka hafızası. | [marka-hafizasi/](marka-hafizasi/) |
| Satış CRM | Satış / çağrı merkezi ekipleri için tek dosyalık CRM. Her müşteri tek kartta, sabah aranacaklar listesi, ay sonu satış paneli. Ekip için Google Sheets ile ortak mod. | [satis-crm/](satis-crm/) |
| Haftalık Rakip Takipçisi | Rakiplerini (site, haber, youtube, instagram) haftada bir tarayıp pazartesi tek rapora indiren sistem: her yeni içeriğin özeti + markana hangi açıyla uyarlanacağı. | [rakip-takip/](rakip-takip/) |
| İkinci Beyin | İşini bir kere dosyalara yaz, AI her işte geçmişi zaten bilsin: projeler, kararlar, kişiler, kaynaklar. Sistem her işten önce sadece o işe gerekeni yükler. | [ikinci-beyin/](ikinci-beyin/) |
| Carousel + Hook Üretici | Konuyu ver, sistem markanın sesiyle 3 kapak hook'u ve 7 slaytlık carousel çıkarsın (görsel yönergeleri + LinkedIn çevirisiyle). | [carousel-uretici/](carousel-uretici/) |
| Ad Spy · Rakip Reklam Çözümleyici | Rakiplerini yaz, sistem Meta Reklam Kütüphanesi linklerini üretsin. Aktif reklamları yapıştır, aylardır dönen reklamların örüntüsünü çıkarıp markana uyarlanmış 10 reklam konsepti yazsın. | [ad-spy/](ad-spy/) |
| Review Madenci · Müşteri Yorumu Satış Madencisi | Ürününün müşteri yorumlarını yapıştır, sistem tekrar eden temaları çıkarsın, en sık gelen itirazı bulsun ve her tema için satış açısı + itiraz cevabı + reklam kancası yazsın. Her açının kanıtı müşterinin kendi cümlesi. | [review-madenci/](review-madenci/) |
| Konsept Fabrikası · 50 Statik Reklam Konsepti | Kendi kazanan reklamlarını ve müşteri yorumlarını yaz, sistem markanın sesiyle 50 çeşitli statik reklam konsepti çıkarsın (her sabah otomatik ya da tek komutla). Kanca tipi x segment x duygu rotasyonu; her konsept kanca + görsel yönergesi + gerekçe. | [konsept-fabrikasi/](konsept-fabrikasi/) |
| Müşteri Bulucu · Aday Bulma + İlk Mesaj | Nişini yaz, sistem Meta Reklam Kütüphanesi linklerini üretsin. O nişte reklam veren markaları yapıştır, sistem bütçe sinyaline ve reklamın zayıf noktasına göre adayları sıralasın ve her birine reklamından çıkardığı somut detayla özel bir ilk mesaj yazsın. | [musteri-bulucu/](musteri-bulucu/) |
| Trend Radarı · Nişinde Patlayan İçerik Açıları | Nişini yaz, sistem o nişin Reddit topluluklarında son bir haftada en çok yükselen başlıkları herkese açık RSS'ten kendisi çeksin. Tekrar eden hook kalıplarını çıkarıp sıcaktan soğuğa sıralasın ve markanın sesiyle "bu hafta üret" brief'i yazsın (frekans + feed sırasıyla, oy sayısı uydurmadan). | [trend-radari/](trend-radari/) |
| Google Ads Denetçisi · Boşa Giden Reklam Parası | Google Ads raporunu bir kere dışa aktar, sistem hangi aramaların para yiyip işine dönüşmediğini kendi verinden bulsun. Boşa giden toplam tutarı satır satır hesaplasın, eksik negatif kelimeleri çıkarsın, bütçeyi yanlış dağıtan kampanyayı işaretlesin ve "bu hafta düzelt" listesi versin (sadece veriden, uydurma çarpan yok). | [google-ads-denetci/](google-ads-denetci/) |
| Fikir Madencisi · SaaS Fikir Puanlayıcı | İlgilendiğin alanı yaz, sistem Hacker News'i, web ve forumları kendisi tarasın; "keşke şu olsa", "buna öderim" diyen gerçek talebi fikre çevirsin, dört kritere göre (pazar, kurulabilirlik, rekabet boşluğu, Türkiye uyumu) puanlayıp bu hafta kurabileceğin en iyi 5 fikri gerekçesiyle sıralasın. | [fikir-madencisi/](fikir-madencisi/) |
| URL'den Ürün Planı | Beğendiğin bir ürünün adresini ver, sistem o siteyi kendisi gezip mantığını çıkarsın: hangi özellik çekirdek hangisi süs, arkada hangi veriyi tutuyor, fiyat neye göre artıyor. Sonra senin nişine uyarlayıp ürün planı, veri şeması ve sırayla yapıştıracağın prompt setini yazsın. Kopya değil, uyarlama. | [urun-plani/](urun-plani/) |
| Satış Sayfası + Ödeme | Ürününü bir dosyaya yaz, sistem satış metnini yazsın ve çift tıkla açılan tek dosyalık bir satış sayfası üretsin. E-posta formunu ve senin hazır ödeme linkini sayfaya bağlasın, yayına almadan önce test edeceğin lansman listesini versin. Sistem para akışına dokunmaz, sayfayı kurar. | [satis-sayfasi/](satis-sayfasi/) |
| Fiyat Çözücü | Ne sattığını ve rakiplerini yaz, sistem rakiplerin herkese açık fiyat sayfalarını kendisi çekip paketleri, rakamları ve özellikleri kaynağıyla çıkarsın. Özellik x paket matrisini kursun, sektörün neye göre ücret aldığını bulsun ve gerekçeli üç paket önersin. Fiyatını gizleyen rakip için rakam uydurmaz, ortalama dışında tutar. | [fiyat-cozucu/](fiyat-cozucu/) |

Zamanla yeni sistemler eklenecek. Her sistemin kendi README'si kurulumu anlatır.

## Kurulum

Her sistemi tek başına çekebilirsin. Örneğin Marka Hafızası için:

```bash
npx degit muhammedsevimli/sistemler/marka-hafizasi marka-hafizasi
```

Diğer sistemler için de kalıp aynı; istediğinin satırını kopyala:

```bash
npx degit muhammedsevimli/sistemler/satis-crm satis-crm
npx degit muhammedsevimli/sistemler/rakip-takip rakip-takip
npx degit muhammedsevimli/sistemler/ikinci-beyin ikinci-beyin
npx degit muhammedsevimli/sistemler/carousel-uretici carousel-uretici
npx degit muhammedsevimli/sistemler/ad-spy ad-spy
npx degit muhammedsevimli/sistemler/review-madenci review-madenci
npx degit muhammedsevimli/sistemler/konsept-fabrikasi konsept-fabrikasi
npx degit muhammedsevimli/sistemler/musteri-bulucu musteri-bulucu
npx degit muhammedsevimli/sistemler/trend-radari trend-radari
npx degit muhammedsevimli/sistemler/google-ads-denetci google-ads-denetci
npx degit muhammedsevimli/sistemler/fikir-madencisi fikir-madencisi
npx degit muhammedsevimli/sistemler/urun-plani urun-plani
npx degit muhammedsevimli/sistemler/satis-sayfasi satis-sayfasi
npx degit muhammedsevimli/sistemler/fiyat-cozucu fiyat-cozucu
```

Ya da tüm repoyu klonla, veya yeşil **Code → Download ZIP** ile indirip istediğin klasörü kullan.

## Desteklenen araçlar

Dosya-tabanlı sistemler (ör. marka hafızası) şu araçların hepsinde aynı kuralla çalışır; hangi aracı kullanırsan o kendi dosyasını okuyor. Kendi başına çalışan araçlar (satış CRM tarayıcıda, rakip takipçisi Node ile) için kurulum ilgili sistemin README'sindedir.

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/` |
| Codex, Google Antigravity, Windsurf, Kilo ve 20+ araç | `AGENTS.md` (evrensel açık standart) |

---

Bu sistemleri **Muhammed Sevimli** kurdu. AI ile gerçek satış ve büyüme sistemleri. Kurarken takılırsan ya da adım adım anlatımlı rehber istersen yaz:

- Web: https://muhammedsevimli.com
- Instagram: https://instagram.com/msevimli_
- X: https://x.com/_msevimli
- Threads: https://threads.net/@msevimli_
- YouTube: https://youtube.com/@msevimli
- E-posta: hey@muhammedsevimli.com

## Lisans

[MIT](LICENSE)
