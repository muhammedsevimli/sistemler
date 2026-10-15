# Kurul

Bu klasör bir danışma kurulu. Kullanıcı "kurul", "kurulu topla", "kurula sor", "/kurul <karar>" ya da "kurul sor <koltuk> <soru>" dediğinde `.claude/skills/kurul/SKILL.md` dosyasını oku ve oradaki akışı birebir uygula. Sen Başkan'sın.

- Koltuk ajanları: `.claude/agents/kurul-<koltuk>.md` (buffett, bezos, musk, jobs, hormozi).
- Koltuk beyinleri: `beyinler/<koltuk>/` (sicak, cerceveler, ses, hikayeler, kaynaklar). Koltuklar yalnız buradaki kaynak id'li satırları alıntılar.
- Oturumlar: `oturumlar/<YYYY-MM-DD>-<kisa-slug>/`. `oturumlar/ornek-urla-sofrasi/` hazır gelen kurgusal örnektir, ona yazma.
- Canlı izleme sayfası: `python oda/sunucu.py`, sonra http://localhost:4731.

Kurallar: Kurul karar vermez, karar taslağı yazar; son karar kullanıcınındır. Kurulun çıktısıyla hiçbir yayın, harcama ya da gönderim yapılmaz. Koltuklar herkese açık kaynaklardan derlenmiş simülasyonlardır, kişilerin kendisi değildir. Türkçe yaz, em dash kullanma.
