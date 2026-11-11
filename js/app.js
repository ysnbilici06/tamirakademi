// Tamir Akademisi — tek sayfa uygulama (sunucusuz, ilerleme tarayıcıda saklanır)
(function () {
  'use strict';

  var main = document.getElementById('uygulama');
  var ANAHTAR = 'ta-ilerleme';
  var GECME_MODUL = 70;   // modül sınavı geçme yüzdesi
  var GECME_FINAL = 75;   // final sınavı geçme yüzdesi
  var FINAL_SORU = 20;

  // ---------- Depolama ----------
  function oku(k, v0) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : v0; } catch (e) { return v0; } }
  function yaz(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  // ilerleme = { biten:{"modul/ders":true}, quiz:{modul:enIyiPuan}, final:{puan,toplam,tarih}, ad:"", sertTarih:"" }
  var ilerleme = oku(ANAHTAR, {});
  ilerleme.biten = ilerleme.biten || {};
  ilerleme.quiz = ilerleme.quiz || {};
  function kaydet() { yaz(ANAHTAR, ilerleme); }

  // ---------- Yardımcılar ----------
  function kacis(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function modulBul(id) { return TA.moduller.filter(function (m) { return m.id === id; })[0]; }
  function icerik(id) { return TA.icerik[id]; }
  function karistir(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function toplamDakika() {
    var t = 0; TA.moduller.forEach(function (m) { var ic = icerik(m.id); if (ic) ic.dersler.forEach(function (d) { t += d.sure; }); }); return t;
  }
  function toplamDers() {
    var t = 0; TA.moduller.forEach(function (m) { var ic = icerik(m.id); if (ic) t += ic.dersler.length; }); return t;
  }

  function quizGecti(mid) {
    var ic = icerik(mid), p = ilerleme.quiz[mid];
    return ic && ic.quiz && p != null && p / ic.quiz.length * 100 >= GECME_MODUL;
  }

  function modulDurum(m) {
    var ic = icerik(m.id);
    if (!ic) return { hazir: false, toplam: 0, biten: 0, yuzde: 0, tamam: false };
    var toplam = ic.dersler.length + 1;
    var biten = ic.dersler.filter(function (d) { return ilerleme.biten[m.id + '/' + d.id]; }).length;
    if (quizGecti(m.id)) biten++;
    return { hazir: true, toplam: toplam, biten: biten, yuzde: Math.round(biten / toplam * 100), tamam: biten === toplam };
  }
  function genelDurum() {
    var t = 0, b = 0, mt = 0;
    TA.moduller.forEach(function (m) { var d = modulDurum(m); t += d.toplam; b += d.biten; if (d.tamam) mt++; });
    return { toplam: t, biten: b, yuzde: t ? Math.round(b / t * 100) : 0, modulTamam: mt };
  }
  function finalGecti() { return ilerleme.final && ilerleme.final.puan / ilerleme.final.toplam * 100 >= GECME_FINAL; }
  function sertifikaHak() { return genelDurum().modulTamam === TA.moduller.length && finalGecti(); }

  function cubuk(y) {
    return '<div class="ilerleme" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + y + '"><span style="width:' + y + '%"></span></div>';
  }
  function halka(y, boyut) {
    var r = 26, c = 2 * Math.PI * r;
    return '<svg class="halka" viewBox="0 0 64 64" width="' + (boyut || 64) + '" height="' + (boyut || 64) + '" aria-hidden="true">' +
      '<circle cx="32" cy="32" r="' + r + '" fill="none" stroke="var(--yuzey-2)" stroke-width="7"/>' +
      '<circle cx="32" cy="32" r="' + r + '" fill="none" stroke="var(--vurgu)" stroke-width="7" stroke-linecap="round" stroke-dasharray="' + c + '" stroke-dashoffset="' + (c * (1 - y / 100)) + '" transform="rotate(-90 32 32)"/>' +
      '<text x="32" y="37" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor" font-family="system-ui,sans-serif">%' + y + '</text></svg>';
  }

  var MODUL_IKON = {
    temeller: '<path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/>',
    anatomi: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M10 6h4M10 10h4v4h-4z"/>',
    teshis: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M9 11h4M11 9v4"/>',
    sokum: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
    tamirler: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    ileri: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
    yazilim: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M9 9l-2 2 2 2M15 9l2 2-2 2"/>',
    meslek: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>'
  };
  function ikon(id, boyut) {
    return '<svg viewBox="0 0 24 24" width="' + (boyut || 22) + '" height="' + (boyut || 22) + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (MODUL_IKON[id] || '') + '</svg>';
  }

  // ---------- ANA SAYFA ----------
  function anaSayfa() {
    var g = genelDurum();
    var devam = sonrakiAdim();
    var bilgi = TA.bilgiler[Math.floor(Math.random() * TA.bilgiler.length)];
    var html =
      '<section class="kahraman">' +
        '<div class="kahraman-metin">' +
          '<span class="ust-etiket">Ücretsiz · Marka bağımsız · Sertifikalı</span>' +
          '<h1>Telefon tamirini <span class="vurgu-metin">sıfırdan</span> öğren, mesleğini eline al.</h1>' +
          '<p>Güvenlikten mikro lehime kadar ' + TA.moduller.length + ' modül, etkileşimli teşhis sihirbazı, sanal multimetre ve adım adım canlandırmalar. Sonunda sertifikanı al.</p>' +
          '<div class="kahraman-dugmeler">' +
            (devam ? '<a class="dugme buyuk" href="' + devam.href + '">' + (g.biten ? 'Kaldığın yerden devam et' : 'Hemen başla') + ' →</a>' : '<a class="dugme buyuk" href="#/sertifika">Sertifikanı gör 🎓</a>') +
            '<a class="dugme ikincil buyuk" href="#/arac/teshis">Teşhis sihirbazını dene</a>' +
          '</div>' +
        '</div>' +
        '<div class="kahraman-gorsel" aria-hidden="true">' + patlatilmisTelefon() + '</div>' +
      '</section>' +

      '<section class="istatistik">' +
        '<div><b>' + TA.moduller.length + '</b><span>modül</span></div>' +
        '<div><b>' + toplamDers() + '</b><span>ders</span></div>' +
        '<div><b>' + Math.round(toplamDakika() / 60 * 10) / 10 + ' sa</b><span>içerik</span></div>' +
        '<div><b>🎓</b><span>sertifika</span></div>' +
      '</section>' +

      '<section class="kart ilerleme-kart">' + halka(g.yuzde, 76) +
        '<div><h3>İlerlemen</h3><p>' + g.biten + ' / ' + g.toplam + ' bölüm · ' + g.modulTamam + ' / ' + TA.moduller.length + ' modül tamamlandı</p>' +
        '<div class="rozet-satiri">' + TA.moduller.map(function (m) {
          var d = modulDurum(m);
          return '<span class="madalya' + (d.tamam ? ' kazanildi' : '') + '" title="' + kacis(m.baslik) + (d.tamam ? ' (kazanıldı)' : '') + '">' + ikon(m.id, 18) + '</span>';
        }).join('') + '<span class="madalya sert' + (sertifikaHak() ? ' kazanildi' : '') + '" title="Sertifika">🎓</span></div></div>' +
      '</section>' +

      '<div class="bilgi-kart"><span class="bilgi-ikon">💡</span><div><strong>Bunu biliyor muydun?</strong><p>' + kacis(bilgi) + '</p></div></div>' +

      '<h2 class="bolum-baslik">Modüller</h2><div class="modul-izgara">' +
      TA.moduller.map(function (m) {
        var d = modulDurum(m);
        var rozet = d.tamam ? '<span class="rozet tamam">✓ Tamamlandı</span>' : d.biten ? '<span class="rozet">Devam ediyor</span>' : '<span class="rozet">' + d.toplam + ' bölüm</span>';
        return '<a class="kart modul-kart" href="#/modul/' + m.id + '"><div class="modul-ust"><span class="modul-no">' + ikon(m.id) + '</span>' + rozet + '</div>' +
          '<small class="modul-sira">Modül ' + m.no + '</small><h3>' + kacis(m.baslik) + '</h3><p>' + kacis(m.ozet) + '</p>' + cubuk(d.yuzde) + '</a>';
      }).join('') + '</div>' +

      '<h2 class="bolum-baslik">Atölye araçları</h2>' + aracKartlari() +

      '<a class="kart sertifika-cta" href="#/sertifika"><div class="sertifika-mini">' + sertifikaSVG('Adın Soyadın', '—', 'TA-XXXX-XXXX', true) + '</div>' +
      '<div><h3>Kursu bitir, sertifikanı al</h3><p>Tüm modülleri tamamla, final sınavını %' + GECME_FINAL + ' ile geç. Adına özel, doğrulama kodlu sertifikanı indir veya yazdır.</p><span class="dugme">Sertifika koşulları →</span></div></a>';
    return html;
  }

  function patlatilmisTelefon() {
    return '<svg viewBox="0 0 260 300" class="patlat">' +
      '<g class="pk pk1"><rect x="70" y="20" width="120" height="220" rx="18" fill="#141a22" stroke="#3a4250" stroke-width="2"/><rect x="78" y="34" width="104" height="192" rx="10" fill="url(#ek)"/><circle cx="130" cy="28" r="3" fill="#3a4250"/></g>' +
      '<g class="pk pk2"><rect x="70" y="20" width="120" height="220" rx="18" fill="none" stroke="var(--metin-2)" stroke-width="3" stroke-dasharray="4 4"/></g>' +
      '<g class="pk pk3"><rect x="80" y="36" width="56" height="120" rx="6" fill="#1e5a3c"/><rect x="92" y="52" width="26" height="26" rx="3" fill="#5b6b82"/><rect x="92" y="86" width="18" height="14" rx="2" fill="#6f5b82"/><rect x="114" y="86" width="14" height="14" rx="2" fill="#82705b"/>' +
      '<rect x="140" y="40" width="42" height="150" rx="6" fill="#3a3f47"/><text x="161" y="120" text-anchor="middle" font-size="10" fill="#9aa5b4" font-family="system-ui">Li-ion</text>' +
      '<rect x="84" y="200" width="92" height="22" rx="4" fill="#1e5a3c"/><rect x="118" y="222" width="24" height="6" rx="2" fill="#aaa"/></g>' +
      '<g class="pk pk4"><rect x="70" y="20" width="120" height="220" rx="18" fill="var(--vurgu)" opacity=".18" stroke="var(--vurgu)" stroke-width="2"/><rect x="88" y="34" width="34" height="46" rx="10" fill="#141a22" opacity=".7"/><circle cx="100" cy="47" r="7" fill="#2d3440"/><circle cx="110" cy="66" r="7" fill="#2d3440"/></g>' +
      '<defs><linearGradient id="ek" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a84ff"/><stop offset="1" stop-color="#7c3aed"/></linearGradient></defs></svg>';
  }

  function aracKartlari() {
    var araclar = [
      ['teshis', '🩺', 'Arıza Teşhis Sihirbazı', 'Belirtiyi seç, soruları cevapla, olası arızayı ve çözümü gör.'],
      ['anakart', '🧩', 'Anakart Haritası', 'Anakarttaki parçalara dokun, ne işe yaradıklarını öğren.'],
      ['multimetre', '📟', 'Sanal Multimetre', 'Gerçek ölçüm değerlerini risk almadan dene.'],
      ['sozluk', '📖', 'Terimler Sözlüğü', 'Flex, BGA, PMIC... Tüm terimler tek yerde.']
    ];
    return '<div class="arac-izgara">' + araclar.map(function (a) {
      return '<a class="kart arac-kart" href="' + (a[0] === 'sozluk' ? '#/sozluk' : '#/arac/' + a[0]) + '"><span class="arac-ikon">' + a[1] + '</span><h3>' + a[2] + '</h3><p>' + a[3] + '</p></a>';
    }).join('') + '</div>';
  }

  // ---------- MODÜL ----------
  function modulSayfasi(id) {
    var m = modulBul(id), ic = icerik(id);
    if (!m || !ic) return bulunamadi();
    var d = modulDurum(m);
    var html = ekmek([[m.baslik]]) +
      '<div class="modul-baslik kart"><div class="modul-baslik-ikon">' + ikon(m.id, 34) + '</div><div><span class="rozet">Modül ' + m.no + ' / ' + TA.moduller.length + '</span><h1>' + kacis(m.baslik) + '</h1><p>' + kacis(m.ozet) + '</p>' +
      cubuk(d.yuzde) + '<small class="soluk">' + d.biten + ' / ' + d.toplam + ' bölüm tamamlandı</small></div></div><ol class="ders-listesi">';
    ic.dersler.forEach(function (ders, i) {
      var bitti = ilerleme.biten[id + '/' + ders.id];
      html += '<li><a href="#/ders/' + id + '/' + ders.id + '">' +
        '<span class="ders-durum' + (bitti ? ' bitti' : '') + '">' + (bitti ? '✓' : i + 1) + '</span>' +
        '<span class="ders-bilgi"><strong>' + kacis(ders.baslik) + '</strong><small>' + ders.sure + ' dk' + (/data-bilesen/.test(ders.html) ? ' · ✨ etkileşimli' : '') + (ders.video ? ' · ▶ video' : '') + '</small></span></a></li>';
    });
    var puan = ilerleme.quiz[id], gecti = quizGecti(id);
    html += '<li><a href="#/quiz/' + id + '" class="quiz-satir"><span class="ders-durum' + (gecti ? ' bitti' : '') + '">' + (gecti ? '✓' : '?') + '</span>' +
      '<span class="ders-bilgi"><strong>Modül sınavı</strong><small>' + ic.quiz.length + ' soru · geçme notu %' + GECME_MODUL +
      (puan != null ? ' · en iyi: ' + puan + '/' + ic.quiz.length : '') + '</small></span></a></li></ol>';
    var sonraki = TA.moduller[TA.moduller.indexOf(m) + 1];
    if (sonraki) html += '<div class="dugme-satiri"><a class="dugme ikincil" href="#/">← Tüm modüller</a><a class="dugme ikincil" href="#/modul/' + sonraki.id + '">Sonraki: ' + kacis(sonraki.baslik) + ' →</a></div>';
    else html += '<div class="dugme-satiri"><a class="dugme ikincil" href="#/">← Tüm modüller</a><a class="dugme" href="#/final">Final sınavı →</a></div>';
    return html;
  }

  // ---------- DERS ----------
  function dersSayfasi(mid, did) {
    var m = modulBul(mid), ic = icerik(mid);
    if (!m || !ic) return bulunamadi();
    var i = -1;
    ic.dersler.forEach(function (d, k) { if (d.id === did) i = k; });
    if (i < 0) return bulunamadi();
    var ders = ic.dersler[i], onceki = ic.dersler[i - 1], sonraki = ic.dersler[i + 1];
    var bitti = ilerleme.biten[mid + '/' + did];

    var yan = '<aside class="ders-yan"><a class="dugme ikincil" href="#/modul/' + mid + '">← ' + kacis(m.baslik) + '</a><ol>';
    ic.dersler.forEach(function (d, k) {
      var b = ilerleme.biten[mid + '/' + d.id];
      yan += '<li><a href="#/ders/' + mid + '/' + d.id + '"' + (k === i ? ' class="aktif" aria-current="page"' : '') + '>' +
        '<span class="' + (b ? 'tik' : '') + '">' + (b ? '✓' : (k + 1) + '.') + '</span> ' + kacis(d.baslik) + '</a></li>';
    });
    yan += '<li><a href="#/quiz/' + mid + '"><span>?</span> Modül sınavı</a></li></ol></aside>';

    var ileri = sonraki
      ? '<a class="dugme" data-bitir href="#/ders/' + mid + '/' + sonraki.id + '">Tamamla ve devam et →</a>'
      : '<a class="dugme" data-bitir href="#/quiz/' + mid + '">Tamamla ve sınava geç →</a>';
    var video = ders.video ? '<div data-bilesen="video" data-youtube="' + kacis(ders.video) + '" data-baslik="' + kacis(ders.baslik) + '"></div>' : '';

    return ekmek([[m.baslik, '#/modul/' + mid], [ders.baslik]]) +
      '<div class="ders">' + yan + '<article class="ders-icerik"><div class="kart">' +
      '<div class="ders-ilerleme">' + ic.dersler.map(function (_, k) { return '<span class="' + (k < i ? 'gecti' : k === i ? 'su' : '') + '"></span>'; }).join('') + '</div>' +
      '<div class="ders-meta">Modül ' + m.no + ' · Ders ' + (i + 1) + ' / ' + ic.dersler.length + ' · ' + ders.sure + ' dk' +
      (bitti ? ' · <span class="rozet tamam">Tamamlandı</span>' : '') + '</div>' +
      '<h1>' + kacis(ders.baslik) + '</h1>' + video + ders.html +
      '<div class="dugme-satiri">' +
      (onceki ? '<a class="dugme ikincil" href="#/ders/' + mid + '/' + onceki.id + '">← ' + kacis(onceki.baslik) + '</a>' : '<span></span>') +
      ileri + '</div></div></article></div>';
  }

  // ---------- SINAV (modül ve final ortak) ----------
  function sinavHTML(baslik, aciklama, sorular, geriHref) {
    var html = '<div class="kart sinav"><h1>' + kacis(baslik) + '</h1><p class="ders-meta">' + aciklama + '</p>' +
      '<div class="sinav-sayac"><span id="cevapSayac">0</span> / ' + sorular.length + ' cevaplandı</div><form id="quizForm">';
    sorular.forEach(function (s, i) {
      html += '<fieldset class="soru"><legend><span class="soru-no">' + (i + 1) + '</span>' + kacis(s.soru) + '</legend><div class="secenekler">';
      s.secenekler.forEach(function (sec, j) {
        html += '<label class="secenek"><input type="radio" name="s' + i + '" value="' + j + '" required> <span>' + kacis(sec) + '</span></label>';
      });
      html += '</div><div class="aciklama" hidden></div></fieldset>';
    });
    return html + '<div class="dugme-satiri"><a class="dugme ikincil" href="' + geriHref + '">← Geri</a>' +
      '<button class="dugme" type="submit">Sonucu gör</button></div></form><div id="quizSonuc"></div></div>';
  }

  function sinavBagla(sorular, gecmeYuzde, bitince) {
    var form = document.getElementById('quizForm'); if (!form) return;
    var sayac = document.getElementById('cevapSayac');
    form.addEventListener('change', function () { sayac.textContent = form.querySelectorAll('input:checked').length; });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var dogru = 0, alanlar = form.querySelectorAll('fieldset.soru');
      sorular.forEach(function (s, i) {
        var sec = form.querySelector('input[name="s' + i + '"]:checked'), v = sec ? +sec.value : -1;
        if (v === s.dogru) dogru++;
        alanlar[i].querySelectorAll('.secenek').forEach(function (lab, j) {
          lab.classList.toggle('dogru', j === s.dogru);
          lab.classList.toggle('yanlis', j === v && v !== s.dogru);
          lab.querySelector('input').disabled = true;
        });
        var ac = alanlar[i].querySelector('.aciklama');
        ac.hidden = false; ac.textContent = (v === s.dogru ? '✓ Doğru. ' : '✗ Yanlış. ') + s.aciklama;
      });
      var oran = Math.round(dogru / sorular.length * 100), gecti = oran >= gecmeYuzde;
      var ek = bitince(dogru, gecti) || '';
      form.querySelector('button[type="submit"]').remove();
      var sonuc = document.getElementById('quizSonuc');
      sonuc.innerHTML = '<div class="sonuc ' + (gecti ? 'gecti' : 'kaldi') + '">' + halka(oran, 110) +
        '<h2>' + (gecti ? (oran === 100 ? 'Kusursuz! 🏆' : 'Tebrikler, geçtin! 🎉') : 'Biraz daha çalışalım 💪') + '</h2>' +
        '<p>' + dogru + ' / ' + sorular.length + ' doğru. Geçme notu %' + gecmeYuzde + '. ' + (gecti ? '' : 'Yanlışların açıklamalarını oku ve tekrar dene.') + '</p>' +
        '<div class="sonuc-dugmeler"><a class="dugme ikincil" href="' + location.hash.split('?')[0] + '?' + Date.now() + '">Tekrar çöz</a>' + ek + '</div></div>';
      if (gecti) konfeti();
      sonuc.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  function quizSayfasi(mid) {
    var m = modulBul(mid), ic = icerik(mid);
    if (!m || !ic) return bulunamadi();
    return ekmek([[m.baslik, '#/modul/' + mid], ['Modül sınavı']]) +
      sinavHTML(m.baslik + ': Modül sınavı', ic.quiz.length + ' soru · geçme notu %' + GECME_MODUL, ic.quiz, '#/modul/' + mid);
  }
  function quizBagla(mid) {
    var ic = icerik(mid), m = modulBul(mid);
    sinavBagla(ic.quiz, GECME_MODUL, function (dogru, gecti) {
      ilerleme.quiz[mid] = Math.max(dogru, ilerleme.quiz[mid] || 0); kaydet();
      var sonraki = TA.moduller[TA.moduller.indexOf(m) + 1];
      if (!gecti) return '<a class="dugme" href="#/modul/' + mid + '">Derslere dön</a>';
      return sonraki ? '<a class="dugme" href="#/modul/' + sonraki.id + '">Sonraki modül →</a>' : '<a class="dugme" href="#/final">Final sınavına geç →</a>';
    });
  }

  var finalSorular = null;
  function finalSayfasi() {
    var g = genelDurum();
    if (g.modulTamam < TA.moduller.length) {
      return ekmek([['Final sınavı']]) + '<div class="kart kilit-kart"><div class="kilit-ikon">🔒</div><h1>Final sınavı</h1>' +
        '<p>Final sınavı, bütün modüller tamamlandıktan sonra açılır. Bir modülün tamamlanması için tüm derslerinin bitmesi ve modül sınavının %' + GECME_MODUL + ' ile geçilmesi gerekir.</p>' +
        modulListesiDurum() + '</div>';
    }
    var hepsi = [];
    TA.moduller.forEach(function (m) { hepsi = hepsi.concat(icerik(m.id).quiz.map(function (s) { return s; })); });
    finalSorular = karistir(hepsi).slice(0, FINAL_SORU);
    return ekmek([['Final sınavı']]) + sinavHTML('Final sınavı', 'Tüm modüllerden rastgele ' + finalSorular.length + ' soru · geçme notu %' + GECME_FINAL + ' · Her denemede sorular değişir.', finalSorular, '#/');
  }
  function finalBagla() {
    if (!finalSorular || !document.getElementById('quizForm')) return;
    sinavBagla(finalSorular, GECME_FINAL, function (dogru, gecti) {
      var onceki = ilerleme.final;
      if (!onceki || dogru / finalSorular.length > onceki.puan / onceki.toplam) {
        ilerleme.final = { puan: dogru, toplam: finalSorular.length, tarih: new Date().toISOString() };
      }
      kaydet();
      return gecti ? '<a class="dugme" href="#/sertifika">Sertifikanı al 🎓</a>' : '<a class="dugme" href="#/">Modüllere dön</a>';
    });
  }

  function modulListesiDurum() {
    return '<ul class="kosul-listesi">' + TA.moduller.map(function (m) {
      var d = modulDurum(m);
      return '<li class="' + (d.tamam ? 'tamam' : '') + '"><span>' + (d.tamam ? '✓' : '○') + '</span><a href="#/modul/' + m.id + '">' + m.no + '. ' + kacis(m.baslik) + '</a><small>' + d.biten + '/' + d.toplam + '</small></li>';
    }).join('') + '</ul>';
  }

  // ---------- SERTİFİKA ----------
  function sertNo(ad, tarih) {
    var s = ad.trim().toLocaleUpperCase('tr') + '|' + tarih, h1 = 2166136261, h2 = 5381;
    for (var i = 0; i < s.length; i++) { var c = s.charCodeAt(i); h1 = Math.imul(h1 ^ c, 16777619) >>> 0; h2 = (Math.imul(h2, 33) + c) >>> 0; }
    var a = h1.toString(36).toUpperCase().padStart(7, '0').slice(-4), b = h2.toString(36).toUpperCase().padStart(7, '0').slice(-4);
    return 'TA-' + tarih.slice(0, 4) + '-' + a + '-' + b;
  }
  function tarihYazi(iso) {
    try { return new Date(iso).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }); } catch (e) { return iso.slice(0, 10); }
  }

  function sertifikaSVG(ad, tarih, no, mini) {
    var moduller = TA.moduller.map(function (m) { return m.baslik; }).join('  ·  ');
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1123 794" class="sertifika-svg" role="img" aria-label="Tamir Akademisi sertifikası">' +
      '<defs>' +
        '<linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a84ff"/><stop offset="1" stop-color="#5b3cc4"/></linearGradient>' +
        '<linearGradient id="altin" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7d774"/><stop offset=".5" stop-color="#d4a017"/><stop offset="1" stop-color="#a87a00"/></linearGradient>' +
        '<pattern id="desen" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M0 14h10l4-6h14M14 28v-8" stroke="#0a84ff" stroke-opacity=".06" stroke-width="1.5" fill="none"/></pattern>' +
      '</defs>' +
      '<rect width="1123" height="794" fill="#fdfcf8"/><rect width="1123" height="794" fill="url(#desen)"/>' +
      '<rect x="22" y="22" width="1079" height="750" fill="none" stroke="url(#sg)" stroke-width="10"/>' +
      '<rect x="42" y="42" width="1039" height="710" fill="none" stroke="url(#altin)" stroke-width="2"/>' +
      '<path d="M22 22 L180 22 L22 180 Z" fill="url(#sg)"/><path d="M1101 772 L943 772 L1101 614 Z" fill="url(#sg)"/>' +
      '<g transform="translate(531 78)"><rect x="8" y="2" width="16" height="28" rx="3" fill="none" stroke="#1c2330" stroke-width="2.2"/><path d="M12 12h4v3h4M16 15v5h-4" fill="none" stroke="#0a84ff" stroke-width="2.2" stroke-linecap="round"/><circle cx="16" cy="26" r="1.4" fill="#1c2330"/></g>' +
      '<text x="561.5" y="140" text-anchor="middle" font-family="Georgia,serif" font-size="24" letter-spacing="6" fill="#1c2330">TAMİR AKADEMİSİ</text>' +
      '<text x="561.5" y="215" text-anchor="middle" font-family="Georgia,serif" font-size="56" font-weight="bold" fill="url(#sg)">BAŞARI SERTİFİKASI</text>' +
      '<text x="561.5" y="270" text-anchor="middle" font-family="system-ui,Segoe UI,sans-serif" font-size="20" fill="#5a6475">Bu belge,</text>' +
      '<text x="561.5" y="345" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="' + (ad.length > 28 ? 40 : 52) + '" fill="#1c2330">' + kacis(ad) + '</text>' +
      '<line x1="281" y1="368" x2="842" y2="368" stroke="url(#altin)" stroke-width="2"/>' +
      '<text x="561.5" y="412" text-anchor="middle" font-family="system-ui,Segoe UI,sans-serif" font-size="20" fill="#3a4250">adlı katılımcının <tspan font-weight="bold">Telefon ve Tablet Tamiri</tspan> eğitim programının</text>' +
      '<text x="561.5" y="442" text-anchor="middle" font-family="system-ui,Segoe UI,sans-serif" font-size="20" fill="#3a4250">tüm modüllerini ve final sınavını başarıyla tamamladığını belgeler.</text>' +
      '<text x="561.5" y="492" text-anchor="middle" font-family="system-ui,Segoe UI,sans-serif" font-size="13" fill="#5a6475">' + kacis(moduller) + '</text>' +
      '<g transform="translate(561.5 600)"><circle r="62" fill="url(#altin)"/><circle r="52" fill="none" stroke="#fff8dc" stroke-width="2" stroke-dasharray="3 4"/>' +
        '<text y="-8" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#5a3d00">TAMİR</text><text y="12" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#5a3d00">AKADEMİSİ</text><text y="32" text-anchor="middle" font-size="16" fill="#5a3d00">★ ★ ★</text></g>' +
      '<line x1="140" y1="640" x2="400" y2="640" stroke="#9aa5b4"/><text x="270" y="625" text-anchor="middle" font-family="Georgia,serif" font-size="22" fill="#1c2330">' + kacis(tarih) + '</text>' +
      '<text x="270" y="664" text-anchor="middle" font-family="system-ui,Segoe UI,sans-serif" font-size="14" fill="#5a6475">Tarih</text>' +
      '<line x1="723" y1="640" x2="983" y2="640" stroke="#9aa5b4"/><text x="853" y="625" text-anchor="middle" font-family="ui-monospace,Consolas,monospace" font-size="20" fill="#1c2330">' + kacis(no) + '</text>' +
      '<text x="853" y="664" text-anchor="middle" font-family="system-ui,Segoe UI,sans-serif" font-size="14" fill="#5a6475">Sertifika No</text>' +
      '<text x="561.5" y="740" text-anchor="middle" font-family="system-ui,Segoe UI,sans-serif" font-size="11" fill="#9aa5b4">Bu belge çevrimiçi bir eğitimin tamamlandığını gösterir; resmî bir mesleki yeterlilik belgesi yerine geçmez.</text>' +
      '</svg>';
  }

  function sertifikaSayfasi() {
    if (!sertifikaHak()) {
      var g = genelDurum();
      return ekmek([['Sertifika']]) + '<div class="kart kilit-kart"><div class="sertifika-mini bulanik">' + sertifikaSVG('Adın Soyadın', '—', 'TA-XXXX-XXXX') + '</div>' +
        '<h1>Sertifikanı kazan 🎓</h1><p>Sertifika için iki koşul var:</p>' +
        '<ol class="kosul-ana"><li class="' + (g.modulTamam === TA.moduller.length ? 'tamam' : '') + '"><b>Tüm modülleri tamamla</b> (' + g.modulTamam + ' / ' + TA.moduller.length + '): Her modülün derslerini bitir ve sınavını %' + GECME_MODUL + ' ile geç.</li>' +
        '<li class="' + (finalGecti() ? 'tamam' : '') + '"><b>Final sınavını geç</b>: ' + FINAL_SORU + ' soru, geçme notu %' + GECME_FINAL + '.' + (ilerleme.final ? ' En iyi sonucun: ' + ilerleme.final.puan + '/' + ilerleme.final.toplam : '') + '</li></ol>' +
        modulListesiDurum() +
        (g.modulTamam === TA.moduller.length ? '<a class="dugme" href="#/final">Final sınavına gir →</a>' : '') + '</div>';
    }
    var ad = ilerleme.ad || '';
    var tarih = ilerleme.final.tarih;
    return ekmek([['Sertifika']]) + '<div class="kart sertifika-sayfa"><h1>Tebrikler! 🎉</h1>' +
      '<p>Tamir Akademisi\'ni başarıyla tamamladın. Sertifikanda görünecek adını yaz.</p>' +
      '<form id="adForm" class="ad-form"><label for="adGiris">Ad Soyad</label><div class="ad-satir"><input id="adGiris" maxlength="40" autocomplete="name" placeholder="Örn. Ayşe Yılmaz" value="' + kacis(ad) + '" required>' +
      '<button class="dugme" type="submit">Oluştur</button></div></form>' +
      '<div id="sertifikaAlan" class="sertifika-cerceve">' + (ad ? sertifikaSVG(ad, tarihYazi(tarih), sertNo(ad, tarih.slice(0, 10))) : '') + '</div>' +
      '<div class="dugme-satiri sert-dugmeler"' + (ad ? '' : ' hidden') + '><button class="dugme" type="button" id="pngIndir">⬇ Resim olarak indir (PNG)</button>' +
      '<button class="dugme ikincil" type="button" id="yazdir">🖨 Yazdır / PDF kaydet</button></div></div>';
  }

  function sertifikaBagla() {
    var form = document.getElementById('adForm'); if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ad = document.getElementById('adGiris').value.trim().replace(/\s+/g, ' ');
      if (!ad) return;
      ilerleme.ad = ad; kaydet();
      var t = ilerleme.final.tarih;
      document.getElementById('sertifikaAlan').innerHTML = sertifikaSVG(ad, tarihYazi(t), sertNo(ad, t.slice(0, 10)));
      document.querySelector('.sert-dugmeler').hidden = false;
      konfeti();
    });
    document.getElementById('yazdir').addEventListener('click', function () { window.print(); });
    document.getElementById('pngIndir').addEventListener('click', function () {
      var svg = document.querySelector('#sertifikaAlan svg'); if (!svg) return;
      var veri = new XMLSerializer().serializeToString(svg);
      var img = new Image();
      img.onload = function () {
        var c = document.createElement('canvas'); c.width = 2246; c.height = 1588;
        var x = c.getContext('2d'); x.drawImage(img, 0, 0, c.width, c.height);
        c.toBlob(function (b) {
          var a = document.createElement('a'); a.href = URL.createObjectURL(b);
          a.download = 'Tamir-Akademisi-Sertifika-' + (ilerleme.ad || '').replace(/[^\wçğıöşüÇĞİÖŞÜ]+/g, '-') + '.png';
          document.body.appendChild(a); a.click(); a.remove();
          setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
        }, 'image/png');
      };
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(veri);
    });
  }

  // ---------- ARAÇLAR, SÖZLÜK, HAKKINDA ----------
  function aracSayfasi(ad) {
    var bilgi = {
      teshis: ['Arıza Teşhis Sihirbazı', 'Belirtiyi seç ve soruları cevapla. Bu bir rehberdir; sonucu her zaman ölçümle doğrula.'],
      anakart: ['Anakart Haritası', 'Basitleştirilmiş bir telefon anakartı. Parçalara dokunarak görevlerini öğren.'],
      multimetre: ['Sanal Multimetre', 'Bir ölçüm modu ve bir ölçüm noktası seç. Gerçek bir multimetrenin göstereceği değeri ve anlamını gör.']
    }[ad];
    if (!bilgi) return bulunamadi();
    return ekmek([['Araçlar', '#/araclar'], [bilgi[0]]]) + '<div class="arac-sayfa"><h1>' + bilgi[0] + '</h1><p class="soluk">' + bilgi[1] + '</p><div data-bilesen="' + ad + '"></div></div>';
  }
  function araclarSayfasi() {
    return ekmek([['Araçlar']]) + '<h1>Atölye araçları</h1><p class="soluk">Derslerin içinde de kullanılan etkileşimli araçlar.</p>' + aracKartlari();
  }
  function sozlukSayfasi() {
    return ekmek([['Sözlük']]) + '<h1>Terimler sözlüğü</h1><input type="search" id="sozlukAra" class="arama" placeholder="Terim ara… (örn. flex, BGA)" aria-label="Sözlükte ara">' +
      '<dl class="sozluk">' + TA.sozluk.map(function (t) {
        return '<div class="sozluk-oge" data-ara="' + kacis((t[0] + ' ' + t[1]).toLocaleLowerCase('tr')) + '"><dt>' + kacis(t[0]) + '</dt><dd>' + kacis(t[1]) + '</dd></div>';
      }).join('') + '</dl><p class="bos" id="sozlukBos" hidden>Sonuç bulunamadı.</p>';
  }
  function sozlukBagla() {
    var g = document.getElementById('sozlukAra'); if (!g) return;
    g.addEventListener('input', function () {
      var q = g.value.toLocaleLowerCase('tr').trim(), say = 0;
      document.querySelectorAll('.sozluk-oge').forEach(function (o) { var v = !q || o.getAttribute('data-ara').indexOf(q) >= 0; o.hidden = !v; if (v) say++; });
      document.getElementById('sozlukBos').hidden = say > 0;
    });
  }

  function hakkinda() {
    return '<div class="kart" style="max-width:760px;margin:0 auto"><h1>Hakkında</h1>' +
      '<p><strong>Tamir Akademisi</strong>, telefon ve tablet tamirini merak edenleri sıfırdan meslek sahibi olmaya hazırlayan, marka bağımsız ve ücretsiz bir kurstur.</p>' +
      '<p>İlerlemen yalnızca bu cihazda saklanır. Hesap ya da sunucu yoktur. Uygulamayı telefonuna kurabilir, internet olmadan da kullanabilirsin.</p>' +
      '<div class="kutu uyari"><span class="kutu-ikon">!</span><div><p>Buradaki bilgiler eğitim amaçlıdır. Cihazını açmak garantiyi bozabilir. Batarya ve elektrikle ilgili işlemler risklidir. Tüm işlemler senin sorumluluğundadır. Sertifika, bu çevrimiçi eğitimin tamamlandığını gösterir; resmî bir mesleki yeterlilik belgesi değildir.</p></div></div>' +
      '<h2>İlerlemeyi sıfırla</h2><p>Tamamlanan dersleri, sınav sonuçlarını ve sertifika bilgisini siler.</p>' +
      '<button class="dugme ikincil" id="sifirla" type="button">İlerlemeyi sıfırla</button></div>';
  }

  function bulunamadi() {
    return '<div class="kart bos"><h2>Sayfa bulunamadı</h2><p>Aradığın sayfa yok ya da taşınmış.</p><a class="dugme" href="#/">Ana sayfaya dön</a></div>';
  }
  function ekmek(parcalar) {
    var h = '<nav class="ekmek" aria-label="Konum"><a href="#/">Kurs</a>';
    parcalar.forEach(function (p) { h += ' / ' + (p[1] ? '<a href="' + p[1] + '">' + kacis(p[0]) + '</a>' : '<span>' + kacis(p[0]) + '</span>'); });
    return h + '</nav>';
  }
  function sonrakiAdim() {
    for (var i = 0; i < TA.moduller.length; i++) {
      var m = TA.moduller[i], ic = icerik(m.id);
      if (!ic) continue;
      for (var j = 0; j < ic.dersler.length; j++) {
        if (!ilerleme.biten[m.id + '/' + ic.dersler[j].id]) return { href: '#/ders/' + m.id + '/' + ic.dersler[j].id };
      }
      if (!quizGecti(m.id)) return { href: '#/quiz/' + m.id };
    }
    return finalGecti() ? null : { href: '#/final' };
  }

  // ---------- Konfeti ----------
  function konfeti() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var kap = document.createElement('div'); kap.className = 'konfeti'; kap.setAttribute('aria-hidden', 'true');
    var renkler = ['#0a84ff', '#f2b134', '#3ecf7e', '#ff6b66', '#7c3aed'];
    for (var i = 0; i < 70; i++) {
      var s = document.createElement('i');
      s.style.left = Math.random() * 100 + 'vw'; s.style.background = renkler[i % renkler.length];
      s.style.animationDelay = Math.random() * 0.6 + 's'; s.style.animationDuration = 1.8 + Math.random() * 1.6 + 's';
      s.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
      kap.appendChild(s);
    }
    document.body.appendChild(kap);
    setTimeout(function () { kap.remove(); }, 4200);
  }

  // ---------- Yönlendirme ----------
  function yonlendir() {
    var p = (location.hash || '#/').slice(1).split('?')[0].split('/').filter(Boolean);
    var html, nav = 'ana', baslik = 'Tamir Akademisi';

    if (p.length === 0) html = anaSayfa();
    else if (p[0] === 'hakkinda') { html = hakkinda(); nav = 'hakkinda'; baslik = 'Hakkında'; }
    else if (p[0] === 'modul' && p[1]) { html = modulSayfasi(p[1]); var m1 = modulBul(p[1]); if (m1) baslik = m1.baslik; }
    else if (p[0] === 'ders' && p[1] && p[2]) html = dersSayfasi(p[1], p[2]);
    else if (p[0] === 'quiz' && p[1]) { html = quizSayfasi(p[1]); baslik = 'Modül sınavı'; }
    else if (p[0] === 'final') { html = finalSayfasi(); baslik = 'Final sınavı'; nav = 'sertifika'; }
    else if (p[0] === 'sertifika') { html = sertifikaSayfasi(); baslik = 'Sertifika'; nav = 'sertifika'; }
    else if (p[0] === 'araclar') { html = araclarSayfasi(); baslik = 'Araçlar'; nav = 'araclar'; }
    else if (p[0] === 'arac' && p[1]) { html = aracSayfasi(p[1]); baslik = 'Araçlar'; nav = 'araclar'; }
    else if (p[0] === 'sozluk') { html = sozlukSayfasi(); baslik = 'Sözlük'; nav = 'sozluk'; }
    else html = bulunamadi();

    main.innerHTML = html;
    if (p[0] === 'ders') { var h1 = main.querySelector('h1'); if (h1) baslik = h1.textContent; }
    document.title = baslik === 'Tamir Akademisi' ? baslik : baslik + ' · Tamir Akademisi';
    document.querySelectorAll('[data-nav]').forEach(function (a) { a.classList.toggle('aktif', a.getAttribute('data-nav') === nav); });

    if (TA.bilesenKur) TA.bilesenKur(main);
    if (p[0] === 'quiz') quizBagla(p[1]);
    if (p[0] === 'final') finalBagla();
    if (p[0] === 'sertifika') sertifikaBagla();
    if (p[0] === 'sozluk') sozlukBagla();
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }

  main.addEventListener('click', function (e) {
    var a = e.target.closest('[data-bitir]');
    if (a) {
      var p = (location.hash || '').slice(1).split('/').filter(Boolean);
      if (p[0] === 'ders') { ilerleme.biten[p[1] + '/' + p[2]] = true; kaydet(); }
      return;
    }
    if (e.target.id === 'sifirla' && confirm('Tüm ilerlemen silinsin mi?')) {
      ilerleme = { biten: {}, quiz: {} }; kaydet(); location.hash = '#/';
    }
  });

  // ---------- Tema ----------
  document.getElementById('temaBtn').addEventListener('click', function () {
    var simdiki = document.documentElement.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var yeni = simdiki === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', yeni);
    try { localStorage.setItem('ta-tema', yeni); } catch (e) {}
  });

  window.addEventListener('hashchange', yonlendir);
  yonlendir();

  // ---------- PWA ----------
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
})();
