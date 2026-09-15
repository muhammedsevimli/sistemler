# Ajan Takımı

Bir soruyu beş rollü bir ajan takımına tartıştıran sistem. Dört rol birer teori savunur, beşinci rol (Matematikçi) hiçbir teori savunmaz ve elindeki veri dosyasındaki rakamla her teoriyi sınar. Çürütülen rol ikinci turda çekilir. Ayakta kalan teori senin cevabın olur.

Tek bir AI'a "sence neden böyle oldu" diye sorduğunda sana makul görünen bir cevap yazar. Bu sistem o cevabı bir hakeme sınattırır.

## Ne işe yarıyor

Elinde bir sonuç var ve sebebini bilmiyorsun. Bir video beklenmedik şekilde yayıldı, bir ürün satmadı, bir mail açılmadı. Kafanda dört beş açıklama dolaşıyor, hepsi kulağa mantıklı geliyor, hangisinin doğru olduğunu ayırt edemiyorsun.

Sistem şunu yapıyor:

1. Elindeki veriyi `veri/` klasörüne koyuyorsun. Rakamlar burada, başka hiçbir yerde yok.
2. Beş ajan açılıyor. Dördü birer teori savunuyor, biri hakem.
3. **Tur 1:** her rol teorisini yazıyor ve veri dosyasından iki üç rakam gösteriyor. Matematikçi her teori için "veriyle uyumlu" ya da "veriyle çelişiyor" yazıyor ve gerekçeyi rakamla veriyor.
4. **Tur 2:** her rol diğerlerinin yazdıklarını okuyor. İkna olduysa **ELENDİ** yazıp neden çekildiğini bir cümleyle söylüyor. İkna olmadıysa **AYAKTA** yazıp karşı kanıt getiriyor.
5. Lider ayakta kalanı tek sayfalık rapora yazıyor.

**Tek kural her rolde aynı:** yalnız veri dosyasındaki rakamla konuşursun. Uydurma rakam yok, "muhtemelen", "genelde şöyle olur" yok. Rakamı yoksa o iddiayı kurmazsın.

## Kurulum

```bash
npx degit muhammedsevimli/sistemler/ajan-takimi ajan-takimi
```

Ya da yeşil **Code → Download ZIP**. Komut satırıyla uğraşmak istemiyorsan Claude Code'u aç ve şu adresi ver, "bunu benim işim için kur" de:

```text
github.com/muhammedsevimli/sistemler/tree/main/ajan-takimi
```

## Çalıştırma

1. Verini `veri/` klasörüne koy. Örnek biçim: `veri/ORNEK-VERI.md`.
2. `TARTISMA-PROMPTU.md` dosyasını aç, en üstteki soruyu ve dört teoriyi kendi işine göre doldur.
3. Claude Code'u bu klasörde aç ve o promptu yapıştır.
4. Çıktılar `tartisma/` klasörüne düşüyor: `round1_<rol>.md`, `round2_<rol>.md`, `LIDER-RAPORU.md`.

İki çalışma yolu var, ikisi de `TARTISMA-PROMPTU.md` içinde yazılı. Ajan takımı modu deneysel; kapalıysa aynı prompt paralel alt-ajan sürümüyle koşuyor ve aynı sonucu veriyor.

## Gerçekten çalışıyor mu

Evet, gerçek bir koşuyla. Tamamı `TEST-SONUCU.md` içinde.

Bir kısa videonun beklenmedik yayılma sebebi soruldu. Beş rol koştu, iki tur döndü.

**Üç rol elendi, biri ayakta kaldı.** Kurgu teorisi elendi çünkü karşılaştırılan iki bölümün ses ve kurgu ölçüleri neredeyse eşitti ve sabit kalan bir değişken 14,7 katlık farkı üretemezdi. Mevcut kitle teorisi elendi çünkü izleyicilerin yalnız %4,1'i takipçiydi. Giriş sahnesi teorisini savunan rol, hakem "bu veriyle ayrıştırılamıyor" dedikten sonra kendi kararıyla çekildi.

**Ayakta kalan:** izleyicinin sahiplenme davranışı. Kaydetme ve yorum, toplam etkileşimin %74,5'i.

**Süre ve maliyet:** 5 ajan, 2 tur, yaklaşık 4 dakika, yaklaşık 570 bin token. Ayrıntı `MALIYET.md` içinde.

Örnek raporun tamamı: `ORNEK-CIKTI.md`.

## Klasör yapısı

```text
ajan-takimi/
  CLAUDE.md                Claude Code otomatik okur
  AGENTS.md                Codex, Windsurf, Kilo ve 20+ araç okur
  .cursor/rules/           Cursor okur
  .claude/agents/          beş rol dosyası
  TARTISMA-PROMPTU.md      lider promptu, iki çalışma yolu
  veri/ORNEK-VERI.md       örnek veri biçimi
  uyarlamalar/             hazır üç senaryo, teorileriyle
  tartisma/                çıktılar buraya düşer
  MALIYET.md               kaç ajan, kaç tur, hangi model
  ORNEK-CIKTI.md           örnek veriyle koşmuş bir lider raporu
  TEST-SONUCU.md           gerçek koşu kaydı
```

## Roller

| Rol | Ne yapar |
|---|---|
| Pazarlamacı | Sonucu paketlemeye bağlar: başlık, ilk saniye, kapak, vaat. |
| Editör | Sonucu işçiliğe bağlar: kurgu, ritim, ses, görsel hijyen. |
| Şüpheci | Sonucu dış etkene bağlar: mevcut kitle, zamanlama, tesadüf, taşıyıcı bir hesap. |
| Psikolog | Sonucu izleyicinin niyetine bağlar: ne hissetti, ne yapmak istedi, hangi davranışı seçti. |
| Matematikçi | Teorisi yok. Veriyi okur, her teoriyi rakamla sınar, hangisinin veriyle çeliştiğini yazar. Hakem odur. |

Dört teori rolünü kendi işine göre değiştirebilirsin. Matematikçi sabit kalır, sistemin tek çalışan parçası odur. `uyarlamalar/` klasöründe üç hazır senaryo var: ürün neden satmadı, mail neden açılmadı, reklam neden tıklanmadı.

## Neden hakem ayrı bir rol

| Durum | Hakem olmasaydı |
|---|---|
| Dört teori de kulağa mantıklı | Hepsi ikna edici yazar, hiçbiri elenmez, sen dört cevapla kalırsın. |
| Bir rol rakam uydurur | Diğerleri onun rakamını gerçek sanıp üstüne bina eder. |
| Teori veriyle çelişir | Rol kendi teorisinin çeliştiğini fark etmez, kanıt seçer. |
| İki teori aynı veriyle uyumlu | Hangisinin daha güçlü olduğu değil, hangisinin daha iyi yazıldığı kazanır. |

Matematikçinin teorisi yok, o yüzden savunacak bir şeyi de yok. Test koşusunda hakem bir rolü "elendi" değil "bu veriyle ayrıştırılamıyor" diye işaretledi. Veri yetmediğinde yetmediğini söylemesi sistemin işe yaradığının işareti.

## Desteklenen araçlar

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` + `.claude/agents/` |
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
