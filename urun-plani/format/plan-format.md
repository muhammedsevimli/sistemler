# Plan Formatı · FAZ 2'nin Üç Çıktısı

> Sistem her koşuda `ciktilar/` klasörüne ÜÇ dosya yazar. Üçü de bu yapıya uyar.
> Ortak kural: em dash yok, motivasyon dili yok, "aynısını kur" yok, gerekçesiz satır yok.

---

# DOSYA 1 · `YYYY-AA-GG-urun-plani.md`

## 1. Künye
Hedef URL, tarama tarihi, kaç sayfa okundu, kaç sayfaya erişilemedi. Tek paragraf.

## 2. Bu ürün ne yapıyor, kime yapıyor
İki paragrafı geçmez. Ürünün mantığı, süslemeden.

## 3. Özellik kovaları
Tek tablo, her satırda gerekçe. Kovalar: ÇEKİRDEK (v1), DESTEK (v1.5), SÜS (sonra), GİRME.

| Özellik | Kova | Gerekçe (tek cümle) |
|---|---|---|

ÇEKİRDEK en fazla 5 ile 7 satır. Fazlaysa kes.

## 4. Nişe uyarlama tablosu (boş bırakılamaz)

**Hedefte var, senin nişinde gereksiz**

| Özellik | Neden gereksiz |
|---|---|

**Hedefte yok, senin nişinde şart**

| İhtiyaç | Neden şart | Nereden çıktı (profil satırı) |
|---|---|---|

## 5. Kullanıcı akışı
- Hedef üründe: kayıt, ilk değer anı, tekrar gelme sebebi. Kaç adımda ilk değer.
- Senin sürümünde: aynı üç halka, ama senin kullanıcına göre. İlk değer anını kaç adıma indirdiğini yaz ve nasıl indirdiğini tek cümleyle söyle.

## 6. Sen neyi farklı yapıyorsun (ayrışma, boş kalamaz)
En az bir somut ayrışma. "Daha iyi tasarım" sayılmaz.

## 7. v1 kapsamı ve kurulum sırası
Numaralı liste. Her adım tek iş. Her adımın sonunda "bitince şunu görmelisin" satırı.
Sıra kuralı: önce veri, sonra ilk değer anına giden en kısa yol, sonra kalıcılık, sonra tekrar gelme sebebi, en son parlatma.

## 8. v1'e girmeyenler ve nedeni
Kısa liste. Her satırda tek cümle neden. Bu bölüm planın en değerli yeridir, atlanmaz.

## 9. Fiyat mantığı
- Hedefte fiyat neye göre artıyor (kanıtla). Rakam yoksa "fiyat bilgisi alınamadı".
- Bu ölçü senin nişinde çalışır mı, çalışmazsa neden.
- Senin nişine uyan ölçü önerisi, tek cümle gerekçeyle.

## 10. Kopyalanmaz listesi
Marka, logo, tasarım, metin, telifli içerik, lisanslı kod. Lisans varsa adı aynen ve tek cümle anlamı.

## 11. Belirsizler ve riskler
Siteden anlaşılmayanlar. İzin/uyum isteyen parçalar. Zayıf varsayımlar.

---

# DOSYA 2 · `YYYY-AA-GG-veri-semasi.md`

## 0. Uyarı satırı (zorunlu, en üstte)
Bu şema ürünün gerçek veritabanı değildir. Herkese açık sayfalardan yapılmış bir çıkarımdır.

## 1. Hedef üründen çıkarılan şema
Her tablo için:

### `tablo_adi`
- **Neden var:** tek cümle.
- **Dayanak:** hangi sayfada hangi ifade (URL).
- **Alanlar:** madde madde, her alan tek kelime ya da kısa ad.
- **İlişki:** hangi tabloya bağlı.

Dayanağı olmayan tablo yazılmaz.

## 2. Senin v1 şeman (sadeleşmiş)
Aynı yapı, ama az tablo. Kural: v1 şeması 6 tabloyu geçmemeli. Geçiyorsa v1 şişmiştir, birleştir.
Her tablonun altına "hedef şemadan neyi attım ve neden" tek cümle.

## 3. İlişki haritası (tek blok, sade metin)
```text
tablo_a  1 ile n  tablo_b
tablo_b  1 ile n  tablo_c
```

## 4. Şemayı bozacak sorular
İlerde canını yakacak kararlar. Örnek: veri ne kadar saklanacak, silme nasıl olacak, aynı kayıt iki kere gelirse ne olacak.

---

# DOSYA 3 · `YYYY-AA-GG-promptlar.md`

Sırayla Claude Code'a yapıştırılacak promptlar. Kurallar:

1. **Her prompt tek iş yapar.** İki iş varsa ikiye böl.
2. **Zincir kuralı:** her prompt bir öncekinin ÇIKTISINI girdi alır ve ilk cümlesinde bunu söyler ("önceki adımda kurduğun şu şeyin üstüne...").
3. **Kabul satırı zorunlu:** her promptun sonunda "bitince şunu görmelisin" diye tek satır. Görmediysen bir sonrakine geçme.
4. **Prompt sayısı 6 ile 10 arası.** Fazlaysa v1 şişmiştir, plan dosyasına geri dön.
5. **Promptlar kod içermez.** Ne istediğini düz Türkçe anlatır. Teknoloji seçimini prompt içinde dayatma, "basit ve tek dosyada tutulabilir olsun" gibi sınır koy.
6. **İlk prompt her zaman şemayı kurar.** Son prompt her zaman yayına alma ve ilk kullanıcıya gösterme adımıdır.
7. Her promptun başlığında ne yaptığı yazar ve tahmini süre olur.

Şablon:

```text
## Prompt N · <ne yapıyor> (<tahmini süre>)

<düz Türkçe talimat. önceki adıma bağlanan ilk cümle. tek iş. sınırlar.>

bitince şunu görmelisin: <tek satır kabul kriteri>
```

Dosyanın sonunda tek bölüm: **Takılırsan** · en sık takılan üç yer ve ne yapılacağı.
