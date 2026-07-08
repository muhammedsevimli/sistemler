# İkinci Beyin · Otomatik Bağlam Yükleme Kuralı

> Bu dosya, bu klasörde açtığın her Claude Code oturumunun BAŞINDA otomatik okunur.
> Sen hiçbir şey yapmıyorsun. Claude Code bu klasörde çalışırken bu dosyayı kendiliğinden yükler.
> Amaç: işinin hafızasını (projeler, kararlar, kaynaklar, kişiler) bir daha asla baştan anlatmamak.

## Her işten önce şu iki dosyayı MUTLAKA oku
1. `beyin/00-indeks.md`: beyinde ne var, hangi dosyada ne yazıyor. Haritan bu.
2. `beyin/01-cekirdek.md`: kim, ne yapıyoruz, şu an ne öncelik. Her işte lazım.

Bu iki dosya küçük ve her zaman okunur. Gerisini göreve göre yüklersin (aşağıdaki tablo).

## Göreve göre bağlam yükle (hepsini değil, gerekeni)
Beyin büyüdükçe her şeyi okumak yerine işe uygun dosyaları çek. `00-indeks.md` sana hangi dosyanın hangi konuyu tuttuğunu söyler. Kural şu:

| İş türü | Ek olarak oku |
|---|---|
| İçerik / mail / teklif yazma | `beyin/02-ses.md`, `beyin/05-kararlar.md` |
| Bir proje üzerinde çalışma | `beyin/03-projeler.md`, ilgili proje için `05-kararlar.md` |
| Müşteri / kişiyle ilgili iş | `beyin/04-kisiler.md` |
| Bir aracı / kaynağı kullanma | `beyin/06-kaynaklar.md` |
| Karar verme / "geçen sefer ne demiştik" | `beyin/05-kararlar.md` |

Emin değilsen `00-indeks.md` içindeki eşleştirmeye bak. Gereksiz dosyayı yükleme, bağlamı temiz tut.

## Üretim kuralları
- İş yaparken önce ilgili dosyaları okuduğunu tek satırla söyle (örn. "cekirdek + projeler + kararlar okundu"). Böylece hafızadan çalıştığın belli olur.
- `01-cekirdek.md` içindeki "ne DEĞİLİZ" satırlarına asla ters düşme.
- `05-kararlar.md` içindeki "şu an DOKUNMA" listesindeki konulara girme.
- Metin üretiyorsan `02-ses.md` tonuna uy, yasak kelimeleri kullanma.
- Bilmediğin bir şeyi uydurma. Beyinde yoksa "beyinde bu yok, eklememi ister misin" de.

## Yeni bilgi çıkarsa geri yaz (write-back)
Çalışırken yeni bir gerçek, karar, kişi ya da kaynak netleşirse ilgili dosyaya işle:
- yeni karar -> `05-kararlar.md` en üstüne tarih atarak.
- yeni proje / proje durumu değişimi -> `03-projeler.md`.
- yeni kişi / müşteri / iş ortağı -> `04-kisiler.md`.
- yeni araç / link / şablon -> `06-kaynaklar.md`.
- yeni dosya eklediysen `00-indeks.md` haritasına bir satır ekle.

Her write-back'ten sonra tek satır özet ver: "kararlara şu eklendi". Böylece beyin her oturumda büyür.

## Haftalık döngü
Her hafta `HAFTALIK-DONGU.md` dosyasındaki 5 dakikalık ritüeli çalıştır. Beyin güncel kalır, eskiyen bilgi arşive iner, indeks doğru kalır.
