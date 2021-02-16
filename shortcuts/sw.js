'use strict';

(() => {

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    try {
      return await fetch(event.request);
    } catch (error) {
      return new Response('Offline');
    }
  })());
});

})();
