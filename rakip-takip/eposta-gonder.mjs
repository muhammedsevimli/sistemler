// eposta-gonder.mjs
// Sifir bagimlilik SMTP gonderici (sadece Node.js yerlesik node:tls ile).
// Amac: rakip raporunu, kullanicinin KENDI e-posta hesabinin SMTP bilgisiyle,
// hicbir npm paketi kurmadan gondermek.
//
// Nasil calisir:
//   - 465 portundan SMTPS (dogrudan TLS) baglantisi acar.
//   - EHLO -> AUTH LOGIN -> MAIL FROM -> RCPT TO -> DATA akisini yurutur.
//   - Basit, tek-alici, duz-metin + istege bagli HTML govde gonderir.
//
// Neyi DESTEKLEMEZ (bilincli sade tutuldu):
//   - STARTTLS (port 587 duz-baslayip-yukselen). Sadece 465 (dogrudan TLS).
//     Cogu saglayici (Gmail, Outlook, Yandex, ozel alan adi) 465'i destekler.
//   - Ek dosya, cok-alici, OAuth. Gerekirse n8n katmani ya da nodemailer kullan.
//
// Ortam degiskenleri (env) ile beslenir:
//   SMTP_HOST   ornek: smtp.gmail.com
//   SMTP_PORT   ornek: 465        (bos birakilirsa 465)
//   SMTP_USER   ornek: sen@gmail.com
//   SMTP_PASS   ornek: uygulama-sifresi (Gmail'de "App Password", normal sifre DEGIL)
//   SMTP_FROM   gonderen adres    (bos birakilirsa SMTP_USER)
//   SMTP_TO     alici adres       (rapor buraya gider)

import tls from "node:tls";

// SMTP sunucusuyla tek bir komut/cevap turu: komutu yaz, beklenen kodu bekle.
function smtpKonus(soket, komut, beklenenKodlar, ayiklaCevap) {
  return new Promise((resolve, reject) => {
    let tampon = "";
    const bitir = () => {
      soket.removeListener("data", onData);
      soket.removeListener("error", onErr);
    };
    const onData = (chunk) => {
      tampon += chunk.toString("utf8");
      // SMTP cok-satirli cevap: "250-...\r\n250 son\r\n". Son satir "kod BOSLUK".
      const satirlar = tampon.split(/\r?\n/).filter(Boolean);
      const son = satirlar[satirlar.length - 1] || "";
      if (!/^\d{3} /.test(son)) return; // cevap henuz tamam degil, bekle
      bitir();
      const kod = Number(son.slice(0, 3));
      if (!beklenenKodlar.includes(kod)) {
        reject(new Error(`SMTP beklenmedik cevap (${kod}): ${son} [komut: ${(komut || "(baglanti)").split("\r")[0]}]`));
        return;
      }
      resolve(ayiklaCevap ? tampon : kod);
    };
    const onErr = (e) => { bitir(); reject(e); };
    soket.on("data", onData);
    soket.once("error", onErr);
    if (komut != null) soket.write(komut + "\r\n");
  });
}

function b64(s) {
  return Buffer.from(s, "utf8").toString("base64");
}

// RFC 2047 basit kodlama: TR karakterli konu satiri bozulmasin.
function konuKodla(konu) {
  // ASCII ise oldugu gibi birak
  if (/^[\x00-\x7F]*$/.test(konu)) return konu;
  return `=?UTF-8?B?${Buffer.from(konu, "utf8").toString("base64")}?=`;
}

function tarihRFC() {
  return new Date().toUTCString().replace("GMT", "+0000");
}

/**
 * Tek e-posta gonderir. Basarisizsa hata firlatir.
 * @param {{host,port,user,pass,from,to,subject,text,html}} opt
 */
export async function epostaGonder(opt) {
  const host = opt.host;
  const port = Number(opt.port || 465);
  const user = opt.user;
  const pass = opt.pass;
  const from = opt.from || user;
  const to = opt.to;
  const subject = opt.subject || "(konu yok)";
  const text = opt.text || "";
  const html = opt.html || null;

  if (!host || !user || !pass || !to) {
    throw new Error("eksik SMTP ayari: host, user, pass, to zorunlu.");
  }

  // Guvenli varsayilan: sertifika dogrulanir. Sadece kendi-imzali sertifikali
  // self-host sunucularda (ya da testte) SMTP_INSECURE_TLS=1 ile kapatilabilir.
  const rejectUnauthorized = opt.insecure || process.env.SMTP_INSECURE_TLS === "1" ? false : true;
  // SNI (servername) yalniz alan-adi host'larda kullanilir; IP adresine izin verilmez.
  const ipMi = /^\d{1,3}(\.\d{1,3}){3}$/.test(host) || host.includes(":");
  const baglantiOpt = { host, port, rejectUnauthorized };
  if (!ipMi) baglantiOpt.servername = host;
  const soket = tls.connect(baglantiOpt);
  soket.setEncoding("utf8");
  await new Promise((res, rej) => {
    soket.once("secureConnect", res);
    soket.once("error", rej);
  });

  try {
    await smtpKonus(soket, null, [220]);                       // sunucu selami
    await smtpKonus(soket, `EHLO rakip-takipcisi`, [250], true); // yetenek listesi
    await smtpKonus(soket, `AUTH LOGIN`, [334]);
    await smtpKonus(soket, b64(user), [334]);
    await smtpKonus(soket, b64(pass), [235]);                  // 235 = kimlik dogrulandi
    await smtpKonus(soket, `MAIL FROM:<${from}>`, [250]);
    await smtpKonus(soket, `RCPT TO:<${to}>`, [250, 251]);
    await smtpKonus(soket, `DATA`, [354]);                     // 354 = govdeyi bekliyorum

    // --- mesaj govdesi ---
    const sinir = "sinir_" + Math.random().toString(36).slice(2);
    const basliklar = [
      `From: ${from}`,
      `To: ${to}`,
      `Subject: ${konuKodla(subject)}`,
      `Date: ${tarihRFC()}`,
      `MIME-Version: 1.0`,
    ];
    let govde;
    if (html) {
      basliklar.push(`Content-Type: multipart/alternative; boundary="${sinir}"`);
      govde =
        `--${sinir}\r\n` +
        `Content-Type: text/plain; charset=UTF-8\r\n` +
        `Content-Transfer-Encoding: base64\r\n\r\n` +
        Buffer.from(text, "utf8").toString("base64") + "\r\n" +
        `--${sinir}\r\n` +
        `Content-Type: text/html; charset=UTF-8\r\n` +
        `Content-Transfer-Encoding: base64\r\n\r\n` +
        Buffer.from(html, "utf8").toString("base64") + "\r\n" +
        `--${sinir}--\r\n`;
    } else {
      basliklar.push(`Content-Type: text/plain; charset=UTF-8`);
      basliklar.push(`Content-Transfer-Encoding: base64`);
      govde = Buffer.from(text, "utf8").toString("base64") + "\r\n";
    }

    // SMTP nokta-kacisi: govde icinde tek basina "." olan satir "..".
    const ham = basliklar.join("\r\n") + "\r\n\r\n" + govde;
    const kacisli = ham.replace(/\r?\n\./g, "\r\n..");
    // DATA sonu: <CRLF>.<CRLF>
    await smtpKonus(soket, kacisli + "\r\n.", [250]);
    await smtpKonus(soket, `QUIT`, [221]).catch(() => {});      // QUIT hatasi onemsiz
    return true;
  } finally {
    soket.end();
  }
}

// Dogrudan CLI ile: `node eposta-gonder.mjs "konu" "govde"` (env ayarlariyla test icin)
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith("eposta-gonder.mjs")) {
  const konu = process.argv[2] || "test raporu";
  const govde = process.argv[3] || "bu bir test mesajidir.";
  epostaGonder({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_TO,
    subject: konu,
    text: govde,
  })
    .then(() => console.log("e-posta gonderildi:", process.env.SMTP_TO))
    .catch((e) => { console.error("e-posta hatasi:", e.message); process.exit(1); });
}
