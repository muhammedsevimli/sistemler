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
