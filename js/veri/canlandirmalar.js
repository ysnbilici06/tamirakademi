// Adım adım canlandırmalar (SVG kareleri). Derste: <div data-bilesen="canlandirma" data-ad="ekran-acma"></div>
(function () {
  var TA = window.TA;
  var V = 'var(--vurgu)', U = 'var(--uyari)', K = 'var(--tehlike)', B = 'var(--basari)', M = 'currentColor';

  function kap(ic) {
    return '<svg viewBox="0 0 400 220" class="cn-svg" role="img">' + ic + '</svg>';
  }
  // Yandan görünüş: alt kasa + üst ekran
  function telefonYan(acik, ekstra) {
    var aci = acik || 0;
    return '<rect x="60" y="130" width="280" height="22" rx="8" fill="var(--yuzey-2)" stroke="' + M + '" stroke-width="2"/>' +
      '<g transform="rotate(' + (-aci) + ' 60 128)"><rect x="60" y="112" width="280" height="16" rx="6" fill="#20262f" stroke="' + M + '" stroke-width="2"/>' +
      '<rect x="66" y="115" width="268" height="4" rx="2" fill="#3b82f6" opacity=".55"/></g>' + (ekstra || '');
  }
  function etiket(x, y, t, renk) {
    return '<text x="' + x + '" y="' + y + '" font-size="13" font-family="system-ui,sans-serif" font-weight="600" fill="' + (renk || M) + '">' + t + '</text>';
  }
  function dalga(x, y) {
    return '<g fill="none" stroke="' + U + '" stroke-width="2.5" stroke-linecap="round" class="cn-titre">' +
      '<path d="M' + x + ' ' + y + ' q6 -8 0 -16 q-6 -8 0 -16"/><path d="M' + (x + 14) + ' ' + y + ' q6 -8 0 -16 q-6 -8 0 -16"/><path d="M' + (x + 28) + ' ' + y + ' q6 -8 0 -16 q-6 -8 0 -16"/></g>';
  }
  function vantuz(y) {
    return '<g class="cn-yukari"><rect x="282" y="' + (y - 34) + '" width="10" height="30" fill="' + M + '"/><path d="M262 ' + (y - 4) + ' h50 l-8 -10 h-34 z" fill="' + V + '"/></g>';
  }
  function pick(x, y, aci) {
    return '<g transform="translate(' + x + ' ' + y + ') rotate(' + (aci || 0) + ')"><path d="M0 0 l60 -6 l4 6 l-64 6 z" fill="' + U + '" stroke="' + M + '" stroke-width="1"/></g>';
  }

  TA.canlandirmalar = {
    'ekran-acma': {
      baslik: 'Yapıştırıcılı bir ekranı / arka camı açmak',
      kareler: [
        { svg: kap(telefonYan(0) + etiket(60, 40, 'Cihaz kapalı, şarj %25\'in altında')), metin: 'Cihazı kapat. Şarjın düşük olması, kaza ihtimaline karşı riski azaltır. Vidalı alt kenar varsa önce vidaları sök.' },
        { svg: kap(telefonYan(0) + dalga(150, 100) + etiket(130, 40, '~80 °C, 2–3 dk', U)), metin: 'Kenarları ısı tabancası, iOpener ya da ısıtma plakasıyla yaklaşık 80 °C\'ye ısıt. Isıyı tek noktada tutma, sürekli hareket ettir.' },
        { svg: kap(telefonYan(0) + vantuz(112) + etiket(220, 40, 'Vantuzla yukarı çek')), metin: 'Vantuzu ısıtılmış kenara yakın yerleştir. Sabit ve yavaş bir kuvvetle yukarı çekerek küçük bir aralık oluştur.' },
        { svg: kap(telefonYan(4, pick(300, 128, 0)) + etiket(220, 40, 'Pick\'i aralığa sok', U)), metin: 'Oluşan aralığa plastik açma kartını (pick) sok. Kartı en fazla 2-3 mm içeri sok. Daha derine girersen ekran flex\'ini kesebilirsin.' },
        { svg: kap(telefonYan(6, pick(130, 126, 0) + '<path d="M300 100 H140" stroke="' + U + '" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#ok)"/>') + '<defs><marker id="ok" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="' + U + '"/></marker></defs>' + etiket(150, 40, 'Kenar boyunca kaydır')), metin: 'Kartı kenar boyunca kaydırarak yapıştırıcıyı kes. Yapıştırıcı soğursa tekrar ısıt. Kartları yerlerinde bırakmak, yapıştırıcının yeniden tutmasını önler.' },
        { svg: kap(telefonYan(28) + '<rect x="70" y="128" width="40" height="6" fill="' + K + '"/>' + etiket(200, 60, 'Flex\'e dikkat! 90°\'den fazla açma', K)), metin: 'Ekranı kitap gibi aç. Ekran flex\'i hâlâ bağlı olduğu için açıyı sınırlı tut ve ekranı bir şeye yasla.' },
        { svg: kap(telefonYan(28) + '<rect x="70" y="128" width="40" height="6" fill="' + B + '"/>' + '<path d="M90 160 v-22" stroke="' + B + '" stroke-width="3"/>' + etiket(150, 190, 'İLK İŞ: Batarya konnektörü', B)), metin: 'Başka hiçbir şeye dokunmadan önce batarya konnektörünü plastik spudger ile ayır. Artık güvenle çalışabilirsin.' }
      ]
    },
    'konnektor': {
      baslik: 'Bir flex konnektörünü doğru ayırmak ve takmak',
      kareler: [
        { svg: kap('<rect x="80" y="120" width="240" height="40" rx="4" fill="#1e5a3c"/><rect x="160" y="100" width="80" height="22" rx="3" fill="#333" stroke="' + M + '"/><rect x="150" y="70" width="100" height="30" rx="3" fill="' + U + '" opacity=".85"/>' + etiket(140, 50, 'Konnektör (yukarıdan bakış)')), metin: 'Flex konnektörleri, anakarttaki sokete basılarak takılan küçük "çıtçıt" bağlantılardır.' },
        { svg: kap('<rect x="80" y="120" width="240" height="40" rx="4" fill="#1e5a3c"/><rect x="160" y="100" width="80" height="22" rx="3" fill="#333" stroke="' + M + '"/><g class="cn-yukari"><rect x="160" y="80" width="80" height="16" rx="3" fill="' + U + '" opacity=".85"/></g><path d="M245 115 l40 -30" stroke="' + V + '" stroke-width="6" stroke-linecap="round"/>' + etiket(260, 70, 'Spudger', V)), metin: 'Spudger\'ın ucunu konnektörün ALTINA, kısa kenarından sok ve dikey olarak kaldır. Flex kablodan ya da soketten kanırtma.' },
        { svg: kap('<rect x="80" y="120" width="240" height="40" rx="4" fill="#1e5a3c"/><rect x="160" y="100" width="80" height="22" rx="3" fill="#333" stroke="' + M + '"/><path d="M175 98 l50 -30 M225 98 l-50 -30" stroke="' + K + '" stroke-width="5"/>' + etiket(110, 50, 'Yanlış: metal alet veya cımbızla çekmek', K)), metin: 'Metal aletle kanırtmak soketin yanındaki küçük parçaları (kondansatör vb.) koparabilir veya kısa devre yaratabilir.' },
        { svg: kap('<rect x="80" y="120" width="240" height="40" rx="4" fill="#1e5a3c"/><rect x="160" y="100" width="80" height="22" rx="3" fill="#333" stroke="' + M + '"/><rect x="160" y="98" width="80" height="16" rx="3" fill="' + U + '" opacity=".85"/><path d="M200 60 v30" stroke="' + B + '" stroke-width="4" marker-end="url(#ok2)"/><defs><marker id="ok2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="' + B + '"/></marker></defs>' + etiket(130, 45, 'Hizala, önce bir uçtan bas', B)), metin: 'Takarken konnektörü sokete tam hizala. Önce bir ucundan, sonra diğer ucundan parmak ucuyla bas. "Tık" hissini almalısın. Hizasız basmak pinleri ezer.' }
      ]
    },
    'lehim': {
      baslik: 'İyi bir lehim noktası nasıl yapılır?',
      kareler: [
        { svg: kap('<rect x="40" y="150" width="320" height="20" fill="#1e5a3c"/><rect x="170" y="140" width="60" height="10" fill="#c9a227"/><path d="M60 40 L180 128" stroke="#888" stroke-width="10" stroke-linecap="round"/><circle cx="182" cy="130" r="5" fill="#ddd"/>' + etiket(220, 60, 'Uç kalaylı ve temiz', V)), metin: 'Havya ucunu (genelde 330–360 °C) temizle ve ince bir kalay tabakasıyla kaplat. Parlak bir uç ısıyı iyi iletir.' },
        { svg: kap('<rect x="40" y="150" width="320" height="20" fill="#1e5a3c"/><rect x="170" y="140" width="60" height="10" fill="#c9a227"/><path d="M60 40 L172 136" stroke="#888" stroke-width="10" stroke-linecap="round"/><g class="cn-titre"><circle cx="200" cy="136" r="14" fill="none" stroke="' + U + '" stroke-width="2"/></g>' + etiket(220, 60, 'Önce flux sür', U)), metin: 'Lehim yapılacak yere flux sür. Flux oksidi temizler ve lehimin akmasını sağlar. Flux olmadan mikro lehim neredeyse imkânsızdır.' },
        { svg: kap('<rect x="40" y="150" width="320" height="20" fill="#1e5a3c"/><rect x="170" y="140" width="60" height="10" fill="#c9a227"/><path d="M60 40 L172 136" stroke="#888" stroke-width="10" stroke-linecap="round"/><path d="M340 60 L215 132" stroke="#bbb" stroke-width="4"/>' + etiket(250, 50, 'Teli ped\'e ver, uca değil')), metin: 'Havyayı pede ve bacağa aynı anda değdir, 1-2 saniye ısıt. Lehim telini havya ucuna değil, ısınan noktaya ver.' },
        { svg: kap('<rect x="40" y="150" width="320" height="20" fill="#1e5a3c"/><path d="M168 150 Q200 112 232 150 Z" fill="#cfd5dc" stroke="#9aa4b0"/><rect x="196" y="100" width="8" height="50" fill="#9aa4b0"/>' + etiket(120, 60, 'Doğru: parlak, içbükey koni', B)), metin: 'İyi bir lehim noktası parlak ve pürüzsüzdür. İçbükey bir koni şeklinde olur. Mat, top şeklinde ya da çatlak görünüyorsa "soğuk lehim" olmuştur. Tekrar flux sürüp ısıt.' }
      ]
    },
    'batarya-degisim': {
      baslik: 'Yapışkanlı batarya nasıl çıkarılır?',
      kareler: [
        { svg: kap('<rect x="90" y="40" width="220" height="150" rx="14" fill="var(--yuzey-2)" stroke="' + M + '" stroke-width="2"/><rect x="120" y="60" width="160" height="110" rx="6" fill="#3a3f47"/><rect x="150" y="62" width="30" height="10" fill="' + B + '"/>' + etiket(150, 30, 'Konnektör ayrılmış olmalı', B)), metin: 'Batarya konnektörünün ayrılmış olduğundan emin ol. Bataryanın üstündeki flex\'leri ve vidalı braketleri kaldır.' },
        { svg: kap('<rect x="90" y="40" width="220" height="150" rx="14" fill="var(--yuzey-2)" stroke="' + M + '" stroke-width="2"/><rect x="120" y="60" width="160" height="110" rx="6" fill="#3a3f47"/><path d="M150 170 v25 h20 v-25" fill="#eee" stroke="#999"/><path d="M230 170 v25 h20 v-25" fill="#eee" stroke="#999"/>' + etiket(130, 215, 'Çekme bantlarını bul', V)), metin: 'Bataryanın altından çıkan beyaz/siyah çekme bantlarını (pull tab) bul ve parmağına sar.' },
        { svg: kap('<rect x="90" y="40" width="220" height="150" rx="14" fill="var(--yuzey-2)" stroke="' + M + '" stroke-width="2"/><rect x="120" y="60" width="160" height="110" rx="6" fill="#3a3f47"/><path d="M160 170 L360 190" stroke="#eee" stroke-width="6"/><path d="M160 170 L360 190" stroke="#999" stroke-width="1"/>' + etiket(220, 215, 'Düz, yavaş, düşük açıyla çek', U)), metin: 'Bandı kasaya PARALEL ve yavaşça çek. Dik çekersen bant kopar. Bant uzayarak yapışkandan kendiliğinden ayrılır.' },
        { svg: kap('<rect x="90" y="40" width="220" height="150" rx="14" fill="var(--yuzey-2)" stroke="' + M + '" stroke-width="2"/><rect x="120" y="60" width="160" height="110" rx="6" fill="#3a3f47"/><g fill="#7fc8ff"><circle cx="125" cy="70" r="5"/><circle cx="125" cy="160" r="5"/><circle cx="275" cy="70" r="5"/></g><rect x="100" y="110" width="50" height="6" fill="' + U + '" transform="rotate(-8 100 110)"/>' + etiket(110, 30, 'Bant koptuysa: %99 alkol + plastik kart', U)), metin: 'Bant koparsa kenarlara birkaç damla %99 izopropil alkol damlat, 1-2 dakika bekle. Ardından plastik bir kartla yavaşça kaldır. ASLA metal alet sokup kanırtma.' }
      ]
    }
  };

  // Gerçek ürün fotoğrafları: her kare için [dosya adı, alternatif metin] (null = sadece şema)
  var FOTOLAR = {
    'ekran-acma': [
      ['iphone4-parcalar', 'Sökülmüş bir iPhone 4\'ün tüm parçaları'],
      ['isi-tabancasi', 'Sıcak hava tabancası'],
      ['ekran-acma', 'Ekranı kaldırılan bir iPhone 6s'],
      ['ekran-acma', 'Ekranı kaldırılan bir iPhone 6s'],
      null,
      ['iphone6s-acik', 'Kitap gibi açılmış iPhone 6s: solda ekran, sağda kasa'],
      ['iphone5s-ic', 'Ekranı çıkarılmış iPhone 5s; batarya ve konnektörler görünüyor']
    ],
    'konnektor': [
      ['konnektorler', 'iPhone 6 anakartındaki flex konnektörleri'],
      ['spudger', 'Plastik spudger'],
      null,
      ['konnektorler', 'iPhone 6 anakartındaki flex konnektörleri']
    ],
    'lehim': [
      ['havya-kalay', 'Havya ucunun kalaylanması'],
      ['flux', 'Sıvı SMD flux şişesi'],
      null,
      null
    ],
    'batarya-degisim': [
      ['iphone5s-ic', 'iPhone 5s içinde yapışkanla tutturulmuş batarya'],
      ['iphone6s-acik', 'iPhone 6s bataryası ve alt kenardaki çekme bantları'],
      null,
      null
    ]
  };
  Object.keys(FOTOLAR).forEach(function (ad) {
    FOTOLAR[ad].forEach(function (f, i) {
      var kare = TA.canlandirmalar[ad].kareler[i];
      if (f && kare) { kare.foto = f[0]; kare.fotoAlt = f[1]; }
    });
  });
})();
