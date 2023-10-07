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
    "revision": "252075d7ff44417692870466b87cd06d"
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
    "url": "assets/js/41.5eb6793f.js",
    "revision": "6e54ce12121772800d30c962cf555f42"
  },
  {
    "url": "assets/js/42.b802577b.js",
    "revision": "efb550364950df0a697b3d44f2b1385c"
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
    "url": "assets/js/45.dc3b502a.js",
    "revision": "7892f8402bb93c825ce8aaa5ed3ee1d6"
  },
  {
    "url": "assets/js/46.f551cf5f.js",
    "revision": "653d113442b25607e589a58e6ba3a3bb"
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
    "url": "assets/js/app.b75c96a6.js",
    "revision": "c0f8e688eb1a37a4c0d380f15ebab384"
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
    "revision": "1fc580d3da9a31207eb28f76c0d97e53"
  },
  {
    "url": "categories/个人笔记/index.html",
    "revision": "95488a9e2e603513782f74cd91ade54b"
  },
  {
    "url": "categories/实用工具/index.html",
    "revision": "118199752ae6f39cba47ae8afe1c622f"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "534d49ea6208f785a7469531334b2c29"
  },
  {
    "url": "css/style.css",
    "revision": "2a9aae5a485dcdea7f8f6cdb94a2bcd1"
  },
  {
    "url": "guide/index.html",
    "revision": "616b12719f1828117395a3d20b7e5501"
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
    "revision": "d0a0649ee9a71cf5dc96f37c82f7b6fd"
  },
  {
    "url": "js/custom.js",
    "revision": "79d0116a276846480bec306f014780ff"
  },
  {
    "url": "tag/index.html",
    "revision": "d9ed315e36ad9a54db831553460cdf35"
  },
  {
    "url": "tags/MySQL/index.html",
    "revision": "3e36710a4ba8c473785feabc6d1a4e74"
  },
  {
    "url": "tags/个人笔记/index.html",
    "revision": "79c82f586b8af374e6f80faa3ba57157"
  },
  {
    "url": "tags/实用软件/index.html",
    "revision": "b5bd2305610b63864c0f8ea68f7cc04f"
  },
  {
    "url": "timeline/index.html",
    "revision": "04e2a728afaf80bc0ed23ebb2c008f40"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "个人笔记/index.html",
    "revision": "d2acd8239514d0fb8d5ee4350b93bb28"
  },
  {
    "url": "实用工具/index.html",
    "revision": "eababb240e4385000396d5cd5ea2c40a"
  },
  {
    "url": "实用工具/压缩软件/index.html",
    "revision": "72681b0f8086822334e4e14bd03aa82a"
  },
  {
    "url": "实用工具/截图软件/index.html",
    "revision": "1a1c08e9587ca4e57bdb24a9fee6ece9"
  },
  {
    "url": "实用工具/播放器软件/index.html",
    "revision": "36ef568b1fbcac96a8e64220408bc1ba"
  },
  {
    "url": "实用工具/音乐软件/index.html",
    "revision": "b4070c5286d336b3a2e32a55f2ad1b7f"
  },
  {
    "url": "数据库/MySQL/MySQL基础篇.html",
    "revision": "d9ffdf4004556173fd9d04d48b3a0ac8"
  },
  {
    "url": "数据库/MySQL/MySQL进阶篇.html",
    "revision": "fddde6084c5c299e06da3212c20df1ca"
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
