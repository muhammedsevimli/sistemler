# Fikir Madencisi · SaaS Fikir Madeni · Otomatik Okuma Kuralı (AGENTS.md)

> Bu dosya evrensel AGENTS.md açık standardıdır. Codex, Google Antigravity, Windsurf, Kilo ve 20+ AI aracı bu klasörde çalışırken bunu otomatik okur.
> Claude Code için aynı kural `CLAUDE.md` dosyasında.
> Amaç: "ne kurayım" sorusunu her seferinde sıfırdan düşünmemek. Sen sadece ilgilendiğin alanı yazarsın; sistem talebi kendisi tarar, para dili geçen gerçek dertleri toplar, dört kritere puanlar ve "bu hafta kurabileceğin en iyi 5 SaaS fikri" raporunu döndürür.

## Bu sistemin duruşu (değişmez)
Bu sistem fikir BULMAYI sana devreder, fikir SEÇMEYİ sana bırakır. Yani talebi kendisi tarar, sinyalleri toplar, puanlar, sıralar; ama "bunu kur" emri vermez. Ne kuracağına sen karar verirsin. Sistem sana temiz, sıralı, gerekçeli bir kuyruk verir; karar senin.

## Sistem ne yapıyor (iki faz)
1. **Otomatik tarama (sen yapıştırmıyorsun):** `sen/01-profil.md`'deki ilgilendiğin alanı ve `sen/02-kaynaklar.md`'deki arama sorgularını okur. Web araçlarınla (web sayfası çekme + web araması) kaynakları kendin tarar, insanların "keşke şu olsa / buna çözüm arıyorum / bunun için öderim / elle yapıyorum bıktım" gibi talep ve para dili geçen GERÇEK cümlelerini kendisi çeker, her sinyalin kaynağını ve linkini yazarak `sinyaller/toplanan-YYYY-AA-GG.md` dosyasına kaydeder. Kullanıcı bu adımda hiçbir şey yapıştırmaz.
2. **Puanlama + rapor (otomatik):** `sinyaller/` klasöründeki toplanmış talep sinyallerini tek tek okur, her birini bir SaaS fikrine çevirir, dört kritere göre 1-5 puanlar, `sen/01-profil.md` üzerinden uygunluğunu süzer ve en yüksek toplam puanlı 5 fikri gerekçeleriyle raporlar.

## Hangi kaynak nasıl taranıyor (dürüst tablo)
Sistem şu kaynakları KENDİSİ tarar. Her kaynağın otomasyon derecesi farklı; abartma yok.

| Kaynak | Nasıl | Otomasyon |
|---|---|---|
| Hacker News (yorumlar) | web sayfası çekme aracıyla `https://hn.algolia.com` public JSON | **Tam otomatik** (auth yok). Adres `https` olmak zorunda; `http` 301 döner. |
| Genel web + forumlar (Ekşi, sektör forumları, "X arıyorum" aramaları, pazar yeri/uygulama yorumları) | web araması | **Tam otomatik** |
| Reddit (post + yorum) | `curl` ile `reddit.com/search.rss` public RSS akışı | **Tam otomatik** (public, auth yok). Reddit'in `search.json` ucu artık anahtarsız isteklere `403` veriyor, `search.rss` ucu `200` veriyor; bu yüzden RSS kullanılır. Web sayfası çekme araçları reddit.com'da bloklanabilir, o yüzden `curl` + açıklayıcı User-Agent. |
| X (Twitter) | login ister, otomatik çekme güvenilir değil | **Yarı otomatik.** Sistem otomatik çekmez; `sen/02-kaynaklar.md`'deki X aramaları için tek tık arama linki üretir, istersen elle bakarsın. Ana tarama X'siz yürür. |

> Kural: sistem yalnızca GERÇEKTEN çektiği cümleyi sinyal olarak yazar, her birine kaynak + link koyar. Bir kaynağa erişemezse ("bu ortamda reddit.com kapalı" gibi) bunu açıkça yazar, cümle UYDURMAZ.

## FAZ 1 · Otomatik tarama istendiğinde
`sen/01-profil.md` (ilgilendiğin alan) ve `sen/02-kaynaklar.md` (arama sorguları + talep dili kalıpları) dosyalarını oku. Sonra sırayla:

1. **Hacker News:** her arama sorgusu için
   `https://hn.algolia.com/api/v1/search?query=<SORGU>&tags=comment&hitsPerPage=30`
   adresini çek (boşlukları `+` yap). Adresin `https` olması şart, `http` 301 döner. Dönen JSON'daki `comment_text` içinden talep/para dili geçen cümleleri AYNEN al, `story_title` ile birlikte kaydet.
2. **Reddit:** her sorgu için RSS akışını `curl` ile çek, açıklayıcı bir User-Agent ver ve çıktıyı dosyaya yaz (ekranı doldurmasın):
   ```
   curl -sS -A "fikir-madencisi/1.0 (kisisel arastirma)" --retry 3 --retry-delay 5 \
     "https://www.reddit.com/search.rss?q=<SORGU>&sort=relevance&limit=25" \
     -o sinyaller/ham-reddit-<SORGU>.xml
   ```
   Hedef bir topluluk varsa: `https://www.reddit.com/r/<sub>/search.rss?q=<SORGU>&restrict_sr=1&sort=relevance&limit=25`.
   İnen XML'i oku, `<title>` ve `<content>` içinden talep/para dili geçen gerçek cümleleri AYNEN al.
   **Neden RSS:** Reddit'in `search.json` ucu anahtarsız isteklere `403` veriyor, `search.rss` ucu `200` veriyor. `403` ya da `429` alırsan bir kez daha dene, yine olmazsa `site:reddit.com <SORGU>` web aramasıyla dolaylı tara ve bunu rapora "reddit doğrudan çekilemedi, dolaylı tarandı" diye yaz.
3. **Web + forum:** her sorgu için web araması çalıştır (Ekşi Sözlük, sektör forumları, pazar yeri/uygulama yorumları, "X arıyorum" aramaları). Snippet'lerde geçen gerçek dert/talep cümlelerini ve varsa mevcut çözüm/rakip isimlerini al (rakip = rekabet boşluğu puanı için değerli).
4. **X (yarı otomatik):** `sen/02-kaynaklar.md`'deki her X araması için `https://x.com/search?q=<ARAMA>&f=live` linkini üret (boşluk `%20`, Türkçe karakter URL-kodlu). Bunları otomatik çekme; "istersen elle bak" diye rapora ekle.

Topladığın her sinyali `sinyaller/toplanan-YYYY-AA-GG.md` dosyasına şu formatta yaz: kaynak · link · kim söylüyor (biliniyorsa) · dert cümlesi (aynen, kısaltılmış) · para dili (var/yok/dolaylı kayıp) · kaç kaynakta tekrar ediyor. Sonda tek satır özet: hangi kaynaktan kaç sinyal çekildi, hangileri erişilemedi.

## FAZ 2 · Puanlama + 5 fikir raporu istendiğinde şu dosyaları SIRAYLA oku (zorunlu)
1. `sen/01-profil.md` · kimsin, hangi alanları biliyorsun, ne kurabilirsin, sınırların ne.
2. `sen/02-kaynaklar.md` · hangi sorgularla tarandı.
3. `format/kriterler.md` · dört kriter ve 1-5 puanlama cetveli.
4. `format/rapor-format.md` · 5 fikir raporunu hangi yapıda yazacağın.
5. `sinyaller/` klasöründeki tüm dosyalar · puanlanacak toplanmış talep sinyalleri.

Bu dosyaları okumadan üretme. İşe başlarken önce "profil + kaynaklar + kriterler + format + toplanan sinyaller okundu" de.

## Puanlama adımları (sistem içeride şunları yapar)
1. **Sinyalden fikre:** `sinyaller/` içindeki her sinyali oku. Sinyalin altında yatan gerçek derdi çıkar ve tek cümlelik bir SaaS fikrine çevir ("kim için, hangi derdi çözen ne"). Aynı derdi anlatan birden çok sinyali TEK fikirde birleştir (tekrar eden dert = güçlü sinyal).
2. **Sinyal gücü oku:** bir fikri kaç bağımsız sinyal/kaynak destekliyor. Tek kaynakta bir kez = zayıf. Farklı kişilerin farklı kaynaklarda tekrar ettiği = güçlü. Açık para dili ("bunun için öderdim", "şu kadar veriyorum") en güçlüsü; dolaylı para (kaybedilen ciro, kaçan müşteri) da sayılır ama açık para kadar değil.
3. **Dört kritere puanla:** her fikri `format/kriterler.md` cetveline göre 1-5 puanla: (1) pazar boyutu, (2) fizibilite / kurulabilirlik, (3) rekabet boşluğu, (4) Türkiye pazarı uyumu. Her puanın yanına tek satır gerekçe yaz. Toplamı 20 üzerinden hesapla. Taramada bir rakip/mevcut çözüm çıktıysa rekabet boşluğu satırında adını yaz.
4. **Profilden süz:** `sen/01-profil.md`'yi oku. Kullanıcının bilmediği alandaki ya da sınır koyduğu (yapmam dediği) fikirleri ya ele, ya da "bu senin alanının dışında, ortak arar mısın" notuyla en alta düşür. Fizibilite puanı kullanıcının kendi kurabilme gücüne göre okunur.
5. **Sırala ve ilk 5'i ver:** toplam puana göre sırala, en yüksek 5 fikri `format/rapor-format.md` yapısında yaz. En üstteki fikre "bu hafta buradan başla" işareti koy.

## Değişmez üretim kuralları
- **Fikir UYDURMA.** Sadece `sinyaller/` içinde gerçekten TOPLANMIŞ talebe dayanan fikirleri puanla. Hiçbir sinyal yoksa "elimde sinyal yok, önce FAZ 1 taramasını çalıştır" de, boş rapor uydurma.
- **Sinyal UYDURMA.** Bir kaynaktan gerçekten cümle çekemediysen o sinyali yazma. Erişilemeyen kaynağı "erişilemedi" diye işaretle. Her sinyalde kaynak + link zorunlu.
- **Puanı ŞİŞİRME.** Sinyal zayıfsa pazar boyutu puanı düşüktür. Her puanın altında tek satır gerekçe zorunlu; gerekçesiz puan yazma.
- **"Kopyala" DEME.** Bir fikir mevcut bir ürüne benziyorsa, o ürünün kopyasını önerme; rekabet boşluğu kriterinde "mevcut çözüm şu, boşluk şurada" diye AYRIŞMA noktasını yaz. Çıktı hep "senin kurabileceğin farklı açı"dır, "şunun aynısı" değil.
- **Riskli alanı işaretle.** Bankacılık, sağlık, hukuk, kişisel veri gibi lisans/regülasyon gerektiren fikirlerde fizibilite puanını düşür ve "bu alan izin/uyum ister" notu koy. Sessizce yüksek puan verme.
- **Em dash (uzun tire) çıktının HİÇBİR yerinde yok:** ne fikir cümlesinde, ne gerekçede, ne başlıkta. Ayraç gerekirse nokta, virgül, iki nokta ya da orta nokta (·).
- **Motivasyon dili, gelir vaadi, abartı yok.** "Milyoner olursun", "patlar", "kaçırma" gibi cümleler yasak. Sistem soğukkanlı bir analist gibi konuşur.

## Çıktı nereye yazılır
Her puanlamayı `ciktilar/` klasörüne tek dosya olarak yaz: `ciktilar/YYYY-AA-GG-fikir-raporu.md`.
Dosya içinde: (a) taranan sinyal özeti (hangi kaynaktan kaç sinyal, kaç ayrı fikre indi), (b) tam puan tablosu (tüm fikirler, dört kriter + toplam), (c) en iyi 5 fikir detay kartı, (d) "bu hafta buradan başla" seçimi ve gerekçesi, (e) elenenler / bekleyenler tek satır.

## Kaynak listesi büyür, karar defteri birikir (kalıcı hafıza)
Yeni bir iyi arama sorgusu ya da kaynak fark edince `sen/02-kaynaklar.md`'ye ekle. Bir fikri gerçekten kurmaya karar verdiğinde ya da denk gelip vazgeçtiğinde, `sen/02-kaynaklar.md` en altındaki "karar defteri" bölümüne tarih atarak yaz (hangi fikir, karar ne, neden). Sistem her hafta aynı sorgulardan tekrar tarar; sorgu listesi ve karar defteri senin pazar sezginin kalıcı hafızası olur, sonraki raporlar oradan da beslenir.
