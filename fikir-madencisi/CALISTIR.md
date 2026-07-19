# ÇALIŞTIR · İki Komut

> Fikir madenciliği iki adım. Bu dosyayı açıp ilgili komutu kopyala, `<...>` yerlerini kendine göre doldur.
> Claude Code `CLAUDE.md` sayesinde profil + kaynaklar + kriterler + format dosyalarını zaten okuyacak.

## Adım 1 · Nereye bakacağını çıkar (kopyala)

```
kaynak listemden nereye bakacağımı çıkar.

kurallar:
- 02-kaynaklar.md dosyasındaki her kaynak için ayrı yön ver.
- X aramaları için hazır arama linki üret (f=live olacak şekilde).
- forum, pazar yeri ve yorum kaynakları için tek satırla ne arayacağımı söyle.
- en sonda tek satırla ne yapmam gerektiğini söyle (bu yerlere bak, gördüğüm gerçek talep cümlelerini yapıştır).
```

Sistem sana her kaynak için bir yön verir. X linklerine tıkla, forum/pazar yeri yerlerine bak. Gördüğün gerçek talep ve şikayet cümlelerini (insanların "keşke", "arıyorum", "nefret ediyorum", "bunun için öderdim" dediği yerler) `sinyaller/` klasöründe kaynak adıyla bir dosyaya yapıştır. Nasıl yapıştıracağın: `sinyaller/OKU-yapistirma-rehberi.md`.

## Adım 2 · Puanla ve en iyi 5 fikri çıkar (kopyala)

```
sinyaller klasöründeki tüm talep sinyallerini puanla ve bana en iyi 5 SaaS fikrini çıkar.

kurallar:
- önce profil + kaynaklar + kriterler + format + ham sinyaller dosyalarını okuduğunu tek satırla söyle.
- her sinyali tek cümlelik bir SaaS fikrine çevir (kim için, hangi derdi çözen ne). aynı derdi anlatan sinyalleri tek fikirde birleştir.
- her fikri kaç bağımsız sinyalin desteklediğini yaz (sinyal gücü). para dili geçen sinyali işaretle.
- her fikri dört kritere 1-5 puanla: pazar boyutu, fizibilite, rekabet boşluğu, türkiye uyumu. her puanın altına tek satır gerekçe. toplamı 20 üzerinden hesapla.
- profilimdeki alan ve sınırlara göre süz. bilmediğim alandaki fikri en alta düşür ya da "ortak ara" notu koy.
- toplam puana göre sırala, en iyi 5 fikri detay kartıyla yaz. en üsttekine "bu hafta buradan başla" işareti koy.
- fikir uydurma, sadece yapıştırdığım sinyale dayan. puanı gerekçesiz şişirme.
- riskli alanı (lisans/regülasyon) işaretle. em dash kullanma, motivasyon dili ve gelir vaadi yok.
- çıktıyı ciktilar klasörüne YYYY-AA-GG-fikir-raporu.md olarak yaz.
```

## Kısa versiyon (acele edince)

```
sinyaller'deki talebi puanla, dört kritere göre en iyi 5 fikri çıkar, çıktıyı ciktilar'a koy. kriterler ve profil dosyasına uy, fikir uydurma, puanı gerekçelendir.
```

## Not
Ne kadar çok gerçek sinyal yapıştırırsan puanlama o kadar isabetli olur. En az 3 kaynak, kaynak başına birkaç talep cümlesi iyi bir başlangıç. Tek sinyalden güçlü fikir çıkmaz; aynı derdi birden çok yerde gören fikir güçlü fikirdir.
