// Velqore Service Worker - v1
const CACHE_NAME = 'velqore-cache-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
];

// Install event - cache essential assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        }).then(() => self.skipWaiting())
    );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - network first, fallback to cache
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests and Firebase/chrome-extension requests
    if (event.request.method !== 'GET') return;
    if (event.request.url.includes('firebaseio.com') ||
        event.request.url.includes('googleapis.com') ||
        event.request.url.includes('chrome-extension')) return;

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Cache successful responses
                const cloned = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, cloned);
                });
                return response;
            })
            .catch(() => {
                return caches.match(event.request).then((cached) => {
                    return cached || new Response('Offline - Please check your connection', {
                        status: 503,
                        statusText: 'Service Unavailable'
                    });
                });
            })
    );
});