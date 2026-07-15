#!/usr/bin/env bash
# ============================================================
# Konsept Fabrikasi · her sabah otomatik uretim (Mac / Linux)
# Bu betik kendi bulundugu klasorun ust klasorune (proje koku)
# gecer ve claude'u headless calistirir.
# cron ya da launchd bu betigi her sabah tetikler.
# Kurulum adimlari: KUR-otomasyon.md
# ============================================================

# Proje kokune gec (otomasyon klasorunun ust klasoru)
cd "$(dirname "$0")/.." || exit 1

{
  echo ""
  echo "=== $(date) · uretim basladi ==="
} >> "otomasyon/son-calisma.log"

# claude'u headless calistir. CLAUDE.md otomatik yuklenir.
claude -p "otomasyon/gunluk-gorev.txt dosyasindaki gorevi oku ve uygula. ciktilar klasorune bugunun tarihiyle 50 konsept yaz." \
  --allowedTools Read,Write,Glob --permission-mode acceptEdits >> "otomasyon/son-calisma.log" 2>&1

echo "=== $(date) · uretim bitti ===" >> "otomasyon/son-calisma.log"
