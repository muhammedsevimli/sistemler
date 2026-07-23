# 02 · Kaynaklar ve Otomatik Arama Sorguları

> Sistem talebi KENDİSİ tarar. Bu dosya, hangi sorgularla tarayacağını söyler.
> Aşağısı kurgusal bir örnektir (yerel randevu + küçük e-ticaret alanı). Kendi alanına göre değiştir, iyi sorgu buldukça ekle.
> İlke: insanların bir çözüm için AÇIKÇA istek/şikayet dilini kullandığı yerlere bak. En değerli sinyal "bunun için para verirdim" cümlesidir.

## Talep dili kalıpları (sistem bunları arar)
Hangi kaynakta olursa olsun sistemin aradığı cümle tipleri:
- "keşke şöyle bir uygulama / araç olsa"
- "buna bir çözüm arıyorum", "böyle bir şey var mı"
- "her ay elle yapıyorum, bıktım", "manuel uğraşıyorum"
- "<araç>'dan nefret ediyorum", "<araç> çok pahalı / karışık"
- "bunun için ayda şu kadar veriyorum", "buna öderdim"
- "Türkçe olanı yok", "TR'de çalışmıyor"

## Hacker News sorguları (tam otomatik · hn.algolia.com)
Sistem her sorgu için `https://hn.algolia.com/api/v1/search?query=<SORGU>&tags=comment` çeker (adres `https` olmalı, `http` 301 döner). Kendi alan kelimelerini ekle.
- `appointment scheduling small business`
- `no-show appointments deposit`
- `respond to reviews small business`
- `ecommerce returns refund manual`
- `someone should build` (genel talep avı)
- `I would pay for` (para dili avı)

## Reddit sorguları (tam otomatik · reddit.com/search.rss)
Sistem her sorgu için `reddit.com/search.rss?q=<SORGU>` (ya da hedef subreddit'te `r/<sub>/search.rss`) akışını `curl` ile çeker. Reddit'in `search.json` ucu anahtarsız isteklere `403` verdiği için RSS kullanılır. `403`/`429` gelirse tekrar dener, yine olmazsa `site:reddit.com <SORGU>` ile WebSearch'e düşer ve bunu rapora yazar.
- `r/smallbusiness` · `no show appointments`, `booking software frustration`
- `r/ecommerce` · `returns manual spreadsheet`
- genel · `"I wish there was an app" small business`

## Web + forum sorguları (tam otomatik · WebSearch)
Sistem bunları web aramasıyla tarar (Ekşi, sektör forumları, pazar yeri/uygulama yorumları, "arıyorum" aramaları).
- `ekşi sözlük <sektör> randevu gelmeyen müşteri`
- `<sektör> "keşke bir uygulama olsa"`
- `<iş> "yazılımı arıyorum"`, `<iş> "programı öneri"`
- Trendyol / Hepsiburada: alanına yakın ürünlerde 1-2 yıldızlı yorumlar.
- App Store / Google Play: benzer uygulamaların düşük yıldızlı yorumları ("şu özellik yok", "TR'de çalışmıyor").

## X (Twitter) aramaları (yarı otomatik · login ister)
Sistem bunları otomatik çekmez; her biri için tek tık arama linki üretir, istersen elle bakarsın.
| Arama kalıbı | Neyi arıyorsun |
|---|---|
| `"keşke bir uygulama olsa"` | genel dile gelmiş talep |
| `"böyle bir araç var mı"` | çözüm arayan kullanıcı |
| `<sektör kelimen> "elle yapıyorum"` | manuel derdi |
| `"randevu" "kaçırıyorum"` | randevu alan işletme derdi |

## Karar defteri (sistem doldurur / sen doldurursun)
Bir fikri kurmaya karar verdiğinde ya da vazgeçtiğinde buraya tarih atarak yaz. Sonraki raporlar bunu okur, aynı fikri tekrar önermez.
- (henüz yok)
