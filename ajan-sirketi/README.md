# Ajan Şirketi

Claude Code'u bir şirket gibi çalıştıran şablon. Claude bu şirketin CEO'su. Ona bir iş verirsin, işin ihtiyaçlarını kendisi çıkarır, her ihtiyaç için bir çalışan işe alır, herkese kendi masasını verir, vardiya düzenini kurar. Bitmiş iş senin onay klasörüne düşer. Sen onaylamadan hiçbir şey dışarı gitmez.

Yönetim kurulu sensin.

## Ne işe yarıyor

Tek bir sohbete "bu haftanın bültenini çıkar, Instagram duyurusunu da yaz, sonra kontrol et" dediğinde her şey aynı yerde, sırayla, birbirine karışarak yapılır. Bu şablon işi bir şirketteki gibi böler:

1. **İhtiyaç listesi.** CEO işi okur, bitmiş halini tek cümleyle yazar, ihtiyaçları madde madde çıkarır.
2. **İşe alım.** Her ihtiyaç için kadrodan birini seçer: metin için yazar, görsel için çizer, kontrol için denetçi. Kadroda uyan rol yoksa iş ilanı şablonundan yeni bir çalışan yazar.
3. **Herkese kendi masası.** Her çalışan dosyaların kendi kopyasında çalışır. Kimse kimsenin dosyasına basmaz. İş bitince kopyalar ana klasörde birleşir.
4. **Vardiya düzeni.** Birbirini beklemeyen çalışanlar aynı anda çalışır. Birinin işine muhtaç olan, o bitince başlar. Denetçi en sona girer.
5. **Yardımcı alan çalışan.** Yazarın işi bölünüyorsa kendine bir yardımcı alır. Sana sormaz, sana yalnız bitmiş iş gelir. Ama her yardımcı günlüğe yazılır.
6. **Günlük.** Kim ne zaman işe alındı, hangi masada çalıştı, ne zaman bitirdi: hepsi tek bir günlük dosyasında satır satır durur.
7. **Onay kapısı.** Bitmiş iş `sirket/onay/` klasörüne düşer. Mail, gönderi, yayın, ödeme: hiçbirini Claude yapmaz.

## Kadro

| Çalışan | Ne yapar | Yardımcı alır mı |
|---|---|---|
| Yazar | Bülten, gönderi, sayfa metni, senaryo, mail taslağı. | Evet |
| Çizer | Kapak, afiş, sahne planı, diyagram. Her görsel için tarif ve tarayıcıda açılan bir çizim. | Evet |
| Besteci | Video ya da reklam için müzik ve ses planı, müzik üretici araçlara verilecek tarif. | Evet |
| Araştırmacı | Rakip, fiyat, trend araştırması. Her bilgi kaynak bağlantısıyla. | Evet |
| Denetçi | Dışarı gidecek her çıktıyı şirket kartına ve kırmızı çizgilere karşı kontrol eder. GEÇTİ ya da DÜZELT der. | Hayır |

Kadroya istediğin rolü eklersin: `işe al çevirmen` yazman yeterli.

## Kurulum · sohbetten

Gerekenler: [Claude Code](https://claude.com/claude-code). Dosya açman, dosya doldurman gerekmiyor.

1. Claude Code'u aç, şu adresi ver ve "bunu benim için kur" de:

```text
github.com/muhammedsevimli/sistemler/tree/main/ajan-sirketi
```

2. Klasörde şunu yaz:

```text
kur
```

Claude şirketini tanımak için en çok beş soru sorar: adı, ne yaptığı, kime sattığı, hangi kanallarda içerik çıkardığı, sesini anlatan iki üç kural ve kırmızı çizgilerin. Cevaplarınla şirket kartını kendisi yazar. Herkesin kendi masasında çalışabilmesi için klasörü de hazırlar; bunun için bilgisayarında küçük bir araç eksikse sana söyler.

Önce denemek istersen `kur` yazmadan bir iş ver. Klasör kurgusal bir örnek şirketle gelir: **Urla Sofrası**, Urla'da küçük bir ev yemekleri lokantası.

## Üç komut

```text
kur
```
İlk kurulum. Bir kere.

```text
işe al <rol>
```
Kadroya yeni çalışan ekler. Örnek: `işe al çevirmen`. Claude üç soru sorar, çalışanın görev tanımını yazar, sana gösterir. Claude Code dosyayı kaydetmek için izin isterse onaylarsın.

```text
vardiya
```
Son işin panosunu gösterir: kim işe alındı, kim hangi masada, kim bitirdi, onayda ne bekliyor.

Bunların dışında işi düz cümleyle verirsin:

```text
Urla Sofrası için bu haftanın e-posta bültenini çıkar, Instagram duyurusunu da yaz.
```

Onay klasöründeki işi okuyunca `onayla <dosya>` ya da `reddet <dosya> <notun>` yazarsın. Reddedersen CEO notunu ilgili çalışana iletir ve düzelttirir.

## Sınırlar

- Bir işte en çok 5 çalışan ve toplam en çok 2 yardımcı. Yardımcı başka yardımcı alamaz.
- Bir işin token tavanı 1,5 milyon. Geçecekse CEO durur ve sana sorar. İkisini de şirket kartından değiştirirsin. CEO yalnız görebildiği token sayılarını toplar ve bu toplam gerçek tüketimin altında kalır (ayrıntı `TEST-SONUCU.md` içinde).
- Dışarı gönderim yok: mail, gönderi, mesaj, yayın, ödeme. Sen `onayla` desen bile gönderimi sen yaparsın.
- Şirket kartında olmayan rakam, fiyat, kampanya çıktıya girmez. Eksik bilgi `[SAHİBE SOR]` diye işaretlenir.

## Gerçekten çalışıyor mu

Evet, gerçek koşularla. Tamamı `TEST-SONUCU.md` içinde.

- **1. tur, haftalık bülten:** CEO yazarı ve denetçiyi işe aldı, yazar Instagram gönderisi için kendine bir yardımcı aldı. İki masa açıldı, ikisi de çakışmasız birleşti, iş onay klasörüne düştü. Günlük 16 satır, süre 3 dakika 50 saniye.
- **2. tur, bülten ve kara tahta afişi:** yazar ve çizer aynı anda kendi masalarında çalıştı, denetçi ikisi birleştikten sonra başladı. 3 çalışan, 1 yardımcı, 3 birleşme, günlük 22 satır, süre 5 dakika.
- **Dışarı giden:** iki turda da sıfır.

Testte çıkan aksaklıklar ve test edilmeyen komutlar da aynı dosyada yazıyor. Çıktının kendisi `ORNEK-CIKTI.md` içinde.

## Bilmen gerekenler

- Her çalışan ayrı bir Claude oturumu gibi çalışır, yani tek sohbete göre daha çok token harcar. Küçük işte (tek bir gönderi) şirketi çalıştırmana gerek yok.
- Claude Code'da çok aşamalı toplu koşu özelliğin varsa CEO aynı vardiya düzenini tek seferde koşturabilir. İsteğe bağlıdır.
- Adım adım kullanım `CALISTIR.md` içinde.

## Desteklenen araçlar

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` ve `.claude/agents/` |
| Codex, Google Antigravity, Windsurf, Kilo ve 20+ araç | `AGENTS.md` (alt ajan açamayan araçta CEO rolleri sırayla kendisi oynar) |

---

Bu sistemi **Muhammed Sevimli** kurdu. AI ile gerçek satış ve büyüme sistemleri. Kurarken takılırsan ya da adım adım anlatımlı rehber istersen yaz:

- Web: https://muhammedsevimli.com
- X: https://x.com/_msevimli
- Instagram: https://instagram.com/msevimli_
- Threads: https://threads.com/@msevimli_
- YouTube: https://youtube.com/@msevimli
- E-posta: hey@muhammedsevimli.com

🧩 Claude Code ile inşa edildi.

## Lisans

[MIT](LICENSE)
