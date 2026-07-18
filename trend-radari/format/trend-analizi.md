# Trend Analizi · Hook Kalıpları + Brief Yapısı

Sistem çekilen başlıkları burada tarif edilen adımlarla açıya çevirir.

## Hook kalıbı ne demek
Bir başlığın DIŞI konudur (o bitki, o ürün, o araç). İÇİ hook kalıbıdır: başlığı yükselten psikolojik açı. Sen konuyu değil kalıbı alırsın; aynı kalıp senin nişinde başka bir konuya giydirilir. Örnek: "Bitkim ölüyor, ne yapmalıyım" başlığının konusu bitki, kalıbı "kurtarma/teşhis". Aynı kalıp yemek, finans, yazılım nişinde de tutar.

## Sık tekrar eden hook kalıpları (küme adlandırırken buradan seç)
1. **Kurtarma / teşhis:** "şu bozuldu, ne yapmalıyım". Yorum patlatır (herkes yardım/teşhis eder). Yüksek yorum sinyali.
2. **Önce/sonra dönüşüm:** "6 haftada şu hale geldi". Geniş erişim, kanıt gösterir (foto/önce-sonra).
3. **Ucuz / bedava / no-buy:** "para harcamadan şunu yaptım". Kaydedilir, paylaşılır.
4. **Yeni başlayan hatası:** "bunu yapıyorsan durdur, ben de yapıyordum". Geniş kitle, kendini görür.
5. **Az kaynakla / kısıtla:** "penceresi kuzeye bakanlar için", "10 dakikada", "tek malzemeyle". Pratik, uygulanır.
6. **Karşılaştırma / seçim:** "X mi Y mi", "aldığım en iyi/en kötü". Tartışma çıkarır.
7. **Liste / derleme:** "öldürmesi imkansız 5 tanesi", "yeni başlayan için 3 şey". Tıklanır, kaydedilir.
8. **Karşı görüş / mit yıkma:** "herkes yanlış biliyor, doğrusu şu" (KANITLA, boş iddia değil).
9. **Kişisel hikaye / dönüm:** "1 yıl sonra öğrendiğim şey". Bağ kurar.
10. **Sonuç/rakam gösterimi:** "şu kadar oldu, işte nasıl". Somut, güven verir.

## Sıcaklık okuma (kanıt · RSS sinyaliyle)
RSS'te oy (upvote) ya da yorum SAYISI YOKTUR. Bu yüzden sıcaklığı iki başka sinyalden okursun, ikisi de `veri/` dosyasında görünür:
- **Frekans (ne kadar tekrar etti):** aynı hook kalıbı kaç başlıkta çıkıyor. Bir küme 8 başlıkta tekrar ediyorsa 2 başlıktan daha sıcaktır. Haftanın en çok konuşulan derdi en çok tekrar edendir.
- **Feed sırası (ne kadar üstte):** `top/.rss?t=week` akışı zaten sıralıdır, en üstteki gönderi o hafta o toplulukta en çok tutandır. Feed'in üst sıralarında yoğunlaşan bir küme, alt sıralarda dağılan bir kümeden daha sıcaktır.
- **En sıcak:** hem çok tekrar eden hem feed'in üstünde duran küme. Çok tekrar ama hep dipte = "geniş ama zayıf"; az başlık ama hep tepede = "dar ama güçlü".
Uydurma sayı yok, oy sayısı da uydurulmaz (RSS vermez). Bir kümede tek başlık varsa "trend" deme, "tekil sinyal" de. (Oy SAYISINI da istiyorsan `CLAUDE.md` en altındaki opsiyonel OAuth kutusu bunu ekler; RSS varsayılan kurulumsuz yoldur.)

## Nişe uyarlama (en kritik adım)
Her tutan kalıbı `marka/01-marka.md` işine çevir:
1. Kalıbı al (konuyu değil).
2. Senin nişinde bu kalıp neye denk gelir, tek cümle somut yaz.
3. `marka/01-marka.md` "ne DEĞİLSİN" ile kontrol et. Takılıyorsa ELE, brief'in "atlananlar" bölümüne neden atladığını yaz.
4. `marka/02-ses.md` tonuyla 1-2 örnek başlık yaz. Yasak kelime yok, em dash yok.
5. Format öner: kalıp hangi formatta iyi durur (kurtarma/teşhis reel; liste carousel; önce/sonra kısa video; karşı görüş uzun video ya da thread).

## Brief yapısı (ciktilar/YYYY-AA-GG-brief.md)
1. **Veri özeti:** kaç başlık, hangi subreddit'ler, tarama tarihi, feed başında duran öne çıkan 3 başlık.
2. **Sıcaktan soğuğa açı listesi:** her açı için ad · hook kalıbı · kanıt (başlıklar + kaç tekrar + feed sırası) · nişe uyarlama · örnek başlık(lar) · format.
3. **Bu hafta üret (ilk 3-4):** en sıcak, nişine oturan, üretilebilir açılar. Her biri için tek örnek başlık + format + neden bu hafta.
4. **Atlananlar:** "ne DEĞİLSİN"e takılan açılar (nedeniyle) + verisi zayıf tekil sinyaller.

## DÜRÜST SINIR · erişim modeli
- **Reddit:** herkese açık RSS akışı (`top/.rss?t=week`) ücretsiz ve anahtarsızdır, kurulum istemez. Sistem başlıkları GERÇEKTEN otomatik çeker (Bash curl + açıklayıcı User-Agent). Kişisel veri toplamaz, login ya da kazıma yapmaz; yalnız herkese açık gönderi başlığını, linkini ve tarihini okur. Reddit anahtarsız `.json` ucunu kapattı (403); RSS hâlâ açık (200), sistem bu yüzden RSS kullanır. RSS oy sayısı vermez (bkz sıcaklık okuma: frekans + feed sırası). Oy sayısı isteyen için opsiyonel OAuth yolu `CLAUDE.md` en altında.
- **YouTube / TikTok / Reels:** ücretsiz, güvenilir, otomatik bir yol yoktur. Resmi API'ler kota/onay ister ve trend keşfi için zayıftır; kazıma kullanım şartlarına takılır ve kırılgandır. Bu yüzden bu platformlar "aç ve yapıştır" opsiyonel katmandır (Meta Reklam Kütüphanesi ya da benzeri manuel adımların dürüstlüğüyle aynı mantık). Sistem uydurma trend üretmez; yalnız Reddit'ten çektiği ya da senin yapıştırdığın veriden çıkarım yapar.
