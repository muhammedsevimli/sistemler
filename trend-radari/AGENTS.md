# Trend Radarı · Nişinde Patlayan İçerik Açıları · Otomatik Okuma Kuralı (AGENTS.md)

> Bu dosya evrensel AGENTS.md açık standardıdır. Codex, Google Antigravity, Windsurf, Kilo ve 20+ AI aracı bu klasörde çalışırken bunu otomatik okur.
> Claude Code için aynı kural `CLAUDE.md` dosyasında, Cursor için `.cursor/rules/trend-radari.mdc` dosyasında.
> Amaç: her hafta boş ekrana bakmayı bitirmek. Nişini bir kere dosyaya yaz, sonra tek komutla o nişin reddit topluluklarında son bir haftada en çok yükselen başlıkları çek, tekrar eden hook ve açıları çıkar, "bu hafta üret" brief'i al.

## Sistem ne yapıyor (iki faz)
1. **Reddit taraması (OTOMATİK, GERÇEK):** `hedef/01-nis.md` içindeki subreddit'lerin son bir haftada en çok yükselen başlıklarını Reddit'in herkese açık RSS akışından çeker. Bu ADIM GERÇEK ve tam otomatiktir: Reddit'in `top/.rss?t=week` akışı ücretsizdir, üyelik ya da anahtar istemez, kurulum yoktur. Sen tık bile atmıyorsun, manuel yapıştırma YOK.
2. **Açı çıkarımı + brief (OTOMATİK):** Çekilen başlıkları (ve istersen elle yapıştırdığın YouTube/TikTok/Reels örneklerini) okur, tekrar eden HOOK kalıplarını, açıları, formatları ve konuları çıkarır. Çıktı: "bu hafta üret" brief'i. Her açı için hangi hook tutuyor, kanıtı (kaç başlıkta tekrar etti, feed'in neresinde duruyor, hangi topluluk), senin nişine nasıl uyarlanır, örnek başlık ve format önerisi.

> NEDEN RSS, NEDEN .json DEĞİL: Reddit anahtarsız `.json` ucunu kapattı, artık `403` döner. Ama herkese açık RSS akışı (`top/.rss?t=week`) hâlâ açık, anahtarsız `200` döner. Sistem bu yüzden RSS kullanır. RSS'te oy (upvote) SAYISI yoktur; ama `/top/?t=week` akışı ZATEN sıralıdır (en üstteki o hafta en çok tutan gönderidir), yani SIRA bir sinyaldir. Oy sayısını da isteyen ileri kullanıcı için opsiyonel OAuth yolu bu dosyanın en altında.

## FAZ 1 · Reddit taraması istendiğinde (otomatik çekim · RSS + curl)
`hedef/01-nis.md` dosyasını oku. Oradaki HER subreddit için şu adresi kur ve çek:

```text
https://www.reddit.com/r/<SUBREDDIT>/top/.rss?t=week
```

- **Çekmek için `curl` kullan, açıklayıcı bir User-Agent ile.** Web sayfası çekme (fetch) araçları Reddit'te bloklanabilir; curl açıklayıcı UA ile `200` verir. Komut şablonu (dosyaya kaydeder, ekranı doldurmaz):

  ```bash
  curl -s --retry 5 --retry-delay 6 --retry-all-errors \
    -A "trend-radar/1.0 by <senin-reddit-ya-da-marka-adin>" \
    -o "veri/rss/<SUBREDDIT>.rss" \
    "https://www.reddit.com/r/<SUBREDDIT>/top/.rss?t=week"
  ```

- **Rate limit (429):** çok hızlı arka arkaya çekersen Reddit `429` döndürebilir. Bu yüzden `--retry` + `--retry-delay` kullan (yukarıdaki şablonda var) ve subreddit'leri arka arkaya çek, hepsini aynı anda değil. `429` alırsan retry kendini bekletip yeniden dener; yine olmazsa "r/... rate-limit, tekrar dene" yaz.
- Gelen dosya Atom XML'dir. Her gönderi bir `<entry>` bloğudur. Her `<entry>` içinden AL: `<title>` (başlık = hook), `<link href="...">` (link), `<published>` (tarih). RSS'te oy/yorum sayısı YOKTUR, uydurma.
- **Sıra sinyaldir:** `top/.rss?t=week` akışı o subreddit'te haftanın en çok tutanından aşağı doğru sıralıdır. Bir başlığın feed'deki SIRASINI koru (1 = en üst = en güçlü). Sıralamayı sen değiştirme, geldiği sırada yaz.
- Sonucu `veri/reddit-YYYY-AA-GG.md` dosyasına bir tabloya yaz: subreddit · sıra · başlık · tarih · link. Subreddit içinde feed sırasını koru.
- **Uydurma YOK:** yalnız GERÇEKTEN çektiğin başlıkları yaz. Bir subreddit boş dönerse ya da rate-limit'e takılırsa "r/... çekilemedi (sebep)" yaz, başlık uydurma. Hiç veri gelmezse "önce hedef/01-nis.md'ye çalışan subreddit ekle" de ve dur.
- Çekim bitince tek satırla söyle: "reddit verisi çekildi (X başlık, Y subreddit, HTTP 200). şimdi 2. komutu çalıştır."

## FAZ 2 · Brief istendiğinde şu dosyaları SIRAYLA oku (zorunlu)
1. `marka/01-marka.md` · kimsin, ne üretiyorsun, ne DEĞİLSİN, hangi platform.
2. `marka/02-ses.md` · nasıl yazıyorsun, hitap, yasak kelimeler.
3. `hedef/01-nis.md` · niş, dil/ülke, subreddit'ler, arama terimleri.
4. `format/trend-analizi.md` · hook kalıplarını nasıl çıkaracağın + brief yapısı.
5. `veri/` klasöründeki tüm dosyalar · çekilen Reddit verisi + (varsa) elle yapıştırılan YouTube/TikTok/Reels örnekleri.

Bu dosyaları okumadan üretme. İşe başlarken önce "marka + ses + niş + format + veri okundu" de.

## Açı çıkarımı adımları (sistem içeride şunları yapar)
1. **Grupla:** `veri/` içindeki başlıkları konuya/kalıba göre kümele. Aynı derdi, aynı formatı ya da aynı açıyı tekrarlayan başlıkları bir araya koy. En az 2 başlık tekrar ediyorsa bir kalıptır, tek başlık kalıp değildir.
2. **Hook kalıbını isimlendir:** her küme için tekrar eden hook'u tek cümleyle adlandır (`format/trend-analizi.md` hook tiplerinden). Kalıbı VERİDEN GÖSTEREREK yaz: hangi başlıklar, kaç tanesi, hangi subreddit'ler. Genel geçer laf etme.
3. **Sıcaklık oku (RSS sinyaliyle):** RSS'te oy sayısı yok, bu yüzden sıcaklığı iki sinyalden okursun: (a) **frekans** = aynı hook kaç başlıkta tekrar etti (ne kadar çoksa o kadar sıcak), (b) **sıra** = o başlıklar feed'in üstünde mi duruyor (top/.rss sıralı; üstteki o hafta en çok tutandır). En çok tekrar eden + feed'in üstünde duran küme en sıcak açıdır. Sayı uydurma; frekansı ve sırayı `veri/` dosyasından say.
4. **Nişe uyarla:** her açıyı `marka/01-marka.md` işine çevir. "Bu hook senin nişinde şuna denk gelir" de, somut. `marka/01-marka.md` "ne DEĞİLSİN" satırına takılan açıyı ELE, "bu senin işin değil, atla" diye işaretle (nedeniyle).
5. **Örnek başlık yaz:** her tutan açı için markanın SESİYLE 1-2 örnek başlık/hook öner (`marka/02-ses.md` tonuyla, yasak kelimeler olmadan). Format önerisi ekle (reel, carousel, kısa video, uzun video).

## Değişmez üretim kuralları
- `marka/02-ses.md` içindeki YASAK kelimeleri ASLA kullanma. Yasak kalıp gördüğünde başlığı baştan yaz.
- `marka/01-marka.md` içindeki "ne DEĞİLSİN" satırlarına ters düşme. Nişin dışındaki trendi "üret" diye önerme; gördüğünü ama neden atladığını yaz.
- **Uydurma trend YOK.** Yalnız `veri/` içinde GERÇEKTEN olan başlıklardan çıkarım yap. RSS'te olmayan oy/yorum sayısını UYDURMA; sıcaklığı frekans + feed sırasından oku. Veri azsa "veri az, şu subreddit'i ekle ya da örnek yapıştır" de, açı uydurma.
- **Tekrar eşiği:** bir açıyı "trend" saymak için en az 2 başlıkta (ya da 1 Reddit + 1 yapıştırılan örnekte) görülmeli. Tek başlık "olabilir" notuyla ayrı bölüme, brief'in ana listesine değil.
- Reddit İngilizce ağırlıklıdır; başlıklar İngilizce olabilir. Sen kalıbı çıkarıp TÜRKÇE (ya da nişin diline) örnek başlık yazarsın; İngilizce başlığı olduğu gibi kopyalama, ALTINDAKİ kalıbı al.
- Em dash (uzun tire) çıktının HİÇBİR yerinde yok: ne başlıkta, ne brief'te, ne notta. Ayraç gerekirse nokta, virgül, iki nokta ya da orta nokta (·).

## Çıktı nereye yazılır
Her turu `ciktilar/` klasörüne tek dosya olarak yaz: `ciktilar/YYYY-AA-GG-brief.md`.
Dosya içinde: (a) çekilen veri özeti (kaç başlık, hangi subreddit'ler, feed başında duran öne çıkan başlıklar), (b) SICAKTAN SOĞUĞA sıralı açı listesi (frekans + sıra kanıtıyla), (c) "bu hafta üret" kısa listesi (ilk 3-4 açı + örnek başlık + format), (d) atlananlar ("ne DEĞİLSİN"e takılan ya da verisi zayıf açılar, nedeniyle).

## Kalıcı hafıza (sistem her hafta gelişir)
Bir açıyı gerçekten üretip tuttuğunda (ya da tutmadığında) `hedef/01-nis.md` en altındaki "tutan açılar" bölümüne tarih atarak yaz (hangi hook, hangi format, ne oldu). Sonraki briefler oradan da beslenir; sistem her hafta senin gerçekten işine yarayan açıya yaklaşır. Yeni bir subreddit ya da arama terimi fark edince `hedef/01-nis.md` dosyasına ekle.

## Opsiyonel ileri kutu · oy sayısını da istiyorsan (OAuth)
RSS varsayılan, kurulumsuz yoldur ve çoğu kişiye yeter (sıra + frekans sinyal taşır). Oy/yorum SAYISINI da görmek istersen Reddit'in resmi API'si bunu verir, kurulum tek seferliktir:
1. `reddit.com/prefs/apps` aç, "create another app", tür olarak **script** seç.
2. Sana bir `client_id` (uygulama adının altındaki kısa kod) ve `secret` verir.
3. Bunlarla token al: `https://www.reddit.com/api/v1/access_token` ucuna `grant_type=client_credentials` ile Basic Auth (client_id:secret) gönder. (Denemede `401` alıyorsan uç çalışıyor demektir, kimlik bilgisini düzelt.)
4. Token'la `https://oauth.reddit.com/r/<SUBREDDIT>/top?t=week&limit=25` çek; JSON'da `data.children[].data.ups` ve `num_comments` oy ve yorum SAYISINI verir.
Bu yol daha derin sinyal ister; RSS ise sıfır kurulumla çalışır. İkisi de aynı brief'i besler, tek fark oy sayısının görünmesidir.
