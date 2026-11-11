// Yazılım alanı: Android ve iOS
TA.yazilimAlani = {
  android: {
    ad: 'Android',
    ozet: 'Samsung başta olmak üzere tüm Android cihazlarda yazılım teşhisi, kurtarma ve güvenli yazılım yükleme.',
    bolumler: [
      { baslik: 'Önce donanım mı, yazılım mı?', html: `
<ol class="adimlar">
  <li><strong>Zorla yeniden başlat:</strong> Güç ve ses kısma tuşlarına 10-15 saniye basılı tut (Samsung'da da geçerli).</li>
  <li><strong>Güvenli mod:</strong> Güç menüsünde "Kapat" seçeneğine uzun bas ▸ "Güvenli mod". Sorun burada yoksa bir uygulama sorumludur.</li>
  <li><strong>Tanılama:</strong> Samsung'da Samsung Members ▸ Telefon tanılama ya da <code>*#0*#</code>. Diğer markaların da kendi tanılama uygulamaları vardır.</li>
  <li><strong>Depolama:</strong> Depolama alanı %95'in üzerindeyse yavaşlık ve çökme normaldir. Önce yer aç.</li>
</ol>` },
      { baslik: 'Özel modlar', html: `
<div class="tablo-kap"><table>
  <thead><tr><th>Mod</th><th>Ne işe yarar?</th><th>Samsung'da nasıl girilir? (genel)</th></tr></thead>
  <tbody>
    <tr><td>Güvenli mod</td><td>Sadece sistem uygulamalarıyla açılır</td><td>Güç menüsü ▸ "Kapat"a uzun bas</td></tr>
    <tr><td>Kurtarma (Recovery)</td><td>Önbellek temizleme, fabrika ayarları, onarım</td><td>Cihaz kapalı. Yeni modellerde USB kablosu bilgisayara takılıyken Güç + Ses Aç'a basılı tut.</td></tr>
    <tr><td>İndirme modu (Download)</td><td>Bilgisayardan resmî yazılım yükleme</td><td>Cihaz kapalı, kablo takılı. Ses Aç + Ses Kıs'a basılı tut.</td></tr>
    <tr><td>Bakım modu</td><td>Servise verirken kişisel verileri gizler</td><td>Ayarlar ▸ Pil ve cihaz bakımı ▸ Bakım modu (One UI 5+)</td></tr>
  </tbody>
</table></div>
<p class="soluk">Tuş kombinasyonları modele göre değişebilir. Modelin resmî destek sayfasından doğrula.</p>` },
      { baslik: 'Sık yazılım sorunları ve çözümleri', html: `
<div class="tablo-kap"><table>
  <thead><tr><th>Belirti</th><th>İlk çözüm</th></tr></thead>
  <tbody>
    <tr><td>Güncelleme sonrası yavaşlık, ısınma</td><td>1-2 gün bekle (arka planda optimizasyon sürer). Sonra kurtarma modunda önbelleği temizle.</td></tr>
    <tr><td>Uygulama sürekli kapanıyor</td><td>Uygulamanın önbelleğini ve verilerini temizle, güncelle. Güvenli modda dene.</td></tr>
    <tr><td>Logoda takılı kalma (bootloop)</td><td>Önce harici parçaları ayırıp dene. Sonra kurtarma modunda önbellek temizliği, en son resmî araçla yazılım kurtarma.</td></tr>
    <tr><td>Şebeke yok / IMEI boş görünüyor</td><td>Önce SIM'i ve ağ ayarlarını sıfırlamayı dene. Sürüyorsa donanım (modem, anten) arızası olabilir. IMEI üzerinde değişiklik yapmak suçtur.</td></tr>
  </tbody>
</table></div>` },
      { baslik: 'Resmî araçlar ve güvenli yükleme', html: `
<ul>
  <li><strong>Samsung Smart Switch (bilgisayar):</strong> Yedekleme, geri yükleme ve "acil durum yazılım kurtarma".</li>
  <li><strong>Diğer markalar:</strong> Her üreticinin kendi resmî kurtarma veya güncelleme aracı vardır. Önce onu kullan.</li>
  <li><strong>Knox ve garanti:</strong> Resmî olmayan yazılım yüklemek, bootloader kilidini açmak veya root işlemi Samsung'da Knox'u kalıcı olarak attırabilir ve garantiyi bitirebilir.</li>
</ul>
<div class="kutu tehlike"><span class="kutu-ikon">!</span><div><p>Kaynağı belirsiz "full firmware" paketleri zararlı yazılım içerebilir. Yanlış bölge veya model yazılımı cihazı kalıcı olarak bozabilir.</p></div></div>` },
      { baslik: 'Hesap kilitleri (FRP)', html: `
<p>Sıfırlanan bir Android cihaz, son kullanılan <strong>Google hesabı</strong> girilmeden açılmaz. Samsung'da buna ek olarak <strong>Samsung hesabı yeniden etkinleştirme kilidi</strong> bulunabilir.</p>
<ul>
  <li>Cihazın sahibi şifresini unuttuysa Google hesap kurtarma sayfasını kullanmalıdır.</li>
  <li>İkinci el satıştan önce hesapların cihazdan <strong>kaldırılması</strong> gerekir (Ayarlar ▸ Hesaplar).</li>
  <li>Belgesiz, kilitli cihazlarda kilit atlatmak etik değildir ve hırsızlığa yardım anlamına gelebilir. İşi reddet.</li>
</ul>` }
    ]
  },
  ios: {
    ad: 'iOS',
    ozet: 'iPhone ve iPad\'de yazılım teşhisi, kurtarma modu, DFU, güncelleme ve Apple güvenlik özellikleri.',
    bolumler: [
      { baslik: 'Önce donanım mı, yazılım mı?', html: `
<ol class="adimlar">
  <li><strong>Zorla yeniden başlat (iPhone 8 ve sonrası):</strong> Ses Aç'a bas-bırak, Ses Kıs'a bas-bırak, sonra Apple logosu görünene kadar yan tuşa basılı tut.</li>
  <li><strong>Güncelleme:</strong> Ayarlar ▸ Genel ▸ Yazılım Güncelleme. Bilinen hatalar güncellemelerle düzelir.</li>
  <li><strong>Analiz verileri:</strong> Ayarlar ▸ Gizlilik ve Güvenlik ▸ Analizler ve Geliştirmeler ▸ Analiz Verileri. Sık "panic" kayıtları donanım arızasına işaret eder.</li>
  <li><strong>Ayarları sıfırla:</strong> Ayarlar ▸ Genel ▸ Aktar veya Sıfırla ▸ Sıfırla ▸ Tüm Ayarları Sıfırla. Veriler silinmez, sadece ayarlar sıfırlanır.</li>
</ol>` },
      { baslik: 'Kurtarma modu ve DFU', html: `
<div class="tablo-kap"><table>
  <thead><tr><th>Mod</th><th>Ne işe yarar?</th><th>Nasıl? (iPhone 8 ve sonrası)</th></tr></thead>
  <tbody>
    <tr><td>Kurtarma modu</td><td>Bilgisayardan iOS güncelleme veya geri yükleme</td><td>Bilgisayara bağla. Ses Aç, Ses Kıs, ardından bilgisayar simgesi çıkana kadar yan tuşa basılı tut.</td></tr>
    <tr><td>DFU modu</td><td>En derin geri yükleme. Kurtarma modu işe yaramadığında kullanılır.</td><td>Ekran siyah kalır. Kesin tuş zamanlaması Apple'ın destek belgelerinde anlatılır.</td></tr>
  </tbody>
</table></div>
<p><strong>Bilgisayar tarafı:</strong> Mac'te Finder, Windows'ta Apple Devices uygulaması veya iTunes kullanılır. Cihaz algılanınca iki seçenek çıkar:</p>
<ul>
  <li><strong>Güncelle:</strong> iOS'u yeniden yükler, verileri korumaya çalışır. Her zaman önce bunu dene.</li>
  <li><strong>Geri Yükle:</strong> Cihazı tamamen siler.</li>
</ul>
<div class="kutu uyari"><span class="kutu-ikon">!</span><div><p>Geri yükleme sırasında "bilinmeyen hata" kodları genelde kablo, USB bağlantı noktası veya donanım (bellek, şarj entegresi) sorununa işaret eder. Önce başka kablo ve bilgisayarla dene.</p></div></div>` },
      { baslik: 'Sık yazılım sorunları ve çözümleri', html: `
<div class="tablo-kap"><table>
  <thead><tr><th>Belirti</th><th>İlk çözüm</th></tr></thead>
  <tbody>
    <tr><td>Apple logosunda takılma</td><td>Zorla yeniden başlat. Olmazsa kurtarma modunda "Güncelle".</td></tr>
    <tr><td>Her 3 dakikada yeniden başlama</td><td>Analiz verilerinde panic kaydına bak. Genelde bir sensör veya flex arızasıdır (ör. şarj flex'i, batarya).</td></tr>
    <tr><td>Pil çok çabuk bitiyor</td><td>Pil Sağlığı'na bak. %80'in altındaysa batarya değişimi gerekir. Değilse uygulama kullanımını incele.</td></tr>
    <tr><td>"Face ID kullanılamıyor"</td><td>Genelde donanım arızası (nokta projektörü veya ön sensör). Yazılımla düzelmez.</td></tr>
  </tbody>
</table></div>` },
      { baslik: 'Parça eşleme ve Onarım Asistanı', html: `
<p>iOS, değiştirilen ekran, batarya ve kameraları algılayıp <em>Ayarlar ▸ Genel ▸ Hakkında ▸ Parçalar ve servis geçmişi</em> altında gösterir. Yeni iOS sürümlerinde orijinal Apple parçaları için <strong>Onarım Asistanı</strong>, kurulumu cihaz üzerinde tamamlamayı sağlar.</p>
<p>Uyumlu (aftermarket) parçalarda uyarı görmek normaldir. Müşteriye bunu <strong>önceden</strong> anlat.</p>` },
      { baslik: 'Etkinleştirme Kilidi ve güvenlik', html: `
<ul>
  <li><strong>iPhone'umu Bul</strong> açıksa, cihaz sıfırlansa bile sahibinin Apple hesabı olmadan kullanılamaz (Etkinleştirme Kilidi).</li>
  <li>Sahibi şifreyi unuttuysa Apple hesap kurtarma (iforgot) yolunu kullanır. Satın alma belgesi varsa Apple'a resmî başvuru yapılabilir.</li>
  <li><strong>Çalınan Cihaz Koruması</strong> açıksa bazı işlemler Face ID ve bekleme süresi gerektirir.</li>
  <li>Belgesiz kilitli cihazlarla iş yapma. Etkinleştirme Kilidi'ni atlatmaya çalışmak etik değildir ve suç teşkil edebilir.</li>
</ul>` }
    ]
  }
};
