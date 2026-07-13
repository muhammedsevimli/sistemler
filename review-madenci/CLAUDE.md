# Review Madenci · Müşteri Yorumu Satış Madencisi · Otomatik Okuma Kuralı

> Bu dosya, bu klasörde açtığın her Claude Code oturumunun BAŞINDA otomatik okunur.
> Sen hiçbir şey yapmıyorsun. Claude Code bu klasörde çalışırken bu dosyayı kendiliğinden yükler.
> Amaç: ürününün altındaki dağınık müşteri yorumlarını her seferinde tek tek okumak yerine, bir komutla tekrar eden temaları çıkar, en sık gelen itirazı bul ve her tema için satış açısı + itiraz cevabı + reklam kancası al.

## Sistem ne yapıyor (iki faz)
1. **Girdi hazırlama:** müşteri yorumlarını `yorumlar/` klasörüne alırsın. İki yol var: (a) yorumları elle yapıştırırsın (ANA ve güvenilir yol), (b) tek bir herkese açık ürün/yorum sayfası linki verirsin, sistem o sayfayı açıp GÖRÜNEN yorumları okumayı dener (en iyi çaba; sayfa yorumları giriş/kaydırma/JavaScript arkasındaysa okuyamaz, o zaman yapıştırırsın).
2. **Çözümleme + satış cephanesi (otomatik):** sistem tüm yorumları tarar, tekrar eden temaları üç gruba kümeler (neden alıyorlar, neye güveniyorlar, neye takılıyorlar), en sık gelen itirazı bulur, sonra her ana temayı `marka/` dosyalarından okuduğu senin markanın sesiyle satış diline çevirir: satış açısı + itiraz cevabı + reklam kancası. Her açının altına o açının çıktığı GERÇEK yorumu koyar (kanıt).

> DÜRÜST SINIR: Trendyol, Amazon, Shopify, Judge.me gibi platformların çoğunda yorumlar sayfaya sonradan (JavaScript ile), kaydırınca ya da giriş yapınca yüklenir. Ücretsiz, güvenilir bir otomatik yorum indirme yolu YOK. Bu yüzden ANA yol yorumları elle kopyalayıp `yorumlar/` içine yapıştırmaktır (2 dakikalık iş). Link okuma yalnız yorumları düz sayfada gösteren basit sitelerde çalışır; çalışmazsa sistem sana "yapıştır" der, uydurmaz. Tema çıkarma, itiraz bulma ve satış cephanesi üretimi tamamen otomatiktir.

## FAZ 1 · Girdi hazırlama
- Kullanıcı yorum METNİ yapıştırdıysa: doğrudan FAZ 2'ye geç.
- Kullanıcı bir LİNK verdiyse: o tek sayfayı açıp görünen yorumları okumayı dene. Yorumlar sayfada düz metin olarak varsa çıkar ve `yorumlar/` içine bir dosyaya yaz, sonra kaç yorum bulduğunu söyle. Sayfa yorumları göstermiyorsa (giriş ister, boş gelir, JavaScript arkasında) UYDURMA; kullanıcıya "bu sayfadan yorumları okuyamadım, kopyalayıp `yorumlar/` içine yapıştırır mısın, nasıl yapılacağı `yorumlar/OKU-yapistirma-rehberi.md` içinde" de.
- Hiç yorum yoksa üretime BAŞLAMA; en az 8-10 yorum iyi bir taramanın alt sınırı, tek yorumdan tema çıkmaz.

## FAZ 2 · Çözümleme + satış cephanesi istendiğinde şu dosyaları SIRAYLA oku (zorunlu)
1. `marka/01-marka.md` · kim, kime, ne satıyoruz, ne değiliz, kanıt.
2. `marka/02-ses.md` · nasıl konuşuyoruz, hitap, yasak kelimeler.
3. `marka/03-itiraz-hafizasi.md` · daha önce çıkmış itirazlar ve tutan cevaplar (kalıcı hafıza).
4. `format/yorum-ayristirma.md` · her yorumu nasıl etiketleyeceğin, temaları nasıl kümeleyeceğin.
5. `format/cikti-format.md` · çıktıyı hangi yapıda yazacağın.
6. `yorumlar/` klasöründeki tüm dosyalar · çözümlenecek ham yorumlar (`OKU-` ile başlayan rehber dosyası hariç).

Bu dosyaları okumadan üretme. İşe başlarken önce "marka + ses + itiraz hafızası + format + ham yorumlar okundu, N yorum bulundu" de (N = gerçek yorum sayısı).

## Çözümleme adımları (sistem içeride şunları yapar)
1. **Etiketle:** her yorumu `format/yorum-ayristirma.md` başlıklarına göre işaretle: duygu (olumlu / karışık / eleştiri), ana tema, geçen somut kelime/cümle.
2. **Kümele:** tekrar eden temaları üç gruba topla ve her temanın kaç yorumda geçtiğini SAY:
   - **Neden alıyorlar:** satın alma sebebi, çözülen dert, tetikleyen an.
   - **Neye güveniyorlar:** ürünün/markanın hangi özelliğine güven duyuyorlar (koku, doku, kargo, kişisel dokunuş, sonuç).
   - **Neye takılıyorlar:** şikayet, tereddüt, itiraz, iade sebebi.
3. **En sık itirazı bul:** "neye takılıyorlar" grubunda en çok tekrar eden itirazı işaretle. Bu, satış sayfanda ve reklamında BAŞTAN cevaplaman gereken şeydir.
4. **Satış diline çevir:** her ana tema için `marka/01-marka.md` ve `marka/02-ses.md` üzerinden senin sesinle üret: (a) satış açısı, (b) itiraz cevabı, (c) reklam kancası. Kanca ve açı müşterinin KENDİ kelimelerinden beslenir.
5. **Kanıt bağla:** her açının / cevabın altına, o açının çıktığı gerçek yorumdan kısa bir alıntı koy. Kaynağı olmayan iddia yazma.

## Değişmez üretim kuralları (anti-uydurma çekirdeği)
- **Yorumda OLMAYAN faydayı İCAT ETME.** Sistemin tüm gücü, müşterinin kendi ağzından çıkan gerçeği toparlamasıdır. Yorumlarda geçmeyen bir özellik, sonuç, garanti ya da duygu satış açısına GİRMEZ. "Cildini gençleştirir", "bir haftada" gibi yorumlarda kanıtı olmayan iddialar yasak.
- **İtiraz cevabı gerçek dilden gelir.** Bir itirazı (ör. "kavanoz küçük") cevaplarken, o itirazı çürüten BAŞKA gerçek müşteri cümlesi varsa (ör. "azıcık sürüyorum, aylarca gidiyor") onu kullan. Yoksa markanın `01-marka.md` içindeki gerçek teklifini kullan. İkisi de yoksa `[buraya bu itiraza kendi dürüst cevabını / teklifini koy]` placeholder bırak, cevap UYDURMA.
- **Uydurma sayı, sahte indirim, olmayan garanti YOK.** Senin sayın/teklifin `marka/01-marka.md` içinde ya da yorumlarda yoksa placeholder bırak.
- `marka/02-ses.md` içindeki YASAK kelimeleri ASLA kullanma. Yasak kalıp gördüğünde baştan yaz.
- `marka/01-marka.md` "ne DEĞİLSİN" satırlarına ters düşme (bir müşteri "indirim olsa alırdım" dese bile sen indirimci değilsen o açıyı kurma).
- Her satış açısının / itiraz cevabının / kancanın altına "hangi yorumlardan geldi" tek satırını yaz. Şeffaflık kredibilitedir.
- Em dash (uzun tire) çıktının HİÇBİR yerinde yok: ne açı metninde, ne başlıkta, ne not satırında. Ayraç gerekirse nokta, virgül, iki nokta ya da orta nokta (·).

## Çıktı nereye yazılır
Her çözümlemeyi `ciktilar/` klasörüne tek dosya olarak yaz: `ciktilar/YYYY-AA-GG-<urun-ya-da-tema>.md`.
Dosya içinde `format/cikti-format.md` yapısı: (A) tarama özeti, (B) tema kümeleri üç grup, (C) en sık gelen itiraz, (D) satış cephanesi (tema başına açı + itiraz cevabı + kanca), (E) kanıt izi, (F) uydurmama notu, (G) platform notu (Instagram "sen", LinkedIn "siz").

## İtiraz hafızası büyür (kalıcı hafıza / kendini geliştiren döngü)
Bir itiraz cevabı ya da satış açısı gerçekten işe yaradığında (satışta, reklamda tuttuğunda) `marka/03-itiraz-hafizasi.md` dosyasına tarih atarak yaz: hangi itiraz, hangi cevap tuttu, kaynağı hangi müşteri cümlesi. Sistem her ay yeni yorumlarla tekrar çalışır; bu dosya senin sektörünün canlı itiraz ve cevap hafızası olur, sonraki üretimler oradan da beslenir.
