# Test Sonucu · Fikir Madencisi (Otomatik SaaS Fikir Madeni)

> Sistemin FAZ 1 tarama talimatları, Claude Code'un web araçlarıyla (WebFetch + WebSearch) GERÇEKTEN çalıştırıldı.
> Bu araçlar, teslim edilen sistemin kullanıcının kendi Claude Code'unda çağırdığı araçların birebir aynısıdır. Yani bu, sistemin çekirdek otomasyonunun gerçek koşusudur.
> Alan: yerel randevulu işletmeler + küçük e-ticaret. Kullanıcı hiçbir sinyal yapıştırmadı; yalnız alan verildi, sinyalleri sistem topladı.

## Otomatik tarama gerçekten çalıştı mı → EVET (kanıtla)
Ham çekilen sinyaller: `sinyaller/toplanan-2026-07-20.md` (her sinyalde kaynak + link). Üretilen skorlu rapor: `ciktilar/ORNEK-CIKTI-fikir-raporu.md`.

### Kaynak kaynak sonuç (dürüst tablo)
| Kaynak | Yöntem | Sonuç |
|---|---|---|
| Hacker News | `WebFetch` → `hn.algolia.com/api/v1/search?...&tags=comment` | **ÇALIŞTI.** JSON döndü, gerçek yorumlar aynen çekildi. Örnek: "scheduling is a big pain point for these tiny businesses but no one addresses it in a humane way" (randevu), "wants to avoid no-shows" (Remindr.co Show HN), "Every small business who cares about their Google Maps standing responds to bad reviews" (yorum yanıt), "Only if things like returns are automated can you actually scale" (iade). 6 sinyal. |
| Web + forum | `WebSearch` | **ÇALIŞTI.** Ekşi Sözlük randevu başlıkları, excel.web.tr aidat başlıkları, IG sipariş blogları surface oldu; gerçek dert cümleleri + mevcut rakipler (salonrandevu.app, Komşum, KolaySiparis, AidatYönet) çekildi. 3 güçlü sinyal + rakip tespiti. |
| Reddit | `WebFetch` → `reddit.com/search.json` | **BU ORTAMDA ENGELLİ.** `www.reddit.com` ve `old.reddit.com` WebFetch politikasıyla reddedildi ("unable to fetch"). `site:reddit.com` WebSearch'i net ek sinyal vermedi. Kullanıcının kendi Claude Code ortamında reddit public JSON çoğunlukla açıktır; sistem bu erişimi her koşuda dener ve engellenirse "erişilemedi" der (uydurmaz). |
| Ekşi Sözlük (doğrudan sayfa) | `WebFetch` → eksisozluk.com | **DOĞRUDAN 403 (bot bloğu).** İçerik yine de WebSearch snippet'i üzerinden alındı. |
| X (Twitter) | login ister | **YARI OTOMATİK.** Otomatik çekilmedi; tek tık arama linki üretildi. |

Yani: iki kaynak (Hacker News tam otomatik, web/forum tam otomatik) gerçekten sinyal çekti; Reddit bu sandbox'ta engelliydi ve sistem bunu dürüstçe "erişilemedi" diye işaretledi. Sahte sinyal yok.

## TEST 1 · Otomatik tarama → sinyal toplama → GEÇTİ
Sistem talimatları uyarınca kaynaklar tarandı, para/talep dili geçen gerçek cümleler aynen çekildi, her birine kaynak + link kondu, `sinyaller/toplanan-2026-07-20.md`'ye yazıldı. Erişilemeyen kaynak (Reddit) açıkça işaretlendi. Sinyal uydurulmadı.

## TEST 2 · Sinyalden fikre + birleştirme → GEÇTİ
9 ham sinyal 5 ayrı SaaS fikrine indi. Aynı derdi anlatan sinyaller birleştirildi: HN randevu sinyalleri (1, 2) + Ekşi no-show (4) tek "kaporalı randevu / no-show" fikrinde; HN yorum sinyalleri (7, 8) tek "yorum yanıt" fikrinde toplandı.

## TEST 3 · Dört kritere puanlama + gerekçe + sinyal gücü + rakip → GEÇTİ
Her fikir dört kritere (pazar, fizibilite, rekabet boşluğu, TR uyumu) 1-5 puanlandı, her puanın altına gerekçe yazıldı, toplam /20 hesaplandı, tam tablo çıktı. Sinyal gücü ayrı sütunda (güçlü/orta) işaretlendi. Taramada çıkan gerçek rakipler rekabet boşluğu satırında adlandırıldı (salonrandevu.app, KolaySiparis, Komşum) ve kopya yerine ayrışma noktası yazıldı.

## TEST 4 · Dürüst para dili okuma → GEÇTİ
Bu koşuda açık "öderim" cümlesi çıkmadı; sistem bunu ŞİŞİRMEDİ. Para sinyalini "dolaylı (kaybedilen ciro, kaçan müşteri) + mevcut ücretli rakiplerin varlığı" olarak dürüstçe işaretledi, hayali bir "ayda 300 TL veririm" alıntısı uydurmadı.

## TEST 5 · Anti-uydurma + profilden süzme + kopya yasağı → GEÇTİ
- Sistem sinyalde olmayan talep uydurmadı; her fikri toplanan sinyale ("nereden çıktı" satırı) bağladı.
- Zayıf sinyali (Sinyal 3, tek yorum "entegrasyon") başa koymadı, "beklet" diye eledi.
- Taramadan gelen profil-dışı gerçek sinyalleri (HN "blind-interview job site", "OSS Kickstarter", "iyi görünen todo app") elenenlere düşürdü, gerekçesini yazdı.
- Kopya önermedi; rakipleri adlandırıp ayrışma noktasını yazdı.

## TEST 6 · VOICE / em dash denetimi → GEÇTİ
Çıktıda em dash (U+2014) ve en dash (U+2013): yok. Ayraç olarak orta nokta (·) ve virgül. Motivasyon dili, gelir vaadi, "X değil Y" yapay tezat: yok. Kapanış: "karar senin; bu rapor sıralı bir pusula, kesin emir değil."

## Üretilen 5 fikir (özet)
1. Kaporalı randevu + no-show hatırlatma (randevulu esnaf) · 17/20 · güçlü · bu hafta buradan başla
2. Instagram/DM sipariş takip paneli (mikro butik) · 16/20 · orta
3. Yerel işletme yorum yanıt aracı (AI taslak) · 16/20 · orta
4. Apartman/site aidat takip + hatırlatma · 15/20 · orta (rekabet kalabalık, ücretsiz rakip)
5. Mikro e-ticaret çok kanallı iade tek panel · 14/20 · orta
Elenenler: randevu entegrasyonu (zayıf sinyal), HN blind-interview / OSS Kickstarter / todo app (profil dışı).

## Test edilemeyenler (dürüst sınır)
- **Reddit public JSON bu sandbox'ta:** engelliydi (WebFetch reddit.com'a erişemedi). Kullanıcının kendi Claude Code'unda genelde açıktır; sistem her koşu dener, engelse "erişilemedi" der. [bu ortamda test edilemedi: reddit erişimi WebFetch politikasına bağlı]
- **X otomatik tarama:** tasarım gereği yapılmaz (login). Tek tık link üretilir. [test edilemedi: kapsam dışı, yarı otomatik]
- **Puanların gerçek pazar isabeti:** puanlar bir pusuladır. Bir fikrin gerçekten para edip etmediği ancak kullanıcı MVP'yi kurup ilk müşterilere sorunca ölçülür. [test edilemedi: gerçek pazar validasyonu kullanıcının işi]
