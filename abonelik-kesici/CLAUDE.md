# Abonelik Kesici · Otomatik Okuma Kuralı

> Bu dosya, bu klasörde açtığın her Claude Code oturumunun BAŞINDA otomatik okunur.
> Sen hiçbir şey ayarlamıyorsun. Claude Code bu klasörde çalışırken bu dosyayı kendiliğinden yükler.
> Amaç: her ay kartından geçen abonelikleri tahmin etmeyi bırakmak. Sen kullandığın araçları ve ücretlerini yazarsın; sistem her biri için açık kaynak ve kendi sunucuna kurulabilen alternatifleri KENDİSİ tarar, dört kritere puanlar ve sıralı bir kesme listesi çıkarır.

## Bu sistemin duruşu (değişmez)
Bu sistem sana "şunu kes" emri vermez. **Alternatifi bulur, gerçek maliyetini çıkarır, sıraya dizer.** Kesme kararı senin. Bir aracın açık kaynak karşılığı varsa ama kurulumu senin teknik seviyeni aşıyorsa, sistem bunu gizlemez; "bu senin için değil" der ve listenin altına atar.

Sistem ayrıca **her aracın kesilmesi gerektiğini savunmaz.** Bazı araçların açık kaynak karşılığı yoktur, bazılarınınki daha pahalıya gelir (sunucu + zaman). Bunları "dokunma" bandına koyar ve nedenini yazar.

## Sistem ne yapıyor (iki faz)

1. **Otomatik tarama (sen yapıştırmıyorsun):** `sen/01-araclar.md`'deki araç listesini okur. Claude Code'un WEB ARAÇLARIYLA (WebSearch + WebFetch) her araç için açık kaynak ve self-host alternatiflerini kendisi arar. Her alternatifin proje adresini, lisansını, son güncellenme durumunu ve kurulum yolunu kaynağıyla `veri/tarama-YYYY-AA-GG.md` dosyasına yazar.
2. **Puanlama + kesme listesi (otomatik):** Toplanan alternatifleri dört kritere göre puanlar, senin teknik seviyene göre süzer, üç banda ayırır (KES / DENE / DOKUNMA) ve yıllık TL farkını hesaplar.

## FAZ 1 · Tarama istendiğinde

`sen/01-araclar.md` dosyasını oku. Listedeki her araç için sırayla:

1. **Alternatif ara.** `WebSearch` ile şu kalıpları kullan: `<araç adı> open source alternative`, `<araç adı> self hosted`, `awesome selfhosted <kategori>`. Türkçe arama yapma, bu alanın kaynakları İngilizce.
2. **Bulunan her alternatif için doğrula.** Proje adresini `WebFetch` ile aç ve şunları çek: lisans (MIT/Apache/AGPL fark eder), son commit ya da son sürüm tarihi, kurulum yöntemi (docker var mı), yönetilen bir bulut sürümü sunuyor mu.
3. **Ölü projeyi işaretle.** Son güncellenme bir yıldan eskiyse "bakımsız" diye işaretle ve puanını düşür. Terk edilmiş bir projeyi tavsiye etmek, aboneliği ödemekten daha pahalıdır.
4. **Alternatifi olmayanı dürüstçe yaz.** Bir araç için gerçek bir karşılık bulamadıysan "karşılığı yok" yaz. Zorlama benzetme yapma.

Topladığın her satırı `veri/tarama-YYYY-AA-GG.md` dosyasına şu formatta yaz: araç · alternatif adı · adres · lisans · son güncelleme · docker var mı · yönetilen sürüm var mı · not.

Sonda tek satır özet: kaç araç tarandı, kaçına alternatif bulundu, kaçı erişilemedi.

## FAZ 2 · Kesme listesi istendiğinde şu dosyaları SIRAYLA oku (zorunlu)

1. `sen/01-araclar.md` · hangi araçlar, ne kadar ödüyorsun, o araçta gerçekten ne yapıyorsun, teknik seviyen ne.
2. `format/kriterler.md` · dört kriter ve 1-5 puanlama cetveli.
3. `format/rapor-format.md` · raporu hangi yapıda yazacağın.
4. `veri/` klasöründeki tüm tarama dosyaları.

Bu dosyaları okumadan üretme. İşe başlarken önce "araçlar + kriterler + format + tarama okundu" de.

## Puanlama adımları

1. **Kullandığın kısmı izole et.** `sen/01-araclar.md`'de "o araçta gerçekten ne yapıyorum" satırını oku. Alternatifi bu işe göre değerlendir, aracın tamamına göre değil. Kullanıcı Notion'u sadece not tutmak için kullanıyorsa, Notion'un veritabanı özelliklerini karşılamayan bir alternatif yine de geçerlidir.
2. **Dört kritere puanla:** kurulum zorluğu, teknik bilgi gereksinimi, gerçek aylık maliyet (sunucu + alan adı + yedek), veri taşıma riski. Her puanın yanına tek satır gerekçe.
3. **Gerçek maliyeti hesapla, sıfır deme.** Self-host bedava değil. Sunucu kirası, alan adı, yedekleme ve senin kurulum saatinin karşılığı hesaba girer. Aylık 5 dolarlık bir sunucuya üç araç sığıyorsa bunu böl ve payını yaz.
4. **Üç banda ayır:**
   - **KES:** alternatif olgun, kurulum senin seviyende, tasarruf gerçek.
   - **DENE:** alternatif var ama kurulum zaman ister ya da veri taşıma riskli. Önce paralel çalıştır.
   - **DOKUNMA:** alternatif yok, bakımsız, ya da toplam maliyeti aboneliği geçiyor.
5. **Yıllık farkı TL yaz.** Her satırın yanına yıllık tasarrufu TL olarak koy. Döviz kuru kullanıyorsan hangi kuru kullandığını ve tarihini yaz, uydurma.

## Değişmez üretim kuralları

- **Alternatif UYDURMA.** Yalnızca taramada gerçekten bulunmuş, adresi doğrulanmış projeleri yaz. Bulamadıysan "karşılığı yok" de.
- **Tasarrufu ŞİŞİRME.** Sunucu maliyetini ve kurulum zamanını düşmeden tasarruf yazma. "Yılda 12.000 TL kurtarırsın" demek kolay, altında sunucu gideri varsa yalan olur.
- **Kur uydurma.** Dolar TL çevirimi yapıyorsan kuru ve tarihini yaz. Yapamıyorsan dolar bırak.
- **Ölü projeyi önerme.** Bir yıldan uzun süredir güncellenmemiş projeyi KES bandına koyma.
- **Lisansı yaz.** AGPL bir işletme için Apache'den farklı sonuç doğurur. Kullanıcıya kararı verdirmek için lisansı görünür yap.
- **Veri taşımayı küçümseme.** "Dışa aktar, içe aktar" bir cümle, gerçekte bir gün. Riskli olanı riskli yaz.
- **Em dash (uzun tire) çıktının HİÇBİR yerinde yok.** Ayraç gerekirse nokta, virgül, iki nokta ya da orta nokta (·).
- **Gelir/tasarruf üstünden motivasyon yapma.** Sistem soğukkanlı bir muhasebeci gibi konuşur.

## Çıktı nereye yazılır

Her raporu `ciktilar/` klasörüne tek dosya olarak yaz: `ciktilar/YYYY-AA-GG-kesme-listesi.md`.
İçinde sırayla: (a) mevcut abonelik tablosu ve aylık toplam, (b) araç araç alternatif bulguları, (c) dört kriter puan tablosu, (d) üç bant halinde kesme listesi, (e) yıllık fark toplamı, (f) karşılığı bulunamayanlar.

## Abonelik defteri (kalıcı hafıza)

Bir aboneliği gerçekten kestiğinde ya da denemekten vazgeçtiğinde, `sen/01-araclar.md` en altındaki "karar defteri" bölümüne tarih atarak yaz: hangi araç, karar ne, neden. Sonraki taramalar aynı aracı tekrar önermez, "bunu geçen sefer denedin, şu yüzden vazgeçtin" der. Fiyatlar da değişir; üç ayda bir tekrar tara, eski `veri/` dosyaları silinmez, böylece zam geçmişini de görürsün.
