# ÇALIŞTIR · İki Komut

> Fikir madenciliği iki adım. Bu dosyayı açıp ilgili komutu kopyala.
> Sen hiçbir şey yapıştırmıyorsun. İlgilendiğin alanı `sen/01-profil.md`'ye bir kere yazarsın; sistem talebi kendisi tarar.
> Claude Code `CLAUDE.md` sayesinde profil + kaynaklar + kriterler + format dosyalarını zaten okuyacak.

## Adım 1 · Talebi tara (kopyala)

```
ilgilendiğim alanın talebini tara.

kurallar:
- sen/01-profil.md'deki alanı ve sen/02-kaynaklar.md'deki arama sorgularını oku.
- web araçlarınla (WebFetch + WebSearch) kaynakları kendin tara:
  - hacker news için https://hn.algolia.com public json'unu WebFetch ile çek (adres https olacak, http 301 döner).
  - reddit için reddit.com/search.rss public rss akışını Bash curl ile çek, açıklayıcı user-agent ver, çıktıyı sinyaller klasörüne xml olarak yaz. reddit'in search.json ucu 403 veriyor, search.rss ucu 200 veriyor; json'u deneme. 403/429 alırsan bir kez daha dene, yine olmazsa WebSearch site:reddit.com ile dolaylı tara ve bunu rapora yaz.
  - genel web ve forumlar (ekşi, sektör forumları, pazar yeri/uygulama yorumları) için WebSearch çalıştır.
- insanların "keşke şu olsa", "buna çözüm arıyorum", "bunun için öderdim", "elle yapıyorum bıktım" dediği gerçek cümleleri aynen çek. her sinyale kaynak + link koy.
- taramada gördüğün mevcut çözüm / rakip isimlerini de not et.
- topladığın sinyalleri sinyaller/toplanan-YYYY-AA-GG.md dosyasına yaz. sonda hangi kaynaktan kaç sinyal çektiğini, hangisine erişemediğini tek satır özetle.
- sinyal uydurma. gerçekten çekemediğin cümleyi yazma, erişilemeyeni "erişilemedi" işaretle.
```

Sistem kaynakları kendisi tarar ve gerçek talep cümlelerini `sinyaller/` içine yazar. Bu klasöre sen elle bir şey koymuyorsun. Nasıl doluyor: `sinyaller/OKU-nasil-doluyor.md`.

## Adım 2 · Puanla ve en iyi 5 fikri çıkar (kopyala)

```
sinyaller klasöründeki tüm talep sinyallerini puanla ve bana en iyi 5 SaaS fikrini çıkar.

kurallar:
- önce profil + kaynaklar + kriterler + format + toplanan sinyaller dosyalarını okuduğunu tek satırla söyle.
- her sinyali tek cümlelik bir SaaS fikrine çevir (kim için, hangi derdi çözen ne). aynı derdi anlatan sinyalleri tek fikirde birleştir.
- her fikri kaç bağımsız sinyalin/kaynağın desteklediğini yaz (sinyal gücü). para dili geçen sinyali işaretle.
- her fikri dört kritere 1-5 puanla: pazar boyutu, fizibilite, rekabet boşluğu, türkiye uyumu. her puanın altına tek satır gerekçe. toplamı 20 üzerinden hesapla.
- taramada rakip çıktıysa rekabet boşluğu satırında adını yaz, "kopyala" deme, ayrışma noktasını yaz.
- profilimdeki alan ve sınırlara göre süz. bilmediğim alandaki fikri en alta düşür ya da "ortak ara" notu koy.
- toplam puana göre sırala, en iyi 5 fikri detay kartıyla yaz. en üsttekine "bu hafta buradan başla" işareti koy.
- fikir uydurma, sadece toplanan sinyale dayan. puanı gerekçesiz şişirme.
- riskli alanı (lisans/regülasyon) işaretle. em dash kullanma, motivasyon dili ve gelir vaadi yok.
- çıktıyı ciktilar klasörüne YYYY-AA-GG-fikir-raporu.md olarak yaz.
```

## Tek komut (acele edince: hem tara hem puanla)

```
ilgilendiğim alanın talebini tara, sonra puanla ve en iyi 5 SaaS fikrini çıkar.
web araçlarınla hacker news, reddit ve web/forumları kendin tara, gerçek talep cümlelerini sinyaller'e yaz, dört kritere puanla, çıktıyı ciktilar'a koy. kriterler ve profil dosyasına uy, sinyal ve fikir uydurma, puanı gerekçelendir.
```

## Not
Ne kadar iyi arama sorgusu verirsen tarama o kadar isabetli olur. Sorgular `sen/02-kaynaklar.md`'de; kendi sektör kelimelerini ekle. Tek sinyalden güçlü fikir çıkmaz; aynı derdi birden çok kaynakta gören fikir güçlü fikirdir. X'i sistem otomatik taramaz (login ister); onun için tek tık arama linki üretir, istersen elle bakarsın.
