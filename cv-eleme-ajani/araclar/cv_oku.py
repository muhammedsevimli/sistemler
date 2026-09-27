"""CV dosyalarını düz metne çevirir. Ajan puanlamadan önce her CV'yi bununla okur.

Kullanım:
  py araclar/cv_oku.py adaylar/gelen/ayse-cv.pdf     tek dosyanın metni
  py araclar/cv_oku.py adaylar/gelen                 klasördeki YENİ CV'lerin metni
  py araclar/cv_oku.py adaylar/gelen --liste         yalnız dosya listesi (yeni / okundu)
  py araclar/cv_oku.py adaylar/gelen --hepsi         adaylar.csv'de olanlar dahil hepsi

"Yeni" demek: adaylar.csv içinde ne dosya adı ne de sha değeri geçiyor.
Desteklenen: .pdf  .docx  .txt  .md
  PDF   pypdf gerekir (yoksa pdfminer.six denenir). Kurulum: py -m pip install pypdf
  DOCX  ek kurulum gerekmez (Word dosyası bir zip arşividir, içi okunur).
  TXT/MD  UTF-8, olmazsa Windows Türkçe (cp1254) kodlamasıyla okunur.
Eski .doc biçimi okunmaz: Word'de "Farklı kaydet > .docx" gerekir.
"""
from __future__ import annotations

import csv
import hashlib
import re
import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

KOK = Path(__file__).resolve().parent.parent
TABLO = KOK / "adaylar.csv"
DESTEK = {".pdf", ".docx", ".txt", ".md"}
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"


class OkumaHatasi(Exception):
    pass


def sha(yol: Path) -> str:
    return hashlib.sha256(yol.read_bytes()).hexdigest()[:12]


def pdf_oku(yol: Path) -> str:
    try:
        from pypdf import PdfReader  # type: ignore
    except ImportError:
        PdfReader = None  # type: ignore
    if PdfReader is not None:
        okuyucu = PdfReader(str(yol))
        if okuyucu.is_encrypted:
            try:
                okuyucu.decrypt("")
            except Exception as e:  # noqa: BLE001
                raise OkumaHatasi("PDF şifreli, açılamadı. Adaydan şifresiz halini iste.") from e
        return "\n".join((sayfa.extract_text() or "") for sayfa in okuyucu.pages)
    try:
        from pdfminer.high_level import extract_text  # type: ignore
    except ImportError as e:
        raise OkumaHatasi(
            "PDF okumak için bir kütüphane gerekiyor. Şunu çalıştır:  py -m pip install pypdf"
        ) from e
    return extract_text(str(yol))


def docx_oku(yol: Path) -> str:
    try:
        with zipfile.ZipFile(yol) as z:
            xml = z.read("word/document.xml")
    except (zipfile.BadZipFile, KeyError) as e:
        raise OkumaHatasi("Word dosyası bozuk ya da .docx değil. Adaydan PDF iste.") from e
    kok = ET.fromstring(xml)
    satirlar: list[str] = []
    for p in kok.iter(f"{W}p"):
        parcalar: list[str] = []
        for dugum in p.iter():
            if dugum.tag == f"{W}t" and dugum.text:
                parcalar.append(dugum.text)
            elif dugum.tag == f"{W}tab":
                parcalar.append("\t")
            elif dugum.tag in (f"{W}br", f"{W}cr"):
                parcalar.append("\n")
        satirlar.append("".join(parcalar))
    return "\n".join(satirlar)


def duz_oku(yol: Path) -> str:
    ham = yol.read_bytes()
    for kodlama in ("utf-8-sig", "cp1254", "latin-1"):
        try:
            return ham.decode(kodlama)
        except UnicodeDecodeError:
            continue
    raise OkumaHatasi("Metin kodlaması çözülemedi.")


def metin(yol: Path) -> str:
    uzanti = yol.suffix.lower()
    if uzanti == ".pdf":
        m = pdf_oku(yol)
    elif uzanti == ".docx":
        m = docx_oku(yol)
    elif uzanti in (".txt", ".md"):
        m = duz_oku(yol)
    elif uzanti == ".doc":
        raise OkumaHatasi("Eski .doc biçimi okunmuyor. Word'de .docx olarak kaydedilmeli ya da PDF istenmeli.")
    else:
        raise OkumaHatasi(f"Desteklenmeyen biçim: {uzanti}")
    m = re.sub(r"[ \t]+\n", "\n", m)
    m = re.sub(r"\n{3,}", "\n\n", m).strip()
    if len(m) < 80:
        raise OkumaHatasi(
            "Dosyadan neredeyse hiç metin çıkmadı. Büyük ihtimalle taranmış (resim) PDF. "
            "SAHİBE SOR: adaydan metin içeren PDF ya da Word iste."
        )
    return m


def okunanlar() -> tuple[set[str], set[str]]:
    adlar: set[str] = set()
    shalar: set[str] = set()
    if TABLO.exists():
        with TABLO.open(encoding="utf-8", newline="") as f:
            for satir in csv.DictReader(f):
                if satir.get("dosya"):
                    adlar.add(satir["dosya"].strip())
                if satir.get("sha"):
                    shalar.add(satir["sha"].strip())
    return adlar, shalar


def main() -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8")  # type: ignore[attr-defined]
    except Exception:  # noqa: BLE001
        pass
    argumanlar = [a for a in sys.argv[1:] if not a.startswith("--")]
    bayraklar = {a for a in sys.argv[1:] if a.startswith("--")}
    if not argumanlar:
        print(__doc__)
        return 2
    hedef = Path(argumanlar[0])
    if not hedef.is_absolute():
        hedef = (Path.cwd() / hedef).resolve()
    if not hedef.exists():
        print(f"bulunamadı: {hedef}")
        return 2

    if hedef.is_file():
        try:
            print(metin(hedef))
            return 0
        except OkumaHatasi as e:
            print(f"OKUNAMADI: {hedef.name}: {e}")
            return 3

    adlar, shalar = okunanlar()
    dosyalar = sorted(p for p in hedef.iterdir() if p.is_file() and p.suffix.lower() in DESTEK | {".doc"})
    hata = 0
    yeni_sayisi = 0
    for yol in dosyalar:
        s = sha(yol)
        eski = yol.name in adlar or s in shalar
        if "--liste" in bayraklar:
            print(f"{'okundu' if eski else 'yeni  '}  sha:{s}  {yol.name}")
            continue
        if eski and "--hepsi" not in bayraklar:
            continue
        yeni_sayisi += 1
        print(f"===== {yol.name} · sha:{s} =====")
        try:
            print(metin(yol))
        except OkumaHatasi as e:
            hata += 1
            print(f"OKUNAMADI: {e}")
        print()
    if "--liste" not in bayraklar:
        print(f"== {yeni_sayisi} dosya okundu, {hata} tanesi okunamadı ==")
    return 0 if hata == 0 else 3


if __name__ == "__main__":
    raise SystemExit(main())
