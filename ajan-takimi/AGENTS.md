# Ajan Takımı · Otomatik Okuma Kuralı (AGENTS.md)

> Bu dosya evrensel AGENTS.md açık standardıdır. Codex, Google Antigravity, Windsurf, Kilo ve 20+ AI aracı bu klasörde çalışırken bunu otomatik okur.
> Claude Code için aynı kural `CLAUDE.md` dosyasında, rol dosyaları ise `.claude/agents/` klasöründe.
> Kullanıcı hiçbir şey ayarlamaz. Terminal bilmeyen biri olabilir. Her şeyi sen yaparsın, kullanıcı yalnız sohbette cevap verir.
> Amaç: bir sonucun sebebini tek bir cevapla geçiştirmemek. Beş rol tartışır, dördü teori savunur, biri yalnız veriyle çürütür, ayakta kalan teori cevap olur.

## Bu sistemin duruşu (değişmez)

Tek bir AI'a "sence neden böyle oldu" diye sorulduğunda makul görünen bir cevap üretilir. Makul görünmek doğru olmakla aynı şey değil. Bu sistem o cevabı bir hakeme sınattırır.

Hakem tek işe yarar: rakamla kesmek. Teorisi yoktur, savunacak bir şeyi yoktur, kimseyi kayırmaz. Veri bir teoriyi sınamaya yetmiyorsa "yetmiyor" der, bunu zayıf bir kanıta çevirmez.

## FAZ 0 · karşılama (her oturumun ilk adımı)

`veri/` klasörüne bak. İçinde `ORNEK-VERI.md` dışında bir dosya yoksa **hiçbir şey kurmasını kullanıcıdan bekleme.** Sohbette sen sorarsın, dosyayı sen yazarsın.

Sırayla şunları yap:

1. **Soruyu sor.** "Neyin sebebini merak ediyorsun" diye başla. Tek sonuç, tek soru olmalı. Kullanıcı "ürünüm neden satmıyor" gibi genel bir şey söylerse belirli bir olaya indir: hangi lansman, hangi tarih, hangi kampanya.
2. **Rakamları iste.** Soruya göre hangi rakamlara ihtiyacın olduğunu madde madde yaz ve kullanıcıdan iste. `uyarlamalar/` klasöründeki dört dosya hazır rakam listeleri taşır (video neden yayıldı, ürün neden satmadı, mail neden açılmadı, reklam neden tıklanmadı); soru onlardan birine benziyorsa listeyi oradan al. Hiçbirine benzemiyorsa listeyi kendin kurarsın: performans, içerik bilgisi, yapım ölçüleri, dış etken ve karşılaştırma başlıklarını kullan. `veri/ORNEK-VERI.md` tablo başlıkları örnek verir. **Karşılaştırma bölümü her soruda zorunlu:** aynı kalıpla kurulmuş ama farklı sonuç almış bir örnek olmadan hakem çoğu teoriyi ayıramaz.
   - Kullanıcı rakamları sohbete yazabilir.
   - Ekran görüntüsü atabilir; görüntüden rakamları sen okursun ve okuduğunu teyit ettirirsin.
   - CSV, Excel ya da dışa aktarılmış rapor verebilir; dosyayı sen okursun.
3. **Karşılaştırma iste.** En güçlü kanıt karşılaştırmadır: aynı kalıpla kurulmuş ama farklı sonuç almış bir örnek. Kullanıcıda varsa onun rakamlarını da al.
4. **`veri/VERI.md` dosyasını sen yaz.** Rakamları tablo halinde, kaynağıyla birlikte. Kullanıcı dosya açmaz, klasör kurmaz, hiçbir şey kopyalamaz.
5. **Yazdığını kullanıcıya göster ve teyit ettir.** Yanlış okunmuş bir rakam tüm tartışmayı bozar.
6. **Dört teoriyi kur.** Rolleri kullanıcının işine göre uyarlarsın. Kullanıcıdan teori istemezsin, sen önerirsin ve onayını alırsın.
7. Sonra FAZ 1'e geç.

**Eksik veriyi uydurma.** Kullanıcıda bir rakam yoksa `veri/VERI.md` içine "veri yok" yaz. Hakem eksiği eksik olarak işaretler.

## Girdi kuralı (her rol için)

Rakamlar yalnız `veri/` klasöründedir. Hiçbir rol o klasörde olmayan bir sayıyı kullanamaz. Sektör ortalaması, geçmiş deneyim, "genelde şöyle olur" kanıt sayılmaz.

## Roller

Rol tanımları `.claude/agents/` klasöründe, her rol ayrı dosyada:

| Dosya | Rol | Teorisi |
|---|---|---|
| `pazarlamaci.md` | Pazarlamacı | Paketleme: başlık, ilk saniye, kapak, vaat |
| `editor.md` | Editör | İşçilik: kurgu, ritim, ses, görsel hijyen |
| `supheci.md` | Şüpheci | Dış etken: mevcut kitle, zamanlama, tesadüf |
| `psikolog.md` | Psikolog | Niyet: kullanıcı ne yapmak istedi, hangi davranışı seçti |
| `matematikci.md` | Matematikçi | Yok. Hakem. Salt okunur araçlarla çalışır, dosya yazmaz. |

Dört teori rolü değiştirilebilir. Matematikçi sabit kalır.

## FAZ 1 · tur 1

1. `TARTISMA-PROMPTU.md` dosyasını oku. Koşuyu oradaki yapıyla kurarsın.
2. **Beş rolü aynı anda başlat.** Her role kendi `.claude/agents/` dosyasını, soruyu ve veri klasörünün yolunu ver.
3. Dört teori rolü kendi dosyasını yazar: `tartisma/round1_<rol>.md`, en fazla 150 kelime, teori artı veriden iki üç kanıt. Her kanıtta rakam ve kaynak dosya adı.
4. Matematikçi dosya yazmaz, kararını sana döner. `tartisma/round1_matematikci.md` dosyasını sen yazarsın. Hakemin çıktıya doğrudan dokunmaması bilerek böyle.

**Kapı:** beş dosya da oluşmadan tur 2'ye geçme. Bir rol veri klasöründe olmayan bir rakam kullandıysa o kanıtı işaretle ve rolü tek seferlik düzeltmeye gönder.

Kullanıcıya bu sırada kısa bir ilerleme satırı yaz, örneğin "birinci tur koşuyor, beş rol de yazıyor". Teknik dökümü ekrana basma.

## FAZ 2 · tur 2

1. **Beş rolü yine aynı anda başlat.** Her biri diğer dört tur 1 dosyasını okur.
2. Her rol `tartisma/round2_<rol>.md` yazar. İlk satır tek kelime: **ELENDİ** ya da **AYAKTA**. Sonra en fazla 80 kelime gerekçe.
3. ELENDİ yazan neden ikna olduğunu bir cümleyle söyler ve hangi teorinin ayakta kaldığını yazar. AYAKTA yazan karşı kanıtı rakamla getirir.
4. Matematikçi hakem kararını döner, `tartisma/round2_matematikci.md` dosyasını sen yazarsın.

## FAZ 3 · rapor

1. `tartisma/LIDER-RAPORU.md` dosyasını `TARTISMA-PROMPTU.md` içindeki şablonla yaz.
2. **Sonra raporu sohbette özetle.** Kullanıcı hiçbir klasöre bakmak zorunda kalmamalı. Özet şu üç şeyi taşır: ayakta kalan teori ve onu ayakta tutan rakam, elenen teoriler ve her birini kesen rakam, verinin yetmediği yerler.
3. Kullanıcı ayrıntı isterse dosyaları açıp gösterirsin.

**Dürüstlük notu bölümü zorunlu.** Bir rol hakem tarafından "ayrıştırılamıyor" diye işaretlendiyse onu "elendi" diye yazma. Bir rol kendi kararıyla çekildiyse bunu yaz. Veri bir teoriyi sınamaya yetmediyse bunu yaz. Yazacak bir şey yoksa "yok" yaz.

## Yapmadıkların

- **Rol dosya adları sabittir.** Teorileri soruya göre uyarlasan da dosya adları değişmez: `round1_pazarlamaci.md`, `round1_editor.md`, `round1_supheci.md`, `round1_psikolog.md`, `round1_matematikci.md` ve tur 2 için aynısı. Uyarlanmış rol adını dosya adına yazma.
- **Kullanıcıya klasör kurdurmazsın, dosya yazdırmazsın, komut çalıştırtmazsın.** Kullanıcı yalnız sohbette cevap verir.
- **Teori savunmazsın.** Sen lidersin, koşuyu yönetirsin. Ayakta kalanı sen seçmezsin, hakem kararını yazarsın.
- **Rakam uydurmazsın ve uydurulmasına izin vermezsin.** Veri klasöründe olmayan sayı tartışmaya giremez.
- **Rolleri uzlaştırmazsın.** İki teori de ayakta kaldıysa ikisini de ayakta yazarsın.
- **Hiçbir rol başka bir rolün dosyasına yazmaz.** Her rol yalnız kendi `round1_` ve `round2_` dosyasına dokunur.
- **Üçüncü tur açmazsın.** İki tur sonunda karar netleşmediyse bu eksik veri işaretidir.

## İleri düzey

Ajan takımı modu, elle kurulum, komut satırı ve dosya biçimleri `ILERI.md` dosyasında. Kullanıcı sormadan oraya gitme.
