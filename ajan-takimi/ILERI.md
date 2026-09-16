# İleri düzey

Ana akış `README.md` içinde ve iki adımdan ibaret. Bu dosya, kendi eline almak isteyen kişi için.

## Klasör yapısı

```text
ajan-takimi/
  CLAUDE.md              Claude Code otomatik okur
  AGENTS.md              Codex, Windsurf, Kilo ve 20+ araç okur
  .cursor/rules/         Cursor okur
  .claude/agents/        beş rol dosyası
  TARTISMA-PROMPTU.md    koşunun yapısı, lider bunu okur
  veri/                  rakamlar buraya yazılır
  uyarlamalar/           hazır dört senaryo
  tartisma/              çıktılar buraya düşer
  MALIYET.md             kaç ajan, kaç tur, hangi model
  ORNEK-CIKTI.md         örnek veriyle bir lider raporu
  TEST-SONUCU.md         gerçek koşu kaydı
  ILERI.md               bu dosya
```

## Veri dosyasını elle yazmak

Ana akışta veri dosyasını araç yazar. Kendin yazmak istersen `veri/` klasörüne bir `.md` dosyası koy. Biçim örneği `veri/ORNEK-VERI.md` içinde (kurgusal veri, gerçek bir hesaba ait değil).

Kurallar:

- Rakamları tablo halinde yaz, her sütun bir karşılaştırma öğesi olsun.
- Her rakamın kaynağını yaz. Rol, kanıtında kaynak dosya adını anmak zorunda.
- Elinde olmayan bir alana "veri yok" yaz. Boş bırakma, uydurma.
- Karşılaştırma verisi koy. Aynı kalıpla kurulmuş ama farklı sonuç almış bir örnek, tek başına duran bir rakamdan çok daha güçlü.

## Koşuyu elle başlatmak

Lider promptunun tamamı `TARTISMA-PROMPTU.md` içinde. Kendi oturumuna yapıştırmak istersen oradaki bloğu al, soruyu ve dört teoriyi doldur.

## Ajan takımı modu

Claude Code'un ajan takımı özelliği, alt-ajan açmak yerine bir lider ve takım arkadaşlarını ortak bir görev listesi üstünden çalıştırır. **Bu özellik deneysel.** Açık değilse, adı değiştiyse ya da sürümünde yoksa hiçbir hata almazsın, komut sessizce normal oturum gibi davranır. O durumda ana akış zaten çalışır.

Açmak için proje kökünde `.claude/settings.json` dosyasına şunu koy:

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

Claude Code'u kapatıp bu klasörde yeniden aç. Sonra `TARTISMA-PROMPTU.md` içindeki promptu yapıştır ve tur bloklarının başındaki "beş rolü aynı anda başlat" cümlesini şununla değiştir:

```text
Beş takım arkadaşını ortak görev listesi üstünden çalıştır. Her role
.claude/agents/ altındaki kendi dosyasını ver. Ortak görev listesine tur 1 için
beş görev, tur 2 için beş görev koy. Tur 1'in beş görevi kapanmadan tur 2
görevleri açılmaz.
```

**Windows notu:** ajan takımı modunda takım arkadaşları aynı süreç içinde koşuyor ve canlı panel bazı terminallerde açılmıyor. Panel açılmazsa koşu yine yürür, ilerlemeyi `tartisma/` klasöründe dosyalar düştükçe görürsün. Panel için Windows Terminal ya da WSL daha rahat.

Gerçek test koşusu ajan takımı moduyla değil, normal paralel alt-ajanlarla yapıldı. Ayrıntı `TEST-SONUCU.md` içinde.

## Model kademelerini değiştirmek

Her rol dosyasının başındaki `model` satırını değiştirebilirsin. Matematikçi en güçlü kademede kalsın, sistem ona dayanıyor. Dört teori rolünü orta kademeye indirdiğinde maliyetin büyük kısmı iner. Ayrıntı `MALIYET.md` içinde.

## Rolleri değiştirmek

`.claude/agents/` klasöründeki dört teori dosyasını kendi işine göre yeniden yazabilirsin. `matematikci.md` dosyasına dokunma: teorisi olmayan hakem bu sistemin çalışan parçası. Salt okunur araçlarla tanımlı olması da bilerek, hakem tartışmanın çıktısına dokunamıyor.

Hazır senaryolar `uyarlamalar/` klasöründe: `video-neden-yayildi.md`, `urun-neden-satmadi.md`, `mail-neden-acilmadi.md`, `reklam-neden-tiklanmadi.md`. Her biri soru kalıbını, dört teoriyi ve hangi rakamın hangi teoriyi güçlendirdiğini yazar.
