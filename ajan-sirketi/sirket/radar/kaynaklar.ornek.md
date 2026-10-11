# Gözcünün listesi (örnek)

> Bu dosya kurgusal Urla Sofrası için örnek listedir. `rakiplerimi izle` komutu senin cevaplarınla `sirket/radar/kaynaklar.md` dosyasını yazar; bu örnek yalnız biçimi gösterir. Demo şirketle denemek istersen CEO bu dosyayı `kaynaklar.md` adıyla kopyalar.
> Listedeki adreslerin hepsi herkese açık kaynaklardır. Gözcü yalnız okur, hiçbir yere bir şey göndermez.

gun: 4

| Ad | Tür | Adres | Not |
|---|---|---|---|
| Yemek.com · YouTube | youtube | https://www.youtube.com/feeds/videos.xml?channel_id=UCWA2nh0yrIMC6uG0hfbucRQ | tarif videoları, haftada birkaç video |
| Nefis Yemek Tarifleri · YouTube | youtube | https://www.youtube.com/feeds/videos.xml?channel_id=UCeh3XQszWO6lLdKz_SZmm1Q | ev yemeği ve tatlı |
| Refika'nın Mutfağı · YouTube | youtube | https://www.youtube.com/@refikaninmutfagi | kanal adresi yazıldı, tarayıcı channel_id'yi kendisi bulur |
| Yemek.com · site | site | https://yemek.com | sitenin beslemesini tarayıcı kendisi bulur |
| Haberler: Urla restoran | haber | Urla restoran | Google Haberler araması |
| Haberler: Urla gastronomi | haber | Urla gastronomi | Google Haberler araması |
| Reddit: r/izmir | reddit | r/izmir | şehirde yeme içme soruları |

## Türler

| Tür | Adrese ne yazılır | İzlenme bilgisi |
|---|---|---|
| `youtube` | Kanal adresi (`https://www.youtube.com/@kanal`) ya da besleme adresi. Tarayıcı kanal sayfasının kaynağındaki `channelId` değerini bulur. | Var (izlenme ve beğeni) |
| `haber` | Aranacak kelimeler (`Urla restoran`). Tarayıcı Google Haberler RSS adresini kendisi kurar. Tam adres de yazılabilir. | Yok |
| `rss` | Sitenin RSS ya da Atom beslemesi (`https://site.com/feed`). | Yok |
| `site` | Sitenin ana sayfası. Tarayıcı beslemeyi, bulamazsa site haritasını arar. | Yok |
| `sitemap` | Site haritası (`https://site.com/sitemap.xml`). Başlık yoksa adresten çıkarılır. | Yok |
| `reddit` | `r/izmir` gibi bir topluluk ya da aranacak kelime. Reddit bazen anahtarsız okumayı geri çevirir; o zaman kaynak atlanır. | Yok |
| `link` | Elle eklediğin tek bir bağlantı. X ve TikTok gönderilerinin metnini okur. Instagram ve Facebook giriş istediği için okunmaz; o zaman Not sütununa yazdığın metin kullanılır. | Yok |

X, Instagram ve TikTok hesaplarını düzenli takip etmek bu sürümde yok: bu siteler anahtarsız liste vermiyor. Gördüğün bir gönderiyi `link` satırı olarak eklersen gözcü onu da okur.
