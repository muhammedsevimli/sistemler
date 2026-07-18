# ÇALIŞTIR · İki Komut

> Trend bulmak iki adım. Bu dosyayı açıp ilgili komutu kopyala, çalıştır.
> Claude Code `CLAUDE.md` sayesinde marka + ses + niş + format dosyalarını zaten okuyacak.
> Reddit tarafı tamamen otomatik: sistem RSS'i kendisi çeker, sen hiçbir şey yapıştırmıyorsun.

## Adım 1 · Nişinin reddit topluluklarını tara (kopyala)

```
nişimin reddit topluluklarını tara.

kurallar:
- hedef/01-nis.md dosyasındaki her subreddit için https://www.reddit.com/r/<sub>/top/.rss?t=week adresini çek.
- çekmeyi bash curl ile yap, açıklayıcı bir user-agent ver. webfetch değil, curl kullan (reddit curl'e 200 döner).
- 429 (rate limit) alırsan curl --retry --retry-delay ile bekleyip yeniden dene, subreddit'leri arka arkaya çek.
- her entry'den başlığı, linki ve tarihi al. feed sırasını koru (üstteki o hafta en çok tutandır).
- rss'te oy sayısı yok, uydurma. sıra sinyaldir.
- sonucu veri/reddit-BUGUNUN-TARIHI.md dosyasına tabloya yaz: subreddit, sıra, başlık, tarih, link.
- çekemediğin subreddit olursa uydurma, "çekilemedi (sebep)" yaz.
- en sonda kaç başlık kaç subreddit çektiğini ve http kodunu tek satırla söyle.
```

Sistem her subreddit'in RSS akışını kendisi çeker, en çok yükselen başlıkları `veri/` klasörüne yazar. Sen tık atmıyorsun. (İstersen bu adımdan sonra YouTube/TikTok/Reels'ten öne çıkan birkaç örneği elle yapıştırabilirsin: `veri/OKU-yapistirma-rehberi.md`. Zorunlu değil, sistem yalnız Reddit'le de çalışır.)

## Adım 2 · Bu hafta üret brief'ini al (kopyala)

```
veri klasöründeki başlıkları çözümle, bana "bu hafta üret" brief'i yaz.

kurallar:
- önce marka + ses + niş + format + veri dosyalarını okuduğunu tek satırla söyle.
- başlıkları konuya ve hook kalıbına göre grupla. en az 2 başlıkta tekrar edeni "trend" say.
- her kalıp için tekrar eden hook'u adlandır ve veriden göster: hangi başlıklar, kaç tanesi, hangi subreddit'ler.
- her açıyı sıcaklığına göre derecelendir: rss'te oy yok, o yüzden sıcaklık = kaç başlıkta tekrar etti (frekans) + feed'in üstünde mi duruyor (sıra). sayı uydurma.
- her açıyı benim nişime uyarla: bu hook benim işimde neye denk gelir, somut söyle.
- ne DEĞİLSİN satırına takılan açıyı üretme, gördüğünü ama neden atladığını yaz.
- her tutan açı için benim sesimle 1-2 örnek başlık ve bir format önerisi (reel/carousel/kısa video) yaz.
- em dash kullanma. 02-ses.md yasak kelimelerini kullanma.
- çıktıyı ciktilar/ klasörüne BUGUNUN-TARIHI-brief.md olarak yaz: veri özeti, sıcaktan soğuğa açı listesi, "bu hafta üret" ilk 3-4, atlananlar.
```

## Kısa versiyon (acele edince)
```
veri'deki başlıkları hook kalıbına göre grupla, sıcaktan soğuğa (frekans + feed sırası) sırala, ilk 3-4 açıyı benim sesimle örnek başlıkla "bu hafta üret" olarak yaz, ne değilsin'e takılanı atla, çıktıyı ciktilar'a koy. uydurma, oy sayısı yok, sıra ve tekrar sayısıyla oku.
```

## Adım 3 · Bir açıyı üretip sonucunu gördüğünde (kopyala)
```
<açı adı> açısını üretip yayınladım, sonuç: <tuttu / tutmadı, kısa>. hedef/01-nis.md "tutan açılar" bölümüne bugünün tarihiyle ekle: hangi hook, hangi format, ne oldu. sonraki brieflerde bunu hesaba kat.
```

## Not
Ne kadar çok ve doğru subreddit eklersen tarama o kadar isabetli olur. 3-5 subreddit iyi bir başlangıç. Nişine tam oturan topluluğu seç: geniş bir topluluk (ör. genel bir konu) çok gürültü getirir, dar ve nişine özel topluluk daha temiz sinyal verir. Oy SAYISINI da görmek istersen `CLAUDE.md` en altındaki opsiyonel OAuth kutusuna bak; RSS ise sıfır kurulumla çalışır.
