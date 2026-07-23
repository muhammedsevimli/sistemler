# 01 · Ne satıyorsun (bunu kendi işinle değiştir)

> Bu dosya örnek doldurulmuş haldedir. İçindekileri sil, kendi işini yaz. Ne kadar somut yazarsan fiyat önerisi o kadar isabetli olur.
> Aşağıdaki "Meydan Randevu" kurgusal bir işletmedir, sistemin testinde kullanıldı. Gerçek bir marka değildir.

## Ürün / hizmet
**Meydan Randevu** · küçük yerel işletmeler (kuaför, güzellik salonu, diş kliniği, veteriner) için online randevu sayfası + otomatik SMS ve e-posta hatırlatma.

Tek cümlede: müşteri online randevu alıyor, sistem randevudan önce otomatik hatırlatma gönderiyor, işletme gelmeyen müşteri yüzünden boş kalan saatleri azaltıyor.

## Kime satıyorsun
- Türkiye'de, tek şubeli, 1 ile 8 arası personeli olan yerel işletmeler.
- Karar veren kişi genelde işletme sahibinin kendisi. Yazılımcı değil, telefondan yönetiyor.
- İkincil hedef: 2 ile 5 şubesi olan küçük zincirler.

## Şu an nasıl fiyatlıyorsun
Tek fiyat, aylık 400 TL. Nasıl bulundu: "aylık 500 çok gelir, 300 ucuz durur" diye kafadan. Paket yok, herkes aynı şeyi alıyor.

## Maliyet yapın (fiyatın altına inemeyeceğin taban)
- **Sabit maliyet:** sunucu ve altyapı, aylık yaklaşık 900 TL toplam (müşteri sayısından bağımsız).
- **Değişken maliyet:** SMS. Her gönderilen SMS gerçek para. Bu yüzden hiçbir pakette "sınırsız SMS" olamaz.
- **E-posta:** kullanılan hacimde maliyeti ihmal edilebilir.
- **Emek:** kurulum desteği müşteri başına yaklaşık 1 saat, ilk ay.

> Kendi dosyanı doldururken maliyetini rakamla yaz. Sistem taban fiyatı buradan okuyor. Yazmazsan "maliyet bilgisi verilmedi" diye işaretler ve taban kontrolü yapmaz.

## Kapasite
Solo operatör. Aynı anda destek verebileceğim müşteri sayısı sınırlı, bu yüzden çok ucuz ve çok kalabalık bir taban benim için taşınabilir değil.

## Neyi YAPMIYORUM (ne değilsin listesi · sistem buna uyar)
- Muhasebe, fatura, e-fatura yapmıyorum.
- Stok ve kasa takibi yapmıyorum.
- Ödeme kuruluşu değilim, para tahsilatını üçüncü taraf ödeme sağlayıcısıyla yapıyorum.
- Yerinde kurulum ve donanım satmıyorum.
- Çağrı merkezi hizmeti vermiyorum.

> Sistem bu listedeki hiçbir şeyi paketlere koymaz. Kendi listeni yaz, aksi halde sistem sunmadığın bir şeyi paketlemeye çalışır.

## Sattığın pazar
Türkiye. Yurt dışı müşteri şu an yok, ileride olabilir.

## Fiyat kararında kırmızı çizgin
- Fiyatı ayda 3 defa değiştirmek istemiyorum, koyduğum yapı en az 6 ay dursun.
- Ücretsiz sonsuz plan istemiyorum, destek yükünü taşıyamam.
- Sınırsız SMS vaadi vermek istemiyorum.
