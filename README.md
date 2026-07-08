# Sistemler

Muhammed Sevimli'nin AI ile kurduğu gerçek sistemlerin açık koleksiyonu. Her sistem kendi klasöründe, tek başına indirilip kullanılabilir. Hepsi sade, çoğu tek bir markdown paketi; kod bilmene gerek yok.

## Sistemler

| Sistem | Ne işe yarar | Klasör |
|---|---|---|
| Marka Hafızası | Markanı bir kere yaz, AI bir daha unutmasın. Claude Code, Cursor, Codex ve 20+ araçta çalışan üç dosyalık marka hafızası. | [marka-hafizasi/](marka-hafizasi/) |
| Satış CRM | Satış / çağrı merkezi ekipleri için tek dosyalık CRM. Her müşteri tek kartta, sabah aranacaklar listesi, ay sonu satış paneli. Ekip için Google Sheets ile ortak mod. | [satis-crm/](satis-crm/) |
| Haftalık Rakip Takipçisi | Rakiplerini (site, haber, youtube, instagram) haftada bir tarayıp pazartesi tek rapora indiren sistem: her yeni içeriğin özeti + markana hangi açıyla uyarlanacağı. | [rakip-takip/](rakip-takip/) |
| İkinci Beyin | İşini bir kere dosyalara yaz, AI her işte geçmişi zaten bilsin: projeler, kararlar, kişiler, kaynaklar. Sistem her işten önce sadece o işe gerekeni yükler. | [ikinci-beyin/](ikinci-beyin/) |
| Carousel + Hook Üretici | Konuyu ver, sistem markanın sesiyle 3 kapak hook'u ve 7 slaytlık carousel çıkarsın (görsel yönergeleri + LinkedIn çevirisiyle). | [carousel-uretici/](carousel-uretici/) |

Zamanla yeni sistemler eklenecek. Her sistemin kendi README'si kurulumu anlatır.

## Kurulum

Her sistemi tek başına çekebilirsin. Örneğin Marka Hafızası için:

```bash
npx degit muhammedsevimli/sistemler/marka-hafizasi marka-hafizasi
```

Ya da tüm repoyu klonla, veya yeşil **Code → Download ZIP** ile indirip istediğin klasörü kullan.

## Desteklenen araçlar

Dosya-tabanlı sistemler (ör. marka hafızası) şu araçların hepsinde aynı kuralla çalışır; hangi aracı kullanırsan o kendi dosyasını okuyor. Kendi başına çalışan araçlar (satış CRM tarayıcıda, rakip takipçisi Node ile) için kurulum ilgili sistemin README'sindedir.

| Araç | Okuduğu dosya |
|---|---|
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/` |
| Codex, Google Antigravity, Windsurf, Kilo ve 20+ araç | `AGENTS.md` (evrensel açık standart) |

---

Bu sistemleri **Muhammed Sevimli** kurdu. AI ile gerçek satış ve büyüme sistemleri. Kurarken takılırsan ya da adım adım anlatımlı rehber istersen yaz:

- Web: https://muhammedsevimli.com
- Instagram: https://instagram.com/msevimli_
- X: https://x.com/_msevimli
- Threads: https://threads.net/@msevimli_
- YouTube: https://youtube.com/@msevimli
- E-posta: hey@muhammedsevimli.com

## Lisans

[MIT](LICENSE)
