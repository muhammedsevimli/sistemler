@echo off
rem Gozcunun vardiyasi (Windows). Gorev Zamanlayici bu dosyayi calistirir.
rem Klasore gecer, Claude Code'u sohbetsiz modda "radar" komutuyla acar, ciktiyi sirket\radar\vardiya.log dosyasina ekler.
rem Izinler: dosya duzenleme, git, gunluk betigi ve Python. Baska komut calistirilamaz.
cd /d "%~dp0.."
echo ==== %date% %time% >> "sirket\radar\vardiya.log"
claude -p "radar" --permission-mode acceptEdits --allowedTools "Bash(git:*)" "Bash(bash sirket/gunluk.sh:*)" "Bash(python:*)" "Bash(python3:*)" "Bash(py:*)" >> "sirket\radar\vardiya.log" 2>&1
