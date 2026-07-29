# Abonelik Kesici

Her ay ödediğin araçların açık kaynak karşılığını bulan sistem. Kullandığın araçları ve ücretlerini yazıyorsun; sistem her biri için alternatifleri kendisi tarıyor, bulduğu her projeyi doğruluyor, dört kritere puanlıyor ve sıralı bir kesme listesi çıkarıyor.

Sistem "hepsini kes" demiyor. Alternatifi olmayan ya da toplam maliyeti aboneliği geçen araçları ayrı bir banda koyuyor.

## Ne işe yarıyor

Kartından her ay altı yedi ayrı abonelik geçiyor. Hepsi dolar, hepsi tek başına küçük görünüyor, toplamı bir maaş ediyor. Çoğunun da senin kullandığın kısmının açık kaynak karşılığı yıllardır ortada duruyor.

1. Her araç için açık kaynak ve self-host alternatifleri web araçlarıyla arıyor.
2. Bulduğu her projeyi doğruluyor: lisans, son güncelleme, docker, ücretsiz barındırılan sürüm.
3. Dört kritere puanlıyor: **kurulum zorluğu, bakım, gerçek aylık maliyet, veri taşıma riski**.
4. Üç banda ayırıyor: **KES** · **DENE** · **DOKUNMA**.
5. Yıllık farkı hesaplıyor ve **altyapı giderini düşüyor**. Brüt tasarrufu net gibi sunmuyor.

**Yapmadığı şey:** kurulum yapmıyor. Alternatif uydurmuyor, bulamadığında "karşılığı yok" diyor. Bir yıldan uzun süredir güncellenmemiş projeyi KES bandına koymuyor.

## Kurulum

```bash
npx degit muhammedsevimli/sistemler/abonelik-kesici abonelik-kesici
```

Ya da yeşil **Code → Download ZIP**. Komut satırıyla uğraşmak istemiyorsan Claude Code'u aç ve şu adresi ver, "bunu benim için kur" de:

```text
github.com/muhammedsevimli/sistemler/tree/main/abonelik-kesici
```

## Çalıştırma

1. `sen/01-araclar.md` dosyasını doldur. En önemli sütun **"bu araçta gerçekten ne yapıyorum"** çünkü sistem aracın tamamına değil senin dokunduğun kısma alternatif arıyor.
2. Claude Code'u bu klasörde aç, `tara` yaz.
3. Tarama bitince `kesme listesini çıkar` yaz.

Rapor `ciktilar/` klasörüne düşüyor. En çok bakacağın yer **Bölüm E**: orada brüt değil, altyapı gideri düşülmüş **net** rakam var.

Ayrıntı: `CALISTIR.md`.

## Gerçekten çalışıyor mu

Evet, kanıtıyla. Tamamı `TEST-SONUCU.md` içinde.

Beş araçlık bir profil için gerçek arama koşuldu, bulunan **9 proje GitHub API'den tek tek doğrulandı** (lisans, yıldız, son push). Dokuzunun da son push'u son bir hafta içindeydi, bakımsız proje çıkmadı.

**Tarama üç şey yakaladı:**

1. **Cal.com reposu taşınmış.** `calcom/cal.com` artık `calcom/cal.diy`. Adres doğrulama adımı olmasa rapor eski adresi verirdi.
2. **Üç proje "açık kaynak" değil, açık çekirdek.** Formbricks, Cap ve Typebot'un LICENSE dosyaları `Portions of this software are licensed as follows` ile başlıyor. Gövde açık, kurumsal dizinler ticari. "Tamamen açık kaynak" diye sunmak yanlış olurdu.
3. **İki araçta sunucu kurmaya gerek yok.** Cal.com ve Cap'in ücretsiz katmanları var, sistem bunu görüp ikisini doğrudan KES bandına çıkardı.

**Sonuç:** 3 KES, 2 DENE, 0 DOKUNMA.

| | USD | TL |
|---|---|---|
| Yıllık abonelik gideri | $954 | 45.206 |
| Brüt tasarruf | $534 | 25.304 |
| Eklenen altyapı gideri | $96 | 4.549 |
| **Net yıllık fark** | **$438** | **20.755** |

Kur 1 USD = 47,386 TL (29 Tem 2026) canlı çekildi, kaynağı rapora yazıldı. Test profilindeki fiyatlar kurgusal; alternatifler, lisanslar ve tarihler gerçek.

Örnek raporun tamamı: `ORNEK-CIKTI.md`. Ham tarama: `veri/tarama-2026-07-29.md`.

## Klasör yapısı

```text
abonelik-kesici/
  CLAUDE.md              Claude Code otomatik okur
  AGENTS.md              Codex, Windsurf, Kilo ve 20+ araç okur
  .cursor/rules/         Cursor okur
  CALISTIR.md            iki adımlık kullanım
  format/kriterler.md    dört ölçüt, 1-5 cetveli, bant eşikleri
  format/rapor-format.md rapor iskeleti (A-G bölümleri)
  sen/01-araclar.md      araçların, seviyen, karar defteri
  veri/                  tarama çıktıları, silinmez (zam geçmişi)
  ciktilar/              kesme listeleri buraya düşer
  ORNEK-CIKTI.md         gerçek bir kesme listesi
  TEST-SONUCU.md         uçtan uca test kaydı
```

## Lisans notu

Sistem her alternatifin lisansını rapora yazıyor çünkü karar buna bağlı:

- **MIT / Apache 2.0:** ticari kullanımda serbest.
- **AGPL:** kendi işinde kullanmak serbest, müşterine servis olarak sunarsan kaynak paylaşımı yükümlülüğü doğabilir.
- **Açık çekirdek:** gövde açık, kurumsal kısımlar ticari. Küçük ekip kullanımında engel yok ama "tamamen açık kaynak" değil.

## Desteklenen araçlar

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` |
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
