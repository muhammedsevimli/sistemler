# ÇALIŞTIR · Tek Komut

> Konsept üretmek tek adım. Bu dosyayı açıp komutu kopyala, çalıştır.
> Claude Code `CLAUDE.md` sayesinde marka + ses + kazanan hafıza + format + girdi dosyalarını zaten okuyacak.
> Önce `girdi/` klasöründeki üç dosyayı doldurduğundan emin ol (kazanan reklamlar, müşteri yorumları, beğenilen yorumlar). Nasıl doldurulacağı: `girdi/OKU-yapistirma-rehberi.md`.

## Adım 1 · 50 konsept üret (kopyala)

```
girdi klasöründeki kazanan reklamları, müşteri yorumlarını ve en beğenilen yorumları çözümle ve bana 50 statik reklam konsepti çıkar.

kurallar:
- önce marka + ses + kazanan hafıza + format + girdi dosyalarını okuduğunu tek satırla söyle.
- kazanan reklamları ayrıştır: kanca, vaat, kime, duygu, format, kanıt. müşteri yorumlarından tekrar eden dert, övgü ve itirazı topla. beğenilen yorumlardan viral açıyı çıkar.
- çıkan örüntüyü (hangi kanca tipi tutmuş, ortak vaat, ortak duygu, sık itiraz) tek paragrafta özetle.
- bu mantığı benim markama ve sesime giydirip 50 konsept yaz. her konsept üç satır: kanca, görsel yönergesi, tek satır gerekçe (hangi kazanan reklamdan ya da müşteri cümlesinden geldi).
- 50 konsept gerçekten çeşitli olsun: konsept-format.md rotasyon ızgarasına uy (kanca tipi + segment + duygu). aynı kancayı kelime değiştirip tekrar yazma.
- bende olmayan sayıyı/indirimi/garantiyi uydurma, placeholder bırak. yorum uydurma, gerçek girdiden al.
- 02-ses.md yasak kelimelerini kullanma, em dash kullanma.
- çıktıyı ciktilar/ klasörüne YYYY-AA-GG-tema.md olarak yaz. en sonda "sabah eleme" notu (ilk deneyeceğin 5 konsept) ve linkedin için "siz" notu ver.
```

## Kısa versiyon (acele edince)
```
girdi'deki kazanan reklamları + yorumları çözümle, örüntüyü çıkar, markamın sesiyle 50 çeşitli statik konsept yaz (kanca + görsel + gerekçe), çıktıyı ciktilar'a koy. ses ve format dosyalarına uy, sayı ve yorum uydurma, em dash yok.
```

## Adım 2 · Bir konsept tuttuğunda (kopyala)
Reklamda bir konsept gerçekten işe yaradığında (satış, tık, kaydetme) sistemin hafızasına yaz:
```
<konsept adını yaz> tuttu. kazanan hafızasına bugünün tarihiyle ekle: hangi kanca tipiydi, neden tuttu, sonraki üretimlerde bu açıyı birincil yap. 03-kazanan-hafiza.md dosyasına işle.
```

## Her sabah otomatik istiyorsan
Bu Adım 1 komutunu her sabah kendiliğinden çalıştıran bir görev kurabilirsin (uyurken çalışır, sabah 50 konsept hazır olur). Kurulum adım adım: `otomasyon/KUR-otomasyon.md`. İstemezsen bu dosyadaki komutu ne zaman istersen elle çalıştırırsın; ikisi de aynı çıktıyı verir.

## Not
Girdi ne kadar zenginse örüntü o kadar net çıkar. En az 3-4 kazanan reklam, 8-10 müşteri yorumu, 3-5 beğenilen yorum iyi bir başlangıç. Tek reklamdan ve iki yorumdan güçlü örüntü çıkmaz; sistem yine de üretir ama malzeme zayıf olur.
