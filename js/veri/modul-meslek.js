// Modül 8: Mesleğe Dönüştürme
TA.icerik.meslek = {
  dersler: [
    {
      id: 'parca',
      baslik: 'Parça tedariki ve kalite',
      sure: 8,
      html: `
<p>Tamirin kalitesi büyük ölçüde parçanın kalitesine bağlıdır. İyi bir tedarikçi ağı, işini büyütmenin temelidir.</p>
<h2>Parça kalite seviyeleri</h2>
<div class="tablo-kap"><table>
  <thead><tr><th>Seviye</th><th>Açıklama</th><th>Ne zaman?</th></tr></thead>
  <tbody>
    <tr><td>Orijinal (servis paketi)</td><td>Üreticinin resmi yedek parçası</td><td>En kaliteli iş, en yüksek fiyat</td></tr>
    <tr><td>Sökme orijinal / yenilenmiş</td><td>Başka cihazdan çıkmış veya camı değiştirilmiş orijinal</td><td>Orta fiyat, iyi kalite</td></tr>
    <tr><td>Uyumlu (aftermarket)</td><td>Üçüncü taraf üretimi</td><td>Uygun fiyatlı çözüm, kalitesi değişken</td></tr>
  </tbody>
</table></div>
<h2>Tedarikçi seçerken</h2>
<ul>
  <li>Arızalı parçayı iade veya değişim politikası var mı?</li>
  <li>Parçalar test edilip mi gönderiliyor?</li>
  <li>Önce küçük siparişle dene. Kaliteyi gördükten sonra büyüt.</li>
  <li>Sık kullanılan parçalardan (popüler modellerin ekran ve bataryası) küçük bir stok tut.</li>
</ul>
`
    },
    {
      id: 'fiyat',
      baslik: 'Fiyatlandırma',
      sure: 8,
      html: `
<p>Çok ucuz fiyat zarar ettirir, çok pahalı fiyat ise müşteri kaçırır. Fiyatını bir hesaba dayandır.</p>
<div class="formul">Tamir fiyatı = Parça maliyeti + İşçilik (süre × saatlik ücret) + Risk payı + Genel giderler</div>
<ul>
  <li><strong>İşçilik:</strong> Ekran değişimi 45 dakika sürüyorsa bu süreyi ücretlendir.</li>
  <li><strong>Risk payı:</strong> Bazı işlerde (kavisli ekran, arka cam) kırma ihtimali vardır. Bu ihtimali fiyata yansıt.</li>
  <li><strong>Genel giderler:</strong> Kira, elektrik, alet aşınması ve sarf malzemesi (yapıştırıcı, alkol, flux)</li>
</ul>
<div class="kutu ipucu"><span class="kutu-ikon">✓</span><div>
<p><strong>Kademeli fiyat sun:</strong> "Uyumlu ekran X TL, orijinal ekran Y TL." Müşteriye seçim hakkı vermek güveni artırır ve itirazları azaltır.</p>
</div></div>
<div class="kutu not"><span class="kutu-ikon">i</span><div>
<p><strong>Teşhis ücreti:</strong> Kart seviyesi arızalarda teşhis saatler sürebilir. Tamir yapılmasa bile teşhis ücreti alınacağını önceden söyle.</p>
</div></div>
`
    },
    {
      id: 'musteri',
      baslik: 'Müşteri iletişimi ve garanti',
      sure: 9,
      html: `
<h2>Cihaz kabulü</h2>
<ol class="adimlar">
  <li>Cihazın fiziksel durumunu müşteriyle birlikte kontrol et ve fotoğrafla.</li>
  <li>Çalışan ve çalışmayan özellikleri forma yaz.</li>
  <li>Fiyat ve süre tahminini yazılı ver. Ek arıza çıkarsa önce müşteriyi arayacağını belirt.</li>
  <li>Veri kaybı riski, su geçirmezlik kaybı ve parça kalitesi hakkında bilgilendir. Formu imzalat.</li>
</ol>
<h2>Garanti</h2>
<ul>
  <li>Yapılan işe ve takılan parçaya belirli bir süre garanti ver (ör. 3-6 ay).</li>
  <li>Garanti kapsamını açıkça yaz: Düşme, sıvı teması ve başka yerde açılma genelde garanti dışıdır.</li>
  <li>Parçaya küçük bir garanti etiketi veya işaret koymak, sonradan çıkacak anlaşmazlıkları azaltır.</li>
</ul>
<div class="kutu ipucu"><span class="kutu-ikon">✓</span><div>
<p><strong>Güven, en iyi reklamdır.</strong> Gereksiz parça değiştirme. Basit bir temizlikle çözülen işte dürüst ol. O müşteri sana geri döner ve çevresine de seni önerir.</p>
</div></div>
`
    },
    {
      id: 'baslangic',
      baslik: 'İşe başlamak: yol haritası',
      sure: 8,
      html: `
<ol class="adimlar">
  <li><strong>Pratik yap:</strong> Hurda cihazlarla en az 20-30 söküm yap. Hız ve özgüven pratikle gelir.</li>
  <li><strong>Çevrene hizmet ver:</strong> Aile ve arkadaşların cihazlarıyla başla. Basit işlerden (batarya, soket temizliği) zora git.</li>
  <li><strong>Deneyim kazan:</strong> Bir serviste çırak veya yardımcı olarak çalışmak, en hızlı öğrenme yoludur.</li>
  <li><strong>Yasal düzen:</strong> Ticari faaliyet için vergi kaydı, işyeri ruhsatı ve fatura düzeni gerekir. Bir mali müşavire danış.</li>
  <li><strong>Görünür ol:</strong> Harita kaydı, sosyal medya ve müşteri yorumları. Yaptığın işlerin önce/sonra fotoğraflarını paylaş.</li>
  <li><strong>Uzmanlaş:</strong> Mikro lehim, veri kurtarma veya belirli bir marka gibi bir alanda derinleşmek seni öne çıkarır.</li>
</ol>
<div class="kutu not"><span class="kutu-ikon">i</span><div>
<p>Elektronik atıkları (bataryalar, kırık ekranlar) lisanslı toplama noktalarına teslim et. Çevreye duyarlı bir servis olmak hem yasal gerekliliktir hem de iyi bir itibar kazandırır.</p>
</div></div>
<p>Tebrikler! Bu modülü bitirdiğinde <a href="#/final">final sınavına</a> girip <strong>sertifikanı</strong> alabilirsin.</p>
`
    }
  ],
  quiz: [
    { soru: 'Tamir fiyatına hangisi dahil edilmez?', secenekler: ['Parça maliyeti', 'İşçilik', 'Risk payı', 'Müşterinin aylık geliri'], dogru: 3, aciklama: 'Fiyat, maliyet, emek ve riske göre belirlenir.' },
    { soru: 'Cihaz kabulünde neden fotoğraf çekilir?', secenekler: ['Sosyal medya için', 'Önceden var olan hasarları belgelemek için', 'Zorunlu değil', 'Fiyatı artırmak için'], dogru: 1, aciklama: 'Belgelemek, sonradan çıkabilecek anlaşmazlıkları önler.' },
    { soru: 'Kademeli fiyat (uyumlu / orijinal) sunmanın faydası nedir?', secenekler: ['Müşteriyi karıştırmak', 'Seçim hakkı vererek güveni artırmak', 'Daha az kazanmak', 'Hiçbiri'], dogru: 1, aciklama: 'Şeffaflık güven oluşturur.' },
    { soru: 'Genelde garanti dışı kalan durum hangisidir?', secenekler: ['Takılan parçanın kendiliğinden arızalanması', 'Sonradan düşme veya sıvı teması', 'Montaj hatası', 'Konnektör gevşemesi'], dogru: 1, aciklama: 'Kullanıcı kaynaklı yeni hasarlar genelde garanti kapsamı dışındadır.' },
    { soru: 'Yeni başlayan biri için en iyi öğrenme yolu nedir?', secenekler: ['Doğrudan müşteri cihazı açmak', 'Hurda cihazlarla pratik yapmak ve bir serviste deneyim kazanmak', 'Sadece video izlemek', 'Hemen dükkan açmak'], dogru: 1, aciklama: 'Pratik ve usta yanında çalışmak en hızlı gelişim yoludur.' },
    { soru: 'Kullanılmış bataryalar ne yapılmalı?', secenekler: ['Çöpe atılmalı', 'Lisanslı toplama noktalarına teslim edilmeli', 'Yakılmalı', 'Müşteriye geri verilmeli'], dogru: 1, aciklama: 'Lityum bataryalar tehlikeli atıktır.' }
  ]
};
