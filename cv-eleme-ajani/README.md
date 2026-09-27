# CV Eleme Ajanı

İlanına gelen CV'leri senin yerine okuyan, her birini ilanla karşılaştırıp 100 üzerinden puanlayan, kırmızı çizgine takılanı gerekçesiyle eleyen, kısa listeyi tabloya yazan ve mülakat daveti ile nazik ret maillerini taslak olarak hazırlayan sistem. Mailleri gönderip göndermeyeceğini tek satırla sen seçiyorsun.

**Sistem kendi bilgisayarında çalışır, CV'ler hiçbir yere yüklenmez.** Yaş, cinsiyet, medeni durum, fotoğraf gibi bilgileri yok sayar, puanlamaz. Son karar senin.

## Ne işe yarıyor

Bir ilana 50 CV geldiğinde günün büyük kısmı aynı işi tekrar etmekle geçiyor: CV'yi aç, ilandaki şartlarla tek tek karşılaştır, deneyim yılını tarihlerden hesapla, uymayanı ayır, kısa listeyi bir yere not et, her adaya ayrı mail yaz. Bu sistem o döngüyü sabah sen kalkmadan bitiriyor ve masana bir rapor bırakıyor.

1. `adaylar/gelen/` klasöründeki (ya da Gmail'deki bir etiketin altındaki) yeni CV'leri topluyor. PDF, Word ve düz metin okuyor. Okuduğu CV'ye bir daha bakmıyor.
2. Her CV'yi `sen/ILAN.md` ile karşılaştırıp 100 üzerinden puanlıyor: rol örtüşmesi, zorunlu şartlar, deneyim yılı, konum ve tercihler.
3. Kırmızı çizgine takılanı puanına bakmadan, eşiğin altında kalanı gerekçesiyle eliyor.
4. Eşiği geçenlerden kısa listeyi çıkarıyor, kalanları yedeğe koyuyor.
5. Kısa listeye mülakat daveti, elenenlere nazik ret taslağı yazıyor. Ret mailinde gerekçe yazmıyor; gerekçe yalnız senin raporunda.
6. `adaylar.csv` tablosunu ve günün raporunu yazıyor. Raporda her adayın puan dökümü ve "SAHİBE SOR" listesi var: CV'de çelişki, ilanda belirsiz kalan bir şart, eşiğin hemen altında tek kararla geçecek aday.

**Yapmadığı şey:** CV'de yazmayan bir beceriyi varmış gibi saymıyor, unvandan ya da şirketten çıkarım yapmıyor. CV kendi içinde çelişiyorsa adayı elemiyor, sana soruyor. `gonder: hayir` iken tek mail göndermiyor.

**Aday modu:** İş arıyorsan aynı sistemi kendi başvurun için kullanabilirsin. `beni ele` yaz, CV'ni ve ilanı ver; sistem sana işe alanın göreceği puanı, neden elenebileceğini, nerede güçlü olduğunu ve CV'nde neyin görünmediğini yazıyor. Başvurmadan önce.

## Kurulum

Gerekenler: [Claude Code](https://claude.com/claude-code) ve Python 3.10+. PDF okumak için `pypdf` (Claude eksikse kendisi kurar). CV'ler Gmail'den gelecekse ya da mailleri sistemin göndermesini istiyorsan Chrome ve [Claude in Chrome](https://claude.com/chrome) eklentisi. Dosya açman, dosya doldurman gerekmiyor; hepsini sohbette Claude yapıyor.

1. Claude Code'u aç, şu adresi ver ve "bunu benim için kur" de:

```text
github.com/muhammedsevimli/sistemler/tree/main/cv-eleme-ajani
```

   Claude klasörü indirir (`npx degit` ile; komut satırını seven kendisi de çalıştırabilir: `npx degit muhammedsevimli/sistemler/cv-eleme-ajani cv-eleme-ajani`).

2. İstersen önce demoyu gör: klasörde `ele` yaz. Kurulumla gelen kurgusal ilan ve 12 kurgusal CV'yle tam bir eleme koşar, hiçbir mail gitmez.

3. Klasörde `kur` yaz. Claude ilanını ister (metni yapıştır ya da linkini ver), zorunlu şartları ve tercihleri ilandan kendisi çıkarıp onayına sunar; deneyim bandını, konumu, kırmızı çizgilerini, kısa liste büyüklüğünü, CV'lerin nereden geleceğini ve saati sohbette sorar, `sen/ILAN.md`'yi yazar, zamanlayıcıyı kurar. Gönder anahtarı kapalı başlar.

4. `ele` yaz, ilk tabloyu ve gerekçeleri oku. Beğendiysen `günlük koşu` yaz ya da sabahı bekle; `kur` sırasında verdiğin saatte kendi kendine koşar.

5. Birkaç gün raporları oku. Sisteme güvenince "gönderimi aç" de, anahtarı Claude çevirir.

Diğer komutlar (`incele`, `davet`, `ret`, `durum`, `beni ele`, `temizle`) ve ayrıntılar `CALISTIR.md` içinde.

## Adil eleme ve KVKK

- Yaş, doğum tarihi, cinsiyet, medeni durum, çocuk, hamilelik, fotoğraf, doğum yeri, semt, din, uyruk, engellilik, sağlık, siyasi görüş, dernek üyeliği ve askerlik durumu puanlanmaz, hiçbir gerekçede geçmez. CV'de yazıyorsa okunur ve yok sayılır; raporda yalnız kaç CV'de bulunduğu yazar.
- Bunlardan birini kırmızı çizgi yapmak istersen sistem reddeder ve işin gerçek ihtiyacını karşılayan ölçütü önerir (yaş yerine deneyim bandı gibi).
- Her eleme gerekçesiyle yazılır, sen görürsün. Ret mailleri bir sonraki koşuda gider; arada fikrini değiştirebilirsin.
- CV'ler kişisel veridir. Senin bilgisayarında kalır, hiçbir siteye yüklenmez. Aday klasörleri, raporlar ve taslaklar `.gitignore` içinde; repoya girmez. Pozisyon kapanınca `temizle` yaz, hepsi silinir.
- Bu kurallar sistemin kendi kuralıdır, hukuki danışmanlık yerine geçmez.

## Gerçekten çalışıyor mu

Evet, demo koşusuyla. Tamamı `TEST-SONUCU.md` içinde: kurgusal ilanla 12 kurgusal CV (3'ü PDF, 1'i Word) okundu, kimin neden elendiği, kısa liste, SAHİBE SOR soruları, yazılan taslaklar orada. Aday modu ayrıca test edildi. Test edilmeyen şeyler de yazıyor.

## Bilmen gerekenler

- Puan, CV'de yazanla ilanda yazanın karşılaştırmasıdır; adayın gerçek yeteneğini ölçmez. Kötü yazılmış bir CV iyi bir adayı düşük puana itebilir. Eşiğin hemen altındakileri ve SAHİBE SOR listesini okumak senin işin.
- Zamanlanmış koşu için bilgisayar o saatte açık olmalı. Gmail yolunda Chrome'a erişilebilmeli; Chrome kapalıysa koşucu açar.
- `raporlar/log-*.txt` dosyaları ham koşu kaydıdır, paylaşma.

## Desteklenen araçlar

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` |
| Codex, Cursor, Windsurf ve AGENTS.md okuyan diğer araçlar | `AGENTS.md` (Gmail adımları için Claude in Chrome gerekir) |

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
