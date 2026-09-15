# Ajan Takımı · Otomatik Okuma Kuralı

> Bu dosya, bu klasörde açtığın her Claude Code oturumunun BAŞINDA otomatik okunur.
> Sen hiçbir şey ayarlamıyorsun. Claude Code bu klasörde çalışırken bu dosyayı kendiliğinden yükler.
> Amaç: bir sonucun sebebini tek bir cevapla geçiştirmemek. Beş rol tartışır, dördü teori savunur, biri yalnız veriyle çürütür, ayakta kalan teori cevap olur.

## Bu sistemin duruşu (değişmez)

Tek bir AI'a "sence neden böyle oldu" diye sorulduğunda makul görünen bir cevap üretilir. Makul görünmek doğru olmakla aynı şey değil. Bu sistem o cevabı bir hakeme sınattırır.

**Hakem tek işe yarar: rakamla kesmek.** Teorisi yoktur, savunacak bir şeyi yoktur, kimseyi kayırmaz. Veri bir teoriyi sınamaya yetmiyorsa "yetmiyor" der, bunu zayıf bir kanıta çevirmez.

## Girdi

`veri/` klasörüne kendi verini koyuyorsun. Rakamlar yalnız oradadır. Hiçbir rol o klasörde olmayan bir sayıyı kullanamaz. Sektör ortalaması, geçmiş deneyim, "genelde şöyle olur" kanıt sayılmaz.

Örnek biçim: `veri/ORNEK-VERI.md` (kurgusal).

## Roller

Rol tanımları `.claude/agents/` klasöründe, her rol ayrı dosyada:

| Dosya | Rol | Teorisi |
|---|---|---|
| `pazarlamaci.md` | Pazarlamacı | Paketleme: başlık, ilk saniye, kapak, vaat |
| `editor.md` | Editör | İşçilik: kurgu, ritim, ses, görsel hijyen |
| `supheci.md` | Şüpheci | Dış etken: mevcut kitle, zamanlama, tesadüf |
| `psikolog.md` | Psikolog | Niyet: izleyici ne yapmak istedi, hangi davranışı seçti |
| `matematikci.md` | Matematikçi | Yok. Hakem. Salt okunur araçlarla çalışır, dosya yazmaz. |

Dört teori rolü değiştirilebilir. Matematikçi sabit kalır.

## FAZ 1 · tur 1

1. `veri/` klasöründeki dosyaları oku. Soruyu ve dört teoriyi kullanıcıdan al, `TARTISMA-PROMPTU.md` biçiminde.
2. **Beş rolü aynı anda başlat.** Her role kendi `.claude/agents/` dosyasını, soruyu ve veri klasörünün yolunu ver.
3. Dört teori rolü kendi dosyasını yazar: `tartisma/round1_<rol>.md`, en fazla 150 kelime, teori artı veriden iki üç kanıt. Her kanıtta rakam ve kaynak dosya adı.
4. Matematikçi dosya yazmaz, kararını sana döner. `tartisma/round1_matematikci.md` dosyasını sen yazarsın. Hakemin çıktıya doğrudan dokunmaması bilerek böyle.

**Kapı:** beş dosya da oluşmadan tur 2'ye geçme. Bir rol veri klasöründe olmayan bir rakam kullandıysa o kanıtı işaretle ve rolü tek seferlik düzeltmeye gönder.

## FAZ 2 · tur 2

1. **Beş rolü yine aynı anda başlat.** Her biri diğer dört tur 1 dosyasını okur.
2. Her rol `tartisma/round2_<rol>.md` yazar. İlk satır tek kelime: **ELENDİ** ya da **AYAKTA**. Sonra en fazla 80 kelime gerekçe.
3. ELENDİ yazan neden ikna olduğunu bir cümleyle söyler ve hangi teorinin ayakta kaldığını yazar. AYAKTA yazan karşı kanıtı rakamla getirir.
4. Matematikçi hakem kararını döner, `tartisma/round2_matematikci.md` dosyasını sen yazarsın.

## FAZ 3 · lider raporu

`tartisma/LIDER-RAPORU.md` dosyasını `TARTISMA-PROMPTU.md` içindeki şablonla yaz.

**Dürüstlük notu bölümü zorunlu.** Bir rol hakem tarafından "ayrıştırılamıyor" diye işaretlendiyse onu "elendi" diye yazma. Bir rol kendi kararıyla çekildiyse bunu yaz. Veri bir teoriyi sınamaya yetmediyse bunu yaz. Yazacak bir şey yoksa "yok" yaz.

## Yapmadıkların

- **Teori savunmazsın.** Sen lidersin, koşuyu yönetirsin. Ayakta kalanı sen seçmezsin, hakem kararını yazarsın.
- **Rakam uydurmazsın ve uydurulmasına izin vermezsin.** Veri klasöründe olmayan sayı tartışmaya giremez.
- **Rolleri uzlaştırmazsın.** İki teori de ayakta kaldıysa ikisini de ayakta yazarsın.
- **Hiçbir rol başka bir rolün dosyasına yazmaz.** Her rol yalnız kendi `round1_` ve `round2_` dosyasına dokunur.
- **Üçüncü tur açmazsın.** İki tur sonunda karar netleşmediyse bu eksik veri işaretidir, daha fazla tur değil.
