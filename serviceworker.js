// CannGuide Rechner — Service Worker
// Minimaler Offline-Cache für das eigenständige Rechner-Paket.
// Erhöhe CACHE_NAME bei jedem Update, damit Clients die neue Version laden.
var CACHE_NAME = 'cannguide-calculator-v2';
var ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.jpg',
  './icon-512.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;
      return fetch(event.request).then(function(resp) {
        // gleicher Origin: für nächstes Mal offline zwischenspeichern
        if (resp && resp.status === 200 && event.request.url.indexOf(self.location.origin) === 0) {
          var copy = resp.clone();
          caches.open(CACHE_NAME).then(function(cache) { cache.put(event.request, copy); });
        }
        return resp;
      }).catch(function() {
        // Offline-Fallback: bei Navigation die zwischengespeicherte Startseite liefern
        if (event.request.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});
