# Ölçütler · sekiz başlık, ölçüm yöntemi ve kabul aralıkları

> Bu dosya sistemin cetvelidir. Her başlıkta üç şey var: ekran görüntüsünden **nasıl ölçülür**, **kabul aralığı ne**, ve aralık dışına çıkınca **okuyucuda ne oluyor**.
> Rakamlar keyfi değil, yerleşik tipografi ve erişilebilirlik pratiğinden geliyor. Kaynak notu her başlığın sonunda.

---

## 1. Yazı hiyerarşisi

**Nasıl ölçülür:** Görüntüdeki bütün metinleri boyutlarına göre grupla. Kaç ayrı boyut var, say. En büyük başlıkla gövde metninin boyut oranını çıkar. Kalınlık (ince/normal/kalın) kaç ayrı değerde kullanılmış, say.

**Kabul aralığı:**
- Bir sayfada **3 ile 5 arası** ayrı yazı boyutu. Altı ve üstü dağınıklık, iki ve altı düzlük.
- Başlık ile gövde arasında **en az 1,5 kat** boyut farkı. Altındaysa hiyerarşi gözle ayrışmaz.
- **En fazla 3** ayrı kalınlık.
- Ardışık iki hiyerarşi basamağı arasında gözle görülür fark olmalı. 18px ve 17px iki ayrı basamak değildir, kazadır.

**Aralık dışına çıkınca:** Okuyucu neye önce bakacağını bilemez. Sayfa "hepsi aynı derecede önemli" der, bu da "hiçbiri önemli değil" demektir. Amatör görünümün en sık sebebi budur.

**Kaynak notu:** Tipografik ölçek pratiği (majör üçlü / dörtlü ölçek). Ayrıntı gerekmez, oran yeter.

---

## 2. Satır uzunluğu ve satır aralığı

**Nasıl ölçülür:** Gövde metninin en uzun satırındaki karakter sayısını say (boşluklar dahil, yaklaşık sayabilirsin). Satır aralığını yazı boyutuna oranla: iki satırın taban çizgisi arası, harfin kendi boyutunun kaç katı.

**Kabul aralığı:**
- Gövde metni satır uzunluğu **45 ile 75 karakter** arası. Mobilde 35-50.
- Gövde satır aralığı yazı boyutunun **1,5 ile 1,7 katı**.
- Başlıklarda satır aralığı daha sıkı: **1,1 ile 1,3 kat**. Başlığa gövde aralığı verilirse başlık dağılır.
- Paragraflar arası boşluk, satır aralığından **belirgin biçimde büyük** olmalı, yoksa paragraf sınırı kaybolur.

**Aralık dışına çıkınca:** 75 karakterin üstünde göz satır sonundan satır başına dönerken yerini kaybeder, okuyucu aynı satırı iki kez okur ve yorulur. 45'in altında ise göz sürekli sıçrar. İkisi de metni "okunmaz" yapmaz, "okumak istenmez" yapar. Vibe-code edilmiş sayfalarda en sık kaçırılan ölçü budur, çünkü varsayılan olarak metin kapsayıcının tamamına yayılır.

**Kaynak notu:** Okunabilirlik araştırmasının klasik aralığı. `max-width: 65ch` tek satırlık çözümdür.

---

## 3. Boşluk ritmi

**Nasıl ölçülür:** Sayfadaki belli başlı boşlukları ölç (bölüm araları, başlık ile altındaki metin arası, kart içi kenar boşlukları, buton iç boşluğu). Bu değerlerin ortak bir çarpanı var mı, bak.

**Kabul aralığı:**
- Bütün boşluklar tek bir ölçeğin katı olmalı: **4 ya da 8 piksel taban**. 12, 16, 24, 32, 48, 64 gibi. 13, 19, 27 gibi değerler ölçek dışıdır.
- **Yakınlık kuralı:** birbirine ait öğelerin arası, ayrı gruplar arasındaki boşluktan küçük olmalı. Başlık ile kendi paragrafı arasındaki boşluk, o paragraf ile sonraki başlık arasındakinden dar olacak. Tersi olursa okuyucu başlığı yanlış paragrafa bağlar.
- Bölüm araları gövde metninin **en az 3 katı** olmalı, yoksa bölümler birbirine akar.

**Aralık dışına çıkınca:** Sayfa "sıkışık" ya da "boşlukları rastgele" hissi verir. Okuyucu neyin neye ait olduğunu çözmek için enerji harcar. Bu, en kolay düzeltilen ve en çok fark yaratan başlıktır.

**Kaynak notu:** 4/8 taban ızgarası, yaygın tasarım sistemi pratiği.

---

## 4. Renk ve kontrast

**Nasıl ölçülür:** Sayfadaki ayrı renkleri say (marka rengi, metin rengi, arka planlar, kenarlıklar, durum renkleri). Gövde metni ile arka planı arasındaki kontrast oranını tahmin et. Saf siyah (`#000000`) ve saf beyaz üstüne saf siyah kullanımı var mı, bak.

**Kabul aralığı:**
- Gövde metni ile arka plan arasında **en az 4,5:1** kontrast. Büyük başlıklarda en az 3:1.
- Bir sayfada **en fazla 1 vurgu rengi** artı nötr bir gri skalası. İkinci bir doygun renk ancak durum bildirimi (hata, uyarı, başarı) içinse serbest.
- **Saf siyah metin kullanma.** Neredeyse-siyah (koyu gri, örneğin `#18181B` yönünde) daha yumuşak okunur ve daha pahalı görünür.
- İkincil metin, ana metinden ayrışmalı ama 4,5:1 sınırının altına da düşmemeli. "Soluk gri açıklama metni" en sık yapılan erişilebilirlik hatasıdır.

**Aralık dışına çıkınca:** Düşük kontrast metni gündüz telefonda okunamaz hale getirir. Çok fazla renk, sayfayı bir tasarımcının değil bir aracın kurduğunu ele verir. Saf siyah ise ekranda sert bir kenar oluşturur, ucuz görünümün sessiz sebeplerindendir.

**Kaynak notu:** WCAG 2.1 AA metin kontrast eşiği (4,5:1 normal, 3:1 büyük metin).

---

## 5. Gölge, kenarlık ve köşe yarıçapı

**Nasıl ölçülür:** Kartlarda, butonlarda ve kutularda gölge var mı, kaç ayrı gölge kullanılmış, gölgeler yayvan mı sert mi. Kenarlık ve gölge aynı öğede birlikte mi duruyor. Köşe yarıçapları kaç ayrı değerde.

**Kabul aralığı:**
- **En fazla 2 ayrı gölge seviyesi** (yakın yüzey, uzak yüzey). Üç ve üstü derinlik algısını bozar.
- **Kenarlık ve gölge aynı anda kullanılmaz.** İkisi de "bu kutu ayrı bir yüzey" demenin yoludur, ikisi birden söylenince kutu kalınlaşır ve ucuzlar. Birini seç.
- Gölge **yumuşak ve düşük opaklıkta** olmalı, ışık yukarıdan gelmeli (dikey kaydırma yatay kaydırmadan büyük). Her yöne eşit yayılan gölge sahte durur.
- Köşe yarıçapı sayfada **tek bir değerde** (ya da iç içe öğeler için iki değerde). Butonu 4, kartı 16, girdi alanını 9 yapmak dağınıklıktır.
- İç içe geçmiş öğelerde iç yarıçap dıştan küçük olmalı, tersi değil.

**Aralık dışına çıkınca:** Varsayılan gölgeler (aracın kutudan çıkan gölgesi) neredeyse her zaman fazla koyu ve fazla yayvandır. Gören kişi neyin yanlış olduğunu söyleyemez ama "şablon" hissi tam olarak buradan gelir.

---

## 6. Buton ve tıklanabilir öğeler

**Nasıl ölçülür:** Sayfadaki bütün butonları ve bağlantıları say. Kaçı birincil (dolu, vurgu renkli) görünüyor. Buton yüksekliğini ve iç boşluğunu ölç. Aynı işi yapan butonlar aynı görünüyor mu, bak.

**Kabul aralığı:**
- Bir ekranda **tek birincil buton**. İkincil eylemler çerçeveli ya da düz metin olur. İki dolu buton yan yana duruyorsa okuyucu hangisinin ana eylem olduğunu bilemez.
- Dokunma alanı **en az 44x44 piksel**. Küçük buton mobilde ıskalanır.
- Buton iç boşluğu yatayda dikeyin **yaklaşık 2 katı** olmalı. Eşit iç boşluk butonu tıknaz gösterir.
- Aynı sayfada aynı işi yapan iki buton **birebir aynı** görünmeli. Boyutu bir yerde 40 bir yerde 44 olan buton, elle yazıldığını ele verir.
- Buton metni eylem bildirmeli. "Gönder", "Tıkla", "Devam" gibi boş fiiller yerine ne olacağını söyleyen metin.

**Aralık dışına çıkınca:** Birden çok birincil buton dönüşümü doğrudan düşürür. Bu başlık görünüm kadar sonuç meselesidir.

**Kaynak notu:** 44px dokunma hedefi, mobil arayüz kılavuzlarının ortak alt sınırı.

---

## 7. Hizalama ve ızgara

**Nasıl ölçülür:** Sayfada kaç ayrı sol kenar çizgisi var, say (metinlerin, kartların, başlıkların sol kenarları hizalı mı). İçeriğin oturduğu kapsayıcı genişliğini tahmin et. Ortalanmış ve sola dayalı metinler karışık mı kullanılmış, bak.

**Kabul aralığı:**
- Sayfa boyunca **tek bir sol kenar çizgisi** (ya da bilinçli olarak iki: kapsayıcı ve girinti). Üç ve üstü rastgeleliktir.
- Uzun gövde metni **ortalanmaz.** Ortalama yalnız kısa metinlerde (başlık, tek cümlelik alt başlık, buton) işe yarar. Üç satırdan uzun ortalanmış paragraf okunmaz.
- İçerik kapsayıcısı geniş ekranda **sınırlanmalı**. Kenardan kenara uzanan metin, sayfanın hiç düşünülmediğini söyler.
- Aynı satırdaki kartlar **eşit yükseklikte** olmalı, içerikleri farklı uzunlukta olsa bile.

**Aralık dışına çıkınca:** Hizasızlık gözle tek tek fark edilmez ama toplamda "özensiz" hissi bırakır. En sinsi başlık budur.

---

## 8. Görsel ve ikon tutarlılığı

**Nasıl ölçülür:** Sayfadaki ikonları say. Aynı çizim dilinden mi geliyorlar (aynı çizgi kalınlığı, aynı doluluk, aynı köşe yapısı). Görsellerin en-boy oranları tutarlı mı. Yer tutucu kalıntısı var mı.

**Kabul aralığı:**
- Bütün ikonlar **tek bir setten**. Kimi dolu kimi çizgisel ikon karışımı, en hızlı fark edilen tutarsızlıktır.
- İkon çizgi kalınlığı yanındaki yazının kalınlığıyla uyumlu olmalı. İnce yazının yanında kalın ikon yamalı durur.
- Görseller **aynı en-boy oranında** kesilmiş olmalı, esnetilmiş olmamalı.
- **Yer tutucu kalıntısı olmayacak:** gri kutu, kırık görsel simgesi, "buraya görsel gelecek" yazısı, örnek isimler, doldurma metni. Bunlardan biri bile varsa bulgu YÜKSEK önemdedir.
- Emoji, ikon yerine kullanılmaz.

**Aralık dışına çıkınca:** İkon karışımı ve yer tutucu kalıntısı, sayfanın bitmediğini söyler. Ziyaretçi ürünün de bitmediğini varsayar.

---

## Önem derecelendirmesi

| Derece | Ölçüt |
|---|---|
| **YÜKSEK** | Sayfanın ilk üç saniyedeki izlenimini bozuyor, ya da metni okunamaz kılıyor, ya da bitmemişlik gösteriyor. Kontrast ihlali, yer tutucu kalıntısı, çoklu birincil buton, hiyerarşi yokluğu genelde buraya düşer. |
| **ORTA** | Okumayı ya da gezinmeyi zorlaştırıyor ama sayfa yine de iş görüyor. Satır uzunluğu, boşluk ölçeği sapmaları, hizalama dağınıklığı genelde buraya düşer. |
| **DÜŞÜK** | Yalnız incelik. Düzeltince fark yaratır ama kimse şikayet etmez. Köşe yarıçapı tutarsızlığı, gölge ince ayarı genelde buraya düşer. |

Bir sayfada YÜKSEK bulgu yoksa bunu açıkça yaz. Bulgu uydurma.
