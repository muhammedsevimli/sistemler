"""Zamanlayıcının her gün çağırdığı koşucu.

Ne yapar:
1. sen/ILAN.md içinde `kaynak: gmail` ya da `gonder: evet` varsa (ve demo değilse)
   Chrome açık değilse açar ve Claude'u `--chrome` ile başlatır. Klasör modunda
   ve demo modunda tarayıcıya hiç dokunmaz.
2. Sistem klasöründe `claude -p` ile "günlük koşu" komutunu verir.
3. Çıktıyı raporlar/log-<tarih>.txt dosyasına yazar.

Elle denemek için:   py araclar/gunluk_kosu.py
Komutu görmek için:  py araclar/gunluk_kosu.py --kuru   (çalıştırmaz, yalnız yazdırır)
"""
from __future__ import annotations

import datetime as dt
import os
import platform
import re
import shutil
import subprocess
import sys
import time
from pathlib import Path

KOK = Path(__file__).resolve().parent.parent
RAPORLAR = KOK / "raporlar"
MAX_TURNS = "150"


def ayar(ad: str) -> str:
    yol = KOK / "sen" / "ILAN.md"
    if not yol.exists():
        return ""
    m = re.search(rf"^\s*-?\s*{ad}:\s*(\S+)", yol.read_text(encoding="utf-8"), re.M)
    return m.group(1).strip().lower() if m else ""


def chrome_gerekli() -> bool:
    if ayar("demo") == "evet":
        return False
    return ayar("kaynak") == "gmail" or ayar("gonder") == "evet"


def chrome_acik_mi() -> bool:
    if platform.system() == "Windows":
        out = subprocess.run(["tasklist", "/FI", "IMAGENAME eq chrome.exe"], capture_output=True, text=True).stdout
        return "chrome.exe" in out
    out = subprocess.run(["pgrep", "-f", "Google Chrome|chrome"], capture_output=True, text=True).stdout
    return bool(out.strip())


def chrome_ac() -> None:
    system = platform.system()
    if system == "Windows":
        os.startfile("chrome")  # type: ignore[attr-defined]
    elif system == "Darwin":
        subprocess.Popen(["open", "-a", "Google Chrome"])
    else:
        exe = shutil.which("google-chrome") or shutil.which("chromium") or "google-chrome"
        subprocess.Popen([exe])
    time.sleep(8)


def komut_kur(claude: str, chrome: bool) -> list[str]:
    komut = [claude, "-p"]
    if chrome:
        komut.append("--chrome")
    komut += [
        "--permission-mode", "bypassPermissions",
        "--max-turns", MAX_TURNS,
        "--output-format", "text",
        "günlük koşu",
    ]
    return komut


def main() -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8")  # type: ignore[attr-defined]
    except Exception:  # noqa: BLE001
        pass
    kuru = "--kuru" in sys.argv
    claude = shutil.which("claude") or shutil.which("claude.cmd")
    chrome = chrome_gerekli()
    if kuru:
        print("Çalışma klasörü:", KOK)
        print("Chrome gerekli mi:", "evet" if chrome else "hayır")
        print("Komut:", " ".join(komut_kur(claude or "claude", chrome)))
        return 0

    RAPORLAR.mkdir(exist_ok=True)
    bugun = dt.date.today().isoformat()
    log = RAPORLAR / f"log-{bugun}.txt"
    if not claude:
        log.write_text("claude komutu bulunamadı. Claude Code kurulu mu?\n", encoding="utf-8")
        return 2
    if chrome and not chrome_acik_mi():
        chrome_ac()

    baslangic = dt.datetime.now()
    with log.open("a", encoding="utf-8") as f:
        f.write(f"== {baslangic:%Y-%m-%d %H:%M} başladı ==\n")
        f.flush()
        sonuc = subprocess.run(komut_kur(claude, chrome), cwd=KOK, stdout=f, stderr=subprocess.STDOUT,
                               text=True, encoding="utf-8", errors="replace")
        bitis = dt.datetime.now()
        f.write(f"\n== {bitis:%H:%M} bitti · exit {sonuc.returncode} · "
                f"{int((bitis - baslangic).total_seconds() // 60)} dk ==\n")
    return sonuc.returncode


if __name__ == "__main__":
    sys.exit(main())
