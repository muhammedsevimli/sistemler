# Çalıştırma ayrıntıları

## Komutlar

Claude Code'u bu klasörde açıp yaz:

| Komut | Ne yapar |
|---|---|
| `kur` | İlk kurulum: ilanını ver, soruları sohbette cevapla; `sen/ILAN.md` ve zamanlayıcıyı Claude kurar. |
| `günlük koşu` | Tam akış: CV topla, oku, puanla, ele, kısa liste, davet ve ret taslakları, rapor. Zamanlayıcı da bunu çağırır. |
| `ele` | Yalnız oku, puanla, tabloya yaz. Taslak yazmaz. İlk gün bunu dene. |
| `incele adaylar/gelen/ayse-cv.pdf` | Tek CV'nin tam puan dökümü, her puanın CV'deki dayanağıyla. Tabloya yazmaz. |
| `davet` | Kısa listedekilere mülakat daveti taslağı. `gonder: evet` ise Gmail'den gönderir. |
| `ret` | Elenenlere nazik ret taslağı. `gonder: evet` ise bir sonraki koşuda gönderir. |
| `durum` | Tabloyu özetler. Mülakata çağırdığını `mulakat`, işe aldığını `alindi` yaparsın. |
| `beni ele https://...` | Aday modu: kendi CV'n ve bir ilanla, başvurmadan önce işe alanın göreceği puan ve eleme riskleri. |
| `temizle` | Pozisyon kapanınca adayların tüm verisini siler. Önce listeyi gösterir, "evet" demeden silmez. |

## Klasör yapısı

```
cv-eleme-ajani/
  CLAUDE.md            ajanın kuralları (AGENTS.md aynı içerik)
  sen/ILAN.md          ilan, şartlar, kırmızı çizgiler, mülakat bilgisi, ayarlar
  adaylar.csv          takip tablosu
  adaylar/
    gelen/             gelen CV'ler (pdf, docx, txt, md)
    ornek/             12 kurgusal CV (yalnız demo modunda okunur)
  raporlar/2026-09-27.md   günün raporu: kısa liste, elenenler, puan dökümü, SAHİBE SOR
  davetler/<aday>.md   mülakat daveti taslakları
  retler/<aday>.md     ret taslakları
  beni-ele/<tarih>-<sirket>.md   aday modu raporları
  araclar/cv_oku.py    PDF / Word / metin → düz metin
  araclar/kur.py       zamanlayıcı kur / kaldır
  araclar/gunluk_kosu.py  zamanlayıcının çağırdığı koşucu
  araclar/temizle.py   kişisel veriyi sil
```

## Puanlama

| Kalem | Puan |
|---|---|
| Rol ve sorumluluk örtüşmesi | 40 |
| Zorunlu şartlar (eksik başına -8) | 25 |
| Deneyim yılı bandı (bant içi 15, 1 yıl sapma 8, fazlası 0) | 15 |
| Konum ve çalışma biçimi | 10 |
| Araç, dil, sertifika tercihleri (her biri 2) | 10 |

Kırmızı çizgi ihlali puana bakılmadan eler. Deneyim yılı CV'deki tarihlerden hesaplanır; özetteki "X yıldır" cümlesi puana girmez. Eşik `esik:`, kısa liste büyüklüğü `kisa_liste:` ile değişir; 70 ve 5 iyi bir başlangıç. Değiştirmek için Claude'a söylemen yeter.

## Tablo durumları

`kisa-liste` · `davet-hazir` · `davet-gonderildi` · `yedek` (eşiği geçti, kısa liste doldu) · `elendi` · `ret-hazir` · `ret-gonderildi` · `soru-bekliyor` (SAHİBE SOR cevabı gerekiyor, mail gitmez) · `mulakat` · `teklif` · `alindi` · `vazgecti`

## Zamanlayıcı

```bash
py araclar/kur.py          # sen/ILAN.md içindeki saat: değerine göre kurar
py araclar/kur.py --kaldir
py araclar/gunluk_kosu.py  # elle bir koşu; log raporlar/log-<tarih>.txt
py araclar/gunluk_kosu.py --kuru   # çalıştırmadan hangi komutu vereceğini gösterir
```

Koşucu `claude -p --permission-mode bypassPermissions` ile çalışır: kimse başında olmadığı için izin sormaz. Chrome'u yalnız Gmail yolu ya da gönderim açıksa kullanır (`--chrome`). Bu klasörün dışında hiçbir şey yapmaması `CLAUDE.md` içindeki sınırlarla sağlanır; yine de ilk koşuları elle yap ve raporları oku.

## Demo modu

Kurulumla gelen `sen/ILAN.md` kurgusal Derin Kozmetik ilanıdır ve içinde `demo: evet` yazar. Bu ayarla ajan `adaylar/ornek/` içindeki 12 kurgusal CV'yi `adaylar/gelen/` içine kopyalar, okur, puanlar, eler, rapor ve taslakları yazar. Hiçbir mail gitmez, Chrome açılmaz. Sistemi görmek için bir kez `ele` ya da `günlük koşu` yaz, sonra `temizle` ve `kur`. İlan demo ilanıyken `demo: evet` yoksa ajan hiç koşmaz.

## Sık takılınan yerler

- **"OKUNAMADI: taranmış PDF":** CV bir resimden oluşuyor, içinde metin yok. Adaydan metinli PDF ya da Word iste; aday tabloda `soru-bekliyor` kalır.
- **"PDF okumak için bir kütüphane gerekiyor":** `py -m pip install pypdf` çalıştır ya da Claude'a "kur" de.
- **Eski .doc dosyası:** okunmuyor. Word'de açıp .docx olarak kaydet ya da adaydan PDF iste.
- **Aynı CV tekrar okunuyor:** `adaylar.csv` içinde dosya adı ve sha var mı bak. Tabloyu elle silersen ajan CV'yi yeni sanır.
- **Bir adayın elenmesine katılmıyorum:** sohbette söyle ("Can Demir'i kısa listeye al"). Claude tabloyu günceller, ret taslağını kaldırır; ret maili zaten bir sonraki koşuya kadar gitmez.
- **"Gmail oturumu kapalı" raporu:** Chrome'da Gmail'e giriş yap, koşuyu tekrar başlat. Ajan şifre istemez ve yazmaz.
