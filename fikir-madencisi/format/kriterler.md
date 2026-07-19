# Puanlama Cetveli · Dört Kriter

> Her fikir dört kritere 1-5 puanlanır. Her puanın altına tek satır gerekçe zorunlu. Toplam 20 üzerinden.
> Puan gerekçesiz yazılmaz. Sinyal zayıfsa puan düşüktür; sistem iyimserlik yapmaz.

## Kriter 1 · Pazar boyutu (bu derdi kaç kişi yaşıyor, para akıyor mu)
Kaç kişi bu derdi yaşıyor, ne sıklıkta, ve ortada zaten dönen bir para var mı.
- **5:** çok sayıda insan sürekli yaşıyor, konu etrafında zaten para dönüyor (insanlar bu iş için birine ödüyor ya da vakit/para yakıyor). Sinyalde açık para dili var.
- **4:** geniş kitle, düzenli dert, para dolaylı görünüyor.
- **3:** belirli bir niş yaşıyor, orta sıklık.
- **2:** dar niş ya da nadir yaşanan dert.
- **1:** neredeyse kimse ısrarla istemiyor; tek kişinin bir kez söylediği.
> Okuma: "bunun için öderdim" diyen gerçek sinyal varsa taban 4. Sadece "keşke olsa" varsa taban 3.

## Kriter 2 · Fizibilite / kurulabilirlik (sen, bu hafta kurabilir misin)
`sen/01-profil.md`'deki kendi kurma gücüne göre okunur. Soru: ilk çalışan sürümü makul sürede kurar mısın.
- **5:** basit veri girişi + panel/otomasyon; profilindeki rahat yapılarla bu hafta bir MVP çıkar.
- **4:** birkaç parça var ama hepsi profilinin rahat bölgesinde.
- **3:** bir zor parça var (ödeme, dış entegrasyon), öğrenilebilir.
- **2:** birden çok zor parça ya da profilinde "uzak dur" dediğin yapı.
- **1:** lisans/regülasyon (bankacılık, sağlık teşhisi, hukuk), ağır altyapı ya da sürekli canlı operasyon gerektiriyor.
> Riskli alan (lisans/uyum/kişisel veri) gördüğünde puanı düşür ve "bu alan izin/uyum ister" notu koy. Sessizce yüksek verme.

## Kriter 3 · Rekabet boşluğu (yer var mı, ayrışabilir misin)
Mevcut çözümler ne durumda ve senin girebileceğin bir boşluk var mı.
- **5:** ortada iyi çözüm yok ya da var olanlar pahalı/karışık/yabancı; net bir boşluk var.
- **4:** çözümler var ama belli bir segment ya da özellik açık.
- **3:** rekabet dolu ama bir açıdan (fiyat, dil, niş) ayrışılabilir.
- **2:** güçlü, ucuz, yerleşik oyuncular var; ayrışma zor.
- **1:** doymuş pazar, ayrışacak yer yok.
> Kural: mevcut bir ürüne benziyorsa KOPYA önerme. Bu satıra "mevcut çözüm şu, boşluk şurada" diye AYRIŞMA noktasını yaz. Boşluk yoksa puan düşüktür.

## Kriter 4 · Türkiye pazarı uyumu (burada tutar mı, tahsil edebilir misin)
Fikir TR gerçekliğinde çalışır mı: ödeme kültürü, dil, yerel ihtiyaç, tahsilat.
- **5:** TR'ye özel bir dert (yerel mevzuat, Türkçe içerik, yerel operasyon), TR'de ödeme toplaması kolay (iyzico vb.), yerel kitle net.
- **4:** TR'de güçlü karşılığı var, tahsilat çözülebilir.
- **3:** evrensel dert, TR'de de geçerli ama yerel avantaj yok.
- **2:** TR'de ödeme alışkanlığı zayıf ya da yerel uyum sorunlu.
- **1:** TR'de karşılığı yok; yabancı pazara özel.
> Okuma: sinyal Türkçe ve yerel bir dertse taban 4. TR'de "buna kimse para vermez" işareti varsa puanı düşür.

## Toplam ve eşik
- Toplam = dört kriter puanının toplamı (4 ile 20 arası).
- **16-20:** güçlü aday, bu hafta kurulabilir kuyruğun başı.
- **12-15:** iyi fikir, bir kriteri zayıf; o zayıflığı nasıl kapatacağını not et.
- **8-11:** ikinci plan; sinyal güçlenirse ya da bir parça çözülürse yüksel.
- **4-7:** şimdilik ele ya da beklet.
> Beraberlikte: para dili geçen (Kriter 1) ve senin kurabileceğin (Kriter 2) fikir öne geçer.

## Sinyal gücü (puanın üstünde bir güven katmanı)
Puan kadar önemli: fikri kaç bağımsız sinyal destekliyor.
- **Güçlü:** farklı kişiler, farklı kaynaklarda aynı derdi tekrar etmiş. Para dili var.
- **Orta:** birkaç sinyal, aynı yön.
- **Zayıf:** tek kişi, tek yer. Rapora "zayıf sinyal, önce teyit et" notuyla girer, yüksek puan alsa bile başa konmaz.

## Dürüst sınır (bunu bilerek yazıyorum)
- Bu sistem talebi KENDİSİ tarar (Claude Code'un web araçlarıyla). Sen yapıştırmıyorsun; ilgilendiğin alanı verirsin, sistem Hacker News + web/forum (tam otomatik) ve Reddit (tasarımda otomatik, public JSON) kaynaklarını tarayıp gerçek talep cümlelerini toplar. X login istediği için otomatik taranmaz, onun için tek tık arama linki üretilir (yarı otomatik). Toplama, fikirleştirme, puanlama, sıralama otomatiktir.
- Sistem sinyal UYDURMAZ. Bir kaynağa erişemezse "erişilemedi" der, cümle yazmaz. Elinde sinyal yoksa puanlayacak fikir de yoktur; "önce tara" der.
- Tarama kapsamı sonsuz değildir. Verdiğin arama sorguları kadar geniştir; iyi sorgu = isabetli tarama.
- Puanlar bir pusuladır, kesin gerçek değil. Sinyal ne kadar bol ve para dili ne kadar netse puan o kadar güvenilir. Karar (ne kuracağın) hep sende kalır.
