// OneSignal push (importScripts mora biti prva linija) + minimalan service worker koji ne kesira
// nista, samo omogucava da Chrome/telefon prepozna stranicu kao instalabilnu aplikaciju i da
// OneSignal moze da isporucuje push notifikacije. Uvek se sluzi sveza mreza (nema offline kes).
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

const CACHE = "duma-shell-v3";

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
