# Denetim Anatomisi · Beş Denetim + Boşa Giden Tutarı Hesaplama

> Sistem her raporu bu beş denetimden geçirir. Kural: bütün rakamlar YALNIZ verideki kolonlardan gelir. Toplamı, satır maliyetlerini toplayarak bul; başka bir rakam uydurma.

## Denetim 1 · Boşa giden harcama (arama terimi bazında · ANA DENETİM)
Her arama terimini `hesap/01-hesap.md` ile karşılaştır ve üç kovadan birine koy:

- **alakalı + dönüşen:** işine uygun, dönüşüm > 0. Dokunma, iyi çalışıyor.
- **alakalı + dönüşmemiş (izle):** işine uygun ama dönüşüm = 0. **Bu boşa giden DEĞİL.** Belki daha çok veri/zaman ya da açılış sayfası iyileştirmesi gerekiyor. Ayrı "izle" kovasına koy, toplama SAYMA.
- **boşa giden:** işine uygun değil. Şu niyetlerden biri: bilgi amaçlı ("nasıl yapılır/temizlenir/cilalanır"), DIY/kendin yap ("boyama", "yapımı"), rakip/başka marka adı, "ucuz/ikinci el", ya da `hesap/01-hesap.md` "ne DEĞİLSİN" segmenti (toptan, kereste, ham madde...). Maliyeti var, işine dönüşmez.

**Özel durum · dönüşen ama strateji dışı:** bir terim dönüşüm getirdiyse AMA "ne DEĞİLSİN"e giriyorsa (örn. "toptan ...") onu boşa gidene KOYMA. Ayrı "strateji dışı / düşük getiri" satırına koy, dönüştüğünü dürüstçe yaz, ROAS'ını göster. Bir dönüşümü yok sayıp tamamını israf gibi gösterme.

### Boşa giden tutar nasıl hesaplanır
Boşa giden kovasındaki satırların `Maliyet` kolonunu TOPLA. Bu toplam = boşa giden tutar. Formül dışında rakam yok.
- Hangi satırların toplandığını tek tek, maliyetleriyle göster (şeffaflık).
- Yüzdeyi de ver: boşa giden tutar / toplam maliyet.

## Denetim 2 · Eksik negatif kelimeler
Boşa giden terimlerde tekrar eden ya da açıkça alakasız kök kelimeleri çıkar. Her biri bir negatif kelime önerisidir. Örnek kökler: `nasıl`, `temizle`, `cilala`, `boyama`, `ucuz`, `plastik`, `ikinci el`, `toptan`, `kereste`, `ham madde`, rakip marka adı.
- Her negatif önerisinin yanına hangi arama satır(lar)ından geldiğini ve o satırların toplam maliyetini yaz (bu negatifi eklersen ayda ne kadar durdurursun).
- Negatif kelimeyi mümkün olan en dar kökle öner ki dönüşen terimi yanlışlıkla kesmesin. Örn. "temizlenir" için kök "temizle", ama "ucuz plastik" için "plastik" yeterli.

## Denetim 3 · Hatalı eşleşme türü (broad match sızıntısı)
Boşa giden satırların çoğu `Geniş eşleşme` (broad match) kaynaklı mı bak. Öyleyse o kampanya/reklam grubunu işaretle.
- Öneri: geniş eşleşmeyi `Sıralı eşleşme` (phrase) ya da `Tam eşleşme` (exact) yap + negatifleri ekle.
- **Dikkat:** aynı geniş eşleşme dönüşen terim de getiriyorsa (örn. veri içinde geniş eşleşmeli ama dönüşen bir arama varsa) onu ÖLDÜRME. "Dönüşen terimi ayrı bir sıralı/tam eşleşme reklam grubuna al, geniş eşleşmeyi negatiflerle temizle" de. Dönüşen aramayı kesecek öneri verme.

## Denetim 4 · Bütçe yanlış dağılımı (kampanya raporu varsa)
Her kampanyanın maliyet payını (kampanya maliyeti / toplam maliyet) ve ROAS'ını (dönş. değeri / maliyet) çıkar.
- Yüksek maliyet payı + hedef ROAS'ın belirgin altında ROAS = bütçe yanlış dağılmış. İşaretle: "bütçenin %X'ini yiyor, ROAS Y, hedefin Z. kıs ya da yeniden kur."
- İyi çalışanı (hedef ROAS üstü) da söyle: "bu kampanya hedefin üstünde, kısılan bütçe buraya kaydırılabilir."
- Kampanya raporu yoksa bu denetimi arama terimi kampanyalarından kabaca yap ama "kesin bütçe denetimi için kampanyalar raporunu da ver" notunu düş.

## Denetim 5 · Düşük CTR / yüksek maliyet sinyalleri (ikincil)
CTR = Tıklama / Gösterim. CPC = Maliyet / Tıklama. Hesap ortalamasına göre belirgin sapan satır/kampanya varsa işaretle:
- çok yüksek gösterim, düşük CTR: reklam metni ya da eşleşme geniş, alakasız kişilere görünüyor.
- çok yüksek CPC, düşük dönüşüm: pahalı ve getirisiz.
Bu ikincil önceliktir; ana hikaye Denetim 1-4. Bir iki en belirgin sinyali göster, hepsini sıralama.

## Tahmini tasarruf (yalnız veriden)
- Boşa giden 0-dönüşümlü harcamayı kesersen tasarruf = boşa giden tutar (aynı dönüşümleri korursun çünkü o satırlar zaten 0 dönüşüm).
- Dönüşüm değeri kolonu varsa: boşa giden kesilince ROAS kabaca nereye çıkar (toplam dönş. değeri / kalan maliyet) tek satır göster. Yanına "tahmini, harcama tam yer değiştirmeyebilir" notu koy.
- **Uydurma çarpan YOK.** "2 katına çıkar", "cironu %30 artırır" gibi veride olmayan iddia yasak.

## Anti-uydurma özeti
- Rakam sadece verideki kolonlardan. Boşa giden = işaretli satır maliyet toplamı.
- 0 dönüşüm tek başına israf değil; terim işine de uygun değilse israf.
- Dönüşen ama strateji dışı terim ayrı kovada, dönüştüğü yazılır.
- Veri eksikse "şu raporu/kolonu ver" de, yarım denetimle kesin konuşma.
- Sistem hesaba dokunmaz; hep öneri kipinde konuşur.
