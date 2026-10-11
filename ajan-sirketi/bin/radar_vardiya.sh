#!/usr/bin/env bash
# Gözcünün vardiyası (Mac ve Linux). cron ya da launchd bu dosyayı çalıştırır.
# Klasöre geçer, Claude Code'u sohbetsiz modda "radar" komutuyla açar, çıktıyı sirket/radar/vardiya.log dosyasına ekler.
# İzinler: dosya düzenleme, git, günlük betiği ve Python. Başka komut çalıştırılamaz.
set -e
cd "$(dirname "$0")/.."
# cron kısa bir PATH ile çalışır; Claude Code'un olağan kurulum yerlerini ekle
export PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:$PATH"
echo "==== $(date)" >> sirket/radar/vardiya.log
claude -p "radar" --permission-mode acceptEdits \
  --allowedTools "Bash(git:*)" "Bash(bash sirket/gunluk.sh:*)" "Bash(python:*)" "Bash(python3:*)" \
  >> sirket/radar/vardiya.log 2>&1
