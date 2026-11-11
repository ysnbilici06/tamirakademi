// Modül 4: Söküm ve Montaj
TA.icerik.sokum = {
  dersler: [
    {
      id: 'planlama',
      baslik: 'Sökümü planlamak',
      sure: 6,
      html: `
<p>Söküme başlamadan önceki 5 dakikalık hazırlık, sonradan saatlerce uğraşmanı önler.</p>
<ol class="adimlar">
  <li><strong>Modeli kesin belirle:</strong> Aynı isimli modellerin farklı versiyonları olabilir (ör. 4G / 5G). Model numarası ayarlarda veya SIM yuvasında yazar.</li>
  <li><strong>Söküm rehberi bul:</strong> Fotoğraflı rehberlerden ve videolardan açılış yönünü, gizli vidaları ve tuzakları öğren.</li>
  <li><strong>Yedek parçayı önceden karşılaştır:</strong> Yeni parçanın flex şekli ve konnektörü eskisiyle aynı mı?</li>
  <li><strong>Veri yedeği:</strong> Mümkünse müşteriden yedek almasını iste. Tamir sırasında veri kaybı riski her zaman vardır.</li>
  <li><strong>Test listesi:</strong> Açmadan önce çalışan her şeyi test edip not al.</li>
</ol>
<div class="kutu ipucu"><span class="kutu-ikon">✓</span><div>
<p>Her sökümün fotoğrafını çek. Özellikle flex kabloların nasıl katlandığı ve vidaların nerede durduğu montajda hayat kurtarır.</p>
</div></div>
`
    },
    {
      id: 'yapistirici',
      baslik: 'Yapıştırıcılı kasaları açmak',
      sure: 10,
      html: `
<p>Modern telefonların çoğunda ekran veya arka cam güçlü bir yapıştırıcıyla kasaya tutturulur. Amaç su geçirmezliktir. Açmanın sırrı <strong>ısı, sabır ve doğru açıdır</strong>.</p>
<div data-bilesen="canlandirma" data-ad="ekran-acma"></div>

<h2>Sık yapılan hatalar</h2>
<ul>
  <li>Pick'i fazla derine sokup ekran flex'ini kesmek</li>
  <li>Isıyı tek noktada tutup OLED paneli yakmak (mor/siyah leke)</li>
  <li>Arka cam açarken cam kırılırsa parçaların sağa sola saçılması. Önce camın üzerini koli bandıyla kapla.</li>
  <li>Vantuzla aşırı kuvvet uygulamak</li>
</ul>

<div class="kutu uyari"><span class="kutu-ikon">!</span><div>
<p><strong>Kavisli (curved) ekranlar:</strong> Kenarları kıvrık OLED ekranlar çok kolay kırılır. Bu ekranlarda pick'i panele doğru değil, kasaya doğru açılı tut ve kenarları biraz daha uzun ısıt.</p>
</div></div>
`
    },
    {
      id: 'vidalar',
      baslik: 'Vidalar, braketler ve flex yönetimi',
      sure: 7,
      html: `
<p>Telefon içindeki metal braketler (kapaklar), konnektörlerin yerinden çıkmasını engeller. Bu braketler farklı uzunlukta vidalarla sabitlenir.</p>

<h2>Vida kuralları</h2>
<ul>
  <li>Tornavidayı vidaya tam oturt ve <strong>bastırarak</strong> çevir. Yalama genellikle yetersiz baskıdan olur.</li>
  <li>Takarken önce tersine çevirip "tık" hissedince düz çevir. Bu, dişin doğru oturmasını sağlar.</li>
  <li>Aşırı sıkma. Telefon vidaları çok küçüktür, parmak ucu kuvveti yeterlidir.</li>
</ul>

<h2>Flex yönetimi</h2>
<ul>
  <li>Flex'leri asla keskin katlama. Gerekirse bantla geçici olarak sabitle.</li>
  <li>Bazı flex'ler kasaya yapıştırılmıştır. Hafif ısıyla ve yavaşça kaldır.</li>
  <li>Montajda flex'in braket veya vida altında sıkışmadığından emin ol.</li>
</ul>
`
    },
    {
      id: 'montaj',
      baslik: 'Montaj, sızdırmazlık ve son test',
      sure: 8,
      html: `
<p>Montaj, sökümün tersidir. Ama birkaç kritik detay var.</p>
<ol class="adimlar">
  <li><strong>Önce test, sonra yapıştırma:</strong> Yeni parçayı yapıştırmadan bağla, bataryayı tak ve test et. Ekran, dokunmatik, kamera ve şarj çalışıyor mu? Yapıştırdıktan sonra sorun çıkarsa her şeye baştan başlarsın.</li>
  <li><strong>Eski yapıştırıcıyı tamamen temizle:</strong> Plastik kazıyıcı ve izopropil kullan. Kalan yapıştırıcı yeni parçanın yamuk oturmasına neden olur.</li>
  <li><strong>Yeni conta veya yapıştırıcı:</strong> Hazır kesimli conta en temiz sonucu verir. B-7000 gibi sıvı yapıştırıcıyı ince ve eşit sür.</li>
  <li><strong>Baskı uygula:</strong> Kıskaç veya lastik bantla birkaç saat sabitle.</li>
  <li><strong>Batarya konnektörü en son:</strong> Montajda bataryayı en son bağla.</li>
</ol>
<div class="kutu not"><span class="kutu-ikon">i</span><div>
<p><strong>Su geçirmezlik:</strong> Açılan bir cihaz, fabrika seviyesinde su geçirmez olarak geri toplanamaz. Müşteriye cihazı artık suya karşı korumalı kabul etmemesini söyle.</p>
</div></div>
<h2>Teslim öncesi test listesi</h2>
<ul>
  <li>Açılış, şarj, ekran parlaklığı, dokunmatik (tüm ekran)</li>
  <li>Ön ve arka kamera, flaş, mikrofon, hoparlör, ahize</li>
  <li>Yakınlık sensörü (görüşmede ekran kararıyor mu?), Wi-Fi, şebeke, Bluetooth</li>
  <li>Tuşlar, titreşim, parmak izi / yüz tanıma</li>
</ul>
`
    }
  ],
  quiz: [
    { soru: 'Yapıştırıcılı bir ekranı açmadan önce ne yapılır?', secenekler: ['Ekran soğutulur', 'Kenarlar yaklaşık 80 °C\'ye ısıtılır', 'Cihaz şarja takılır', 'Ekrana bastırılır'], dogru: 1, aciklama: 'Isı yapıştırıcıyı yumuşatır ve ayırmayı kolaylaştırır.' },
    { soru: 'Pick\'i ekran altına fazla derin sokmanın riski nedir?', secenekler: ['Ekran flex\'ini kesmek', 'Vidaları yalamak', 'Bataryayı şarj etmek', 'Riski yoktur'], dogru: 0, aciklama: 'Pick\'i yalnızca 2-3 mm içeri sok.' },
    { soru: 'Yeni parçayı ne zaman yapıştırmalısın?', secenekler: ['Test etmeden hemen', 'Bağlayıp test ettikten sonra', 'Bir gün sonra', 'Hiç yapıştırma'], dogru: 1, aciklama: 'Önce test, sonra yapıştırma. Böylece hatalı bir parça yüzünden işi baştan yapmazsın.' },
    { soru: 'Vida yalanmasının en sık nedeni nedir?', secenekler: ['Fazla baskı', 'Yetersiz baskı ve yanlış uç', 'Vidanın uzun olması', 'Isı'], dogru: 1, aciklama: 'Doğru uç ve sabit baskı yalamayı önler.' },
    { soru: 'Açılıp kapatılan bir cihazın su geçirmezliği hakkında müşteriye ne söylenmeli?', secenekler: ['Fabrika gibi su geçirmezdir', 'Artık suya karşı korumalı kabul edilmemeli', 'Daha su geçirmez oldu', 'Söylemeye gerek yok'], dogru: 1, aciklama: 'Dürüst bilgilendirme, sonradan doğabilecek şikâyetleri önler.' },
    { soru: 'Montajda batarya konnektörü ne zaman takılır?', secenekler: ['İlk olarak', 'En son', 'Ekrandan önce', 'Fark etmez'], dogru: 1, aciklama: 'Diğer bütün bağlantılar yapılmadan karta enerji verilmez.' }
  ]
};
