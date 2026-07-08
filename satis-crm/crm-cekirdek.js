/*
 * Satış CRM · çekirdek mantık (crm-cekirdek.js)
 * ------------------------------------------------------------
 * Bu dosya CRM'in beynidir. Ekranla (arayüz) hiç ilgilenmez;
 * sadece kuralları tutar. Böylece hem tarayıcıda (satis-crm.html)
 * hem de Node ile test dosyasında (test-cekirdek.mjs) AYNI mantık çalışır.
 * Tek kaynak: bir kural değişirse burada değişir, iki yerde birden düzelir.
 *
 * Kod yazmayı bilmene gerek yok: bu dosyaya elini sürmüyorsun.
 * Şirketine uyarlamak istersen Claude Code'a "aşamaları şöyle yap" demen yeter.
 */
(function (root, factory) {
  if (typeof module !== "undefined" && module.exports) {
    module.exports = factory();
  } else {
    root.CRM = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // Sabit listeler (şirketine göre değiştirilebilir) --------------------
  var ASAMALAR = ["Yeni", "Aramada", "Teklif", "Takipte", "Kazanıldı", "Kaybedildi"];
  var KAPALI_ASAMALAR = ["Kazanıldı", "Kaybedildi"]; // artık aranmaz
  var SONUCLAR = {
    gorusuldu: "Görüşüldü",
    ulasilamadi: "Ulaşılamadı",
    satis: "Satış",
  };

  // Tarih yardımcıları (hepsi "YYYY-MM-DD" düz metinle çalışır) ----------
  function iso(d) {
    // Date -> "YYYY-MM-DD" (yerel saat, saat dilimi kaymasız)
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var g = String(d.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + g;
  }

  function bugunISO(now) {
    return iso(now ? new Date(now) : new Date());
  }

  function gunEkle(isoTarih, gunSayisi) {
    // "2026-07-08" + 3 -> "2026-07-11" (ay/yıl taşmasını Date halleder)
    var p = isoTarih.split("-");
    var d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
    d.setDate(d.getDate() + Number(gunSayisi));
    return iso(d);
  }

  function yilAy(isoTarih) {
    return isoTarih.slice(0, 7); // "2026-07"
  }

  // ---------------------------------------------------------------------
  // 1) GÖRÜŞME NOTU: temsilci 2 satır yazar, sistem tarihi ve takip gününü
  //    kendi koyar. Müşteriyi (obje) günceller, geri döner.
  // ---------------------------------------------------------------------
  function notEkle(musteri, girdi, now) {
    // girdi: { metin, sonuc, temsilci, gunSonra, sonrakiAdim, asama }
    var bugun = bugunISO(now);
    var not = {
      tarih: bugun,
      metin: (girdi.metin || "").trim(),
      sonuc: girdi.sonuc || "gorusuldu",
      temsilci: girdi.temsilci || musteri.temsilci || "",
    };
    if (!Array.isArray(musteri.notlar)) musteri.notlar = [];
    musteri.notlar.push(not);

    // "en son ne konuşuldu" kartın üstünde her zaman son notun özeti
    musteri.sonKonusulan = not.metin;
    musteri.sonGorusme = bugun;

    // bir sonraki adım (temsilci yazdıysa güncelle)
    if (typeof girdi.sonrakiAdim === "string" && girdi.sonrakiAdim.trim() !== "") {
      musteri.sonrakiAdim = girdi.sonrakiAdim.trim();
    }

    // aşama güncellendiyse al
    if (girdi.asama && ASAMALAR.indexOf(girdi.asama) !== -1) {
      musteri.asama = girdi.asama;
    }

    // TAKİP GÜNÜ: "kaç gün sonra ara" -> bugün + N. Sistem koyar.
    // gunSonra null/undefined ise takip günü değişmez (ör. iş kapandı).
    if (girdi.gunSonra !== null && girdi.gunSonra !== undefined && girdi.gunSonra !== "") {
      musteri.takipTarihi = gunEkle(bugun, girdi.gunSonra);
    }
    // Kapanan işlerde takip iptal
    if (KAPALI_ASAMALAR.indexOf(musteri.asama) !== -1) {
      musteri.takipTarihi = null;
    }
    return musteri;
  }

  // ---------------------------------------------------------------------
  // 2) SABAH LİSTESİ: bugün (ve geçmişte kalıp aranmayan) takip günü gelen
  //    müşteriler. Kapalı işler listede yok. Tarihe göre sıralı, geç kalan üstte.
  // ---------------------------------------------------------------------
  function bugunAranacaklar(musteriler, now) {
    var bugun = bugunISO(now);
    return (musteriler || [])
      .filter(function (m) {
        if (!m.takipTarihi) return false;
        if (KAPALI_ASAMALAR.indexOf(m.asama) !== -1) return false;
        return m.takipTarihi <= bugun; // bugünkü + gecikmiş
      })
      .sort(function (a, b) {
        return a.takipTarihi < b.takipTarihi ? -1 : a.takipTarihi > b.takipTarihi ? 1 : 0;
      });
  }

  function gecikmisMi(musteri, now) {
    return !!musteri.takipTarihi && musteri.takipTarihi < bugunISO(now);
  }

  // ---------------------------------------------------------------------
  // 3) AY SONU PANELİ: temsilci başına o ay kaç görüşme, kaç satış.
  //    Görüşme = "görüşüldü" ya da "satış" sonuçlu her not. Satış = satış notu.
  // ---------------------------------------------------------------------
  function aylikPanel(musteriler, ay, now) {
    var hedefAy = ay || yilAy(bugunISO(now));
    var panel = {}; // temsilci -> { gorusme, satis, ulasilamadi }
    function kutu(t) {
      if (!panel[t]) panel[t] = { temsilci: t, gorusme: 0, satis: 0, ulasilamadi: 0 };
      return panel[t];
    }
    (musteriler || []).forEach(function (m) {
      (m.notlar || []).forEach(function (n) {
        if (yilAy(n.tarih) !== hedefAy) return;
        var t = n.temsilci || m.temsilci || "(atanmamış)";
        var k = kutu(t);
        if (n.sonuc === "satis") {
          k.satis += 1;
          k.gorusme += 1; // satış da bir görüşmedir
        } else if (n.sonuc === "ulasilamadi") {
          k.ulasilamadi += 1;
        } else {
          k.gorusme += 1; // gorusuldu
        }
      });
    });
    return Object.keys(panel)
      .map(function (t) {
        var k = panel[t];
        k.donusum = k.gorusme > 0 ? Math.round((k.satis / k.gorusme) * 100) : 0;
        return k;
      })
      .sort(function (a, b) {
        return b.satis - a.satis || b.gorusme - a.gorusme;
      });
  }

  // Yeni müşteri kartı (boş) --------------------------------------------
  function yeniMusteri(alanlar, now) {
    alanlar = alanlar || {};
    return {
      id: "m" + Date.now() + Math.floor(Math.random() * 1000),
      ad: alanlar.ad || "",
      firma: alanlar.firma || "",
      telefon: alanlar.telefon || "",
      temsilci: alanlar.temsilci || "",
      asama: alanlar.asama || "Yeni",
      sonrakiAdim: alanlar.sonrakiAdim || "İlk arama",
      sonKonusulan: alanlar.sonKonusulan || "",
      sonGorusme: null,
      takipTarihi: alanlar.takipTarihi || bugunISO(now),
      notlar: [],
      olusturma: bugunISO(now),
    };
  }

  return {
    ASAMALAR: ASAMALAR,
    KAPALI_ASAMALAR: KAPALI_ASAMALAR,
    SONUCLAR: SONUCLAR,
    bugunISO: bugunISO,
    gunEkle: gunEkle,
    yilAy: yilAy,
    notEkle: notEkle,
    bugunAranacaklar: bugunAranacaklar,
    gecikmisMi: gecikmisMi,
    aylikPanel: aylikPanel,
    yeniMusteri: yeniMusteri,
  };
});
