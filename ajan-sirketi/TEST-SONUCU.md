# Test sonucu · 10-11 Ekim 2026

Sistem bu bilgisayarda (Windows 11, Claude Code 2.1.284, git 2.55) kurgusal Urla Sofrası şirketiyle (`demo: evet`) gerçekten koşturuldu. Aşağıdaki her sayı koşu günlüğünden, git geçmişinden ya da oturum kaydından alındı.

## Test nasıl kuruldu

- Paket boş bir klasöre kopyalandı, klasör depoya çevrildi ve ilk commit yapıldı (`kur` komutunun ilk adımı elle yapıldı; soru-cevap kısmı atlandı, demo şirket kullanıldı).
- CEO, o klasörde açılan ayrı bir Claude Code oturumuydu (`claude -p`, sohbetsiz mod). Kullanım şekli de bu: CEO senin klasörde açtığın ana oturum. Testi yürüten oturum CEO'nun yerine geçmedi, yalnız işi verdi ve sonucu ölçtü.
- İzinler: dosya düzenleme açık; komut olarak yalnız git, günlük betiği ve birkaç okuma komutu açık. Koşularda hiçbir izin reddi olmadı.
- Masaları bağımsız ölçmek için ayrı bir izleyici her saniye `git worktree list` çıktısını kaydetti.
- Masalar CEO'nun kendi açtığı git worktree'leridir (`git worktree add`). Claude Code'un Agent aracındaki `isolation: "worktree"` seçeneği kullanılmadı: ana oturumun klasörü depo olmadığında "not in a git repository" hatası veriyor, bu yüzden paket masayı CEO'ya açtırıyor.

## 1. tur · bülten + Instagram duyurusu

**Verilen iş:** "Urla Sofrası için bu haftanın e-posta bültenini çıkar." Yazar ana metni kendisi yazsın, Instagram duyurusunu bir yardımcıya versin (1 yardımcı hakkı).

| | |
|---|---|
| Çalışan | 2: yazar, denetçi |
| Yardımcı | 1: yazarın yardımcısı (Instagram gönderisi) |
| Kat sayısı | 3: CEO → yazar → yazarın yardımcısı |
| Açılan masa | 2: `sirket/masalar/yazar` (23:50:08), `sirket/masalar/denetci` (23:51:45) |
| Birleşme | 2, ikisi de çakışmasız (`8964f89 birlesme: yazar masasi`, `e8d1a5d birlesme: denetci masasi`) |
| Kaldırılan masa ve dal | 2/2, koşu sonunda `git worktree list` yalnız ana klasörü gösterdi |
| Günlük | 16 satır |
| CEO commit'i | 6 |
| Denetçi kararı | GEÇTİ, 4 bulgu (üslup ve onay düzeni) |
| Onaya düşen | `sirket/onay/2026-10-10-bulten-hafta-41.md` |
| Dışarı gönderilen | 0 |
| Süre | 3 dk 50 sn (oturum 23:49:34 → 23:53:24; ilk günlük satırı 23:50:07, son 23:53:07) |
| Token (oturum kaydı, bütün katlar) | 2.175.048: 24.567 yazılan, 1.899.619 önbellekten okunan, 250.796 önbelleğe yazılan, 66 yeni girdi |
| Token (CEO'nun gördüğü) | yaklaşık 133 bin |
| Liste fiyatıyla tutar | 2,36 $ (abonelikle kullanımda ayrıca ödenmez, kotadan düşer) |

**İzleyicinin kaydı (`git worktree list`):**
```text
23:50:08  sirket-test                       be76197 [master]
          sirket-test/sirket/masalar/yazar  be76197 [masa/bulten-hafta-41-yazar]
23:51:45  sirket-test                       8964f89 [master]
          sirket-test/sirket/masalar/denetci 8964f89 [masa/bulten-hafta-41-denetci]
23:52:42  sirket-test                       e8d1a5d [master]
```
Denetçinin masası `8964f89`'dan açıldı, yani yazarın birleşmiş metnini gördü. Vardiya sırası çalıştı.

**Git geçmişi:**
```text
* 6bd9c75 onay: bulten-hafta-41
*   e8d1a5d birlesme: denetci masasi
|\
| * df0cf7b denetci: bulten-hafta-41 ciktisi
|/
*   8964f89 birlesme: yazar masasi
|\
| * 0370b6a yazar: bulten-hafta-41 ciktisi
|/
* be76197 is: bulten-hafta-41 tanimi
```

**Çalışmayan şey:** yazar, yardımcısını arka planda açıp yardımcı bitmeden CEO'ya döndü. CEO bunu fark etti ve aynı yazara devam ettirdi (SendMessage), yazar yardımcıyı bekleyip işi bitirdi. Sonuç doğru çıktı ama bu şansa bağlıydı.

**Düzeltme:** yardımcı alabilen dört çalışana ve ilan şablonuna "bekleme kuralı" eklendi (yardımcı arka planda açılmaz, yardımcı bitmeden CEO'ya dönülmez). CEO'ya birleşmeden önce günlükte çalışanın ve yardımcının `bitis` satırını kontrol etme adımı eklendi. Onay dosyası, denetçinin önerisiyle, "göndermeden önce cevaplanacaklar / denetçinin notları / yayınlanacak metinler / iç notlar" diye bölündü.

## 2. tur · bülten + Instagram + kara tahta afişi (paralel vardiya)

**Verilen iş:** bülten ve kara tahta için börülce afişi. Bülten ve afiş birbirini beklemiyor, yazar Instagram gönderisini bir yardımcıya versin.

| | |
|---|---|
| Çalışan | 3: yazar, çizer, denetçi |
| Yardımcı | 1: yazarın yardımcısı |
| Aynı anda açık masa | 2: yazar ve çizer, ikisi de 23:55:33'te açık |
| Paralel çalışma | yazar 23:55:52 → 23:57:13 (81 sn), çizer 23:56:00 → 23:56:56 (56 sn), üst üste bindi |
| Birleşme | 3, hepsi çakışmasız (`30eb337` yazar, `a7c5e9a` çizer, `6b4535c` denetçi) |
| Denetçi masası | 23:57:42'de `a7c5e9a`'dan açıldı, iki birleşmeyi de gördü |
| Yardımcıyı bekleme | yardımcı 23:56:58'de bitti, yazar 23:57:13'te; erken dönüş olmadı |
| Günlük | 22 satır |
| Denetçi kararı | GEÇTİ, 5 bulgu (üslup ve iç not) |
| Onaya düşen | `sirket/onay/2026-10-10-bulten-afis-hafta-41.md` (8 soruluk tek liste en üstte) |
| Dışarı gönderilen | 0 |
| Süre | 5 dk 2 sn (oturum 23:54:53 → 23:59:55) |
| Token (oturum kaydı, bütün katlar) | 1.859.645: 31.207 yazılan, 1.546.938 önbellekten okunan, 281.442 önbelleğe yazılan, 58 yeni girdi |
| Token (CEO'nun gördüğü) | yaklaşık 134 bin |
| Liste fiyatıyla tutar | 2,57 $ |

**İzleyicinin kaydı:**
```text
23:55:33  sirket-test-2                        e8f385c [master]
          sirket-test-2/sirket/masalar/cizer   e8f385c [masa/bulten-afis-hafta-41-cizer]
          sirket-test-2/sirket/masalar/yazar   e8f385c [masa/bulten-afis-hafta-41-yazar]
23:57:33  sirket-test-2                        a7c5e9a [master]
23:57:42  sirket-test-2                        a7c5e9a [master]
          sirket-test-2/sirket/masalar/denetci a7c5e9a [masa/bulten-afis-hafta-41-denetci]
23:59:06  sirket-test-2                        6b4535c [master]
```

**Çıkan küçük hatalar:**
1. CEO, çizerin birleşme satırına "4 dosya" yazdı, doğrusu 2. Sayıyı elle yapmıştı ve yazarın dosyalarını da saymıştı. CEO bunu özetinde kendisi söyledi. **Düzeltme:** CLAUDE.md'ye dosya sayısını `git diff --shortstat HEAD^1 HEAD` ile alma kuralı eklendi. Bu düzeltmeden sonra yeni bir birleşme koşusu yapılmadı.
2. Afişte "Perşembe · Cuma" yazısı çerçevesinin sağ kenarından taşıyor (çizim tarayıcıda açılıp bakıldı). Denetçi çizimi metin olarak okuduğu için bunu göremedi. **Düzeltme:** çizere yazı genişliğini hesaplama ve kenar boşluğu kuralı, denetçiye "görsel kontrol: sahibi açıp baksın" maddesi eklendi. Bu iki kural koşturulmadı.
3. Yardımcı, çıktısını kendi alt klasörü yerine yazarın klasörüne yazdı ve günlüğe numarasız ad (`yazar-yardimci`) kullandı. İşi bozmadı, birleşme temiz geçti. Düzeltme yapılmadı.

## 3. tur · `işe al` ile yeni çalışan

**Verilen iş:** `işe al cevirmen` (soruların cevabı mesajda verildi: Türkçeden İngilizceye, turistler için, yardımcı almaz), sonra 2. turun Instagram gönderisini İngilizceye çevirsin. 2. turdaki depoda, 2. tur düzeltmeleri commit'lendikten sonra koştu.

| | |
|---|---|
| İlan | CEO şablondan `cevirmen` görev tanımını yazdı ve kadro tablosuna satır ekledi |
| `.claude/agents/cevirmen.md` | **Yazılamadı.** Sohbetsiz modda Claude Code `.claude/` klasörüne yazmayı reddetti (oturum kaydında tek izin reddi bu) |
| CEO ne yaptı | Tanımı `sirket/kadro-taslak/cevirmen.md` olarak yazdı, izni başka yoldan aşmadı, sahibine iki yol söyledi (izin ver ya da dosyayı kopyala) |
| Çevirmen nasıl açıldı | `general-purpose` çalışan olarak, prompt'un başında "önce taslağı oku" diyerek. Denetçi kadroda olduğu için doğrudan `denetci` olarak açıldı |
| Masa ve birleşme | 2 masa, 2 birleşme (`296db74` çevirmen, `4090fb6` denetçi), ikisi de kaldırıldı |
| Günlük | 14 yeni satır |
| Denetçi kararı | GEÇTİ, 4 bulgu (kaynakta olmayan 3 hashtag, Türkçe bültene abone çağrısı, bir açıklama, bir üslup önerisi) |
| Onaya düşen | `sirket/onay/2026-10-11-instagram-en-hafta-41.md`, 4 soruluk liste |
| Süre | 4 dk 41 sn (00:00:22 → 00:05:03) |
| Token (oturum kaydı) | 2.074.091 · liste fiyatıyla 1,93 $ |

**Sonuç:** `işe al` akışı ve yedek yol çalıştı. Etkileşimli kullanımda Claude Code bu klasöre yazmak için izin isteyebilir; bu sohbetsiz testte izin soracak kimse olmadığı için yazma reddedildi. **Düzeltme:** CLAUDE.md'ye "izin penceresi gelirse onayla de; izin yoksa `sirket/kadro-taslak/` altına yaz ve genel çalışan yolunu kullan" adımı eklendi. **Test edilmedi:** dosya `.claude/agents/` altına yazıldığında yeni çalışanın aynı oturumda doğrudan adıyla açılıp açılmadığı.

## Gözcü koşusu · rakip radarı (11 Ekim 2026)

**Kurulum:** paket boş bir klasöre kopyalandı, depo yapıldı, demo şirket (Urla Sofrası) kullanıldı. CEO yine ayrı bir `claude -p` oturumuydu. İzinler: dosya düzenleme, git, günlük betiği ve Python (`python`, `python3`, `py`). Kaynaklar gerçek ve herkese açık: 3 yemek kanalının YouTube beslemesi (Yemek.com, Nefis Yemek Tarifleri, Refika'nın Mutfağı), Yemek.com sitesi, Google Haberler'de "Urla restoran" ve "Urla gastronomi", Reddit r/izmir. Hiçbir anahtar kullanılmadı.

| | 1. `rakiplerimi izle` | 2. `radar` (vardiya betiğiyle) | 3. iki kaynak ekle + `radar` | 4. elle link ekle + `radar` |
|---|---|---|---|---|
| Nasıl verildi | Beş sorunun cevabı mesajda | `bin/radar_vardiya.cmd` elle çalıştırıldı | "listeye şunları ekle, sonra radar" | "bu linki 'fırsat' notuyla ekle, sonra radar" |
| Süre | 3 dk 32 sn | 3 dk 28 sn | 3 dk 25 sn | 6 dk 23 sn |
| Kaynak (okunan / toplam) | 7 / 7 | 7 / 7 | 9 / 9 | 10 / 10 |
| Çekilen madde (son 4 gün) | 30 | 30 | 49 | 50 |
| Çalışan | gözcü | gözcü | gözcü | gözcü, denetçi |
| Fırsat taslağı | 0 | 0 | 0 | 1 (Instagram), denetçi GEÇTİ, 4 üslup ve zamanlama bulgusu |
| Rapor uzunluğu | 63 satır, 1.023 kelime | 66 satır, 1.231 kelime | 72 satır, 1.308 kelime | 88 satır, 1.359 kelime |
| Günlük satırı | 8 | 7 | 7 | 13 |
| Masa ve birleşme | 1 / 1, çakışma yok | 1 / 1 | 1 / 1 | 2 / 2 |
| Token (oturum kaydı, CEO ve çalışanlar) | 1.489.570 | 1.216.553 | 1.516.584 | 2.091.720 |
| Token (CEO'nun gördüğü) | yaklaşık 61 bin | yaklaşık 68 bin | ölçülmedi | ölçülmedi |
| Liste fiyatıyla tutar | 1,46 $ | basılmadı (vardiya betiği tutar yazmaz) | 1,58 $ | 2,20 $ |
| Dışarı gönderilen | 0 | 0 | 0 | 0 |

Tarayıcının kendi süresi: 7 kaynak 3,4 saniye. Koşu süresinin geri kalanı gözcünün raporu yazması, masa ve birleşme.

**Gözcünün günlük satırları (1. koşu, olduğu gibi):**
```json
{"t":"2026-10-11T19:31:41+03:00","kim":"ceo","olay":"ise_alim","detay":"gozcu: rakip radari"}
{"t":"2026-10-11T19:32:15+03:00","kim":"ceo","olay":"ise_alim","detay":"gozcu: radar-2026-10-11"}
{"t":"2026-10-11T19:32:25+03:00","kim":"ceo","olay":"masa","detay":"gozcu: sirket/masalar/gozcu (masa/radar-2026-10-11-gozcu)"}
{"t":"2026-10-11T19:32:41+03:00","kim":"gozcu","olay":"baslangic","detay":"radar-2026-10-11"}
{"t":"2026-10-11T19:32:41+03:00","kim":"gozcu","olay":"masa","detay":".../gozcu-test/sirket/masalar/gozcu"}
{"t":"2026-10-11T19:34:14+03:00","kim":"gozcu","olay":"bitis","detay":"7/7 kaynak, 30 madde, 0 taslak: sirket/onay/radar-2026-10-11.md"}
{"t":"2026-10-11T19:34:44+03:00","kim":"ceo","olay":"birlesme","detay":"gozcu: 2 dosya ana dala geldi"}
{"t":"2026-10-11T19:34:44+03:00","kim":"ceo","olay":"onay_istegi","detay":"sirket/onay/radar-2026-10-11.md"}
```

**Ne çalıştı:**
- YouTube kanal adresinden `channelId` bulma: 3 kanalın üçü de bulundu, besleme adresleri listeye yazıldı.
- Tutma bilgisi: YouTube maddelerinde izlenme, beğeni, saatlik izlenme ve kanal medyanına oran rapora olduğu gibi geçti. Haber, site ve Reddit maddelerine gözcü her seferinde "izlenme bilgisi yok" yazdı, sayı uydurmadı.
- İki tarama arası artış: 2. koşuda önceki taramaya göre her videonun artışı hesaplandı (örnek: bir kısa video 5 dakikada 4.500'den 4.816'ya). Aralık 30 dakikadan kısa olduğu için saatlik artış hesaplanmadı; gözcü bunu raporda söyledi.
- Fırsat kuralı: 3. koşuda CZN Burak'ın bir videosu tazeydi ve kanal medyanının 2,06 katıydı, ama yemekle ilgisi yoktu. Gözcü bunu "ivmeli ama bize uymuyor" diye fırsat saymadı. 4. koşuda sahibinin "fırsat" notuyla eklediği haber linki (İzmir'de bağ bozumu festivali, 4 ayrı yayın yerinde) okundu, gözcü cumartesi kahvaltısı için bir Instagram taslağı yazdı. Kartta olmayan menü, telefon ve Urla bağı `[SAHİBE SOR]` oldu. Denetçi yalnız taslağı denetledi, kararı onay dosyasının başına yazıldı.
- Vardiya: `bin/radar_vardiya.cmd` elle çalıştırıldı ve kısıtlı izinlerle (dosya düzenleme, git, günlük, Python) baştan sona koştu. Görev Zamanlayıcı satırı (`schtasks /create ... /d MON,THU /st 08:30`) oluşturuldu, `schtasks /query` ile "Days: MON, THU, Next Run Time: 12.10.2026 08:30" görüldü, sonra silindi.
- Elle link: X gönderisinin metni ve tarihi, TikTok videosunun açıklaması anahtarsız okundu. Instagram linki okunmadı, sahibin notu kullanıldı. Var olmayan bir alan adı `ATLANDI` oldu ve tarama devam etti.

**Çalışmayan ya da düzeltilen şeyler:**
1. 1. koşuda CEO gözcüyü günlüğe iki kez işe aldı (`rakiplerimi izle` ve ilk `radar`). **Düzeltme:** CLAUDE.md'de ilk taramada ikinci `ise_alim` satırı yazılmıyor. 2-4. koşular kendi `radar` işleri olduğu için birer satır yazdı, bu doğru.
2. Aynı gün ikinci tarama önceki taramayı göremiyordu (bugünün dosyası hariç tutuluyordu). **Düzeltme:** tarayıcı önceki dosyayı üzerine yazmadan önce okuyor. 2. koşu bu düzeltmeyle koştu.
3. Arka arkaya denemelerde Reddit bir kez `HTTP 429` (çok istek) verdi, YouTube bir kez bağlantıyı kesti. **Düzeltme:** geçici hatalarda 5 saniye bekleyip bir kez daha deneme. Düzeltmeden sonraki taramada 7/7. Dakikalar içinde onlarca deneme yapılınca Reddit yeniden deneme sonrası da `429` verdi; o zaman yalnız Reddit atlanıyor, rapor diğer kaynaklarla çıkıyor. Haftada iki vardiyada bu sıklık olmaz.
4. 2. koşuda gözcü ham dosyayı incelemek için kendi Python komutunu yazdı; Windows konsolu emojide hata verdi, gözcü toparladı. **Düzeltme:** gözcü ham dosyayı Read aracıyla okuyor. Bu kuraldan sonra koşu yapılmadı.
5. Google Haberler bağlantısı elle eklenince yalnız "Google Haberler" başlığı geliyordu. **Düzeltme:** bu bağlantılar okunmadı sayılıyor, sahibine haberin kendi adresini yapıştırması söyleniyor.
6. "Urla restoran" ve "Urla gastronomi" aramaları konu dışı haber getirdi (sigara satışı, Londra). Gözcü bunu iki raporda da söyledi ve daha dar kelime önerdi. Arama kalitesi sahibinin seçtiği kelimeye bağlı; betik bunu düzeltemez.
7. YouTube beslemesindeki sayılar gecikmeli: bir videonun izlenmesi 5 dakikada 57 düştü göründü. Gözcü bunu sayaç gecikmesi diye yazdı; görev tanımına "eksi ya da sıfır artıştan ivme yorumu çıkarma" kuralı eklendi.

**Gözcü koşusunda test edilmeyenler:**
- Görev Zamanlayıcı'nın görevi kendi saatinde başlatması (görev kuruldu ve silindi; betik elle çalıştırıldı).
- Mac: `bin/radar_vardiya.sh` yalnız sözdizimi kontrolünden geçti, cron ve launchd denenmedi.
- Soruların sohbette tek tek sorulması (cevaplar mesajda verildi) ve Python'u olmayan bilgisayar yolu.
- Fırsat taslağında DÜZELT turu (denetçi GEÇTİ dedi).
- İngilizce paket (`agent-company`) Claude ile koşturulmadı; İngilizce tarayıcı (`bin/lookout_scan.py`) ayrıca iki kez tam tarama yaptı, 7/7 kaynak ve 29 madde; sonraki bir denemede Reddit `429` verdi ve 6/7 okundu.
- Haftada iki vardiya aralığıyla (3-4 gün) saatlik artış; testteki taramalar arası 4-6 dakikaydı.

## Test edilmeyenler

- `kur` komutunun soru-cevap kısmı (demo şirketle denendi; klasörü depoya çevirme adımı elle yapıldı).
- `vardiya`, `onayla`, `reddet` komutları.
- DÜZELT turu: iki koşuda da denetçi GEÇTİ dedi, düzeltme turu hiç çalışmadı.
- Token tavanında durma ve sınır aşımında `durdu` olayı.
- Besteci ve araştırmacı rolleri.
- Workflow ile toplu vardiya ("ultracode").
- `AGENTS.md` yolu (Codex ve diğer araçlar) ve Mac.

## Bilmen gereken iki gerçek

- **Token sayısı:** CEO çalışanların dönüşünde gördüğü sayıyı topluyor (iki turda da yaklaşık 133-134 bin). Oturum kaydındaki gerçek toplam 1,86-2,18 milyon. Farkın büyük kısmı önbellekten tekrar okunan metin; yardımcının tüketimi de CEO'ya görünmüyor. Token tavanı bu yüzden CEO'nun gördüğü sayıya uygulanıyor ve CLAUDE.md bunu "görünen" diye söyletiyor.
- **Her iş birden çok oturum demek:** küçük bir bülten işi iki üç çalışanla 4-5 dakika ve yaklaşık 2 milyon token tuttu. Tek bir gönderi için şirketi çalıştırmaya gerek yok.
