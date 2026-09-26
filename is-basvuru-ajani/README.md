# İş Başvuru Ajanı

Her sabah senin yerine LinkedIn'e giren, uygun ilanları bulup puanlayan, CV'ni ilana göre yeniden sıralayan, ön yazıyı ve form cevaplarını yazan, Kolay Başvuru formunu son adıma kadar dolduran sistem. Gönder düğmesine basıp basmayacağını tek satırla sen seçiyorsun.

**Sistem kendi tarayıcında, kendi oturumunla, kendi adına çalışır.** Şifreni bilmez, profiline dokunmaz, günde en fazla beş başvuru hazırlar.

## Ne işe yarıyor

İş ararken günün büyük kısmı aynı işi tekrar etmekle geçiyor: ilan listesini aç, uyuyor mu diye oku, CV'yi o ilana göre düzenle, aynı beş form sorusunu bir daha cevapla, hangisine başvurduğunu bir yere not et. Bu sistem o döngüyü sabah sen kalkmadan bitiriyor ve masana bir rapor bırakıyor.

1. `sen/HEDEF.md` içindeki rolleri LinkedIn'de arıyor, yalnız Kolay Başvuru ilanlarına bakıyor.
2. Her ilanı `sen/CV.md` ile karşılaştırıp 100 üzerinden puanlıyor. Kırmızı çizgilerine takılanı ve eşiğin altında kalanı eliyor.
3. Geçen ilanlar için klasör açıyor: ilan metni, eşleşme dökümü, ilana göre sıralanmış CV (PDF'iyle), ön yazı, form cevapları.
4. Kolay Başvuru formunu dolduruyor, CV'yi yüklüyor, "Gözden geçir" ekranına geliyor.
5. `gonder: hayir` ise orada duruyor ve taslağı kaydediyor. `gonder: evet` ise gönderiyor.
6. `basvurular.csv` tablosunu ve günün raporunu yazıyor.

**Yapmadığı şey:** CV'ne olmayan deneyim, araç ya da tarih eklemiyor. Sıralar, vurgular, özetler; uydurmaz. Şirket sitesine yönlendiren ilanları doldurmuyor; ön yazıyı hazırlayıp linki sana bırakıyor. Cevabını bilmediği form sorusunda formu kapatıp sana soruyor.

## Kurulum

Gerekenler: [Claude Code](https://claude.com/claude-code), Chrome ve [Claude in Chrome](https://claude.com/chrome) eklentisi, Python 3.10+. LinkedIn'e Chrome'da bir kez giriş yapmış olman yeterli. Dosya açman, dosya doldurman gerekmiyor; hepsini sohbette Claude yapıyor.

1. Claude Code'u aç, şu adresi ver ve "bunu benim için kur" de:

```text
github.com/muhammedsevimli/sistemler/tree/main/is-basvuru-ajani
```

   Claude klasörü indirir (`npx degit` ile; komut satırını seven kendisi de çalıştırabilir: `npx degit muhammedsevimli/sistemler/is-basvuru-ajani is-basvuru-ajani`).

2. Klasörde `kur` yaz. Claude CV'ni ister (PDF, Word ya da metin), `sen/CV.md`'ye çevirir; aradığın rolleri, konumu, maaş tabanını, kırmızı çizgilerini ve saati sohbette sorar, `sen/HEDEF.md`'yi yazar, zamanlayıcıyı kurar. Gönder anahtarı kapalı başlar.

3. `tara` yaz, ilk taramayı ve puan tablosunu izle. Beğendiysen `günlük koşu` yaz ya da sabahı bekle; `kur` sırasında verdiğin saatte kendi kendine koşar.

4. Birkaç gün raporları oku. Sisteme güvenince "gönderi aç" de, anahtarı Claude çevirir.

Diğer komutlar (`tara`, `hazırla <link>`, `gönder <klasör>`, `prova <klasör>`, `durum`) ve ayrıntılar `CALISTIR.md` içinde. Kurulumla gelen `sen/CV.md` kurgusal Elif Aydın'dır; `kur` onu seninkiyle değiştirir.

## Gerçekten çalışıyor mu

Evet, kuru koşuyla. Tamamı `TEST-SONUCU.md` içinde: kurgusal Elif Aydın CV'siyle, gönder kapalı, gerçek LinkedIn ilanlarında koşuldu. Kaç ilan tarandı, kaçı elendi, hangi puanla ne hazırlandı, form hangi adımda durdu, hepsi orada. Ölçülmeyen şeyler de yazıyor.

## Bilmen gerekenler

- LinkedIn kullanım koşulları otomatik araçları sınırlıyor. Bu yüzden günlük tavan düşük, tıklamalar arası bekleme var ve her başvuru insan kalitesinde hazırlanıyor. Toplu, hızlı başvuru hem hesabını hem itibarını riske atar. Tavanı yükseltmeni önermem.
- Sistem kendi hesabında çalışır. Başkasının adına, başkasının hesabında kullanma.
- Zamanlanmış koşu için bilgisayar o saatte açık ve Chrome'a erişilebilir olmalı. Chrome kapalıysa koşucu açar.
- `raporlar/log-*.txt` dosyaları ham koşu kaydıdır, paylaşma; `.gitignore` zaten dışarıda tutuyor.

## Desteklenen araçlar

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` |
| Codex, Cursor, Windsurf ve AGENTS.md okuyan diğer araçlar | `AGENTS.md` (tarayıcı adımları için Claude in Chrome gerekir) |

---

Bu sistemi **Muhammed Sevimli** kurdu. AI ile gerçek satış ve büyüme sistemleri. Kurarken takılırsan ya da adım adım anlatımlı rehber istersen yaz:

- Web: https://muhammedsevimli.com
- X: https://x.com/_msevimli
- Instagram: https://instagram.com/msevimli_
- Threads: https://threads.com/@msevimli_
- YouTube: https://youtube.com/@msevimli
- E-posta: hey@muhammedsevimli.com

## Lisans

[MIT](LICENSE)
