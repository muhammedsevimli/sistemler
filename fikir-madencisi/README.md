# Fikir Madencisi

Claude Code'un içinde çalışan, dosya-tabanlı bir SaaS fikir puanlayıcısı. İnsanların açıkça istediği dertleri bir kere toplayıp yapıştırıyorsun; sistem her birini bir fikre çeviriyor, dört kritere göre puanlıyor ve bu hafta kurabileceğin en iyi 5 fikri gerekçesiyle sıralı veriyor. Fikri sistem buluyor, kararı sen veriyorsun.

## Ne işe yarıyor

"Bir şey kurayım" diyorsun ama ne kuracağını bilmiyorsun. Aklına gelen ilk fikre üç ay veriyorsun, sonunda kimsenin para vermediği bir ürün çıkıyor elinden. Oysa insanlar derdini her gün açık açık yazıyor: "keşke şu olsa", "buna çözüm arıyorum", "her ay elle yapıyorum bıktım", "bunun için öderim".

Bu sistem o cümleleri okunabilir fikirlere çevirir, dört kritere (pazar boyutu, kurulabilirlik, rekabet boşluğu, Türkiye uyumu) 1-5 puanlar, profiline göre süzer ve gerekçeli bir kuyruk verir. Sana emir vermez.

## Kurulum

Tek komut (degit kuruluysa):

```text
npx degit muhammedsevimli/sistemler/fikir-madencisi fikir-madencisi
```

Komutla uğraşmak istemezsen: bu klasörü indir, `fikir-madencisi` adıyla bilgisayarına koy. Sonra Claude Code'u bu klasörde aç ve "bunu benim işim için kur" de. `sen/` içindeki dosyaları kendi profilin ve kaynaklarınla doldur, gerisi hazır.

Adım adım anlatım ve teknik olmayanlar için "klasör nasıl açılır" bölümü: kurulum rehberi (Notion teslim sayfası).

## Nasıl çalışıyor

İki faz:

1. **Kaynak listesi.** `sen/02-kaynaklar.md` içindeki her kaynak için sistem sana nereye bakacağını (hazır X arama linki + forum/pazar yeri yönü) çıkarır. Sen bakar, gördüğün gerçek talep cümlelerini `sinyaller/` içine yapıştırırsın.
2. **Puanlama.** `sinyaller/` içindeki ham cümleleri fikre çevirir, dört kritere gerekçesiyle puanlar, profilinden süzer, en iyi 5 fikri `ciktilar/` içine yazar. En üstte "bu hafta buradan başla", en altta elenenler.

## Dosya yapısı

```text
fikir-madencisi/
  CLAUDE.md            sistemin beyni (otomatik okunur)
  CALISTIR.md          iki komut: kaynak listesi + puanlama
  sen/
    01-profil.md       kim olduğun, ne kurabildiğin, sınırların
    02-kaynaklar.md    talep sinyalini nerede arıyorsun
  format/
    kriterler.md       dört kriterin 1-5 puanlama cetveli
    rapor-format.md    5 fikir raporunun yapısı
  sinyaller/           topladığın ham talep cümlelerini yapıştırdığın yer
  ciktilar/            skorlu 5 fikir raporu buraya yazılır
```

## Dürüst sınır

- Sistem senin yerine internete girip otomatik tarama yapmaz. Talep sinyalini görme adımı senin aç-ve-yapıştır işin. Okuma, fikre çevirme, puanlama ve sıralama otomatik.
- Sistem fikir uydurmaz. Elinde sinyal yoksa "önce sinyal topla" der.
- Puanlar bir pusula, kesin gerçek değil. Bir fikrin gerçekten para edip etmediği ancak MVP'yi kurup ilk müşterilere sorunca belli olur.

## Muhammed Sevimli

AI ile gerçek satış ve büyüme sistemleri kuruyorum. Bir yerde takılırsan yaz, bakarım.

- Instagram: https://instagram.com/msevimli_
- X: https://x.com/_msevimli
- Threads: https://threads.net/@msevimli_
- YouTube: https://youtube.com/@msevimli
- E-posta: hey@muhammedsevimli.com

Claude Code ile inşa edildi.
