'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "5b5da59aacf47091578d71ce3090c0f1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f24d3945058947df341634210a6222fd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4b2f5acc74a87aaec1d08c1cf4fd2239",
".git/logs/refs/heads/main": "c0b719bc7b58441d4a83d56ae71c9251",
".git/logs/refs/remotes/origin/main": "4374c0ae0fde2eecd06bbc763f6f058b",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/13/344c89cd947d6cfe34f217bddf82cfeccdaf6a": "2f2550f181db1007893a48ec2c5513a9",
".git/objects/21/1704c6aab8ce24606a61e56007fd9f61dd79f9": "099fbea832d1922b611d843b28dbd25c",
".git/objects/2f/31f862528a8e8cc470e10204b1cfd5b30f21af": "919e2988c0d65855b60ffaf8c8ad3d2a",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/4b/6a8aebbab94acee7a622384c5fb58a033399f5": "55bb80431ab4b56a318fa8ae63f73245",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5c/40f1eeffce287fd7bf5b093d4c2ea9a3b187f2": "938c3a4f4dd232fe83e09f75c65c0eae",
".git/objects/5c/c207e5723fdb2cee80452dca7999a51014245d": "92b3bb657173a1730b1d0cc32330c9f9",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/fcc2d077d18933d56fc594658a4d14b0c1ecc6": "b6f853ef326baba4e37d9e70d7a48bfb",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/64/3bf6fdc52e7bf4fab85345269b54069729632c": "e17d2b114d2b635e19aecb2ab513ad29",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/96e1783045c0d00761ced0be6ac034cf281e78": "dec6552b9c6bce2ac9715b7c30474e84",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/77/6b84d1597ccb60912f05e6b9dcefe8e48ce052": "079dd66b0cd657bef362d7f4f77061b2",
".git/objects/7d/6d2ef35b5bdb46f3125c7ff0ae275d5fc254d3": "935a424583e29ed837b6d3ad668a7679",
".git/objects/83/17848b600e7f93358ac166a7cfaa4d556ece73": "6bb7867de11c023b1fe74d1202002d0c",
".git/objects/87/bc9d7ba28801ad157384a74ddc31b9def4d514": "d11fd6c232b0355d691e61313385d726",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/5a799953cc3477339f22080c6323f0e89fe296": "36fd02b07fbaa48b52b2ad8343fbcdba",
".git/objects/90/814f27aa0efda08087e5848288c025cca74cea": "2b72642376e294324f18969562b31abc",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/9f/4b94496ed0c46a982a1f6d2b7aed8743a972a4": "9a11048fdcd42b7a03e4d05a9bb37bc2",
".git/objects/a0/972f20c6b076acf3d938f7f52428a7cba41adf": "7d1861f5310bc7f5629fb5e60f2159a2",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/f3d16a6321555c7511bc9ffd1b8133a0a074e6": "8d691b515ab1fd59b70d45814bb25176",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/a9/9477993f33d241edf02a5c525659bc3b266fc7": "26c4fdf3376bab94ab39162580af5bab",
".git/objects/b2/f83dbb5e2b99f646887ae3e74fad79faa7de3f": "5128001f0af1c3feee7a7b005cc13fb6",
".git/objects/b7/28f1b28543727f91d8a96b54324aa569eea142": "8b2522ad2ab25309b46ddc905cda36e3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/d2d2cf26c8e1fc3b01a0b720abf34624feca37": "92c878ae1d504bc908f3d9fc91163915",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/52c3d0abe66af16b6d20e589c074b3691b36ec": "70397d2f7c00279048a28726d0de9e87",
".git/objects/bc/1479b2d10d3c19f7e7d15f336002d0f3c94099": "fb04bbbf07eeb500f51f49ddc6eb8cff",
".git/objects/be/06d7493e156c54cc44fec0131df4ef0f20c97b": "d33405c4265415a8b7e6efa9c6ea13c8",
".git/objects/c2/9c0a982ca907dd12ca29b1744922f16be8e70f": "802ce51aa9d4d19e78fbeb6ac721e5f5",
".git/objects/ca/0eacd71db5d88fedfda379f69d96ac121759fb": "0228a155cc248260fa5ef538055bd75c",
".git/objects/d3/c9f0954a0e5b6605b23561553bca0d7be8ad91": "36e586f550db027b06282533d63fb124",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/95146dde7353fa7badaf7f1162bcd362e027a8": "7bb079e7f0c43a29e7313b8ed91f6a28",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/de/52a9d24000ebcb22178fd02ff3eda55b534a75": "8a49d7c91faea3e585be07254e1774c4",
".git/objects/e0/140339c367a17b37903e1d1aba06299734abcf": "bb5bd8be8c92d0c4f4461e0df589885d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/0a1d82407f3da4503125a891f020f26b02243e": "25bbe88f82681278332f56762f030201",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/9bb70b1a8b486a9fc295d8ca1c24c8a78a9ca0": "7af3eb8ab42df3ef405580efe987c871",
".git/refs/heads/main": "604f1bfa30b3037dff6718ffc512e078",
".git/refs/remotes/origin/main": "604f1bfa30b3037dff6718ffc512e078",
"assets/AssetManifest.bin": "dd6f9d051c67246d1bd5819f6008c532",
"assets/AssetManifest.bin.json": "444cbec08c0b9fd680b0bfccfbd9ce1b",
"assets/AssetManifest.json": "661f668237f7c2bd750f5b35f63f6879",
"assets/assets/fonts/bodyfont.ttf": "05fb71dda96f8396e5639225b0d1c036",
"assets/assets/fonts/font_1.TTF": "34a1156588649c61ea04538baaeef237",
"assets/assets/fonts/SHOWG.TTF": "d66fa62dabed66f2226a1b2d17da0579",
"assets/assets/fonts/SourGummy-Italic.ttf": "9f0a48106b0fae21488c8efc31b7350f",
"assets/assets/fonts/titlefont.ttf": "8311505a68e1e4cd3738bfb9bd3c3d83",
"assets/assets/images/github.png": "63de5479e8eb4676570c49e2579cab01",
"assets/assets/images/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/images/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/images/logo2.png": "d5e09b3350c6f0436a501b76139cc440",
"assets/assets/images/new.png": "6fdc48f57f4c8175469a6aafe2cb59e2",
"assets/assets/images/pos.png": "b920d52c51db2504b88162c50abe4bae",
"assets/assets/images/pos2.png": "01e78c2bc37ca974afb26c57850f77db",
"assets/assets/images/smart.png": "07c28484887d1e8f958e7975763a2d2b",
"assets/assets/images/tiktok.png": "e30e4714ecadc84324ee6e65ae93d669",
"assets/assets/images/well.gif": "8cbf6362abf56476949607d814ad08c9",
"assets/assets/images/youtube.png": "642bfb077a5c99b6564f979578900c53",
"assets/FontManifest.json": "68679aca479e034e8f47a3e28d2ed4c9",
"assets/fonts/MaterialIcons-Regular.otf": "54b6a3072d397cfd1fa9fdc6da13ad2a",
"assets/NOTICES": "6421a7413c3d09e051ef3f6ae2f1b6b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "ec2688bdcbb3b624194df33b7986c0c2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8fb70eac87a7038e22b94ee00ab25d8a",
"/": "8fb70eac87a7038e22b94ee00ab25d8a",
"main.dart.js": "a3ddf6e34fee78d527ef0185b8cdea07",
"manifest.json": "97c056771e015972b2dcd7edadb12fb7",
"version.json": "061068e2c9bf138d06622981ae841092"};
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
