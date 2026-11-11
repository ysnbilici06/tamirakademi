// Kurs modüllerinin listesi. Ders içerikleri ayrı dosyalarda (modul-*.js) bu nesneye eklenir.
window.TA = window.TA || {};
TA.moduller = [
  { id: 'temeller', no: 1, baslik: 'Temeller', ozet: 'Güvenlik (ESD, batarya tehlikeleri), çalışma alanı ve alet çantası. Her şey burada başlar.' },
  { id: 'anatomi', no: 2, baslik: 'Cihazın Anatomisi', ozet: 'Anakart, batarya, ekran (LCD/OLED), şarj soketi, flex kablolar, kamera ve hoparlör.' },
  { id: 'teshis', no: 3, baslik: 'Arıza Teşhisi', ozet: '"Şarj olmuyor", "ekran karanlık", "açılmıyor" gibi belirtilerden nedene giden yol.' },
  { id: 'sokum', no: 4, baslik: 'Söküm ve Montaj', ozet: 'Yapıştırıcılı ve vidalı kasalar, arka cam açma, ekranı güvenle ayırma.' },
  { id: 'tamirler', no: 5, baslik: 'Yaygın Tamirler', ozet: 'Ekran, batarya, şarj soketi, kamera ve tuş değişimi adım adım.' },
  { id: 'ileri', no: 6, baslik: 'İleri Seviye', ozet: 'Multimetreyle ölçüm, kısa devre bulma, mikro lehim ve entegre değişimine giriş.' },
  { id: 'yazilim', no: 7, baslik: 'Yazılım Tarafı', ozet: 'Format, yazılım yükleme; FRP ve iCloud kilitlerinin etik ve yasal sınırları.' },
  { id: 'meslek', no: 8, baslik: 'Mesleğe Dönüştürme', ozet: 'Parça tedariki, fiyatlandırma, müşteriyle iletişim ve garanti.' }
];
TA.icerik = TA.icerik || {}; // { modulId: { dersler: [...], quiz: [...] } }
