// Modül 6: İleri Seviye
TA.icerik.ileri = {
  dersler: [
    {
      id: 'multimetre',
      baslik: 'Multimetre ile ölçüm',
      sure: 12,
      html: `
<p>Multimetre, kart seviyesi tamirin gözüdür. Dört temel mod öğrenmen yeterli:</p>
<div class="tablo-kap"><table>
  <thead><tr><th>Mod</th><th>Ne ölçer?</th><th>Ne zaman?</th></tr></thead>
  <tbody>
    <tr><td><strong>V ⎓</strong> (DC gerilim)</td><td>İki nokta arasındaki gerilim</td><td>Enerjili devrede (batarya, şarj hattı)</td></tr>
    <tr><td><strong>Ω</strong> (direnç)</td><td>Bir parçanın direnci</td><td>Enerji <strong>kesikken</strong></td></tr>
    <tr><td><strong>🔊</strong> (süreklilik)</td><td>İki nokta bağlı mı? Bağlıysa bip sesi verir.</td><td>Sigorta ve hat kontrolü, enerjisiz</td></tr>
    <tr><td><strong>▷|</strong> (diyot modu)</td><td>Bir hattın toprağa göre "diyot değeri"</td><td>Kart seviyesi karşılaştırma, enerjisiz</td></tr>
  </tbody>
</table></div>

<h2>Sanal multimetreyle dene</h2>
<p>Bir mod seç ve probları farklı noktalara "değdir". Değerleri ve açıklamaları incele.</p>
<div data-bilesen="multimetre"></div>

<div class="kutu ipucu"><span class="kutu-ikon">✓</span><div>
<p><strong>Diyot değeri karşılaştırması:</strong> Profesyoneller, sağlam bir kartta konnektör pinlerinin diyot değerlerini ölçüp kaydeder. Arızalı kartta değeri farklı çıkan pin, arızanın bulunduğu hattı gösterir.</p>
</div></div>
`
    },
    {
      id: 'kisa-devre',
      baslik: 'Kısa devre bulma',
      sure: 10,
      html: `
<p>Kısa devre, bir gerilim hattının doğrudan toprağa bağlanmasıdır. Genelde arızalı küçük bir kondansatör yüzünden olur. Hat üzerinde onlarca kondansatör olabilir. Sorun, hangisi olduğunu bulmaktır.</p>
<h2>Yöntemler</h2>
<ol class="adimlar">
  <li><strong>Güç kaynağı enjeksiyonu:</strong> Ayarlı güç kaynağını kısa devreli hatta düşük gerilimle (ör. 1 V) ve akım sınırıyla bağla. Kısa devreli parça ısınmaya başlar.</li>
  <li><strong>Isınan parçayı bul:</strong>
    <ul>
      <li><strong>Termal kamera:</strong> En hızlı yöntemdir.</li>
      <li><strong>İzopropil alkol:</strong> Karta sür. İlk kuruyan nokta sıcak noktadır.</li>
      <li><strong>Reçine dumanı (rosin):</strong> Karta ince bir reçine tabakası uygula. Isınan yerde reçine erir.</li>
      <li><strong>Parmak:</strong> Düşük gerilimde parmak ucuyla sıcaklık hissedilebilir.</li>
    </ul>
  </li>
  <li><strong>Doğrula:</strong> Parçayı sök ve kısa devrenin kalkıp kalkmadığını ölç.</li>
</ol>
<div class="kutu tehlike"><span class="kutu-ikon">!</span><div>
<p>Enjeksiyon yaparken gerilimi hattın normal çalışma geriliminin üzerine çıkarma ve akım sınırını mutlaka ayarla. Aksi halde sağlam entegreleri de yakarsın.</p>
</div></div>
`
    },
    {
      id: 'lehim',
      baslik: 'Mikro lehime giriş',
      sure: 12,
      html: `
<p>Mikro lehim, mikroskop altında milimetrenin altındaki parçalarla çalışmaktır. Öğrenmesi zaman alır. Önce hurda kartlarla pratik yapılmalıdır.</p>
<div data-bilesen="canlandirma" data-ad="lehim"></div>
<h2>Temel malzemeler</h2>
<ul>
  <li><strong>Flux:</strong> Yapışkan (jel) flux. En önemli malzemedir.</li>
  <li><strong>Lehim teli ve pasta:</strong> İnce tel (0.2-0.3 mm) ve düşük sıcaklık pastası</li>
  <li><strong>Lehim fitili (wick):</strong> Fazla lehimi emer</li>
  <li><strong>Kapton bant ve alüminyum folyo:</strong> Çevredeki parçaları ısıdan korur</li>
</ul>
<h2>Sıcak hava kullanımı</h2>
<ul>
  <li>Küçük SMD parçalar için 330–380 °C, düşük hava akışı</li>
  <li>Plastik konnektörlerin ve kameraların yakınındaysan folyo ile koru</li>
  <li>Hava ucunu dairesel hareket ettir. Parçayı ancak lehim tamamen eriyince cımbızla kaldır.</li>
</ul>
<div class="kutu not"><span class="kutu-ikon">i</span><div>
<p><strong>Önerilen pratik sırası:</strong> Hurda bir kartta önce kondansatör sök-tak, sonra konnektör, sonra küçük entegreler. BGA çip ve reball (yeniden bilyeleme) en son öğrenilir.</p>
</div></div>
`
    },
    {
      id: 'sema',
      baslik: 'Şema ve kart haritası okuma',
      sure: 8,
      html: `
<p>Kart seviyesi tamirde iki belge kullanılır: <strong>şema</strong> (devrenin mantıksal çizimi) ve <strong>kart haritası / boardview</strong> (parçaların kart üzerindeki fiziksel yerleri).</p>
<ul>
  <li><strong>Şemada</strong> bir hattın adını (ör. VBUS, VCC_MAIN, PP_VDD_MAIN) ve hangi parçalardan geçtiğini görürsün.</li>
  <li><strong>Boardview'de</strong> o hattın kart üzerindeki bütün noktaları vurgulanır. Ölçeceğin yeri böylece bulursun.</li>
</ul>
<div class="tablo-kap"><table>
  <thead><tr><th>Sık görülen kısaltma</th><th>Anlamı</th></tr></thead>
  <tbody>
    <tr><td>VBUS</td><td>Şarj soketinden gelen 5 V (veya daha yüksek) hat</td></tr>
    <tr><td>VBAT / VCC_MAIN</td><td>Batarya / sistem ana gerilim hattı</td></tr>
    <tr><td>GND</td><td>Toprak (eksi)</td></tr>
    <tr><td>C, R, L, D, U, FL</td><td>Kondansatör, direnç, bobin, diyot, entegre, filtre</td></tr>
  </tbody>
</table></div>
<div class="kutu uyari"><span class="kutu-ikon">!</span><div>
<p>Şema ve boardview yazılımları genelde ücretli lisanslarla dağıtılır. Güvenilir ve yasal kaynaklardan edin.</p>
</div></div>
`
    }
  ],
  quiz: [
    { soru: 'Direnç (Ω) ölçümü hangi koşulda yapılır?', secenekler: ['Cihaz açıkken', 'Enerji kesikken', 'Şarjdayken', 'Fark etmez'], dogru: 1, aciklama: 'Enerjili devrede direnç ölçmek hatalı sonuç verir ve ölçü aletine zarar verebilir.' },
    { soru: 'Multimetrede "OL" ne anlama gelir?', secenekler: ['Kısa devre', 'Açık devre / ölçüm sınırının üstü', 'Batarya dolu', 'Hata yok'], dogru: 1, aciklama: 'OL (Over Limit), iki nokta arasında iletim olmadığını gösterir.' },
    { soru: 'Kısa devreli parçayı bulmak için hangisi KULLANILMAZ?', secenekler: ['Termal kamera', 'İzopropil alkol', 'Reçine dumanı', 'Bataryayı ters bağlamak'], dogru: 3, aciklama: 'Ters bağlantı yeni hasarlar yaratır. Diğer üçü bilinen güvenli yöntemlerdir.' },
    { soru: 'Mikro lehimde en önemli yardımcı malzeme nedir?', secenekler: ['Su', 'Flux', 'Yapıştırıcı', 'Silikon'], dogru: 1, aciklama: 'Flux oksidi temizler ve lehimin akmasını sağlar.' },
    { soru: 'Boardview ne işe yarar?', secenekler: ['Parçaların kart üzerindeki fiziksel yerini gösterir', 'Yazılım yükler', 'Bataryayı test eder', 'Ekranı kalibre eder'], dogru: 0, aciklama: 'Şema mantığı gösterir, boardview ise fiziksel yerleşimi.' },
    { soru: 'İyi bir lehim noktası nasıl görünür?', secenekler: ['Mat ve top şeklinde', 'Parlak ve içbükey koni şeklinde', 'Çatlak', 'Siyah'], dogru: 1, aciklama: 'Mat ve top şeklinde görünen noktalar soğuk lehim işaretidir.' }
  ]
};
