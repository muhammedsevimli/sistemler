# Fikir Raporu · 2026-07-20

> Okunan dosyalar: profil (`sen/01-profil.md`), kaynaklar (`sen/02-kaynaklar.md`), kriterler (`format/kriterler.md`), format (`format/rapor-format.md`), ham sinyaller (`sinyaller/toplanan.md`). Fikir uydurulmadı; yalnız yapıştırılmış sinyaller puanlandı.

## A) Tarama özeti
Beş kaynak tipinden (X aramaları, Ekşi Sözlük, Discord toplulukları, Trendyol yorumu, Google Haritalar) toplam 11 talep sinyali geldi, bunlar 9 ayrı SaaS fikrine indi. En çok tekrar eden dert: randevu/sipariş/aidat gibi işlerin elle, defterde ya da Excel'de takibi ve bundan doğan kayıp. Para dili en net görülen: randevu no-show ("kaporalı randevu sistemi olsa ayda 300 TL veririm"). Diğer para dili sinyalleri: aidat takibi ("makul ücret veririz"), IG sipariş takibi ("memnuniyetle öderim"), diyetisyen danışan takibi ("öderim"), kripto vergi ("para veririm"). En güçlü tekli fikir, iki ayrı kaynakta ve dört artı kişide tekrar eden randevu no-show + kapora sistemidir.

## B) Puan tablosu (tüm fikirler)
| # | Fikir (tek cümle) | Pazar | Fizibilite | Rekabet boşluğu | TR uyumu | Toplam | Sinyal |
|---|---|---|---|---|---|---|---|
| 1 | Randevulu esnaf için no-show önleyen hatırlatma + kapora sistemi | 5 | 4 | 4 | 5 | 18 | güçlü |
| 2 | Instagram/DM satıcısı için sipariş alma + durum takip paneli | 4 | 4 | 4 | 5 | 17 | orta |
| 3 | Apartman/site yöneticisi için aidat takip + otomatik hatırlatma | 4 | 4 | 3 | 5 | 16 | orta |
| 4 | Yerel işletme için yorumlara hızlı yanıt (AI taslak) aracı | 3 | 3 | 4 | 4 | 14 | orta |
| 5 | Diyetisyen/koç için danışan + randevu + ödeme takip paneli | 4 | 3 | 3 | 4 | 14 | orta (sınıra yakın) |
| 6 | TR kripto kazanç vergi hesaplama aracı | 4 | 1 | 4 | 4 | 13 | orta (senin sınırın) |
| 7 | Küçük e-ticaret için çok kanaldan iade taleplerini tek panelde toplama | 3 | 2 | 4 | 4 | 13 | orta |
| 8 | Serbest çalışan için teklif/proje (onaylandı/bekliyor) takibi | 2 | 5 | 2 | 3 | 12 | zayıf |
| 9 | Tüketici için farklı kargoları tek yerde takip | 2 | 2 | 2 | 2 | 8 | zayıf (B2C) |

## C) En iyi 5 fikir · detay kartı

### Fikir 1 · Randevu no-show + kapora · toplam 18/20 · sinyal güçlü · BU HAFTA BURADAN BAŞLA
- **fikir:** Kuaför, güzellik merkezi ve benzeri randevu alan esnaf için, randevuyu otomatik hatırlatan ve gelmeyeni önlemek üzere kapora tutabilen basit bir sistem.
- **nereden çıktı:** Sinyal 1 (X, kuaför) + Sinyal 2 (Ekşi, güzellik merkezi). İki bağımsız kaynak, dört artı kişi. Para dili net: "kaporalı randevu sistemi olsa ayda 300 TL veririm".
- **puanlar:** pazar 5 · fizibilite 4 · rekabet boşluğu 4 · TR uyumu 5
  - pazar 5: çok sayıda esnaf sürekli yaşıyor, gelmeyen randevu doğrudan ciro kaybı, açık aylık ödeme dili var.
  - fizibilite 4: hatırlatma (SMS/WhatsApp) ve panel senin rahat bölgende, tek zor parça kapora tahsilatı ama iyzico ile çözülebilir.
  - rekabet boşluğu 4: TR'de genel randevu uygulamaları var, boşluk no-show odaklı kapora/depozito mekaniğinde, çoğu araç bunu yapmıyor.
  - TR uyumu 5: yerel esnaf derdi, Türkçe, iyzico ile tahsilat kolay, WhatsApp kültürü oturmuş, kitle senin elinde.
- **ilk MVP (bu hafta kurulacak en küçük sürüm):** Esnafın randevuları girdiği basit bir panel; randevudan önce otomatik SMS/WhatsApp hatırlatma; opsiyonel kapora için iyzico ödeme linki.
- **risk / boşluk:** WhatsApp resmi API onayı zaman alabilir; ilk sürümde SMS ya da manuel WhatsApp linkiyle başla, kapora akışını sonra ekle.
- **para modeli fikri:** İşletme başına aylık abonelik (300-500 TL bandı, sinyaldeki ödeme diline oturuyor); tahsilat iyzico ile TR'de kolay.

### Fikir 2 · Instagram/DM sipariş takip paneli · toplam 17/20 · sinyal orta
- **fikir:** Instagram DM'den satış yapan butik ve küçük satıcı için siparişi kaydeden, ödendi/kargolandı durumunu tek panelde tutan araç.
- **nereden çıktı:** Sinyal 4 (Discord, butik: "excel'e geçiriyorum, elle işaretliyorum") + Sinyal 11 (Discord, evden yemek: "keşke sipariş alan basit bir sayfam olsa"). Para dili var: "buna çözüm olsa memnuniyetle öderim".
- **puanlar:** pazar 4 · fizibilite 4 · rekabet boşluğu 4 · TR uyumu 5
  - pazar 4: IG'den satan geniş bir kitle, düzenli günlük dert, ödeme niyeti belirtilmiş.
  - fizibilite 4: sipariş tablosu, form ve durum işaretleme senin rahat yapıların; IG DM otomatik çekimi zor ama MVP elle/form girişiyle çıkar.
  - rekabet boşluğu 4: TR'de İkas/Ticimax gibi ağır e-ticaret var, boşluk "kart açmadan, tek tablo" isteyen mikro satıcıda.
  - TR uyumu 5: IG'den satış TR'de çok yaygın, Türkçe, iyzico tahsilat oturur.
- **ilk MVP (bu hafta kurulacak en küçük sürüm):** Satıcının siparişi elle eklediği, ödendi/hazırlanıyor/kargolandı olarak işaretlediği basit web paneli.
- **risk / boşluk:** Gerçek değer IG DM'yi otomatik çekmekte; o entegrasyon olmadan da işe yarar ama ayrışmak için sonradan gerekebilir. Sinyal 11 tek kişi ve belirsiz, ana talep Sinyal 4'ten geliyor.
- **para modeli fikri:** Aylık abonelik (düşük bant, 250-400 TL); sipariş hacmine göre kademe eklenebilir.

### Fikir 3 · Aidat takip + hatırlatma · toplam 16/20 · sinyal orta
- **fikir:** Apartman/site yöneticisi için kim ödedi/ödemedi takibini tutan ve ay sonu otomatik hatırlatan basit sistem.
- **nereden çıktı:** Sinyal 5 (X, apartman yöneticisi: "defterde tutuyorum, tek tek konuşuyorum"). Para dili var: "site yönetimi için ayda makul bir ücret veririz". Sinyal "yöneticiler sık yazıyor" diyor.
- **puanlar:** pazar 4 · fizibilite 4 · rekabet boşluğu 3 · TR uyumu 5
  - pazar 4: çok sayıda apartman/site, aylık tekrar eden dert, ödeme niyeti belirtilmiş.
  - fizibilite 4: ödeme durumu tablosu + SMS/WhatsApp hatırlatma rahat bölgende; para toplamayı (üçüncü kişinin parası) MVP dışında bırakırsan daha da kolay.
  - rekabet boşluğu 3: Apsiyon gibi yerleşik apartman yazılımı var, boşluk onları pahalı/karışık bulan küçük sitelerde; ayrışma nokta: sadece aidat takibi, kurulumsuz, ucuz.
  - TR uyumu 5: aidat tamamen TR-yerel dert, Türkçe, yerel operasyon.
- **ilk MVP (bu hafta kurulacak en küçük sürüm):** Daire listesi + aylık ödeme işaretleme tablosu + ödemeyenlere otomatik hatırlatma; para toplama sonraki adım.
- **risk / boşluk:** Aidatı sistem üzerinden toplamak başkasının parasını tutmak demek, güven ve muhasebe yükü getirir; ilk sürüm sadece takip + hatırlatma olsun, tahsilatı sonra değerlendir.
- **para modeli fikri:** Site/bina başına aylık abonelik (daire sayısına göre kademe); tahsilat iyzico ile yöneticiden.

### Fikir 4 · Yorumlara hızlı yanıt aracı · toplam 14/20 · sinyal orta
- **fikir:** Yerel restoran ve işletme için Google ve yemek sitesi yorumlarına AI ile Türkçe yanıt taslağı üreten, tek yerden yanıtlatan araç.
- **nereden çıktı:** Sinyal 10 (Google Haritalar + X, restoran: "tek tek cevap yazmak vakit alıyor, çoğuna cevap veremiyorum"). Para dili yok, dert "vakit alıyor". Yerel işletmeler sık dile getiriyor.
- **puanlar:** pazar 3 · fizibilite 3 · rekabet boşluğu 4 · TR uyumu 4
  - pazar 3: geniş yerel işletme kitlesi var ama açık para dili yok, dert "keşke kolay olsa" seviyesinde.
  - fizibilite 3: AI ile Türkçe yanıt taslağı üretmek senin güçlü tarafın, ama Google Business ve yemek sitesi API bağlantıları birkaç dış entegrasyon demek; MVP "yorumu yapıştır, taslak al" ile başlar.
  - rekabet boşluğu 4: yabancı reputation araçları pahalı ve Türkçe/yerel yemek sitesine uzak; TR yerel yanıt aracı boşluğu açık.
  - TR uyumu 4: Türkçe yorum ve yanıt, yerel işletme ihtiyacı; tahsilat çözülebilir ama para dili henüz kanıtlanmadı.
- **ilk MVP (bu hafta kurulacak en küçük sürüm):** İşletmenin yorumu yapıştırdığı, AI'nın marka tonunda Türkçe yanıt taslağı ürettiği basit form; entegrasyon sonra.
- **risk / boşluk:** Para dili yok, ödeme isteği teyide muhtaç; ilk 3 işletmeye ücretsiz denetip "buna öder misin" diye ölç. Otomatik yayınlama için platform API onayları gecikebilir.
- **para modeli fikri:** Aylık abonelik ya da yanıt paketi başına kullanım; önce ödeme niyetini doğrula, sonra fiyatla.

### Fikir 5 · Diyetisyen/koç danışan takip paneli · toplam 14/20 · sinyal orta (profil sınırına yakın)
- **fikir:** Diyetisyen ve benzeri danışanlı meslek için danışanın randevu, ölçüm ve ödeme kaydını tek panelde tutan takip aracı.
- **nereden çıktı:** Sinyal 8 (X, diyetisyen: "not defterinde tutuyorum, karışıyor"). İki diyetisyen benzer yazmış. Para dili var: "pratik bir program olsa öderim".
- **puanlar:** pazar 4 · fizibilite 3 · rekabet boşluğu 3 · TR uyumu 4
  - pazar 4: çok sayıda diyetisyen/koç, düzenli dert, ödeme niyeti belirtilmiş.
  - fizibilite 3: panel ve randevu senin rahat bölgende, ama danışan ölçümü kişisel/sağlık verisidir ve KVKK uyumu ister; bu, puanı düşürür.
  - rekabet boşluğu 3: diyetisyen yazılımları (yerli ve yabancı) mevcut, boşluk sade ve ucuz TR aracında; kopya değil, sadeleştirilmiş açı.
  - TR uyumu 4: TR diyetisyen kitlesi, Türkçe, iyzico tahsilat uygun.
- **ilk MVP (bu hafta kurulacak en küçük sürüm):** Danışan listesi + randevu + ödeme durumu tutan basit panel; ölçüm alanı en aza indirilmiş.
- **risk / boşluk:** RİSKLİ ALAN. Danışan ölçümü sağlık verisine yakın, profilindeki "tıbbi veri işine girmem" sınırına değiyor; KVKK uyumu ve veri güvenliği gerekir. Bu yüzden para dili olmasına rağmen ilk beşin en altına kondu. Bu alana girmeden önce uyum yükünü değerlendir ya da ölçüm kısmını dışarıda bırak.
- **para modeli fikri:** Danışman başına aylık abonelik; veri sorumluluğunu netleştirmeden ölçeklemeye girme.

## D) Bu hafta buradan başla
Seçim: **Fikir 1 · Randevu no-show + kapora sistemi.** Neden bu: 18/20 ile en yüksek puanlı ve tek "güçlü" sinyalli fikir; iki ayrı kaynakta tekrar ediyor, açık aylık ödeme dili var ("300 TL veririm"), üstelik senin en iyi bildiğin alan (randevu alan işletmeler) ve elindeki dağıtım kanalıyla örtüşüyor. İlk adım: bir esnafın randevuları girdiği panel + randevudan önce otomatik SMS/WhatsApp hatırlatma; kapora akışını ikinci sürüme bırak. İlk 3 potansiyel müşteriyi 150 kişilik yerel esnaf WhatsApp grubundaki kuaför ve güzellik merkezlerinden bul, birine ücretsiz kurup gerçek no-show verisiyle test et.

## E) Elenenler / bekleyenler
- **TR kripto vergi hesaplama (13):** para dili ve boşluk güçlü ama vergi/mali alan senin "girmem" dediğin, hatası pahalı sınırında; fizibilite 1, ele.
- **Çok kanaldan iade toplama (13):** dert gerçek ama WhatsApp + mail + IG DM birleştirmek birden çok zor entegrasyon, para dili yok; fizibilite düşük, teyit gelene kadar beklet.
- **Serbest çalışan teklif takibi (12):** tek kişi tek kaynak (zayıf sinyal), para dili yok, teklif/CRM araçları doymuş; önce teyit et.
- **Tüketici kargo takibi (8):** işletme değil tüketici derdi, para dili yok, TR'de tüketici buna ödemez; senin B2B hedefinin dışında, ele.

---
karar senin; bu rapor sıralı bir pusula, kesin emir değil.
