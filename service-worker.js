importScripts("/precache-manifest.618d3e3d065fb1c3399d35bca2c2ac05.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

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
