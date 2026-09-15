# Maliyet

Beş ajan aynı anda koşuyor ve her biri kendi bağlamını taşıyor. Yani tek bir soruya beş kere cevap ürettiriyorsun, üstüne bir de ikinci tur var. Maliyet tek ajanın yaklaşık beş katına çıkıyor.

## Gerçek koşunun rakamı

| | |
|---|---|
| Ajan sayısı | 5 |
| Tur sayısı | 2 |
| Model | hepsi en güçlü kademe |
| Toplam token | yaklaşık 570 bin |
| Duvar saati | yaklaşık 4 dakika |

Girdi dört kaynak dosyaydı. Veri büyürse token da büyür, çünkü her ajan veriyi ayrı ayrı okuyor. Beş ajan aynı 50 bin tokenlık veriyi okuyorsa 250 bin token sayılır.

## Üç ajanla başla

Beş rol tam takım. İlk denemende buna gerek yok.

**Üç ajan yeter:** iki teori artı Matematikçi. Sistemin çalışıp çalışmadığını bu kurulumda görürsün, maliyet yarıdan aza iner. İki teorinin de ayakta kaldığını görürsen rolleri artırırsın.

**Dört ajan iyi denge:** üç teori artı Matematikçi. Çoğu soru için bu yeterli.

**Beş ajan** ise teoriler gerçekten birbirinden farklıysa anlamlı. İki rol aynı şeyi farklı kelimeyle savunuyorsa ikinci rol para yakıyor.

## Ucuz işe ucuz model

Her rolün aynı modeli kullanması gerekmiyor. Rol dosyalarındaki `model` satırını değiştirebilirsin.

| Rol | Öneri | Neden |
|---|---|---|
| Matematikçi | en güçlü kademe | Sistem buna dayanıyor. Hesabı yanlış yaparsa tüm tartışma çöker. |
| Teori rolleri, tur 1 | orta kademe | Teori yazmak ve veriden üç rakam çekmek ağır iş değil. |
| Teori rolleri, tur 2 | orta kademe | Karar tek kelime, gerekçe 80 kelime. |
| Lider | en güçlü kademe | Senin oturumun, koşuyu o yönetiyor. |

Dört teori rolünü orta kademeye indirdiğinde maliyetin büyük kısmı iner ve hakem gücünü korur.

## Ne zaman koşturma

- **Veri yoksa.** Sistem rakamla çalışıyor. Elinde rakam yoksa beş ajan da hikaye anlatır ve hakem hepsini "ayrıştırılamıyor" diye işaretler. Boşa koşarsın.
- **Cevabı zaten biliyorsan.** Teyit için beş ajan açmak pahalı bir onay mekanizması.
- **Soru tek sonuca bağlı değilse.** "Neden satmıyoruz" bir soru değil. "Geçen ayın kampanyası neden 40 satış getirdi de öncekiler 120 getirdi" bir soru.

Sistem en çok, elinde veri olduğu halde sebebi ayırt edemediğin durumda kazandırıyor.
