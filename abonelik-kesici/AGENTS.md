# Abonelik Kesici · Otomatik Okuma Kuralı (AGENTS.md)

> Bu dosya evrensel AGENTS.md açık standardıdır. Codex, Google Antigravity, Windsurf, Kilo ve 20+ AI aracı bu klasörde çalışırken bunu otomatik okur.
> Claude Code için aynı kural `CLAUDE.md` dosyasında.
> Amaç: kullanıcının her ay ödediği abonelikleri tahmin etmeyi bırakması. Kullanıcı araçlarını ve ücretlerini yazar; sen her biri için açık kaynak ve kendi sunucusuna kurulabilen alternatifleri KENDİN tarar, dört kritere puanlar ve sıralı bir kesme listesi çıkarırsın.

## Bu sistemin duruşu (değişmez)
Bu sistem "şunu kes" emri vermez. Alternatifi bulur, gerçek maliyetini çıkarır, sıraya dizer. Kesme kararı kullanıcınındır. Bir aracın açık kaynak karşılığı varsa ama kurulumu kullanıcının teknik seviyesini aşıyorsa bunu gizleme; söyle ve listenin altına at.

Her aracın kesilmesi gerektiğini savunma. Bazılarının karşılığı yoktur, bazılarınınki daha pahalıya gelir (sunucu + zaman). Bunları DOKUNMA bandına koy ve nedenini yaz.

## FAZ 1 · Tarama istendiğinde

`sen/01-araclar.md` dosyasını oku. Listedeki her araç için sırayla:

1. **Alternatif ara.** Web aramasıyla şu kalıpları kullan: `<araç adı> open source alternative`, `<araç adı> self hosted`, `awesome selfhosted <kategori>`. Türkçe arama yapma, bu alanın kaynakları İngilizce.
2. **Bulunan her alternatifi doğrula.** Proje adresini aç ve çek: lisans (MIT/Apache/AGPL fark eder), son commit ya da sürüm tarihi, kurulum yöntemi (docker var mı), yönetilen bulut sürümü sunuyor mu.
3. **Ölü projeyi işaretle.** Son güncellenme bir yıldan eskiyse "bakımsız" diye işaretle ve puanını düşür. Terk edilmiş bir projeyi tavsiye etmek, aboneliği ödemekten daha pahalıdır.
4. **Alternatifi olmayanı dürüstçe yaz.** Gerçek bir karşılık bulamadıysan "karşılığı yok" yaz. Zorlama benzetme yapma.

Topladığın her satırı `veri/tarama-YYYY-AA-GG.md` dosyasına yaz: araç · alternatif adı · adres · lisans · son güncelleme · docker var mı · yönetilen sürüm var mı · not.

Sonda tek satır özet: kaç araç tarandı, kaçına alternatif bulundu, kaçı erişilemedi.

## FAZ 2 · Kesme listesi istendiğinde şu dosyaları SIRAYLA oku (zorunlu)

1. `sen/01-araclar.md` · hangi araçlar, ne kadar ödeniyor, o araçta gerçekten ne yapılıyor, teknik seviye ne.
2. `format/kriterler.md` · dört kriter ve 1-5 puanlama cetveli.
3. `format/rapor-format.md` · raporu hangi yapıda yazacağın.
4. `veri/` klasöründeki tüm tarama dosyaları.

Bu dosyaları okumadan üretme. İşe başlarken önce "araçlar + kriterler + format + tarama okundu" de.

## Puanlama adımları

1. **Kullanılan kısmı izole et.** `sen/01-araclar.md`'deki "o araçta gerçekten ne yapıyorum" satırını oku. Alternatifi bu işe göre değerlendir, aracın tamamına göre değil.
2. **Dört kritere puanla:** kurulum zorluğu, teknik bilgi gereksinimi (bakım), gerçek aylık maliyet, veri taşıma riski. Her puanın yanına tek satır gerekçe.
3. **Gerçek maliyeti hesapla, sıfır deme.** Self-host bedava değil. Sunucu kirası, alan adı, yedekleme ve kurulum saati hesaba girer. Bir sunucuya üç araç sığıyorsa maliyeti böl ve payını yaz.
4. **Üç banda ayır:** KES (alternatif olgun, kurulum seviyeye uygun, tasarruf gerçek) · DENE (alternatif var ama zaman ya da veri riski var, önce paralel çalıştır) · DOKUNMA (alternatif yok, bakımsız, ya da maliyeti aboneliği geçiyor).
5. **Yıllık farkı TL yaz.** Kur kullandıysan hangi kuru hangi tarihte kullandığını yaz, uydurma.

## Değişmez üretim kuralları

- **Alternatif UYDURMA.** Yalnızca taramada gerçekten bulunmuş, adresi doğrulanmış projeleri yaz.
- **Tasarrufu ŞİŞİRME.** Sunucu maliyetini ve kurulum zamanını düşmeden tasarruf yazma.
- **Kur uydurma.** Kuru ve tarihini yaz, yapamıyorsan dolar bırak.
- **Ölü projeyi önerme.** Bir yıldan uzun süredir güncellenmemiş projeyi KES bandına koyma.
- **Lisansı yaz.** AGPL bir işletme için Apache'den farklı sonuç doğurur. Açık çekirdek projeleri ("Portions of this software are licensed as follows") "tamamen açık kaynak" diye sunma.
- **Veri taşımayı küçümseme.** Riskli olanı riskli yaz, taşınmayan veri varsa neyin taşınmadığını söyle.
- **Em dash (uzun tire) çıktının HİÇBİR yerinde yok.** Ayraç gerekirse nokta, virgül, iki nokta ya da orta nokta (·).
- **Motivasyon yapma.** Sistem soğukkanlı bir muhasebeci gibi konuşur.

## Çıktı nereye yazılır

`ciktilar/YYYY-AA-GG-kesme-listesi.md`.
İçinde sırayla: (a) mevcut abonelik tablosu ve aylık toplam, (b) araç araç alternatif bulguları, (c) dört kriter puan tablosu, (d) üç bant halinde kesme listesi, (e) yıllık fark (altyapı gideri düşülmüş net), (f) karşılığı bulunamayanlar, (g) önceki taramayla karşılaştırma.

## Abonelik defteri (kalıcı hafıza)

Kullanıcı bir aboneliği kestiğinde ya da vazgeçtiğinde `sen/01-araclar.md` en altındaki karar defterine tarih atarak yazar. Sonraki taramalarda aynı aracı tekrar önerme, "bunu geçen sefer denedin, şu yüzden vazgeçtin" de. Üç ayda bir tekrar tara; eski `veri/` dosyaları silinmez, böylece zam geçmişi de görünür.
