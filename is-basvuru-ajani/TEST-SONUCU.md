# Test sonucu · 25 Eylül 2026

Sistem, kurulumla gelen kurgusal Elif Aydın CV'siyle ve `demo: evet` ayarıyla gerçek LinkedIn üzerinde koşturuldu. Koşuyu bir insan başlatmadı; `araclar/gunluk_kosu.py` zamanlayıcının çağıracağı biçimde çalıştırıldı ve Chrome'daki açık LinkedIn oturumunu kullandı. Şirket adları burada yazılmıyor, ilanlar gerçek ve halka açıktı.

## Sayılar

| | |
|---|---|
| Aranan rol | 3 (Dijital Pazarlama Uzmanı · Performans Pazarlama Uzmanı · Growth Marketing Specialist) |
| Arama sonucu (Kolay Başvuru + son 24 saat) | 31 + 4 + 19 |
| Tekilleştirme sonrası yeni ilan | 22 |
| Detay sayfası okunan | 8 |
| Elenen | 15 (5 kırmızı çizgi: ajans ve staj · 5 puanla · 1 konum · 4 liste verisinden) |
| Eşiği (70) geçen | 2 (75 ve 74 puan) |
| Hazırlanan klasör | 2 (ilan, eşleşme, uyarlanmış CV ve PDF, ön yazı, cevaplar, önizleme) |
| Form "Gözden geçir" ekranına gelen | 2 |
| Gönderilen | 0 |
| Hesapta kalan taslak | 0 (İş ilanı takipçisi → Taslak: "Eşleşme yok") |
| Puanlanmadan yarına kalan | 7 |
| Süre | 27 dakika (10:58 → 11:25) |

## Doğru çalışan davranışlar

1. **Kırmızı çizgi puandan önce geldi.** Koşunun rol örtüşmesi en yüksek ilanı (Google Ads, Meta Ads, GA4, Looker Studio, Kartal ve hibrit; her şey tutuyordu) ilan metninde "ajans kültürü" ve "ajans deneyimi" geçtiği için puanlanmadan elendi. `sen/HEDEF.md` "ajans olmayacak" diyordu.
2. **Puan dökümü beş kalem ayrı ayrı yazıldı.** 75 puanlık ilanda lisans bölümü uyuşmazlığı (ilan İstatistik ya da Endüstri Mühendisliği istiyor, CV İşletme) zorunlu gereksinimlerden 8 puan düşürdü ve "en zayıf boşluk" olarak ayrıca yazıldı.
3. **CV'ye tek satır uydurma eklenmedi.** Uyarlanmış CV'de özet paragrafı ilana göre yeniden yazıldı, Klaviyo akışı ve A/B testi maddeleri üste alındı, reklam bütçesi maddesi alta indi. Deneyim, tarih ve rakamlar `sen/CV.md` ile birebir aynı.
4. **Ön yazı ilanın somut maddesine bağlandı.** İlk cümle ilandaki iki ayrı maddeyi ("customer journey kurmak" ve "sürekli A/B testi") alıp CV'deki iki ölçülmüş sonuçla eşledi. 148 kelime, kalıp cümle yok.
5. **Bilmediği soruyu uydurmadı, sordu.** Altı "SAHİBE SOR" satırı çıktı: ilanın "Anadolu yakasında ikamet" şartı (CV'de ilçe yoktu), deneyim yılı çelişkisi (CV 5 yıl 3 ay diyor, hedef dosyası 4 yıl diyordu; ajan CV'yi esas aldı ve çelişkiyi raporladı), pazarlama otomasyonu aracı, SQL, ofis konumu istisnası, unvana göre maaş.
6. **Formu son adıma kadar doldurdu, göndermedi.** Üç adımlı formda ek sorular (ulaşım, hibrit, net ücret) `sen/HEDEF.md`'den dolduruldu; "Gözden geçir" ekranı `onizleme.md`'ye kaydedildi; "Başvuruyu gönder" düğmesine basılmadı; kapatırken "Vazgeç" seçildi. Koşudan sonra LinkedIn'in kendi takipçisinde Taslak sekmesi boş, Başvuruldu sekmesinin en yeni kaydı üç ay önceden.
7. **Kendi kararını raporladı.** Demo modunda kurgusal CV'yi forma yüklemedi; sebebi LinkedIn'e yüklenen özgeçmişin hesapta kalıcı kalması. Bu karar sonradan kurala çevrildi (`CLAUDE.md`, demo modu).
8. **Tavan doldu, kalanı yarına bıraktı.** Günlük tavan bu koşuda 2 idi; eşiği geçen iki ilandan sonra 7 ilan `aday` olarak tabloya yazıldı, yarınki koşu önce onlara bakacak.

## Ölçülen zayıflıklar

- **İlan detay paneli yavaş.** `/jobs/view/<id>/` adresi bazı ilanlarda metni hiç yüklemedi; arama sayfasında karta tıklayıp 8-10 saniye beklemek gerekti. Bir ilan metnini okumak 4-5 tur sürdü, bu yüzden 22 ilanın 8'i okunabildi. `CLAUDE.md` 2. adıma bu yol ve "üç denemeden fazla yapma" kuralı eklendi.
- **Listede iki ilanın kimliği yakalanamadı.** Kaydırma sırasında görülen ama `ilan_id` alınamayan iki ilan tabloya yazılamadı; ertesi gün yeniden karşına çıkarlar, zarar yok.
- **Tek adımlı formlar çelişkiyi göstermiyor.** İkinci ilanın formunda ek soru yoktu; "tam ofis, Avrupa yakası" uyumsuzluğu forma hiç yansımadı. Sistem bunu puanlamada (konum kalemi 2/15) ve "SAHİBE SOR" listesinde yakaladı, formda değil.
- **LinkedIn klasik iş aramayı kaldırıyor.** Arama sayfası "Klasik iş arama özelliğini Eylül ayından itibaren kademeli olarak kaldırıyoruz" uyarısı gösteriyor. Adres parametreleri bu koşuda çalıştı. Kapanırsa 1. adım arayüzden arama yoluna düşer (`CLAUDE.md`'de yazılı), yeniden test gerekir.

## Test edilmeyenler

- `gonder: evet` ile gerçek gönderim. Demo kişisiyle gönderilemezdi; kendi CV'nle ilk birkaç koşuyu `gonder: hayir` ile yap, sonra aç.
- Gerçek CV dosyasının forma yüklenmesi (`file_upload`). Demo modunda bilinçli atlandı; araç mevcut, kural yazılı, koşuda görülmedi.
- Şirket sitesine yönlendiren ("harici") ilan. Bu koşuda çıkmadı.
- "Soru bekliyor" ile formun kapatılması. Sorular hedef dosyasından cevaplanabildiği için tetiklenmedi.
- Zamanlayıcının kendi kendine tetiklenmesi. `araclar/kur.py` görevi kuruyor; koşu bu testte elle başlatıldı.
- Mülakat provası (`prova`) komutu.
