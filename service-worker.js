/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "32bb3a1132cfd2077460ac960538bbcc"
  },
  {
    "url": "assets/css/0.styles.b6722d83.css",
    "revision": "fec1fec5bdc8f47782b61cba0cbc3cc9"
  },
  {
    "url": "assets/img/create.f01c4812.jpg",
    "revision": "f01c481220a9b13a6d47a58522575a76"
  },
  {
    "url": "assets/img/feedback.78cfac9a.png",
    "revision": "78cfac9a63b090dd8519cba2a1496b78"
  },
  {
    "url": "assets/img/preload-travel-fetch.124639cd.png",
    "revision": "124639cd9ac27fecedb5035aab987f9f"
  },
  {
    "url": "assets/img/preload-travel.f4233a6c.png",
    "revision": "f4233a6ce3c1252600c7d41d2c68af72"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wechat.d557c418.png",
    "revision": "d557c418749bf61d3a0d0277ea23b8f7"
  },
  {
    "url": "assets/js/10.02534096.js",
    "revision": "8706e8d827fa7ebd522e26e443d32d44"
  },
  {
    "url": "assets/js/11.b3764145.js",
    "revision": "eed222124f8b35af3aa776111defbe57"
  },
  {
    "url": "assets/js/12.3e41c7a7.js",
    "revision": "502869129aa5a74a0aea35777c1877eb"
  },
  {
    "url": "assets/js/13.05ffae7c.js",
    "revision": "d62c5999d2f10a5a1bd07cb7b2ce6831"
  },
  {
    "url": "assets/js/14.954e2714.js",
    "revision": "91224806e198b068c317e7c171a31e04"
  },
  {
    "url": "assets/js/15.664224a3.js",
    "revision": "9cc16e6d3da4c5cefedf3ebf005a2954"
  },
  {
    "url": "assets/js/16.915b1004.js",
    "revision": "baed9694d229237e943b308abea69a27"
  },
  {
    "url": "assets/js/17.6b8252d0.js",
    "revision": "86edd9c6970afcda8957b99f8c295212"
  },
  {
    "url": "assets/js/18.f423531e.js",
    "revision": "6c6a176ffab429a8b7a5f9b94fd42fb2"
  },
  {
    "url": "assets/js/19.fcd7c501.js",
    "revision": "4610c612e1109ee3195f716328aea4a8"
  },
  {
    "url": "assets/js/20.05628364.js",
    "revision": "c246bba4850e3d90fc55d9bc2b8dd30f"
  },
  {
    "url": "assets/js/21.5649573d.js",
    "revision": "5ac7e1126c380d743d89e18894666962"
  },
  {
    "url": "assets/js/22.e33d8b1a.js",
    "revision": "d3f89fd3cabdcbb41b5123c58fc1f71b"
  },
  {
    "url": "assets/js/23.f1ead2fd.js",
    "revision": "c3e7b6ae6b26d36054ec57daa732629c"
  },
  {
    "url": "assets/js/24.9e7730a5.js",
    "revision": "7953b98f7297a20bb2e7c7ef7ed16cad"
  },
  {
    "url": "assets/js/25.83624744.js",
    "revision": "9296eb4cf75887575fd2a737c24543da"
  },
  {
    "url": "assets/js/26.d69c4e82.js",
    "revision": "40317e809570606d2738bb649842d239"
  },
  {
    "url": "assets/js/27.f64269de.js",
    "revision": "dced0ea1440d0df57dc7bc13ecff6019"
  },
  {
    "url": "assets/js/28.327456b6.js",
    "revision": "c414e5e10fd92e669cd1da887ae2f1d0"
  },
  {
    "url": "assets/js/29.2f28ce0e.js",
    "revision": "27d0449aad6265c61b2c426f8511ef92"
  },
  {
    "url": "assets/js/30.835af20b.js",
    "revision": "a07db40a3e03557f0caea06f34862600"
  },
  {
    "url": "assets/js/31.c82684c0.js",
    "revision": "4a93e83a8e0e53fe81985671cdd8a850"
  },
  {
    "url": "assets/js/32.c4fafd3e.js",
    "revision": "cebbd557c1539210564db04651130023"
  },
  {
    "url": "assets/js/33.837c1a85.js",
    "revision": "f60dfba575fc055167f8b72ed1124f59"
  },
  {
    "url": "assets/js/34.1325c0eb.js",
    "revision": "43495649e8fdfc6bfa6b789661e5e2fd"
  },
  {
    "url": "assets/js/35.05e11a5d.js",
    "revision": "3484e83d8e58ba47d9d82a93d30e77cd"
  },
  {
    "url": "assets/js/36.0a3d9709.js",
    "revision": "0b13f30eb06264493a5ec97f59848dd1"
  },
  {
    "url": "assets/js/37.fb2ed1d4.js",
    "revision": "f862dd7bf56e5ee5180f97e9b4bc8a26"
  },
  {
    "url": "assets/js/38.ec63a564.js",
    "revision": "444c06d786ed7f7dcb405a3052e519db"
  },
  {
    "url": "assets/js/39.827e3ebf.js",
    "revision": "5d34e15b5389d8230dd631704ba2958f"
  },
  {
    "url": "assets/js/4.bced5a66.js",
    "revision": "7cf25e6459d35cd757345c65cb46ea20"
  },
  {
    "url": "assets/js/40.164e8026.js",
    "revision": "7b98e3698d0c5a3a23fff2aabc5d3c20"
  },
  {
    "url": "assets/js/41.747c0eac.js",
    "revision": "6b094aeb80165d2765aeaa662f619ad1"
  },
  {
    "url": "assets/js/42.bf4edef3.js",
    "revision": "06fb6d1a437ce50bc9a676a4c381972b"
  },
  {
    "url": "assets/js/43.fc590d57.js",
    "revision": "72ef928cd165852c11744b0c4389b629"
  },
  {
    "url": "assets/js/44.60f6d922.js",
    "revision": "8fd917b1129e4bc7cdb64118b0dfc2a3"
  },
  {
    "url": "assets/js/5.599f29f3.js",
    "revision": "dee31a54d98493aa2db01689a329255b"
  },
  {
    "url": "assets/js/6.edbfb051.js",
    "revision": "2c4341332a1944338203310251a14b8a"
  },
  {
    "url": "assets/js/7.766964ec.js",
    "revision": "d6e05ef02689876a4b186929bf158f1d"
  },
  {
    "url": "assets/js/8.61c528bb.js",
    "revision": "65b5e227622af3e84c705295c1f848f2"
  },
  {
    "url": "assets/js/9.1679f299.js",
    "revision": "5dae08cb8f8d709af3133ab2f347eddf"
  },
  {
    "url": "assets/js/app.547bea4d.js",
    "revision": "d7da75a8dde9529e599f0ad741cfd675"
  },
  {
    "url": "assets/js/vendors~docsearch.e22b0772.js",
    "revision": "ddea9a679a56c07c54e22680388de730"
  },
  {
    "url": "assets/js/vendors~notification.34e5902a.js",
    "revision": "ab690e6b54d44cd91a3f47c474d2620b"
  },
  {
    "url": "cli/command.html",
    "revision": "6d0695b4815eb8be5d66a4b566050caa"
  },
  {
    "url": "cli/configuration.html",
    "revision": "4a7f5fda95f834300ca007b68447923b"
  },
  {
    "url": "cli/index.html",
    "revision": "a8e3513022762c95d90e48fdb23e09ca"
  },
  {
    "url": "core/API.html",
    "revision": "c4b0c55ac0cbc1dad24f18d348ced658"
  },
  {
    "url": "core/index.html",
    "revision": "814bcfa706947368558b861ae9c3da43"
  },
  {
    "url": "googled00a917fedc8f3e4.html",
    "revision": "a6e4cb349c0ccad77455d54df723947e"
  },
  {
    "url": "index.html",
    "revision": "39758061ebb23bc9541d6b00e022909e"
  },
  {
    "url": "lang/english/cli.html",
    "revision": "5b865ed82aee61fc28b0c5d66a36f5a9"
  },
  {
    "url": "lang/english/core.html",
    "revision": "d8f785f6d750f64719e2948186bcbac0"
  },
  {
    "url": "lang/english/guide.html",
    "revision": "08aa60ac10b425cc15e93d15824a801b"
  },
  {
    "url": "lang/english/index.html",
    "revision": "c6860479014788abca094924d2049693"
  },
  {
    "url": "learn/advance/index.html",
    "revision": "b956ecbbc4857188d089bd4ec7db06cf"
  },
  {
    "url": "learn/advance/preload.html",
    "revision": "88fe8c827c826aac11901fc17ac400f0"
  },
  {
    "url": "learn/advance/third-party-wxa.html",
    "revision": "93385b3007feddc1f754b8e587996623"
  },
  {
    "url": "learn/advance/wxa-directive.html",
    "revision": "305b93570dde64b380f0f88a6260db1b"
  },
  {
    "url": "learn/guide/component.html",
    "revision": "9c3a9228ff36745b748b30040918e45f"
  },
  {
    "url": "learn/guide/configuration.html",
    "revision": "7d7841cbacdef7b2211e7676b85ac382"
  },
  {
    "url": "learn/guide/construction.html",
    "revision": "b594df6249b886dc5082531f4bd74932"
  },
  {
    "url": "learn/guide/develop.html",
    "revision": "abe98ea1e93baad9479b3d16fc5bc188"
  },
  {
    "url": "learn/guide/editor.html",
    "revision": "e1fad1a575db5362d735d012dea43d19"
  },
  {
    "url": "learn/guide/index.html",
    "revision": "ca4e634ad8827cc91000cbafaf6eb343"
  },
  {
    "url": "learn/guide/mixin.html",
    "revision": "75bc44d193931199850f9fb7445d287e"
  },
  {
    "url": "learn/guide/plugin.html",
    "revision": "14dc9a91fc3ef3a82870aabcd0242935"
  },
  {
    "url": "learn/index.html",
    "revision": "4b9b6a6ab281f022c3b8a8a8c54303f0"
  },
  {
    "url": "learn/other/migrade1.x.html",
    "revision": "25333fe299c99f2e48c760af51142db6"
  },
  {
    "url": "learn/other/migradeNative.html",
    "revision": "51e7cad13da5a113b77e2eab5509da90"
  },
  {
    "url": "learn/quickStarted/index.html",
    "revision": "0bc3024222e678b36f0c778d6715e5bb"
  },
  {
    "url": "logo-mini.png",
    "revision": "3a7e9954fe49f74554a54f6c1c3558fb"
  },
  {
    "url": "plugin/cli/copy.html",
    "revision": "9adaca466cb8998d4d63c56ff6ab3125"
  },
  {
    "url": "plugin/cli/da.html",
    "revision": "598338c152d3ca08c20b1b313efd1c16"
  },
  {
    "url": "plugin/cli/hijack.html",
    "revision": "8156310c82d7697a7c4d3f2319fee20c"
  },
  {
    "url": "plugin/cli/minify-wxml.html",
    "revision": "cb192e16ce5ef5d530f44192ca0c534a"
  },
  {
    "url": "plugin/cli/postcss.html",
    "revision": "c44b604b84f76d1d1d72bf7c4742b942"
  },
  {
    "url": "plugin/cli/replace.html",
    "revision": "ca0c07357bafed11231319467cb04275"
  },
  {
    "url": "plugin/cli/uglifyjs.html",
    "revision": "d03226cb0345fa495213bbb95b85f9fa"
  },
  {
    "url": "plugin/core/log.html",
    "revision": "f14f15d198ebf750d1fe0167a05be486"
  },
  {
    "url": "plugin/core/redux.html",
    "revision": "982a63446d66169e406df6fd2d77b61f"
  },
  {
    "url": "plugin/core/validate.html",
    "revision": "f35770f7d2a9b281382e80deac82a9b9"
  },
  {
    "url": "plugin/core/watch.html",
    "revision": "361f01b117bdf88522cfadbb6cdd0e6e"
  },
  {
    "url": "wxa-logo.png",
    "revision": "846c5bc097e185602b2ea64c0aa34061"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
