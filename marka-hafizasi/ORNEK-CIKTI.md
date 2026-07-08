# Örnek Çıktı (bu sistemle gerçekten üretildi)

> Aşağıdaki başlık, doldurulmuş bir marka hafızası kitinden üretildi.
> Prompt'ta markaya dair TEK kelime yoktu. Sistem sadece 3 hafıza dosyasını okuyarak yazdı.
> Test edilen kurgusal marka: "Urla Sofrası" (butik zeytinyağı).

## Verilen komut
> "bu haftaki ürün için tek bir instagram başlığı yaz. bana marka hakkında soru sorma, hafızadan çalış."

## Sistemin ürettiği
> yeni hasat geldi, bu yılın yağı biraz daha yoğun. urla'nın köylerinden doğrudan sofraya. qr kodla hangi hasattan geldiğini gör.

## Neden bu doğru çıktı
- "yeni hasat" ön satışını öne çıkardı çünkü `03-kararlar.md` bu ayın önceliğini söylüyordu.
- "sofra", "hasat", "köy" kelimeleri `02-ses.md` sözlüğünden geldi.
- QR kanıtı `01-marka-kimlik.md` ayrışma satırından geldi.
- "kaçırma" kelimesini ve ünlemi kullanmadı çünkü ses dosyasında yasaklıydı.

Prompt'a hiç marka bilgisi yazılmadı. Hepsi hafızadan geldi.
