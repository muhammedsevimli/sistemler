# Ajan Takımı

Bir soruyu beş rollü bir ajan takımına tartıştıran sistem. Dört rol birer teori savunur, beşinci rol (Matematikçi) hiçbir teori savunmaz ve elindeki rakamla her teoriyi sınar. Çürütülen rol ikinci turda çekilir. Ayakta kalan teori senin cevabın olur.

Tek bir AI'a "sence neden böyle oldu" diye sorduğunda sana makul görünen bir cevap yazar. Bu sistem o cevabı bir hakeme sınattırır.

## Kurulum · GitHub'dan çek

Üç yoldan biriyle çekersin, en kolayı ilki.

**1. Kuracak araca linki ver.** Claude Code'u ya da Codex'i aç ve şu adresi verip "bunu bu klasöre kur" de:

```text
github.com/muhammedsevimli/sistemler/tree/main/ajan-takimi
```

**2. Komut satırını biliyorsan tek satır yeter:**

```bash
npx degit muhammedsevimli/sistemler/ajan-takimi ajan-takimi
```

**3. Hiçbirini istemezsen:** yukarıdaki adrese git, yeşil **Code** düğmesine bas, **Download ZIP** ile indir, klasörü aç.

## Çalıştırma · gerisi sohbette

Claude Code'u ya da Codex'i çektiğin klasörde aç ve konuş. Elindeki sonucu anlatman yeterli:

```text
Elimde şu sonuç var, sebebini öğrenmek istiyorum: geçen hafta paylaştığım kısa video
bir günde 42 bin izlendi, önceki bölümler 5 binde kalıyordu.
```

Araç oradan devralır. Önce soruyu netleştirir, sonra hangi rakamlara ihtiyacı olduğunu madde madde yazıp senden ister. Rakamları sohbete yazarsın, ekran görüntüsü atarsın ya da dışa aktardığın raporu verirsin. Veri dosyasını araç kendisi yazar ve doğru okuduğundan emin olmak için sana gösterir.

Sonra beş ajan koşar, iki tur döner ve rapor sohbete gelir: ayakta kalan teori, elenen teoriler ve her birini kesen rakam, verinin yetmediği yerler. Klasörlere, prompt dosyalarına ya da çıktı dosyalarına elle dokunman gerekmez.

## Ne işe yarıyor

Elinde bir sonuç var ve sebebini bilmiyorsun. Bir video beklenmedik şekilde yayıldı, bir ürün satmadı, bir mail açılmadı. Kafanda dört beş açıklama dolaşıyor, hepsi kulağa mantıklı geliyor, hangisinin doğru olduğunu ayırt edemiyorsun.

Sistem şunu yapıyor:

1. Rakamlar tek bir veri dosyasında toplanıyor. Başka hiçbir yerde yok.
2. Beş ajan açılıyor. Dördü birer teori savunuyor, biri hakem.
3. **Tur 1:** her rol teorisini yazıyor ve veri dosyasından iki üç rakam gösteriyor. Matematikçi her teori için "veriyle uyumlu" ya da "veriyle çelişiyor" yazıyor ve gerekçeyi rakamla veriyor.
4. **Tur 2:** her rol diğerlerinin yazdıklarını okuyor. İkna olduysa **ELENDİ** yazıp neden çekildiğini bir cümleyle söylüyor. İkna olmadıysa **AYAKTA** yazıp karşı kanıt getiriyor.
5. Ayakta kalan teori tek sayfalık rapora düşüyor ve sohbette özetleniyor.

**Tek kural her rolde aynı:** yalnız veri dosyasındaki rakamla konuşursun. Uydurma rakam yok, "muhtemelen" yok, "genelde şöyle olur" yok. Rakamı yoksa o iddiayı kurmazsın.

## Roller

| Rol | Ne yapar |
|---|---|
| Pazarlamacı | Sonucu paketlemeye bağlar: başlık, ilk saniye, kapak, vaat. |
| Editör | Sonucu işçiliğe bağlar: kurgu, ritim, ses, görsel hijyen. |
| Şüpheci | Sonucu dış etkene bağlar: mevcut kitle, zamanlama, tesadüf, taşıyıcı bir hesap. |
| Psikolog | Sonucu izleyicinin niyetine bağlar: ne hissetti, ne yapmak istedi, hangi davranışı seçti. |
| Matematikçi | Teorisi yok. Veriyi okur, her teoriyi rakamla sınar, hangisinin veriyle çeliştiğini yazar. Hakem odur. |

Dört teori rolünü araç senin işine göre uyarlıyor. Matematikçi sabit kalıyor, sistemin tek çalışan parçası odur.

Hazır dört senaryo da var: video neden yayıldı, ürün neden satmadı, mail neden açılmadı, reklam neden tıklanmadı. Soru bunlardan birine benziyorsa araç rakam listesini oradan alıyor. Benzemiyorsa listeyi kendisi kuruyor.

## Neden hakem ayrı bir rol

| Durum | Hakem olmasaydı |
|---|---|
| Dört teori de kulağa mantıklı | Hepsi ikna edici yazar, hiçbiri elenmez, sen dört cevapla kalırsın. |
| Bir rol rakam uydurur | Diğerleri onun rakamını gerçek sanıp üstüne bina eder. |
| Teori veriyle çelişir | Rol kendi teorisinin çeliştiğini fark etmez, kanıt seçer. |
| İki teori aynı veriyle uyumlu | Hangisinin daha güçlü olduğu değil, hangisinin daha iyi yazıldığı kazanır. |

Matematikçinin teorisi yok, o yüzden savunacak bir şeyi de yok. Test koşusunda hakem bir rolü "elendi" değil "bu veriyle ayrıştırılamıyor" diye işaretledi. Veri yetmediğinde yetmediğini söylemesi sistemin işe yaradığının işareti.

## Gerçekten çalıştığının kanıtı

Gerçek bir koşuyla. Tamamı `TEST-SONUCU.md` içinde.

Bir kısa videonun beklenmedik yayılma sebebi soruldu. Beş rol koştu, iki tur döndü.

**Üç rol elendi, biri ayakta kaldı.** Kurgu teorisi elendi çünkü karşılaştırılan iki bölümün ses ve kurgu ölçüleri neredeyse eşitti ve sabit kalan bir değişken 14,7 katlık farkı üretemezdi. Mevcut kitle teorisi elendi çünkü izleyicilerin yalnız %4,1'i takipçiydi. Giriş sahnesi teorisini savunan rol, hakem "bu veriyle ayrıştırılamıyor" dedikten sonra kendi kararıyla çekildi.

**Ayakta kalan:** izleyicinin sahiplenme davranışı. Kaydetme ve yorum, toplam etkileşimin %74,5'i.

**Süre ve maliyet:** 5 ajan, 2 tur, yaklaşık 4 dakika, yaklaşık 570 bin token. Ayrıntı `MALIYET.md` içinde.

Örnek raporun tamamı: `ORNEK-CIKTI.md`.

## İleri düzey

Komut satırıyla kurulum, ajan takımı modu, dosya biçimleri ve klasör yapısı `ILERI.md` içinde. Yukarıdaki akış sana yetiyorsa oraya bakmana gerek yok.

## Desteklenen araçlar

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` ve `.claude/agents/` |
| Cursor | `.cursor/rules/` |
| Codex, Google Antigravity, Windsurf, Kilo ve 20+ araç | `AGENTS.md` |

---

Bu sistemi **Muhammed Sevimli** kurdu. AI ile gerçek satış ve büyüme sistemleri. Kurarken takılırsan ya da adım adım anlatımlı rehber istersen yaz:

- Web: https://muhammedsevimli.com
- X: https://x.com/_msevimli
- Instagram: https://instagram.com/msevimli_
- Threads: https://threads.com/@msevimli_
- YouTube: https://youtube.com/@msevimli
- E-posta: hey@muhammedsevimli.com

## Lisans

[MIT](LICENSE)
