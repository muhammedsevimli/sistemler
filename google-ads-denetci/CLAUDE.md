# Google Ads Denetçisi · Boşa Giden Reklam Parası + Düzeltme Listesi · Otomatik Okuma Kuralı

> Bu dosya, bu klasörde açtığın her Claude Code oturumunun BAŞINDA otomatik okunur.
> Sen hiçbir şey yapmıyorsun. Claude Code bu klasörde çalışırken bu dosyayı kendiliğinden yükler.
> Amaç: Google Ads hesabındaki boşa giden reklam parasını KENDİ VERİNDEN bulmak, sana rakamıyla öncelikli bir düzeltme listesi vermek. Sistem senin adına hesaba dokunmaz; ne yapacağını söyler, değişikliği sen yaparsın.

## Sistem ne yapıyor
Google Ads'ten dışa aktardığın iki raporu okur ve denetler:
1. **Arama terimleri raporu** (asıl kaynak): reklamlarını hangi aramaların tetiklediği, her aramanın kaç tıklama, ne kadar maliyet, kaç dönüşüm getirdiği.
2. **Kampanyalar raporu** (varsa): kampanya bazında maliyet, dönüşüm, dönüşüm değeri, ROAS.

Sonra beş şeyi çıkarır: (1) boşa giden harcama, (2) eksik negatif kelimeler, (3) hatalı eşleşme türü, (4) bütçe yanlış dağılımı, (5) düşük CTR / yüksek maliyet sinyalleri. Çıktı: **boşa giden toplam tutar (senin verinden HESAPLANIR, uydurulmaz)** + öncelikli "bu hafta düzelt" listesi + tahmini tasarruf.

> DÜRÜST SINIR: Bu sistem hesabına BAĞLANMAZ. Google Ads'in resmi API'si var ama geliştirici jetonu (developer token) ve OAuth kurulumu ister, teknik bir iştir ve onay süreci gerekir. Bu yüzden ana yol: raporu Google Ads panelinden dışa aktar, `veri/` klasörüne yapıştır. Nasıl aktaracağın: `veri/OKU-veri-cikarma-rehberi.md`. Okuma, hesaplama ve düzeltme listesi tamamen otomatiktir; değişiklikleri hesapta sen yaparsın.

## Denetim istendiğinde şu dosyaları SIRAYLA oku (zorunlu)
1. `hesap/01-hesap.md` · ne satıyorsun, kime, hedef CPA/ROAS, ne DEĞİLSİN.
2. `format/denetim-anatomisi.md` · beş denetim + boşa giden tutarı hesaplama kuralı.
3. `format/cikti-format.md` · çıktıyı hangi yapıda yazacağın.
4. `veri/` klasöründeki tüm rapor dosyaları · denetlenecek ham veri (`ORNEK-` ile başlayanlar örnek settir, gerçek denetimde kendi raporun).

Bu dosyaları okumadan denetleme. Başlarken "hesap + anatomi + format + veri okundu" de.

## Denetim adımları (sistem içeride şunları yapar)
1. **Veriyi tanı:** hangi rapor var (arama terimleri, kampanyalar, ikisi de). Kolon başlıklarını eşle. Google Ads kolon adları dile göre değişir: `Maliyet`=Cost, `Dönş.`=Conversions, `Dönş. değeri`=Conv. value, `Tıklama`=Clicks, `Gösterim`=Impr., `Eşleşme türü`=Match type. Hangi kolonu neye eşlediğini tek satır söyle. Bir kolon eksikse (örn. dönüşüm değeri yok) o kolona bağlı hesabı yapma, "şu kolonu da dışa aktar" de.
2. **Her arama terimini sınıflandır** (`hesap/01-hesap.md` ile karşılaştırarak):
   - **alakalı + dönüşen:** işine uygun, dönüşüm getirmiş. Dokunma.
   - **alakalı + dönüşmemiş:** işine uygun ama 0 dönüşüm. Bu BOŞA GİDEN DEĞİL, "izle" kovasına koy. Belki daha fazla veri/zaman gerekiyor. Uydurma waste yaratma.
   - **boşa giden:** işine uygun DEĞİL. Bilgi amaçlı arama ("nasıl yapılır", "nasıl temizlenir"), DIY/kendin yap, rakip/başka marka adı, "ucuz/ikinci el" gibi konumlandırmana ters, ya da `hesap/01-hesap.md` "ne DEĞİLSİN" satırına giren segment (toptan, ham madde vb.). Maliyeti var, işine dönüşmez.
3. **Boşa giden tutarı HESAPLA:** boşa giden diye işaretlediğin satırların `Maliyet` kolonunu TOPLA. Bu toplam = boşa giden tutar. Hangi satırların toplandığını göster, tek tek maliyetleriyle. Toplam DIŞINDA bir rakam uydurma. Harcamanın yüzde kaçı olduğunu da yaz (boşa giden / toplam maliyet).
4. **Eksik negatif kelimeleri bul:** boşa giden terimlerde tekrar eden kök kelimeleri çıkar ("nasıl", "ucuz", "ikinci el", "toptan", rakip marka adı...). Her birini önerilen negatif kelime olarak, hangi satırlardan geldiğiyle listele.
5. **Hatalı eşleşme türünü bul:** boşa giden terimlerin çoğu `Geniş eşleşme` (broad match) satırlarından geliyorsa, o kampanya/reklam grubunu işaretle. AMA aynı geniş eşleşme dönüşüm de getiriyorsa öldürme; "sıralı/tam eşleşmeye çevir + negatifleri ekle" de. Dönüşen terimi kesecek öneri verme.
6. **Bütçe dağılımını denetle** (kampanya raporu varsa): her kampanyanın maliyet payını ve ROAS'ını çıkar. Yüksek maliyet düşük ROAS (hedef ROAS'ın belirgin altında) kampanyayı işaretle: "bütçenin %X'ini yiyor, ROAS Y, hedef Z. kıs ya da yeniden kur."
7. **Düşük CTR / yüksek maliyet sinyali:** hesap ortalamasına göre belirgin sapan satır/kampanya varsa işaretle (CTR = Tıklama/Gösterim, CPC = Maliyet/Tıklama). İkincil öncelik; ana hikaye boşa giden + negatif + bütçe.
8. **Tahmini tasarruf:** boşa giden 0-dönüşümlü harcamayı kesersen aynı dönüşümleri koruyup ne kadar tasarruf edersin (= boşa giden tutar). Dönüşüm değeri kolonu varsa, boşa giden kesildiğinde ROAS'ın kabaca nereye çıkacağını (toplam değer / kalan maliyet) tek satır göster ve "tahmini, harcama tam yer değiştirmeyebilir" notunu düş. Uydurma çarpan (2 kat, 3 kat) YOK.

## Değişmez üretim kuralları (anti-uydurma)
- **Bütün rakamlar YALNIZ verideki kolonlardan gelir.** Boşa giden tutar = işaretli satırların maliyet toplamı, başka bir şey değil. Ciro, gerçek bütçe, tıklama başına gelir gibi veride olmayan rakamı UYDURMA.
- Veri eksikse (dönüşüm kolonu yok, tarih aralığı belli değil, satır sayısı az) denetimi yarım yapma, "şu raporu / şu kolonu da ver" de. Az veriyle kesin konuşma.
- **Alakalı ama dönüşmemiş terimi boşa giden sayma.** 0 dönüşüm tek başına israf kanıtı değil; ancak terim işine de uygun değilse israftır. Bu ayrımı `hesap/01-hesap.md` ile yap.
- Bir terim dönüşüm getirdiyse ama `hesap/01-hesap.md` "ne DEĞİLSİN"e giriyorsa (örn. toptan) onu "boşa giden"e değil, ayrı "strateji dışı / düşük getiri" satırına koy ve dönüştüğünü dürüstçe yaz. Tek dönüşümü yok sayıp tamamını israf gibi gösterme.
- Sistem hesaba DOKUNMAZ. "Şu kampanyayı durdurdum" gibi cümle kurma. Hep öneri kipinde: "şunu negatif ekle", "şu kampanyayı kıs", "şu eşleşmeyi değiştir".
- Em dash (uzun tire) çıktının HİÇBİR yerinde yok. Ayraç gerekirse nokta, virgül, iki nokta ya da orta nokta (·).
- Motivasyon dili, abartı, "harika/muhteşem", gelir hava atma yok. Sade, operator diliyle.

## Çıktı nereye yazılır
Her denetimi `ciktilar/` klasörüne tek dosya olarak yaz: `ciktilar/YYYY-AA-GG-denetim.md`.
Yapı `format/cikti-format.md` içinde: (a) özet kutu (toplam harcama, boşa giden tutar + yüzde, tahmini tasarruf), (b) boşa giden satırların dökümü (hangi satırlar, maliyetleriyle, neden), (c) öncelikli "bu hafta düzelt" listesi (negatif ekle / kampanya kıs / eşleşme değiştir), (d) izle kovası (alakalı ama dönüşmemiş), (e) veri eksikse ne istediğin.

## Kalıcı hafıza (döngü)
Bir düzeltmeyi uyguladığında sonucu takip etmek için `hesap/01-hesap.md` en altındaki "uygulanan düzeltmeler" bölümüne tarih atarak yaz (hangi negatifi ekledin, hangi kampanyayı kıstın). Bir sonraki ay yeni raporu denetlerken sistem bunu okur, aynı sızıntıyı iki kez önermez, düzeltmenin işe yarayıp yaramadığını karşılaştırır.
