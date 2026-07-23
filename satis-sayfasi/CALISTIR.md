# ÇALIŞTIR · Tek Komut

> Ürününü `sen/01-urun.md` içine yaz, form uç noktan ile ödeme linkini `sen/02-baglantilar.md` içine yapıştır. Sonra Claude Code'u bu klasörde aç ve aşağıdaki komutu kopyala.
> Claude Code `CLAUDE.md` sayesinde ürün, bağlantılar, format ve şablon dosyalarını zaten okuyacak.

## Tek komut (kopyala)

```
satış sayfamı üret.

kurallar:
- önce sen/01-urun.md, sen/02-baglantilar.md, format/sayfa-format.md dosyalarını okuduğunu tek satırla söyle.
- satış metnini format/sayfa-format.md sırasına göre yaz: başlık, alt başlık, kimin için, dert, çözüm, ne kapsıyor, kanıt, sık sorulan, fiyat, iade, iletişim, cta. metni ciktilar/<slug>-metin.md dosyasına yaz.
- format/sablon.html iskeletini kullanarak tek dosyalık çalışan bir html satış sayfası üret, ciktilar/<slug>-satis-sayfasi.html olarak yaz. dış css, dış font, dış script çekme, tek dosya olsun.
- sen/02-baglantilar.md'deki form uç noktasını formun action'ına, ödeme linkini butonun href'ine koy. eksikse yerine görünür uyarı bırak, sessizce # koyma.
- ürün dosyasında boş bıraktığım alanı uydurma. kanıt yoksa kanıt bölümünü sayfaya hiç koyma, uydurma yorum ve uydurma yüzde yazma.
- garanti, kesin sonuç, sahte aciliyet, motivasyon dili kullanma. em dash kullanma.
- "ne değil" listemdeki hiçbir şeyi sayfada ima etme.
- format/lansman-kontrol.md listesini ürüne göre doldurup ciktilar/<slug>-lansman-kontrol.md dosyasına yaz.
- sonunda hangi alanların boş olduğunu ve benim ne eklemem gerektiğini tek liste halinde söyle.
```

## Sadece metni güncellemek istersen

```
satış metnini yeniden yaz, html'i sonra üretiriz. başlığı daha somut yap, ne sattığımı ilk cümlede söylesin.
```

## Sadece bağlantıları güncellemek istersen

```
sen/02-baglantilar.md'yi güncelledim. ciktilar'daki html sayfasında form action'ını ve ödeme linkini yeni değerlerle değiştir, başka hiçbir şeye dokunma.
```

## Sonra ne yapıyorsun

1. `ciktilar/<slug>-satis-sayfasi.html` dosyasına çift tıkla. Sayfa tarayıcında açılır.
2. Beğenmediğin cümleyi `ciktilar/<slug>-metin.md` içinde düzelt, "metni güncelledim, html'i yeniden üret" de.
3. `ciktilar/<slug>-lansman-kontrol.md` listesindeki maddeleri tek tek test et.
4. Dosyayı ücretsiz bir statik hostinge sürükle bırak (Netlify Drop, Cloudflare Pages, GitHub Pages). Adresin oluşur.

## Not

Sistem ödeme sağlayıcısı kurmaz, hesap açmaz, senden şifre ya da API anahtarı istemez. Hazır ödeme linkini sen bir kere alırsın, sistem sayfaya bağlar. Tahsilat, komisyon, iade ve fatura senin sağlayıcı hesabında yürür.
