# Kriterler · dört ölçüt, 1-5 puanlama cetveli

> Her alternatif bu dört kriterden puan alır. Toplam 20 üzerinden. Her puanın yanına tek satır gerekçe zorunlu, gerekçesiz puan yazılmaz.

---

## 1. Kurulum zorluğu

Alternatifi ayağa kaldırmak ne kadar iş.

| Puan | Anlamı |
|---|---|
| 5 | Tek tık kurulum ya da tek satır docker komutu. Hazır yönetilen ücretsiz katmanı var. |
| 4 | Docker compose dosyası hazır, kopyala çalıştır. Yarım saat. |
| 3 | Docker var ama ortam değişkenleri, veritabanı bağlantısı gibi elle ayar gerekiyor. Yarım gün. |
| 2 | Elle bağımlılık kurulumu, derleme, ters vekil sunucu ayarı gerekiyor. Bir gün. |
| 1 | Belge yetersiz ya da kurulum topluluk forumlarında çözülüyor. Belirsiz. |

**Not:** Kullanıcının daha önce hiç sunucu kurmadığını varsay. `sen/01-araclar.md`'de teknik seviye yazılıysa ona göre kaydır.

---

## 2. Teknik bilgi gereksinimi

Kurulduktan SONRA ayakta tutmak ne kadar bilgi ister. Kurulum bir kerelik, bakım süreklidir.

| Puan | Anlamı |
|---|---|
| 5 | Kurduktan sonra unutuyorsun. Güncelleme otomatik ya da tek tık. |
| 4 | Ayda bir güncelleme komutu çalıştırıyorsun. |
| 3 | Güncellemede ara sıra bozuluyor, sürüm notlarını okumak gerekiyor. |
| 2 | Veritabanı göçü, yedek geri yükleme gibi işler senin sorumluluğunda. |
| 1 | Bir şey bozulduğunda hata kayıtlarını okuyup çözmen gerekiyor. |

**Not:** Bu kriter en çok küçümsenen kriterdir. Kurulumu kolay ama bakımı zor bir araç, üçüncü ayda terk edilir ve o zamana kadar hem aboneliği hem sunucuyu ödemiş olursun.

---

## 3. Gerçek aylık maliyet

Self-host bedava değil. Toplam maliyeti hesapla, aboneliğin karşısına koy.

Hesaba girenler:
- **Sunucu kirası.** Küçük bir sunucu aylık 4-6 dolar bandında. Birden çok aracı aynı sunucuya koyabiliyorsan maliyeti böl ve payını yaz.
- **Alan adı.** Yıllık, aylığa böl.
- **Yedekleme.** Bedava değilse yaz. Veri kaybı riskini "bedava" saymak en pahalı hata.
- **Senin zamanın.** Kurulum saatini ve aylık bakım saatini yaz. Parasal değer biçme, saat olarak yaz, kullanıcı kendi saatinin değerini bilir.

| Puan | Anlamı |
|---|---|
| 5 | Gerçek maliyet aboneliğin onda birinden az. |
| 4 | Üçte birinden az. |
| 3 | Yarısı civarı. |
| 2 | Aboneliğe yakın. |
| 1 | Aboneliği geçiyor. Bu satır DOKUNMA bandına gider. |

**Kural:** Ücretsiz yönetilen katmanı olan alternatiflerde sunucu maliyeti sıfırdır ama kota sınırını yaz. Kotayı aşınca ne olacağını da yaz.

---

## 4. Veri taşıma riski

Mevcut aracındaki veriyi alternatife taşımak ne kadar riskli.

| Puan | Anlamı |
|---|---|
| 5 | Taşınacak veri yok ya da alternatif mevcut aracın dışa aktarma dosyasını doğrudan okuyor. |
| 4 | Standart bir biçim var (CSV, JSON, Markdown) ve içe aktarma aracı hazır. |
| 3 | Dışa aktarma var ama biçim dönüştürmek gerekiyor. |
| 2 | Dışa aktarma kısmi. Bazı veriler (ekler, ilişkiler, geçmiş) taşınmıyor. |
| 1 | Dışa aktarma yok ya da elle kopyalama gerekiyor. |

**Kural:** Taşınmayan veri varsa neyin taşınmadığını açıkça yaz. "Notlar taşınır ama yorum geçmişi taşınmaz" tipi tek cümle, kullanıcının kararını değiştirebilir.

---

## Bant eşikleri

Toplam puana ve mantık kontrolüne göre üç bant:

| Bant | Eşik | Ek koşul |
|---|---|---|
| **KES** | 15 ve üstü | Proje son bir yılda güncellenmiş olmalı. Maliyet puanı 3'ün altındaysa KES bandına giremez. |
| **DENE** | 10-14 | Ya da yüksek puanlı ama veri taşıma riski 2 ve altı olanlar. Önce paralel çalıştırılır, eski abonelik hemen iptal edilmez. |
| **DOKUNMA** | 9 ve altı | Ya da alternatifi olmayan, bakımsız, ya da toplam maliyeti aboneliği geçenler. |

**Sert kural:** Bir yıldan uzun süredir güncellenmemiş proje, puanı ne olursa olsun KES bandına konmaz.

---

## Lisans notu (puana girmez, rapora girer)

Puanlamaya dahil değil ama her alternatifin yanına lisansı yazılır. Kullanıcı kararı buna bakarak verir:

- **MIT / Apache 2.0:** ticari kullanımda serbest, dert yok.
- **AGPL:** kendi müşterine servis olarak sunacaksan kaynak paylaşımı yükümlülüğü doğurabilir. Kişisel kullanımda sorun değil. Bu ayrımı yaz.
- **Kaynağı açık ama lisansı özel:** ücretsiz görünüp kullanım sınırı koyabilir. Sınırı yaz.
