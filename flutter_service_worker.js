'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c48a9f711f63b74cde23255abb9a6f86",
"version.json": "f609ec6e3382a1207d819f1f30a1c624",
"index.html": "1aa2f5746e38395fe418810f488b6c6e",
"/": "1aa2f5746e38395fe418810f488b6c6e",
"main.dart.js": "ba5921b5a48d71c39fc0820d89beec01",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "edcf1363ced166ba899dd99545514e47",
"icons/icon-192.png": "edcf1363ced166ba899dd99545514e47",
"icons/icon-maskable-192.png": "edcf1363ced166ba899dd99545514e47",
"icons/icon-maskable-512.png": "edcf1363ced166ba899dd99545514e47",
"icons/icon-512.png": "edcf1363ced166ba899dd99545514e47",
"manifest.json": "61bac645bef2f236b7dc807720397aa5",
"assets/NOTICES": "95666c0c5338397ef880e696e06944f8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "2b740a1b39a0a9dd00e668c090a44a0f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "153e4dd111d03a28a325f0873412326c",
"assets/fonts/MaterialIcons-Regular.otf": "f6f8c5534f20c8684a414c2b51c3abf2",
"assets/assets/images/photo_1.jpeg": "cb3fb4065209cf6b7b8333c5c5208e6f",
"assets/assets/images/dummay_picture.jpg": "6241a612d1afbb0d945841f32bd8050c",
"assets/assets/resume/Manthan_Resume.pdf": "ce7554bb53baab30bf021d8c212930a6",
"assets/assets/project_mockup/medantv/screen_6.webp": "de9905200c35fcd0e35bc91b7a48e0e9",
"assets/assets/project_mockup/medantv/screen_7.webp": "2c50b43bab5d0ff8a7492f74ee3dabf0",
"assets/assets/project_mockup/medantv/screen_1.webp": "8664eeaf1d94f2726ff54ae9d399e1cb",
"assets/assets/project_mockup/medantv/screen_2.webp": "c9018afa257c47f3d219001d644b0f41",
"assets/assets/project_mockup/medantv/screen_3.webp": "db4aa01292a08acdeda530476f6dbfe4",
"assets/assets/project_mockup/medantv/screen_4.webp": "974b94d20a757745e29d9c60d4982d46",
"assets/assets/project_mockup/medantv/screen_8.webp": "6a1c048a6585f478f04bbbbd3ad6b0fc",
"assets/assets/project_mockup/medantv/screen_5.webp": "f848b14c8abe7374db7b5b86a691fa51",
"assets/assets/project_mockup/country_kart/screen_6.webp": "6833fd32abccec071d899e03a9bd15d0",
"assets/assets/project_mockup/country_kart/screen_1.webp": "ff5468299347f0de8af79ff1a28d1bc6",
"assets/assets/project_mockup/country_kart/screen_2.webp": "4c61be67e22e57d428af80fd5f35f077",
"assets/assets/project_mockup/country_kart/screen_3.webp": "57b80f58ad9870bd1b3d40b28fcd71f4",
"assets/assets/project_mockup/country_kart/screen_4.webp": "1ae4a59229651b6132d9426f160a86c3",
"assets/assets/project_mockup/country_kart/screen_5.webp": "81c346f1c86b12583b9ec9d8e6787b18",
"assets/assets/project_mockup/mamgo/screen_6.webp": "65cfdab539a88032ad0a07015cc15324",
"assets/assets/project_mockup/mamgo/screen_7.webp": "db05e13999e0977e0f7f28edab9a9fef",
"assets/assets/project_mockup/mamgo/screen_1.webp": "c97cd894bf01b50af42937388fa92761",
"assets/assets/project_mockup/mamgo/screen_2.webp": "77e4f5440dfa8c3dd6805e79165a0a08",
"assets/assets/project_mockup/mamgo/screen_3.webp": "711eadec34e0077bb70f39141fd4aa39",
"assets/assets/project_mockup/mamgo/screen_4.webp": "575ab928c83a6d85356b1b691223588a",
"assets/assets/project_mockup/mamgo/screen_8.webp": "801e787b1244079d13297ae6536d0d6e",
"assets/assets/project_mockup/mamgo/screen_5.webp": "d0d09a2bb99daede8e78501ee0a4cbd1",
"assets/assets/project_mockup/karuna/screen_1.webp": "9db4bba0b2132351e08376782bdfbe36",
"assets/assets/project_mockup/karuna/screen_2.webp": "39d8085aceb30c2240db5ecadc963d30",
"assets/assets/project_mockup/karuna/screen_3.webp": "8284bacfa652487808a670369c873edf",
"assets/assets/project_mockup/karuna/screen_4.webp": "227892b96ef2b9696c9761e4d19f2526",
"assets/assets/project_mockup/karuna/screen_5.webp": "c506ae4a18a457aab1f2202efb4d3ce6",
"assets/assets/project_mockup/crimechime/screen_1.webp": "8dc8f7b7838f6474906eb2a6325c14f3",
"assets/assets/project_mockup/crimechime/screen_2.webp": "e4b06f82dddbdbc8ce64ef31409798d1",
"assets/assets/project_mockup/crimechime/screen_3.webp": "cd3ed9a01a234b60d24cac848afe0cec",
"assets/assets/project_mockup/crimechime/screen_4.webp": "b0729e84692adc5e53bc234c81050a18",
"assets/assets/project_mockup/crimechime/screen_5.webp": "1796ccafcfe2dc9a1a516f9782bd5847",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
