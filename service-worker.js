const staticChacheName = 'web-static';
const assets = [
    '/',
    '/index.html',
    '/app.js',
    '/main.css',
    '/main.js',
    '/weather-pic.jpg',
];
// install service worker
self.addEventListener('install', evt => {
// console.log('service worker has been installed');
evt.waitUntil(
    caches.open(staticChacheName).then(cache => {
    console.log('caching shell assets');
    cache.addAll(assets);
 })
);
});

//activate service worker
self.addEventListener('activate', evt => {
   // console.log('service worker has been activated');
});
//fetch event
self.addEventListener('fetch', evt => {
  //  console.log('fetch', evt);
});