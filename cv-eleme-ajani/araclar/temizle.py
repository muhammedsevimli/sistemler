"""Adayların kişisel verisini siler (KVKK). Süreç bitince çalıştırılır.

  py araclar/temizle.py          silinecek dosyaları listeler, hiçbir şey silmez
  py araclar/temizle.py --onay   listelenen dosyaları siler, adaylar.csv'yi sıfırlar

Silinenler: adaylar/gelen/, raporlar/, davetler/, retler/, beni-ele/ içeriği
            ve adaylar.csv içindeki aday satırları.
Kalanlar:   adaylar/ornek/ (kurgusal CV'ler), sen/ILAN.md, araclar/, belgeler,
            klasörlerdeki .gitkeep dosyaları.
"""
from __future__ import annotations

import sys
from pathlib import Path

KOK = Path(__file__).resolve().parent.parent
KLASORLER = ["adaylar/gelen", "raporlar", "davetler", "retler", "beni-ele"]
TABLO = KOK / "adaylar.csv"
BASLIK = "tarih,dosya,sha,aday,eposta,puan,durum,gerekce,taslak,not\n"


def silinecekler() -> list[Path]:
    liste: list[Path] = []
    for ad in KLASORLER:
        klasor = KOK / ad
        if not klasor.exists():
            continue
        for p in sorted(klasor.rglob("*")):
            if p.is_file() and p.name != ".gitkeep":
                liste.append(p)
    return liste


def main() -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8")  # type: ignore[attr-defined]
    except Exception:  # noqa: BLE001
        pass
    onay = "--onay" in sys.argv
    dosyalar = silinecekler()
    satir = 0
    if TABLO.exists():
        satir = max(0, len(TABLO.read_text(encoding="utf-8").splitlines()) - 1)

    if not dosyalar and satir == 0:
        print("Silinecek kişisel veri yok.")
        return 0

    for p in dosyalar:
        print(("silindi  " if onay else "silinecek  ") + str(p.relative_to(KOK)).replace("\\", "/"))
    print(f"adaylar.csv: {satir} aday satırı {'sıfırlandı' if onay else 'sıfırlanacak'}")

    if not onay:
        print(f"\nToplam {len(dosyalar)} dosya. Silmek için:  py araclar/temizle.py --onay")
        return 0

    for p in dosyalar:
        p.unlink()
    for ad in KLASORLER:
        klasor = KOK / ad
        for d in sorted((x for x in klasor.rglob("*") if x.is_dir()), reverse=True):
            try:
                d.rmdir()
            except OSError:
                pass
    TABLO.write_text(BASLIK, encoding="utf-8", newline="\n")
    print(f"\nTamam: {len(dosyalar)} dosya silindi, adaylar.csv boş tabloya döndü.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
