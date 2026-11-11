// Modül 3: Arıza Teşhisi
TA.icerik.teshis = {
  dersler: [
    {
      id: 'yontem',
      baslik: 'Teşhis yöntemi: tahmin değil, eleme',
      sure: 8,
      html: `
<p>İyi bir teknisyeni diğerlerinden ayıran şey, parça değiştirme hızı değil <strong>doğru teşhis</strong> koymasıdır. Rastgele parça değiştirmek hem para hem zaman kaybettirir, hem de müşterinin güvenini kaybettirir.</p>

<h2>Altın sıra: kolaydan zora</h2>
<ol class="adimlar">
  <li><strong>Dinle:</strong> Müşteriye ne olduğunu, ne zaman başladığını, cihazın düşüp düşmediğini veya ıslanıp ıslanmadığını sor.</li>
  <li><strong>Gözle:</strong> Kasa eğrilmiş mi? Sıvı göstergesi kırmızı mı? Ekranda çatlak var mı?</li>
  <li><strong>Dene:</strong> Farklı kablo, farklı şarj aleti, yeniden başlatma gibi ücretsiz denemeleri yap.</li>
  <li><strong>Ölç:</strong> USB ampermetre ve multimetreyle sayılarla konuş.</li>
  <li><strong>Değiştirerek dene:</strong> Bilinen sağlam bir parçayı geçici olarak takıp sonucu gör.</li>
  <li><strong>Kart seviyesi:</strong> Ancak her şey elendikten sonra anakarta in.</li>
</ol>

<div class="kutu ipucu"><span class="kutu-ikon">✓</span><div>
<p><strong>Sıvı göstergesi (LCI):</strong> Birçok cihazda SIM yuvası içinde ya da kasa içinde, ıslanınca beyazdan kırmızıya dönen küçük çıkartmalar bulunur. Kırmızıysa sıvı teması olmuş demektir.</p>
</div></div>

<h2>Müşteri formu</h2>
<p>Teşhise başlamadan önce cihazın durumunu yaz: Çizikler, çalışan ve çalışmayan özellikler (kamera, Face ID, parmak izi, ses...). Bu kayıt, sonradan "bu da önceden çalışıyordu" tartışmalarını önler.</p>
`
    },
    {
      id: 'sihirbaz',
      baslik: 'Etkileşimli arıza teşhis sihirbazı',
      sure: 10,
      html: `
<p>Aşağıdaki sihirbaz, bir teknisyenin kafasındaki soru-cevap akışını taklit eder. Bir belirti seç ve soruları cevapla. Her sonuçta olası nedenler ve yapman gerekenler listelenir.</p>
<div data-bilesen="teshis"></div>
<div class="kutu not"><span class="kutu-ikon">i</span><div>
<p>Sihirbaz bir rehberdir, kesin hüküm vermez. Gerçek hayatta birden fazla arıza aynı anda olabilir. Her zaman ölçümle doğrula.</p>
</div></div>
`
    },
    {
      id: 'ampermetre',
      baslik: 'USB ampermetre ile okuma',
      sure: 8,
      html: `
<p>USB ampermetre, şarj kablosu ile cihaz arasına takılan küçük bir ölçü aletidir. Cihazın çektiği akımı gösterir. Ucuzdur ama şarj ve açılmama arızalarında en çok bilgi veren alettir.</p>

<div class="tablo-kap"><table>
  <thead><tr><th>Okuma (cihaz kapalı, şarja takılı)</th><th>Olası anlam</th></tr></thead>
  <tbody>
    <tr><td><strong>0.00 A</strong></td><td>Akım hiç geçmiyor: soket, şarj flex'i, sigorta veya şarj entegresi</td></tr>
    <tr><td><strong>0.01 – 0.10 A</strong>, sabit</td><td>Batarya tamamen bitmiş ve yavaş canlanıyor olabilir ya da batarya hiç algılanmıyor</td></tr>
    <tr><td><strong>0.5 – 2+ A</strong>, normal</td><td>Şarj çalışıyor. Sorun başka yerde (ekran, yazılım).</td></tr>
    <tr><td>Yüksek ve sabit akım, cihaz ısınıyor</td><td>Kısa devre olasılığı yüksek</td></tr>
    <tr><td>Akım bir yükselip düşüyor, döngü yapıyor</td><td>Cihaz açılmaya çalışıp kapanıyor (bootloop / güç sorunu)</td></tr>
  </tbody>
</table></div>

<div class="kutu uyari"><span class="kutu-ikon">!</span><div>
<p>Bu değerler genel rehberdir. Hızlı şarj protokolleri (PD, QC) gerilimi 9 V ve üstüne çıkarabilir. Ampermetre ekranında hem voltu hem amperi birlikte değerlendir.</p>
</div></div>
`
    },
    {
      id: 'sivi',
      baslik: 'Sıvı teması gören cihaz',
      sure: 7,
      html: `
<p>Sıvı teması en zor arızalardandır, çünkü hasar zamanla ilerler. Elektrik akımı ile su birleşince anakartta hızlı bir <strong>korozyon</strong> (oksitlenme) başlar.</p>

<h2>İlk müdahale</h2>
<ol class="adimlar">
  <li>Cihazı kesinlikle şarja takma ve açmaya çalışma.</li>
  <li>Mümkün olan en kısa sürede aç ve batarya konnektörünü ayır.</li>
  <li>Anakartı sök. Kalkanların altına da bak, korozyon genelde oralarda saklanır.</li>
  <li>%99 izopropil alkol ve yumuşak antistatik fırçayla temizle. Varsa ultrasonik temizleyici kullan.</li>
  <li>Tamamen kuruduktan sonra konnektörleri tek tek takıp test et.</li>
</ol>

<div class="kutu tehlike"><span class="kutu-ikon">!</span><div>
<p><strong>Pirinç efsanesi:</strong> Islak telefonu pirince koymak korozyonu durdurmaz. Sadece zaman kaybettirir. Bu sürede oksit ilerlemeye devam eder.</p>
</div></div>

<p><strong>Müşteriye dürüst ol:</strong> Sıvı temaslı cihazlarda, tamirden sonra bile ileride yeni arızalar çıkabilir. Bunu önceden yazılı olarak bildir.</p>
`
    }
  ],
  quiz: [
    { soru: 'Doğru teşhis sırası hangisidir?', secenekler: ['Anakart → ölçüm → dinleme', 'Dinle → gözle → dene → ölç → parça değiştirerek dene', 'Hemen ekranı değiştir', 'Önce yazılım yükle'], dogru: 1, aciklama: 'Kolaydan zora gitmek gereksiz masrafı ve zaman kaybını önler.' },
    { soru: 'USB ampermetre cihaz kapalı ve şarjdayken 0.00 A gösteriyor. En olası neden?', secenekler: ['Ekran arızası', 'Şarj hattında kopukluk (soket, flex, sigorta)', 'Hoparlör arızası', 'Yazılım hatası'], dogru: 1, aciklama: 'Hiç akım geçmiyorsa sorun şarj yolundadır.' },
    { soru: 'Sıvı göstergesi (LCI) ıslanınca ne olur?', secenekler: ['Yeşile döner', 'Kırmızıya döner', 'Kaybolur', 'Hiçbir şey olmaz'], dogru: 1, aciklama: 'Beyaz veya gümüş renkli gösterge sıvıyla temas edince kırmızı/pembe olur.' },
    { soru: 'Islanan telefonu pirince koymak için ne söylenebilir?', secenekler: ['En iyi çözümdür', 'Korozyonu durdurmaz, zaman kaybettirir', 'Sadece iPhone\'larda işe yarar', 'Bataryayı şarj eder'], dogru: 1, aciklama: 'Doğru yöntem bataryayı ayırıp kartı izopropille temizlemektir.' },
    { soru: 'Yüksek ve sabit akım çeken, ısınan bir cihazda ilk şüphe nedir?', secenekler: ['Kısa devre', 'Ekran kırığı', 'Kirli şarj soketi', 'Bozuk kamera'], dogru: 0, aciklama: 'Kısa devre, akımı ısıya dönüştürür. Isınan parça arızanın yerini gösterir.' },
    { soru: 'Teşhisten önce müşteri formuna neden cihazın durumunu yazarız?', secenekler: ['Yasal zorunluluk olduğu için', 'Sonradan "bu da önceden çalışıyordu" tartışmalarını önlemek için', 'Fiyatı artırmak için', 'Gerek yoktur'], dogru: 1, aciklama: 'Kayıt, hem seni hem müşteriyi korur.' }
  ]
};
