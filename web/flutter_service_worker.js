'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9c01e66d9c3e6004a02bb3f36cb6ffea",
"index.html": "e43195653fdc0333337353fd33e07df5",
"/": "e43195653fdc0333337353fd33e07df5",
"main.dart.js": "b02e8c2eab249e7122829012b87d8f53",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2fab9c34792220142d791a6ad5092387",
"assets/images/card_account_pay/icon_success.png": "2b50368f424df57c5cee63c84fec1aeb",
"assets/images/card_account_pay/icon_display.png": "4f1f671d2d48eba9222fff6b61dce1bc",
"assets/images/card_account_pay/icon_search.png": "e3d45d987a6d121ecc5c6cc057189e32",
"assets/images/card_account_pay/icon_hide.png": "850a07aa1f0cced837f1ea12c2476dae",
"assets/images/card_account_pay/etc_card_bg.png": "8c980bf70e7cc5a64b0e7f6a4a7d7f22",
"assets/images/card_manger/union_card_bg.png": "75d8890aa9a3371f6c3fb5f4ffff76f6",
"assets/images/card_manger/qian_card_bg.png": "4a01003eb1b07f566d29590058235a6d",
"assets/images/card_manger/card_add.png": "4a613b16ffffea7c047807b9715ef3e4",
"assets/images/forget_password/forgetpwd_delete.png": "e6bbb2ed4d02d2ccfff5f9a39e7cf104",
"assets/images/forget_password/forgetpwd_icon_hide.png": "850a07aa1f0cced837f1ea12c2476dae",
"assets/images/forget_password/forgetpwd_icon_display.png": "4f1f671d2d48eba9222fff6b61dce1bc",
"assets/images/etc/etc_bind_success.png": "2b50368f424df57c5cee63c84fec1aeb",
"assets/images/etc/no_content.png": "eb4d0f735fb636b2e765052c04c6867c",
"assets/images/etc/bind_card_%2520prompt.png": "a0f01a82c950621444437ffb45ab5fef",
"assets/images/etc/qian_pass_card.png": "7d5cd53762d32ab9a5ec0ee3f60e1f65",
"assets/images/etc/read_card_animation.gif": "308c55f3b360325c057a024f0b070c96",
"assets/images/etc/read_card_bg.png": "9f7aaf1fb55a619647995dfae3e44015",
"assets/images/etc/xc_Examples.png": "603bbac74806e603b3a4dc07c75d181d",
"assets/images/etc/nfc_read_card.png": "097e760dbfc1e94a8d2e8bad957c1699",
"assets/images/etc/nfc_card.png": "03ea3b5f18af3df1fa0564fe4161fdeb",
"assets/images/vehicle_binding/icon_yonghu_bg.png": "2d86ccc3613640bde3b5064e68f13096",
"assets/images/nav/navigation_back_black.png": "0e69e50b11f337f9691702a267fdbae9",
"assets/images/nav/navigation_back.png": "32eb5ab7f15030f578747c2b7d3a3664",
"assets/images/process_query/progress_equipment.png": "d7c7f18eda63d38e37228123ca290b6d",
"assets/images/process_query/progress_loss.png": "50dcd7fc28bf9b8dbfeac19185dde54b",
"assets/images/process_query/progress_cancellation.png": "d8f40989361f0949de4a2a1e6cc1b89d",
"assets/images/process_query/progress_user.png": "85efcfa987ea6a939141f86a378153ff",
"assets/images/process_query/icon_next_page.png": "0f02448cbe0c1a2d37c0534eaf92f8f1",
"assets/images/process_query/car_default_icon.png": "72658c7160860586049341f8b27a4f00",
"assets/images/process_query/bg_line.png": "d4ab0bab8ff26be01438c648c458ba88",
"assets/images/process_query/icon_checking.png": "d37720b890a4f796de356f01eade161f",
"assets/images/process_query/bg_rect.png": "a6230badb187a92574fbb5664988bab5",
"assets/images/process_query/progress_etc.png": "b6a5215bc087b12659452acc13cc07cc",
"assets/images/process_query/icon_checked.png": "3e46cde5c934a271cf0183f88deb3b5e",
"assets/images/process_query/progress_vehicle.png": "29438230e228c5bbe7dd7cbdbc6658e4",
"assets/images/process_query/progress_complaint.png": "c5fe199e945f808fc3cae7ae9fc571ef",
"assets/images/integral/integral_bg.png": "ae0c0bd2acaaab20454be57d79640eae",
"assets/AssetManifest.json": "038a2a1c61f15231ff72990810c016be",
"assets/NOTICES": "c2c37cd9359e951c2ca085bed7423d4d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
