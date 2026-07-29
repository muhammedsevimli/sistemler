# Çalıştır

İki adım. Doldurması on dakika, tarama birkaç dakika.

## 1. Araçlarını yaz

`sen/01-araclar.md` dosyasını aç ve doldur:

- Teknik seviyeni işaretle. Sistem kurulum ve bakım puanlarını buna göre kaydırıyor.
- Sunucun var mı yaz. Varsa yeni araçların maliyeti paylaşılıyor, yoksa sistem sunucu kirasını hesaba katıyor.
- Araç listesini doldur. En önemli sütun **"bu araçta gerçekten ne yapıyorum"**.

Bu son sütunu doğru yazmak, raporun işe yarayıp yaramayacağını belirliyor:

- Kötü: "proje yönetimi"
- İyi: "haftalık yapılacaklar listesi tutuyorum, üç kişi görüyor, dosya eklemiyorum"

Çünkü sistem aracın tamamına değil, senin dokunduğun kısma alternatif arıyor. Notion'un veritabanı özelliklerini kullanmıyorsan, onları karşılamayan bir alternatif senin için yine de geçerli.

## 2. Claude Code'u bu klasörde aç ve şunu yaz

```text
tara
```

Sistem her araç için açık kaynak ve self-host alternatifleri arıyor, bulduğu projeleri tek tek doğruluyor (lisans, son güncelleme, docker var mı) ve `veri/` klasörüne yazıyor.

Tarama bitince:

```text
kesme listesini çıkar
```

Rapor `ciktilar/` klasörüne düşüyor.

---

## Raporda ne var

| Bölüm | Ne söylüyor |
|---|---|
| A | Şu an aylık ve yıllık ne ödüyorsun |
| B | Araç araç bulunan alternatifler, lisansıyla |
| C | Dört kriter puan tablosu |
| D | Üç bant: KES, DENE, DOKUNMA |
| E | Net yıllık fark, altyapı gideri düşülmüş |
| F | Karşılığı bulunamayanlar |
| G | Önceki taramaya göre zam yapanlar |

En çok bakacağın yer **Bölüm E**. Orada brüt tasarruf değil, sunucu ve bakım gideri düşülmüş **net** rakam var.

---

## Sık sorulanlar

**Sistem her şeyi kesmemi mi söyleyecek?**
Hayır. Alternatifi olmayan, bakımsız ya da toplam maliyeti aboneliği geçen araçları DOKUNMA bandına koyuyor ve nedenini yazıyor. Self-host her zaman ucuz değil.

**Sunucum yok, yine de işe yarar mı?**
Evet. Sistem sunucu kirasını maliyet hesabına katıyor. Ayrıca bazı alternatiflerin ücretsiz barındırılan katmanı var, onlarda sunucu hiç gerekmiyor ve sistem bunu görüp puanı yükseltiyor.

**TL hesabını nereden alıyor?**
Kuru sen veriyorsun ya da sistem canlı çekiyor, ama hangi kuru hangi tarihte kullandığını rapora yazıyor. Uydurma kur kullanmıyor.

**Lisans neden önemli?**
AGPL lisanslı bir aracı kendi işinde kullanabilirsin ama müşterine servis olarak sunarsan kaynak paylaşımı yükümlülüğü doğabilir. Ayrıca "açık kaynak" görünen bazı projeler açık çekirdek: gövde açık, kurumsal kısımlar ticari. Sistem bu ayrımı raporda gösteriyor.

**Ne sıklıkta çalıştırmalıyım?**
Üç ayda bir. Eski `veri/` dosyaları silinmiyor, böylece rapor sana hangi aracın zam yaptığını da gösteriyor.

**Kestiğim aboneliği nasıl kaydediyorum?**
`sen/01-araclar.md` en altındaki karar defterine tek satır yaz. Sistem sonraki taramada aynı şeyi tekrar önermiyor.
