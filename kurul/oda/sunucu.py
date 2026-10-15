# Kurul odası: oturum klasörünü canlı okuyan küçük sunucu. AI çağrısı yok, yalnız dosya okur.
# Çalıştır: python oda/sunucu.py  → http://localhost:4731  (?id=<oturum-klasörü> ile belirli oturum)
import json, os, re, sys, time
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, parse_qs

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OTURUMLAR = os.path.join(KOK, "oturumlar")
ODA = os.path.dirname(os.path.abspath(__file__))
KOLTUK = {"buffett": "Warren Buffett", "bezos": "Jeff Bezos", "musk": "Elon Musk", "jobs": "Steve Jobs", "hormozi": "Alex Hormozi", "baskan": "Başkan (Claude)"}

def son_oturum():
    p = os.path.join(OTURUMLAR, "SON.txt")
    if os.path.exists(p):
        ad = open(p, encoding="utf-8").read().strip()
        if ad and os.path.isdir(os.path.join(OTURUMLAR, ad)):
            return ad
    adlar = [d for d in os.listdir(OTURUMLAR) if os.path.isdir(os.path.join(OTURUMLAR, d)) and d != "sorular"] if os.path.isdir(OTURUMLAR) else []
    return sorted(adlar)[-1] if adlar else None

def oku(p):
    try:
        return open(p, encoding="utf-8").read()
    except Exception:
        return ""

def oturum_json(ad):
    k = os.path.join(OTURUMLAR, ad)
    kartlar = []
    for tur in ("tur1", "tur2"):
        d = os.path.join(k, tur)
        if not os.path.isdir(d):
            continue
        for f in sorted(os.listdir(d)):
            if not f.endswith(".md"):
                continue
            kim = f[:-3].lower()
            kartlar.append({"tur": tur, "kim": kim, "isim": KOLTUK.get(kim, kim.title()), "mtime": os.path.getmtime(os.path.join(d, f)), "metin": oku(os.path.join(d, f))})
    kartlar.sort(key=lambda c: (c["tur"], c["kim"] == "baskan", c["mtime"]))
    out = {"oturum": ad, "brief": oku(os.path.join(k, "brief.md")), "kartlar": kartlar,
           "karar": oku(os.path.join(k, "karar.md")), "muhur_var": os.path.exists(os.path.join(k, "muhur.md"))}
    kj = os.path.join(k, "karar.json")
    if os.path.exists(kj):
        try:
            out["karar_json"] = json.loads(oku(kj))
        except Exception:
            out["karar_json"] = None
    return out

class H(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ODA, **kw)
    def log_message(self, *a):
        pass
    def do_GET(self):
        u = urlparse(self.path)
        if u.path == "/api/oturum":
            q = parse_qs(u.query)
            ad = q.get("id", [None])[0] or son_oturum()
            veri = oturum_json(ad) if ad else {"oturum": None, "kartlar": []}
            b = json.dumps(veri, ensure_ascii=False).encode("utf-8")
            self.send_response(200); self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Cache-Control", "no-store"); self.send_header("Content-Length", str(len(b))); self.end_headers()
            self.wfile.write(b); return
        if u.path == "/":
            self.path = "/index.html"
        return super().do_GET()

if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4731
    print(f"Kurul odası: http://localhost:{port}  (oturum: {son_oturum()})")
    ThreadingHTTPServer(("127.0.0.1", port), H).serve_forever()
