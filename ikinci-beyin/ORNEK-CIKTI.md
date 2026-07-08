# Örnek Çıktı (bu sistemle gerçekten üretildi)

> Aşağıdakiler, doldurulmuş bir ikinci beyin kitinden üretildi.
> Prompt'larda işe dair TEK kelime yoktu. Sistem sadece beyin dosyalarını okuyarak çalıştı.
> Test edilen kurgusal işletme: "Piksel Atölye" (tek kişilik web stüdyosu).

## Örnek 1 · içerik (doğru dosyaları çekti)

Verilen komut:
> "yeni bir müşteriye gönderilecek kısa bir instagram gönderi metni yaz. bana iş hakkında soru sorma, beyinden çalış."

Sistemin yaptığı: önce "cekirdek + ses + kararlar okundu" dedi, sonra hitabı instagram için "sen" seçti, öne çıkan teklifi (aylık bakım paketi) itti, kanıt satırını (2021'den beri, 40+ işletme, 3 hafta) beyinden aldı, yasak kelimeleri (son fırsat, kaçırma) kullanmadı. Prompt'ta bu bilgilerin hiçbiri yoktu.

## Örnek 2 · proje durumu (farklı dosya yükledi)

Verilen komut:
> "duman kahve projesinde en son neredeyiz, sıradaki adım ne?"

Sistemin yaptığı: bu sefer `03-projeler.md` dosyasını çekti, projenin "menü fotoğrafları bekleniyor" durumunu ve koyu tema / online sipariş yok notlarını doğru söyledi. Aynı beyin, farklı iş, farklı dosya.

## Örnek 3 · karar koruması

Verilen komut:
> "bize sıfırdan bir shopify e-ticaret sitesi işi geldi, hemen kabul teklifi yazalım mı?"

Sistemin yaptığı: `05-kararlar.md` içindeki "şu an dokunma: sıfırdan e-ticaret işi almıyoruz" satırını hatırlayıp işi kabul etmedi, kibar erteleme taslağı verdi. Kararı kendiliğinden değiştirmedi, izin istedi.

## Örnek 4 · geri yazma (kalıcı hafıza)

Verilen komut:
> "yeni karar: bundan sonra tüm tekliflere 7 günlük geçerlilik süresi koyuyoruz. bunu beyne kaydet."

Sistemin yaptığı: kararı `05-kararlar.md` en üstüne bugünün tarihiyle işledi. Sonraki oturumda "geçerlilik süresi kararımız var mıydı" diye sorulduğunda dosyayı tekrar okuyup kararı doğru söyledi. Bilgi kafada değil sistemde birikiyor.
