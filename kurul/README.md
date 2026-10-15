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

Gereken tek şey Claude masaüstü uygulaması. ChatGPT kullanıyorsan aynı adımları Codex'te yaparsın.

1. Claude masaüstü uygulamasını aç, Code sekmesinde yeni bir sohbet başlat. Şu adresi yapıştır ve "bunu benim için indir ve bu klasörde çalış" de:

```text
github.com/muhammedsevimli/sistemler/tree/main/kurul
```

Gerisini Claude halleder. Bir şey kurması gerekirse sana sorar, sen onaylarsın.

2. Kararını yaz:

```text
kurulu topla: ikinci şubeyi açayım mı?
```

Eksik bilgi varsa Claude en fazla üç soru sorar, sonra kurulu toplar. Birkaç dakika sürer. Sonunda kısa kararı sohbette görürsün, tam rapor klasörde kalır.

3. Odayı canlı izlemek istersen aynı sohbete yaz:

```text
odayı aç
```

Claude sayfayı başlatır ve sana tıklayacağın adresi verir. Kart geldikçe o koltuk konuşur, baloncukta yazdığı akar, ikinci turda itiraz ve kabul okları çizilir, en sonda karar bandı açılır. Farenle bir koltuğun üstüne gelirsen son sözünü tekrar söyler.

Bitmiş bir oturumu baştan kart kart izlemek istersen (ekran kaydı almak için) "odayı baştan oynat" yaz. Her kart 4 saniye ekranda kalır; klavyede R baştan başlatır, C canlıya döner.

Sayfa yalnız oturum klasörünü okur, hiçbir yere bağlanmaz. İlk açtığında hazır gelen kurgusal örnek oturumu gösterir; sen bir kurul topladığında kendiliğinden seninkine geçer.

## Modlar

Hepsi sohbete yazdığın düz cümleler:

| Ne yazarsın | Ne olur |
|---|---|
| `kurulu topla: <karar>` | Tam kurul: 5 koltuk, 2 tur |
| `hızlı kurul topla: <karar>` | Hızlı kurul: karara göre seçilen 3 koltuk, 1 tur |
| `kurulu topla: <karar>, koltuklar Buffett, Jobs, Hormozi olsun` | Koltukları sen seçersin |
| `kurul sor hormozi: <soru>` | Tek koltuğa kısa soru, puan yok. Cevap `oturumlar/sorular/` içine düşer |

## Örnek

`oturumlar/ornek-urla-sofrasi/` kurgusal bir işletmenin gerçek bir kurul koşusudur: Urla'da 40 kişilik bir ev yemekleri lokantası, "ikinci şubeyi açayım mı?" sorusu, dört seçenek. Brief, mühürlü görüş, iki turun bütün kartları ve karar raporu içinde. Markadaki bütün rakamlar uydurmadır.

## Klasörler

```text
kurul/
  beyinler/<koltuk>/         her koltuğun kaynakları, çerçeveleri, sesi ve hikâyeleri
  beyinler/BEYIN-SABLON.md   yeni koltuk eklemek için şablon
  oturumlar/                 her kurul burada bir klasör açar
  oda/                       canlı izleme sayfası
```

Yeni bir koltuk eklemek istersen sohbete "kurula yeni koltuk ekle: <kişi>, sorusu <soru>" yaz. Claude şablonla beyin klasörünü yazar, koltuğu kurar ve listeye ekler; kaynakları sana gösterip onay ister.

## Dürüstlük

- Koltuklar kişilerin kendisi değildir. Her kartın son satırı bunu söyler.
- Koltuklar yalnız beyin klasöründeki kaynak numaralı satırları alıntılar (`S3` gibi; her numaranın kaynağı `kaynaklar.md` içinde). Gerisi o koltuğun kendi muhakemesidir. Beyinler kısa tutuldu: koltuk başına yaklaşık 2.300 kelime.
- Kurul karar vermez, karar taslağı yazar. Kurulun çıktısıyla hiçbir yayın, harcama ya da sözleşme otomatik yapılmaz.
- Rakamları sen verirsin. Kurul eksik rakamı uydurmaz, sorar ya da varsayımı açıkça yazar.
- Koltuk büstleri açık lisanslı fotoğraflardan türetilmiş stilize çizimlerdir; lisanslar ve atıflar `oda/portre/KAYNAK.md` içinde. Hormozi'nin açık lisanslı fotoğrafı olmadığı için onun büstü fotoğrafsız, yalnız tarifle çizildi.

## Desteklenen araçlar

Claude masaüstü uygulaması (Code sekmesi) kurulu en iyi hâliyle çalıştırır: beş koltuk aynı anda yazar. ChatGPT'deki Codex, Google Antigravity, Windsurf, Kilo ve 20+ araç da aynı klasörü anlar; koltukları aynı anda çalıştıramayan araçta asistan koltukları sırayla kendisi oynar.

## İleri düzey

Bu bölüm yalnız elle kurmak isteyenler için; yukarıdaki akışta hiçbirine gerek yok.

- ZIP ile indirme: [depo sayfasında](https://github.com/muhammedsevimli/sistemler) yeşil Code düğmesi → Download ZIP. Arşivi aç, içindeki `kurul` klasörünü Claude'un Code sekmesinde seç.
- Komut satırı bilenler için: `npx degit muhammedsevimli/sistemler/kurul kurul`
- Odayı elle başlatma: klasörde `python oda/sunucu.py`, sonra http://localhost:4731 (baştan oynatma: http://localhost:4731/?oynat=1&adim=4).
- Asistanın okuduğu talimatlar: `CLAUDE.md` (Claude), `AGENTS.md` (Codex ve diğerleri), akış ve koltuklar `.claude/skills/kurul/` ile `.claude/agents/` içinde.

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
