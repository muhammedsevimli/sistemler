# Test sonucu

**Tarih:** 16 Eylül 2026
**Koşu:** 5 ajan, 2 tur, paralel alt-ajan sürümü (Yol B)
**Model:** beş rol de en güçlü kademe
**Süre:** yaklaşık 4 dakika
**Token:** yaklaşık 570 bin

Bu gerçek bir koşu. Kurgusal veri kullanılmadı, örnek senaryo üretilmedi. Sistem kurulduğu gün gerçek bir soruya koşturuldu.

## Soru

Bir kısa video serisinin 12. bölümü, yayından bir gün sonra 85.064 görüntüleme aldı. Aynı serinin 11. bölümü aynı kalıpla kurulmuştu ve 5,8 bin görüntülemede kalmıştı. Soru: 12. bölüm neden bu kadar yayıldı.

## Girdi

Dört kaynak dosya verildi: yayından bir gün sonra alınan platform içgörü raporu, 11. ve 12. bölümlerin yapım onay notları, 12. bölümün yayın metni ve yorum mekaniği notu.

Ana rakamlar: 85.064 görüntüleme, 67.051 tekil izleyici, takipçi olmayan oranı %95,9, beğeni 1.100, yorum 2.927, kaydetme 3.721, paylaşım 1.150, yeni takip 1.565. Toplam etkileşim 8.919. Hesabın takipçi sayısı 11,1 bin.

## Roller ve sonuç

| Rol | Teori | Tur 2 kararı |
|---|---|---|
| Pazarlamacı | Giriş sahnesi yaydı: telefonla çekilmiş ekran artı şok cümle | **ELENDİ** (kendi kararıyla çekildi) |
| Editör | Kurgu yaydı: premium hareket, müzik yerleşimi, altyazı ritmi | **ELENDİ** |
| Şüpheci | Mevcut takipçiler yaydı, dağıtım onun üstüne bindi | **ELENDİ** |
| Psikolog | İzleyen sistemi sahiplendi, almak için yorum yazdı, kurmak için kaydetti | **AYAKTA** |
| Matematikçi | Teorisi yok, hakem | Psikolog ayakta |

## Her elemenin rakamı

**Editör elendi.** 11. ve 12. bölüm aynı kurgu hattında üretildi. Müzik ile konuşma arası ayrım ikisinde de 22,0 LU, miks -16,0 ve -16,3 LUFS, ses maskeleme uyarısı 0, tam siyah kare 0. Sabit kalan bir değişken 5,8 bin ile 85.064 arasındaki 14,7 katlık farkı üretemez. Editörün kendi ikinci kanıtı (3.721 kaydetme) kurguyu değil niyeti ölçüyordu.

**Şüpheci elendi.** Takipçi olmayan oranı %95,9. Takipçi olan tekil izleyici 67.051 × 0,041 ≈ 2.749. Bu kitlenin 67.051 tekil izleyiciyi taşıması için kişi başına 24 izleyici getirmesi gerekirdi. Toplam paylaşım 1.150, bu farkı kapatmıyor.

**Pazarlamacı çekildi.** Hakem bu teoriyi "elendi" diye işaretlemedi, "veriyle ayrıştırılamıyor" dedi: serinin 7. bölümü aynı giriş biçimi olmadan 102 bin almıştı, yani iki farklı giriş biçimi aynı ölçekte yayılmıştı. Ayrıca 11. ile 12. bölüm arasında yalnız giriş değil konu ekseni de değişmişti, karşılaştırma tek değişkeni izole etmiyordu. Ajan bu iki noktayı görüp kendi kararıyla teorisini geri çekti.

**Psikolog ayakta kaldı.** Kaydetme 3.721, beğeninin (1.100) 3,38 katı. Yorum 2.927, beğeninin 2,66 katı. 8.919 etkileşimin 6.648'i, yani %74,5'i kaydetme ve yorum. Beğeni duyguyu ölçer, kaydetme ve yorum niyeti ölçer. Hakem bu teoriyi tek "veriyle uyumlu" teori olarak işaretledi ve çürüten rakam bulamadı.

## Ne çalıştı

- **Hakem gerçekten çürüttü.** Üç teori rakamla kesildi, hiçbiri kendi kendine düşmedi.
- **Roller rakam uydurmadı.** Tüm iddialar verilen dört dosyadaki sayılara bağlandı ve her kanıtta kaynak dosya adı yazıldı.
- **Hakem yetmeyen veriyi yetmeyen olarak işaretledi.** Pazarlamacı'yı elemek yerine ayrıştırılamadığını yazdı. Bu sistemin en önemli davranışı: veri bir teoriyi sınamaya yetmiyorsa uydurma bir karar üretmiyor.
- **Bir ajan kendi teorisini geri çekti.** Rakam teoriyi kestiğinde rol savunmaya devam etmedi.
- **İki tur yetti.** Üçüncü tura gerek kalmadı, ikinci turda dört karar da netleşti.

## Ne test edilmedi

Dürüstlük için:

- **Ajan takımı modu (Yol A) bu koşuda kullanılmadı.** Koşu paralel alt-ajan sürümüyle yapıldı. Yol A deneysel bir özelliğe bağlı ve bu makinede doğrulanmadı. `TARTISMA-PROMPTU.md` içindeki Windows notu bu yüzden bir uyarı, bir ölçüm değil.
- **İki teorinin birden ayakta kaldığı senaryo tetiklenmedi.** Bu koşuda tek teori ayakta kaldı. Sistem iki teoriyi birden ayakta bırakırsa lider raporu ne yapacak, kural tanımlı ama koşuda görülmedi.
- **Hiçbir ajan rakam uydurmaya kalkışmadı**, yani tur 1 kapısındaki düzeltme mekanizması tetiklenmedi. Kural yazılı, çalıştığı doğrulanmadı.
- **Üç ve dört ajanlı küçük kurulumlar ölçülmedi.** `MALIYET.md` içindeki öneri mantığa dayanıyor, ayrı bir koşuya değil.
- **Farklı model kademeleriyle karışık kurulum denenmedi.** Beş rol de aynı kademede koştu.

## Çıktı dosyaları

Koşunun tamamı on bir dosya bıraktı: `round1_<rol>.md` beş dosya, `round2_<rol>.md` beş dosya, `LIDER-RAPORU.md` bir dosya. Dosya biçimi `ORNEK-CIKTI.md` içinde görülebilir.
