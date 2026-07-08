# Nasıl Görünür (örnek veriyle)

> `satis-crm.html`'e çift tıkladığında sistem kurgusal örnek veriyle açılır: 6 müşteri, 3 temsilci.
> Aşağıdaki tablolar o örnek panoyu anlatıyor. Hepsi kurgusaldır, gerçek müşteri ya da veri değildir.

## Bugün aranacaklar (sabah listesi)

Takip günü bugüne (ya da geçmişe) gelen müşteriler kendiliğinden burada toplanır. Gecikmiş olanlar en üstte, kırmızı etiketle.

| Müşteri | Temsilci | Aşama | Sıradaki adım |
|---|---|---|---|
| Kaya Mobilya | Elif Y. | Teklif | Teklifi onayladı mı diye ara |
| Aydın Petrol | Burak T. | Takipte | Bütçe onayını sor |
| Tuna Lojistik | Deniz K. | Yeni | İlk arama |

## Müşteri kartı (tıklayınca açılır)

```text
Kaya Mobilya · Kaya Mobilya Ltd. · 0555 000 00 01
Temsilci: Elif Y.        Aşama: Teklif
son:      teklifi yönetime iletti, cuma dönüş sözü verdi
sıradaki: teklifi onayladı mı diye ara

--- görüşme geçmişi ---
01.07  web sitesinden ulaştı, 40 kişilik ofis için sandalye istiyor   (görüşüldü)
06.07  teklifi gönderdim, yönetime iletecek, cuma dönecek             (görüşüldü)
```

## Görüşme notu düşmek (sistemin kalbi)

Temsilci görüşmeden sonra iki satır yazar, sonucu ve tekrar aranma zamanını seçer. Gerisini sistem yapar.

```text
Görüşme notu:  teklifi beğendi, patronuna soracak, çarşamba dönecek
Sonuç:         [ Görüşüldü ]  ( Ulaşılamadı )  ( Satış )
Tekrar ara:    ( bugün )  ( yarın )  [ 2-3 gün ]  ( 1-2 hafta )  ( gerekmez )
                                      → sistem takip gününü "bugün + 2" yapar
```

Not kaydedilince: tarih otomatik basılır, takip günü kurulur, "son konuşulan" güncellenir, o gün gelince müşteri sabah listesine çıkar. Temsilci tarih hesaplamaz.

## Ay sonu paneli (müdür görünümü)

Ay seçilir, tablo her temsilci için o ayın özetini satışa göre sıralı gösterir.

| Temsilci | Görüşme | Satış | Ulaşılamadı | Dönüşüm |
|---|---|---|---|---|
| Elif Y. | 5 | 1 | 0 | %20 |
| Burak T. | 4 | 1 | 1 | %25 |
| Deniz K. | 2 | 0 | 1 | %0 |

Müdür "bugün kim ne yaptı" diye tek tek sormaz, ekranda görür.

---

Bu örnek veriyi silip kendi müşterilerinle başlamak için: **Ayarlar → Örnek veriyi temizle**.
