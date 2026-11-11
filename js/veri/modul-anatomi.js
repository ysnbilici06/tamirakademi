// Modül 2: Cihazın Anatomisi
TA.icerik.anatomi = {
  dersler: [
    {
      id: 'genel',
      baslik: 'Bir telefonun içine ilk bakış',
      sure: 7,
      html: `
<p>Markası ne olursa olsun, modern bir akıllı telefon katman katman dizilmiş aynı temel parçalardan oluşur. Bu yapıyı kafanda canlandırabilirsen hiç görmediğin bir modeli bile rahatça sökebilirsin.</p>

<figure class="cizim">
  <svg viewBox="0 0 460 250" width="460" role="img" aria-label="Telefonun katmanları: ekran, çerçeve, anakart ve batarya, arka kapak">
    <g font-family="system-ui,sans-serif" font-size="13" fill="currentColor">
      <g class="katman k1"><path d="M60 40 L300 40 L360 70 L120 70 Z" fill="#20262f" stroke="currentColor"/><text x="370" y="62">Ekran (cam + panel)</text></g>
      <g class="katman k2"><path d="M60 90 L300 90 L360 120 L120 120 Z" fill="var(--yuzey-2)" stroke="currentColor"/><text x="370" y="112">Orta çerçeve / kasa</text></g>
      <g class="katman k3"><path d="M60 140 L190 140 L250 170 L120 170 Z" fill="#1e5a3c" stroke="currentColor"/><path d="M200 140 L300 140 L360 170 L260 170 Z" fill="#3a3f47" stroke="currentColor"/><text x="370" y="162">Anakart + batarya</text></g>
      <g class="katman k4"><path d="M60 190 L300 190 L360 220 L120 220 Z" fill="var(--vurgu-acik)" stroke="currentColor"/><text x="370" y="212">Arka kapak</text></g>
    </g>
  </svg>
  <figcaption>Telefonun katmanları (patlatılmış görünüm).</figcaption>
</figure>

<h2>İki temel yapı</h2>
<div class="tablo-kap"><table>
  <thead><tr><th>Yapı</th><th>Nereden açılır?</th><th>Örnek</th></tr></thead>
  <tbody>
    <tr><td><strong>Ekrandan açılan</strong></td><td>Ekran ön taraftan ayrılır. Anakart ve batarya ekranın arkasındadır.</td><td>Çoğu iPhone, birçok eski Android</td></tr>
    <tr><td><strong>Arkadan açılan</strong></td><td>Önce arka cam ya da kapak ayrılır. Ekran, değişim gerekirse en son sökülür.</td><td>Çoğu Samsung, Xiaomi, Oppo</td></tr>
  </tbody>
</table></div>

<div class="kutu ipucu"><span class="kutu-ikon">✓</span><div>
<p><strong>Cihazı açmadan önce yapıyı öğren:</strong> Modelin adını ve "teardown" kelimesini arat. Söküm fotoğraflarına göz atmak, yanlış taraftan açmaya çalışıp ekranı kırmanın önüne geçer.</p>
</div></div>

<h2>Ana parçalar</h2>
<ul>
  <li><strong>Anakart:</strong> İşlemci, bellek ve bütün kontrol devreleri</li>
  <li><strong>Batarya:</strong> Enerji kaynağı</li>
  <li><strong>Ekran:</strong> Görüntü paneli ve dokunmatik katman</li>
  <li><strong>Alt bord / şarj flex'i:</strong> Şarj soketi, mikrofon, bazen titreşim motoru</li>
  <li><strong>Kameralar, hoparlörler, sensörler</strong></li>
  <li><strong>Flex kablolar:</strong> Hepsini birbirine bağlayan ince, esnek baskılı devreler</li>
</ul>
`
    },
    {
      id: 'anakart',
      baslik: 'Anakart: cihazın beyni',
      sure: 9,
      html: `
<p>Anakart, cihazın her şeyi yöneten ana devresidir. Üzerinde yüzlerce küçük parça bulunur. Bunların hepsini ezberlemen gerekmez, ama ana bölümleri ve görevlerini bilmek teşhisin temelidir.</p>

<div data-bilesen="anakart"></div>

<h2>Katmanlı yapı</h2>
<p>Telefon anakartları 8-12 katmanlı baskılı devrelerdir. Bazı üst seviye modellerde iki kart üst üste lehimlenir ("sandviç anakart"). Bu sayede yerden kazanılır, ama tamir zorlaşır.</p>

<div class="kutu not"><span class="kutu-ikon">i</span><div>
<p><strong>Kalkanlar (shield):</strong> Anakart üzerindeki metal kapaklar, hassas bölümleri elektromanyetik parazitten korur. Bazıları çıtçıtla takılır, bazıları lehimlidir. Lehimli bir kalkanı sökmek ileri seviye bir iştir.</p>
</div></div>

<h2>Anakartta en çok arıza veren yerler</h2>
<ol class="adimlar">
  <li><strong>Konnektörler:</strong> Darbe sonrası gevşeme, sıvı sonrası oksitlenme</li>
  <li><strong>Şarj hattı:</strong> Kalitesiz şarj cihazlarından gelen aşırı gerilim</li>
  <li><strong>Kondansatörler:</strong> Kısa devre yapıp cihazın açılmasını engelleyebilir</li>
  <li><strong>BGA çipler:</strong> Düşme veya bükülme sonrası alttaki lehim toplarında çatlak</li>
</ol>
`
    },
    {
      id: 'batarya-ekran',
      baslik: 'Batarya ve ekran türleri',
      sure: 10,
      html: `
<h2>Batarya</h2>
<p>Telefonlarda kullanılan lityum-polimer bataryaların üzerinde mutlaka küçük bir <strong>koruma devresi (BMS)</strong> bulunur. Bu devre aşırı şarjı, aşırı deşarjı ve kısa devreyi engeller. Batarya çok uzun süre tamamen boş kalırsa koruma devresi kendini kapatır ve batarya "ölü" görünür.</p>
<div class="tablo-kap"><table>
  <thead><tr><th>Değer</th><th>Anlamı</th></tr></thead>
  <tbody>
    <tr><td>3.7 / 3.85 V (nominal)</td><td>Ortalama çalışma gerilimi</td></tr>
    <tr><td>4.2 – 4.45 V</td><td>Tam dolu</td></tr>
    <tr><td>~3.0 V</td><td>Boş (cihaz kapanır)</td></tr>
    <tr><td>mAh</td><td>Kapasite. Ne kadar yüksekse o kadar uzun gider.</td></tr>
    <tr><td>Wh</td><td>Enerji (gerilim × kapasite). Uçuş kuralları bu değere bakar.</td></tr>
  </tbody>
</table></div>

<h2>Ekran: LCD mi, OLED mi?</h2>
<div class="tablo-kap"><table>
  <thead><tr><th></th><th>LCD (IPS)</th><th>OLED / AMOLED</th></tr></thead>
  <tbody>
    <tr><td>Işık</td><td>Arkadan aydınlatma (backlight) gerekir</td><td>Her piksel kendi ışığını üretir</td></tr>
    <tr><td>Siyah</td><td>Gri-siyah</td><td>Gerçek siyah (piksel kapalı)</td></tr>
    <tr><td>Kalınlık</td><td>Daha kalın</td><td>İnce, kavisli olabilir</td></tr>
    <tr><td>Kırılınca</td><td>Genelde cam çatlar, görüntü kalabilir</td><td>Sıkça mürekkep gibi yayılan lekeler ve çizgiler</td></tr>
    <tr><td>Fiyat</td><td>Ucuz</td><td>Pahalı</td></tr>
  </tbody>
</table></div>

<div class="kutu uyari"><span class="kutu-ikon">!</span><div>
<p><strong>"OLED yerine LCD" (aftermarket/uyumlu ekran):</strong> Orijinali OLED olan bir cihaza ucuz LCD takılabilir. Ancak ekran daha kalın olur, renkler soluk görünür ve pil daha hızlı biter. Parmak izi okuyucu ekranın içindeyse çalışmayabilir. Bunu müşteriye <strong>mutlaka önceden</strong> söyle.</p>
</div></div>

<h2>Ekranın katmanları</h2>
<p>Ön cam, dokunmatik katman (digitizer) ve görüntü paneli modern ekranlarda birbirine yapıştırılmış tek bir parçadır. Bu yüzden genelde komple değiştirilir. Yalnızca camı değiştirmek (cam ayırma ve laminasyon) özel makine gerektiren ayrı bir uzmanlıktır.</p>
`
    },
    {
      id: 'flex-sensor',
      baslik: 'Flex kablolar, kameralar ve sensörler',
      sure: 7,
      html: `
<h2>Flex kablolar</h2>
<p>Flex kablolar, ince plastik bir film üzerine basılmış esnek devrelerdir. Esnektirler ama <strong>kırılgandırlar</strong>: Keskin katlanmaya, çekmeye ve ısıya hassastırlar.</p>
<div data-bilesen="canlandirma" data-ad="konnektor"></div>

<h2>Kameralar</h2>
<p>Kameralar konnektörle takılan modüllerdir. Ana kamerada genelde <strong>OIS</strong> (optik görüntü sabitleme) bulunur. Kamera sallanınca "tıkırdama" sesi gelmesi çoğu zaman normaldir: OIS mıknatısları cihaz kapalıyken serbest kalır.</p>

<h2>Sensörler</h2>
<div class="tablo-kap"><table>
  <thead><tr><th>Sensör</th><th>Nerede?</th><th>Arızada belirti</th></tr></thead>
  <tbody>
    <tr><td>Yakınlık sensörü</td><td>Ön kameranın yanı</td><td>Görüşmede ekran kararmıyor ya da hep kararık kalıyor</td></tr>
    <tr><td>Ortam ışığı</td><td>Ön üst bölüm</td><td>Otomatik parlaklık çalışmıyor</td></tr>
    <tr><td>Parmak izi</td><td>Ekran altı, yan tuş ya da arka</td><td>Okumuyor (bazı modellerde anakarta eşlenmiştir)</td></tr>
    <tr><td>Jiroskop / ivmeölçer</td><td>Anakart üzerinde</td><td>Ekran dönmüyor, oyunlarda kayma</td></tr>
  </tbody>
</table></div>

<div class="kutu not"><span class="kutu-ikon">i</span><div>
<p><strong>Parça eşleme (serileştirme):</strong> Bazı üreticiler ekran, batarya, kamera ve parmak izi gibi parçaları anakarta seri numarasıyla eşler. Orijinal parça bile başka bir cihazdan takılırsa uyarı çıkabilir veya bazı özellikler kapanabilir. Bunu Modül 8'de müşteriyle iletişim konusunda tekrar ele alacağız.</p>
</div></div>
`
    }
  ],
  quiz: [
    { soru: 'Arkadan açılan cihazlarda genelde ilk sökülen parça hangisidir?', secenekler: ['Ekran', 'Arka cam / kapak', 'Anakart', 'Batarya'], dogru: 1, aciklama: 'Samsung, Xiaomi gibi birçok Android cihaz arkadan açılır. Ekran ancak değişim gerekirse sökülür.' },
    { soru: 'PMIC entegresinin görevi nedir?', secenekler: ['Fotoğraf işlemek', 'Şebeke sinyalini almak', 'Bataryadan gelen gücü parçalara uygun gerilimlere dağıtmak', 'Verileri saklamak'], dogru: 2, aciklama: 'PMIC (Power Management IC) güç dağıtımından sorumludur. Açılmama arızalarının sık şüphelisidir.' },
    { soru: 'OLED ekranın LCD\'den farkı nedir?', secenekler: ['Arka ışığa ihtiyaç duyar', 'Her piksel kendi ışığını üretir', 'Daha kalındır', 'Daha ucuzdur'], dogru: 1, aciklama: 'OLED\'de backlight yoktur. Bu yüzden gerçek siyah gösterebilir ve daha incedir.' },
    { soru: 'Tam dolu bir telefon bataryası yaklaşık kaç volt ölçülür?', secenekler: ['1.5 V', '3.0 V', '4.2–4.45 V', '12 V'], dogru: 2, aciklama: 'Li-ion hücreler tam dolulukta 4.2-4.45 V civarındadır. 3.0 V civarında cihaz kapanır.' },
    { soru: 'Flex konnektörü ayırmanın doğru yolu hangisidir?', secenekler: ['Kablodan tutup çekmek', 'Metal cımbızla kanırtmak', 'Plastik spudger ile konnektörün altından dikey kaldırmak', 'Isı tabancasıyla ısıtmak'], dogru: 2, aciklama: 'Plastik aletle, konnektörün kendisinden ve dikey kaldırmak hem kabloyu hem soketi korur.' },
    { soru: 'Orijinali OLED olan cihaza LCD ekran takılırsa ne olabilir?', secenekler: ['Hiçbir fark olmaz', 'Ekran daha ince olur', 'Renkler solar, pil daha hızlı biter, ekran içi parmak izi çalışmayabilir', 'Cihaz hızlanır'], dogru: 2, aciklama: 'Bu yüzden müşteriye ekran seçeneklerini önceden açıkça anlatmak gerekir.' }
  ]
};
