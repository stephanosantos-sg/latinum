/* LATINVM service worker — network-first com fallback offline */
const CACHE = "latinum-v1";
const CORE = [
  ".", "index.html", "manifest.json", "icon-192.png", "icon-512.png",
  "css/style.css",
  "js/course.js", "js/fabellae.js", "js/course2.js", "js/course3.js",
  "js/course4a.js", "js/course4b.js", "js/course4c.js", "js/course4d.js",
  "js/roma1.js", "js/roma2.js", "js/roma3.js", "js/roma4.js", "js/fabellae2.js", "js/colloquia.js", "js/morph.js", "js/app.js"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return; // firebase/gstatic passam direto
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true })
        .then(hit => hit || caches.match("index.html")))
  );
});
