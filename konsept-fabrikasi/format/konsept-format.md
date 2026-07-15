# 50 Konsept · Çıktı Formatı ve Çeşitlilik Kuralı

> Sistem çözümlemeden sonra tam 50 statik reklam konsepti yazar. Hepsi bu yapıya uyar.
> Amaç: sabah kalkınca önünde 50 taze konsept hazır olsun; beğendiğini tasarıma geçirir, gerisini elersin. Fikir tıkanması biter.

## Çıktı dosyasının yapısı
Sistem çıktıyı `ciktilar/YYYY-AA-GG-<tema>.md` dosyasına şu sırayla yazar:

### A) Girdi özeti + çıkan örüntü (tek paragraf)
Kaç kazanan reklam, kaç yorum okundu; tekrar eden kanca tipi, ortak vaat, ortak duygu, en sık itiraz ve onu çürüten müşteri cümlesi. "Çalıştığı belli olan mantık" burada bir paragrafta özetlenir.

### B) 50 konsept (rotasyon gruplarına bölünmüş)
Her konsept ÜÇ satırdan oluşur (tweet vaadi: kanca + görsel yönergesi + tek satır gerekçe):

```text
### Konsept N · <kısa ad>  [kanca tipi · segment]
- kanca: <senin markanın sesiyle tek cümle açılış>
- görsel: <tek görsel / video / carousel / UGC> + tek satır statik görsel/sahne yönergesi
- gerekçe: <hangi kazanan reklamdan ya da hangi müşteri cümlesinden geldi + neden tutabilir, tek satır>
```

### C) Sabah eleme notu
Sistemin en güçlü bulduğu 5 konsept (numaralarıyla) ve neden onlarla başlanacağı. Sabah hızlı seçim için. Bu notta da em dash yok: ayraç gerekirse orta nokta ( · ) ya da iki nokta kullan.

### D) Platform notu
Instagram/Facebook için "sen" hâliyle hazır. Sonda LinkedIn için "siz" çevirisi notu.

---

## Çeşitlilik kuralı (EN ÖNEMLİ · 50 doldurma değil)
50 konsept tek kancanın 50 kopyası DEĞİLDİR. Sistem üç eksende rotasyon yapar. Aynı kanca tipi arka arkaya en fazla 2 kez gelir; sonra eksen değişir.

### Eksen 1 · Kanca tipi (10 tip · her tipten yaklaşık 5 konsept)
1. **Dert / pişmanlık** (müşterinin kaçındığı acı).
2. **Duyusal / merak** (koku, doku, an; "hisset" kancası).
3. **Sayı / değer** (fincan başı hesap, süre, oran; somut rakam).
4. **Sosyal kanıt** (müşteri yorumu, kaç kişi, puan).
5. **Karşı görüş / mit yıkma** (herkesin yanlış bildiği şey).
6. **Mizah / kabullenme** (en beğenilen yorumdaki viral açı).
7. **İtiraz çürütme** (fiyat/taahhüt/"işe yarar mı" tereddüdünü açıkça karşıla).
8. **Ritüel / kimlik** (kullanıcının olmak istediği kişi, alışkanlık).
9. **Karşılaştırma** (öncesi/sonrası, seninki vs alternatif).
10. **Hediye / özel an** (başkası için alma sebebi).

### Eksen 2 · Segment (markanın alt kitleleri · her konsept birine konuşur)
Sistem `marka/01-marka.md`'den segmentleri çıkarır ve dağıtır. Örnek kahve markası için: filtre içen · espresso/moka · ofis/işyeri · yeni başlayan · damak zevki gelişmiş · tasarruf odaklı · hediye alan · taahhütten çekinen. Her konsept net bir segmente yazılır; segmentler tur boyunca döner.

### Eksen 3 · Duygu (her konsept bir duyguya basar)
rahatlama · pişmanlıktan kaçınma · keyif/haz · ait olma · akıllı harcama · güven · merak · gurur. Duygu da döner, aynı duygu peş peşe yığılmaz.

### Kombinasyon mantığı
Her konsept = bir kanca tipi × bir segment × bir duygu. 10 kanca tipi × birden çok segment × birden çok duygu, 50 gerçekten farklı konsept için fazlasıyla alan açar. Sistem başlık satırında `[kanca tipi · segment]` etiketini yazar ki çeşitlilik gözle görünür ve sen istediğin kutudan seçersin.

## Kesin kurallar
- Müşterinin cümlesini birebir kullanacaksan gerçek yorumdan al, uydurma. Kazanan reklamın mantığını al, kelimesini kopyalama.
- Uydurma sayı / indirim / garanti yok. `marka/01-marka.md` içinde yoksa `[buraya kendi sayını/teklifini koy]` placeholder.
- Sahte aciliyet, abartı, olmayan garanti YOK (yorumda ya da eski reklamda geçse bile). `marka/01-marka.md` "ne DEĞİLSİN" satırına ters düşme.
- Ton `marka/02-ses.md`. Yasak kelime yok. Em dash yok.
- Her konsept tek fikir taşır, kanca tek cümle, anlaşılır. Görsel yönergesi tasarımcının eline bakmadan çizilebilecek kadar somut.
- 50 sayısını doldurmak için tekrar üretme. 50 gerçek farklı fikir çıkmıyorsa girdiyi zenginleştir (daha çok kazanan reklam ve yorum), ama isteneni 50 olarak ver ve zayıf kalanları "sabah eleme" notunda dürüstçe işaretle.
