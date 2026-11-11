// Tamir Akademisi — tek sayfa uygulama (sunucusuz, ilerleme tarayıcıda saklanır)
(function () {
  'use strict';

  var main = document.getElementById('uygulama');
  var ANAHTAR = 'ta-ilerleme';

  // ---------- Depolama ----------
  function oku(k, varsayilan) {
    try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : varsayilan; } catch (e) { return varsayilan; }
  }
  function yaz(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {}
  }
  // ilerleme = { biten: { "temeller/esd": true }, quiz: { temeller: 5 } }
  var ilerleme = oku(ANAHTAR, { biten: {}, quiz: {} });
  if (!ilerleme.biten) ilerleme.biten = {};
  if (!ilerleme.quiz) ilerleme.quiz = {};
  function kaydet() { yaz(ANAHTAR, ilerleme); }

  // ---------- Yardımcılar ----------
  function kacis(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function modulBul(id) { return TA.moduller.filter(function (m) { return m.id === id; })[0]; }
  function icerik(id) { return TA.icerik[id]; }

  function modulDurum(m) {
    var ic = icerik(m.id);
    if (!ic) return { hazir: false, toplam: 0, biten: 0, yuzde: 0 };
    var toplam = ic.dersler.length + (ic.quiz && ic.quiz.length ? 1 : 0);
    var biten = ic.dersler.filter(function (d) { return ilerleme.biten[m.id + '/' + d.id]; }).length;
    if (ic.quiz && ic.quiz.length && ilerleme.quiz[m.id] != null) biten++;
    return { hazir: true, toplam: toplam, biten: biten, yuzde: toplam ? Math.round(biten / toplam * 100) : 0 };
  }

  function genelDurum() {
    var t = 0, b = 0;
    TA.moduller.forEach(function (m) { var d = modulDurum(m); t += d.toplam; b += d.biten; });
    return { toplam: t, biten: b, yuzde: t ? Math.round(b / t * 100) : 0 };
  }

  function cubuk(yuzde) {
    return '<div class="ilerleme" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + yuzde +
      '"><span style="width:' + yuzde + '%"></span></div>';
  }

  // ---------- Sayfalar ----------
  function anaSayfa() {
    var g = genelDurum();
    var devam = sonrakiDers();
    var html = '<section class="kahraman"><div>' +
      '<h1>Telefon ve tablet tamirini sıfırdan öğren</h1>' +
      '<p>Marka bağımsız, ücretsiz ve adım adım ilerleyen bir kurs. Güvenlikten mikro lehime kadar teknik servisin temellerini öğren.</p>' +
      (devam
        ? '<a class="dugme" href="#/ders/' + devam.modul + '/' + devam.ders + '">' + (g.biten ? 'Kaldığın yerden devam et' : 'Kursa başla') + ' →</a>'
        : '<a class="dugme" href="#/modul/temeller">Kursa göz at →</a>') +
      '</div><div class="kart ozet-kart"><h3>İlerlemen</h3>' +
      '<div class="ozet-sayi">%' + g.yuzde + '</div>' + cubuk(g.yuzde) +
      '<small>' + g.biten + ' / ' + g.toplam + ' bölüm tamamlandı</small></div></section>';

    html += '<h2>Modüller</h2><div class="modul-izgara">';
    TA.moduller.forEach(function (m) {
      var d = modulDurum(m);
      var rozet = !d.hazir ? '<span class="rozet yakinda">Yakında</span>'
        : d.yuzde === 100 ? '<span class="rozet tamam">Tamamlandı</span>'
        : '<span class="rozet">' + d.toplam + ' bölüm</span>';
      var ic = '<div class="modul-ust"><span class="modul-no">' + m.no + '</span>' + rozet + '</div>' +
        '<h3>' + kacis(m.baslik) + '</h3><p>' + kacis(m.ozet) + '</p>' + (d.hazir ? cubuk(d.yuzde) : '');
      html += d.hazir
        ? '<a class="kart modul-kart" href="#/modul/' + m.id + '">' + ic + '</a>'
        : '<div class="kart modul-kart kilitli" aria-disabled="true">' + ic + '</div>';
    });
    html += '</div>';
    return html;
  }

  function modulSayfasi(id) {
    var m = modulBul(id), ic = icerik(id);
    if (!m) return bulunamadi();
    if (!ic) {
      return ekmek([[m.baslik]]) + '<div class="kart bos"><h2>' + kacis(m.baslik) + '</h2><p>Bu modül hazırlanıyor. Yakında eklenecek.</p>' +
        '<a class="dugme ikincil" href="#/">← Modüllere dön</a></div>';
    }
    var d = modulDurum(m);
    var html = ekmek([[m.baslik]]) +
      '<div class="modul-baslik"><span class="rozet">Modül ' + m.no + '</span><h1>' + kacis(m.baslik) + '</h1><p>' + kacis(m.ozet) + '</p>' +
      cubuk(d.yuzde) + '</div><ol class="ders-listesi">';
    ic.dersler.forEach(function (ders, i) {
      var bitti = ilerleme.biten[id + '/' + ders.id];
      html += '<li><a href="#/ders/' + id + '/' + ders.id + '">' +
        '<span class="ders-durum' + (bitti ? ' bitti' : '') + '">' + (bitti ? '✓' : i + 1) + '</span>' +
        '<span class="ders-bilgi"><strong>' + kacis(ders.baslik) + '</strong><small>' + ders.sure + ' dk okuma</small></span></a></li>';
    });
    if (ic.quiz && ic.quiz.length) {
      var puan = ilerleme.quiz[id];
      html += '<li><a href="#/quiz/' + id + '"><span class="ders-durum' + (puan != null ? ' bitti' : '') + '">' + (puan != null ? '✓' : '?') + '</span>' +
        '<span class="ders-bilgi"><strong>Modül sınavı</strong><small>' + ic.quiz.length + ' soru' +
        (puan != null ? ' · En son: ' + puan + '/' + ic.quiz.length : '') + '</small></span></a></li>';
    }
    return html + '</ol>';
  }

  function dersSayfasi(mid, did) {
    var m = modulBul(mid), ic = icerik(mid);
    if (!m || !ic) return bulunamadi();
    var i = -1;
    ic.dersler.forEach(function (d, k) { if (d.id === did) i = k; });
    if (i < 0) return bulunamadi();
    var ders = ic.dersler[i];
    var onceki = ic.dersler[i - 1], sonraki = ic.dersler[i + 1];
    var bitti = ilerleme.biten[mid + '/' + did];

    var yan = '<aside class="ders-yan"><a class="dugme ikincil" href="#/modul/' + mid + '" style="margin-bottom:12px">← ' + kacis(m.baslik) + '</a><ol>';
    ic.dersler.forEach(function (d, k) {
      var b = ilerleme.biten[mid + '/' + d.id];
      yan += '<li><a href="#/ders/' + mid + '/' + d.id + '"' + (k === i ? ' class="aktif" aria-current="page"' : '') + '>' +
        '<span class="' + (b ? 'tik' : '') + '">' + (b ? '✓' : (k + 1) + '.') + '</span> ' + kacis(d.baslik) + '</a></li>';
    });
    if (ic.quiz && ic.quiz.length) yan += '<li><a href="#/quiz/' + mid + '"><span>?</span> Modül sınavı</a></li>';
    yan += '</ol></aside>';

    var ileri = sonraki
      ? '<a class="dugme" data-bitir href="#/ders/' + mid + '/' + sonraki.id + '">Tamamla ve devam et →</a>'
      : (ic.quiz && ic.quiz.length
        ? '<a class="dugme" data-bitir href="#/quiz/' + mid + '">Tamamla ve sınava geç →</a>'
        : '<a class="dugme" data-bitir href="#/modul/' + mid + '">Modülü tamamla ✓</a>');

    return ekmek([[m.baslik, '#/modul/' + mid], [ders.baslik]]) +
      '<div class="ders">' + yan + '<article class="ders-icerik"><div class="kart">' +
      '<div class="ders-meta">Modül ' + m.no + ' · Ders ' + (i + 1) + ' / ' + ic.dersler.length + ' · ' + ders.sure + ' dk' +
      (bitti ? ' · <span class="rozet tamam">Tamamlandı</span>' : '') + '</div>' +
      '<h1>' + kacis(ders.baslik) + '</h1>' + ders.html +
      '<div class="dugme-satiri">' +
      (onceki ? '<a class="dugme ikincil" href="#/ders/' + mid + '/' + onceki.id + '">← ' + kacis(onceki.baslik) + '</a>' : '<span></span>') +
      ileri + '</div></div></article></div>';
  }

  function quizSayfasi(mid) {
    var m = modulBul(mid), ic = icerik(mid);
    if (!m || !ic || !ic.quiz) return bulunamadi();
    var html = ekmek([[m.baslik, '#/modul/' + mid], ['Modül sınavı']]) +
      '<div class="kart" style="max-width:760px;margin:0 auto"><h1>' + kacis(m.baslik) + ': Modül sınavı</h1>' +
      '<p class="ders-meta">' + ic.quiz.length + ' soru. Hepsini cevaplayıp "Sonucu gör" düğmesine bas.</p><form id="quizForm">';
    ic.quiz.forEach(function (s, i) {
      html += '<fieldset class="soru" style="border:0;padding:0;margin:0 0 22px"><strong>' + (i + 1) + '. ' + kacis(s.soru) + '</strong><div class="secenekler">';
      s.secenekler.forEach(function (sec, j) {
        html += '<label class="secenek"><input type="radio" name="s' + i + '" value="' + j + '" required> ' + kacis(sec) + '</label>';
      });
      html += '</div><div class="aciklama" hidden></div></fieldset>';
    });
    html += '<div class="dugme-satiri"><a class="dugme ikincil" href="#/modul/' + mid + '">← Modüle dön</a>' +
      '<button class="dugme" type="submit">Sonucu gör</button></div></form><div id="quizSonuc"></div></div>';
    return html;
  }

  function quizBagla(mid) {
    var form = document.getElementById('quizForm');
    if (!form) return;
    var ic = icerik(mid);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var dogru = 0;
      var alanlar = form.querySelectorAll('fieldset.soru');
      ic.quiz.forEach(function (s, i) {
        var sec = form.querySelector('input[name="s' + i + '"]:checked');
        var v = sec ? +sec.value : -1;
        if (v === s.dogru) dogru++;
        alanlar[i].querySelectorAll('.secenek').forEach(function (lab, j) {
          lab.classList.toggle('dogru', j === s.dogru);
          lab.classList.toggle('yanlis', j === v && v !== s.dogru);
          lab.querySelector('input').disabled = true;
        });
        var ac = alanlar[i].querySelector('.aciklama');
        ac.hidden = false;
        ac.textContent = (v === s.dogru ? '✓ Doğru. ' : '✗ Yanlış. ') + s.aciklama;
      });
      ilerleme.quiz[mid] = dogru;
      kaydet();
      var oran = Math.round(dogru / ic.quiz.length * 100);
      form.querySelector('button[type="submit"]').remove();
      var sonuc = document.getElementById('quizSonuc');
      sonuc.innerHTML = '<div class="sonuc"><div class="ozet-sayi">' + dogru + ' / ' + ic.quiz.length + '</div>' +
        '<p>' + (oran >= 80 ? 'Harika! Bu modülün temellerini oturttun.' : oran >= 50 ? 'Fena değil. Yanlış cevapların açıklamalarını gözden geçir.' : 'Dersleri bir kez daha okumanı öneririz.') + '</p>' +
        '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">' +
        '<a class="dugme ikincil" href="#/quiz/' + mid + '?' + Date.now() + '">Tekrar çöz</a>' +
        '<a class="dugme" href="#/">Modüllere dön</a></div></div>';
      sonuc.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  function hakkinda() {
    return '<div class="kart" style="max-width:760px;margin:0 auto"><h1>Hakkında</h1>' +
      '<p><strong>Tamir Akademisi</strong>, telefon ve tablet tamirini merak edenler için hazırlanmış, marka bağımsız ve ücretsiz bir kurstur.</p>' +
      '<p>İlerlemen yalnızca bu tarayıcıda saklanır. Hesap ya da sunucu yoktur.</p>' +
      '<div class="kutu uyari"><span class="kutu-ikon">!</span><div><p>Buradaki bilgiler eğitim amaçlıdır. Cihazını açmak garantiyi bozabilir. Batarya ve elektrikle ilgili işlemler risklidir. Tüm işlemler senin sorumluluğundadır.</p></div></div>' +
      '<h2>İlerlemeyi sıfırla</h2><p>Tamamlanan dersleri ve sınav sonuçlarını siler.</p>' +
      '<button class="dugme ikincil" id="sifirla" type="button">İlerlemeyi sıfırla</button></div>';
  }

  function bulunamadi() {
    return '<div class="kart bos"><h2>Sayfa bulunamadı</h2><p>Aradığın sayfa yok ya da taşınmış.</p><a class="dugme" href="#/">Ana sayfaya dön</a></div>';
  }

  function ekmek(parcalar) {
    var h = '<nav class="ekmek" aria-label="Konum"><a href="#/">Kurs</a>';
    parcalar.forEach(function (p) {
      h += ' / ' + (p[1] ? '<a href="' + p[1] + '">' + kacis(p[0]) + '</a>' : '<span>' + kacis(p[0]) + '</span>');
    });
    return h + '</nav>';
  }

  function sonrakiDers() {
    for (var i = 0; i < TA.moduller.length; i++) {
      var m = TA.moduller[i], ic = icerik(m.id);
      if (!ic) continue;
      for (var j = 0; j < ic.dersler.length; j++) {
        if (!ilerleme.biten[m.id + '/' + ic.dersler[j].id]) return { modul: m.id, ders: ic.dersler[j].id };
      }
    }
    return null;
  }

  // ---------- Yönlendirme ----------
  function yonlendir() {
    var yol = (location.hash || '#/').slice(1).split('?')[0];
    var p = yol.split('/').filter(Boolean);
    var html, nav = 'ana', baslik = 'Tamir Akademisi';

    if (p.length === 0) html = anaSayfa();
    else if (p[0] === 'hakkinda') { html = hakkinda(); nav = 'hakkinda'; baslik = 'Hakkında · Tamir Akademisi'; }
    else if (p[0] === 'modul' && p[1]) { html = modulSayfasi(p[1]); var m1 = modulBul(p[1]); if (m1) baslik = m1.baslik + ' · Tamir Akademisi'; }
    else if (p[0] === 'ders' && p[1] && p[2]) { html = dersSayfasi(p[1], p[2]); }
    else if (p[0] === 'quiz' && p[1]) { html = quizSayfasi(p[1]); baslik = 'Modül sınavı · Tamir Akademisi'; }
    else html = bulunamadi();

    main.innerHTML = html;
    document.title = baslik;
    document.querySelectorAll('[data-nav]').forEach(function (a) {
      a.classList.toggle('aktif', a.getAttribute('data-nav') === nav);
    });
    if (p[0] === 'ders') {
      var h1 = main.querySelector('h1');
      if (h1) document.title = h1.textContent + ' · Tamir Akademisi';
    }
    if (p[0] === 'quiz') quizBagla(p[1]);
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }

  // "Tamamla" düğmeleri: dersi bitti olarak işaretle, sonra bağlantıya git
  main.addEventListener('click', function (e) {
    var a = e.target.closest('[data-bitir]');
    if (a) {
      var p = (location.hash || '').slice(1).split('/').filter(Boolean);
      if (p[0] === 'ders') { ilerleme.biten[p[1] + '/' + p[2]] = true; kaydet(); }
      return;
    }
    if (e.target.id === 'sifirla') {
      if (confirm('Tüm ilerlemen silinsin mi?')) {
        ilerleme = { biten: {}, quiz: {} };
        kaydet();
        location.hash = '#/';
      }
    }
  });

  // ---------- Tema ----------
  var temaBtn = document.getElementById('temaBtn');
  temaBtn.addEventListener('click', function () {
    var simdiki = document.documentElement.getAttribute('data-theme') ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var yeni = simdiki === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', yeni);
    try { localStorage.setItem('ta-tema', yeni); } catch (e) {}
  });

  window.addEventListener('hashchange', yonlendir);
  yonlendir();

  // ---------- Mobil uygulama (PWA): çevrimdışı çalışma ----------
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }
})();
