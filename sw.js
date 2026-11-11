// Çevrimdışı çalışma: uygulama dosyalarını önbelleğe alır.
// İçerik güncellendiğinde SURUM değerini artır; telefonlar yeni sürümü indirir.
var SURUM = 'ta-v1';
var DOSYALAR = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/style.css',
  'js/app.js',
  'js/veri/moduller.js',
  'js/veri/modul-temeller.js',
  'ikonlar/ikon-192.png',
  'ikonlar/ikon-512.png',
  'ikonlar/ikon-maskable-512.png',
  'ikonlar/apple-touch-icon.png',
  'ikonlar/favicon-32.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(SURUM).then(function (c) { return c.addAll(DOSYALAR); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (anahtarlar) {
      return Promise.all(anahtarlar.filter(function (k) { return k !== SURUM; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

// Önce ağ, olmazsa önbellek: internet varken hep güncel içerik gelir.
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(function (yanit) {
      var kopya = yanit.clone();
      caches.open(SURUM).then(function (c) { c.put(e.request, kopya); });
      return yanit;
    }).catch(function () {
      return caches.match(e.request, { ignoreSearch: true }).then(function (r) { return r || caches.match('index.html'); });
    })
  );
});
