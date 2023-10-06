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
    "revision": "b2cd622dfb89ff39f203a8445e5c9cee"
  },
  {
    "url": "assets/css/0.styles.8cb00dde.css",
    "revision": "e166fbb1f695aebe0c9b0c36f7398efa"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
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
    "url": "assets/js/1.157fda13.js",
    "revision": "0025e163d2d9789e7708bd4d6269e60d"
  },
  {
    "url": "assets/js/10.6e071061.js",
    "revision": "ca28a5c551a846846c95f2e8915c4288"
  },
  {
    "url": "assets/js/14.a1005c61.js",
    "revision": "520f82df5d45ecd2b5864e192cf5be1b"
  },
  {
    "url": "assets/js/15.5cfa5c82.js",
    "revision": "610b7cb9db75ad609af315bc08d4d56b"
  },
  {
    "url": "assets/js/16.ce107e76.js",
    "revision": "62c00fa74bb836c41347d4371bf78955"
  },
  {
    "url": "assets/js/17.9d582f7f.js",
    "revision": "26387e289e247650a67392ceea52947e"
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
    "url": "assets/js/2.b2486df3.js",
    "revision": "e6698e851c6fb06c762000b7dd026808"
  },
  {
    "url": "assets/js/20.b04c0848.js",
    "revision": "2bfc48d346d1e327eec18735c5580cab"
  },
  {
    "url": "assets/js/21.b373e2e0.js",
    "revision": "8fb0ed13b370c223b1fea6084f0ddd58"
  },
  {
    "url": "assets/js/22.1122767b.js",
    "revision": "1d4c7200fc5828a33f237728ab928ef8"
  },
  {
    "url": "assets/js/23.56095149.js",
    "revision": "b4fe5c2a0b1b8135edf113f2ee710cd5"
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
    "url": "assets/js/27.7766776e.js",
    "revision": "815f8f9a7a0b5a3198a18ab849fd5457"
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
    "url": "assets/js/3.55c0b3eb.js",
    "revision": "b326195172eae3d8a496b031adf3c70a"
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
    "url": "assets/js/37.85f9fc9e.js",
    "revision": "c84787b5714536994fd1b3f523644d01"
  },
  {
    "url": "assets/js/38.84ea9503.js",
    "revision": "ea5c7e20f2cf123d2c939eb6edeaa498"
  },
  {
    "url": "assets/js/39.2e692aae.js",
    "revision": "2e47c686614d847e993da55e15f20573"
  },
  {
    "url": "assets/js/4.ae2965bf.js",
    "revision": "1ec79bf42479596ae68ab8aaec921a75"
  },
  {
    "url": "assets/js/40.e2b556c3.js",
    "revision": "aa847afa3064ebe8eea7b1128ae7ce0d"
  },
  {
    "url": "assets/js/41.4a8b6a29.js",
    "revision": "489b163ef5f49be664905aec25d273f4"
  },
  {
    "url": "assets/js/42.7260513a.js",
    "revision": "7eba9ed0101076cb883b9e12c3fbfa8c"
  },
  {
    "url": "assets/js/43.f8374c2c.js",
    "revision": "94aa390f9f73e83c779c07d71f7bdd03"
  },
  {
    "url": "assets/js/44.0aa0512a.js",
    "revision": "210c043e08e7f8fd1a403d87b9a8b956"
  },
  {
    "url": "assets/js/45.359104a6.js",
    "revision": "4b00ffe12ced01007db8fad88ff103d8"
  },
  {
    "url": "assets/js/5.e91d217c.js",
    "revision": "cc6ee74b0a528408ad40412e82415756"
  },
  {
    "url": "assets/js/6.c2228eeb.js",
    "revision": "780b822012e841a32f1d1642f3b9e29d"
  },
  {
    "url": "assets/js/7.1d05d7ab.js",
    "revision": "064646ebe69114f06d8e40af1176f953"
  },
  {
    "url": "assets/js/8.baf6d0ef.js",
    "revision": "be5c43568e9d20ec1f653b595c41b2e9"
  },
  {
    "url": "assets/js/9.7a138c51.js",
    "revision": "884a439b7bb2fa3918d78a30e8e458db"
  },
  {
    "url": "assets/js/app.570ddca7.js",
    "revision": "6400d70810018763b290dff015a165d8"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.a24449db.js",
    "revision": "0a6c922abd855057b663f8c5581acc66"
  },
  {
    "url": "assets/js/vendors~flowchart.af2c82a5.js",
    "revision": "bd267d5696890fed7f370b7d4d7fea66"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "8b9fda599d258a2261121fed7e536ad2"
  },
  {
    "url": "categories/java/index.html",
    "revision": "fa65bc583fb21309e56a2ffff56e1dbc"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "8ba9dacc3800bccb95b807ac1f0d65e7"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4cc6ea0555544fa64dec4526e93b586e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "0b24a5cbef334e813ff19b667a24eb88"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "25746e30e403124f032946d310d1d46d"
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
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
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
    "revision": "b72f0a1cabe362a6de4a6ddb5f39e269"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "741c83e54981a94dc86b811dc0c4640a"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "4d602c76430df9fc78cc0ad2695af22c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "92760d233512f8ac62d9a4b354842842"
  },
  {
    "url": "tags/js/index.html",
    "revision": "733adb225cabb51fbd8ef998d85ce80c"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "880587ff57204b9344f9dc91fb0e8469"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "9538e807e7d67c6b4a7c220fb7f9c5f4"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "197032c28e5921898f735fbd9a46f1bd"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "f926e5fb1b5ad9c14e186c80c8450332"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "dfdc8143fe1ddafce0e4723601c8680e"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f783b5924320cf24dd8f3b7eccca7ed0"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "878c63a3c6414074f2a20f17e0b212b7"
  },
  {
    "url": "timeline/index.html",
    "revision": "9f9f6342eee570d063b73f12746542c0"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "8fa93b5af5b4ae2c72ef0d661a46d5ba"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "7532baea42e80d62dd0024872b36d6c3"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "ac53d397b9c57314815f0ca42a672646"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "9bc53d7f5230937cc19da429a752245d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "1322c2820fa58d5fe7430a34922afcb4"
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
