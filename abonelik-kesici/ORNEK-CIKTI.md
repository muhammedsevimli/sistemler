# Kesme listesi · 2026-07-29

> FAZ 2 çıktısı. Girdi: `sen/01-araclar.md` (test profili), tarama: `veri/tarama-2026-07-29.md`.
> Profil: serbest çalışan, kopyala yapıştır komut çalıştırabilir, sunucusu yok, üç kişilik ekip.
> Kur: 1 USD = 47,386 TL (29 Tem 2026). Bütün TL rakamları bu kurla.

---

## Bölüm A · Şu an ne ödüyorsun

| Araç | Aylık | Yıllık | Bu araçta gerçekten ne yapıyorsun |
|---|---|---|---|
| Notion | $10,00 | $120 | haftalık plan ve müşteri notları, 3 kişi görüyor, veritabanı görünümü kullanmıyorum |
| Mailchimp | $20,00 | $240 | 800 kişilik listeye ayda 2 mail |
| Calendly | $12,00 | $144 | müşteri görüşmesi randevusu |
| Typeform | $25,00 | $300 | müşteri brief formu, ayda 10-15 yanıt |
| Loom | $12,50 | $150 | müşteriye ekran kaydı gönderiyorum |

**Aylık toplam: $79,50** · **Yıllık toplam: $954** · yıllık **45.206 TL**

---

## Bölüm B · Araç araç alternatif bulguları

Tam tarama tablosu `veri/tarama-2026-07-29.md` içinde. Burada yalnız karar için gerekenler.

**Notion.** Kullanım wiki tarafında, veritabanı görünümü yok. Docmost (AGPL-3.0) bu kullanımı tam karşılıyor ve bakımı en hafif olanı. AppFlowy ve AFFiNE fazlasını veriyor, karşılığında bakım yükü getiriyor. AFFiNE hâlâ 1.0 öncesi.

**Mailchimp.** Listmonk (AGPL-3.0) tek Go binary. 800 abone x 2 mail = ayda 1.600 gönderim, bu hacim SMTP relay tarafında neredeyse bedava. Mailchimp'te abone başına ödüyorsun, Listmonk'ta gönderim başına.

**Calendly.** Cal.com (MIT) barındırılan sürümü bireysel kullanıcıya ücretsiz. Bu satırda sunucu kurmuyorsun, hesap açıyorsun. Repo adı `cal.diy` olarak değişmiş.

**Typeform.** Formbricks en olgunu ama üçü de açık çekirdek lisansta. Ayda 10-15 yanıt için self-host etmek fazla iş, Formbricks'in kendi ücretsiz bulut katmanı bu hacme yeter.

**Loom.** Cap'in Studio Mode'u kişisel kullanımda ücretsiz, filigran ve süre sınırı yok. Ama paylaşım linki için kendi S3 deponu bağlaman gerekiyor, bu küçük bir ek maliyet.

---

## Bölüm C · Dört kriter puan tablosu

| Araç | Alternatif | Kurulum | Bakım | Maliyet | Veri taşıma | Toplam | Bant |
|---|---|---|---|---|---|---|---|
| Calendly | Cal.com | 5 | 5 | 5 | 4 | **19**/20 | KES |
| Loom | Cap | 4 | 4 | 5 | 5 | **18**/20 | KES |
| Mailchimp | Listmonk | 3 | 4 | 4 | 4 | **15**/20 | KES |
| Typeform | Formbricks | 3 | 3 | 4 | 3 | **13**/20 | DENE |
| Notion | Docmost | 3 | 3 | 4 | 3 | **13**/20 | DENE |

**3 ve altı puanların gerekçesi:**

- *Listmonk kurulum 3:* tek binary ama sunucu kiralamak, alan adı bağlamak ve SMTP sağlayıcı ayarlamak gerekiyor. Bu profil için yarım gün.
- *Formbricks kurulum 3:* docker compose hazır ama ortam değişkeni ve veritabanı ayarı elle yapılıyor.
- *Formbricks bakım 3:* açık çekirdek, sürüm geçişlerinde kurumsal/açık ayrımı değişebiliyor, sürüm notu okumak gerekiyor.
- *Formbricks veri taşıma 3:* formu yeniden kuruyorsun. Eski yanıt geçmişini taşımak elle iş.
- *Docmost kurulum 3:* docker compose + ayrı Postgres.
- *Docmost bakım 3:* veritabanı yedeği senin sorumluluğunda.
- *Docmost veri taşıma 3:* Notion markdown dışa aktarımı içe alınıyor ama biçim kayması oluyor, düzeltmek gerekiyor.

---

## Bölüm D · Kesme listesi

### KES · bu hafta

| Araç | Yerine | Aylık kazanç | Yıllık kazanç | İlk adım |
|---|---|---|---|---|
| Calendly | Cal.com barındırılan (ücretsiz) | $12,00 | $144 · 6.824 TL | cal.com'da hesap aç, etkinlik tiplerini yeniden kur, linki değiştir |
| Loom | Cap Studio Mode | $12,50 | $150 · 7.108 TL | Cap uygulamasını kur, S3 deposu bağla, eski Loom kayıtlarını indir |
| Mailchimp | Listmonk | $20,00 | $240 · 11.373 TL | sunucu kirala, Listmonk kur, SMTP bağla, aboneleri CSV ile taşı |

### DENE · paralel çalıştır, hemen iptal etme

| Araç | Yerine | Potansiyel yıllık | Neden hemen değil |
|---|---|---|---|
| Notion | Docmost | $120 · 5.686 TL | Notion dışa aktarımında biçim kayması var. Önce bir ay iki sistemi paralel kullan, notların düzgün taşındığını gör. |
| Typeform | Formbricks | $300 · 14.216 TL | Ayda 10-15 yanıt için self-host fazla iş. Önce Formbricks'in ücretsiz bulut katmanında dene, yeterse zaten sunucu gerekmiyor. |

### DOKUNMA

Bu taramada DOKUNMA bandına düşen araç yok. Beşinin de bakımlı ve olgun bir karşılığı var.

---

## Bölüm E · Yıllık fark

| | USD | TL |
|---|---|---|
| Şu anki yıllık abonelik gideri | $954 | 45.206 |
| KES bandı uygulanırsa brüt tasarruf | $534 | 25.304 |
| Eklenen yıllık altyapı gideri | $96 | 4.549 |
| **Net yıllık fark** | **$438** | **20.755** |
| Kurulum için gereken tek seferlik süre | ~3 saat | |

**Altyapı gideri neyden oluşuyor:**
- Sunucu (Listmonk için, aylık ~$6): $72/yıl. Docmost ve Formbricks de sonradan aynı sunucuya binerse bu satır artmıyor.
- SMTP relay (ayda 1.600 mail, ~$1): $12/yıl.
- S3 uyumlu depo (Cap paylaşım linkleri, ~$1): $12/yıl.

**Kur notu:** 1 USD = 47,386 TL, 29 Tem 2026, open.er-api.com. Kur değişirse TL rakamları değişir, USD rakamları sabit kalır.

**DENE bandı da uygulanırsa** brüt tasarruf $954'e çıkar. Sunucu zaten kiralanmış olacağı için ek altyapı gideri sıfıra yakın, net fark yaklaşık $846 (40.088 TL) olur. Ama bu, iki veri taşıma işini de göze almak demek.

---

## Bölüm F · Karşılığı bulunamayanlar

Yok. Beş aracın beşine de bakımlı karşılık bulundu. Taramada erişilemeyen kaynak olmadı.

**Lisans uyarısı (karara girer):** Formbricks, Cap ve Typebot açık çekirdek lisansta. LICENSE dosyaları "Portions of this software are licensed as follows" ile başlıyor, yani gövde açık, kurumsal dizinler ticari. Kişisel ve küçük ekip kullanımında engel yok. Listmonk, Docmost ve AppFlowy AGPL-3.0: kendi müşterine servis olarak sunacaksan kaynak paylaşımı yükümlülüğü doğar, kendi işinde kullanıyorsan sorun yok. Cal.com MIT, hiçbir kısıt yok.

---

## Bölüm G · Önceki taramayla karşılaştırma

Bu ilk tarama. Karşılaştırılacak eski veri yok. Üç ay sonra tekrar çalıştırıldığında bu dosya kaynak alınacak ve zam yapan araçlar işaretlenecek.
