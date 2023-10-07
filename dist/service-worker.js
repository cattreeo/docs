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
    "revision": "599dcaf079f11ea323abf1dcb1877ad3"
  },
  {
    "url": "assets/css/0.styles.c9abfbc3.css",
    "revision": "4d6f907605d24018c2870f7b6eb173a1"
  },
  {
    "url": "assets/img/alipay.8701cc62.svg",
    "revision": "8701cc6229ab9a0b625126cdc1838777"
  },
  {
    "url": "assets/img/github.23fc8f81.svg",
    "revision": "23fc8f81f92bb2981d8f9e089d7df14a"
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
    "url": "assets/img/love.335eff6a.svg",
    "revision": "335eff6a0aefd9ce25d8624c9cae2f54"
  },
  {
    "url": "assets/img/paypal.0614c8ec.svg",
    "revision": "0614c8ec69152b15a48a6508c9ab7373"
  },
  {
    "url": "assets/img/qq.63e39c8c.svg",
    "revision": "63e39c8cb5ba4f6931ea28f722e0f065"
  },
  {
    "url": "assets/img/wechat.702bca7b.svg",
    "revision": "702bca7befb1db3ac5dace5bb9912188"
  },
  {
    "url": "assets/js/1.aa1442b1.js",
    "revision": "20239e4bf75957f38dafeeb14791b277"
  },
  {
    "url": "assets/js/10.45e44b29.js",
    "revision": "626e7e2af66c6fe5239e816e6072687c"
  },
  {
    "url": "assets/js/14.0b473418.js",
    "revision": "c14f3d5b97be77f4050569d684c6b0dc"
  },
  {
    "url": "assets/js/15.7c7eadc1.js",
    "revision": "faad1d802f1202942828904214686e23"
  },
  {
    "url": "assets/js/16.2e226aac.js",
    "revision": "8a0cc1b15210e4e2fcb35f6d155de9e7"
  },
  {
    "url": "assets/js/17.1c430936.js",
    "revision": "7768eea54c7c459518a8b5b7c04530ec"
  },
  {
    "url": "assets/js/18.3f7aa111.js",
    "revision": "75b2bfe6919cfd7f0c6133d594c8e136"
  },
  {
    "url": "assets/js/19.4e7d776a.js",
    "revision": "b6858291ae410b343fc50649c2aa6716"
  },
  {
    "url": "assets/js/2.6f087b9b.js",
    "revision": "de33abb12057e3fc10b6133f8d31a583"
  },
  {
    "url": "assets/js/20.2da87f62.js",
    "revision": "978e8721fe5554941e729766a607c4a4"
  },
  {
    "url": "assets/js/21.639c35ba.js",
    "revision": "a12809d099a50e31ad4b0be0e6ff0c25"
  },
  {
    "url": "assets/js/22.6e151cae.js",
    "revision": "ccd30af19c7c3b58661a104762ee4ffa"
  },
  {
    "url": "assets/js/23.df1d63e7.js",
    "revision": "7123b2b16c29d7774d1276ad9d285f54"
  },
  {
    "url": "assets/js/24.6366b213.js",
    "revision": "553193b28ec2adefec081bc9e4b04a0c"
  },
  {
    "url": "assets/js/25.9fbce778.js",
    "revision": "df2cfe08a709aeaae8278edeb2b52658"
  },
  {
    "url": "assets/js/26.c510522b.js",
    "revision": "8b7d9bc23131f5fbddb19a18df868791"
  },
  {
    "url": "assets/js/27.f042f30c.js",
    "revision": "d5af789e20cac8b928db2c3526c7571c"
  },
  {
    "url": "assets/js/28.261c043f.js",
    "revision": "38fe0152715e5844ec623ac059932540"
  },
  {
    "url": "assets/js/29.649022af.js",
    "revision": "918c50aec434dd070293e8d66afd5531"
  },
  {
    "url": "assets/js/3.66109524.js",
    "revision": "48f408f28266acf35d023bab6cc756d3"
  },
  {
    "url": "assets/js/30.de4dc242.js",
    "revision": "b0fc98335a2eebf5624f4ae0df91264a"
  },
  {
    "url": "assets/js/31.e1d4557e.js",
    "revision": "1d9d863db2340ab11b278cc4f066f919"
  },
  {
    "url": "assets/js/32.56e4f5af.js",
    "revision": "42968607af438b840ba0052974f9a56e"
  },
  {
    "url": "assets/js/33.77f958dd.js",
    "revision": "68a360bdc8104def33c7bdf88c0121a0"
  },
  {
    "url": "assets/js/34.296bb3fe.js",
    "revision": "266c1c1f3df127ff5963d60f0efa8c1c"
  },
  {
    "url": "assets/js/35.dba45e42.js",
    "revision": "c491e757f04dd6bbb55de4270095d41a"
  },
  {
    "url": "assets/js/36.9d25f75e.js",
    "revision": "a4adf4c521047182591541194620f290"
  },
  {
    "url": "assets/js/37.ac06d65c.js",
    "revision": "c4231afe236e718ace07a4689c51e9d0"
  },
  {
    "url": "assets/js/38.2ef57918.js",
    "revision": "5c8fc0a992a367be16aa88150582e94f"
  },
  {
    "url": "assets/js/39.42b190b9.js",
    "revision": "c9f2f6dc2e75e333dd6b8a5de5c17a8d"
  },
  {
    "url": "assets/js/4.3f046c51.js",
    "revision": "46be31f410dd81b7408fce1525533edf"
  },
  {
    "url": "assets/js/40.19727838.js",
    "revision": "963b01a15804b0cbdcb7cd9df9cf7377"
  },
  {
    "url": "assets/js/41.35f8f0ea.js",
    "revision": "cb665df5a0ed886fdee43d71f6bcac07"
  },
  {
    "url": "assets/js/42.336e2891.js",
    "revision": "e30c9fce2f0d18bb2baf416868f5da55"
  },
  {
    "url": "assets/js/43.d74b5bad.js",
    "revision": "08ea49c6a31ecd2c5d809921e8a08295"
  },
  {
    "url": "assets/js/44.54416564.js",
    "revision": "9d41da7d69a97153f14ab509b67fb6d1"
  },
  {
    "url": "assets/js/45.049bcbfa.js",
    "revision": "07d6e5423d8547a09710fb81290a498d"
  },
  {
    "url": "assets/js/46.cedc669f.js",
    "revision": "4f2cc7289ae5dbdde63457f5d9b12960"
  },
  {
    "url": "assets/js/47.e99f4229.js",
    "revision": "b28edc9982930b86e0e2a96b6bbae514"
  },
  {
    "url": "assets/js/48.bdc5d46a.js",
    "revision": "1f688febd56359c1fda335a9d0965361"
  },
  {
    "url": "assets/js/49.40f7498b.js",
    "revision": "bcfdca987b4df20bc59323c145db33fd"
  },
  {
    "url": "assets/js/5.1abf1221.js",
    "revision": "bdd91dda95ec96980caac9777ceb7c71"
  },
  {
    "url": "assets/js/6.1b8608ab.js",
    "revision": "e6d0d601d31f59163febc6c592e956fc"
  },
  {
    "url": "assets/js/7.50c585df.js",
    "revision": "f4eb83460ca531530697fe0c09feb272"
  },
  {
    "url": "assets/js/8.bd1d5cda.js",
    "revision": "1bba0f19478b2f8c232adc89717691d4"
  },
  {
    "url": "assets/js/9.b64472a6.js",
    "revision": "d1a2a8bb0b6a418fc435933518c98904"
  },
  {
    "url": "assets/js/app.4a4a5347.js",
    "revision": "550bbc9f0f68e2503d918100766eeb53"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "0d5153a8e2a52904887161518b9bb41e"
  },
  {
    "url": "assets/js/vendors~docsearch.a24449db.js",
    "revision": "0a6c922abd855057b663f8c5581acc66"
  },
  {
    "url": "assets/js/vendors~flowchart.7b315900.js",
    "revision": "e123f0c6fbea9dab63456a644e9cff30"
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
    "revision": "c8dd3281641749885b8644d00adca71e"
  },
  {
    "url": "categories/个人笔记/index.html",
    "revision": "f513bfb05073f9b398705ade689e2335"
  },
  {
    "url": "categories/实用工具/index.html",
    "revision": "836c1a0b97948f95ff6259c7b91edcc5"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "6b7350c8663c056ddd3f8fcf50db803d"
  },
  {
    "url": "css/style.css",
    "revision": "2a9aae5a485dcdea7f8f6cdb94a2bcd1"
  },
  {
    "url": "guide/index.html",
    "revision": "7a011aad2a08d0341e0c420b5e3697fe"
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
    "url": "img/alipay.jpg",
    "revision": "dcbcbce60021f2d903f8cb7c3c68d822"
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
    "url": "img/wechatpay.jpg",
    "revision": "5add635db79ba6dc14fef32902be4126"
  },
  {
    "url": "index.html",
    "revision": "903c9b03e2c600a05d05879d9c567a49"
  },
  {
    "url": "js/custom.js",
    "revision": "79d0116a276846480bec306f014780ff"
  },
  {
    "url": "tag/index.html",
    "revision": "691ced158252aa62df0d906b5047e09f"
  },
  {
    "url": "tags/MySQL/index.html",
    "revision": "3f1b123a7b7b2dd507c3e6f824763968"
  },
  {
    "url": "tags/个人笔记/index.html",
    "revision": "7512de0c35eaf5e0fb5cc10fd6b1d2ef"
  },
  {
    "url": "tags/实用软件/index.html",
    "revision": "ec3611afcdcdd9fb0013e697e97377e9"
  },
  {
    "url": "timeline/index.html",
    "revision": "550d6c64a07fc32d5e93eacc6196cac8"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "个人笔记/index.html",
    "revision": "a7f915ab0966384d9282abe1a1b61fea"
  },
  {
    "url": "实用工具/index.html",
    "revision": "aba92414f528c0beec46aff2c1131b16"
  },
  {
    "url": "实用工具/压缩软件/index.html",
    "revision": "6c91ce269c6a1e177a6cbea03272ca91"
  },
  {
    "url": "实用工具/截图软件/index.html",
    "revision": "def07243dece25e19f09b250a7dce1d4"
  },
  {
    "url": "实用工具/播放器软件/index.html",
    "revision": "d8c10db5ea7e2127f0c92d9bb8232e68"
  },
  {
    "url": "实用工具/音乐软件/index.html",
    "revision": "26a3f2c2692e2a0fbdf95ba298876524"
  },
  {
    "url": "打赏/index.html",
    "revision": "84a835701788f9748711034dd622e3ce"
  },
  {
    "url": "数据库/MySQL/MySQL基础篇.html",
    "revision": "18e38dda08d1103e196c81ad683508de"
  },
  {
    "url": "数据库/MySQL/MySQL进阶篇.html",
    "revision": "7f85398ac8d6385a343fee558a0371a2"
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
