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
    "revision": "d42475522e136233ca5b82563ce7b159"
  },
  {
    "url": "assets/css/0.styles.8cb00dde.css",
    "revision": "e166fbb1f695aebe0c9b0c36f7398efa"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.e298d1a5.js",
    "revision": "310a7007a3b9fe492b76b934b6a40387"
  },
  {
    "url": "assets/js/10.18d3c904.js",
    "revision": "c1e39bd352c669ad045011fc6249cb96"
  },
  {
    "url": "assets/js/14.a1005c61.js",
    "revision": "520f82df5d45ecd2b5864e192cf5be1b"
  },
  {
    "url": "assets/js/15.d83b59de.js",
    "revision": "c40f29e2df81fb28e7747eae4b828a0d"
  },
  {
    "url": "assets/js/16.ce107e76.js",
    "revision": "62c00fa74bb836c41347d4371bf78955"
  },
  {
    "url": "assets/js/17.fe81cf99.js",
    "revision": "abfaa70dab3f37e0fbe3f1353876aa40"
  },
  {
    "url": "assets/js/18.2389bf87.js",
    "revision": "42673be34290eb490bf0090e03c42c6f"
  },
  {
    "url": "assets/js/19.7c0e9af1.js",
    "revision": "5ae1a4bac0444da958bbe5ba2e8f95cb"
  },
  {
    "url": "assets/js/2.bc42d281.js",
    "revision": "7e6891326fefc294f5c2567104e18454"
  },
  {
    "url": "assets/js/20.f17f6d97.js",
    "revision": "fe7b358d578875b753be6230583c9037"
  },
  {
    "url": "assets/js/21.b373e2e0.js",
    "revision": "8fb0ed13b370c223b1fea6084f0ddd58"
  },
  {
    "url": "assets/js/22.b95e726d.js",
    "revision": "d2c2d90f0ae3788ce245e131ca9e88ed"
  },
  {
    "url": "assets/js/23.70b931f8.js",
    "revision": "7e70a0561125ac9215a8b17d15d8ca4d"
  },
  {
    "url": "assets/js/24.20caa42c.js",
    "revision": "97ca5a2d9dd366702063a37967ca47bc"
  },
  {
    "url": "assets/js/25.6908d982.js",
    "revision": "311d443ea63d45595b7f1ae1ec9863ba"
  },
  {
    "url": "assets/js/26.cb234c0b.js",
    "revision": "7787ab3254f3efb8fc97ad8a05b5c1f6"
  },
  {
    "url": "assets/js/27.9b5bed10.js",
    "revision": "1138b0f4f57cf99c17122712a0a361a3"
  },
  {
    "url": "assets/js/28.800ce331.js",
    "revision": "bfa2678bd7a901722e8dd6befa64e0fa"
  },
  {
    "url": "assets/js/29.8b774d57.js",
    "revision": "a95a0bb3b9c01d3bbbe16caf7646aad1"
  },
  {
    "url": "assets/js/3.7c7abb6a.js",
    "revision": "0c7d1c6301cbf485489685888df309d0"
  },
  {
    "url": "assets/js/30.76e12d6a.js",
    "revision": "e2537f922d89029a9f25ab76a0f32f1d"
  },
  {
    "url": "assets/js/31.715cd18b.js",
    "revision": "74e6762921991aeb8f365be50431109a"
  },
  {
    "url": "assets/js/32.299f3a28.js",
    "revision": "204ae51eb2055932f216b14a092769cb"
  },
  {
    "url": "assets/js/33.a0510a1b.js",
    "revision": "9eb2a06e7598b8c04ba27db7e263f799"
  },
  {
    "url": "assets/js/34.1c866000.js",
    "revision": "f73b03d9c250049aa937cee31febdd8f"
  },
  {
    "url": "assets/js/35.bba59a96.js",
    "revision": "fd132f6ad5ab3701617d26c38b339ea7"
  },
  {
    "url": "assets/js/36.5c16cfe3.js",
    "revision": "08934e3edb81fc90d7449efb3529f7a3"
  },
  {
    "url": "assets/js/37.a0353636.js",
    "revision": "dd8927b4b077ca0376f80defd8e77b3a"
  },
  {
    "url": "assets/js/38.ccf19b6d.js",
    "revision": "9f9438934dbeed5df3095ad0fe481295"
  },
  {
    "url": "assets/js/39.a614d9b9.js",
    "revision": "7762fdacc62c6b0bc9fac05e0e248c82"
  },
  {
    "url": "assets/js/4.748eec13.js",
    "revision": "54fa4e487dc3615feb99b618e2ee013b"
  },
  {
    "url": "assets/js/40.373ac5a8.js",
    "revision": "5d2c01c4b9ce2d3ef788097102ef911b"
  },
  {
    "url": "assets/js/41.373cbecd.js",
    "revision": "1c8e5b8229dd932c48af6e53ee60f3f2"
  },
  {
    "url": "assets/js/42.55a40ccc.js",
    "revision": "36a15a172d4f034cbd42a34a96285bdd"
  },
  {
    "url": "assets/js/43.d74b5bad.js",
    "revision": "08ea49c6a31ecd2c5d809921e8a08295"
  },
  {
    "url": "assets/js/44.6cd7ddc1.js",
    "revision": "b9381f96c85df836a94eac1c8d207dae"
  },
  {
    "url": "assets/js/45.3af90d2c.js",
    "revision": "96f76f2bd95866ce05dfbb8d7024fb9f"
  },
  {
    "url": "assets/js/46.2ce816b5.js",
    "revision": "4293a114ee1d9b388c315308830f5daf"
  },
  {
    "url": "assets/js/47.a4374664.js",
    "revision": "36a74897e569232df01a62ea898e8f32"
  },
  {
    "url": "assets/js/48.bdf42b88.js",
    "revision": "63d3d355c3f1348a1ed9e5e6140656cb"
  },
  {
    "url": "assets/js/5.ad72019f.js",
    "revision": "35c179b4c5530bc61dd22d20e8b29b68"
  },
  {
    "url": "assets/js/6.1ffb84ff.js",
    "revision": "0b53636b52d759da81edc79ae2d8efa4"
  },
  {
    "url": "assets/js/7.1d05d7ab.js",
    "revision": "064646ebe69114f06d8e40af1176f953"
  },
  {
    "url": "assets/js/8.2427d2a6.js",
    "revision": "5532077d6988d70e5cb1355a3b450423"
  },
  {
    "url": "assets/js/9.6b6bbce2.js",
    "revision": "da56bc264a734223156eca67d5b2b3e1"
  },
  {
    "url": "assets/js/app.b9c22207.js",
    "revision": "e8c409384354e675da45b489778dbf7c"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "0d5153a8e2a52904887161518b9bb41e"
  },
  {
    "url": "assets/js/vendors~docsearch.2da75128.js",
    "revision": "e26744b97ba837fa64cf93323a6e0c72"
  },
  {
    "url": "assets/js/vendors~flowchart.92193421.js",
    "revision": "67f210103f2af288c40b502c15ce3e22"
  },
  {
    "url": "avatar.jpg",
    "revision": "87019b41d67c32676299f9697fe36b40"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "abe743f1284cc97240579ab20a365c9e"
  },
  {
    "url": "categories/个人笔记/index.html",
    "revision": "99721e3f2000bc41186d0f5005866d1c"
  },
  {
    "url": "categories/实用工具/index.html",
    "revision": "0dae681508b4a8c68e087619a8482307"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "f24d20af6f7d8e6fd56803c6f9323e4b"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "cd5ceedf6b26563f84a0f49f2b779f05"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.jpg",
    "revision": "87019b41d67c32676299f9697fe36b40"
  },
  {
    "url": "img/logo.png",
    "revision": "d2b8bf8ec0dfa05c393339df50333af3"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "0f44af19abcfa1afa250cf3168a06dfd"
  },
  {
    "url": "js/custom.js",
    "revision": "79d0116a276846480bec306f014780ff"
  },
  {
    "url": "tag/index.html",
    "revision": "761e9d7b4ac32674cf8d9bd9fb1425a9"
  },
  {
    "url": "tags/MySQL/index.html",
    "revision": "c93940fba023220f28577f12ecebfb21"
  },
  {
    "url": "tags/个人笔记/index.html",
    "revision": "c0ddccfc4a8260a78b559b77b5a2bba3"
  },
  {
    "url": "tags/实用软件/index.html",
    "revision": "164972241f475089123af7f9f704616f"
  },
  {
    "url": "timeline/index.html",
    "revision": "273cb1ad349eb675dda44cb2ea359abe"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "个人笔记/index.html",
    "revision": "7ed7093158dc7a3750c125b65c4a1fd4"
  },
  {
    "url": "实用工具/index.html",
    "revision": "50bdf705b473e16d1eaec9f62745fb52"
  },
  {
    "url": "实用工具/压缩软件/index.html",
    "revision": "5ceb89c784eb9b2f102525d69e9fcd43"
  },
  {
    "url": "实用工具/截图软件/index.html",
    "revision": "e5b40a21f45fa8f8d3326256bc8044af"
  },
  {
    "url": "实用工具/播放器软件/index.html",
    "revision": "bafd1547ca95c7a28baa05c31f262ac2"
  },
  {
    "url": "实用工具/音乐软件/index.html",
    "revision": "d69a9f1e3192ecc103b4039274b8b299"
  },
  {
    "url": "数据库/MySQL/MySQL基础篇.html",
    "revision": "9920d7d8d1cfa31f68973b84c581c133"
  },
  {
    "url": "数据库/MySQL/MySQL进阶篇.html",
    "revision": "90dd0efdf8856d6c5c88fbe25642e4a8"
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
