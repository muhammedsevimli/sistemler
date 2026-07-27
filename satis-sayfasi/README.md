# Satış Sayfası + Ödeme

Claude Code'un içinde çalışan, tek dosyalık satış sayfası üreteci. Ürününü ya da hizmetini bir dosyaya yazıyorsun: ne, kime, hangi derde çare, fiyat, kanıt. Sistem satış metnini yazıyor, çift tıkla açılan çalışan bir `.html` sayfası üretiyor, e-posta formunu ve hazır ödeme linkini sayfaya bağlıyor, üstüne yayına almadan önce test edeceğin lansman kontrol listesini veriyor. Sayfayı ücretsiz bir statik hostinge sürükleyip bırakınca yayında oluyor.

## Ne işe yarıyor

Ürün ya da hizmet hazır, insanlara anlatacak bir sayfan yok. "Yakında" diye bekletiyorsun. Sayfa yapmak için tasarımcı, tahsilat için altyapı gerekiyor sanıyorsun. Aylardır DM'den fiyat söyleyip IBAN atıyorsun.

Bu sistem o sayfayı üretiyor. Bağımlılık yok, kurulum yok, build yok: tek bir `.html` dosyası çıkıyor, çift tıkla açılıyor, mobilde de karanlık modda da düzgün duruyor.

## Sistem ödemeyi KURMUYOR (dürüst sınır, en baştan)

Sistem ödeme sağlayıcısı kurmuyor, senin adına hesap açmıyor, kart bilgisi işlemiyor, komisyon ayarlamıyor ve senden hiçbir şifre ya da API anahtarı istemiyor. Sen Stripe, Gumroad, Lemon Squeezy, Shopify ya da iyzico tarafında hazır bir ödeme linki alıyorsun (bir kerelik iş), o linki bir dosyaya yapıştırıyorsun, sistem sayfadaki butona bağlıyor. Tahsilat, iade ve fatura senin sağlayıcı hesabında yürüyor. E-posta toplama da aynı: kendi form uç noktanı (Formspree, Google Form, Klaviyo, Mailchimp) veriyorsun, sistem forma bağlıyor. Liste senin hesabında kalıyor.

## Kurulum

Tek komut (degit kuruluysa):

```text
npx degit muhammedsevimli/sistemler/satis-sayfasi satis-sayfasi
```

Komutla uğraşmak istemezsen: bu klasörü indir, `satis-sayfasi` adıyla bilgisayarına koy. Sonra Claude Code'u bu klasörde aç ve "bunu benim ürünüm için kur" de. `sen/01-urun.md` içine ürününü, `sen/02-baglantilar.md` içine form uç noktanı ve ödeme linkini yaz, gerisi hazır.

Adım adım anlatım ve teknik olmayanlar için "klasör nasıl açılır" bölümü: kurulum rehberi (Notion teslim sayfası).

## Nasıl çalışıyor

Üç faz, tek komut:

1. **Metin.** `sen/01-urun.md` okunur, satış metni yazılır: başlık, alt başlık, kimin için, dert, çözüm, ne kapsıyor, kanıt, sık sorulan, fiyat, iade, iletişim. `ciktilar/<slug>-metin.md` dosyasına iner, istediğin cümleyi elle düzeltebilirsin.
2. **Sayfa.** `format/sablon.html` iskeletine metin ve bağlantılar yerleşir, `ciktilar/<slug>-satis-sayfasi.html` üretilir. Tek dosya, dış font ve script yok, mobil uyumlu, koyu ve açık tema uyumlu.
3. **Lansman kontrol listesi.** `ciktilar/<slug>-lansman-kontrol.md` üretilir. Yayına almadan önce form gerçekten mail düşürüyor mu, ödeme linki doğru ürüne mi gidiyor, fiyat ve iade yazıyor mu, tek tek test edersin.

## Dosya yapısı

```text
satis-sayfasi/
  CLAUDE.md            sistemin beyni (Claude Code otomatik okur)
  AGENTS.md            aynı içerik (Codex, Cursor, Windsurf okur)
  CALISTIR.md          tek komut: sayfamı üret
  sen/
    01-urun.md         ürün: ne, kime, hangi dert, kapsam, fiyat, kanıt, iade, ne DEĞİL
    02-baglantilar.md  form uç noktası + hazır ödeme linki + renk
  format/
    sayfa-format.md    metnin bölüm sırası ve yazım kuralları
    sablon.html        tek dosyalık sayfa iskeleti (yer tutuculu)
    lansman-kontrol.md yayın öncesi test listesi şablonu
  ciktilar/            üretilen metin, sayfa ve kontrol listesi buraya yazılır
```

## Ne uydurmuyor

- Kanıt vermediysen sayfada kanıt bölümü olmuyor. Uydurma müşteri yorumu, uydurma yıldız, uydurma "300 kişi aldı", uydurma "%40 arttı" yazmıyor.
- İade koşulu yazmadıysan "14 gün koşulsuz iade" uydurmuyor, "bunu sen yazmalısın" diye uyarıyor.
- Ödeme linkini ya da form adresini vermediysen butonu sessizce boşa bağlamıyor; sayfada görünür kırmızı uyarı bırakıyor ki yayına almadan fark edesin.
- Garanti, kesin sonuç, sahte aciliyet ve motivasyon dili kullanmıyor.
- "Sunmuyorum" dediğin hiçbir şeyi sayfada ima etmiyor.

## Dürüst sınır

- Sistem sayfayı kurar, satışı garanti etmez. Bir sayfanın gerçekten sattığı ancak trafik gelince belli olur.
- Ödeme sağlayıcısı hesabını sen bir kere açarsın, sistem açmaz.
- Sayfa statik. Stok takibi, üyelik girişi, kupon ve otomatik teslimat yok. Onlar sağlayıcının işi.
- Vergi, fatura ve mesafeli satış yükümlülükleri senin sorumluluğunda. Sistem sayfaya satıcı, fiyat, iade ve iletişim satırlarını koyar, hukuki danışmanlık vermez.

## Muhammed Sevimli

AI ile gerçek satış ve büyüme sistemleri kuruyorum. Bir yerde takılırsan yaz, bakarım.

- Web: https://muhammedsevimli.com
- Instagram: https://instagram.com/msevimli_
- X: https://x.com/_msevimli
- Threads: https://threads.com/@msevimli_
- YouTube: https://youtube.com/@msevimli
- E-posta: hey@muhammedsevimli.com

Claude Code ile inşa edildi.
