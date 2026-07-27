# Çalıştır

Üç adım. Toplam beş dakika.

## 1. Ekran görüntüsünü koy

Sayfanın ekran görüntüsünü al ve `ekranlar/` klasörüne at.

Tam sayfa almak istersen tarayıcıda `F12` bas, sonra `Ctrl + Shift + P` yaz, açılan kutuya "Capture full size screenshot" yaz ve çalıştır. Mac'te `Cmd + Option + I` sonra `Cmd + Shift + P`.

Dosya adına ne olduğunu yaz: `anasayfa-masaustu.png`. Mobil görüntüyü de koyarsan denetim iki katı işe yarar.

Ayrıntı: `ekranlar/OKU-nasil-koyulur.md`.

## 2. Marka dosyasını doldur (opsiyonel)

`sen/01-marka.md` dosyasına markanın renklerini ve yazı tiplerini yaz. Böylece sistem onları değiştirmeyi önermez.

Boş bırakırsan da çalışır. O zaman sistem renk ve yazı tipi önerisini serbest sayar.

## 3. Claude Code'u bu klasörde aç ve şunu yaz

```text
denetle
```

Sistem `ekranlar/` klasöründeki görüntüleri okur, sekiz başlıkta ölçer ve raporu `ciktilar/` klasörüne yazar.

---

## Sonra ne yapıyorsun

Rapor açılınca en alttaki **Bölüm D · Düzeltme talimatı** bloğunu olduğu gibi kopyala.

Bu bloğu sayfayı hangi araçla kurduysan ona yapıştır:

| Sayfayı kurduğun yer | Nereye yapıştırıyorsun |
|---|---|
| Claude Code, Codex, Cursor | doğrudan sohbete |
| Lovable, v0, Bolt | proje sohbetine |
| Framer, Webflow, Canva | kendi yapay zeka asistanına, ya da elle uygularsın |
| Elle kod yazıyorsan | maddeleri sırayla uygularsın |

Blok kendi kendine yeter. Denetim raporunun geri kalanını yapıştırmana gerek yok, gerekçeler sende kalır.

---

## Sık sorulanlar

**Kod dosyamı vermem gerekmiyor mu?**
Hayır. Sistemin tek girdisi ekran görüntüsü. Sayfayı neyle kurduğun fark etmez.

**Sayfam yayında değil, sadece tasarım dosyam var.**
Tasarımın ekran görüntüsünü al, aynı şekilde çalışır. Figma, Canva, hepsi olur.

**Sistem sayfamı yeniden mi tasarlıyor?**
Hayır. Neyin yanlış olduğunu ölçer, nasıl düzeltileceğini yazar. Metnini, bölüm sıranı, konseptini değiştirmeyi önermez.

**Markamın rengi kontrast testinden kaldı, rengimi mi değiştireceğim?**
Hayır. `sen/01-marka.md` dosyasına rengini yazdıysan sistem ona dokunmaz. Onun yerine o rengin üstündeki metnin rengini ya da rengin kullanıldığı yeri değiştirmeyi önerir.

**Aynı sayfayı tekrar denetleyebilir miyim?**
Evet, düzeltmelerden sonra yeni ekran görüntüsü al ve tekrar çalıştır. Sistem eski raporu okur ve "şu düzelmiş, şu düzelmemiş" tablosu çıkarır.

**Ne kadar sürüyor?**
Tek sayfa için birkaç dakika.
