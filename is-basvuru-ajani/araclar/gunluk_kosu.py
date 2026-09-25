"""Zamanlayıcının her gün çağırdığı koşucu.

Ne yapar:
1. Chrome açık değilse açar (Claude in Chrome eklentisi tarayıcı açıkken çalışır).
2. Sistem klasöründe `claude -p --chrome` ile "günlük koşu" komutunu verir.
3. Çıktıyı raporlar/log-<tarih>.txt dosyasına yazar.

Elle denemek için:  py araclar/gunluk_kosu.py
Kuru koşu için sen/HEDEF.md içinde `gonder: hayir` bırak.
"""
from __future__ import annotations

import datetime as dt
import os
import platform
import shutil
import subprocess
import sys
import time
from pathlib import Path

KOK = Path(__file__).resolve().parent.parent
RAPORLAR = KOK / "raporlar"
MAX_TURNS = "200"


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


def main() -> int:
    RAPORLAR.mkdir(exist_ok=True)
    bugun = dt.date.today().isoformat()
    log = RAPORLAR / f"log-{bugun}.txt"
    claude = shutil.which("claude") or shutil.which("claude.cmd")
    if not claude:
        log.write_text("claude komutu bulunamadı. Claude Code kurulu mu?\n", encoding="utf-8")
        return 2
    if not chrome_acik_mi():
        chrome_ac()

    komut = [
        claude,
        "-p",
        "--chrome",
        "--permission-mode", "bypassPermissions",
        "--max-turns", MAX_TURNS,
        "--output-format", "text",
        "günlük koşu",
    ]
    baslangic = dt.datetime.now()
    with log.open("a", encoding="utf-8") as f:
        f.write(f"== {baslangic:%Y-%m-%d %H:%M} başladı ==\n")
        f.flush()
        sonuc = subprocess.run(komut, cwd=KOK, stdout=f, stderr=subprocess.STDOUT, text=True, encoding="utf-8", errors="replace")
        bitis = dt.datetime.now()
        f.write(f"\n== {bitis:%H:%M} bitti · exit {sonuc.returncode} · {int((bitis - baslangic).total_seconds() // 60)} dk ==\n")
    return sonuc.returncode


if __name__ == "__main__":
    sys.exit(main())
