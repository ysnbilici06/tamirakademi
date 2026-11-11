// Modül 5: Yaygın Tamirler
TA.icerik.tamirler = {
  dersler: [
    {
      id: 'ekran',
      baslik: 'Ekran değişimi',
      sure: 12,
      html: `
<p>Ekran değişimi, servislerde en sık yapılan iştir. Doğru yapıldığında 30-60 dakika sürer.</p>
<div class="tablo-kap"><table>
  <tbody>
    <tr><th>Zorluk</th><td>Orta</td></tr>
    <tr><th>Gereken aletler</th><td>Isı kaynağı, vantuz, pick'ler, spudger, tornavida seti, yapıştırıcı veya conta</td></tr>
    <tr><th>Risk</th><td>Flex kesme, OLED'i ısıyla yakma, ön kamera ve sensör hizalama</td></tr>
  </tbody>
</table></div>
<h2>Adımlar</h2>
<ol class="adimlar">
  <li>Cihazı kapat, varsa alt vidaları sök.</li>
  <li>Ekranı ısıt ve aç. Arkadan açılan modellerde önce arka camı, sonra iç kapakları sök.</li>
  <li><strong>Bataryayı ayır.</strong></li>
  <li>Ekran flex braketini sök ve ekran konnektörlerini ayır.</li>
  <li>Eski ekrandan aktarılması gereken parçalar varsa (kulaklık hoparlörü, sensör flex'i, braketler) dikkatlice aktar.</li>
  <li>Yeni ekranı bağla, bataryayı tak ve <strong>yapıştırmadan test et</strong>.</li>
  <li>Eski yapıştırıcıyı temizle, yeni contayı uygula, kapat ve baskıda beklet.</li>
</ol>
<div class="kutu uyari"><span class="kutu-ikon">!</span><div>
<p><strong>Ekran kalite seviyeleri:</strong> Orijinal (servis paketi), yenilenmiş orijinal (refurb), uyumlu OLED, uyumlu LCD (incell). Fiyat ve kalite farkını müşteriye yazılı olarak açıkla.</p>
</div></div>
`
    },
    {
      id: 'batarya',
      baslik: 'Batarya değişimi',
      sure: 10,
      html: `
<p>Batarya değişimi, cihaza "ikinci hayat" veren en uygun maliyetli tamirdir. Batarya sağlığı %80'in altına düştüğünde değişim önerilir.</p>
<div data-bilesen="canlandirma" data-ad="batarya-degisim"></div>
<h2>Önemli noktalar</h2>
<ul>
  <li>Şarjı %25'in altına indir.</li>
  <li>Yeni bataryanın kapasitesi, gerilimi ve konnektörü eskisiyle aynı olmalı.</li>
  <li>Kalitesiz bataryalar şişebilir. Bilinen tedarikçiden al.</li>
  <li>Taktıktan sonra cihazı birkaç kez tam şarj ve deşarj et. Batarya yüzdesi kalibre olur.</li>
</ul>
<div class="kutu not"><span class="kutu-ikon">i</span><div>
<p>Bazı modellerde orijinal olmayan bataryalarda "batarya sağlığı" gösterilmez ya da uyarı çıkar. Bu, bataryanın çalışmadığı anlamına gelmez. Müşteriye önceden bilgi ver.</p>
</div></div>
`
    },
    {
      id: 'sarj',
      baslik: 'Şarj soketi ve alt bord değişimi',
      sure: 9,
      html: `
<p>Şarj soketi en çok yıpranan parçalardandır. Çoğu Android cihazda soket ayrı bir <strong>alt bord</strong> üzerindedir ve değişimi kolaydır. Bazı modellerde ise soket anakarta lehimlidir.</p>
<h2>Alt bord değişimi</h2>
<ol class="adimlar">
  <li>Cihazı aç ve bataryayı ayır.</li>
  <li>Alt hoparlörü veya alt kapağı sök (genelde vidalı).</li>
  <li>Ana flex'i ve anten koaksiyel kablolarını ayır. Koaksiyel kabloların konnektörleri çok küçüktür, dikey kaldır.</li>
  <li>Alt bordu sök, yenisini tak ve kabloları aynı yolları izleyecek şekilde yerleştir.</li>
  <li>Şarj, mikrofon ve şebeke (anten bağlantısı) testini yap.</li>
</ol>
<div class="kutu ipucu"><span class="kutu-ikon">✓</span><div>
<p>Değişimden önce mutlaka soketi temizlemeyi dene. "Şarj olmuyor" şikâyetlerinin önemli bir kısmı sadece soketteki tüylerden kaynaklanır.</p>
</div></div>
<div class="kutu uyari"><span class="kutu-ikon">!</span><div>
<p><strong>Lehimli soket:</strong> Anakarta lehimli soketler sıcak hava ve mikro lehim becerisi gerektirir. Bu iş Modül 6 tamamlanmadan denenmemeli.</p>
</div></div>
`
    },
    {
      id: 'kamera-tus',
      baslik: 'Kamera, kamera camı ve tuş değişimi',
      sure: 8,
      html: `
<h2>Kamera modülü</h2>
<p>Kamera modülü genelde konnektörle takılıdır ve değişimi kolaydır. Değişimden sonra odaklama, video kaydı ve tüm kamera modlarını (geniş açı, zoom) test et.</p>
<h2>Kamera camı</h2>
<p>Sadece dış cam kırıksa modülü değiştirmeye gerek yoktur. Kırık camı ısıtarak ve parçaları dikkatle alarak çıkar. Lens üstünde toz kalmamasına dikkat et, yeni camı yapıştır.</p>
<div class="kutu tehlike"><span class="kutu-ikon">!</span><div>
<p>Kırık kamera camını çıkarırken cam parçacıkları lense ve göze kaçabilir. Koruyucu gözlük kullan.</p>
</div></div>
<h2>Tuşlar</h2>
<p>Güç ve ses tuşları genelde bir flex kabloya bağlıdır ve bu flex kasanın içine yapıştırılmıştır. Basmayan tuşlarda önce kir veya sıvı kalıntısına bak. Flex değişimi gerekiyorsa anakartı çıkarmak gerekebilir.</p>
`
    }
  ],
  quiz: [
    { soru: 'Batarya değişimi genelde batarya sağlığı yüzde kaçın altına düşünce önerilir?', secenekler: ['%99', '%95', '%80', '%20'], dogru: 2, aciklama: 'Üreticilerin çoğu %80\'in altını "servis gerekli" olarak kabul eder.' },
    { soru: 'Ekran değişiminde yeni ekranı yapıştırmadan önce ne yapılmalı?', secenekler: ['Cihazı kapatıp beklemek', 'Bağlayıp test etmek', 'Ekranı ısıtmak', 'Hiçbir şey'], dogru: 1, aciklama: 'Arızalı yedek parçayla yapıştırmak zaman ve malzeme kaybettirir.' },
    { soru: '"Şarj olmuyor" şikâyetinde soket değişiminden önce ne denenmeli?', secenekler: ['Yazılım güncellemesi', 'Soketi temizlemek', 'Ekran değişimi', 'Batarya değişimi'], dogru: 1, aciklama: 'Soketteki tüyler sık bir nedendir ve temizlemek ücretsizdir.' },
    { soru: 'Alt bord değişiminden sonra hangi testler mutlaka yapılmalı?', secenekler: ['Yalnızca şarj', 'Şarj, mikrofon ve şebeke', 'Sadece kamera', 'Hiçbiri'], dogru: 1, aciklama: 'Alt bord üzerinde mikrofon ve anten bağlantıları da bulunabilir.' },
    { soru: 'Kırık kamera camı değişiminde neye dikkat edilmeli?', secenekler: ['Koruyucu gözlük ve lense toz kaçırmamak', 'Lensi alkolle yıkamak', 'Isı kullanmamak', 'Modülü hep değiştirmek'], dogru: 0, aciklama: 'Cam parçacıkları hem göz hem lens için risklidir.' },
    { soru: 'Uyumlu (aftermarket) bataryalarda bazı modellerde ne görülebilir?', secenekler: ['Daha hızlı şarj', 'Batarya sağlığı göstergesinde uyarı veya bilgi gösterilmemesi', 'Daha uzun garanti', 'Hiçbir fark'], dogru: 1, aciklama: 'Bu bir çalışma sorunu değildir ama müşteriye önceden söylenmelidir.' }
  ]
};
