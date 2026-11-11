// Samsung ve Apple bölümleri + her derse markaya özel notlar
// Not: Model ayrıntıları zamanla değişir; ekranda "modeline göre doğrula" uyarısı gösterilir.
TA.markalar = {
  samsung: {
    ad: 'Samsung',
    renk: '#1428a0',
    slogan: 'Galaxy S, A, Note ve Z serileri',
    bolumler: [
      { baslik: 'Genel yapı', html: `
<ul>
  <li><strong>Açılış yönü:</strong> Galaxy S, Note ve A serisinin büyük çoğunluğu <strong>arkadan</strong> açılır. Arka cam veya plastik kapak ısıtılıp ayrılır, ekran en son sökülür.</li>
  <li><strong>Vidalar:</strong> Neredeyse tamamı Phillips (PH00 / PH000). Özel vida başı nadirdir.</li>
  <li><strong>Alt bord:</strong> USB-C şarj soketi, alt mikrofon ve çoğu modelde SIM okuyucu ayrı bir alt bord üzerindedir. Anakarta ana flex ile bağlanır.</li>
  <li><strong>Batarya:</strong> Güçlü yapıştırıcıyla tutturulur. Çekme bandı her modelde bulunmaz, bu yüzden alkol ve plastik kart gerekir. Bazı yeni modellerde daha kolay sökülen yapıştırıcılar kullanılmaya başlandı.</li>
</ul>` },
      { baslik: 'Seriler ve dikkat edilecekler', html: `
<div class="tablo-kap"><table>
  <thead><tr><th>Seri</th><th>Özellik</th><th>Tamirde dikkat</th></tr></thead>
  <tbody>
    <tr><td>Galaxy S / Note</td><td>Amiral gemisi, cam arka kapak, OLED ekran</td><td>Eski modellerde kavisli (edge) ekran çok kırılgandır. Ekran içi ultrasonik parmak izi bulunur.</td></tr>
    <tr><td>Galaxy A / M</td><td>Orta ve giriş segmenti, çoğu plastik arka kapak</td><td>Plastik kapak klipsli veya yapışkanlıdır. Bazı modellerde ekran LCD'dir.</td></tr>
    <tr><td>Galaxy Z Fold / Flip</td><td>Katlanabilir ekran</td><td>İç ekran ve menteşe çok özel uzmanlık ister. Eğitimsiz deneme.</td></tr>
    <tr><td>Galaxy Tab</td><td>Tablet</td><td>Geniş ekran ve yapıştırıcı alanı sabır ister. Batarya çok büyüktür.</td></tr>
  </tbody>
</table></div>` },
      { baslik: 'Ekran servis paketi', html: `
<p>Samsung'un orijinal ekranları çoğunlukla <strong>"servis paketi"</strong> olarak gelir: OLED panel, <strong>orta kasaya (çerçeveye) yapıştırılmış</strong> hâldedir. Bazı modellerde batarya da pakete dahildir. Bu durumda işlem, eski kasadaki anakart, kamera, alt bord ve diğer parçaların yeni kasaya <strong>aktarılmasıdır</strong>.</p>
<div class="kutu ipucu"><span class="kutu-ikon">✓</span><div><p>Aktarım işi daha uzun sürer ama sonuç fabrika kalitesine yakındır: yeni kasa, yeni yapıştırıcı ve eğrilmemiş bir çerçeve.</p></div></div>` },
      { baslik: 'Teşhis araçları', html: `
<ul>
  <li><strong>Samsung Members</strong> uygulaması ▸ Destek ▸ <strong>Telefon tanılama</strong>: Ekran, dokunmatik, sensörler, şarj, kablosuz şarj, kamera ve pil durumu testleri.</li>
  <li><strong>*#0*#</strong> test menüsü: Birçok modelde arama ekranına yazınca açılır. Renk, dokunmatik, titreşim, hoparlör ve sensör testleri bulunur. Bazı operatör yazılımlarında kapalı olabilir.</li>
  <li><strong>Bakım modu (Maintenance mode):</strong> One UI 5 ve sonrasında <em>Ayarlar ▸ Pil ve cihaz bakımı ▸ Bakım modu</em>. Müşterinin kişisel verilerini gizleyerek cihazı servise hazır hâle getirir. Müşteriye bunu açmasını önermek güven oluşturur.</li>
</ul>` },
      { baslik: 'Sık görülen arızalar', html: `
<ul>
  <li>Düşme sonrası OLED'de mürekkep lekesi, siyah ekran veya çizgiler</li>
  <li>Bazı eski OLED panellerde zamanla ortaya çıkan yeşil veya pembe dikey çizgi (panel arızası, ekran değişimi gerekir)</li>
  <li>USB-C sokette kir, aşınma ve "Nem algılandı" uyarısı (önce kurut ve temizle)</li>
  <li>Şişen batarya arka kapağı kaldırır</li>
  <li>Uyumlu ekranlarda ekran içi parmak izinin çalışmaması</li>
</ul>` },
      { baslik: 'Yazılım ve güvenlik', html: `
<ul>
  <li><strong>Resmî araç:</strong> Bilgisayar için Samsung <strong>Smart Switch</strong>. Yedekleme ve "acil durum yazılım kurtarma" yapar.</li>
  <li><strong>Knox:</strong> Resmî olmayan yazılım veya root işlemi Knox güvenlik sigortasını kalıcı olarak "attırır". Samsung Pay ve Güvenli Klasör gibi özellikler bir daha çalışmaz. Müşteri cihazında asla deneme.</li>
  <li><strong>Hesap kilitleri:</strong> Google hesabı (FRP) ve Samsung hesabı yeniden etkinleştirme kilidi. Ayrıntılar <a href="#/yazilim/android">Android yazılım alanında</a>.</li>
</ul>` }
    ]
  },
  apple: {
    ad: 'Apple',
    renk: '#1d1d1f',
    slogan: 'iPhone ve iPad',
    bolumler: [
      { baslik: 'Genel yapı', html: `
<ul>
  <li><strong>Açılış yönü:</strong> iPhone'ların büyük kısmı <strong>ekrandan</strong> açılır. Ekran, sağ kenar menteşe gibi kalacak şekilde kitap gibi açılır. iPhone 14 ve sonrasındaki birçok modelde arka cam da ayrı sökülebilecek şekilde tasarlandı. Ekrana dokunmadan arka cam değiştirilebilir.</li>
  <li><strong>Vidalar:</strong> Dış kasada (şarj soketinin iki yanında) <strong>Pentalobe P2</strong>, içeride <strong>Tri-point Y000</strong>, <strong>Phillips #000</strong> ve <strong>ara vidalar (standoff)</strong>. Uzunlukları farklıdır, haritayla çalış.</li>
  <li><strong>Batarya:</strong> Uzun süredir <strong>çekme bantlı</strong> yapışkan kullanılıyor. iPhone 16 ve 16 Plus'ta düşük gerilimle çözülen yeni bir yapıştırıcı var. Bu modellerde Apple'ın onarım kılavuzuna uy.</li>
  <li><strong>Anakart:</strong> iPhone X'ten itibaren çoğu modelde iki katlı <strong>sandviç anakart</strong> kullanılıyor.</li>
</ul>` },
      { baslik: 'Parça eşleme (çok önemli)', html: `
<p>Apple; ekran, batarya, kamera, Face ID ve Touch ID parçalarını cihaza seri numarasıyla eşler.</p>
<div class="tablo-kap"><table>
  <thead><tr><th>Parça</th><th>Eşleşmezse ne olur?</th></tr></thead>
  <tbody>
    <tr><td>Face ID / Touch ID</td><td>Çalışmaz. Bu parçalar anakarta kriptografik olarak bağlıdır, başka cihazdan takılamaz.</td></tr>
    <tr><td>Ekran</td><td>Uyarı mesajı çıkar, True Tone ve otomatik parlaklık gibi özellikler kapanabilir.</td></tr>
    <tr><td>Batarya</td><td>"Bilinmeyen parça" uyarısı çıkar, pil sağlığı yüzdesi gösterilmeyebilir.</td></tr>
    <tr><td>Kamera</td><td>Uyarı çıkar, bazı modellerde kamera işlevleri kısıtlanabilir.</td></tr>
  </tbody>
</table></div>
<p><em>Ayarlar ▸ Genel ▸ Hakkında</em> bölümündeki <strong>"Parçalar ve servis geçmişi"</strong>, cihazda değiştirilmiş parçaları gösterir. Yeni iOS sürümlerinde orijinal Apple parçaları için cihaz üzerinde <strong>Onarım Asistanı</strong> ile eşleştirme yapılabilir.</p>
<div class="kutu uyari"><span class="kutu-ikon">!</span><div><p>Ekran değişiminde ön sensör flex'ini (kulaklık hoparlörü, yakınlık sensörü) eski ekrandan yenisine çok dikkatli aktar. Face ID'li modellerde bu bölgedeki bir hasar Face ID'yi kalıcı olarak kaybettirebilir.</p></div></div>` },
      { baslik: 'Modele göre açılış ve zorluklar', html: `
<div class="tablo-kap"><table>
  <thead><tr><th>Dönem</th><th>Özellik</th><th>Dikkat</th></tr></thead>
  <tbody>
    <tr><td>iPhone 6 – 8 / SE</td><td>Ekrandan açılır, Touch ID'li ana tuş</td><td>Ana tuş flex'i ekranla birlikte gelir ve aktarılmalıdır. Kopması Touch ID'yi bitirir.</td></tr>
    <tr><td>iPhone X – 13</td><td>Ekrandan açılır, OLED (11 ve XR LCD), Face ID</td><td>Sandviç anakart, su conta yapıştırıcısı, ön sensör aktarımı</td></tr>
    <tr><td>iPhone 14 ve sonrası</td><td>Birçok modelde hem ekrandan hem arkadan açılabilen yapı</td><td>Arka cam ayrı değişebilir. Kırık arka cam için artık lazer makinesi şart değildir.</td></tr>
    <tr><td>iPad</td><td>Ekran büyük, yapıştırıcı ince bir şerit hâlindedir</td><td>Cam çok kolay çatlar. Bol ısı ve çok sayıda pick gerekir.</td></tr>
  </tbody>
</table></div>
<p class="soluk">Model ayrıntıları değişebilir. Sökmeden önce her zaman o modelin güncel rehberine bak.</p>` },
      { baslik: 'Teşhis araçları', html: `
<ul>
  <li><strong>Pil sağlığı:</strong> <em>Ayarlar ▸ Pil ▸ Pil Sağlığı</em>. %80'in altı servis önerir.</li>
  <li><strong>Analiz verileri:</strong> <em>Ayarlar ▸ Gizlilik ve Güvenlik ▸ Analizler ve Geliştirmeler ▸ Analiz Verileri</em>. Panik (çökme) kayıtları, tekrar eden yeniden başlatma arızalarında hangi sensörün ya da parçanın sorun çıkardığına dair ipucu verir.</li>
  <li><strong>Apple Diagnostics:</strong> Apple Destek tarafından uzaktan başlatılan resmî donanım testi.</li>
</ul>` },
      { baslik: 'Bilinen kart arızaları', html: `
<ul>
  <li><strong>iPhone 6 / 6s:</strong> Şarj ve USB yönetim entegresi (halk arasında "Tristar") arızası: şarj olmama, hızlı pil bitmesi</li>
  <li><strong>iPhone 6 Plus:</strong> "Touch disease": Kasa esnemesi nedeniyle dokunmatik entegrelerinde çatlak lehim</li>
  <li><strong>iPhone 7 / 7 Plus:</strong> Ses entegresi arızası (gri hoparlör simgesi, donma) ve bazı modellerde "Servis yok" sorunu</li>
  <li><strong>Face ID'li modeller:</strong> Düşme sonrası nokta projektörü arızası. "Face ID kullanılamıyor" uyarısı çıkar.</li>
</ul>
<p>Bu arızaların çoğu mikro lehim gerektirir (Modül 6).</p>` },
      { baslik: 'Yazılım ve güvenlik', html: `
<ul>
  <li><strong>Resmî araçlar:</strong> Mac'te <strong>Finder</strong>, Windows'ta <strong>Apple Devices</strong> uygulaması veya iTunes. Kurtarma modu ve DFU modu bunlarla kullanılır.</li>
  <li><strong>iPhone'umu Bul ve Etkinleştirme Kilidi:</strong> Apple ve birçok servis onarımdan önce "iPhone'umu Bul"un kapatılmasını ister. Kilit yalnızca sahibinin Apple hesabıyla kalkar.</li>
  <li><strong>Çalınan Cihaz Koruması:</strong> Açıksa bazı ayarlar Face ID ve bekleme süresi ister. Müşteriyle birlikte yönetin.</li>
  <li>Ayrıntılar <a href="#/yazilim/ios">iOS yazılım alanında</a>.</li>
</ul>` }
    ]
  }
};

// Her derse Samsung ve Apple özel notları: 'modul/ders': { samsung, apple }
TA.markaNotlari = {
  'temeller/giris': {
    samsung: 'Samsung cihazlarda servise başlamadan önce müşteriden <strong>Bakım modunu</strong> açmasını iste (Ayarlar ▸ Pil ve cihaz bakımı). Kişisel veriler gizlenir, sen de güvenle test yaparsın.',
    apple: 'Apple cihazlarda önce <strong>iPhone\'umu Bul</strong> durumunu sor. Açıksa ve müşteri şifresini bilmiyorsa, tamirden sonra cihaz kurulumunda sorun yaşanabilir.'
  },
  'temeller/esd': {
    samsung: 'Galaxy S serisinde OLED panelin arkasındaki ince flex ve ekran içi parmak izi sensörü ESD\'ye karşı hassastır. Ekranı ayırırken bileklik tak.',
    apple: 'iPhone\'larda Face ID modülü (nokta projektörü) ve ön kamera flex\'i statiğe ve ısıya hassastır. Face ID tamir edilemediği için bu parçalara özellikle dikkat et.'
  },
  'temeller/batarya': {
    samsung: 'Samsung bataryalarında çekme bandı her zaman yoktur ve yapıştırıcı çok güçlüdür. Kart sokmadan önce kenarlara %99 izopropil damlat ve bekle. Bataryayı asla bükerek kaldırma.',
    apple: 'iPhone bataryalarında genelde 2-3 çekme bandı vardır. Bantları ekrana paralel ve yavaş çek. iPhone 16 / 16 Plus\'ta elektrikle çözülen yapıştırıcı bulunduğundan Apple\'ın talimatını izle.'
  },
  'temeller/alanim': {
    samsung: 'Samsung\'un iç plastik kapaklarında çok sayıda aynı boy Phillips vida vardır. Yine de ayrı ayrı yerleştir: Bazı modellerde kamera çevresindeki vidalar farklıdır.',
    apple: 'iPhone\'da vidalar milimetre farkıyla değişir. Yanlış deliğe takılan uzun vida anakartı deler ("long screw damage"). Mıknatıslı vida haritası iPhone için neredeyse zorunludur.'
  },
  'temeller/aletler': {
    samsung: 'Temel set yeterlidir: PH000 tornavida, ince açma kartları, ısı kaynağı ve izopropil. Arka cam için geniş kartlar ve vantuz işe yarar.',
    apple: 'Ek olarak <strong>Pentalobe P2</strong> ve <strong>Tri-point Y000</strong> uçları şarttır. Ara vidalar (standoff) için küçük bir düz uç veya özel standoff ucu edin.'
  },
  'anatomi/genel': {
    samsung: 'Galaxy S ve A serisi <strong>arkadan</strong> açılır: arka kapak ▸ kablosuz şarj/NFC bobini ▸ iç plastik kapaklar ▸ anakart ve alt bord. Ekran en son, kasadan ayrılır.',
    apple: 'Klasik iPhone <strong>ekrandan</strong> açılır: alt Pentalobe vidalar ▸ ekran (kitap gibi) ▸ batarya ve ekran braketleri ▸ anakart. 14 ve sonrası birçok modelde arka cam da ayrı açılabilir.'
  },
  'anatomi/anakart': {
    samsung: 'Samsung anakartları çoğunlukla tek kat ve uzundur. Üstünde lehimli kalkanlar bulunur. Şarj soketi anakartta değil, alt borddadır. Bu yüzden şarj sorunlarının çoğu kolay çözülür.',
    apple: 'iPhone X ve sonrası çoğu modelde anakart iki kartın üst üste lehimlenmesiyle oluşan bir <strong>sandviç</strong>tir. Ayırmak özel ısıtma platformu ve tecrübe ister.'
  },
  'anatomi/batarya-ekran': {
    samsung: 'Galaxy S serisinde ekran her zaman OLED\'dir ve ekran içi ultrasonik parmak izi sensörü bulunur. Uyumlu (aftermarket) ekranlarda parmak izi genelde çalışmaz. Galaxy A serisinin bazı modellerinde LCD ekran vardır.',
    apple: 'iPhone X ve sonrası (XR ve 11 hariç) OLED kullanır. XR ve 11 LCD\'dir. Ekran değişince True Tone kaybolabilir, ayrıca "orijinal olmayan ekran" uyarısı çıkabilir.'
  },
  'anatomi/flex-sensor': {
    samsung: 'Samsung\'da alt bordu anakarta bağlayan uzun ana flex en sık hasar gören flex\'tir. Ekran ayırırken veya arka kapak açarken kesilmemesine dikkat et.',
    apple: 'iPhone\'da ön sensör flex\'i (kulaklık, yakınlık ve ortam ışığı sensörü) Face ID ile ilişkilidir. Aktarırken bükme ve ısıtma. Kamera modülleri seri numarasıyla eşlenmiştir.'
  },
  'teshis/yontem': {
    samsung: 'İlk adım: <strong>Samsung Members ▸ Telefon tanılama</strong> veya <strong>*#0*#</strong> test menüsü. Dokunmatik ve sensör testlerini dakikalar içinde yaparsın.',
    apple: 'İlk adım: <em>Ayarlar ▸ Genel ▸ Hakkında ▸ Parçalar ve servis geçmişi</em>. Cihazın daha önce açılıp açılmadığını ve hangi parçaların değiştiğini buradan görürsün.'
  },
  'teshis/sihirbaz': {
    samsung: 'Samsung\'da "Nem algılandı" uyarısı varsa şarj soketini kurut ve temizle. Uyarı sürüyorsa soket veya alt bord arızalı olabilir.',
    apple: 'iPhone\'da "Bu aksesuar desteklenmiyor" uyarısı genelde sertifikasız kablodan veya soketteki kirden kaynaklanır. Önce orijinal kabloyla dene.'
  },
  'teshis/ampermetre': {
    samsung: 'Samsung hızlı şarj (Adaptive Fast Charging / PD) gerilimi 9 V\'a çıkarabilir. Ampermetrede 9 V görmen normaldir. Ekran kapalıyken çekişe bak.',
    apple: 'iPhone\'lar USB-C PD ile 9 V\'a çıkabilir. Lightning modellerde, kapalı cihazda sabit 0.0x A okuma şarj entegresi veya batarya arızasına işaret edebilir.'
  },
  'teshis/sivi': {
    samsung: 'Galaxy cihazlarda sıvı göstergesi genelde SIM yuvasının içinde veya iç kapaklardadır. IP68 olsa bile tuzlu su ve sıcak su contayı aşabilir.',
    apple: 'iPhone\'da sıvı göstergesi SIM tepsisi yuvasının içindedir (fenerle bak). Suya dayanıklılık zamanla azalır, ayrıca sıvı hasarı Apple garantisi kapsamında değildir.'
  },
  'sokum/planlama': {
    samsung: 'Model numarasını (ör. SM-A546B) <em>Ayarlar ▸ Telefon hakkında</em> bölümünden al. Aynı adı taşıyan modellerin farklı bölge versiyonlarında parçalar farklı olabilir.',
    apple: 'Model numarasını (ör. A2846) <em>Ayarlar ▸ Genel ▸ Hakkında</em> bölümünden veya SIM yuvasının içinden kontrol et. Parça siparişini model numarasına göre ver.'
  },
  'sokum/yapistirici': {
    samsung: 'Arka cam açarken pick\'i <strong>alt kenardan</strong> başlat ve kamera adası çevresinde dikkatli ol. Kavisli arka camlarda kartı fazla sokma, kablosuz şarj bobinini kesebilirsin.',
    apple: 'Ekranı alt kenardan aç. Sol ve üst kenarda klipsler, sağ kenarda flex\'ler vardır. Kartı sağ kenarda <strong>2-3 mm\'den fazla</strong> sokma. Ekranı sağa doğru kitap gibi aç.'
  },
  'sokum/vidalar': {
    samsung: 'Samsung\'da iç kapaklar çok sayıda Phillips vidayla tutturulur. Kamera adası ve alt hoparlör kapakları klipslidir, vidaları söktükten sonra kaldır.',
    apple: 'iPhone\'da braket vidaları farklı uzunluktadır. Ara vidalar (standoff) altlarındaki vidayı da tutar. Bunları manyetik uçla değil, düz uçla sök.'
  },
  'sokum/montaj': {
    samsung: 'Arka cam için hazır kesimli conta kullan ve kıskaçla birkaç saat beklet. Kablosuz şarj bobininin flex\'inin sıkışmadığından emin ol.',
    apple: 'Ekran contasını kalan yapıştırıcıyı iyice temizledikten sonra uygula. Pentalobe vidaları en son tak ve fazla sıkma.'
  },
  'tamirler/ekran': {
    samsung: 'Orijinal ekranlar çoğunlukla <strong>kasalı servis paketi</strong> olarak gelir. İş, parçaların eski kasadan yeni kasaya aktarılmasıdır. Kavisli ekranlı modellerde eski ekranı söküp sadece paneli değiştirmek çok risklidir.',
    apple: 'Ön sensör flex\'ini ve kulaklık hoparlörünü yeni ekrana aktar. Değişimden sonra True Tone kaybolabilir. Yeni iOS sürümlerinde orijinal ekranlar Onarım Asistanı ile eşleştirilebilir.'
  },
  'tamirler/batarya': {
    samsung: 'Bataryayı alkol ve geniş plastik kartlarla, uzun kenarından yavaşça kaldır. Pil durumunu Samsung Members tanılamasından kontrol et.',
    apple: 'Çekme bantlarını kopartmadan çıkar. Orijinal olmayan bataryalarda "Bilinmeyen parça" uyarısı çıkar ve pil sağlığı gösterilmeyebilir. Müşteriye önceden söyle.'
  },
  'tamirler/sarj': {
    samsung: 'Şarj soketi alt bord üzerindedir. Alt bordu değiştirmek kolay ve uygun maliyetli bir iştir. Değişimden sonra anten koaksiyel kablolarını aynı yoldan geçirmeyi unutma.',
    apple: 'iPhone\'larda şarj soketi, mikrofon ve antenleri de taşıyan bir flex üzerindedir. Değişimi için çoğu modelde Taptic Engine ve hoparlörün sökülmesi gerekir.'
  },
  'tamirler/kamera-tus': {
    samsung: 'Kamera camı arka kapağa entegre olabilir veya ayrı bir çerçevede durabilir. Ayrıysa sadece cam değişir. Ultra modellerde lens adası kırılgandır.',
    apple: 'Kamera modülü seri numarasıyla eşlenir: Başka cihazdan takılan kamera uyarı verir. Kırık kamera camı ayrı değiştirilebilir.'
  },
  'ileri/multimetre': {
    samsung: 'Alt bord konnektöründe VBUS ve toprak noktalarını ölçerek alt bord ile anakart arasındaki sorunu ayırabilirsin.',
    apple: 'iPhone\'da batarya konnektörü ve şarj flex\'i konnektöründe diyot modu ölçümü yaygın bir başlangıçtır. Sağlam kartın değerleriyle karşılaştır.'
  },
  'ileri/kisa-devre': {
    samsung: 'Samsung kartlarında kısa devreler sık sık ana gerilim hattındaki (VBAT / VPH_PWR) kondansatörlerde görülür. Kalkanları sökmeden önce termal kamerayla tara.',
    apple: 'iPhone\'da ana hat genelde PP_VDD_MAIN olarak adlandırılır. Sandviç kartlarda kısa devre üst ve alt kat arasında olabilir. Önce kartı ayırmadan termal kamerayla tara.'
  },
  'ileri/lehim': {
    samsung: 'Kalkanlar lehimlidir. Sökmeden önce çevresindeki plastik konnektörleri folyo ile koru ve düşük hava akışı kullan.',
    apple: 'Sandviç kartları ayırmak için özel ısıtma platformu gerekir. Ara katman (interposer) lehimi düşük sıcaklık pastasıyla yeniden yapılır. Bu iş ileri seviyedir.'
  },
  'ileri/sema': {
    samsung: 'Samsung şemalarında hat adları genelde VBAT, VPH_PWR ve VBUS biçimindedir. Parça numaraları C, R, L ve U önekleriyle verilir.',
    apple: 'Apple şemalarında hat adları PP_ (power) ve PPVBUS biçimindedir. Boardview yazılımları iPhone için çok yaygındır.'
  },
  'yazilim/once-yazilim': {
    samsung: 'Önce <strong>Güvenli mod</strong> (güç menüsünde "Kapat" seçeneğine uzun bas) ve Samsung Members tanılamasıyla yazılımı ele. Ayrıntılar <a href="#/yazilim/android">Android alanında</a>.',
    apple: 'iPhone\'da önce <strong>zorla yeniden başlat</strong>: ses aç, ses kıs, sonra yan tuşa Apple logosu görünene kadar basılı tut. Ayrıntılar <a href="#/yazilim/ios">iOS alanında</a>.'
  },
  'yazilim/sifirlama': {
    samsung: 'Yazılım kurtarma için resmî araç <strong>Smart Switch</strong>\'tir. Resmî olmayan yazılım yüklemek Knox\'u attırabilir.',
    apple: 'Kurtarma modunda <strong>Güncelle</strong> seçeneği verileri korumaya çalışır, <strong>Geri Yükle</strong> ise siler. Önce her zaman Güncelle\'yi dene.'
  },
  'yazilim/kilitler': {
    samsung: 'Samsung cihazlarda Google FRP\'ye ek olarak Samsung hesabı "yeniden etkinleştirme kilidi" de olabilir. Her ikisi de yalnızca hesap sahibince kaldırılmalıdır.',
    apple: 'Etkinleştirme Kilidi yalnızca Apple hesabı sahibince veya satın alma belgesiyle Apple\'a başvurularak kaldırılabilir.'
  },
  'meslek/parca': {
    samsung: 'Samsung parçalarının çoğunda <strong>GH82-</strong> ile başlayan bir parça numarası vardır. Siparişte bu numarayı kullanmak yanlış parça riskini azaltır.',
    apple: 'iPhone parçalarında "orijinal / sökme / uyumlu" farkı fiyatı çok etkiler. Parça eşleme nedeniyle müşteriye uyarı mesajı konusunda önceden bilgi ver.'
  },
  'meslek/fiyat': {
    samsung: 'Kasalı servis paketi daha pahalıdır ama işçilik ve kalite avantajı sağlar. Fiyatı "sadece panel" ve "kasalı paket" olarak iki seçenekle sun.',
    apple: 'Face ID ve parça eşleme riskleri nedeniyle iPhone işlerinde risk payını biraz yüksek tut, risklerini de yazılı olarak açıkla.'
  },
  'meslek/musteri': {
    samsung: 'Teslimde Bakım modundan nasıl çıkılacağını göster. Parmak izini yeniden kaydetmesini öner.',
    apple: 'Teslimde Parçalar ve servis geçmişi ekranını müşteriyle birlikte incele. Bu şeffaflık güven oluşturur.'
  },
  'meslek/baslangic': {
    samsung: 'Samsung\'un bazı ülkelerde iFixit ile yürüttüğü kendin-onar programı ve resmî servis ağı var. Orijinal parça kaynakları için yetkili distribütörleri araştır.',
    apple: 'Apple\'ın Kendi Kendine Servis (Self Service Repair) programı bazı ülkelerde orijinal parça ve kılavuz sunuyor. Ülkende olup olmadığını kontrol et.'
  }
};
