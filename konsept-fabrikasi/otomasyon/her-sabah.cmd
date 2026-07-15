@echo off
REM ============================================================
REM Konsept Fabrikasi · her sabah otomatik uretim (Windows)
REM Bu dosya, kendi bulundugu klasorun ust klasorunu (proje kokunu)
REM bulur, oraya gecer ve claude'u headless calistirir.
REM Gorev Zamanlayici bu .cmd'yi her sabah tetikler.
REM Kurulum adimlari: KUR-otomasyon.md
REM ============================================================

REM Proje kokune gec (otomasyon klasorunun ust klasoru)
cd /d "%~dp0.."

REM Log dosyasina zaman damgasi yaz
echo. >> "otomasyon\son-calisma.log"
echo === %date% %time% · uretim basladi === >> "otomasyon\son-calisma.log"

REM claude'u headless calistir. CLAUDE.md otomatik yuklenir.
REM gunluk-gorev.txt icindeki gorevi okur ve 50 konsepti ciktilar'a yazar.
call claude -p "otomasyon/gunluk-gorev.txt dosyasindaki gorevi oku ve uygula. ciktilar klasorune bugunun tarihiyle 50 konsept yaz." --allowedTools Read,Write,Glob --permission-mode acceptEdits >> "otomasyon\son-calisma.log" 2>&1

echo === %date% %time% · uretim bitti === >> "otomasyon\son-calisma.log"
