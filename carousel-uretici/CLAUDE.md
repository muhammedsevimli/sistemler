# Carousel + Hook Üretici · Otomatik Okuma Kuralı

> Bu dosya, bu klasörde açtığın her Claude Code oturumunun BAŞINDA otomatik okunur.
> Sen hiçbir şey yapmıyorsun. Claude Code bu klasörde çalışırken bu dosyayı kendiliğinden yükler.
> Aynı kural `AGENTS.md` (Codex, Google Antigravity, Windsurf ve 20+ araç) ve `.cursor/rules/carousel-uretici.mdc` (Cursor) dosyalarında da var.
> Amaç: her carousel için markanı, sesini ve konuyu baştan anlatmamak; tek komutla slayt + hook çıkarmak.

## Bir carousel istendiğinde şu dosyaları SIRAYLA oku (zorunlu)
1. `marka/01-marka.md` · kim, kime, ne satıyoruz, ne değiliz, kanıt.
2. `marka/02-ses.md` · nasıl konuşuyoruz, hitap, yasak kelimeler.
3. `marka/03-swipe.md` · geçmişte tutan açılar ve hook'lar (kazanılmış taktikler dosyası).
4. `format/hook-kaliplari.md` · hook formül bankası.
5. `format/carousel-format.md` · slayt anatomisi ve kaç slayt kuralı.

Bu beş dosyayı okumadan carousel üretme. Konu verilince önce "marka + ses + swipe + format okundu" de.

## Üretim komutu
Kullanıcı `URET.md` içindeki komutu çalıştırır ya da sadece "şu konuda carousel çıkar: <konu>" der.
Çıktı HER ZAMAN `format/carousel-format.md` yapısına ve `marka/02-ses.md` tonuna uyar.

## Değişmez üretim kuralları
- `marka/02-ses.md` içindeki YASAK kelimeleri ASLA kullanma. Yasak kalıp gördüğünde slaytı baştan yaz.
- `marka/01-marka.md` içindeki "ne DEĞİLİZ" satırlarına ters düşme.
- Her carousel için 3 hook üret (farklı açı: dert, sayı, karşı görüş). Kullanıcı birini seçer.
- Kapak (ilk slayt) durdurucu olacak. Son slayt tek net CTA. Ara slaytlar tek fikir taşır, slayt başına 2-3 kısa cümle.
- Uydurma sayı, sahte referans YOK. Kanıt lazımsa `marka/01-marka.md` kanıt satırından çek; yoksa "[buraya kendi sayını koy]" placeholder bırak, uydurma.
- Görsel yönergesi (her slaytın altında "görsel:" satırı) tasarımcıya/Canva'ya yön verir; sistem tasarım yapmaz, metin + yön verir.
- Em dash (uzun tire) çıktının HİÇBİR yerinde yok: ne slayt metninde, ne başlıkta, ne not/ayraç satırında. Ayraç gerekiyorsa nokta, virgül, iki nokta ya da orta nokta (·) kullan.

## Çıktı nereye yazılır
Her üretimi `ciktilar/` klasörüne tek dosya olarak yaz: `ciktilar/YYYY-AA-GG-<konu-slug>.md`.
Dosya içinde: seçilen 3 hook + slayt slayt metin + görsel yönergeleri + platform notu (IG/LinkedIn).

## Yeni açı tutarsa geri yaz (write-back)
Bir hook ya da açı iyi çalıştıysa (kullanıcı "bu tuttu" derse) onu `marka/03-swipe.md` en üstüne tarih atarak ekle.
Böylece swipe-file (kazanılmış taktikler dosyası) her carousel'la büyür, sistem senin işine daha çok benzer.
