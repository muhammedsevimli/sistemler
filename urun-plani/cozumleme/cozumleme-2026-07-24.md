# Çözümleme · 2026-07-24 · Hedef: plausible.io

> Bu dosyayı sistem yazdı. Sayfalar Claude Code'un web araçlarıyla (WebFetch) 24 Tem 2026'da gerçekten gezildi.
> Operatör profili: kurgusal (`sen/01-profil.md`). Hedef: gerçek, herkese açık bir ürün sitesi.
> Buradaki her satır sayfada gerçekten yazandır. Erişilemeyen sayfa "erişilemedi" diye işaretlidir.

## A) Tarama künyesi

| Sayfa | URL | Sonuç |
|---|---|---|
| Ana sayfa | https://plausible.io/ | **çekildi** |
| Fiyat | https://plausible.io/#pricing | **çekildi** (fiyat bölümü ana sayfa içinde) |
| Dokümantasyon (başlık haritası) | https://plausible.io/docs | **çekildi** |
| Dokümantasyon (metrik tanımları) | https://plausible.io/docs/metrics-definitions | **çekildi** |
| Lisans / açık kaynak | https://plausible.io/open-source-website-analytics | **çekildi** |
| Yerelleştirilmiş fiyat sayfası (denendi) | https://plausible.io/docs/turkiye-fiyatlandirma-2026 | **erişilemedi · HTTP 404, sayfa yok.** Böyle bir sayfa olmadığı için buradan gelecek hiçbir bilgi çıktıya yazılmadı. |

Özellikler için ayrı bir `/features` sayfası denenmedi: ana sayfa zaten adlandırılmış özellik listesi taşıyordu, envanter oradan çıkarıldı.

## B) Ürün tek cümlede
Gizliliğe odaklı web sitesi analitiği. Sayfada kendini Google Analytics'in daha sade ve hafif alternatifi olarak konumlandırıyor.
Kaynak: https://plausible.io/

## C) Kime hitap ediyor (sayfada yazan kitle)
- E-ticaret işletmeleri
- SaaS şirketleri
- Ajanslar ve serbest çalışanlar
- İçerik üreticileri ve yayıncılar
- Kurumsal organizasyonlar

Kaynak: https://plausible.io/

## D) Özellik envanteri (ham liste, ayıklama yok)

| # | Özellik | Nerede geçiyor | Tek cümle ne işe yarıyor |
|---|---|---|---|
| 1 | Tek sayfalık sade panel | plausible.io | Tüm rakamlar tek ekranda, alt menüde kaybolmuyor |
| 2 | Hafif takip kodu (Google Analytics'e göre 54 kat küçük) | plausible.io | Site yavaşlamıyor |
| 3 | Çerezsiz, kalıcı kimlik tutmayan ölçüm | plausible.io | Onay bandı gerekmiyor |
| 4 | AB'de barındırma | plausible.io | Veri konumu iddiası |
| 5 | Açık kaynak kod | plausible.io + open-source sayfası | Kod herkese açık, incelenebilir |
| 6 | Gerçek zamanlı trafik | plausible.io, /docs | Şu an sitede kaç kişi var |
| 7 | Otomatik kaydırma derinliği ölçümü | plausible.io, /docs | Sayfanın ne kadarı okunmuş |
| 8 | AI araç trafiği takibi | plausible.io | Trafiğin AI kaynaklarından gelen kısmı |
| 9 | Search Console entegrasyonu | plausible.io, /docs | Arama performansı aynı panelde |
| 10 | UTM kampanya takibi + kanal gruplama | plausible.io, /docs | Trafiği kaynağa göre gruplama |
| 11 | Kod gerektirmeyen hedef tanımlama ve gelir takibi | plausible.io, /docs | Dönüşüm ve ciro ölçümü |
| 12 | Huni (funnel) analizi | plausible.io, /docs | Adım adım nerede kaybediyorsun |
| 13 | Kullanıcı yolculukları | plausible.io, /docs | Ziyaretçinin izlediği yol |
| 14 | Bot filtreleme | plausible.io | Sahte trafiği ayıklama |
| 15 | Google Analytics'ten veri aktarımı | plausible.io, /docs | Geçmiş veriyi taşıma |
| 16 | Ekip yönetimi, roller, paylaşılan görünüm | plausible.io, /docs | Birden çok kişi aynı veriye bakıyor |
| 17 | Özel olaylar ve kaydedilmiş segmentler | plausible.io, /docs | Kendi tanımladığın olay ve süzgeç |
| 18 | Notlar (annotations) | /#pricing, /docs | Grafiğe "bu gün şunu yaptık" notu |
| 19 | E-posta ve Slack raporları | /#pricing, /docs | Rakamlar kendi ayağına geliyor |
| 20 | Trafik sıçraması bildirimi | /docs | Ani artışta haber verme |
| 21 | Panel gömme (embed) | /docs | Paneli başka sayfada gösterme |
| 22 | Paylaşılan link | /docs | Panel linkini dışarı verme |
| 23 | Stats API, Events API, Sites API | /docs | Dışarıdan veri okuma ve yazma |
| 24 | Data Studio bağlayıcısı | plausible.io, /docs | Veriyi başka rapor aracına taşıma |
| 25 | Beyaz etiket entegrasyon | /docs | Ajansın kendi markasıyla sunması |
| 26 | Tek oturum açma (SSO) | /#pricing (Enterprise), /docs | Kurumsal giriş yönetimi |
| 27 | İki adımlı doğrulama | /docs | Hesap güvenliği |
| 28 | Otomatik 404 sayfası takibi | /docs, /docs/metrics-definitions | Kırık sayfaları görme |
| 29 | Dosya indirme takibi | /docs, /docs/metrics-definitions | İndirme sayısı |
| 30 | Dış bağlantı tıklaması takibi | /docs, /docs/metrics-definitions | Dışarı çıkan tıklamalar |
| 31 | Form gönderimi takibi | /docs, /docs/metrics-definitions | Form dolduran sayısı |
| 32 | Dönem karşılaştırma | /docs | Bu ay ile geçen ay |
| 33 | Birleştirilmiş görünüm (çok site tek ekran) | /docs | Ajans için toplu bakış |
| 34 | Sayfa ve trafik hariç tutma | /docs | İç trafiği ölçüme katmama |
| 35 | Veri dışa aktarma / ham olay dışa aktarımı | /docs, /#pricing (Enterprise) | Veriyi dışarı alma |

Toplam: 35 adlandırılmış özellik.

## E) Kullanıcı akışı (sayfadan okunabildiği kadar)
- **Kayıt:** 30 günlük ücretsiz deneme, kredi kartı istemiyor. Doküman sırası: hesap aç, siteyi ekle, takip kodunu yerleştir. Kaynak: https://plausible.io/#pricing ve https://plausible.io/docs
- **İlk değer anı:** takip kodu siteye yerleştikten sonra tek sayfalık panelde gerçek zamanlı ziyaretçinin görünmesi. Doküman akışına göre üç adım: hesap, site ekleme, kod yerleştirme. Kaynak: https://plausible.io/docs
- **Tekrar gelme sebebi:** biriken geçmiş veri, e-posta ve Slack raporları, trafik sıçraması bildirimi, hedef dönüşümleri. Kaynak: https://plausible.io/docs
- **Belirsiz:** kod yerleştirmeden panelde ne görüldüğü sayfada yazmıyor. Kurulumu bitiremeyen kullanıcının ne gördüğü belirsiz.

## F) Veri modeli ipuçları (ham)

| İpucu (aynen) | Nereden | Hangi nesneye işaret ediyor |
|---|---|---|
| "Add your website", "The Sites page", Sites API | /docs | Site nesnesi (kullanıcının izlediği her alan adı ayrı kayıt) |
| Events API, "Custom properties: attach custom data when sending pageviews and events" | /docs, /docs/metrics-definitions | Olay nesnesi (her sayfa görüntüleme ve özel olay tek kayıt) + olaya bağlı serbest alanlar |
| "Total Visits/Sessions: set of actions a user takes on your site", "Bounce Rate", "Visit Duration", "Entry Pages", "Exit Pages" | /docs/metrics-definitions | Oturum nesnesi (olayların üstünde bir gruplama katmanı) |
| "Goals/Events: track desired actions", "Conversion Rate", "Unique Conversions", "Total Conversions" | /docs/metrics-definitions | Hedef nesnesi + hedefe bağlı dönüşüm sayaçları |
| "Total Revenue", "Average Revenue: average revenue of orders tracked" | /docs/metrics-definitions | Olaya bağlı tutar alanı (gelir olayları) |
| "Funnels: sequence of steps and visitor drop off points" | /docs/metrics-definitions | Huni nesnesi (sıralı hedef adımları) |
| "Saved Segments", "Filters and segments" | /docs, /#pricing | Kaydedilmiş süzgeç nesnesi |
| "Annotations" | /docs, /#pricing | Nota bağlı tarih kaydı |
| "Locations: countries, regions and cities", "Browser", "Operating System", "Screen Size" | /docs/metrics-definitions | Olay üstünde tutulan boyut alanları (ülke, tarayıcı, işletim sistemi, ekran) |
| "Source", "Channels", "UTM Parameters", "Referrer Drilldown" | /docs/metrics-definitions | Olay üstünde tutulan kaynak alanları |
| "Team settings", "Users and roles", "Shared links" | /docs | Ekip, kullanıcı, rol, paylaşılan link nesneleri |
| "Subscription plans", "Change plan", "Download invoices" | /docs | Abonelik nesnesi + fatura |
| "Import from Google Analytics", "Import stats", "Export stats" | /docs | Aktarım işi nesnesi |
| "5 year data retention" (Business) | /#pricing | Saklama süresi, plana bağlı bir alan |

## G) Fiyat mantığı
- **Fiyat neye göre artıyor:** aylık sayfa görüntüleme hacmi. Üstüne özellik ve kapasite kapıları biniyor (site sayısı, ekip kişi sayısı, veri saklama süresi).
- **Basamaklar ve literal rakamlar (sayfada aynen yazan):**
  - Starter: 9 dolar / ay, 10 bin aylık sayfa görüntülemeye kadar
  - Growth: 14 dolar / ay, 3 siteye ve 3 ekip üyesine kadar
  - Business: 19 dolar / ay, 10 siteye ve 10 ekip üyesine kadar, 5 yıl veri saklama
  - Enterprise: fiyat yazmıyor ("custom"), 10 üzeri site, SSO, planlı ham veri dışa aktarımı
- **Ücretsiz deneme:** 30 gün, kredi kartı istemiyor.
- **Yıllık ödeme:** "2 ay bedava" ifadesi var.
- **Her planda ortak olan:** sade panel, e-posta ve Slack raporları, Google Analytics aktarımı, hedefler ve özel olaylar, kaydedilmiş segmentler, notlar.
- Kaynak: https://plausible.io/ ve https://plausible.io/#pricing

## H) Lisans ve kullanım şartı
Açık kaynak. Lisans adı sayfada aynen şöyle geçiyor: **"GNU Affero General Public License Version 3 (AGPLv3) or any later version"**. Sayfa kendi barındırmaya açıkça izin veriyor ("You can install and run Plausible on your own server") ve kodun GitHub'da okunabilir olduğunu söylüyor.
Kaynak: https://plausible.io/open-source-website-analytics

## I) Belirsizler (siteden anlaşılmayanlar)
- Starter dışındaki planların sayfa görüntüleme sınırı ana sayfada yazmıyor, yalnız site ve ekip sınırı yazıyor.
- Sayfa görüntüleme sınırı aşılırsa ne oluyor, sayfada yazmıyor.
- Starter planındaki veri saklama süresi yazmıyor (yalnız Business için 5 yıl geçiyor).
- Oturumun ne kadar sessizlikten sonra bittiği (oturum penceresi) yazmıyor.
- Aynı ziyaretçinin çerezsiz nasıl tekilleştirildiği teknik olarak açıklanmıyor.
- Enterprise fiyatı yok, "custom" diyor. Rakam üretilmedi.
- Türkiye'ye özel fiyat ya da yerel ödeme seçeneği olup olmadığı bulunamadı (denenen yerel sayfa 404 döndü).

## J) Tek satır özet
5 sayfa çekildi, 1 sayfaya erişilemedi (404), 35 adlandırılmış özellik toplandı, 14 veri modeli ipucu bulundu, lisans tespit edildi, fiyatta yalnız literal yazan 3 rakam alındı ve Enterprise için rakam uydurulmadı.
