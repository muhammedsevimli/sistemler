# Örnek çıktı · Urla Sofrası, haftalık bülten

> Bu dosyadaki her şey test koşusunun gerçek çıktısıdır (1. tur, 10 Eki 2026). Şirket kurgusaldır: Urla Sofrası diye bir işletmeyle ilgisi yoktur. Yalnız bilgisayara özel klasör yolları kısaltıldı.

## Verilen iş

```text
Urla Sofrası için bu haftanın e-posta bültenini çıkar.
Yazar bültenin ana metnini kendisi yazsın; bülteni Instagram'da duyuracak kısa bir gönderi
metnini de bir yardımcıya versin (bu işte 1 yardımcı hakkı var).
```

## CEO'nun iş tanımı (`sirket/isler/bulten-hafta-41.md`, kısaltılmış)

**Bitmiş hal:** Urla Sofrası'nın bu haftaki e-posta bülteni (iki konu satırı önerisiyle) ve bülteni Instagram'da duyuran kısa bir gönderi metni; ikisi de şirket kartının sesiyle, yalnız karttaki bilgilerle, denetçiden geçmiş halde onay klasöründe.

| # | İhtiyaç | Kim |
|---|---|---|
| 1 | E-posta bülteninin ana metni (iki konu satırı önerisi dahil) | yazar |
| 2 | Bülteni duyuran kısa Instagram gönderi metni | yazarın yardımcısı |
| 3 | Denetim raporu: GEÇTİ / DÜZELT | denetçi |

**Vardiya sırası:** yazar → yazarın masası birleşir → denetçi (yazarın çıktısını görür) → onay.

## Günlük (`sirket/gunluk.jsonl`, 16 satır)

```json
{"t":"2026-10-10T23:50:07+03:00","kim":"ceo","olay":"ise_alim","detay":"yazar: bulten ana metni (+1 yardimci hakki: Instagram duyurusu)"}
{"t":"2026-10-10T23:50:07+03:00","kim":"ceo","olay":"ise_alim","detay":"denetci: bulten-hafta-41 denetimi"}
{"t":"2026-10-10T23:50:08+03:00","kim":"ceo","olay":"masa","detay":"yazar: sirket/masalar/yazar (masa/bulten-hafta-41-yazar)"}
{"t":"2026-10-10T23:50:23+03:00","kim":"yazar","olay":"baslangic","detay":"bulten-hafta-41"}
{"t":"2026-10-10T23:50:23+03:00","kim":"yazar","olay":"masa","detay":".../sirket-test/sirket/masalar/yazar"}
{"t":"2026-10-10T23:50:28+03:00","kim":"yazar","olay":"yardimci","detay":"yardimci-1: bulteni duyuran kisa Instagram gonderi metni (instagram.md)"}
{"t":"2026-10-10T23:50:45+03:00","kim":"yazar-yardimci-1","olay":"baslangic","detay":"bulten-hafta-41 instagram duyurusu"}
{"t":"2026-10-10T23:51:09+03:00","kim":"yazar-yardimci-1","olay":"bitis","detay":"sirket/ciktilar/bulten-hafta-41/yazar/yardimci-1/instagram.md"}
{"t":"2026-10-10T23:51:29+03:00","kim":"yazar","olay":"bitis","detay":"sirket/ciktilar/bulten-hafta-41/yazar/metin.md (bulten + Instagram duyurusu), yardimci-1/instagram.md"}
{"t":"2026-10-10T23:51:45+03:00","kim":"ceo","olay":"birlesme","detay":"yazar: 2 dosya ana dala geldi"}
{"t":"2026-10-10T23:51:45+03:00","kim":"ceo","olay":"masa","detay":"denetci: sirket/masalar/denetci (masa/bulten-hafta-41-denetci)"}
{"t":"2026-10-10T23:51:57+03:00","kim":"denetci","olay":"baslangic","detay":"bulten-hafta-41 denetimi"}
{"t":"2026-10-10T23:51:57+03:00","kim":"denetci","olay":"masa","detay":".../sirket-test/sirket/masalar/denetci"}
{"t":"2026-10-10T23:52:28+03:00","kim":"denetci","olay":"bitis","detay":"karar: GEÇTİ, 4 bulgu (sirket/ciktilar/bulten-hafta-41/denetci/rapor.md)"}
{"t":"2026-10-10T23:52:42+03:00","kim":"ceo","olay":"birlesme","detay":"denetci: 1 dosya ana dala geldi"}
{"t":"2026-10-10T23:53:07+03:00","kim":"ceo","olay":"onay_istegi","detay":"sirket/onay/2026-10-10-bulten-hafta-41.md"}
```

`vardiya` komutu bunu şu tabloya çevirir:

| Çalışan | Masa | Başladı | Bitti | Yardımcı | Durum |
|---|---|---|---|---|---|
| yazar | sirket/masalar/yazar | 23:50:23 | 23:51:29 | 1 | birleşti |
| yazar-yardimci-1 | yazarın masası | 23:50:45 | 23:51:09 | - | bitti |
| denetci | sirket/masalar/denetci | 23:51:57 | 23:52:28 | 0 | birleşti |

Onayda bekleyen: `sirket/onay/2026-10-10-bulten-hafta-41.md`

## Onay dosyası (`sirket/onay/2026-10-10-bulten-hafta-41.md`)

> # Onay bekliyor: Urla Sofrası haftalık e-posta bülteni, hafta 41
> - Durum: ONAY BEKLİYOR
> - Hazırlayanlar: yazar (bülten metni), yazar-yardimci-1 (Instagram duyurusu, yazar gözden geçirdi), denetçi
> - Denetçi kararı: GEÇTİ (4 öneri, notlar aşağıda)
> - Nereye gidecek: e-posta bülteni + Instagram gönderisi (gönderimi sahibi yapar)
>
> ## Göndermeden önce cevaplanacaklar
>
> 1. [SAHİBE SOR: Rezervasyon ve paket servis için telefon numarası nedir? Bültene ve Instagram gönderisine yazılsın mı?]
> 2. [SAHİBE SOR: Paket servis siparişi nasıl veriliyor, telefon mu başka bir yol mu?]
> 3. [SAHİBE SOR: Bültenin altına adres ve imza olarak kimin adı yazılsın?]
> 4. [SAHİBE SOR: Bülten kayıt bağlantısı Instagram biyografisinde mi?]
>
> ## Denetçinin üslup önerileri (isteğe bağlı)
>
> - Bülten, 2. paragraf: "Öğlen arası **hızlı** bir tabak arıyorsanız" ifadesindeki hız iddiası kartta yok. Öneri: "Öğlen arası bir tabak arıyorsanız kapımız açık."
> - Instagram, kapanış: "Haftaya yine yazarız" bülten diline ait. Öneri: yalnız "Sofrada görüşmek üzere."
>
> ## 1. E-posta bülteni
>
> **Konu satırı önerisi 1:** Perşembe ve cuma Çeşme börülcesi geliyor
> **Konu satırı önerisi 2:** Bu hafta öğlen menüsü ve cumartesi kahvaltısı
>
> Merhaba,
>
> Bu haftanın öğlen menüsü pazartesiden cumaya aynı: mercimek çorbası, zeytinyağlı enginar, fırın sebze ve tatlıya sütlaç. Öğlen arası hızlı bir tabak arıyorsanız kapımız açık. Paket servis de alıyoruz. [SAHİBE SOR: Paket servis siparişi nasıl veriliyor, telefon mu başka bir yol mu? Numara metne eklensin mi?]
>
> Bu hafta yeni olan börülce. Çeşme'den taze börülce geliyor, perşembe ve cuma masada olacak. Yalnız bu iki gün var, haberiniz olsun.
>
> Cumartesi kahvaltısı 09:00 ile 13:00 arasında. Rezervasyonu telefonla alıyoruz. Hafta sonu İzmir'den gelecekseniz önceden aramanızı öneririz. [SAHİBE SOR: Rezervasyon telefon numarası nedir?]
>
> Pazar günü kapalıyız.
>
> Haftaya yine yazarız.
>
> Urla Sofrası
> [SAHİBE SOR: Bültenin altına adres ve imza olarak kimin adı yazılsın?]
>
> ## 2. Instagram gönderisi
>
> Bu haftanın bülteni çıktı. Mutfakta bu hafta neler var, kısaca anlatalım.
>
> Pazartesiden cumaya öğlen menümüz: mercimek çorbası, zeytinyağlı enginar, fırın sebze ve sütlaç.
>
> Bu hafta yeni olan börülce. Çeşme'den taze geliyor, yalnız perşembe ve cuma.
>
> Cumartesi kahvaltımız 09:00 ile 13:00 arası. Yer ayırtmak için bizi telefonla arayın. [SAHİBE SOR: Telefon numarası gönderiye yazılsın mı, yazılacaksa numara ne?]
>
> Pazar günü kapalıyız.
>
> Bültenin tamamını okumak için kayıt olun: [SAHİBE SOR: Bülten kayıt bağlantısı biyografide mi?]
>
> Haftaya yine yazarız, sofrada görüşmek üzere.
>
> #Urla #UrlaSofrası #Çeşme #börülce #zeytinyağlıenginar
>
> ## İç notlar (yayınlanmaz) · kısaltıldı
>
> - Kaynaklar: bütün bilgiler `sirket/SIRKET.md` "Bu haftanın bilgileri" (öğlen menüsü, Çeşme börülcesi perşembe-cuma, cumartesi kahvaltısı 09:00-13:00, pazar kapalı) ve "Şirket" bölümünden. Fiyat, kampanya, sağlık iddiası, müşteri adı yok.
> - Denetim raporu: `sirket/ciktilar/bulten-hafta-41/denetci/rapor.md`

## Bu örnekte görülenler

- **Uydurma yok:** şirket kartında telefon numarası ve adres yoktu. Yazar numara uydurmadı, dört yere `[SAHİBE SOR]` koydu; CEO bunları onay dosyasının başında tek listede topladı.
- **Denetçi karar verdi, metni yeniden yazmadı:** "hızlı bir tabak" ifadesini kartta olmayan küçük bir iddia diye işaretledi, düzeltmeyi sahibine bıraktı.
- **Yardımcı günlükte:** yazarın yardımcısı CEO'ya hiç uğramadı, ama işe alındığı an ve bitirdiği an günlükte duruyor.
- **Masalar birleşti:** yazarın masası denetçi başlamadan birleşti, denetçinin masası yazarın metnini bu yüzden gördü.
