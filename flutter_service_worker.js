'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "edf4881c648bbdb9bfea65584d99171d",
".git/config": "fcdfd03761e6b641d473532100751076",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fa7455a54f3e0c0dee71240f66404106",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "209c81d62175072ba8496805117882ad",
".git/logs/refs/heads/main": "209c81d62175072ba8496805117882ad",
".git/logs/refs/remotes/origin/main": "c22206872a812fef88a996bb1a621f58",
".git/objects/01/8a43ed4c6fa91c742235560dc9e35e3a62ccf4": "defbcda97623b0a02f9c9926f80e4992",
".git/objects/08/f1b0f84616658d9e98c538492ee91e005dff4c": "f2be6bd814298b85b3717f7fa7dd4a60",
".git/objects/0d/a3308e5423bb36a6fd7a24ca24e42862818e90": "af5b41c6867e7fce71125181a81ad4e5",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/1cb8746e937521f369504bb5f3cb32b076a2ea": "073f855e8c1f196a2723543776683c36",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/eb736e47442bc698749f9c36393bb547303abb": "96cf4f1b187b811d6e6e823e7a998c7c",
".git/objects/40/48d88e861d483bb7135b8aa34d1d1a28014c1f": "d5efd2ccf2740ffd0b4414492218dfda",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/55/306d7160717f79e2da65bbb71a6049a6e8f971": "da70775b0d9a1b99828cb0e2dd808cfd",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5b/bacf3ed47d9ae03b172acd37b5b99863ed4c7d": "508dc57a7648476f087198206d948de2",
".git/objects/5d/05b49d69551ff6fdb6b7aa1d0291bb3befdb56": "d1b246a8de3c0e0ffdfcc73269ff9059",
".git/objects/62/9f330f784bd84456f55d733652c79546515038": "c9623fc0c7d3f03b23f694ba1d888bd9",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/9fff25c0b9c2ee699fe6000e08ffbeafc3a6fc": "8c0a8f553ed3783d3b89a2b55ccdfd90",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/79/1908183c0a03b8b9e6ceaf0593793bb9197dff": "ca453e8eae011a8547a17f8f34f67df4",
".git/objects/7b/5449eab03dbc6c11b9a3628a3c1d2a54c43549": "485819893820405cea13beb50f9bea65",
".git/objects/7b/ae8f9b45100597b8ca47134697eeae4d2b7406": "3b42cc51aba59e183bee66353afaa722",
".git/objects/7f/ca4bf4a9c25cc93e0f45b46a29488fb63003bf": "c82ab4412823d4ff9605de5542cd123d",
".git/objects/83/03d06f740a1a401777192c2c491b48f43377a5": "e25338b8c46e2474dda59bcdb74ee3eb",
".git/objects/88/3135e7652a2d1caf17250fdf7e442511d06627": "23174b94cef6707569ead62637300cc9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/e81e3d69315bdbb68df440faebcccf53041729": "9e35621e8379ce50497f2df0034015b5",
".git/objects/96/c0223c8aa280863f0bc8e0f5f805bcfaad4a23": "c5b42d6283dd6222c7df0f5a450fe18e",
".git/objects/a8/fd17e595e3ea3881e0b8dcd9d09c6aef74cf2e": "128d6e797d47e520ad126a0b9cd41f3a",
".git/objects/b0/bd7e3ee22d98ef7d6f69beefe0d7d0571f0d7e": "4f5de22aa5fb756d06b5f8de56d0a231",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/3a5303bc3043d6e09710af28a88098343e95d3": "c5dbc335cf3879b49d428d6fea0d82ca",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/c2cde77081a8a66098212bb8f12bec418e40c3": "d6c63f5d4cdbc1df3b421344522da43f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/6403fceb5654727fb4f47647eb63959ef4f0e9": "44d968f3821a62c5a64a9167f1dd6c8a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/d80a5ab6071b53cd2a062b967c69b19c1ccc05": "fbb6434b6e2b62e83c9714f3fc1faea7",
".git/objects/d9/88fa8bb9d42da536b108786696ee35e3ffbcf7": "1bd70d9fec309ce48e55c74dd062950f",
".git/objects/db/e50234c6e7c3369b94d88d3acbf8705976a9c4": "3347cab2d0ae19d1b9ce1c3b5cfcb9e0",
".git/objects/dc/713151342eace07db95b8a518f43b91d2cca42": "1c55d94291fddfd0bd0a2b8372fb3c9d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/d83d36611cfb7cb5acc3819d20723c9745bb4d": "336dd39ef3d9062a2911a7650ab88df6",
".git/refs/heads/main": "ff1629113e7e2d7060aada21f4444890",
".git/refs/remotes/origin/main": "ff1629113e7e2d7060aada21f4444890",
"assets/AssetManifest.bin": "616c15479df387a238ab65abd4f6f164",
"assets/AssetManifest.bin.json": "61cc7b68c92f1b68f8e19f9afe6b1045",
"assets/AssetManifest.json": "5b1710f9890848ebd746cf0b2269cb51",
"assets/assets/1.png": "67a8bdc42dc05925222d716f0f40c204",
"assets/assets/2.png": "f20c3c36764c542e1c9539db1277e8d4",
"assets/assets/3.png": "b9ef84f930b37b90f8b3b14dcc368e40",
"assets/assets/4.png": "e580c4447751bc6978d18d5a19aa6d15",
"assets/assets/5.png": "074e41efbf6691c9d91c3597ee2c0c31",
"assets/assets/6.png": "5d6ceddbc214a06926b9a0016dcbd4ff",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "9f28e7b54c61063105f10cda5364c867",
"assets/NOTICES": "31feef15adfefccfefb9c86bccbdc342",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e9987e5583cf8d941af84874ede36e3b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b4a3c439b9b75bd28f5b654762be8b3f",
"/": "b4a3c439b9b75bd28f5b654762be8b3f",
"main.dart.js": "b670cbb4061d3fc0078eba333578012e",
"manifest.json": "b933a76d2a0dd29f86ef95996b2d1c3f",
"version.json": "9e12005ccef467ea96f810c11d534ec1"};
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
