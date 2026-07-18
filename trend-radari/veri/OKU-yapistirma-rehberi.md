# veri/ klasörü · ne var, ne yapıştırırsın

Bu klasörde iki tür dosya (ve bir alt klasör) olur:
1. **reddit-YYYY-AA-GG.md** · sistem 1. komutta OTOMATİK oluşturur. Sen dokunmuyorsun.
2. **rss/** · sistemin curl ile indirdiği ham RSS dosyaları (subreddit başına bir `.rss`). Ara dosya, sen bakmıyorsun.
3. **(opsiyonel) yapistirma-*.md** · YouTube/TikTok/Reels'ten öne çıkanı ELLE yapıştırdığın dosya.

## Reddit tarafı tamamen otomatik
1. komutu çalıştırınca sistem `hedef/01-nis.md` subreddit'lerinin herkese açık RSS akışını (`top/.rss?t=week`) Bash curl ile çeker ve `reddit-YYYY-AA-GG.md` dosyasını kendi yazar (subreddit · sıra · başlık · tarih · link). Anahtar yok, üyelik yok, kurulum yok, tık yok. RSS oy sayısı vermediği için sistem sıcaklığı feed sırası + tekrar sayısından okur; oy SAYISINI da istersen `CLAUDE.md` opsiyonel OAuth kutusuna bak.

## YouTube / TikTok / Reels yapıştırma (opsiyonel · 3 dakika)
Zorunlu değil. Sistem yalnız Reddit'le de çalışır. Ama nişinde son bir haftada patlayan 3-5 kısa video/reels varsa, onları yapıştırınca brief daha isabetli olur (Reddit'te olmayan güncel format trendlerini yakalar).

### Nasıl yapıştırırsın
1. YouTube/TikTok/Instagram'da nişini ara, "bu hafta" ya da son birkaç güne filtrele, en çok izlenen/beğenilenlere bak.
2. Bu klasörde `yapistirma-YYYY-AA-GG.md` adında bir dosya aç.
3. Her video için aşağıdaki bloğu doldur. Sayı görmüyorsan boş bırak, uydurma; sistem uydurma sayı kullanmaz.

### Şablon (her video için bir blok)
```text
## <video başlığı ya da ilk cümlesi>
Platform: <YouTube Shorts / TikTok / Reels>
İzlenme/beğeni: <görebiliyorsan sayı, yoksa boş>
Format: <konuşan kafa / ekran kaydı / önce-sonra / liste / seslendirme>
İlk 3 saniye ne diyor: <hook cümlesi>
Konu: <tek cümle>
Not: <dikkatini çeken şey. yoksa boş.>
```

## İpuçları
- İlk 3 saniye (hook) en değerli veri. Sistem konuyu değil hook kalıbını alır.
- Metni düzeltme, olduğu gibi yapıştır.
- Emin olmadığın sayıyı boş bırak. Sistem boşsa boş der, uydurmaz.
- 3-5 örnek iyi bir başlangıç. Tek örnekten kalıp çıkmaz.
