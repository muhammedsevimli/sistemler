# Konsept Fabrikası · Otomatik Okuma Kuralı

> Bu dosya, bu klasörde açtığın her Claude Code oturumunun BAŞINDA otomatik okunur.
> Sen hiçbir şey yapmıyorsun. Claude Code bu klasörde çalışırken bu dosyayı kendiliğinden yükler.
> Amaç: markanın işe yarayan reklamlarını ve müşteri sesini bir kere dosyaya koy; sonra tek komutla (ya da her sabah otomatik) markanın sesinden 50 taze statik reklam konsepti al.

## Sistem ne yapıyor (tek akış)
Girdi olarak üç şey veriyorsun: (1) markanın kazanan (en iyi dönen) reklamları, (2) müşteri yorumları, (3) en beğenilen yorumlar. Sistem bunlardan neyin tuttuğunu çıkarır (hangi kanca, hangi vaat, hangi duygu tekrar ediyor), sonra bu mantığı `marka/` dosyalarından okuduğu senin markana ve sesine giydirip **50 statik reklam konsepti** üretir. Her konsept üç satır: kanca + görsel yönergesi + tek satır gerekçe. Çıktı `ciktilar/` klasörüne bir dosya olarak yazılır.

> ÖNEMLİ AYRIM: bu sistem kendi kazanan reklamlarını ve müşteri sesini madenler (rakip reklamı değil). Rakip reklamlarını çözmek istiyorsan o ayrı sistem (Ad Spy). Buradaki girdi senin kendi kanıtın: en iyi reklamların + gerçek müşteri cümlelerin.

## FAZ · 50 konsept istendiğinde şu dosyaları SIRAYLA oku (zorunlu)
1. `marka/01-marka.md` · kim, kime, ne satıyoruz, ne değiliz, kanıt.
2. `marka/02-ses.md` · nasıl konuşuyoruz, hitap, yasak kelimeler.
3. `marka/03-kazanan-hafiza.md` · önceki turlarda tuttuğu işaretlenmiş açılar (varsa).
4. `format/girdi-ayristirma.md` · girdileri hangi başlıklara ayıracağın.
5. `format/konsept-format.md` · 50 konsepti hangi yapıda ve hangi çeşitlilik kuralıyla yazacağın.
6. `girdi/kazanan-reklamlar.md` · markanın en iyi dönen reklamları.
7. `girdi/musteri-yorumlari.md` · gerçek müşteri yorumları.
8. `girdi/begenilen-yorumlar.md` · sosyal medyada en beğenilen yorumlar.

Bu dosyaları okumadan üretme. İşe başlarken önce "marka + ses + kazanan hafıza + format + kazanan reklamlar + müşteri yorumları + beğenilen yorumlar okundu" de.

## Çözümleme adımları (sistem içeride şunları yapar)
1. **Ayrıştır:** `girdi/` içindeki her kazanan reklamı `format/girdi-ayristirma.md` başlıklarına böl (kanca, vaat, kime, duygu, format, kanıt). Müşteri yorumlarından tekrar eden dert, övgü ve itirazı topla. Beğenilen yorumlardan viral açıyı (mizah, haklı öfke, "vay be" anı) çıkar.
2. **Örüntü oku:** hangi kanca tipi tekrar tutmuş (dert / duyusal / sayı / sosyal kanıt / karşı görüş / mizah), ortak vaat tipi ne, ortak duygu ne, hangi itiraz sık geçiyor. Bu "çalıştığı belli olan mantık"tır. Müşterinin kendi cümlesi en güçlü kancadır: onu ham malzeme olarak kullan.
3. **Markana giydir:** bu mantığı `marka/01-marka.md` ve `marka/02-ses.md` üzerinden senin ürününe ve sesine uyarla. 50 konsept üret (`format/konsept-format.md` yapısı ve çeşitlilik kuralıyla).

## Değişmez üretim kuralları
- **50 konsept GERÇEKTEN çeşitli olacak, doldurma değil.** Aynı kancayı kelime değiştirip 50 kez yazma. `format/konsept-format.md` içindeki rotasyon ızgarasına (kanca tipi x segment x duygu) uy. Her konsept tek fikir taşır.
- `marka/02-ses.md` içindeki YASAK kelimeleri ASLA kullanma. Yasak kalıp gördüğünde konsepti baştan yaz.
- `marka/01-marka.md` içindeki "ne DEĞİLİZ" satırlarına ters düşme. Bir reklam ya da yorum sahte aciliyet, abartı ya da olmayan garanti içeriyorsa onu KOPYALAMA; mantığını al, dilini alma.
- Uydurma sayı, sahte indirim, olmayan garanti YOK. Senin teklifin/sayın `marka/01-marka.md` içinde yoksa konsepte `[buraya kendi sayını/teklifini koy]` placeholder bırak, uydurma.
- Müşteri yorumunu birebir tırnakla kullanacaksan gerçek yorumdan al, yorum uydurma. Girdi boşsa konsept üretme, "önce girdi dosyalarını doldur" de.
- Her konseptin "gerekçe" satırında hangi kazanan reklamdan ya da hangi müşteri cümlesinden geldiğini belirt. Şeffaflık kredibilitedir.
- Em dash (uzun tire "—") çıktının HİÇBİR yerinde yok: ne kancada, ne görsel yönergesinde, ne gerekçede, ne başlıkta, ne de sondaki "sabah eleme" / özet notunda. Ayraç gerekirse nokta, virgül, iki nokta ya da orta nokta (·).
- **SON TARAMA (dosyayı yazmadan hemen önce, zorunlu):** ürettiğin tüm metni em dash (—) için baştan sona tara. Bir tane bile bulursan hepsini orta nokta ( · ) ile değiştir, sonra dosyayı yaz. Özet ve eleme notları dahil, istisna yok.

## Çıktı nereye yazılır
Her turu `ciktilar/` klasörüne tek dosya olarak yaz: `ciktilar/YYYY-AA-GG-<tema-ya-da-sabah>.md`.
Dosya içinde: (a) girdi özeti + çıkan örüntü, (b) 50 konsept (rotasyon başlıklarıyla gruplu), (c) "sabah eleme" notu (hangi 5 konseptle başlarsın), (d) platform notu (Instagram "sen" / LinkedIn "siz").

## Kalıcı hafıza (kendi kendini geliştiren döngü)
Bir konsept gerçekten tuttuğunda (satış, tıklama, kaydetme) `marka/03-kazanan-hafiza.md` en altındaki "tutan açılar" bölümüne tarih atarak yaz. Sonraki üretimler bu bölümü de okur; sistem her turda senin işine daha çok benzer. Yeni bir kazanan reklam ya da çok beğenilen yorum çıktığında ilgili `girdi/` dosyasına ekle: girdi zenginleştikçe örüntü keskinleşir.

## Otomasyon notu (dürüst)
Çekirdek iş tek komutla ON-DEMAND çalışır: `CALISTIR.md` Adım 1 komutunu ver, 50 konsept `ciktilar/`'a düşer. Bu garantili çalışan kısımdır. "Her sabah masaüstüne bıraksın" istiyorsan bu tek komutu her sabah otomatik çalıştıran bir görev kurarsın (Windows Görev Zamanlayıcı ya da Mac cron). Kurulum: `otomasyon/KUR-otomasyon.md`. Otomatik istemezsen tek komutla kendin çalıştırırsın; ikisi de aynı çıktıyı verir. Sihirli görünmez bir otomasyon yok: her sabah dosyası, aynı tek komutun zamanlanmış hâlidir.
