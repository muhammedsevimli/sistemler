"""Günlük zamanlayıcıyı kurar. sen/HEDEF.md içindeki `saat:` değerini okur.

Windows: Görev Zamanlayıcı'ya "IsBasvuruAjani" görevi ekler.
macOS:   ~/Library/LaunchAgents/com.isbasvuruajani.plist yazar ve yükler.
Linux:   crontab satırı ekler.

Kaldırmak için:  py araclar/kur.py --kaldir
"""
from __future__ import annotations

import platform
import re
import subprocess
import sys
from pathlib import Path

KOK = Path(__file__).resolve().parent.parent
KOSUCU = KOK / "araclar" / "gunluk_kosu.py"
GOREV = "IsBasvuruAjani"


def saati_oku() -> tuple[int, int]:
    metin = (KOK / "sen" / "HEDEF.md").read_text(encoding="utf-8")
    m = re.search(r"^\s*-?\s*saat:\s*(\d{1,2})[:.](\d{2})", metin, re.M)
    if not m:
        return 9, 0
    return int(m.group(1)), int(m.group(2))


def python_yolu() -> str:
    return sys.executable


def windows_kur(saat: int, dakika: int) -> None:
    tr = f'"{python_yolu()}" "{KOSUCU}"'
    subprocess.run(["schtasks", "/create", "/tn", GOREV, "/tr", tr, "/sc", "DAILY",
                    "/st", f"{saat:02d}:{dakika:02d}", "/f"], check=True)
    print(f"Görev kuruldu: {GOREV} · her gün {saat:02d}:{dakika:02d}")
    print("Not: bilgisayar o saatte açık ve kilidi çözülmüş olmalı; Chrome kapalıysa koşucu açar.")


def windows_kaldir() -> None:
    subprocess.run(["schtasks", "/delete", "/tn", GOREV, "/f"], check=False)
    print("Görev kaldırıldı.")


def mac_kur(saat: int, dakika: int) -> None:
    plist = Path.home() / "Library" / "LaunchAgents" / "com.isbasvuruajani.plist"
    plist.parent.mkdir(parents=True, exist_ok=True)
    plist.write_text(f"""<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>Label</key><string>com.isbasvuruajani</string>
  <key>ProgramArguments</key><array><string>{python_yolu()}</string><string>{KOSUCU}</string></array>
  <key>StartCalendarInterval</key><dict><key>Hour</key><integer>{saat}</integer><key>Minute</key><integer>{dakika}</integer></dict>
  <key>WorkingDirectory</key><string>{KOK}</string>
</dict></plist>
""", encoding="utf-8")
    subprocess.run(["launchctl", "unload", str(plist)], check=False, capture_output=True)
    subprocess.run(["launchctl", "load", str(plist)], check=True)
    print(f"launchd görevi kuruldu · her gün {saat:02d}:{dakika:02d}")


def mac_kaldir() -> None:
    plist = Path.home() / "Library" / "LaunchAgents" / "com.isbasvuruajani.plist"
    subprocess.run(["launchctl", "unload", str(plist)], check=False)
    plist.unlink(missing_ok=True)
    print("launchd görevi kaldırıldı.")


def linux_kur(saat: int, dakika: int) -> None:
    satir = f"{dakika} {saat} * * * cd '{KOK}' && '{python_yolu()}' '{KOSUCU}' # {GOREV}"
    mevcut = subprocess.run(["crontab", "-l"], capture_output=True, text=True).stdout
    yeni = "\n".join(l for l in mevcut.splitlines() if GOREV not in l) + "\n" + satir + "\n"
    subprocess.run(["crontab", "-"], input=yeni, text=True, check=True)
    print(f"crontab satırı eklendi · her gün {saat:02d}:{dakika:02d}")


def linux_kaldir() -> None:
    mevcut = subprocess.run(["crontab", "-l"], capture_output=True, text=True).stdout
    yeni = "\n".join(l for l in mevcut.splitlines() if GOREV not in l) + "\n"
    subprocess.run(["crontab", "-"], input=yeni, text=True, check=True)
    print("crontab satırı kaldırıldı.")


def main() -> int:
    kaldir = "--kaldir" in sys.argv
    sistem = platform.system()
    saat, dakika = saati_oku()
    if sistem == "Windows":
        windows_kaldir() if kaldir else windows_kur(saat, dakika)
    elif sistem == "Darwin":
        mac_kaldir() if kaldir else mac_kur(saat, dakika)
    else:
        linux_kaldir() if kaldir else linux_kur(saat, dakika)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
