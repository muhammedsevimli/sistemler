# Test Sonucu · Fikir Madencisi (SaaS Fikir Puanlayıcı)

> Sistem gerçek Claude Code CLI (v2.1.195) ile bu makinede (Windows) çalıştırıldı.
> Kurgusal operatör profili (yerel esnaf + küçük e-ticaret alanı) ve 11 kurgusal TR talep sinyaliyle dolduruldu.
> Prompt'larda işe/fikre dair bilgi VERİLMEDİ; sistem her şeyi `sen/`, `format/` ve `sinyaller/` dosyalarından çıkardı.

## Test ortamı
- Test klasörü: `approvals/hafta-2026-30/_test-fm` (kanonik sistemin kopyası + doldurulmuş profil + yapıştırılmış kurgusal sinyaller). Not: bu makinenin C: geçici disk bölümü dışarıdan %100 dolu olduğu için alt-süreç geçici klasörü D: sürücüsüne alındı (`TMPDIR=./dtmp`); koşu bu yüzden ön planda değil arka planda tamamlandı, sonuç diskte doğrulandı.
- Çalıştırma: `claude -p "<görev>" --allowedTools Read,Write,Glob,Grep --permission-mode acceptEdits` (klasör kökünde, `CLAUDE.md` otomatik yüklendi).
- Kurgusal girdi: 5 kaynak tipinden 11 talep sinyali (X aramaları, Ekşi, Discord, Trendyol yorumu, Google Haritalar); farklı sinyal güçleri (güçlü/orta/zayıf) ve dört sinyalde açık para dili.

## TEST 1 · FAZ 1 · kaynaktan tıkla-git link üretimi → GEÇTİ
- Görev: "kaynak listemden nereye bakacağımı çıkar."
- Sonuç: "profil + kaynaklar okundu" dedi. `sen/02-kaynaklar.md`'deki her X araması için doğru biçimli `https://x.com/search?q=...&f=live` linki üretti. Türkçe karakterler ve boşluklar doğru URL-kodlandı (ş = `%C5%9F`, ı = `%C4%B1`, boşluk = `%20`, kesme = `%27`). Forum / pazar yeri / yorum kaynakları için tek satır yön verdi (Ekşi başlıkları, Trendyol düşük yıldızlı yorumlar, Google Haritalar). Sonda tek satırla ne yapılacağını söyledi (linke bak, gördüğün cümleleri `sinyaller/` içine yapıştır, sonra puanla komutunu çalıştır). Çıktı: `_test-fm/faz1.out`.

## TEST 2 · FAZ 2 · otomatik okuma + sinyalden fikre + birleştirme → GEÇTİ
- Görev: "sinyaller klasöründeki tüm talep sinyallerini puanla ve en iyi 5 SaaS fikrini çıkar."
- Sonuç: en başta okuduğu dosyaları tek tek yazdı (profil, kaynaklar, kriterler, format, ham sinyaller). 11 ham sinyali okuyup 9 ayrı SaaS fikrine indirdi. Aynı derdi anlatan sinyalleri BİRLEŞTİRDİ: Sinyal 1 (kuaför) + Sinyal 2 (güzellik merkezi) tek "randevu no-show" fikrinde, Sinyal 4 (butik IG sipariş) + Sinyal 11 (ev yemekleri sipariş sayfası) tek "IG sipariş takibi" fikrinde toplandı.

## TEST 3 · dört kritere puanlama + gerekçe + sinyal gücü → GEÇTİ
- Her fikri dört kritere (pazar, fizibilite, rekabet boşluğu, TR uyumu) 1-5 puanladı, her puanın altına tek satır gerekçe yazdı, toplamı 20 üzerinden hesapladı ve tam puan tablosu çıkardı.
- Sinyal gücünü ayrı sütunda işaretledi (güçlü / orta / zayıf) ve para dili geçen sinyalleri özet paragrafında adıyla topladı (randevu "300 TL veririm", aidat "makul ücret veririz", IG sipariş "memnuniyetle öderim", kripto vergi "para veririm").
- Sıralama tutarlı: en yüksek toplam (randevu 18) başa, en düşük (tüketici kargo 8) sona.

## TEST 4 · profilden süzme + riskli alan işaretleme → GEÇTİ
- **Riskli alan (sağlık/kişisel veri):** diyetisyen danışan paneli para dili taşımasına rağmen "RİSKLİ ALAN" notuyla işaretlendi, fizibilite puanı düşürüldü (3) ve ilk beşin EN ALTINA kondu; gerekçe: danışan ölçümü kişisel/sağlık verisi, KVKK uyumu ister, operatörün "tıbbi veri işine girmem" sınırına değiyor.
- **Profil sınırı (mali/lisans):** kripto vergi hesaplama fikri boşluk puanı yüksek (4) olsa bile "senin sınırın", fizibilite 1 verilip ELENDİ; gerekçe: vergi/mali alan, hatası pahalı, operatörün girmem dediği alan.
- **İş modeli süzgeci:** tüketici kargo takibi "işletme değil tüketici derdi, ödeyecek müşteri yok" diye B2C olarak elendi (operatörün B2B hedefi dışı).

## TEST 5 · anti-uydurma + kopya yasağı → GEÇTİ
- Sistem sinyalde olmayan talep UYDURMADI; her fikri yapıştırılmış sinyale bağladı ("nereden çıktı" satırı her kartta var). Zayıf sinyali (freelancer teklif, tek kişi) zayıf işaretleyip alta düşürdü, şişirmedi.
- KOPYA önermedi: mevcut TR oyuncularını (İkas/Ticimax, Apsiyon) rekabet satırında adlandırıp AYRIŞMA noktasını yazdı ("kart açmadan tek tablo isteyen mikro satıcı", "onları pahalı bulan küçük siteler"), "şunun aynısını kur" demedi.

## TEST 6 · VOICE / em dash denetimi → GEÇTİ
- Çıktıda em dash (U+2014): 0 (grep ile doğrulandı). En dash (U+2013): 0. Ayraç olarak orta nokta (·) ve virgül kullanıldı.
- Yasak kalıp (motivasyon dili, gelir vaadi, "X değil Y" yapay tezat, abartı): raporda yok. Ton soğukkanlı analist. Kapanış satırı: "karar senin; bu rapor sıralı bir pusula, kesin emir değil" (sistemin duruşuna uygun: fikir bulmayı devret, kararı operatöre bırak).

## Özet
6/6 test gerçek CLI çalıştırmasıyla geçti: FAZ 1 link üretimi (Türkçe URL-kodlama dahil), FAZ 2 otomatik okuma, sinyalden fikre çevirme, aynı derdi birleştirme, dört kritere gerekçeli puanlama, sinyal gücü + para dili okuma, profilden süzme, riskli alan (sağlık/mali) işaretleme ve düşürme, anti-uydurma, kopya yasağı (ayrışma yazma), em-dash-sız ve motivasyon-dilsiz çıktı. Sahte "kuruldu" yok; hepsi çalıştırıldı ve dosyalar diskte doğrulandı. Üretilen skorlu 5 fikir raporu kanonik sistemde: `ciktilar/ORNEK-CIKTI-fikir-raporu.md`.

## Üretilen 5 fikir (özet)
1. Randevu no-show + kapora (randevulu esnaf) · 18/20 · güçlü · bu hafta buradan başla
2. Instagram/DM sipariş takip paneli · 17/20 · orta
3. Apartman/site aidat takip + hatırlatma · 16/20 · orta
4. Yerel işletme yorum yanıt aracı (AI taslak) · 14/20 · orta
5. Diyetisyen/koç danışan takip paneli · 14/20 · orta (riskli alan, en altta)
Elenenler: kripto vergi (profil sınırı), çok kanal iade (fizibilite), freelancer teklif (zayıf sinyal), tüketici kargo (B2C).

## Test edilemeyenler (dürüst sınır)
- **Canlı otomatik tarama:** sistem tasarımı gereği internete girip senin yerine tarama yapmaz; talep sinyalini görme adımı kullanıcının aç-ve-yapıştır işidir. Testte bu adım kurgusal sinyaller yapıştırılarak simüle edildi (gerçek kullanımda kullanıcı X/forum/yorumdan yapıştırır). [test edilemedi: canlı kaynak taraması kapsam dışı; erişim modeli PLAYBOOK'ta dürüstçe belgelendi]
- **Puanların gerçek pazar isabeti:** puanlar bir pusuladır, kesin gerçek değil. Bir fikrin gerçekten para edip etmediği ancak kullanıcı MVP'yi kurup ilk müşterilere sorunca ölçülür. [test edilemedi: gerçek pazar validasyonu kullanıcının işi]
- **Ortam notu:** izole alt-süreç koşusu bu makinenin C: geçici bölümü dışarıdan dolu olduğu için ilk denemede takıldı; alt-süreç geçici klasörü D: sürücüsüne alınınca koşu tamamlandı. Sistem kusuru değil, makine disk koşulu.
