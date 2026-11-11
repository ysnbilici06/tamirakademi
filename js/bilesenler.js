// Etkileşimli bileşenler: derslerin içine <div data-bilesen="ad" data-...></div> olarak yerleştirilir.
// app.js her sayfa çiziminden sonra TA.bilesenKur(kok) çağırır.
(function () {
  'use strict';
  var TA = window.TA;

  function el(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }
  function kacis(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // =====================================================================
  // 1) ARIZA TEŞHİS SİHİRBAZI
  // =====================================================================
  // Düğüm: { soru, secenekler: [[metin, sonrakiId]] }  ya da  { sonuc: {...} }
  var T = {
    bas: { soru: 'Cihazdaki belirti ne?', secenekler: [
      ['Şarj olmuyor veya çok yavaş şarj oluyor', 'sarj1'],
      ['Hiç açılmıyor, tepki yok', 'acil1'],
      ['Açılıyor ama ekran karanlık / görüntü bozuk', 'ekr1'],
      ['Dokunmatik çalışmıyor veya kendi kendine basıyor', 'dok1'],
      ['Ses yok, karşı taraf beni duymuyor', 'ses1'],
      ['Aşırı ısınıyor, şarjı çok çabuk bitiyor', 'isi1'],
      ['Kamera açılmıyor veya bulanık', 'kam1']
    ]},

    // ---- Şarj ----
    sarj1: { soru: 'Farklı, sağlam bir kablo ve adaptörle denedin mi?', secenekler: [
      ['Hayır, henüz denemedim', 'sarjKablo'], ['Evet, yine olmuyor', 'sarj2']] },
    sarjKablo: { sonuc: { baslik: 'Önce kablo ve adaptörü ele', zorluk: 'Kolay', renk: 'basari',
      nedenler: ['Kablo içinden kopmuş olabilir (en sık neden)', 'Adaptör yeterli akım vermiyor olabilir'],
      adimlar: ['Bilinen sağlam bir kablo ve adaptörle dene.', 'USB ampermetre takıp akım okumasına bak.', 'Sorun sürerse sihirbaza geri dön.'] } },
    sarj2: { soru: 'Şarj soketinin içine fenerle baktığında ne görüyorsun?', secenekler: [
      ['Toz, tüy veya kir var', 'sarjKir'], ['Temiz görünüyor', 'sarj3'], ['Pinler eğik, yanık ya da paslı', 'sarjSoket']] },
    sarjKir: { sonuc: { baslik: 'Soket tıkanması', zorluk: 'Kolay', renk: 'basari',
      nedenler: ['Cepteki tüyler sokete sıkışır, fiş tam oturmaz'],
      adimlar: ['Cihazı kapat.', 'Plastik bir kürdan veya antistatik fırçayla tüyleri nazikçe dışarı al. Metal iğne kullanma.', 'Gerekirse %99 izopropil alkollü fırçayla temizle ve kurumasını bekle.'] } },
    sarjSoket: { sonuc: { baslik: 'Şarj soketi / alt bord değişimi', zorluk: 'Orta', renk: 'uyari',
      nedenler: ['Soket pinleri fiziksel hasarlı', 'Sıvı teması nedeniyle oksitlenme'],
      adimlar: ['Modelin alt bord veya şarj flex yapısını araştır (çoğu Android\'de ayrı alt bord var).', 'Modül 5\'teki "Şarj soketi değişimi" dersini uygula.', 'Oksit varsa anakartta da sıvı izi ara.'] } },
    sarj3: { soru: 'USB ampermetre ile ölçtüğünde ne görüyorsun?', secenekler: [
      ['0.00 A, hiç akım çekmiyor', 'sarj4'], ['Çok düşük akım (0.1 A civarı)', 'sarjDusuk'], ['Akım normal ama yüzde artmıyor', 'sarjBatarya'], ['Ampermetrem yok', 'sarjAmper']] },
    sarjAmper: { sonuc: { baslik: 'Ölçmeden tahmin etme', zorluk: 'Bilgi', renk: 'vurgu',
      nedenler: ['Şarj arızalarında ampermetre olmadan soket, entegre ve batarya ayrımı yapmak çok zordur'],
      adimlar: ['Ucuz bir USB ampermetre edin. Bu, şarj arızalarının en önemli aletidir.', 'O zamana kadar başka bir bataryayla deneme yapılabilir.'] } },
    sarj4: { soru: 'Cihaz kapalıyken şarja takınca ekranda şarj simgesi çıkıyor mu?', secenekler: [
      ['Hayır, hiçbir tepki yok', 'sarjIC'], ['Evet ama ampermetre 0 gösteriyor', 'sarjSoket']] },
    sarjIC: { sonuc: { baslik: 'Şarj hattı veya şarj entegresi arızası', zorluk: 'İleri', renk: 'tehlike',
      nedenler: ['Soket arkasındaki sigorta / filtre bobini açık devre', 'Şarj entegresi (charging IC) arızası', 'Uyumsuz hızlı şarj cihazı sonrası yanma'],
      adimlar: ['Önce şarj flex\'ini değiştirerek soketi ele.', 'Multimetreyle VBUS hattında süreklilik ölç (Modül 6).', 'Entegre değişimi mikro lehim gerektirir. Deneyimin yoksa bu işi bir uzmana yönlendir.'] } },
    sarjDusuk: { sonuc: { baslik: 'Kirli soket veya bozuk kablo bağlantısı', zorluk: 'Kolay–Orta', renk: 'uyari',
      nedenler: ['Hızlı şarj pinleri temas etmiyor', 'Soket aşınmış', 'Batarya tamamen bitmiş ve yavaş uyanıyor'],
      adimlar: ['Soketi temizle, farklı kabloyla dene.', '15-20 dakika takılı bırak. Tam boşalan bataryalar önce düşük akımla canlanır.', 'Değişmezse şarj flex\'ini değiştir.'] } },
    sarjBatarya: { sonuc: { baslik: 'Batarya ömrünü doldurmuş olabilir', zorluk: 'Orta', renk: 'uyari',
      nedenler: ['Kimyasal yaşlanma (yüzlerce şarj döngüsü)', 'Batarya hücresi veya koruma devresi arızası'],
      adimlar: ['Ayarlardan batarya sağlığına bak (varsa).', 'Batarya değişimini Modül 5\'e göre yap.', 'Şişkinlik varsa cihazı şarja takma!'] } },

    // ---- Açılmıyor ----
    acil1: { soru: 'Cihaz sıvıya maruz kaldı mı ya da düştü mü?', secenekler: [
      ['Sıvı temas etti', 'acilSivi'], ['Düştü / darbe aldı', 'acil2'], ['Hayır, kendiliğinden oldu', 'acil2']] },
    acilSivi: { sonuc: { baslik: 'Sıvı teması: hemen müdahale', zorluk: 'Orta–İleri', renk: 'tehlike',
      nedenler: ['Kısa devre ve hızla ilerleyen korozyon'],
      adimlar: ['Cihazı ŞARJA TAKMA, açmaya çalışma.', 'Mümkün olan en kısa sürede aç, bataryayı ayır.', 'Anakartı %99 izopropil alkol ile fırçala, ultrasonik temizlik varsa kullan.', '"Pirince koymak" çözüm değildir, korozyonu durdurmaz.'] } },
    acil2: { soru: 'Şarja takınca titreşim, ses veya ısınma oluyor mu?', secenekler: [
      ['Titreşim / ses var ama ekran karanlık', 'ekr1'], ['Hiçbir tepki yok', 'acil3'], ['Logoda takılıp tekrar başlıyor', 'acilBoot']] },
    acil3: { soru: 'USB ampermetre şarja takınca kaç amper gösteriyor?', secenekler: [
      ['0.00 A', 'sarj4'], ['Sabit yüksek akım (1 A+) ve cihaz ısınıyor', 'acilKisa'], ['Düşük, oynak akım (0.05–0.3 A)', 'acilYazilim']] },
    acilKisa: { sonuc: { baslik: 'Anakartta kısa devre', zorluk: 'İleri', renk: 'tehlike',
      nedenler: ['Bir kondansatör veya entegre kısa devre yapmış', 'Genellikle batarya ana hattında (VCC_MAIN)'],
      adimlar: ['Bataryayı hemen ayır.', 'Modül 6\'daki "Kısa devre bulma" yöntemlerini uygula (termal kamera, izopropil, rosin).', 'Isınan parçayı bul. Çoğu zaman tek bir kondansatördür.'] } },
    acilYazilim: { sonuc: { baslik: 'Yazılım veya önyükleme sorunu ihtimali', zorluk: 'Orta', renk: 'uyari',
      nedenler: ['Bozuk güncelleme', 'Batarya aşırı boşalmış'],
      adimlar: ['30 dakika şarjda bekle, sonra zorla yeniden başlatmayı dene (genelde güç + ses kısma uzun basış).', 'Kurtarma moduna (recovery) girmeyi dene. Modül 7\'deki dersleri incele.', 'Yazılım yükleme veriyi silebilir. Önce müşteriye sor.'] } },
    acilBoot: { sonuc: { baslik: 'Önyükleme döngüsü (bootloop)', zorluk: 'Orta–İleri', renk: 'uyari',
      nedenler: ['Yazılım bozulması', 'Arızalı bir parça (ör. bozuk flex) açılışı kesiyor', 'Bellek (NAND) arızası'],
      adimlar: ['Tüm harici flex\'leri (kamera, alt bord) tek tek ayırıp dene. Parça kaynaklı döngüler böyle bulunur.', 'Kurtarma modundan önbellek silme veya yazılım yükleme (Modül 7).', 'Hiçbiri olmazsa kart seviyesi arıza düşün.'] } },

    // ---- Ekran ----
    ekr1: { soru: 'Ekrana fenerle yakından baktığında görüntü seçiliyor mu?', secenekler: [
      ['Evet, çok soluk görüntü var', 'ekrIsik'], ['Hayır, tamamen siyah', 'ekr2'], ['Renkli çizgiler, lekeler var', 'ekrPanel']] },
    ekrIsik: { sonuc: { baslik: 'Arka ışık (backlight) arızası (LCD ekranlar)', zorluk: 'Orta–İleri', renk: 'uyari',
      nedenler: ['Ekran arka ışığı yanmış', 'Anakarttaki arka ışık devresi (bobin, diyot, filtre) arızalı'],
      adimlar: ['Önce bilinen sağlam bir ekranla dene.', 'Yeni ekranda da sorun sürerse arka ışık devresini ölç (Modül 6).', 'OLED ekranlarda arka ışık yoktur. OLED\'de bu belirti genelde panel arızasıdır.'] } },
    ekr2: { soru: 'Cihaz düştü mü, ekran camında kırık var mı?', secenekler: [
      ['Evet, kırık / darbe var', 'ekrPanel'], ['Hayır, sağlam görünüyor', 'ekr3']] },
    ekr3: { soru: 'Ekran konnektörünü söküp temizleyip yeniden taktın mı?', secenekler: [
      ['Hayır', 'ekrKonn'], ['Evet, değişmedi', 'ekrDeneme']] },
    ekrKonn: { sonuc: { baslik: 'Gevşemiş ekran konnektörü', zorluk: 'Kolay–Orta', renk: 'basari',
      nedenler: ['Darbe sonrası konnektör yerinden oynamış'],
      adimlar: ['Cihazı aç, ÖNCE bataryayı ayır.', 'Ekran konnektörünü çıkar, %99 izopropille temizle, düz ve tam oturt.', 'Bataryayı bağlayıp dene.'] } },
    ekrDeneme: { sonuc: { baslik: 'Sağlam ekranla deneme yap', zorluk: 'Orta', renk: 'uyari',
      nedenler: ['Ekran paneli arızası (en olası)', 'Anakart ekran hattı arızası (daha az olası)'],
      adimlar: ['Bilinen sağlam bir ekranı montajsız şekilde bağlayıp dene.', 'Çalışırsa ekran değişimi yap (Modül 5).', 'Çalışmazsa anakarttaki ekran konnektörü ve filtrelerini incele.'] } },
    ekrPanel: { sonuc: { baslik: 'Ekran paneli hasarlı', zorluk: 'Orta', renk: 'uyari',
      nedenler: ['Darbe sonucu iç panel çatlaması', 'Flex kablo kopması'],
      adimlar: ['Ekran değişimi yap (Modül 5).', 'OLED / LCD seçimini müşteriyle konuş: Uyumlu (aftermarket) LCD daha ucuzdur ama renk ve pil tüketimi farklıdır.'] } },

    // ---- Dokunmatik ----
    dok1: { soru: 'Sorun yeni bir ekran takıldıktan sonra mı başladı?', secenekler: [
      ['Evet', 'dokYeni'], ['Hayır', 'dok2']] },
    dokYeni: { sonuc: { baslik: 'Uyumsuz / kalitesiz ekran veya kurulum hatası', zorluk: 'Orta', renk: 'uyari',
      nedenler: ['Düşük kaliteli yedek ekran', 'Konnektör tam oturmamış', 'Ekran kasaya sıkışıyor (basınç)'],
      adimlar: ['Konnektörü kontrol et.', 'Ekranı kasaya yapıştırmadan dene. Sorun düzelirse basınç veya kasa eğrilmesi var demektir.', 'Farklı bir tedarikçiden ekran dene.'] } },
    dok2: { soru: 'Ekran kendi kendine basıyor mu (hayalet dokunma)?', secenekler: [
      ['Evet', 'dokHayalet'], ['Hayır, bazı bölgeler hiç tepki vermiyor', 'ekrPanel']] },
    dokHayalet: { sonuc: { baslik: 'Hayalet dokunma', zorluk: 'Kolay–Orta', renk: 'uyari',
      nedenler: ['Kalitesiz şarj adaptörü (gürültü)', 'Ekran koruyucu altında nem veya kir', 'Panel arızası'],
      adimlar: ['Şarjdan çıkarıp dene. Düzelirse sorun adaptördedir.', 'Ekran koruyucuyu çıkar.', 'Sürüyorsa ekran değişimi.'] } },

    // ---- Ses ----
    ses1: { soru: 'Hangi ses sorunu?', secenekler: [
      ['Hoparlörden ses gelmiyor', 'sesHop'], ['Görüşmede karşı taraf duymuyor', 'sesMik'], ['Kulaklık modunda takılı kalıyor', 'sesKul']] },
    sesHop: { sonuc: { baslik: 'Hoparlör ızgarası veya hoparlör modülü', zorluk: 'Kolay–Orta', renk: 'basari',
      nedenler: ['Izgarada toz / kir', 'Hoparlör membranı yırtılmış', 'Sıvı teması'],
      adimlar: ['Izgarayı yumuşak fırçayla temizle.', 'Başka bir uygulamada / ayarda deneyerek yazılımı ele.', 'Hoparlör modülünü değiştir (genelde vidalı, kolay).'] } },
    sesMik: { sonuc: { baslik: 'Mikrofon deliği veya alt bord', zorluk: 'Kolay–Orta', renk: 'basari',
      nedenler: ['Mikrofon deliği tıkalı', 'Mikrofon çoğu modelde şarj flex\'i veya alt bord üzerindedir'],
      adimlar: ['Ses kaydı uygulamasıyla alt ve üst mikrofonu ayrı ayrı test et.', 'Deliği nazikçe temizle.', 'Alt mikrofon arızasında şarj flex\'i / alt bord değişimi genelde çözer.'] } },
    sesKul: { sonuc: { baslik: 'Kulaklık algılama hatası', zorluk: 'Kolay', renk: 'basari',
      nedenler: ['Kulaklık girişinde kir veya nem', 'Bluetooth cihazına bağlı kalmış'],
      adimlar: ['Bluetooth\'u kapat.', 'Kulaklık girişini temizle.', 'Kulaklık takıp çıkararak algılamayı sıfırla.'] } },

    // ---- Isınma ----
    isi1: { soru: 'Isınma ne zaman oluyor?', secenekler: [
      ['Kullanmasam bile, kapalıyken de', 'acilKisa'], ['Şarjdayken çok ısınıyor', 'sarjBatarya'], ['Yoğun kullanımda (oyun, kamera)', 'isiNormal']] },
    isiNormal: { sonuc: { baslik: 'Büyük ihtimalle normal veya yazılım kaynaklı', zorluk: 'Kolay', renk: 'basari',
      nedenler: ['Yoğun kullanımda işlemcinin ısınması normaldir', 'Arka planda takılı kalan uygulamalar'],
      adimlar: ['Batarya kullanım istatistiklerinden şüpheli uygulamayı bul.', 'Kılıfı çıkarıp dene.', 'Batarya sağlığı düşükse batarya değişimi ısınmayı azaltabilir.'] } },

    // ---- Kamera ----
    kam1: { soru: 'Kamera uygulaması açılıyor mu?', secenekler: [
      ['Açılmıyor / siyah ekran', 'kamKonn'], ['Açılıyor ama görüntü bulanık', 'kamBulanik']] },
    kamKonn: { sonuc: { baslik: 'Kamera modülü veya konnektörü', zorluk: 'Orta', renk: 'uyari',
      nedenler: ['Kamera modülü arızası', 'Konnektör gevşemesi', 'Darbe sonrası optik sabitleyici (OIS) arızası'],
      adimlar: ['Ön ve arka kamerayı ayrı ayrı dene. Hangisinde sorun olduğunu bul.', 'Konnektörü temizleyip yeniden tak.', 'Kamera modülünü değiştir.'] } },
    kamBulanik: { sonuc: { baslik: 'Kamera camı veya odak sorunu', zorluk: 'Kolay–Orta', renk: 'basari',
      nedenler: ['Kamera camı çizik / kırık', 'İç tarafta toz', 'Odak motoru arızası'],
      adimlar: ['Lensi mikrofiber bezle temizle.', 'Kamera camı kırıksa yalnızca cam değişimi yeterli olabilir.', 'Yakın ve uzak odağı ayrı ayrı test et.'] } }
  };

  function teshisKur(kok) {
    var yol = ['bas'];
    function ciz() {
      var id = yol[yol.length - 1], d = T[id];
      var h = '<div class="sihirbaz-ust"><span class="sihirbaz-adim">Adım ' + yol.length + '</span>' +
        (yol.length > 1 ? '<button type="button" class="metin-dugme" data-geri>← Geri</button>' : '') + '</div>';
      if (d.sonuc) {
        var s = d.sonuc;
        h += '<div class="sonuc-kart ' + s.renk + '"><span class="rozet">' + kacis(s.zorluk) + '</span><h3>' + kacis(s.baslik) + '</h3>' +
          '<h4>Olası nedenler</h4><ul>' + s.nedenler.map(function (x) { return '<li>' + kacis(x) + '</li>'; }).join('') + '</ul>' +
          '<h4>Ne yapmalı?</h4><ol>' + s.adimlar.map(function (x) { return '<li>' + kacis(x) + '</li>'; }).join('') + '</ol></div>' +
          '<button type="button" class="dugme ikincil" data-bastan>Yeni teşhis başlat</button>';
      } else {
        h += '<h3 class="sihirbaz-soru">' + kacis(d.soru) + '</h3><div class="secenekler">' +
          d.secenekler.map(function (s) { return '<button type="button" class="secenek secenek-dugme" data-git="' + s[1] + '">' + kacis(s[0]) + '<span aria-hidden="true">→</span></button>'; }).join('') + '</div>';
      }
      kok.innerHTML = h;
    }
    kok.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.hasAttribute('data-git')) yol.push(b.getAttribute('data-git'));
      else if (b.hasAttribute('data-geri')) yol.pop();
      else if (b.hasAttribute('data-bastan')) yol = ['bas'];
      ciz();
      kok.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    kok.classList.add('kart', 'sihirbaz');
    ciz();
  }

  // =====================================================================
  // 2) ETKİLEŞİMLİ ANAKART HARİTASI
  // =====================================================================
  var PARCALAR = [
    { id: 'soc', x: 150, y: 70, w: 90, h: 90, renk: '#5b6b82', ad: 'İşlemci (SoC)', metin: 'Telefonun beyni. CPU, grafik işlemci (GPU), yapay zekâ birimi ve görüntü işlemci tek çipte toplanır. Çoğu zaman RAM bunun hemen üstüne istiflenir (PoP: package-on-package). Altındaki yüzlerce lehim topu (BGA) düşmelerde çatlayabilir.' },
    { id: 'nand', x: 255, y: 70, w: 70, h: 55, renk: '#6f5b82', ad: 'Depolama (NAND / UFS)', metin: 'Fotoğrafların, uygulamaların ve işletim sisteminin saklandığı kalıcı bellek. Arızalanırsa cihaz açılışta takılır. Modern cihazlarda veriler şifreli olduğundan çip başka karta taşınsa bile veri kurtarılamayabilir.' },
    { id: 'pmic', x: 255, y: 135, w: 70, h: 45, renk: '#82705b', ad: 'Güç yönetimi (PMIC)', metin: 'Bataryadan gelen gerilimi işlemciye, belleğe, ekrana ve diğer parçalara uygun voltajlara dönüştürür. Açılmama arızalarının sık şüphelilerindendir.' },
    { id: 'sarjic', x: 60, y: 300, w: 60, h: 40, renk: '#82615b', ad: 'Şarj entegresi', metin: 'Şarj soketinden gelen gücü kontrol ederek bataryayı güvenle doldurur. Kalitesiz şarj cihazları ve sıvı teması bu entegreyi bozabilir.' },
    { id: 'rf', x: 150, y: 190, w: 110, h: 60, renk: '#5b8275', ad: 'Modem ve RF bölümü', metin: 'Mobil şebeke, Wi-Fi, Bluetooth ve GPS sinyallerini işler. Genelde metal kalkanlar (shield) altında durur. "Şebeke yok" arızalarında bu bölüm ve anten bağlantıları incelenir.' },
    { id: 'batk', x: 60, y: 150, w: 60, h: 28, renk: '#c28a2a', ad: 'Batarya konnektörü', metin: 'Bataryanın anakarta bağlandığı yer. Kasayı açınca İLK önce bu konnektör ayrılır, montajda ise EN SON takılır.' },
    { id: 'ekrk', x: 60, y: 70, w: 60, h: 28, renk: '#2a7fc2', ad: 'Ekran ve dokunmatik konnektörleri', metin: 'Ekranın görüntü ve dokunmatik flex\'leri buraya bağlanır. Basarken pinlerin tam hizalı olması gerekir. Yamuk basılan konnektör pinleri ezebilir.' },
    { id: 'kamk', x: 270, y: 200, w: 55, h: 50, renk: '#2ac2a0', ad: 'Kamera konnektörleri', metin: 'Ön ve arka kamera modülleri bu konnektörlere bağlanır. Kamera arızalarında ilk bakılacak yerlerden biridir.' },
    { id: 'kristal', x: 150, y: 265, w: 40, h: 20, renk: '#8a8f98', ad: 'Kristal osilatör', metin: 'Sistemin saat sinyalini üretir. Arızalanırsa cihaz hiç açılmayabilir veya şebekeyi bulamayabilir.' },
    { id: 'alt', x: 140, y: 300, w: 180, h: 40, renk: '#82825b', ad: 'Alt bord bağlantısı', metin: 'Birçok cihazda şarj soketi, alt mikrofon ve titreşim motoru ayrı bir alt bordda bulunur ve anakarta ana flex ile bağlanır. Şarj sorunlarında bu parçanın değişimi genelde ucuz ve kolaydır.' }
  ];

  var KISA = { soc: 'SoC + RAM', nand: 'NAND', pmic: 'PMIC', sarjic: 'Şarj IC', rf: 'Modem / RF', batk: 'Batarya', ekrk: 'Ekran', kamk: 'Kamera', kristal: 'Kristal', alt: 'Alt bord bağlantısı' };

  function anakartKur(kok) {
    var svg = '<svg viewBox="40 50 305 310" class="anakart-svg" role="img" aria-label="Basitleştirilmiş telefon anakartı">' +
      '<rect x="45" y="55" width="295" height="300" rx="16" fill="#1e5a3c" stroke="#123824" stroke-width="3"/>' +
      '<g stroke="#2f7a52" stroke-width="1.5" fill="none" opacity=".7">' +
      '<path d="M120 84 H150 M120 164 H150 M240 115 H255 M240 150 H255 M200 160 V190 M90 178 V300 M230 250 V300 M290 180 V200"/>' +
      '<path d="M60 230 H140 M260 280 H330 M70 260 H140"/></g>' +
      PARCALAR.map(function (p) {
        return '<g class="parca" tabindex="0" role="button" data-parca="' + p.id + '" aria-label="' + kacis(p.ad) + '">' +
          '<rect x="' + p.x + '" y="' + p.y + '" width="' + p.w + '" height="' + p.h + '" rx="5" fill="' + p.renk + '"/>' +
          '<rect x="' + (p.x + 3) + '" y="' + (p.y + 3) + '" width="' + (p.w - 6) + '" height="' + (p.h - 6) + '" rx="3" fill="none" stroke="rgba(255,255,255,.25)"/>' +
          '<text x="' + (p.x + p.w / 2) + '" y="' + (p.y + p.h / 2 + 4) + '" text-anchor="middle" font-size="' + (p.w < 50 ? 8 : 10) + '" font-weight="700" fill="#fff" font-family="system-ui,sans-serif" pointer-events="none">' + KISA[p.id] + '</text></g>';
      }).join('') + '</svg>';
    kok.classList.add('kart', 'anakart');
    kok.innerHTML = '<div class="anakart-izgara"><div>' + svg + '<p class="ipucu-metin">Bir parçaya dokun veya tıkla.</p></div>' +
      '<div class="anakart-bilgi" aria-live="polite"><h3>Anakart haritası</h3><p>Bu, gerçek bir modelin değil, çoğu telefonda bulunan bölümlerin basitleştirilmiş bir haritasıdır. Parçaların yeri markaya göre değişir, görevleri aynıdır.</p></div></div>';
    var bilgi = kok.querySelector('.anakart-bilgi');
    function sec(id) {
      var p = PARCALAR.filter(function (x) { return x.id === id; })[0]; if (!p) return;
      kok.querySelectorAll('.parca').forEach(function (g) { g.classList.toggle('secili', g.getAttribute('data-parca') === id); });
      bilgi.innerHTML = '<span class="renk-nokta" style="background:' + p.renk + '"></span><h3>' + kacis(p.ad) + '</h3><p>' + kacis(p.metin) + '</p>';
    }
    kok.addEventListener('click', function (e) { var g = e.target.closest('.parca'); if (g) sec(g.getAttribute('data-parca')); });
    kok.addEventListener('keydown', function (e) {
      if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('parca')) { e.preventDefault(); sec(e.target.getAttribute('data-parca')); }
    });
  }

  // =====================================================================
  // 3) SANAL MULTİMETRE
  // =====================================================================
  var MODLAR = [
    { id: 'v', ad: 'V ⎓', uzun: 'DC Gerilim' },
    { id: 'o', ad: 'Ω', uzun: 'Direnç' },
    { id: 's', ad: '🔊', uzun: 'Süreklilik' },
    { id: 'd', ad: '▷|', uzun: 'Diyot modu' }
  ];
  var NOKTALAR = [
    { id: 'bat', ad: 'Sağlam batarya (+ / −)', o: { v: ['3.85', 'V', 'Normal. Li-ion batarya dolulukla 3.0–4.4 V arasında ölçülür.'], o: ['---', '', 'Enerjili bir kaynakta direnç ölçülmez! Ölçü aleti veya devre zarar görebilir.'], s: ['---', '', 'Enerjili kaynakta süreklilik ölçülmez.'], d: ['---', '', 'Enerjili kaynakta diyot modu kullanılmaz.'] } },
    { id: 'bitik', ad: 'Tamamen bitmiş batarya', o: { v: ['2.10', 'V', 'Çok düşük. Batarya derin deşarj olmuş. Koruma devresi kapanmış olabilir. Değişim önerilir.'], o: ['---', '', 'Batarya üzerinde direnç ölçülmez.'], s: ['---', '', 'Uygun değil.'], d: ['---', '', 'Uygun değil.'] } },
    { id: 'vbus', ad: 'Şarj soketi VBUS (şarj takılı)', o: { v: ['5.02', 'V', 'Adaptörden 5 V geliyor, yani soket ve kablo sağlam. Sorun daha içeride.'], o: ['---', '', 'Enerjili hatta direnç ölçülmez.'], s: ['---', '', 'Enerjili hatta süreklilik ölçülmez.'], d: ['---', '', 'Enerjili hatta diyot modu kullanılmaz.'] } },
    { id: 'sigorta', ad: 'Sağlam sigorta (enerjisiz)', o: { v: ['0.00', 'V', 'Enerji yok, gerilim okunmaz.'], o: ['0.2', 'Ω', 'Çok düşük direnç: sigorta sağlam.'], s: ['BİP', '', 'Sigorta iletiyor, sağlam.'], d: ['0.002', 'V', 'Neredeyse sıfır: iletken parça.'] } },
    { id: 'acik', ad: 'Atmış sigorta (enerjisiz)', o: { v: ['0.00', 'V', 'Enerji yok.'], o: ['OL', '', 'OL = açık devre (Over Limit). Sigorta atmış, değiştirilmeli.'], s: ['—', '', 'Bip yok: iletim yok, sigorta atmış.'], d: ['OL', '', 'Açık devre.'] } },
    { id: 'kisa', ad: 'Kısa devreli hat → toprak', o: { v: ['0.00', 'V', 'Enerjisiz ölçüm.'], o: ['0.8', 'Ω', 'Hat ile toprak arasında neredeyse sıfır direnç: KISA DEVRE. Normalde bu hatta yüzlerce ohm veya daha fazla görülür.'], s: ['BİP', '', 'Toprakla süreklilik: kısa devre var! Isınan parçayı bulmak gerekir.'], d: ['0.003', 'V', 'Sıfıra yakın diyot değeri kısa devreyi doğrular.'] } },
    { id: 'normal', ad: 'Sağlam hat → toprak (diyot ölçümü)', o: { v: ['0.00', 'V', 'Enerjisiz ölçüm.'], o: ['12.4', 'kΩ', 'Normal bir değer. Hat toprağa kısa değil.'], s: ['—', '', 'Bip yok: kısa devre yok.'], d: ['0.452', 'V', 'Tipik sağlam değer. Sağlam bir kartın diyot değerleri kaydedilip arızalı kartla karşılaştırılır.'] } }
  ];

  function multimetreKur(kok) {
    var mod = 'v', nokta = null;
    kok.classList.add('kart', 'multimetre');
    kok.innerHTML =
      '<div class="mm-izgara"><div class="mm-cihaz">' +
        '<div class="mm-ekran"><span class="mm-deger">----</span><span class="mm-birim"></span><span class="mm-mod"></span></div>' +
        '<div class="mm-modlar" role="radiogroup" aria-label="Ölçüm modu">' +
          MODLAR.map(function (m) { return '<button type="button" role="radio" data-mod="' + m.id + '" title="' + m.uzun + '">' + m.ad + '</button>'; }).join('') +
        '</div><div class="mm-uclar"><span class="uc kirmizi"></span><span class="uc siyah"></span></div></div>' +
      '<div><h4 style="margin:0 0 8px">Probları nereye değdireceksin?</h4><div class="mm-noktalar">' +
        NOKTALAR.map(function (n) { return '<button type="button" class="secenek secenek-dugme" data-nokta="' + n.id + '">' + kacis(n.ad) + '</button>'; }).join('') +
      '</div><div class="mm-aciklama" aria-live="polite">Önce bir mod, sonra bir ölçüm noktası seç.</div></div></div>';
    var deger = kok.querySelector('.mm-deger'), birim = kok.querySelector('.mm-birim'), modYazi = kok.querySelector('.mm-mod'), ac = kok.querySelector('.mm-aciklama');
    function guncelle() {
      kok.querySelectorAll('[data-mod]').forEach(function (b) { b.setAttribute('aria-checked', b.getAttribute('data-mod') === mod); });
      kok.querySelectorAll('[data-nokta]').forEach(function (b) { b.classList.toggle('secili', b.getAttribute('data-nokta') === nokta); });
      modYazi.textContent = MODLAR.filter(function (m) { return m.id === mod; })[0].uzun;
      if (!nokta) { deger.textContent = mod === 's' ? '—' : '0.00'; birim.textContent = ''; return; }
      var r = NOKTALAR.filter(function (n) { return n.id === nokta; })[0].o[mod];
      deger.textContent = r[0]; birim.textContent = r[1]; ac.textContent = r[2];
      kok.querySelector('.mm-ekran').classList.toggle('bip', r[0] === 'BİP');
    }
    kok.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.dataset.mod) mod = b.dataset.mod;
      if (b.dataset.nokta) nokta = b.dataset.nokta;
      guncelle();
    });
    guncelle();
  }

  // =====================================================================
  // 4) CANLANDIRMA OYNATICI (adım adım animasyonlu anlatım)
  // =====================================================================
  // TA.canlandirmalar[ad] = { baslik, kareler: [{ svg, metin }] }
  function canlandirmaKur(kok) {
    var c = TA.canlandirmalar && TA.canlandirmalar[kok.getAttribute('data-ad')];
    if (!c) return;
    var i = 0, zamanlayici = null;
    kok.classList.add('kart', 'canlandirma');
    kok.innerHTML = '<div class="cn-ust"><span class="rozet">▶ Canlandırma</span><strong>' + kacis(c.baslik) + '</strong></div>' +
      '<div class="cn-sahne" aria-live="polite"></div><p class="cn-metin"></p>' +
      '<div class="cn-kontrol"><button type="button" class="dugme ikincil" data-cn="geri" aria-label="Önceki adım">◀</button>' +
      '<button type="button" class="dugme" data-cn="oynat">▶ Oynat</button>' +
      '<button type="button" class="dugme ikincil" data-cn="ileri" aria-label="Sonraki adım">▶</button>' +
      '<div class="cn-noktalar">' + c.kareler.map(function (_, k) { return '<span data-k="' + k + '"></span>'; }).join('') + '</div></div>';
    var sahne = kok.querySelector('.cn-sahne'), metin = kok.querySelector('.cn-metin'), oynat = kok.querySelector('[data-cn="oynat"]');
    function goster() {
      var k = c.kareler[i];
      sahne.classList.toggle('cn-ikili', !!k.foto);
      sahne.innerHTML = (k.foto ? TA.fotoHTML(k.foto, k.fotoAlt || '', '', 'cn-foto') : '') + '<div class="cn-cizim">' + k.svg + '</div>';
      metin.innerHTML = '<b>Adım ' + (i + 1) + '/' + c.kareler.length + ':</b> ' + k.metin;
      sahne.querySelectorAll('.cn-cizim, .cn-foto').forEach(function (x) { x.classList.add('cn-gir'); });
      kok.querySelectorAll('.cn-noktalar span').forEach(function (s, k2) { s.classList.toggle('aktif', k2 === i); });
    }
    function dur() { clearInterval(zamanlayici); zamanlayici = null; oynat.textContent = '▶ Oynat'; }
    kok.addEventListener('click', function (e) {
      var b = e.target.closest('[data-cn]'); var n = e.target.closest('[data-k]');
      if (n) { dur(); i = +n.getAttribute('data-k'); goster(); return; }
      if (!b) return;
      var a = b.getAttribute('data-cn');
      if (a === 'geri') { dur(); i = (i - 1 + c.kareler.length) % c.kareler.length; goster(); }
      if (a === 'ileri') { dur(); i = (i + 1) % c.kareler.length; goster(); }
      if (a === 'oynat') {
        if (zamanlayici) { dur(); return; }
        if (i === c.kareler.length - 1) { i = 0; goster(); }
        oynat.textContent = '❚❚ Durdur';
        zamanlayici = setInterval(function () {
          if (!document.body.contains(kok)) return dur();
          if (i >= c.kareler.length - 1) return dur();
          i++; goster();
        }, 3200);
      }
    });
    goster();
  }

  // =====================================================================
  // 5) VİDEO (isteğe bağlı): <div data-bilesen="video" data-youtube="ID" data-baslik="..."></div>
  // =====================================================================
  function videoKur(kok) {
    var id = kok.getAttribute('data-youtube');
    var baslik = kok.getAttribute('data-baslik') || 'Video';
    kok.classList.add('video-kap');
    if (!id) return;
    // Önce sadece kapak gösterilir; tıklanınca yüklenir (hızlı ve çerezsiz).
    kok.innerHTML = '<button type="button" class="video-kapak" aria-label="' + kacis(baslik) + ' videosunu oynat">' +
      '<img src="https://i.ytimg.com/vi/' + encodeURIComponent(id) + '/hqdefault.jpg" alt="" loading="lazy"><span class="video-oynat">▶</span><span class="video-baslik">' + kacis(baslik) + '</span></button>';
    kok.querySelector('button').addEventListener('click', function () {
      kok.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0" title="' + kacis(baslik) +
        '" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    });
  }

  // =====================================================================
  // 6) FOTOĞRAF (yerel, kaynak bilgisiyle): <div data-bilesen="foto" data-ad="spudger" data-alt="..." data-aciklama="..."></div>
  // =====================================================================
  TA.fotoHTML = function (ad, alt, aciklama, sinif) {
    var k = (TA.fotoKaynak || {})[ad] || {};
    var kredi = k.yazar ? 'Foto: ' + kacis(k.yazar) + ' · <a href="' + kacis(k.kaynak) + '" target="_blank" rel="noopener">' + kacis(k.lisans) + '</a>' : '';
    return '<figure class="foto ' + (sinif || '') + '"><img src="foto/' + ad + '.jpg" alt="' + kacis(alt) + '" loading="lazy"' +
      (k.en ? ' width="' + k.en + '" height="' + k.boy + '"' : '') + '>' +
      '<figcaption>' + (aciklama ? '<span>' + kacis(aciklama) + '</span>' : '') + '<small class="kredi">' + kredi + '</small></figcaption></figure>';
  };
  function fotoKur(kok) {
    kok.outerHTML = TA.fotoHTML(kok.getAttribute('data-ad'), kok.getAttribute('data-alt') || '', kok.getAttribute('data-aciklama') || '');
  }

  var KURUCULAR = { foto: fotoKur, teshis: teshisKur, anakart: anakartKur, multimetre: multimetreKur, canlandirma: canlandirmaKur, video: videoKur };
  TA.bilesenKur = function (kok) {
    kok.querySelectorAll('[data-bilesen]').forEach(function (d) {
      var f = KURUCULAR[d.getAttribute('data-bilesen')];
      if (f && !d.__kuruldu) { d.__kuruldu = true; f(d); }
    });
  };
})();
