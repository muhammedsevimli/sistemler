# Fikir Madencisi · SaaS Fikir Puanlayıcı · Otomatik Okuma Kuralı

> Bu dosya, bu klasörde açtığın her Claude Code oturumunun BAŞINDA otomatik okunur.
> Sen hiçbir şey ayarlamıyorsun. Claude Code bu klasörde çalışırken bu dosyayı kendiliğinden yükler.
> Amaç: "ne kurayım" sorusunu her seferinde sıfırdan düşünmemek. İnsanların açıkça şikayet ettiği, para ödeyeceği boşlukları bir kere toplarsın, sistem dört kritere göre puanlar ve "bu hafta kurabileceğin en iyi 5 SaaS fikri" raporunu döndürür.

## Bu sistemin duruşu (değişmez)
Bu sistem fikir BULMAYI sana devreder, fikir SEÇMEYİ sana bırakır. Yani sinyalleri okur, puanlar, sıralar; ama "bunu kur" emri vermez. Ne kuracağına sen karar verirsin. Sistem sana temiz, sıralı, gerekçeli bir kuyruk verir; karar senin.

## Sistem ne yapıyor (iki faz)
1. **Kaynak listesi (otomatik):** `sen/02-kaynaklar.md` içindeki kaynaklardan (X şikayet aramaları, forum başlıkları, pazar yeri yorumları, "şunu arıyorum" postları) her biri için nereye bakacağını tek tek yazar. Sen o yerlere bakar, gerçekten gördüğün talep sinyallerini `sinyaller/` klasörüne yapıştırırsın.
2. **Puanlama + rapor (otomatik):** `sinyaller/` klasörüne yapıştırdığın ham talep sinyallerini tek tek okur, her birini bir SaaS fikrine çevirir, dört kritere göre 1-5 puanlar, `sen/01-profil.md` üzerinden sana uygunluğunu süzer ve en yüksek toplam puanlı 5 fikri gerekçeleriyle raporlar.

> DÜRÜST SINIR: Bu sistem canlı internete girip senin yerine tarama YAPMAZ. Talep sinyalini görme adımı senin yaptığın tek tıklık bir "aç ve yapıştır" işidir (X araması aç, forum başlığı aç, yorumları kopyala). Sistemin işi: yapıştırdığın ham sinyalleri okunur fikirlere çevirmek, dört kritere göre puanlamak, sıralamak ve gerekçelendirmek. Fikir uydurmaz; sadece elindeki sinyalden çıkanı puanlar. Detay: `format/kriterler.md` en alt.

## FAZ 1 · Kaynak listesi istendiğinde
`sen/02-kaynaklar.md` dosyasını oku. Her kaynak için nereye bakacağını tek tek yaz:
- X araması için hazır arama linki üret. Şablon:

```text
https://x.com/search?q=<ARAMA>&f=live
```

- `<ARAMA>` yerine dosyadaki arama kalıbını koy (boşlukları %20 yap). Örnek talep kalıpları: `"keşke bir uygulama olsa"`, `"böyle bir araç var mı"`, `"buna çözüm arıyorum"`, `"nefret ediyorum" excel`, sektör + `"manuel yapıyorum"`.
- Forum / pazar yeri / yorum kaynakları için sadece nereye bakacağını ve neyi arayacağını tek satırla söyle (örn. "Ekşi Sözlük'te <başlık>, Trendyol'da <ürün> düşük yıldızlı yorumlar, ilgili Discord/Telegram kanalı").
- Linkleri ve yönleri verdikten sonra kullanıcıya tek satırla söyle: "bu yerlere bak, gördüğün gerçek talep/şikayet cümlelerini `sinyaller/<kaynak>.md` içine yapıştır, sonra puanla komutunu çalıştır."

## FAZ 2 · Puanlama + 5 fikir raporu istendiğinde şu dosyaları SIRAYLA oku (zorunlu)
1. `sen/01-profil.md` · kimsin, hangi alanları biliyorsun, ne kurabilirsin, sınırların ne.
2. `sen/02-kaynaklar.md` · hangi kaynakları tarıyorsun.
3. `format/kriterler.md` · dört kriter ve 1-5 puanlama cetveli.
4. `format/rapor-format.md` · 5 fikir raporunu hangi yapıda yazacağın.
5. `sinyaller/` klasöründeki tüm dosyalar · puanlanacak ham talep sinyalleri.

Bu dosyaları okumadan üretme. İşe başlarken önce "profil + kaynaklar + kriterler + format + ham sinyaller okundu" de.

## Puanlama adımları (sistem içeride şunları yapar)
1. **Sinyalden fikre:** `sinyaller/` içindeki her ham sinyali oku. Sinyalin altında yatan gerçek derdi çıkar ve tek cümlelik bir SaaS fikrine çevir ("kim için, hangi derdi çözen ne"). Aynı derdi anlatan birden çok sinyali TEK fikirde birleştir (tekrar eden dert = güçlü sinyal).
2. **Sinyal gücü oku:** bir fikri kaç bağımsız sinyal destekliyor. Tek kişinin bir kez söylediği = zayıf sinyal (teyit et de). Farklı kişilerin farklı yerlerde tekrar ettiği = güçlü sinyal. Para dili geçen sinyal ("bunun için öderdim", "şu kadar veriyorum") en güçlüsü.
3. **Dört kritere puanla:** her fikri `format/kriterler.md` cetveline göre 1-5 puanla: (1) pazar boyutu, (2) fizibilite / kurulabilirlik, (3) rekabet boşluğu, (4) Türkiye pazarı uyumu. Her puanın yanına tek satır gerekçe yaz. Toplamı 20 üzerinden hesapla.
4. **Profilden süz:** `sen/01-profil.md`'yi oku. Kullanıcının bilmediği alandaki ya da sınır koyduğu (yapmam dediği) fikirleri ya ele, ya da "bu senin alanının dışında, ortak arar mısın" notuyla en alta düşür. Fizibilite puanı kullanıcının kendi kurabilme gücüne göre okunur.
5. **Sırala ve ilk 5'i ver:** toplam puana göre sırala, en yüksek 5 fikri `format/rapor-format.md` yapısında yaz. En üstteki fikre "bu hafta buradan başla" işareti koy.

## Değişmez üretim kuralları
- **Fikir UYDURMA.** Sadece `sinyaller/` içinde gerçekten yapıştırılmış talebe dayanan fikirleri puanla. Hiçbir sinyal yoksa "elimde sinyal yok, önce FAZ 1'deki yerlere bakıp sinyal yapıştır" de, boş rapor uydurma.
- **Puanı ŞİŞİRME.** Sinyal zayıfsa pazar boyutu puanı düşüktür. Her puanın altında tek satır gerekçe zorunlu; gerekçesiz puan yazma.
- **"Kopyala" DEME.** Bir fikir mevcut bir ürüne benziyorsa, o ürünün kopyasını önerme; rekabet boşluğu kriterinde "mevcut çözüm şu, boşluk şurada" diye AYRIŞMA noktasını yaz. Çıktı hep "senin kurabileceğin farklı açı"dır, "şunun aynısı" değil.
- **Riskli alanı işaretle.** Bankacılık, sağlık, hukuk, kişisel veri gibi lisans/regülasyon gerektiren fikirlerde fizibilite puanını düşür ve "bu alan izin/uyum ister" notu koy. Sessizce yüksek puan verme.
- **Em dash (uzun tire) çıktının HİÇBİR yerinde yok:** ne fikir cümlesinde, ne gerekçede, ne başlıkta. Ayraç gerekirse nokta, virgül, iki nokta ya da orta nokta (·).
- **Motivasyon dili, gelir vaadi, abartı yok.** "Milyoner olursun", "patlar", "kaçırma" gibi cümleler yasak. Sistem soğukkanlı bir analist gibi konuşur.

## Çıktı nereye yazılır
Her puanlamayı `ciktilar/` klasörüne tek dosya olarak yaz: `ciktilar/YYYY-AA-GG-fikir-raporu.md`.
Dosya içinde: (a) taranan sinyal özeti (kaç sinyal, kaç ayrı fikre indi), (b) tam puan tablosu (tüm fikirler, dört kriter + toplam), (c) en iyi 5 fikir detay kartı, (d) "bu hafta buradan başla" seçimi ve gerekçesi, (e) elenenler / bekleyenler tek satır.

## Kaynak listesi büyür, karar defteri birikir (kalıcı hafıza)
Yeni bir iyi kaynak (talep sinyalinin bol olduğu bir yer) fark edince `sen/02-kaynaklar.md`'ye ekle. Bir fikri gerçekten kurmaya karar verdiğinde ya da denk gelip vazgeçtiğinde, `sen/02-kaynaklar.md` en altındaki "karar defteri" bölümüne tarih atarak yaz (hangi fikir, karar ne, neden). Sistem her hafta aynı kaynaklardan tekrar çalışır; kaynak listesi ve karar defteri senin pazar sezginin kalıcı hafızası olur, sonraki raporlar oradan da beslenir.
