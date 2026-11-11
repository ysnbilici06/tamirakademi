// Modül 7: Yazılım Tarafı
TA.icerik.yazilim = {
  dersler: [
    {
      id: 'once-yazilim',
      baslik: 'Donanım mı, yazılım mı?',
      sure: 7,
      html: `
<p>Bazı arızalar donanım gibi görünür ama aslında yazılım kaynaklıdır. Cihazı açmadan önce yazılımı elemek, gereksiz söküm yapmanı önler.</p>
<h2>Hızlı yazılım kontrolleri</h2>
<ol class="adimlar">
  <li><strong>Zorla yeniden başlatma:</strong> Çoğu cihazda güç tuşu ile ses kısma tuşuna 10-15 saniye basılı tutulur.</li>
  <li><strong>Güvenli mod:</strong> Android'de yalnızca sistem uygulamalarıyla açılır. Sorun güvenli modda yoksa bir uygulama sorumludur.</li>
  <li><strong>Güncellemeler:</strong> Bilinen hatalar güncellemeyle düzelmiş olabilir.</li>
  <li><strong>Teşhis menüleri:</strong> Birçok markanın donanım test uygulaması veya gizli test menüsü vardır. Ekran, dokunmatik ve sensörleri test edebilirsin.</li>
</ol>
<div class="kutu ipucu"><span class="kutu-ikon">✓</span><div>
<p><strong>Örnek:</strong> "Dokunmatik bazen çalışmıyor" şikâyeti bir ekran koruyucu yazılımından ya da bozuk bir uygulamadan kaynaklanabilir. Önce güvenli modda dene.</p>
</div></div>
`
    },
    {
      id: 'sifirlama',
      baslik: 'Yedekleme, sıfırlama ve yazılım yükleme',
      sure: 10,
      html: `
<div class="kutu tehlike"><span class="kutu-ikon">!</span><div>
<p><strong>Veri her şeyden değerlidir.</strong> Fabrika ayarlarına sıfırlama ve yazılım yükleme genellikle bütün verileri siler. Müşteriden <strong>yazılı onay</strong> almadan asla yapma.</p>
</div></div>
<h2>Seçenekler (en az riskliden en çoğa)</h2>
<div class="tablo-kap"><table>
  <thead><tr><th>İşlem</th><th>Veri</th><th>Ne zaman?</th></tr></thead>
  <tbody>
    <tr><td>Önbellek temizliği (Android recovery)</td><td>Korunur</td><td>Güncelleme sonrası yavaşlık, uygulama çökmeleri</td></tr>
    <tr><td>Güncelleme / onarım yüklemesi</td><td>Genelde korunur</td><td>Bootloop, bozuk güncelleme</td></tr>
    <tr><td>Fabrika ayarlarına sıfırlama</td><td><strong>Silinir</strong></td><td>Ciddi yazılım bozulması, cihaz satışı</td></tr>
    <tr><td>Resmi yazılımı bilgisayardan temiz yükleme</td><td><strong>Silinir</strong></td><td>Hiçbir şey çalışmadığında</td></tr>
  </tbody>
</table></div>
<h2>Resmi araçları kullan</h2>
<p>Her üreticinin kendi resmi yazılım yükleme veya kurtarma aracı vardır. Kaynağı belirsiz yazılım dosyaları cihaza zararlı yazılım bulaştırabilir ya da cihazı kalıcı olarak bozabilir.</p>
<div class="kutu not"><span class="kutu-ikon">i</span><div>
<p>Kurtarma moduna giriş tuş kombinasyonları markaya göre değişir. Modelin resmi destek sayfasına bak.</p>
</div></div>
`
    },
    {
      id: 'kilitler',
      baslik: 'FRP, iCloud ve hesap kilitleri: etik ve yasal sınırlar',
      sure: 9,
      html: `
<p><strong>FRP</strong> (Factory Reset Protection, Google) ve <strong>Etkinleştirme Kilidi</strong> (Apple iCloud) gibi korumalar, çalınan telefonların başkaları tarafından kullanılmasını engellemek için vardır. Cihaz sıfırlandığında, ancak önceki hesabın şifresi girilirse açılır.</p>
<div class="kutu tehlike"><span class="kutu-ikon">⚖</span><div>
<p><strong>Bu korumaları atlatmak, cihaz sahibinin onayı olmadan yapıldığında hırsızlığa yardım etmektir.</strong> Türkiye dahil birçok ülkede bu tür işlemler suç teşkil edebilir. Ayrıca kayıt dışı veya çalıntı cihazla iş yapmak, mesleki itibarını kalıcı olarak yok eder.</p>
</div></div>
<h2>Doğru yol</h2>
<ul>
  <li><strong>Gerçek sahibi şifresini unuttuysa:</strong> Hesap kurtarma sayfalarını kullanmasını öner (Google veya Apple hesap kurtarma).</li>
  <li><strong>İkinci el alınmış cihaz:</strong> Önceki sahibinin hesabı uzaktan kaldırması gerekir.</li>
  <li><strong>Apple:</strong> Fatura veya satın alma belgesiyle Apple'a resmi başvuru yapılabilir.</li>
  <li><strong>Şüpheli durum:</strong> Fatura veya belge sunulamıyorsa işi reddet.</li>
</ul>
<div class="kutu not"><span class="kutu-ikon">i</span><div>
<p>Türkiye'de yurt dışından getirilen cihazların <strong>IMEI kaydı</strong> ayrıca yasal bir konudur. IMEI değiştirmek ya da kayıt dışı cihazları çalışır hale getirmek suçtur. Bu kursta bu tür işlemler öğretilmez.</p>
</div></div>
`
    }
  ],
  quiz: [
    { soru: 'Android\'de güvenli mod neyi test etmeye yarar?', secenekler: ['Bataryayı', 'Sorunun yüklü bir uygulamadan kaynaklanıp kaynaklanmadığını', 'Ekran parlaklığını', 'Şebekeyi'], dogru: 1, aciklama: 'Güvenli modda sadece sistem uygulamaları çalışır.' },
    { soru: 'Fabrika ayarlarına sıfırlamadan önce ne şarttır?', secenekler: ['Cihazı şarj etmek', 'Müşterinin yazılı onayı ve mümkünse yedek', 'Ekranı değiştirmek', 'Hiçbir şey'], dogru: 1, aciklama: 'Sıfırlama verileri siler. Onay almak zorunludur.' },
    { soru: 'FRP ve iCloud kilitlerinin amacı nedir?', secenekler: ['Cihazı yavaşlatmak', 'Çalınan cihazların kullanılmasını engellemek', 'Reklam göstermek', 'Pili korumak'], dogru: 1, aciklama: 'Bu kilitler hırsızlığa karşı koruma sağlar.' },
    { soru: 'Belgesi olmayan, hesap kilitli bir cihaz getirildiğinde ne yapılmalı?', secenekler: ['Kilidi atlatmak', 'İşi reddetmek ve resmi kurtarma yollarını önermek', 'Parçalarını satmak', 'IMEI değiştirmek'], dogru: 1, aciklama: 'Etik ve yasal olan budur.' },
    { soru: 'Yazılım yüklerken hangi kaynak tercih edilmeli?', secenekler: ['Forumlardaki rastgele dosyalar', 'Üreticinin resmi araçları', 'Mesajla gelen linkler', 'Fark etmez'], dogru: 1, aciklama: 'Resmi olmayan dosyalar zararlı yazılım içerebilir veya cihazı bozabilir.' },
    { soru: 'Önbellek temizliği (cache wipe) kullanıcı verilerini siler mi?', secenekler: ['Evet, her şeyi siler', 'Hayır, kullanıcı verileri korunur', 'Sadece fotoğrafları siler', 'Sadece rehberi siler'], dogru: 1, aciklama: 'Önbellek temizliği geçici sistem dosyalarını siler. Kullanıcı verilerine dokunmaz.' }
  ]
};
