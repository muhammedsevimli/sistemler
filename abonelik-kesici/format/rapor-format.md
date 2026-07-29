# Rapor formatı

> Dosya adı: `ciktilar/YYYY-AA-GG-kesme-listesi.md`. Bölüm sırası ve başlıkları sabittir.

---

## Bölüm A · Şu an ne ödüyorsun

`sen/01-araclar.md`'den okunur, hesaplanır.

| Araç | Aylık | Yıllık | Bu araçta gerçekten ne yapıyorsun |
|---|---|---|---|
| | | | |

Altına iki satır: **aylık toplam** ve **yıllık toplam**. Para birimi karışıksa her ikisini de ayrı yaz, kur uydurup birleştirme.

---

## Bölüm B · Araç araç alternatif bulguları

Her araç için bir alt başlık. Taramada bulunan her alternatif ayrı satır.

### B1 · <araç adı>

| Alternatif | Adres | Lisans | Son güncelleme | Docker | Yönetilen sürüm |
|---|---|---|---|---|---|
| | | | | | |

Altına tek paragraf: bu araçta gerçekten yapılan işi hangisi karşılıyor, hangisi karşılamıyor ve neden.

Alternatif bulunamadıysa tek satır: **karşılığı bulunamadı**, aranan sorgular ne, neden bulunamadı.

---

## Bölüm C · Dört kriter puan tablosu

Bulunan bütün alternatifler tek tabloda.

| Araç | Alternatif | Kurulum | Bakım | Maliyet | Veri taşıma | Toplam | Bant |
|---|---|---|---|---|---|---|---|
| | | | | | | /20 | |

Tablonun altında, puanı 3 ve altı olan her hücre için tek satır gerekçe. Yüksek puanlar gerekçe istemez, düşük puanlar ister.

---

## Bölüm D · Kesme listesi

Üç bant, sırayla. Her satırda somut rakam.

### KES · bu hafta
| Araç | Yerine | Aylık kazanç | Yıllık kazanç | İlk adım |
|---|---|---|---|---|

### DENE · paralel çalıştır, hemen iptal etme
| Araç | Yerine | Potansiyel yıllık | Neden hemen değil |
|---|---|---|---|

### DOKUNMA
| Araç | Neden |
|---|---|

---

## Bölüm E · Yıllık fark

Tek tablo:

| | Tutar |
|---|---|
| Şu anki yıllık abonelik gideri | |
| KES bandı uygulanırsa yıllık tasarruf | |
| Eklenen yıllık altyapı gideri (sunucu, alan adı, yedek) | |
| **Net yıllık fark** | |
| Kurulum için gereken tek seferlik saat | |

**Kural:** Net fark hesaplanırken altyapı gideri MUTLAKA düşülür. Brüt tasarrufu net gibi sunma. Kur kullanıldıysa hangi kur ve hangi tarih olduğu tablonun altına yazılır.

---

## Bölüm F · Karşılığı bulunamayanlar

Alternatifi olmayan araçlar ve nedeni. Bu bölüm boş kalabilir, kalırsa "hepsine karşılık bulundu" yaz.

Ayrıca: taramada erişilemeyen kaynak varsa burada listelenir. Uydurma yok, erişilemedi diye işaretlenir.

---

## Bölüm G · Önceki taramayla karşılaştırma

Yalnız `veri/` klasöründe eski tarama varsa yazılır.

| Araç | Önceki fiyat | Şimdiki fiyat | Değişim |
|---|---|---|---|

Zam yapan araçlar işaretlenir. Bir aracın zam geçmişi, kesme kararının en güçlü gerekçesidir.
