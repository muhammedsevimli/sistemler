# Rapor formatı

> Her denetim raporu bu yapıda yazılır. Bölüm sırası ve başlıkları sabittir.
> Dosya adı: `ciktilar/YYYY-AA-GG-<sayfa-adi>-denetim.md`

---

## Bölüm A · Envanter

Ölçmeden önce sayılan şeyler. Kısa tablo:

| Ne | Kaç |
|---|---|
| Ayrı yazı boyutu | |
| Ayrı yazı kalınlığı | |
| Ayrı renk (nötrler hariç) | |
| Buton (birincil / ikincil) | |
| Bölüm | |
| İkon | |
| Görsel | |

Altına tek satır: hangi görüntüler denetlendi, sayfa adresi verilmiş mi (verilmişse tarayıcıyla doğrulandı mı).

---

## Bölüm B · Sekiz başlık ölçüm tablosu

Sekiz başlığın hepsi geçilir. Sorun bulunmayan başlığa "temiz" yazılır, satır atlanmaz.

| # | Başlık | Şu an ne | Olması gereken | Önem |
|---|---|---|---|---|
| 1 | Yazı hiyerarşisi | | | |
| 2 | Satır uzunluğu ve satır aralığı | | | |
| 3 | Boşluk ritmi | | | |
| 4 | Renk ve kontrast | | | |
| 5 | Gölge, kenarlık, köşe yarıçapı | | | |
| 6 | Buton ve tıklanabilir öğeler | | | |
| 7 | Hizalama ve ızgara | | | |
| 8 | Görsel ve ikon tutarlılığı | | | |

---

## Bölüm C · Bulgular, önem sırasına dizili

Her bulgu için üç satır. Gerekçesiz bulgu yazılmaz.

### C1 · [YÜKSEK] Bulgu başlığı
- **Şu an:** ölçülen değer ya da gözlenen durum. Ölçüm yaklaşıksa "yaklaşık" yaz.
- **Olması gereken:** kabul aralığı, `format/olcutler.md`'deki hangi başlıktan geldiği.
- **Neden:** bu fark okuyucuda ne yapıyor. Tek cümle, moda gerekçesi yok.

(Bulgular YÜKSEK, sonra ORTA, sonra DÜŞÜK sırasıyla dizilir. Numaralandırma C1, C2, C3 diye devam eder.)

---

## Bölüm D · Düzeltme talimatı (yapıştırılabilir)

> Bu bölüm raporun taşıyıcı parçasıdır. Tek bir kod bloğu içinde yazılır, açıklama cümlesi bloğun İÇİNE girmez.
> Kullanıcı bu bloğu olduğu gibi kopyalayıp sayfayı hangi araçla kurduysa ona yapıştırır: Claude Code, Codex, Lovable, v0, Framer, Cursor, fark etmez.

Blok şu iskeletle yazılır:

```text
Aşağıdaki tasarım düzeltmelerini bu sayfaya uygula. Maddeleri sırayla, tek tek uygula.
Sayfanın metnini, bölüm sırasını ve içeriğini DEĞİŞTİRME. Yalnız görsel yürütmeye dokun.
Marka renkleri ve yazı tipleri sabit, onlara dokunma.

1. [YÜKSEK] <ne yapılacak, ölçüyle>
   Şu an: <ölçülen>
   Yap: <somut değer ya da kural>

2. [YÜKSEK] <...>
   Şu an: <...>
   Yap: <...>

3. [ORTA] <...>
   ...

Uyguladıktan sonra değiştirdiğin her maddeyi tek satırda listele.
Emin olmadığın bir madde varsa uygulamadan önce sor.
```

Kurallar:
- Her madde **tek bir işe** dokunur. "Tipografiyi düzelt" değil, "gövde kapsayıcısına `max-width: 65ch` ver" gibi.
- Her maddede önem etiketi var, sıralama YÜKSEK'ten başlar.
- Somut değer verilir. "Daha fazla boşluk bırak" yasak, "bölüm arası boşluğu 96px yap" doğru.
- Marka koruma satırı blokta her zaman durur.
- Blok içine ölçüm gerekçesi yazılmaz, gerekçe Bölüm C'de kalır. Blok kısa ve uygulanabilir olacak.

---

## Bölüm E · Bu görüntüden ölçülemeyenler

Ekran görüntüsü bazı şeyleri göstermez. Denetim bunları uydurmaz, listeler:

- Fareyle üstüne gelince ve tıklayınca ne oluyor
- Odak halkası (klavyeyle gezinme) var mı
- Sayfa ne kadar sürede açılıyor
- Animasyon ve geçişler
- Karanlık tema
- Verilmeyen ekran boyutlarındaki davranış (yalnız masaüstü görüntüsü geldiyse mobil)

Bunlardan hangisinin denetlenemediğini yaz ve gerekiyorsa "şu ekran görüntüsünü de eklersen bakarım" diye tek satır not düş.

---

## Bölüm F · Önceki denetimle karşılaştırma

Yalnız aynı sayfa daha önce denetlendiyse yazılır. `ciktilar/` içindeki eski rapor okunur.

| Önceki bulgu | Durum |
|---|---|
| | düzelmiş / düzelmemiş / kısmen |

Tekrar eden bir hata varsa `sen/01-marka.md` en altındaki "tekrar eden hatalarım" bölümüne tarih atılarak eklenir.
