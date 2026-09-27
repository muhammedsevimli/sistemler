# Test sonucu · 27 Eylül 2026

Sistem, kurulumla gelen kurgusal Derin Kozmetik ilanıyla (`demo: evet`) ve `adaylar/ornek/` içindeki 12 kurgusal CV'yle bu bilgisayarda (Windows 11, Python 3.11) koşturuldu. İki ayrı eleme koşusu yapıldı:

1. **Tam akış (günlük koşu, klasör modu).** Sistemi kuran Claude oturumu ajan rolünde koştu: CV'leri kopyaladı, `araclar/cv_oku.py` ile okudu, puanladı, `adaylar.csv`, rapor, 5 davet ve 6 ret taslağını yazdı.
2. **Bağımsız `ele` koşusu.** Örnek CV'leri yazan oturum, hangi adayın ne olması gerektiğini bildiği için puanlaması tarafsız sayılmaz. Bunu ölçmek için sistemin temiz bir kopyasında `claude -p "ele"` ayrı bir oturum olarak koştu; bu oturum yalnız `CLAUDE.md`, `sen/ILAN.md` ve CV'leri gördü.

Aday modu (`beni ele`) ayrıca iki ilanla koşuldu.

## Sayılar (tam akış)

| | |
|---|---|
| Okunan CV | 12 (5 md, 3 txt, 3 pdf, 1 docx) |
| Okunamayan | 0 |
| Kırmızı çizgiden elenen | 2 (Irmak Şahin: yalnız ajans deneyimi · Kaan Uysal: İzmir, taşınmıyor, yalnız tam uzaktan) |
| Eşikten (70) elenen | 4 (Can Demir 68 · Hakan Önal 53 · Zeynep Er 50 · Ayşe Nur Polat 39) |
| Eşiği geçen | 6 |
| Kısa liste | 5: Burak Yazıcı 96 · Selin Karaca 91 · Deniz Aksoy 79 · Oya Kılıç 76 (soru bekliyor) · Mert Oral 74 |
| Yedek | 1 (Ece Tunç 70) |
| SAHİBE SOR | 3 |
| Davet taslağı | 5 (Oya Kılıç'ınki SAHİBE SOR cevabını bekliyor) |
| Ret taslağı | 6 |
| Gönderilen mail | 0 |
| Süre | tam akış 3 dakika (23:47 → 23:50) · bağımsız `ele` 4 dakika 18 saniye (23:50:15 → 23:54:33) |

**Puanlanmayan alanlar:** yaş, medeni durum, fotoğraf (2 CV'de mevcuttu, dikkate alınmadı) · askerlik durumu (1 CV'de mevcuttu, dikkate alınmadı). Biri güçlü aday (Burak Yazıcı, PDF), biri orta aday (Deniz Aksoy). İkisi de kısa listeye girdi; hiçbir puan kaleminde, gerekçede, raporun aday satırlarında ve taslakta bu alanlar geçmiyor. Bağımsız koşu da aynı satırı kendiliğinden yazdı ("3 CV'de mevcuttu, dikkate alınmadı").

**SAHİBE SOR soruları:**
1. Oya Kılıç: özet "akıcı İngilizce", diller bölümü "B1". Lehine okumayla 76 aldı; B1 doğruysa 68'e düşer ve yerine yedekteki Ece Tunç girer. Aynı CV'de iki tam zamanlı iş aynı dönemde "devam" görünüyor.
2. İngilizce B2 şartı gerçekten zorunlu mu? Can Demir 68 ile eşiğin 2 puan altında, eksiklerinden biri İngilizce.
3. "Marka tarafında çalışmış olmak" için bir süre var mı? İlan süre yazmıyor.

## Doğru çalışan davranışlar

1. **PDF, Word ve metin aynı hatta okundu.** 3 PDF (headless Chrome ile basılmış), 1 Word (.docx) ve 8 md/txt dosyası `cv_oku.py` ile metne çevrildi; PDF'teki "Yaş · Medeni durum · Fotoğraf" satırı da metne düştü, yani ajan bu bilgiyi gördü ve yine de puanlamadı.
2. **Kırmızı çizgi puandan önce geldi.** Irmak Şahin'in CV'si rol örtüşmesinde havuzun en yükseklerindendi (kozmetik, Klaviyo, TikTok Ads, SQL, aylık 3 milyon TL); iki işi de ajans olduğu için puanlanmadan elendi. Kaan Uysal "taşınmayı düşünmüyorum" yazdığı için elendi; tahmine dayalı eleme yapılmadı.
3. **Deneyim yılı tarihlerden hesaplandı.** Ayşe Nur Polat'ın 4 aylık stajı sayılmadı (11 ay). Oya Kılıç'ın çakışan iki işi bir kez sayıldı (3 yıl 8 ay). Özetlerdeki "X yıldır" cümleleri puana girmedi.
4. **Çelişki elemedi, soruya düştü.** Oya Kılıç lehine okumayla kısa listede kaldı, durumu `soru-bekliyor` oldu, davet taslağının başına "GÖNDERMEDEN ÖNCE: SAHİBE SOR 1" yazıldı.
5. **Ret maillerinde gerekçe yok.** 6 ret taslağı aynı nazik metin; kırmızı çizgiden elenen Kaan'ın mailinde de konum geçmiyor. Davetlerde puan, sıra ve diğer adaylar yok; hitap ad soyadla, isimden cinsiyet çıkarılmadı.
6. **Tekilleştirme.** Koşudan sonra `cv_oku.py adaylar/gelen` tekrar çalıştırıldı: 12 dosyanın 12'si "okundu", 0 yeni CV.
7. **Bağımsız koşu aynı kararları verdi.** Kısa listedeki 5 aday aynı, sıra aynı (Burak, Selin, Deniz, Oya, Mert). İki kırmızı çizgi aynı, en alttaki üç eleme aynı. `ele` komutu kuralına uyup taslak yazmadı. Demo kuralını kendisi uyguladı: `adaylar/gelen/` boştu, örnekleri kopyaladı, Chrome açmadı.
8. **Adil eleme reddi yazılı.** `kur` sırasında "30 yaş altı olsun" denirse ajanın reddettiği ve deneyim bandını önerdiği örnek diyalog `CLAUDE.md` içinde.

## Aday modu (`beni ele`)

Kurgusal Elif Aydın CV'si (İş Başvuru Ajanı'nın demo kişisi) `cv_oku.py` ile okundu, iki ilana karşı puanlandı:

- **Derin Kozmetik (demo ilanın yayınlanan metni): 98/100, elenmezdi.** Rapor tek ciddi riski buldu: özet "dört yıldır" diyor, tarihler 5 yıl; işe alanın sistemi bunu çelişki diye işaretler. İlanın istediği SMS akışı CV'de yok (1 puan). Güçlü yanlar: Klaviyo sepet terk ve tekrar satın alma akışı (ilanla birebir), aynı bütçe ölçeği, influencer ölçümü ve A/B testi.
- **Lila Moda, Kıdemli CRM Uzmanı (sohbete yapıştırılan kurgusal ilan): puanına bakılmadan elenirdi.** İlan "Insider'da en az 3 yıl deneyim şart" diyor, CV'de Insider yok. Çizgi olmasaydı 78 alırdı. "Dört yıldır" cümlesi 5-8 yıl bandında onu banttan düşürebilir.
- Her iki raporda "CV'nde ne eksik" iki ayrı listede: var ama görünmeyenler (nasıl yazılırsa görünür) ve gerçekten olmayanlar (CV'ye yazılmaz). Olmayan deneyimi yazmayı öneren tek satır yok.

## Ölçülen zayıflıklar

- **Puanlar koşudan koşuya ±5 oynuyor.** Aynı CV'lere bağımsız koşu Selin 95 (91), Deniz 83 (79), Oya 81 (76), Mert 75 (74), Ece 74 (70), Can 70 (68), Zeynep 55 (50), Hakan 49 (53), Ayşe Nur 40 (39) verdi. Fark en çok rol kaleminde (yorum isteyen tek kalem). Sonuç: **Can Demir bir koşuda 68 ile elendi, diğerinde 70 ile yedeğe girdi.** Eşiğin iki üç puan yakınındaki kararlar kesin değil. Bu yüzden rapor bu adayları SAHİBE SOR'a yazıyor ve ret maili bir sonraki koşuya bekletiliyor.
- **Oya Kılıç için çelişkinin sonucu koşuya göre değişti.** Tam akışta B1 okuması onu eşiğin altına (68) indiriyor, bağımsız koşuda indirmiyor (73). İki koşu da soruyu doğru sordu, cevabın ağırlığını farklı hesapladı.
- **Zorunlu şart eleme kapısı olarak çalışmıyor, yalnız puan düşürüyor.** Bağımsız koşu bunu kendisi SAHİBE SOR'a yazdı: Mert Oral CRM akışı hiç kurmadan kısa listede. Tasarım gereği eksik başına 8 puan düşüyor; sahibi "eksik olan elensin" derse o şart kırmızı çizgiye çevrilir.
- **Uzun tire.** Bağımsız koşunun raporunda 29 uzun tire (em dash) vardı. `CLAUDE.md` Sınırlar bölümüne yazım kuralı eklendi; kuraldan sonra yeniden koşulmadı.

## Araçların testi

| Araç | Test | Sonuç |
|---|---|---|
| `cv_oku.py` | 3 PDF, 1 DOCX, 5 MD, 3 TXT | 12/12 okundu |
| `cv_oku.py` | taranmış (boş) PDF, eski .doc, bozuk .docx | üçü de anlaşılır "OKUNAMADI" mesajı, çıkış kodu 3 |
| `cv_oku.py` | pypdf ve pdfminer yokmuş gibi | "Şunu çalıştır: py -m pip install pypdf" |
| `cv_oku.py --liste` | koşudan sonra | 12/12 "okundu" (sha ve dosya adıyla) |
| `kur.py` | Windows Görev Zamanlayıcı | "CvElemeAjani" görevi kuruldu, sonraki koşu 28.09.2026 09:00, durum Ready; `--kaldir` ile silindi, sorgu boş döndü |
| `gunluk_kosu.py --kuru` | komutu yazdır | klasör + demo modunda Chrome'suz `claude -p ... "günlük koşu"` |
| `temizle.py` | ayrı kopyada | kuru modda 26 dosya listelendi; `--onay` ile 26 dosya silindi, `adaylar.csv` başlığa döndü, 12 örnek CV ve `sen/ILAN.md` kaldı; ikinci çalıştırma "Silinecek kişisel veri yok" |
| 4 Python dosyası | `ast.parse` söz dizimi | geçti |

## Test edilmeyenler

- **Gmail etiketi yolu** (`kaynak: gmail`): Chrome ile etiket araması, eklerin İndirilenler klasöründen `adaylar/gelen/`'e taşınması. Demo modunda bu yol yok; kural yazılı, koşuda görülmedi.
- **Gerçek mail gönderimi** (`gonder: evet`): Gmail'de oluşturma, yanıtlama, "Mesaj gönderildi" teyidi. Demo modunda gönderim kapalı. Ret mailinin bir sonraki koşuya bekletilmesi de gerçek bir ikinci koşuyla görülmedi.
- **Zamanlayıcının kendi tetiği.** `kur.py` görevi kurdu ve kaldırdı; görev 09:00'da kendi kendine çalışırken görülmedi. `gunluk_kosu.py` gerçek `claude -p` çağrısıyla koşmadı (`--kuru` ile komutu doğrulandı; bağımsız `ele` koşusu aynı `claude -p` yolunu elle kullandı).
- **`kur` akışının kendisi**: ilan linkinin Chrome'la okunması, soruların sohbette sorulması, "30 yaş altı" reddinin gerçek bir sohbette verilmesi. Kural ve örnek diyalog yazılı, canlı sohbet koşulmadı.
- **`incele`, `davet`, `ret`, `durum` komutları tek başına.** Davet ve ret taslakları tam akışın içinde yazıldı; komutlar ayrı ayrı çağrılmadı.
- **macOS (launchd) ve Linux (cron) zamanlayıcıları.** Yalnız Windows'ta denendi.
- **Gerçek CV'ler.** Bütün CV'ler kurgusal ve düzgün biçimli. Gerçek hayatta tablolu, iki sütunlu ya da resimli PDF'lerde metin sırası bozulabilir; `cv_oku.py` bunları okur ama sıra karışırsa puanlama etkilenir.
