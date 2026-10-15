# Kurul

Claude'un kurduğu danışma kurulu. Bir iş kararını beş koltuklu bir kurula sunarsın: Warren Buffett, Jeff Bezos, Elon Musk, Steve Jobs ve Alex Hormozi. Her koltuk kendi beynini okur, kartını yazar, ikinci turda diğerlerine itiraz eder. Sonunda Claude puan tablosunu çıkarır ve YAP / ŞARTLI YAP / YAPMA etiketiyle bir karar taslağı yazar. Son karar senindir.

Koltuklar bu kişilerin herkese açık kaynaklarından (hissedar mektupları, kitaplar, söyleşiler, konuşmalar) derlenmiş simülasyonlardır, kişilerin kendisi değildir.

## Ne işe yarıyor

Tek bir sohbete "şube açayım mı?" diye sorduğunda tek bir ses cevap verir ve çoğu zaman senin duymak istediğine yaklaşır. Kurul aynı soruyu birbirine benzemeyen beş açıdan sınar:

| Koltuk | Sahip olduğu soru |
|---|---|
| Warren Buffett · Sermaye ve risk | Bu karar parayı nasıl kullanıyor, kalıcı kayıp riski var mı, 10 yıl sonra hâlâ mantıklı mı? |
| Jeff Bezos · Müşteri ve sistem | Müşteri bunu gerçekten istiyor mu, bu karar kendi kendine işleyen bir düzen mi yoksa tek seferlik bir çaba mı? |
| Elon Musk · Hız ve mühendislik | Bunu 10 kat hızlı ya da 10 kat ucuz yapmanın yolu var mı, hangi adım gereksiz? |
| Steve Jobs · Ürün ve odak | Bu insanın hayatında neyi değiştiriyor, neye hayır diyoruz? |
| Alex Hormozi · Teklif, fiyat ve satış | İnsanlar buna öder mi, ne kadar, ilk 30 günün parası bir sonraki müşteriyi karşılıyor mu? |

Akış şöyle:

1. **Brief.** Claude kararını tek soruya, seçeneklere (A, B, C, "hiçbir şey yapma") ve başarı ölçütüne çevirir.
2. **Mühür.** Kurulu çağırmadan önce Claude kendi görüşünü yazar ve mühürler. Bu görüş koltuklara gösterilmez.
3. **Birinci tur.** Beş koltuk aynı anda kartını yazar: pozisyon, en güçlü gerekçe (kaynak numarasıyla), en büyük risk, sana sorusu, her seçeneğe puan.
4. **İkinci tur.** Her koltuk diğer kartları okur, en az bir koltuğa adıyla itiraz eder, birinin haklı olduğu yeri kabul eder, son puanını verir.
5. **Karar.** Puanlar ortalanır. Bir koltuk "batırır" dediği seçenek 6,0'ı geçemez. Koltuklar arasında 4 puan ve üstü fark varsa etiket en fazla ŞARTLI olur. Rapor mühürle kurulun farkını da yazar: Claude kurula uymak yerine kurulu denetlemiş olur.

## Kurulum

Gerekenler: [Claude Code](https://claude.com/claude-code) ve canlı izleme sayfası için bilgisayarında Python (çoğu bilgisayarda zaten var).

1. Claude Code'u aç, şu adresi ver ve "bunu benim için indir" de:

```text
github.com/muhammedsevimli/sistemler/tree/main/kurul
```

2. İnen `kurul` klasörünü Claude Code'da aç (klasörün içinde başlat).
3. Sohbete kararını yaz:

```text
kurulu topla: ikinci şubeyi açayım mı?
```

Eksik bilgi varsa Claude en fazla üç soru sorar. Tam kurul birkaç dakika sürer, sonunda sohbette kısa kararı, klasörde tam raporu görürsün.

Elle indirmek istersen: `npx degit muhammedsevimli/sistemler/kurul kurul`

## Odayı canlı izle

Kurul çalışırken ikinci bir pencerede:

```text
python oda/sunucu.py
```

Sonra tarayıcıda http://localhost:4731 adresini aç. Kart geldikçe o koltuk konuşur, baloncukta yazdığı akar, ikinci turda itiraz ve kabul okları çizilir, en sonda karar bandı açılır. Farenle bir koltuğun üstüne gelirsen son sözünü tekrar söyler.

Bitmiş bir oturumu baştan kart kart oynatmak için (ekran kaydı almak istersen): http://localhost:4731/?oynat=1&adim=4 (her kart 4 saniye; klavyede R baştan başlatır, C canlıya döner).

Sayfa yalnız oturum klasörünü okur, hiçbir yere bağlanmaz. İlk açtığında hazır gelen kurgusal örnek oturumu (`oturumlar/ornek-urla-sofrasi/`) gösterir; sen bir kurul topladığında otomatik olarak seninkine geçer.

## Modlar

| Komut | Ne olur |
|---|---|
| `kurulu topla: <karar>` ya da `/kurul <karar>` | Tam kurul: 5 koltuk, 2 tur (10 ajan çalışması) |
| `kurulu topla: <karar> --hizli` | Hızlı kurul: karara göre seçilen 3 koltuk, 1 tur |
| `kurulu topla: <karar> --koltuk buffett,jobs,hormozi` | Koltukları sen seçersin |
| `kurul sor hormozi <soru>` | Tek koltuğa kısa soru, puan yok. Cevap `oturumlar/sorular/` içine düşer |

## Örnek

`oturumlar/ornek-urla-sofrasi/` kurgusal bir işletmenin gerçek bir kurul koşusudur: Urla'da 40 kişilik bir ev yemekleri lokantası, "ikinci şubeyi açayım mı?" sorusu, dört seçenek. Brief, mühürlü görüş, iki turun bütün kartları ve karar raporu içinde. Markadaki bütün rakamlar uydurmadır.

## Klasörler

```text
kurul/
  .claude/skills/kurul/SKILL.md     Başkan'ın akışı ve puan kuralları
  .claude/agents/kurul-<koltuk>.md  beş koltuk
  beyinler/<koltuk>/                sicak, cerceveler, ses, hikayeler, kaynaklar
  beyinler/BEYIN-SABLON.md          yeni koltuk eklemek için şablon
  oturumlar/                        her kurul burada bir klasör açar
  oda/                              canlı izleme sayfası (sunucu.py)
```

Yeni bir koltuk eklemek istersen: `beyinler/BEYIN-SABLON.md` şablonuyla bir beyin klasörü yazdır, bir koltuk dosyasını kopyalayıp adını ve sorusunu değiştir, `SKILL.md` içindeki koltuk listesine ekle.

## Dürüstlük

- Koltuklar kişilerin kendisi değildir. Her kartın son satırı bunu söyler.
- Koltuklar yalnız beyin klasöründeki kaynak numaralı satırları alıntılar (`S3` gibi; her numaranın kaynağı `kaynaklar.md` içinde). Gerisi o koltuğun kendi muhakemesidir. Beyinler kısa tutuldu: koltuk başına yaklaşık 2.300 kelime.
- Kurul karar vermez, karar taslağı yazar. Kurulun çıktısıyla hiçbir yayın, harcama ya da sözleşme otomatik yapılmaz.
- Rakamları sen verirsin. Kurul eksik rakamı uydurmaz, sorar ya da varsayımı açıkça yazar.
- Koltuk büstleri açık lisanslı fotoğraflardan türetilmiş stilize çizimlerdir; lisanslar ve atıflar `oda/portre/KAYNAK.md` içinde. Hormozi'nin açık lisanslı fotoğrafı olmadığı için onun büstü fotoğrafsız, yalnız tarifle çizildi.

## Desteklenen araçlar

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md`, `.claude/skills/` ve `.claude/agents/` |
| Codex, Google Antigravity, Windsurf, Kilo ve 20+ araç | `AGENTS.md` (alt ajan açamayan araçta Başkan koltukları sırayla kendisi oynar) |

---

Bu sistemi **Muhammed Sevimli** kurdu. AI ile gerçek satış ve büyüme sistemleri. Kurarken takılırsan ya da adım adım anlatımlı rehber istersen yaz:

- Web: https://muhammedsevimli.com
- X: https://x.com/_msevimli
- Instagram: https://instagram.com/msevimli_
- Threads: https://threads.com/@msevimli_
- YouTube: https://youtube.com/@msevimli
- E-posta: hey@muhammedsevimli.com

🧩 Claude Code ile inşa edildi.

## Lisans

Kod ve metinler [MIT](LICENSE). Koltuk büstleri kaynak fotoğrafların lisansıyla (CC BY / CC BY-SA, ayrıntı `oda/portre/KAYNAK.md`), yazı tipi SIL Open Font License ile (`oda/fonts/OFL.txt`).
