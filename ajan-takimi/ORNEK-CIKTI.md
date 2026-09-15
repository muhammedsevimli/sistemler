# Örnek çıktı

> Bu dosya `veri/ORNEK-VERI.md` içindeki **kurgusal** veriyle bir raporun nasıl göründüğünü gösterir. Kurgusal veri, kurgusal sonuç. Ölçülmüş bir koşu kaydı değil.
>
> Gerçek koşu kaydı ve gerçek rakamlar `TEST-SONUCU.md` içinde.

Bu örneği bilerek gerçek koşudan farklı bir sonuçla kurduk. Sistem tek bir cevaba kurulmuş olsaydı her veride aynı rolü ayakta bırakırdı. Burada ayakta kalan rol başka.

---

# Lider raporu · kısa video serisi · örnek

Soru: Bölüm 7 neden 42.300 görüntüleme aldı da Bölüm 6 4.900'de kaldı.
Koşu: 5 ajan, 2 tur, paralel alt-ajan sürümü. Girdi: `veri/ORNEK-VERI.md`.

| Rol | Teori | Tur 1 kanıtı | Tur 2 kararı |
|---|---|---|---|
| Pazarlamacı | Giriş biçimi yaydı | Telefon girişli iki bölüm 42.300 ve 39.700, kameraya konuşan bölüm 4.900 | **AYAKTA** |
| Editör | Kurgu yaydı | Miks -16,2 LUFS, 24 kesme, altyazı kaçırma 0 | **ELENDİ** |
| Şüpheci | Mevcut kitle yaydı | 8.400 takipçi, 520 paylaşım | **ELENDİ** |
| Psikolog | Sahiplenme davranışı yaydı | Kaydetme 1.460, beğeninin 2,28 katı; yorum 1.180 | **ELENDİ** |
| Matematikçi | hakem | her teoriyi rakamla sındı | Pazarlamacı ayakta |

**Ayakta kalan:** giriş biçimi. Aynı giriş biçimini kullanan iki bölüm 42.300 ve 39.700 görüntüleme aldı, kameraya konuşan bölüm 4.900'de kaldı. Erişim farkı 8,6 kat ve giriş biçimi bu farkla örtüşen tek değişken.

**Dürüstlük notu:** Psikolog'un okuduğu davranış gerçek, ama erişimi açıklamıyor. Bölüm 4 zayıf niyet sinyalleriyle (kaydetme beğeninin 0,58 katı, kaydetme ve yorum toplam etkileşimin %38,3'ü) 39.700 görüntülemeye ulaştı. Aynı sinyaller Bölüm 7'de yeni takibi açıklıyor (710 ile 180), erişimi değil. İki bölüm farkı yalnız iki karşılaştırmaya dayanıyor, üç veri noktası az.

---

## Tur 2 dosyalarından

**`round2_editor.md`**

> ELENDİ
>
> Üç bölümün yapım ölçüleri neredeyse eşit: miks -16,0 ile -16,2 LUFS arasında, müzik ayrımı 20,5 ile 21,0 LU, altyazı kaçırma ve tam siyah kare üçünde de 0, kesme sayısı 22 ile 26 arasında. Ortalama izlenme süresi de aynı bantta: 18,9, 19,4 ve 20,1 saniye. Sabit kalan bir değişken 8,6 katlık erişim farkını üretemez. Kurgu tavanı korudu, farkı üretmedi.

**`round2_supheci.md`**

> ELENDİ
>
> Bölüm 7'de takipçi olan tekil izleyici 33.800 × 0,076 ≈ 2.569, yani takipçi tabanının (8.400) yaklaşık üçte biri. Bu kitlenin 33.800 tekil izleyiciyi taşıması için kişi başına 13 izleyici getirmesi gerekirdi, paylaşım toplamı ise 520. Bölüm 6'da takipçi tekil izleyici 4.150 × 0,419 ≈ 1.739, benzer bir taban, ama sonuç 4.900. Taban sabitken sonuç değişmiş.

**`round2_psikolog.md`**

> ELENDİ
>
> Bölüm 4 beni kesiyor. Kaydetme 340, beğeni 590, yani oran 0,58. Kaydetme ve yorum toplam etkileşimin yalnız %38,3'ü. Buna rağmen 39.700 görüntüleme almış, Bölüm 7'nin 42.300'üne yakın. Sahiplenme sinyali zayıfken erişim güçlü kalıyorsa erişimi o sinyal taşımıyor. Okuduğum davranış yeni takibi açıklıyor (710 ile 180), yayılmayı değil.

**`round2_matematikci.md` (hakem kararı)**

> **PAZARLAMACI: AYAKTA.** Telefon girişli iki bölüm 42.300 ve 39.700, kameraya konuşan bölüm 4.900. İki gözlem az, ama giriş biçimi erişim farkıyla örtüşen tek değişken ve çürüten rakam yok.
>
> **EDİTÖR: ELENDİ.** Üç bölümde yapım ölçüleri aynı bantta, izlenme süresi 18,9 ile 20,1 saniye. Sabit değişken 8,6 katı açıklamaz.
>
> **ŞÜPHECİ: ELENDİ.** Bölüm 7 takipçi tekil ≈ 2.569, Bölüm 6 ≈ 1.739. Benzer taban, 8,6 kat fark.
>
> **PSİKOLOG: ELENDİ.** Bölüm 4 kaydetme/beğeni 0,58 ve niyet payı %38,3 iken 39.700 aldı. Sinyal zayıfken erişim güçlü. Not: Bölüm 7'nin yeni takip rakamı (710) bu sinyalle uyumlu, ama soru erişim sorusuydu.
>
> **Veri sınırı:** üç bölüm var, dördüncü bir karşılaştırma yok. Giriş biçimi ile konu ekseni Bölüm 6'da birlikte değişiyor, tam izole değil.
