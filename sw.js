/**
 * IAYPAA X PWA - Service Worker
 * Enables offline functionality and caching
 */

const CACHE_NAME = 'iaypaa-x-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json',
    '/images/logo.jpg',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Caching files');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Service Worker: Clearing old cache');
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;
    
    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) {
        // Allow fonts from Google
        if (event.request.url.includes('fonts.googleapis.com') || 
            event.request.url.includes('fonts.gstatic.com')) {
            event.respondWith(
                caches.match(event.request).then((response) => {
                    return response || fetch(event.request).then((fetchResponse) => {
                        return caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, fetchResponse.clone());
                            return fetchResponse;
                        });
                    });
                })
            );
        }
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version or fetch new
                if (response) {
                    // Fetch in background to update cache
                    fetch(event.request).then((fetchResponse) => {
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, fetchResponse);
                        });
                    }).catch(() => {});
                    
                    return response;
                }
                
                return fetch(event.request)
                    .then((fetchResponse) => {
                        // Don't cache if not valid response
                        if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
                            return fetchResponse;
                        }
                        
                        // Clone the response
                        const responseToCache = fetchResponse.clone();
                        
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return fetchResponse;
                    })
                    .catch(() => {
                        // Return offline page for navigation requests
                        if (event.request.mode === 'navigate') {
                            return caches.match('/index.html');
                        }
                    });
            })
    );
});

// Background sync for schedule data
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-schedule') {
        event.waitUntil(syncSchedule());
    }
});

async function syncSchedule() {
    // In a real app, this would sync with a server
    console.log('Service Worker: Syncing schedule data');
}

// Push notifications (for future use)
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'New update from IAYPAA X!',
        icon: '/icons/icon-192.png',
        badge: '/icons/badge-72.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            { action: 'explore', title: 'View Schedule' },
            { action: 'close', title: 'Dismiss' }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('IAYPAA X', options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/?view=events')
        );
    }
});
