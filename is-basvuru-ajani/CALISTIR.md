# Çalıştırma ayrıntıları

## Komutlar

Claude Code'u bu klasörde açıp yaz:

| Komut | Ne yapar |
|---|---|
| `kur` | İlk kurulum: CV'ni ver, soruları sohbette cevapla; `sen/CV.md`, `sen/HEDEF.md` ve zamanlayıcıyı Claude yazar. |
| `günlük koşu` | Tam akış: ara, puanla, hazırla, formu doldur, raporla. Zamanlayıcı da bunu çağırır. |
| `tara` | Yalnız ara ve puanla. Tabloyu doldurur, klasör açmaz. İlk gün bunu dene. |
| `hazırla https://www.linkedin.com/jobs/view/123456/` | Tek ilan için klasör, eşleşme, uyarlanmış CV, ön yazı, cevaplar. |
| `gönder 2026-09-25-bora-kozmetik-performans-pazarlama` | Hazır klasörü formda doldurur. `gonder: evet` ise gönderir. |
| `prova 2026-09-25-bora-kozmetik-performans-pazarlama` | İlan ve CV'den 10 mülakat sorusu ve cevap iskeleti. |
| `durum` | Tabloyu özetler. Dönüş gelen ilanı `donus`, mülakat gelirse `mulakat` yaparsın. |

## Klasör yapısı

```
is-basvuru-ajani/
  CLAUDE.md            ajanın kuralları (AGENTS.md aynı içerik)
  sen/CV.md            senin CV'n (tek doğru kaynak)
  sen/HEDEF.md         hedefler, eşik, tavan, gonder anahtarı, standart cevaplar
  basvurular.csv       takip tablosu
  basvurular/
    2026-09-25-sirket-rol/
      ilan.md          ilan metni ve gereksinimler
      eslesme.md       puan dökümü, güçlü kanıtlar, boşluklar
      cv-uyarlanmis.md ilana göre sıralanmış CV
      cv-uyarlanmis.pdf
      onyazi.md
      cevaplar.md      form cevapları, varsa "SAHİBE SOR" satırları
      onizleme.md      "Gözden geçir" ekranı metni (ve gönderildiyse teyit)
  raporlar/2026-09-25.md
  araclar/cv_pdf.py    markdown → PDF (Chrome/Edge başsız)
  araclar/kur.py       zamanlayıcı kur / kaldır
  araclar/gunluk_kosu.py  zamanlayıcının çağırdığı koşucu
```

## Puanlama

| Kalem | Puan |
|---|---|
| Rol ve sorumluluk örtüşmesi | 40 |
| Zorunlu gereksinimler (eksik başına -8) | 25 |
| Konum ve çalışma biçimi | 15 |
| Sektör ve şirket büyüklüğü | 10 |
| Maaş (yazmıyorsa 5) | 10 |

Kırmızı çizgi ihlali puana bakılmadan eler. Eşik `sen/HEDEF.md` içinde `esik:` ile değişir; 70 iyi bir başlangıç.

## Tablo durumları

`elendi` · `aday` (eşiği geçti, tavan doldu, yarın bakılır) · `hazir` · `onizleme` (form dolu, gönder kapalı) · `gonderildi` · `harici` (şirket sitesi, sen başvurursun) · `soru-bekliyor` · `donus` · `mulakat` · `red`

## Zamanlayıcı

```bash
py araclar/kur.py          # sen/HEDEF.md içindeki saat: değerine göre kurar
py araclar/kur.py --kaldir
py araclar/gunluk_kosu.py  # elle bir koşu; log raporlar/log-<tarih>.txt
```

Koşucu `claude -p --chrome --permission-mode bypassPermissions` ile çalışır: kimse başında olmadığı için izin sormaz. Bu klasörün dışında hiçbir şey yapmaması `CLAUDE.md` içindeki sınırlarla sağlanır; yine de ilk koşuları elle yap ve raporları oku.

## Demo modu

Kurulumla gelen `sen/CV.md` kurgusal Elif Aydın'dır ve `sen/HEDEF.md` içinde `demo: evet` yazar. Bu ayarla ajan gerçek ilanları tarar, puanlar, CV'yi uyarlar, formu "Gözden geçir" adımına kadar doldurur ve taslağı siler. Hiçbir şey gönderilmez. Sistemi görmek için bir kez koştur, sonra `kur` yaz: CV'ni verirsin, Claude dosyaları yazar ve `demo: hayir` yapar. CV demo kişisiyken `demo: evet` yoksa ajan hiç koşmaz.

## Sık takılınan yerler

- **"oturum kapalı" raporu:** Chrome'da linkedin.com'a giriş yap, koşuyu tekrar başlat. Ajan şifre istemez ve yazmaz.
- **PDF çıkmadı:** Chrome ya da Edge yolu bulunamamıştır. `CHROME_PATH` ortam değişkenine tarayıcının tam yolunu ver.
- **Form "soru-bekliyor" kaldı:** klasördeki `cevaplar.md` içinde "SAHİBE SOR" satırını bul, cevabı sohbette söyle (Claude standart cevaplara ekler), sonra `gönder <klasör>` yaz.
- **Aynı ilan tekrar geliyor:** `basvurular.csv` içinde `ilan_id` var mı bak. Tabloyu elle silersen ajan ilanı yeni sanır.
- **LinkedIn güvenlik uyarısı:** ajan koşuyu keser. Bir iki gün ara ver, tavanı düşür.
