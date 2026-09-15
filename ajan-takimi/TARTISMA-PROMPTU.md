# Tartışma promptu

Bu dosya lideri kurar. Lider senin oturumun: soruyu sorar, beş rolü koşturur, sonucu raporlar.

Aşağıda iki çalışma yolu var. **Yol B her kurulumda çalışır**, önce onu dene. Yol A deneysel bir özelliğe bağlı ve açık değilse hiçbir şey olmaz.

---

## Önce doldur

Promptu yapıştırmadan önce şu üç yeri kendi işine göre değiştir.

**1. Soru.** Tek cümle, tek sonuç. "Neden böyle oldu" biçiminde kur. Örnek: "12. gün videosu neden bir günde 85 bin izlendi."

**2. Veri.** `veri/` klasörüne ne koyduğunu ve her dosyanın ne içerdiğini yaz. Rakamlar yalnız burada olacak.

**3. Dört teori.** Her role bir teori. Hazır senaryo istersen `uyarlamalar/` klasöründeki üç dosyadan birini al, teorileri oradan kopyala.

---

## Yol B · paralel alt-ajan sürümü (her kurulumda çalışır)

Claude Code'u bu klasörde aç ve şunu yapıştır:

```text
Rolün: bu tartışmanın lideri. Sen teori savunmuyorsun, koşuyu yönetip raporluyorsun.

SORU: <buraya tek cümlelik soru>

VERİ: veri/ klasöründeki dosyalar. Rakamlar yalnız orada. Hiçbir ajan o klasörde
olmayan bir sayı kullanamaz.

ROLLER VE TEORİLER:
- Pazarlamacı: <teori 1>
- Editör: <teori 2>
- Şüpheci: <teori 3>
- Psikolog: <teori 4>
- Matematikçi: teorisi yok. Veriyi okur, her teoriyi rakamla sınar, hangisinin
  veriyle çeliştiğini yazar. Salt okunur çalışır, dosya yazmaz, kararını sana döner.

TUR 1
Beş alt-ajanı AYNI ANDA başlat. Her birine .claude/agents/ altındaki kendi rol
dosyasını, soruyu ve veri klasörünün yolunu ver. Her rol kendi dosyasını yazar:
tartisma/round1_<rol>.md, en fazla 150 kelime, teori + veriden 2-3 kanıt
(rakam ve kaynak dosya adı). Matematikçi yazmaz, sana döner, dosyayı sen yaz:
tartisma/round1_matematikci.md.

TUR 1 KAPISI
Beş dosya da oluşmadan tur 2'ye geçme. Bir rol veri klasöründe olmayan bir rakam
kullandıysa o kanıtı işaretle ve rolü tek seferlik düzeltmeye gönder.

TUR 2
Beş alt-ajanı yine AYNI ANDA başlat. Her biri diğer dört tur 1 dosyasını okur.
Her rol tartisma/round2_<rol>.md yazar: ilk satır tek kelime, ELENDİ ya da AYAKTA,
sonra en fazla 80 kelime gerekçe. ELENDİ yazan neden ikna olduğunu bir cümleyle
söyler. AYAKTA yazan karşı kanıtı rakamla getirir. Matematikçi hakem kararını
döner, tartisma/round2_matematikci.md dosyasını sen yaz.

RAPOR
tartisma/LIDER-RAPORU.md dosyasını aşağıdaki şablonla yaz.

KURALLAR
- Hiçbir rakam uydurulmaz. Veri klasöründe yoksa iddia kurulmaz.
- Sen teori savunmazsın, ayakta kalanı seçmezsin. Hakem kararını yazarsın.
- Hakem bir rolü "veriyle ayrıştırılamıyor" diye işaretlediyse onu "elendi" yazma.
  Ayrımı olduğu gibi raporla.
- Hiçbir rol başka bir rolün dosyasına yazmaz.
```

Bu yol beş ayrı alt-ajan açar. Her ajan kendi bağlamında çalışır, birbirinin içini görmez, yalnız `tartisma/` klasöründeki dosyalar üstünden haberleşir. Gerçek koşu bu yolla yapıldı (`TEST-SONUCU.md`).

---

## Yol A · ajan takımı modu (deneysel)

Claude Code'un ajan takımı özelliği, alt-ajan açmak yerine bir lider ve birkaç takım arkadaşını ortak bir görev listesi üstünden çalıştırır. **Bu özellik deneysel.** Açık değilse, adı değiştiyse ya da sürümünde yoksa hiçbir hata almazsın, komut sessizce normal oturum gibi davranır. O durumda Yol B'ye dön.

Açmak için proje kökünde `.claude/settings.json` dosyasına şunu koy:

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

Claude Code'u kapatıp bu klasörde yeniden aç. Sonra Yol B'deki promptun aynısını yapıştır, yalnız **TUR 1** ve **TUR 2** bloklarının başındaki "Beş alt-ajanı aynı anda başlat" cümlesini şununla değiştir:

```text
Beş takım arkadaşını ortak görev listesi üstünden çalıştır. Her role
.claude/agents/ altındaki kendi dosyasını ver. Ortak görev listesine tur 1 için
beş görev, tur 2 için beş görev koy. Tur 1'in beş görevi kapanmadan tur 2
görevleri açılmaz.
```

**Windows notu:** ajan takımı modunda takım arkadaşları aynı süreç içinde koşuyor ve canlı panel bazı terminallerde açılmıyor. Panel açılmazsa koşu yine de yürür, ilerlemeyi `tartisma/` klasöründe dosyalar düştükçe görürsün. Panel için Windows Terminal ya da WSL daha rahat.

İki yolun çıktısı aynı: on dosya artı lider raporu.

---

## Lider raporu şablonu

`tartisma/LIDER-RAPORU.md` şu yapıda yazılır:

```text
# Lider raporu · <konu> · <tarih>

Soru: <tek cümle>
Koşu: 5 ajan, 2 tur, <hangi yol>. Girdi: <veri dosyaları>. <süre> ve <token>.

| Rol | Teori | Tur 1 kanıtı | Tur 2 kararı |
|---|---|---|---|
| Pazarlamacı | <teori> | <rakam> | ELENDİ / AYAKTA + tek cümle gerekçe |
| Editör | <teori> | <rakam> | ... |
| Şüpheci | <teori> | <rakam> | ... |
| Psikolog | <teori> | <rakam> | ... |
| Matematikçi | hakem | her teoriyi rakamla sındı | hakem kararı |

**Ayakta kalan:** <teori ve tek paragraf gerekçe, rakamla>

**Dürüstlük notu:** hakem bir rolü ayrıştıramadıysa, bir rol kendi kararıyla
çekildiyse ya da veri bir teoriyi sınamaya yetmediyse buraya yazılır. Bu bölüm
boş bırakılmaz, yazacak bir şey yoksa "yok" yazılır.

Dosyalar: round1_*.md, round2_*.md (tartisma/ klasörü).
```

Ayakta kalan teori senin cevabın. Tek ajanın verdiği cevaptan farkı şu: bu cevap dört rakip açıklamanın rakamla elendiği bir turdan geçti ve neyin sınanamadığı da yazılı.
