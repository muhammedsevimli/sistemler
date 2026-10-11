# Çalıştır

Her şey sohbette. Dosya açman gerekmiyor; yalnız bitmiş işi okursun.

## 1. Kur (bir kere)

Claude Code'u bu klasörde aç ve yaz:

```text
kur
```

Claude sırayla en çok beş soru sorar:

1. Şirketinin adı.
2. Ne yapıyorsun, kime satıyorsun.
3. Hangi kanallarda içerik çıkarıyorsun (e-posta, Instagram, site...).
4. Sesini anlatan iki üç kural. İstersen eski bir yazını yapıştır, kuralları Claude çıkarır.
5. Kırmızı çizgilerin: asla yazılmayacak şeyler.

Cevaplarınla `sirket/SIRKET.md` dosyasını yazar. Her çalışanın kendi masasında çalışabilmesi için klasörü de hazırlar. Bilgisayarında bunun için gereken küçük araç eksikse sana nasıl kuracağını söyler.

Önce denemek istersen bu adımı atla. Klasör kurgusal Urla Sofrası şirketiyle gelir.

## 2. İş ver

Düz cümleyle yaz. Ne kadar somut olursa CEO o kadar az soru sorar:

- Kötü: "içerik yap"
- İyi: "bu haftanın e-posta bültenini çıkar, Instagram duyurusunu da yaz"

CEO şunları yapar ve hepsini günlüğe yazar:

1. İşin bitmiş halini tek cümleyle yazar, ihtiyaçları çıkarır. Belirsiz bir yer varsa en çok iki soru sorar.
2. Her ihtiyaç için kadrodan birini işe alır.
3. Her çalışana kendi masasını açar. Masa, dosyaların o çalışana özel bir kopyasıdır.
4. Birbirini beklemeyenleri aynı anda, birbirine muhtaç olanları sırayla çalıştırır.
5. Çalışan bitince masasını ana klasörle birleştirir ve masayı toplar.
6. Denetçiyi en sona koyar. Denetçi DÜZELT derse ilgili çalışanı notla bir kez daha çalıştırır (en çok iki tur).
7. Bitmiş işi `sirket/onay/` klasörüne bırakır ve sana özet verir: kim çalıştı, kaç dakika, yaklaşık kaç token, dosyanın yolu.

## 3. Onayla ya da geri çevir

`sirket/onay/` içindeki dosyayı oku. Sonra:

```text
onayla sirket/onay/2026-10-10-bulten-hafta-41.md
```

ya da

```text
reddet sirket/onay/2026-10-10-bulten-hafta-41.md ikinci paragraf çok uzun, börülceyi başa al
```

Onayladığında Claude hiçbir şeyi göndermez. Dosya hazır olur, gönderimi sen yaparsın.

## 4. Panoyu gör

```text
vardiya
```

Son işin tablosu gelir: çalışan, masa, başlangıç, bitiş, yardımcı sayısı, durum. Altında onayda bekleyenler.

## 5. Kadroyu büyüt

```text
işe al çevirmen
```

Claude üç soru sorar (ne üretecek, hangi araçlara ihtiyacı var, ne zaman yardımcı alabilir), çalışanın görev tanımını `.claude/agents/cevirmen.md` olarak yazar ve sana gösterir. Claude Code bu klasöre yazmak için izin isterse onayla. Yeni çalışan bazen ancak bir sonraki oturumda kadroda görünür. O oturumda görünmezse CEO onu görev tanımını okutarak genel bir çalışan olarak açar, iş yine yapılır.

## 6. Rakiplerini izlet

```text
rakiplerimi izle
```

CEO gözcüyü işe alır ve en çok beş soru sorar:

1. Kimleri izleyelim? Her rakibin adı, varsa YouTube kanalı, sitesi ya da blogu.
2. Haberlerde hangi kelimeleri arayalım? (örnek: "Urla restoran") Şehrinin Reddit topluluğu varsa onu da yaz.
3. Elle eklemek istediğin gönderi linkleri var mı?
4. Kaç günü tarayalım? (varsayılan 4)
5. Fırsat taslakları hangi kanal için yazılsın?

YouTube kanal adresinden kanalın beslemesini kendisi bulur, listeyi `sirket/radar/kaynaklar.md` olarak yazar ve ilk taramayı yapar. Rapor `sirket/onay/radar-<tarih>.md` dosyasına düşer: ne yaptılar, bize hangi açıyla uyar, bugün ne üretmeliyiz. Taze ve hızla izlenen bir içerik varsa altında yanıt ya da gönderi taslağı olur; taslak denetçiden geçer, gönderimi sen yaparsın.

Sonraki her rapor için:

```text
radar
```

Listeye kaynak eklemek ya da çıkarmak için sohbette söylemen yeterli ("şu kanalı da ekle"). Haftada iki sabah kendiliğinden çalışsın istersen "vardiyayı kur" yaz; CEO Windows'ta Görev Zamanlayıcı'ya, Mac'te cron'a ekler. Kaldırmak için "vardiyayı kaldır" yaz.

## Günlük nasıl okunur

`sirket/gunluk.jsonl` her satırda bir olay tutar:

```json
{"t":"2026-10-10T23:50:07+03:00","kim":"ceo","olay":"ise_alim","detay":"yazar: bülten ana metni"}
```

| Olay | Anlamı |
|---|---|
| `ise_alim` | CEO birini işe aldı |
| `masa` | Bir çalışana masa açıldı |
| `baslangic` / `bitis` | Çalışan işe başladı / bitirdi |
| `yardimci` | Bir çalışan kendine yardımcı aldı |
| `birlesme` | Bir masa ana klasörle birleşti |
| `onay_istegi` | İş onay klasörüne düştü |
| `onay` / `ret` | Sen onayladın / geri çevirdin |
| `durdu` | Sınır aşıldı ya da iş yarıda kaldı |

Günlüğü okumak istemezsen `vardiya` yaz, Claude tabloya çevirir.

## Ayarlar

`sirket/SIRKET.md` dosyasının sonunda üç ayar var. Değiştirmek için sohbette söylemen yeterli ("token tavanını 1 milyona indir"):

| Ayar | Varsayılan | Anlamı |
|---|---|---|
| `en_cok_calisan` | 5 | Bir işte en çok kaç çalışan |
| `en_cok_yardimci` | 2 | Bir işte toplam en çok kaç yardımcı |
| `token_tavani` | 1500000 | Geçecekse CEO durur ve sorar |

## İsteğe bağlı: toplu vardiya

Claude Code'da çok aşamalı toplu koşu özelliğin varsa "workflow ile koş" ya da "ultracode" diyerek aynı düzeni tek seferde koşturabilirsin: önce bağımsız çalışanlar birlikte, sonra denetçi, sonra düzeltme. Kurallar değişmez: her çalışan kendi masasında, her olay günlükte, bitmiş iş onayda. Bu yol test koşusunda denenmedi; elle vardiya düzeni test edildi.
