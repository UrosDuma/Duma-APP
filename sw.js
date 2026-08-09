// Minimalan service worker — NE kesira nista, samo postoji da bi Chrome
// prepoznao stranicu kao instalabilnu aplikaciju. Uvek se sluzi sveza mreza.
const CACHE = "duma-shell-v2";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
