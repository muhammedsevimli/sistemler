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


---

# Örnek çıktı · gözcü, rakip radarı

> Bu bölümdeki her şey gözcü test koşusunun gerçek çıktısıdır (4. koşu, 11 Eki 2026). Şirket kurgusaldır. Kaynaklar gerçek ve herkese açıktır; hiçbiri Urla Sofrası'nın rakibi değildir, demo için seçildi. Bilgisayara özel klasör yolları ve uzun Google Haberler bağlantıları kısaltıldı.

## Verilen iş

```text
Listeye elle bir link ekle: https://www.haberege.com.tr/izmirde-buyuk-efes-bag-bozumu-festivali-bugun-basliyor-1791633184-4310742
notu: 'fırsat: İzmir'de bağ bozumu haftası, Urla'nın bağlarıyla bağlayıp cumartesi kahvaltısını hatırlatalım'. Sonra radar.
```

## Gözcünün listesi (`sirket/radar/kaynaklar.md`)

```text
gun: 4
python: python
firsat_kanali: Instagram
| Ad | Tür | Adres | Not |
|---|---|---|---|
| Yemek.com · YouTube | youtube | https://www.youtube.com/feeds/videos.xml?channel_id=UCWA2nh0yrIMC6uG0hfbucRQ | @yemekcom |
| Nefis Yemek Tarifleri · YouTube | youtube | https://www.youtube.com/feeds/videos.xml?channel_id=UCeh3XQszWO6lLdKz_SZmm1Q | @nefisyemektarifleri |
| Refika'nın Mutfağı · YouTube | youtube | https://www.youtube.com/feeds/videos.xml?channel_id=UCO3MaQR-Vh6cgBZRlD44jWg | @refikaninmutfagi |
| Yemek.com · site | site | https://yemek.com | besleme: https://yemek.com/rss.xml |
| CZN Burak · YouTube | youtube | https://www.youtube.com/feeds/videos.xml?channel_id=UCUcfej7lPDoeqTlferD2mcw | @CZNBurak |
| Haberler: Urla restoran | haber | Urla restoran | Google Haberler araması |
| Haberler: Urla gastronomi | haber | Urla gastronomi | Google Haberler araması |
| Haberler: İzmir gastronomi | haber | İzmir gastronomi | Google Haberler araması |
| Reddit: r/izmir | reddit | r/izmir | şehirde yeme içme soruları |
| Haber Ege: Büyük Efes Bağ Bozumu Festivali | link | https://www.haberege.com.tr/izmirde-buyuk-efes-bag-bozumu-festivali-bugun-basliyor-1791633184-4310742 | fırsat: İzmir'de bağ bozumu haftası, Urla'nın bağlarıyla bağlayıp cumartesi kahvaltısını hatırlatalım |
```

## Günlük (bu koşunun 13 satırı)

```json
{"t":"2026-10-11T19:47:37+03:00","kim":"ceo","olay":"ise_alim","detay":"gozcu: radar-2026-10-11 (dorduncu tarama)"}
{"t":"2026-10-11T19:47:51+03:00","kim":"ceo","olay":"masa","detay":"gozcu: sirket/masalar/gozcu (masa/radar-2026-10-11-gozcu)"}
{"t":"2026-10-11T19:48:13+03:00","kim":"gozcu","olay":"baslangic","detay":"radar-2026-10-11"}
{"t":"2026-10-11T19:48:13+03:00","kim":"gozcu","olay":"masa","detay":".../sirket/masalar/gozcu"}
{"t":"2026-10-11T19:50:32+03:00","kim":"gozcu","olay":"bitis","detay":"10/10 kaynak, 50 madde, 1 taslak: sirket/onay/radar-2026-10-11.md"}
{"t":"2026-10-11T19:51:01+03:00","kim":"ceo","olay":"birlesme","detay":"gozcu: 2 dosya ana dala geldi"}
{"t":"2026-10-11T19:51:02+03:00","kim":"ceo","olay":"ise_alim","detay":"denetci: radar-2026-10-11 fırsat taslağı"}
{"t":"2026-10-11T19:51:02+03:00","kim":"ceo","olay":"masa","detay":"denetci: sirket/masalar/denetci (masa/radar-2026-10-11-denetci)"}
{"t":"2026-10-11T19:51:18+03:00","kim":"denetci","olay":"baslangic","detay":"radar-2026-10-11 firsat taslagi denetimi"}
{"t":"2026-10-11T19:51:19+03:00","kim":"denetci","olay":"masa","detay":".../sirket/masalar/denetci"}
{"t":"2026-10-11T19:52:13+03:00","kim":"denetci","olay":"bitis","detay":"karar: GEÇTİ, 4 bulgu (üslup); sirket/ciktilar/radar-2026-10-11/denetci/denetim.md"}
{"t":"2026-10-11T19:52:53+03:00","kim":"ceo","olay":"birlesme","detay":"denetci: 1 dosya ana dala geldi"}
{"t":"2026-10-11T19:52:54+03:00","kim":"ceo","olay":"onay_istegi","detay":"sirket/onay/radar-2026-10-11.md"}
```

## Onay dosyası (`sirket/onay/radar-2026-10-11.md`)

> # Onay bekliyor: Rakip radarı · 2026-10-11
> - Durum: ONAY BEKLİYOR
> - Hazırlayanlar: gözcü, denetçi (yardımcı yok)
> - Denetçi kararı: GEÇTİ (yalnız fırsat taslağı denetlendi; 4 üslup ve zamanlama notu aşağıda)
> - Nereye gidecek: raporun kendisi iç belgedir. Fırsat taslakları Instagram için (gönderimi sahibi yapar).
>
> ## Göndermeden önce cevaplanacaklar
> - Zamanlama notu: haberde festival yalnız 10-11 Ekim (iki gün), yer Swissôtel Büyük Efes İzmir, Oval Bahçe. Bugün son günü. Sahibinin notundaki "bağ bozumu haftası" haberde geçmiyor. Bu yüzden taslak festivali geçmiş zamanla anıyor ve önümüzdeki cumartesiyi (17 Ekim) hatırlatıyor. Taslak bu haliyle uygun mu? (Taslak 1)
> - [SAHİBE SOR: Urla'daki bağlarla sofranız arasında somut bir bağ var mı (üzüm, pekmez, bir bağdan ya da üreticiden malzeme)? Şirket kartında yok. Yoksa bu cümle çıkar.] (Taslak 1)
> - [SAHİBE SOR: 17 Ekim cumartesi kahvaltısı açık mı, saat yine 09:00-13:00 mi? Kartta "bu haftanın bilgileri" olarak yazıyor.] (Taslak 1)
> - [SAHİBE SOR: Cumartesi kahvaltısında masada neler var? Kartta kahvaltı menüsü yok.] (Taslak 1)
> - [SAHİBE SOR: Rezervasyon için gönderiye hangi telefon numarası yazılsın?] (Taslak 1, Bölüm 3 fikir 1)
> - [SAHİBE SOR: Çeşme börülcesi bu hafta da perşembe ve cuma var mı, hangi tabakta çıkıyor?] (Bölüm 3, fikir 2)
>
> ## Denetçinin notları
> Karar GEÇTİ. Kırmızı çizgi ihlali ya da kaynaksız rakam yok; saat, telefonla rezervasyon ve pazar kapalı bilgisi şirket kartında, festival tarihi ve yeri haberle aynı.
> - Urla bağı sorusu iki yerde farklı söyleniyor. Netleştirme: bağ yoksa çıkacak cümle "Bizim aklımız da bağlara gitti." Kalan ilk cümle "Hafta sonu İzmir'de bağ bozumu konuşuldu." olur.
> - Cevap "bağ yok" olursa bağ bozumu kancası zayıf kalır; gönderi düz bir cumartesi kahvaltısı hatırlatmasına döner.
> - "Hafta sonu" geçen hafta sonunu (10-11 Ekim) kastediyor. Gönderi en geç 13 Ekim'de paylaşılmalı, yoksa ilk cümle yanlış okunur.
> - Kapanış ("hafta sonu planınızı cumartesiye göre yapın") emir kipinde, samimi sese göre biraz sert; yumuşatılabilir.
>
> ## Tarama
> 10 kaynaktan 10 tanesi okundu, son 4 günde 50 madde. Önceki tarama: sirket/radar/ham-2026-10-11.json (bugün 19:42 yerel sürümü; aynı adla üzerine yazıldı, üçüncü sürüm git geçmişinde, commit dce10d8).
>
> Tarama saati: 2026-10-11 19:48 (yerel). İki tarama arası yaklaşık 6,5 dakika (önceki 16:42:02, bu 16:48:30, UTC). Aralık 30 dakikadan kısa olduğu için saatlik artış hesaplanmadı ve `onceki_taramadan_beri_artis` değerlerinden ivme yorumu çıkarılmadı. CZN Burak videolarında artış 0 çıktı: YouTube sayaç gecikmesi. Yeni eklenen elle link (Haber Ege) okundu.
>
> ## 1. Ne yaptılar
> - **Yemek.com · YouTube** · 2026-10-11 16:30 · [Zeytinli Hellimli Çörek](https://www.youtube.com/shorts/ezbygMmCwDU) · 5.226 izlenme, 270 beğeni, saatlik 1.582,6, kanal medyanına oran 0,19 (3,3 saat önce)
> - **Yemek.com · YouTube** · 2026-10-11 11:33 · [Basmati Pirinç Nasıl Pişirilir?](https://www.youtube.com/shorts/e_xeGSE8H-Y) · 15.161 izlenme, 398 beğeni, saatlik 1.837,8, oran 0,54 (8,2 saat önce)
> - **Yemek.com · YouTube** · 2026-10-10 16:30 · [Nohut Unlu Tuzlu Pankek](https://www.youtube.com/shorts/3xYz_j7WyaE) · 28.233 izlenme, 701 beğeni, saatlik 1.034,1, oran 1,0 (27,3 saat önce)
> - **Nefis Yemek Tarifleri · YouTube** · 2026-10-08 14:44 · [Yoğurt Tatlısı Tarifi](https://www.youtube.com/watch?v=kRpV_E4l9js) · 70.020 izlenme, 895 beğeni, saatlik 908,5, oran 1,16 (77,1 saat önce)
> - **Refika'nın Mutfağı · YouTube** · son 4 günde video yok.
> - **Yemek.com · site** · 2026-10-11 08:30 · [11 Ekim 2026 Günün Menüsü](https://yemek.com/11-ekim-2026-gunun-menusu/) · izlenme bilgisi yok
> - **Yemek.com · site** · 2026-10-10 08:30 · [10 Ekim 2026 Günün Menüsü](https://yemek.com/10-ekim-2026-gunun-menusu/) · izlenme bilgisi yok
> - **CZN Burak · YouTube** · 2026-10-11 18:14 · [Dubai Spain Singer Parody](https://www.youtube.com/shorts/NkG_BJOxf5A) · 2.078 izlenme, 83 beğeni, saatlik 1.321,0, oran 0,02 (1,6 saat önce)
> - **CZN Burak · YouTube** · 2026-10-10 13:37 · [Dubai Vs Hasbulla UFC Dagestan](https://www.youtube.com/shorts/gyjejyGWEww) · 233.827 izlenme, 5.292 beğeni, saatlik 7.746,8, oran 2,06 (30,2 saat önce)
> - **CZN Burak · YouTube** · 2026-10-08 14:05 · [Dubai Hoşgeldiniz](https://www.youtube.com/shorts/lSH0N-Nkics) · 18.408 izlenme, 982 beğeni, saatlik 236,9, oran 0,16
> - **Haberler: Urla restoran** · 2026-10-10 15:55 · [Sigara Satışında Yeni Dönem](<Google Haberler bağlantısı>) (Medyabar) · izlenme bilgisi yok; Urla ile ilgisi zayıf
> - **Haberler: Urla gastronomi** · 2026-10-10 13:15 · [Londra gastronomi rotası](<Google Haberler bağlantısı>) (Aposto) · izlenme bilgisi yok
> - **Haberler: Urla gastronomi** · 2026-10-10 09:34 · [Türkiye'nin 4 köyü dünyanın en iyileri arasında](<Google Haberler bağlantısı>) (Sözcü) · izlenme bilgisi yok; aynı konu Yeni Alanya'da da var
> - **Haberler: Urla gastronomi** · 2026-10-08 09:55 · [İncili Gastronomi Rehberi 8. edisyon daveti, Neolokal](<Google Haberler bağlantısı>) (DHA) · izlenme bilgisi yok
> - **Haberler: İzmir gastronomi** · 2026-10-11 14:05 · [GastroAntep'te gastronomide deneyim çağı konuşuldu](<Google Haberler bağlantısı>) (Pembe Pusula) · izlenme bilgisi yok
> - **Haberler: İzmir gastronomi** · 2026-10-11 09:20 · [GastroShow 2026'da sıfır atık](<Google Haberler bağlantısı>) (Haber Ekspres) · izlenme bilgisi yok; GastroShow Demokrat İzmir'de de var
> - **Haberler: İzmir gastronomi** · 2026-10-10 22:32 · [Büyük Efes Bağ Bozumu Festivali bugün başlıyor](<Google Haberler bağlantısı>) (basingazetesi.net) · izlenme bilgisi yok; aynı konu 4 ayrı yayın yerinde
> - **Reddit: r/izmir** · 2026-10-11 17:53 · [Ders çalışma](https://www.reddit.com/r/Izmir/comments/1x3a7dp/ders_çalışma/) · izlenme bilgisi yok
> - **Reddit: r/izmir** · 2026-10-11 17:43 · [f/p sushi yapan yer](https://www.reddit.com/r/Izmir/comments/1x39ypo/fp_sushi_yapan_yer/) · izlenme bilgisi yok; Narlıdere, Balçova çevresinde fiyat/performans sorusu
> - **Reddit: r/izmir** · 2026-10-11 15:09 · [İzmir MUN'ların Noluyor](https://www.reddit.com/r/Izmir/comments/1x36mii/izmir_munların_noluyor_olm/) · izlenme bilgisi yok
> - **Haber Ege: Büyük Efes Bağ Bozumu Festivali** (elle) · 2026-10-10 14:53 · [İzmir'de Büyük Efes Bağ Bozumu Festivali bugün başlıyor](https://www.haberege.com.tr/izmirde-buyuk-efes-bag-bozumu-festivali-bugun-basliyor-1791633184-4310742) · izlenme bilgisi yok. Haberden: 10-11 Ekim, Swissôtel Büyük Efes İzmir Oval Bahçe, bağ üreticileri, gastronomi durakları, müzik. Sahibin notu: "fırsat".
>
> **Tutan:**
> 1. CZN Burak "Dubai Vs Hasbulla UFC Dagestan": 233.827 izlenme, saatlik 7.746,8, kanal medyanına oran 2,06 (30,2 saat önce). Yemek içeriği değil.
> 2. Büyük Efes Bağ Bozumu Festivali: aynı konu 4 ayrı yayın yerinde (basingazetesi.net, Haber Ege, gazetegundem.tr, Yorumla), 28,9 ile 21,3 saat önce; sahibi elle "fırsat" diye ekledi.
> 3. Yemek.com "Çat Kapı 2026" bölümü: 57.589 izlenme, oran 2,04. Ancak 49,8 saat önce, 48 saat sınırının üstünde.
>
> ## 2. Bize hangi açıyla uyar
> - **Bağ Bozumu Festivali:** kitle kartta "hafta sonu gelen İzmirliler". Bu hafta sonu İzmir'de bağ ve gastronomi konuşuldu; Urla'ya hafta sonu gelecek kişiye cumartesi kahvaltısını (09:00-13:00, telefonla rezervasyon) hatırlatmak için bir kanca. Kanal Instagram. Sınır: festival bugün bitiyor, "Urla'nın bağları" bağlantısı kartta yok, sahibine soruldu.
> - **Yemek.com Börülce Piyazı** (22.997 izlenme, oran 0,81, ivme yok): kartta perşembe ve cuma Çeşme'den taze börülce var. Konu örtüşüyor; fırsat değil ama kara tahta fikri.
> - **Yemek.com Girit Ezmesi** (24.765 izlenme, oran 0,88, ivme yok): Ege ve zeytinyağlı mutfağı ilgisi; kartta zeytinyağlılar var. Fırsat değil.
> - **Yeni Asır, "İzmir'de rotayı Tire'ye çevirin"** (izlenme bilgisi yok, tek yayın yeri): İzmirlilere hafta sonu yakın ilçe rotası içeriği okunuyor. Bizim kitleye (hafta sonu gelen İzmirliler) bülten için bir biçim örneği.
> - **CZN Burak Hasbulla videosu:** ivmeli ama yemek, Urla ya da kitlemizle bağı yok. Açı yazılamıyor, fırsat değil.
> - **Afyon Gastronomi Festivali** (Haber Ege, Pembe Pusula) ve **GastroShow 2026** (Haber Ekspres, Demokrat İzmir): ikişer yayın yerinde ama kartta bağlanacak ürün ya da kanal yok.
>
> ## 3. Bugün ne üretmeliyiz
> 1. **Cumartesi kahvaltısı hatırlatması, bağ bozumu kancasıyla** · kanal: Instagram · dayanağı: Büyük Efes Bağ Bozumu Festivali (4 yayın yeri, sahibin notu) · ilk cümle: "Hafta sonu İzmir'de bağ bozumu konuşuldu." Pazartesi 12 Ekim paylaşılır. Taslak 1 aşağıda.
> 2. **Perşembe börülce tahtası** · kanal: lokantadaki kara tahta · dayanağı: Yemek.com Börülce Piyazı (22.997 izlenme) ve karttaki Çeşme börülcesi · ilk cümle: "Perşembe ve cuma Çeşme'den taze börülce var." Perşembe 15 Ekim sabahı yazılır, börülce o hafta da gelirse.
> 3. **Bülten kutusu: "Cumartesi Urla'ya gelenlere"** · kanal: haftalık e-posta bülteni · dayanağı: Yeni Asır İzmir rota haberi · ilk cümle: "Cumartesi Urla'ya geliyorsanız kahvaltı 09:00 ile 13:00 arası, pazar kapalıyız." Bu haftanın bülteninde, öğlen menüsünün altına.
>
> ## Fırsat taslakları
> ### Taslak 1: Instagram · Büyük Efes Bağ Bozumu Festivali
> - Neden şimdi: festival 10-11 Ekim'de yapıldı, konu 4 ayrı yayın yerinde (21,3 ile 28,9 saat önce), sahibi elle "fırsat" işaretledi. Festival bugün bittiği için metin geçmiş zamanla yazıldı, hedef 17 Ekim cumartesi kahvaltısı.
> - Kanal: Instagram
>
> Hafta sonu İzmir'de bağ bozumu konuşuldu. Bizim aklımız da bağlara gitti. [SAHİBE SOR: Urla'daki bağlarla sofranız arasında somut bir bağ var mı? Varsa hangi bağ ya da üretici, hangi malzeme? Yoksa bu iki cümle yerine yalnız ilk cümle kalsın.]
>
> Bu cumartesi kahvaltıda sizi bekliyoruz. Saat 09:00 ile 13:00 arası açığız. [SAHİBE SOR: 17 Ekim'de saat aynı mı?]
>
> Masada neler var: [SAHİBE SOR: kahvaltı menüsü]
>
> Rezervasyonu telefonla alıyoruz: [SAHİBE SOR: telefon numarası]. Pazar günü kapalıyız, hafta sonu planınızı cumartesiye göre yapın.
>
> ## İç notlar (yayınlanmaz)
> - Ham dosya: sirket/radar/ham-2026-10-11.json
> - Denetim raporu: sirket/ciktilar/radar-2026-10-11/denetci/denetim.md
> - Okunamayan kaynaklar: yok.
> - Elle eklenen ve okunamayan linkler: yok. Haber Ege linki okundu; özetten tarih (10-11 Ekim) ve yer (Swissôtel Büyük Efes İzmir, Oval Bahçe) alındı. Sahibin notu fırsat kararında kullanıldı.
> - Taslakta festivalin ve otelin adı geçmiyor: festival bitmiş olacak, otel bizim işletmemiz değil. Fiyat, menü, telefon kartta olmadığı için yazılmadı.
> - Fırsat değerlendirmesi: taze (28,9 saat), ivmeli (4 yayın yeri ve sahibin notu), açı var (hafta sonu gelen İzmirliler, cumartesi kahvaltısı). Zayıf yan: festival bugün bitiyor, metin geçmiş zamana göre yazıldı.
> - Yemek.com Çat Kapı (oran 2,04) 48 saat sınırını 1,8 saat aştığı için fırsat sayılmadı.

## Bu örnek ne gösteriyor

- **Sayı uydurma yok:** izlenme yalnız YouTube maddelerinde var. Haber, site ve link maddelerinin hepsinde "izlenme bilgisi yok" yazıyor.
- **Fırsat kuralı işledi:** CZN Burak'ın videosu taze ve kanal medyanının 2,06 katı, ama şirkete bağlanan bir açısı yok; fırsat sayılmadı. Çat Kapı bölümü 48 saat sınırını 1,8 saat aştığı için sayılmadı.
- **Taslak kartın dışına çıkmadı:** kahvaltı saati, telefonla rezervasyon ve pazar kapalı bilgisi şirket kartından. Menü, telefon numarası ve Urla bağı kartta olmadığı için `[SAHİBE SOR]` oldu ve listenin başına toplandı.
- **Denetçi yalnız taslağa baktı:** raporun geri kalanı iç belge. Denetçi GEÇTİ dedi, zamanlama notunu ("en geç 13 Ekim'de paylaşılmalı") ekledi, metni yeniden yazmadı.
