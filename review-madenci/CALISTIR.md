# ÇALIŞTIR · İki Komut

> Yorumları satış metnine çevirmek iki adım. Bu dosyayı açıp ilgili komutu kopyala, `<...>` yerlerini kendine göre doldur.
> Claude Code `CLAUDE.md` sayesinde marka + ses + itiraz hafızası + format dosyalarını zaten okuyacak.

## Adım 1 · Yorumları sisteme al

İki yolun var:

**A) Yapıştırma (ana yol, her platformda çalışır):** ürününün yorumlarını (Trendyol, Amazon, Shopify, Instagram, Google, Etsy, Judge.me, nereden geliyorsa) kopyalayıp `yorumlar/` klasöründe bir dosyaya yapıştır (örn. `yorumlar/nemlendirici.md`). Nasıl yapıştırılacağı `yorumlar/OKU-yapistirma-rehberi.md` içinde. En az 8-10 yorum iyi bir başlangıç, ne kadar çok yorum o kadar net tema.

**B) Link denemesi (basit sayfalarda):** yorumları düz gösteren tek bir sayfa linkin varsa bu komutu ver:

```
şu linkteki müşteri yorumlarını oku ve yorumlar/ klasörüne kaydet: <LINK>

- sayfada görünen yorumları düz metin olarak çıkar.
- her yorumu --- ile ayır, varsa puanı ve tarihi de al.
- sayfadan yorum okuyamazsan (giriş istiyor, boş geliyor, yüklenmiyorsa) uydurma. bana "okuyamadım, yapıştır" de.
```

Sistem okuyabilirse kaydeder ve kaç yorum bulduğunu söyler. Okuyamazsa yapıştırma yoluna geçersin (çoğu büyük platformda yapıştırma gerekir, bu normal).

## Adım 2 · Çözümle ve satış cephanesini çıkar (kopyala)

```
yorumlar klasöründeki tüm müşteri yorumlarını çözümle ve bana satış cephanesi çıkar.

kurallar:
- önce marka + ses + itiraz hafızası + format + ham yorumlar dosyalarını okuduğunu ve kaç yorum bulduğunu tek satırla söyle.
- her yorumu duygu (olumlu / karışık / eleştiri) ve tema olarak etiketle.
- tekrar eden temaları üç gruba kümele ve her temanın kaç yorumda geçtiğini say: neden alıyorlar, neye güveniyorlar, neye takılıyorlar.
- neye takılıyorlar grubunda en sık gelen itirazı işaretle ve kaç yorumda geçtiğini yaz.
- her ana tema için markamın sesiyle üret: satış açısı, itiraz cevabı, reklam kancası.
- açıları ve kancaları müşterinin kendi kelimelerinden kur. yorumlarda olmayan faydayı, sonucu, garantiyi uydurma.
- bir itirazı cevaplarken onu çürüten başka gerçek müşteri cümlesi varsa onu kullan; yoksa markadaki gerçek teklifimi kullan; ikisi de yoksa placeholder bırak.
- her açının altına hangi yorumlardan geldiğini kısa alıntıyla yaz (kanıt izi).
- 02-ses.md yasak kelimelerini kullanma, em dash kullanma.
- çıktıyı ciktilar/ klasörüne YYYY-AA-GG-urun.md olarak yaz. en sonda linkedin için "siz" notu ver.
```

## Kısa versiyon (acele edince)

```
yorumlar'daki müşteri yorumlarını çözümle: temaları kümele (neden alıyorlar / güven / itirazlar), en sık itirazı bul, her ana temaya satış açısı + itiraz cevabı + reklam kancası çıkar, hepsini müşterinin kendi dilinden kur, uydurma. çıktıyı ciktilar'a koy. ses ve format dosyalarına uy, em dash yok.
```

## Not
Ne kadar çok yorum verirsen tema o kadar net çıkar. En az 8-10 yorum, ideali 20-50. Hem beş yıldızlı hem düşük puanlı yorumları birlikte ver: satış açıları olumlu yorumlardan, itiraz cevapları eleştirilerden çıkar. Tek yıldızlı yorumlar altın değerinde, en çok orada takıldıklarını görürsün.
