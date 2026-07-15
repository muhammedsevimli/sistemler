# Her sabah otomatik üretim · kurulum

> Bu bölüm opsiyonel. Sistem tek komutla da çalışır (`CALISTIR.md` Adım 1). Burası "uyurken çalışsın, sabah 50 konsept hazır olsun" isteyenler için.
> Mantık basit: her sabah çalışan bir görev, senin normalde elle yazdığın komutu kendiliğinden çalıştırır. Sihir yok, zamanlanmış tek komut.

## Önce bir kez elle çalıştır (şart)
Otomatiğe geçmeden önce sistemi bir kez elle çalıştır (`CALISTIR.md` Adım 1). Çalıştığını gördükten sonra otomatiğe bağla. Girdi dosyaların dolu olmalı.

## Bilgisayar kapalıyken çalışmaz (dürüst sınır)
Bu görev senin bilgisayarında çalışır. Sabah 07:00'de bilgisayarın kapalıysa görev çalışmaz (Windows'ta "kaçırılan görevi aç" seçeneğiyle bilgisayar açılınca çalışır). Bilgisayarın her zaman açık değilse ya sabah erken bir saate değil, bilgisayarı açtığın bir saate kur; ya da tek komutu kendin çalıştır. 7/24 sunucuda çalışan bir kurulum ayrı bir iştir, bu playbook'un kapsamında değil.

---

## Windows · Görev Zamanlayıcı (Task Scheduler)

### Kolay yol · tek komut (önerilen)
`otomasyon` klasörünün TAM yolunu öğren (dosya gezgininde `her-sabah.cmd`'ye sağ tık, "yol olarak kopyala"). Sonra Başlat'a `cmd` yazıp Komut İstemi'ni aç, şunu yapıştır (yolu kendi yolunla değiştir, tırnakları koru):

```text
schtasks /create /tn "Konsept Fabrikasi" /tr "\"C:\Users\ADIN\Desktop\konsept-fabrikasi\otomasyon\her-sabah.cmd\"" /sc daily /st 07:00
```

- `/tn` görevin adı. `/tr` çalıştırılacak dosya (senin `her-sabah.cmd` yolun). `/sc daily` her gün. `/st 07:00` saat.
- Enter'a basınca "SUCCESS" yazarsa kuruldu. Ertesi sabah 07:00'de sistem 50 konsepti `ciktilar/` klasörüne yazar.
- Kaçırılan görevleri de çalıştırmak istersen (bilgisayar o saatte kapalıysa): Görev Zamanlayıcı'yı aç, görevi bul, "Koşullar/Ayarlar" sekmesinde "Zamanlanmış başlangıç kaçırılırsa görevi mümkün olduğunda başlat"ı işaretle.

### Tıklayarak yol (komut istemi istemiyorsan)
1. Başlat'a `Görev Zamanlayıcı` yaz, aç.
2. Sağda "Temel Görev Oluştur" tıkla. Ad: `Konsept Fabrikasi`. İleri.
3. Tetikleyici: "Günlük". İleri. Saat: `07:00`. İleri.
4. Eylem: "Bir programı başlat". İleri.
5. "Program/komut dosyası" kutusuna `her-sabah.cmd` dosyanın tam yolunu yaz (ya da "Gözat" ile seç). İleri, Son.

### Test / silme
```text
schtasks /run /tn "Konsept Fabrikasi"     (hemen bir kez çalıştır, test için)
schtasks /query /tn "Konsept Fabrikasi"   (kurulu mu bak)
schtasks /delete /tn "Konsept Fabrikasi" /f   (görevi sil)
```

---

## Mac · cron

Terminal'i aç, `crontab -e` yaz, açılan editöre şu satırı ekle (yolu kendi yolunla değiştir):

```text
0 7 * * * /Users/ADIN/Desktop/konsept-fabrikasi/otomasyon/her-sabah.sh
```

- `0 7 * * *` her gün 07:00. Betiği çalıştırılabilir yap: Terminal'de `chmod +x /Users/ADIN/.../otomasyon/her-sabah.sh`.
- Kaydet, çık. Mac uykudayken cron çalışmaz; bilgisayarı açık tuttuğun bir saate kur ya da `launchd` ile uyandırma ayarı yap (ileri seviye).

---

## Çıktı nereye düşer
Varsayılan: proje içindeki `ciktilar/` klasörü, `YYYY-AA-GG-sabah.md` adıyla. Her sabah yeni bir dosya.
"Masaüstünde görmek istiyorum" diyorsan iki yol:
1. Bütün `konsept-fabrikasi` klasörünü masaüstüne koy (en kolayı).
2. `otomasyon/gunluk-gorev.txt` içindeki "çıktıyı ciktilar klasörüne ... yaz" satırını "çıktıyı masaüstündeki konsept-cikti klasörüne ... yaz" diye değiştir ve o klasörü aç.

## Çalıştı mı diye bakma
`otomasyon/son-calisma.log` dosyasını aç: her çalışmanın başlangıç/bitiş zamanı ve varsa hata orada yazar.
