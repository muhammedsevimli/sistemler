# Fikir Madencisi

Claude Code'un içinde çalışan, otomatik bir SaaS fikir madeni. İlgilendiğin alanı yazıyorsun; sistem Hacker News'i, web ve forumları (ve erişebiliyorsa Reddit'i) kendisi tarıyor, insanların "keşke şu olsa", "buna öderim", "elle yapıyorum bıktım" dediği gerçek talebi topluyor, her birini bir fikre çeviriyor, dört kritere göre puanlıyor ve bu hafta kurabileceğin en iyi 5 fikri gerekçesiyle sıralı veriyor. Fikri sistem buluyor, kararı sen veriyorsun. Sen hiçbir şey yapıştırmıyorsun.

## Ne işe yarıyor

"Bir şey kurayım" diyorsun ama ne kuracağını bilmiyorsun. Aklına gelen ilk fikre üç ay veriyorsun, sonunda kimsenin para vermediği bir ürün çıkıyor elinden. Oysa insanlar derdini her gün açık açık yazıyor: "keşke şu olsa", "buna çözüm arıyorum", "her ay elle yapıyorum bıktım", "bunun için öderim".

Bu sistem o cümleleri kendisi tarayıp bulur, okunabilir fikirlere çevirir, dört kritere (pazar boyutu, kurulabilirlik, rekabet boşluğu, Türkiye uyumu) 1-5 puanlar, profiline göre süzer ve gerekçeli bir kuyruk verir. Sana emir vermez.

## Kurulum

Tek komut (degit kuruluysa):

```text
npx degit muhammedsevimli/sistemler/fikir-madencisi fikir-madencisi
```

Komutla uğraşmak istemezsen: bu klasörü indir, `fikir-madencisi` adıyla bilgisayarına koy. Sonra Claude Code'u bu klasörde aç ve "bunu benim işim için kur" de. `sen/01-profil.md` içinde ilgilendiğin alanı ve neyi kurabileceğini yaz, gerisi hazır.

Adım adım anlatım ve teknik olmayanlar için "klasör nasıl açılır" bölümü: kurulum rehberi (Notion teslim sayfası).

## Nasıl çalışıyor

İki faz:

1. **Otomatik tarama.** `sen/01-profil.md`'ye ilgilendiğin alanı yazarsın. Sistem Claude Code'un web araçlarıyla (WebFetch + WebSearch) Hacker News'i, web ve forumları, erişebiliyorsa Reddit'i kendisi tarar, para dili geçen gerçek talep cümlelerini `sinyaller/` içine kaynağıyla yazar. Sen bir şey yapıştırmazsın.
2. **Puanlama.** `sinyaller/` içindeki cümleleri fikre çevirir, dört kritere gerekçesiyle puanlar, profilinden süzer, en iyi 5 fikri `ciktilar/` içine yazar. En üstte "bu hafta buradan başla", en altta elenenler.

## Dosya yapısı

```text
fikir-madencisi/
  CLAUDE.md            sistemin beyni (otomatik okunur)
  CALISTIR.md          iki komut: tara + puanla
  sen/
    01-profil.md       ilgilendiğin alan, ne kurabildiğin, sınırların
    02-kaynaklar.md    otomatik tarama sorguları (hn, reddit, web, x)
  format/
    kriterler.md       dört kriterin 1-5 puanlama cetveli
    rapor-format.md    5 fikir raporunun yapısı
  sinyaller/           sistemin taradığı gerçek talep cümleleri buraya YAZILIR
  ciktilar/            skorlu 5 fikir raporu buraya yazılır
```

## Dürüst sınır

- Sistem talebi kendisi tarar. Tam otomatik kaynaklar: Hacker News (public JSON) ve web/forum (arama). Reddit tasarımda otomatiktir (public JSON) ama bazı ortamlarda erişim kapalı olabilir; sistem dener, kapalıysa "erişilemedi" der ve uydurmaz. X login istediği için otomatik taranmaz; onun için tek tık arama linki üretilir.
- Sistem sinyal ve fikir uydurmaz. Bir kaynağa erişemezse "erişilemedi" der. Elinde sinyal yoksa "önce tara" der.
- Puanlar bir pusula, kesin gerçek değil. Bir fikrin gerçekten para edip etmediği ancak MVP'yi kurup ilk müşterilere sorunca belli olur.

## Muhammed Sevimli

AI ile gerçek satış ve büyüme sistemleri kuruyorum. Bir yerde takılırsan yaz, bakarım.

- Instagram: https://instagram.com/msevimli_
- X: https://x.com/_msevimli
- Threads: https://threads.net/@msevimli_
- YouTube: https://youtube.com/@msevimli
- E-posta: hey@muhammedsevimli.com

Claude Code ile inşa edildi.
