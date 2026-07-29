# Test sonucu · sistem gerçekten çalıştırıldı · 29 Tem 2026

> Bu dosya, sistemin tanıtıldığı gibi çalıştığının kanıtıdır. Aşağıdaki her şey bu makinede gerçekten koştu.
> Test edilen sistem, kullanıcının kendi makinesinde çalışacak olanın aynısı: Claude Code, bu klasördeki `CLAUDE.md` + `format/kriterler.md` talimatlarıyla.

## Test kurgusu

Kurgusal ama gerçekçi bir profil kuruldu: serbest çalışan, üç kişilik ekip, kod bilmiyor ama kopyala yapıştır komut çalıştırabiliyor, sunucusu yok. Beş abonelik, aylık toplam $79,50.

Profil ve fiyatlar kurgusal. **Alternatifler, lisanslar, yıldız sayıları ve son güncelleme tarihleri gerçek.**

## FAZ 1 gerçekten koştu

Sistem beş araç için `WebSearch` ile alternatif aradı, sonra bulduğu her projeyi GitHub API üzerinden doğruladı.

| Ne | Sonuç |
|---|---|
| Taranan araç | 5 |
| Alternatif bulunan | 5 |
| Doğrulanan proje | 9 |
| Erişilemeyen kaynak | 0 |
| Bakımsız (1 yıldan eski) proje | 0 |

Doğrulanan dokuz projenin lisansı, yıldız sayısı ve son push tarihi tek tek çekildi. Ham tablo: `veri/tarama-2026-07-29.md`.

## Taramanın yakaladığı üç şey

Bunlar sistemin kurallarının işe yaradığını gösteren somut bulgular. Hiçbiri önceden bilinmiyordu, tarama sırasında çıktı.

**1. Cal.com'un repo adresi değişmiş.** `calcom/cal.com` artık `calcom/cal.diy` adresine taşınmış. Eski adres yönlendiriyor. Sistemin "proje adresini doğrula" adımı olmasa rapor eski adresi verecekti.

**2. Üç projenin lisansı göründüğü gibi değil.** Formbricks, Cap ve Typebot GitHub'da lisans alanında "Other" görünüyor. LICENSE dosyaları açıldığında üçü de "Portions of this software are licensed as follows" ile başlıyor: açık çekirdek deseni, gövde açık, kurumsal dizinler ticari. "Tamamen açık kaynak" diye sunmak yanlış olurdu. Sistemin lisans kuralı tam bu yüzden var.

**3. İki araçta sunucu kurmaya hiç gerek yok.** Cal.com bireysel kullanıcıya barındırılan sürümü ücretsiz veriyor, Cap'in Studio Mode'u kişisel kullanımda ücretsiz. Sistem bunları gördüğü için kurulum ve maliyet puanlarını 5 verdi ve ikisi de doğrudan KES bandına çıktı. Kör bir "her şeyi self-host et" yaklaşımı bu iki satırda gereksiz iş yaratırdı.

## FAZ 2 gerçekten koştu

Beş alternatif dört kritere puanlandı, üç banda ayrıldı, TL hesabı yapıldı. Tam rapor: `ciktilar/ORNEK-CIKTI-kesme-listesi.md`.

| Bant | Araç sayısı | Yıllık brüt |
|---|---|---|
| KES | 3 (Calendly, Loom, Mailchimp) | $534 |
| DENE | 2 (Notion, Typeform) | $420 |
| DOKUNMA | 0 | |

**Net hesap dürüst yapıldı.** Brüt tasarruf $534 ama sistem altyapı giderini düştü (sunucu $72 + SMTP $12 + S3 $12 = $96) ve net farkı **$438 / 20.755 TL** olarak yazdı. Kurulum için gereken 3 saati de ayrıca belirtti.

**Kur uydurulmadı.** 1 USD = 47,386 TL değeri 29 Tem 2026'da open.er-api.com'dan canlı çekildi, kaynağı ve tarihi rapora yazıldı.

## Dürüst notlar

- **Fiyatlar kurgusal.** Beş aracın aylık ücretleri test profili için yazıldı, o gün geçerli gerçek liste fiyatları değil. Gerçek kullanımda kullanıcı kendi faturasındaki rakamı yazıyor. Sistemin işi fiyat bulmak değil, alternatif bulmak.
- **DOKUNMA bandı bu testte boş çıktı.** Bu, sistemin her zaman "hepsini kes" diyeceği anlamına gelmiyor. Test profilindeki beş aracın hepsinin olgun karşılığı vardı. Alternatifi olmayan ya da bakımsız bir araç listeye girseydi o banda düşerdi.
- **Puanlar profile bağlı.** Aynı beş araç, sunucu yöneten bir kullanıcı için farklı puan alır. Kurulum ve bakım puanları `sen/01-araclar.md`'deki teknik seviyeye göre kayıyor.
- **Sistem kurulum yapmıyor.** Alternatifi buluyor, puanlıyor, sıraya diziyor. Sunucuyu kiralamak, kurmak ve veriyi taşımak kullanıcının işi. Rapor "ilk adım" sütununda ne yapılacağını yazıyor, yerine yapmıyor.
