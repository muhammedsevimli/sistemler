"""Uyarlanmış CV'yi (Markdown) PDF'e çevirir.

Kullanım:  py araclar/cv_pdf.py "basvurular/2026-09-25-sirket-rol"
Girdi:     <klasör>/cv-uyarlanmis.md
Çıktı:     <klasör>/cv-uyarlanmis.pdf  (ve ara dosya cv-uyarlanmis.html)

Bağımlılık yok. PDF'i bilgisayardaki Chrome ya da Edge başsız modda basar.
"""
from __future__ import annotations

import html
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

CSS = """
@page { size: A4; margin: 16mm 18mm; }
body { font-family: Georgia, "Times New Roman", serif; font-size: 11pt; line-height: 1.45; color: #1a1a1a; }
h1 { font-size: 22pt; margin: 0 0 2pt; letter-spacing: 0.2px; }
h2 { font-size: 11pt; text-transform: uppercase; letter-spacing: 1.2px; border-bottom: 1px solid #999; margin: 14pt 0 6pt; padding-bottom: 2pt; }
h3 { font-size: 11.5pt; margin: 10pt 0 1pt; }
p { margin: 0 0 6pt; }
ul { margin: 2pt 0 6pt 16pt; padding: 0; }
li { margin: 0 0 2pt; }
blockquote { display: none; }
.meta { color: #555; font-size: 10pt; margin-bottom: 8pt; }
"""


def md_to_html(md: str) -> str:
    lines = md.splitlines()
    out: list[str] = []
    in_list = False
    para: list[str] = []
    first_para_after_h1 = False

    def flush_para() -> None:
        nonlocal para, first_para_after_h1
        if para:
            text = inline(" ".join(para))
            cls = ' class="meta"' if first_para_after_h1 else ""
            out.append(f"<p{cls}>{text}</p>")
            para = []
            first_para_after_h1 = False

    def close_list() -> None:
        nonlocal in_list
        if in_list:
            out.append("</ul>")
            in_list = False

    for raw in lines:
        line = raw.rstrip()
        if line.startswith(">"):
            continue  # notlar PDF'e girmez
        if not line.strip():
            flush_para()
            close_list()
            continue
        m = re.match(r"^(#{1,3})\s+(.*)$", line)
        if m:
            flush_para()
            close_list()
            level = len(m.group(1))
            out.append(f"<h{level}>{inline(m.group(2))}</h{level}>")
            if level == 1:
                first_para_after_h1 = True
            continue
        if re.match(r"^\s*[-*]\s+", line):
            flush_para()
            if not in_list:
                out.append("<ul>")
                in_list = True
            madde = re.sub(r"^\s*[-*]\s+", "", line)
            out.append(f"<li>{inline(madde)}</li>")
            continue
        close_list()
        para.append(line.strip())
    flush_para()
    close_list()
    return "\n".join(out)


def inline(text: str) -> str:
    text = html.escape(text, quote=False)
    text = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"(?<!\*)\*(?!\*)(.+?)\*(?!\*)", r"<em>\1</em>", text)
    text = re.sub(r"`(.+?)`", r"<code>\1</code>", text)
    return text


def find_browser() -> str | None:
    candidates = [
        os.environ.get("CHROME_PATH", ""),
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    ]
    for c in candidates:
        if c and Path(c).exists():
            return c
    for name in ("google-chrome", "chromium", "chromium-browser", "microsoft-edge", "chrome"):
        p = shutil.which(name)
        if p:
            return p
    return None


def main() -> int:
    if len(sys.argv) < 2:
        print("kullanım: py araclar/cv_pdf.py <başvuru klasörü>")
        return 2
    folder = Path(sys.argv[1]).resolve()
    src = folder / "cv-uyarlanmis.md"
    if not src.exists():
        print(f"bulunamadı: {src}")
        return 2
    body = md_to_html(src.read_text(encoding="utf-8"))
    html_path = folder / "cv-uyarlanmis.html"
    pdf_path = folder / "cv-uyarlanmis.pdf"
    html_path.write_text(
        f"<!doctype html><html lang='tr'><head><meta charset='utf-8'><title>CV</title>"
        f"<style>{CSS}</style></head><body>{body}</body></html>",
        encoding="utf-8",
        newline="\n",
    )
    browser = find_browser()
    if not browser:
        print("Chrome ya da Edge bulunamadı. CHROME_PATH ortam değişkenini ver.")
        return 3
    cmd = [
        browser,
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        "--no-first-run",
        "--no-default-browser-check",
        f"--user-data-dir={folder / '.chrome-pdf'}",
        f"--print-to-pdf={pdf_path}",
        html_path.as_uri(),
    ]
    subprocess.run(cmd, check=False, capture_output=True, timeout=120)
    shutil.rmtree(folder / ".chrome-pdf", ignore_errors=True)
    if not pdf_path.exists() or pdf_path.stat().st_size < 1000:
        print("PDF üretilemedi.")
        return 4
    print(f"PDF hazır: {pdf_path} ({pdf_path.stat().st_size // 1024} KB)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
