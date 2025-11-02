const CACHE_NAME = 'gurmano-cache-v1';
const URLS = ['.','index.html','manifest.json'];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(URLS)));
});
self.addEventListener('fetch', function(e){
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
self.addEventListener('activate', function(e){
  e.waitUntil(self.clients.claim());
});
