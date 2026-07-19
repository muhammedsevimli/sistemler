# Bu klasörü SİSTEM dolduruyor (sen yapıştırmıyorsun)

## Nasıl doluyor
FAZ 1 taramasını çalıştırdığında (`CALISTIR.md` Adım 1), sistem Claude Code'un web araçlarıyla (WebFetch + WebSearch) kaynakları kendisi tarar ve bulduğu gerçek talep cümlelerini buraya `toplanan-YYYY-AA-GG.md` adıyla yazar. Sen bu klasöre elle bir şey koymuyorsun.

## Sistemin her sinyal için yazdığı format

```text
## Sinyal N
Kaynak: <hacker news / reddit / web-forum / ekşi / pazar yeri yorumu>
Link: <çekilen sayfanın/aramanın linki>
Kim söylüyor: <ör. küçük e-ticaretçi, kuaför> (biliniyorsa)
Dert cümlesi: <insanın kendi cümlesi, aynen, kısaltarak>
Para dili: <açık ("ayda 300 TL veririm") / dolaylı (kaçan müşteri, kaybedilen ciro) / yok>
Kaç kaynakta: <tek yer mi, birden çok kaynakta mı tekrar ediyor>
Mevcut çözüm / rakip: <taramada bir ürün adı geçtiyse (rekabet boşluğu puanı için)>
```

## Dürüst sınır (sistem buna uyar)
- Sistem yalnızca GERÇEKTEN çektiği cümleyi yazar. Bir kaynağa erişemezse ("bu ortamda reddit.com kapalı" gibi) bunu açıkça yazar, cümle uydurmaz.
- Açık para dili en değerli sinyaldir. Dolaylı para (kaybedilen ciro, kaçan müşteri) de sayılır ama açık para kadar ağırlık taşımaz.
- Ne kadar iyi arama sorgusu verirsen (`sen/02-kaynaklar.md`) tarama o kadar isabetli olur.

## Örnek dolu dosya
Bu klasördeki `toplanan-2026-07-20.md`, sistemin yerel randevu + küçük e-ticaret alanında yaptığı gerçek bir taramanın çıktısıdır (Hacker News + web/forum kaynaklarından gerçekten çekilmiş sinyaller). Kendi taramanda buraya kendi alanının sinyalleri gelir.
