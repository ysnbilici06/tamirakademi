// Modül 1: Temeller
// Kutu yardımcıları: içerikte <div class="kutu uyari"> vb. kullanılır.
TA.icerik.temeller = {
  dersler: [
    {
      id: 'giris',
      baslik: 'Tamire başlamadan önce',
      sure: 6,
      html: `
<p>Telefon ve tablet tamiri; sabır, düzen ve doğru aletle öğrenilebilen bir zanaattır. Bu kurs belirli bir markaya bağlı değildir. Öğrendiğin teknikler Apple, Samsung, Xiaomi ve diğer markaların cihazlarında büyük ölçüde aynıdır. Markaya özel farklar not kutularında anlatılır.</p>

<h2>Bu kursta neler öğreneceksin?</h2>
<ul>
  <li>Kendini ve cihazı korumak için temel güvenlik kuralları</li>
  <li>Cihazın içinde neyin ne işe yaradığı</li>
  <li>Belirtiden yola çıkarak arızayı bulmak</li>
  <li>Cihazı sökmek, parça değiştirmek ve hasarsız geri toplamak</li>
  <li>Multimetre ve lehim gibi ileri tekniklere giriş</li>
</ul>

<h2>Doğru zihniyet</h2>
<p>Tamirde en çok hasarı aceleyle çalışmak verir. Deneyimli teknisyenler bile her adımda şu soruları sorar:</p>
<ol class="adimlar">
  <li><strong>Bu parçayı neden söküyorum?</strong> Arızayla ilgisi yoksa dokunma. Her söküm yeni bir hata ihtimalidir.</li>
  <li><strong>Geri nasıl takacağım?</strong> Sökmeden önce fotoğraf çek. Vidaları çıktıkları yere göre ayır.</li>
  <li><strong>Burada enerji var mı?</strong> Bataryaya bağlı bir kartla çalışmak kısa devreye yol açar.</li>
</ol>

<div class="kutu uyari"><span class="kutu-ikon">!</span><div>
<p><strong>Garanti ve sorumluluk:</strong> Cihazı açmak çoğu zaman üretici garantisini bozar. Garantisi devam eden bir cihazda önce yetkili servisi değerlendir.</p>
</div></div>

<div class="kutu ipucu"><span class="kutu-ikon">✓</span><div>
<p><strong>İlk pratik önerisi:</strong> Çekmecedeki eski veya bozuk bir telefonu "deneme cihazı" yap. İlk sökümü değerli bir cihazda değil, onda yap.</p>
</div></div>
`
    },
    {
      id: 'esd',
      baslik: 'Statik elektrik (ESD) ve korunma',
      sure: 8,
      html: `
<p><strong>ESD</strong> (Electrostatic Discharge), vücudunda biriken statik elektriğin bir nesneye aniden boşalmasıdır. Kapı koluna dokununca hissettiğin çarpma birkaç bin volttur. İnsan 3.000 voltun altındaki boşalmayı genellikle hissetmez. Bir entegreyi bozmak için ise <strong>birkaç yüz volt</strong> yetebilir.</p>

<div class="kutu tehlike"><span class="kutu-ikon">⚡</span><div>
<p><strong>Gizli hasar:</strong> ESD hasarı çoğu zaman hemen ortaya çıkmaz. Parça bir süre çalışır, sonra rastgele kapanma, şarj sorunu veya dokunmatik arızası olarak geri döner. Bu da teşhisi çok zorlaştırır.</p>
</div></div>

<h2>Statik nasıl oluşur?</h2>
<p>İki farklı malzeme sürtününce ya da birbirinden ayrılınca yük birikir. Halı üzerinde yürümek, sentetik kıyafet, plastik poşet, kuru hava (kış ayları) ve köpük ambalajlar en büyük kaynaklardır.</p>

<h2>Korunma yöntemleri</h2>
<div class="tablo-kap"><table>
  <thead><tr><th>Yöntem</th><th>Ne işe yarar?</th><th>Öncelik</th></tr></thead>
  <tbody>
    <tr><td>Antistatik bileklik</td><td>Vücudundaki yükü 1 MΩ dirençle yavaşça toprağa aktarır.</td><td>Yüksek</td></tr>
    <tr><td>Antistatik mat</td><td>Çalışma yüzeyindeki parçaları aynı potansiyelde tutar.</td><td>Yüksek</td></tr>
    <tr><td>ESD güvenli aletler</td><td>Pense, cımbız ve spudger'ın yükü kontrollü dağıtmasını sağlar.</td><td>Orta</td></tr>
    <tr><td>Antistatik poşet</td><td>Sökülen kartları ve parçaları saklamak için.</td><td>Orta</td></tr>
    <tr><td>Topraklı metale dokunmak</td><td>Ekipmanın yoksa işe başlamadan önce yükü boşaltır.</td><td>Asgari</td></tr>
  </tbody>
</table></div>

<div class="kutu not"><span class="kutu-ikon">i</span><div>
<p><strong>Bileklik nereye bağlanır?</strong> Klipsi matın topraklama noktasına ya da topraklı bir prizin toprak hattına bağlanan kabloya tak. Kaloriferin boyalı yüzeyine takmak işe yaramaz. Boyasız bir metal noktası gerekir.</p>
</div></div>

<h2>Kısa kontrol listesi</h2>
<ul>
  <li>Halı yerine sert zemin, yün veya sentetik yerine pamuklu kıyafet tercih et.</li>
  <li>Parçaları kenarlarından tut. Konnektör pinlerine ve entegrelere parmakla dokunma.</li>
  <li>Plastik poşetleri ve köpükleri çalışma alanından uzak tut.</li>
  <li>Kuru havada nem oranı düşer ve statik artar. Hava nemlendirici fark yaratır.</li>
</ul>
`
    },
    {
      id: 'batarya',
      baslik: 'Lityum batarya güvenliği',
      sure: 9,
      html: `
<p>Telefon ve tabletlerdeki <strong>lityum-iyon / lityum-polimer</strong> bataryalar küçük hacimde çok fazla enerji depolar. Delinir, ezilir ya da kısa devre olursa saniyeler içinde <strong>ısıl kaçak</strong> (thermal runaway) başlar. Batarya şişer, duman çıkarır ve alev alabilir. Bu yangın kendi oksijenini ürettiği için kolay sönmez.</p>

<figure class="cizim">
  <svg viewBox="0 0 420 150" width="420" role="img" aria-label="Batarya kesiti: kat kat dizilmiş anot, ayırıcı ve katot tabakaları">
    <rect x="20" y="20" width="380" height="100" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
    <g stroke-width="5">
      <line x1="40" y1="40" x2="380" y2="40" stroke="#888"/>
      <line x1="40" y1="52" x2="380" y2="52" stroke="var(--uyari)"/>
      <line x1="40" y1="64" x2="380" y2="64" stroke="var(--vurgu)"/>
      <line x1="40" y1="76" x2="380" y2="76" stroke="var(--uyari)"/>
      <line x1="40" y1="88" x2="380" y2="88" stroke="#888"/>
      <line x1="40" y1="100" x2="380" y2="100" stroke="var(--uyari)"/>
    </g>
    <path d="M210 0 L200 70 L215 70 L205 140" fill="none" stroke="var(--tehlike)" stroke-width="3"/>  </svg>
  <figcaption>Batarya içinde ince tabakalar yalnızca bir ayırıcı film ile birbirinden ayrılır. Delinme bu filmi yırtar ve iç kısa devre oluşur.</figcaption>
</figure>

<h2>Altın kurallar</h2>
<ol class="adimlar">
  <li><strong>İlk iş bataryayı ayır.</strong> Kasayı açtıktan sonra herhangi bir parçaya dokunmadan önce batarya konnektörünü plastik bir aletle (spudger) çıkar.</li>
  <li><strong>Metal alet kullanma.</strong> Bataryayı kaldırırken ya da konnektörü ayırırken metal tornavida veya cımbız kısa devre yapabilir.</li>
  <li><strong>Asla delme, bükme, ezme.</strong> Yapışkanı sökerken bataryanın altına metal sokup kanırtma.</li>
  <li><strong>Şişmiş bataryayı şarj etme.</strong> Şişkinlik iç hasar ve gaz birikimi demektir. Hemen değiştir.</li>
  <li><strong>Isıyı sınırla.</strong> Isı tabancası ya da plaka kullanırken bataryayı doğrudan ısıtma.</li>
</ol>

<div class="kutu tehlike"><span class="kutu-ikon">!</span><div>
<p><strong>Batarya duman çıkarırsa:</strong> Cihazı metal bir tepsiyle ya da maşayla yanıcı olmayan bir yüzeye (beton zemin, kum kovası) taşı. Dumanı soluma ve ortamı havalandır. Lityum-iyon bataryada alevi bastırmak ve hücreyi soğutmak için bol su kullanılabilir. Alev söndükten sonra da batarya yeniden tutuşabilir, bu yüzden saatlerce gözetim altında tut. Eldivensiz dokunma.</p>
</div></div>

<div data-bilesen="foto" data-ad="sisik-batarya" data-alt="Şişerek kasayı ve ekranı yerinden itmiş bir iPhone 3GS bataryası" data-aciklama="Şişmiş batarya: Ekranı yerinden itecek kadar büyüyebilir. Böyle bir bataryayı şarj etme ve delme."></div>

<h2>Yapışkanlı bataryalar</h2>
<p>Çoğu modern cihazda batarya, çekme bantlı (stretch-release) yapışkanla ya da güçlü bir yapıştırıcıyla kasaya tutturulur.</p>
<ul>
  <li><strong>Çekme bant varsa:</strong> Bandı sert bir açıyla değil, yatay ve yavaşça çek. Kopmaması için ekrana paralel tut.</li>
  <li><strong>Bant koparsa veya yoksa:</strong> Kenarlara birkaç damla izopropil alkol (%99) damlat, 1-2 dakika bekle. Ardından plastik bir kartla yavaşça ayır.</li>
</ul>

<div class="kutu ipucu"><span class="kutu-ikon">✓</span><div>
<p>Bataryayı sökmeden önce şarjın <strong>%25'in altına</strong> indirilmesi önerilir. Boş bataryada depolanan enerji azdır, bu yüzden bir kaza olursa daha küçük olur.</p>
</div></div>

<h2>Eski bataryaları ne yapmalı?</h2>
<p>Çöpe atma. Kutup uçlarını bantla yalıtıp pil toplama noktalarına ya da elektronik atık merkezine teslim et.</p>
`
    },
    {
      id: 'alanim',
      baslik: 'Çalışma alanını hazırlamak',
      sure: 5,
      html: `
<p>Düzenli bir masa kaybolan vidaların, karışan parçaların ve kazara kırılan flex kabloların önüne geçer.</p>

<h2>İdeal çalışma alanı</h2>
<ul>
  <li><strong>Işık:</strong> Gölge yapmayan, beyaz ve güçlü bir ışık. Büyüteçli lamba çok işe yarar.</li>
  <li><strong>Zemin:</strong> Antistatik mat ya da en azından açık renkli, düz bir yüzey. Açık renk zeminde küçük vidalar kolayca görünür.</li>
  <li><strong>Havalandırma:</strong> Lehim dumanı ve kimyasallar için pencere veya duman emici.</li>
  <li><strong>Düzen:</strong> Mıknatıslı vida haritası veya bölmeli kutu.</li>
</ul>

<h2>Vida yönetimi</h2>
<p>Telefonlarda aynı görünen vidalar farklı uzunlukta olabilir. Uzun bir vidayı yanlış deliğe takmak anakartın katmanlarını delebilir. Buna "long screw damage" denir ve bu hasar çoğu zaman onarılamaz.</p>
<ol class="adimlar">
  <li>Bir kağıda cihazın kaba çizimini yap ya da sökmeden önce fotoğraf çek.</li>
  <li>Çıkan her vidayı, çıktığı noktaya karşılık gelen yere koy (kağıt üzerine bant veya mıknatıslı mat).</li>
  <li>Sökme sırasını not al. Montaj bunun tersi sırayla yapılır.</li>
</ol>

<div class="kutu uyari"><span class="kutu-ikon">!</span><div>
<p><strong>Mıknatıs dikkati:</strong> Mıknatıslı matlar vida için harikadır, ancak pusula sensörü ve bazı hoparlör parçaları mıknatıstan etkilenebilir. Bu parçaları matın üzerine koyma.</p>
</div></div>
`
    },
    {
      id: 'aletler',
      baslik: 'Alet çantası',
      sure: 10,
      html: `
<p>Başlamak için pahalı bir set gerekmez. Aşağıda aletleri <strong>başlangıç</strong>, <strong>orta</strong> ve <strong>ileri</strong> seviye olarak ayırdık. Önce başlangıç setini edin, ihtiyaç oldukça diğerlerini ekle.</p>

<h2>Başlangıç seti</h2>
<div class="alet-izgara">
  <div class="alet"><strong>Hassas tornavida seti</strong><span>Phillips (PH000/PH00), Pentalobe (P2/P5), Tri-point (Y000), Torx (T2-T6) uçları.</span><em>BAŞLANGIÇ</em></div>
  <div class="alet"><strong>Spudger (plastik çubuk)</strong><span>Konnektör ayırmak ve klipsleri açmak için. İletken değildir.</span><em>BAŞLANGIÇ</em></div>
  <div class="alet"><strong>Açma kartları (pick)</strong><span>İnce plastik kartlar. Ekran ile kasa arasındaki yapıştırıcıyı keser.</span><em>BAŞLANGIÇ</em></div>
  <div class="alet"><strong>Vantuz</strong><span>Ekranı veya arka camı kaldırarak ilk boşluğu açar.</span><em>BAŞLANGIÇ</em></div>
  <div class="alet"><strong>ESD cımbız</strong><span>Düz ve eğri uçlu. Küçük parçalar ve bantlar için.</span><em>BAŞLANGIÇ</em></div>
  <div class="alet"><strong>İzopropil alkol (%99)</strong><span>Yapıştırıcı çözmek ve kartı temizlemek için. %70'lik içerdiği su nedeniyle uygun değildir.</span><em>BAŞLANGIÇ</em></div>
</div>

<div data-bilesen="foto" data-ad="spudger" data-alt="Kırmızı plastik spudger" data-aciklama="Spudger: Konnektörleri ayırmak ve klipsleri açmak için kullanılan, elektriği iletmeyen plastik çubuk."></div>

<h2>Orta seviye</h2>
<div class="alet-izgara">
  <div class="alet"><strong>Isı tabancası / iOpener</strong><span>Yapıştırıcıyı yumuşatmak için. Düşük ayarda ve hareket ettirerek kullan.</span><em>ORTA</em></div>
  <div class="alet"><strong>Multimetre</strong><span>Gerilim, direnç ve süreklilik ölçer. Arıza teşhisinin temel aletidir.</span><em>ORTA</em></div>
  <div class="alet"><strong>USB ampermetre</strong><span>Şarj akımını gösterir. "Şarj olmuyor" arızalarında ilk bakılacak alettir.</span><em>ORTA</em></div>
  <div class="alet"><strong>Ekran ayırma plakası</strong><span>Ekranı kontrollü ve eşit ısıtarak ayırır.</span><em>ORTA</em></div>
  <div class="alet"><strong>B-7000 / T-7000 yapıştırıcı</strong><span>Ekran ve arka cam montajı için esnek yapıştırıcı.</span><em>ORTA</em></div>
</div>

<div data-bilesen="foto" data-ad="isi-tabancasi" data-alt="Sıcak hava tabancası" data-aciklama="Isı tabancası: Ekran ve arka cam yapıştırıcısını yumuşatır. Telefonda en düşük ayarda, hareket ettirerek kullan."></div>

<h2>İleri seviye</h2>
<div class="alet-izgara">
  <div class="alet"><strong>Havya istasyonu</strong><span>Isı ayarlı, ince uçlu. Konnektör ve soket lehimleri için.</span><em>İLERİ</em></div>
  <div class="alet"><strong>Sıcak hava istasyonu</strong><span>SMD parça ve entegre sökme-takma için.</span><em>İLERİ</em></div>
  <div class="alet"><strong>Mikroskop</strong><span>Stereo mikroskop. Mikro lehimde zorunludur.</span><em>İLERİ</em></div>
  <div class="alet"><strong>Ayarlı güç kaynağı</strong><span>Anakarta bataryasız güç verip akım çekişini izlemek için.</span><em>İLERİ</em></div>
</div>

<div class="kutu not"><span class="kutu-ikon">i</span><div>
<p><strong>Markaya göre vida tipleri:</strong> Apple dış kasada genelde Pentalobe, içeride Tri-point ve Phillips kullanır. Android cihazların çoğunda Phillips PH000 yeterlidir. Bazı modellerde Torx bulunur. Kaliteli bir uç seti bu farkların neredeyse hepsini karşılar.</p>
</div></div>

<div class="kutu uyari"><span class="kutu-ikon">!</span><div>
<p><strong>Ucuz tornavida tuzağı:</strong> Yumuşak çelik uçlar vida başını yalar ve yalanmış bir vidayı çıkarmak saatler sürer. Tornavidada tasarruf etme.</p>
</div></div>
`
    }
  ],
  quiz: [
    { soru: 'Kasayı açtıktan sonra yapılması gereken ilk iş nedir?', secenekler: ['Ekran konnektörünü ayırmak', 'Batarya konnektörünü plastik aletle ayırmak', 'Anakart vidalarını sökmek', 'Kamerayı çıkarmak'], dogru: 1, aciklama: 'Kart enerjili kaldığı sürece her konnektör işlemi kısa devre riski taşır. İlk iş bataryayı ayırmaktır.' },
    { soru: 'ESD hasarı için hangisi doğrudur?', secenekler: ['Her zaman hemen fark edilir', 'Sadece 10.000 voltun üzerinde olur', 'Hissedemeyeceğin kadar küçük bir boşalma bile entegreyi bozabilir', 'Sadece ekranları etkiler'], dogru: 2, aciklama: 'İnsan yaklaşık 3.000 voltun altındaki boşalmayı hissetmez. Bir entegre için birkaç yüz volt yeterli olabilir.' },
    { soru: 'Şişmiş bir batarya ile ne yapmalısın?', secenekler: ['Şarj edip test etmek', 'Bastırıp eski haline getirmek', 'Kullanmayı bırakıp güvenle değiştirmek', 'Delip gazını boşaltmak'], dogru: 2, aciklama: 'Şişkinlik iç hasar demektir. Şarj etmek, bastırmak veya delmek yangına yol açabilir.' },
    { soru: 'Yapışkanı çözmek için hangi alkol tercih edilir?', secenekler: ['%70 izopropil', '%99 izopropil', 'Etil kolonya', 'Fark etmez'], dogru: 1, aciklama: '%70\'lik alkolün %30\'u sudur ve elektroniğe zarar verebilir. %99 izopropil hızla buharlaşır.' },
    { soru: '"Long screw damage" nedir?', secenekler: ['Vidanın yalanması', 'Uzun vidanın yanlış deliğe takılıp anakartı delmesi', 'Vidanın kaybolması', 'Fazla sıkılan vidanın kırılması'], dogru: 1, aciklama: 'Bu yüzden her vidayı çıktığı yere göre ayırmak çok önemlidir.' },
    { soru: 'Antistatik bilekliğin klipsi nereye bağlanmalıdır?', secenekler: ['Kaloriferin boyalı yüzeyine', 'Telefonun kasasına', 'Matın topraklama noktasına veya topraklı bir hatta', 'Hiçbir yere, takmak yeterli'], dogru: 2, aciklama: 'Bileklik yükü ancak topraklanmış bir noktaya bağlandığında boşaltır.' }
  ]
};
