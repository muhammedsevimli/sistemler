# Kurallar · Çekirdek / Süs Ayrımı, Kopyalama Koruması, Anti Uydurma

> Bu dosya sistemin karar verme cetvelidir. Puanlama değil, ayıklama yapar.
> Sistem tarafsız kalsın diye bu dosya değiştirilmez. Değiştireceğin tek dosya `sen/01-profil.md`.

## A) Çekirdek / süs testi (her özellik bu üç sorudan geçer)

Her özelliğe sırayla sor:

1. **Çıkarma testi:** bu özelliği tamamen silsen, ürün hâlâ ana vaadini yerine getiriyor mu? Getiriyorsa bu özellik çekirdek DEĞİLDİR.
2. **İlk değer testi:** kullanıcı ürünü ilk açtığında "tamam, işe yarıyor" dediği ana bu özellik olmadan varabiliyor mu? Varamıyorsa bu özellik çekirdektir.
3. **Kullanım sıklığı testi:** bu özelliğe kullanıcıların kaçta kaçı ilk hafta dokunur? Azınlık dokunuyorsa v1'e girmez.

Üç sorunun cevabına göre özellik dört kovadan birine girer. Her satırda tek cümle gerekçe zorunlu.

| Kova | Anlamı | Kural |
|---|---|---|
| **ÇEKİRDEK (v1)** | Olmadan ürün ürün olmaz. İlk değer anına giden yolda duruyor. | En fazla 5 ile 7 madde. Daha fazlaysa listeyi kes, v1 şişmiştir. |
| **DESTEK (v1.5)** | Ürünü rahatlatır ama ilk sürümde yokluğu ölümcül değil. | İlk 20 kullanıcıdan sonra sıraya girer. |
| **SÜS (sonra)** | Güzel görünür, satış argümanı olur, kullanan azdır. | Kurulum maliyeti yüksekse hiç girmeyebilir. |
| **GİRME** | Senin sınırlarına takılıyor, izin/uyum istiyor ya da altyapı yükü ürünün kendisinden büyük. | Gerekçesi mutlaka yazılır. Sessizce atılmaz. |

**Ölçek özellikleri v1'e girmez.** Ekip yönetimi, roller, tek oturum açma, kurumsal dışa aktarma, gelişmiş yetkilendirme, çok dilli arayüz: bunlar ürün tuttuktan sonraki işlerdir. v1'de bunları kurmak, hiç kullanıcısı olmayan bir ürüne kapıcı yazmaktır.

**Entegrasyonlar v1'e girmez.** Hedef üründeki her "şununla entegre" özelliği DESTEK ya da SÜS kovasındadır. Tek istisna: entegrasyon olmadan ürünün ana vaadi çalışmıyorsa (veri oradan geliyorsa) çekirdektir.

## B) Nişe uyarlama (klon ile uyarlamayı ayıran yer)

Kova ayrımı bittikten sonra iki sütunlu tablo zorunlu:

- **Hedefte var, senin nişinde gereksiz:** hedef ürünün kitlesi seninkinden farklı olduğu için anlamsızlaşan özellikler. Her satıra "neden gereksiz" yaz (ör. senin kullanıcında o hacim yok, o cihaz yok, o iş akışı yok).
- **Hedefte yok, senin nişinde şart:** profil dosyandan ve yerel gerçekten çıkan, hedef üründe hiç olmayan ihtiyaçlar. Her satıra "neden şart" yaz.

İkinci sütun BOŞ BIRAKILAMAZ. Boşsa sistem yeterince düşünmemiştir; profil dosyasını tekrar okur ve en az iki madde çıkarır. İkinci sütun senin ürününün var olma sebebidir.

## C) Kopyalama koruması (sert kural)

Sistem bir klon üreticisi değildir. Aşağıdaki ayrım her çıktıda uygulanır.

**Çıkarılabilir (fikir düzeyi, sitede zaten herkese açık):**
- Ürünün hangi işi çözdüğü ve kime hitap ettiği
- Özellik envanteri ve bunların önem sırası
- Kullanıcı akışı ve ilk değer anı
- Hangi nesneleri tuttuğuna dair çıkarım
- Fiyatın neye göre arttığı mantığı

**Kopyalanmaz (çıktıda ayrı listede işaretlenir):**
- Marka adı, logo, marka renkleri, yazı tipi sistemi
- Birebir arayüz tasarımı, ekran düzeni, ikon seti
- Sayfa metinleri, slogan, pazarlama cümleleri
- Telifli içerik, görsel, video, veri seti
- Lisanslı kaynak kod. Ürün açık kaynaksa lisans adı aynen yazılır ve şu not düşülür: kod almak yok, mantık çıkarmak var. Açık kaynak lisansların bir kısmı (ör. AGPL benzeri güçlü kopyala bırak lisansları) kodu alıp kapalı bir ürüne koymana izin vermez. Fikirden ürün kurmak serbesttir, kodu taşımak ayrı bir iştir.

**Yasak cümleler:** "aynısını kur", "klonla", "birebir yap", "ücretsiz sürümünü çıkar". Sistem bunları yazmaz. Çıktının çerçevesi hep şudur: mantığını çıkar, kendi nişine uyarla, kendin kur.

**Ayrışma zorunlu:** plan dosyasında "sen neyi farklı yapıyorsun" başlığı boş kalamaz. En az bir somut ayrışma yazılır: dil, niş daralması, tek bir derde odak, fiyat ölçüsü, hizmet katmanı. "Daha iyi tasarım" ayrışma sayılmaz, ölçülemez.

## D) Anti uydurma (dürüstlük kuralı)

- Sayfada görmediğin özelliği yazma. Her özellik satırında kaynak URL zorunlu.
- **Fiyat:** yalnız sayfada LİTERAL yazan rakamı al. Fiyat sayfası yoksa, erişilemediyse ya da "iletişime geçin" diyorsa çıktıya "fiyat bilgisi alınamadı" yaz. Tahmini rakam yazma, "muhtemelen" deme.
- **Erişilemeyen sayfa:** "erişilemedi" diye işaretle, sebebini yaz (404, giriş istiyor, engellendi). O sayfadan geleceğini varsaydığın bilgiyi doldurmakla uğraşma.
- **Veri şeması bir çıkarımdır.** Ürünün gerçek veritabanı değildir. Şema dosyasının en üstünde bu uyarı yazar. Her tablonun yanında çıkarımın dayanağı belirtilir (hangi sayfada hangi ifade). Dayanağı olmayan tablo yazılmaz.
- **Belirsizler ayrı başlıkta toplanır.** "Burası siteden anlaşılmıyor" listesi her raporda vardır. Boşsa sistem yeterince eleştirel bakmamıştır.
- Em dash (uzun tire) hiçbir çıktıda geçmez. Ayraç: nokta, virgül, iki nokta, orta nokta.
- Motivasyon dili, gelir vaadi, abartı yok. Sistem soğukkanlı bir ürün analisti gibi konuşur.

## E) Riskli parça işaretleme

Şu parçalar v1'den çıkarılır ve gerekçesi yazılır:
- Ödeme altyapısı ve para tutma (izin, mutabakat, iade süreci)
- Kişisel veri toplama ve kimlik eşleme
- Sağlık, finans, hukuk gibi düzenlemeye tabi alanlar
- Sürekli canlı operasyon ya da 7/24 nöbet gerektiren yapılar

Bunlar "hiç yapılmaz" demek değildir. v1'de yapılmaz demektir. Ürün tutarsa sırası gelir.

## F) Dürüst sınır (bunu bilerek yazıyorum)

- Sistem yalnız herkese AÇIK sayfaları okur. Ürünün gerçek veritabanı, gerçek kullanıcı davranışı, gerçek kâr marjı sitede yazmaz. Çıktı bir dış okumadır.
- Bazı siteler otomatik okumaya kapalıdır (bot koruması, giriş duvarı, 403). Sistem dener, erişemezse "erişilemedi" der ve o kısmı boş bırakır.
- Bir ürünün mantığını çıkarmak, o ürünün neden tuttuğunu garanti etmez. Tutmasının sebebi çoğu zaman sitede yazmayan şeydir: dağıtım, zamanlama, topluluk. Plan sana kurulum sırası verir, talep garantisi vermez.
- Plan bir başlangıç noktasıdır. İlk beş kullanıcıyla konuştuğunda kovalar değişir. Değişmesi normaldir.
