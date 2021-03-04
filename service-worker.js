importScripts("/precache-manifest.c3df7ef0a0fe12d29e3cedba987e246b.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

self.addEventListener('message', (e) => {
    if (!e.data) {
      return;
    }
  
    switch (e.data) {
      case 'skipWaiting':
        self.skipWaiting();
        break;
      default:
        // NOOP
        break;
    }
  });
  
  workbox.clientsClaim();
  
  // The precaching code provided by Workbox.
  self.__precacheManifest = [].concat(self.__precacheManifest || []);
  workbox.precaching.suppressWarnings();
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
