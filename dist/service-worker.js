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
    "revision": "df9c5542c3afb551c422ca0c7684219b"
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
    "url": "assets/js/42.9ae00bb4.js",
    "revision": "553bd8ea6776c1d92eece0881c8e0676"
  },
  {
    "url": "assets/js/43.e6a5be60.js",
    "revision": "17d281428f1ec499efb2b7ca09cf6688"
  },
  {
    "url": "assets/js/44.928dd23e.js",
    "revision": "c3156791e2d17f9beede1afd5a0c266d"
  },
  {
    "url": "assets/js/45.dc3b502a.js",
    "revision": "7892f8402bb93c825ce8aaa5ed3ee1d6"
  },
  {
    "url": "assets/js/46.4470899f.js",
    "revision": "13032e49ddad8cafd72ca3b5b8057a25"
  },
  {
    "url": "assets/js/47.e99f4229.js",
    "revision": "b28edc9982930b86e0e2a96b6bbae514"
  },
  {
    "url": "assets/js/48.802eebea.js",
    "revision": "0a29fda6b27983ead21ffbb565a5c22f"
  },
  {
    "url": "assets/js/49.1dc79c21.js",
    "revision": "3df72199526a192342614f10323d944e"
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
    "url": "assets/js/app.08861b5f.js",
    "revision": "5ba26ddf1b8d1c1a50e8551ae39c789a"
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
    "revision": "637e8b7349b2a701fdd294c4b6b0be78"
  },
  {
    "url": "categories/个人笔记/index.html",
    "revision": "3e4e120b0749fa9c9a2df931626cebd8"
  },
  {
    "url": "categories/实用工具/index.html",
    "revision": "2de1ca460214cf6312052c0f377d7cd4"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "bb207b40dffaf6c3036eae98e53cfc92"
  },
  {
    "url": "css/style.css",
    "revision": "2a9aae5a485dcdea7f8f6cdb94a2bcd1"
  },
  {
    "url": "guide/index.html",
    "revision": "09aadbd32394b67288f15a0fdd86a53f"
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
    "revision": "be5d7d4fbc54db42d3fc03b15852f352"
  },
  {
    "url": "js/custom.js",
    "revision": "79d0116a276846480bec306f014780ff"
  },
  {
    "url": "tag/index.html",
    "revision": "65c74bf80009ded297e6618e2f5f521d"
  },
  {
    "url": "tags/MySQL/index.html",
    "revision": "6074dbe2cac103b7c839821a702acc24"
  },
  {
    "url": "tags/个人笔记/index.html",
    "revision": "c74f53d50416c919418a8e17916d7b23"
  },
  {
    "url": "tags/实用软件/index.html",
    "revision": "866e161d2d149e4aa6774cb0f7b1e4d3"
  },
  {
    "url": "timeline/index.html",
    "revision": "47f8bf5cd671b7055d4fd09344fe91bd"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "个人笔记/index.html",
    "revision": "a1cfbd6a59547987c46420a5160fe1b6"
  },
  {
    "url": "实用工具/index.html",
    "revision": "608312e87f102293cb025bddc9e99ac7"
  },
  {
    "url": "实用工具/压缩软件/index.html",
    "revision": "f15d43c73f14cadd673afbb614db24a8"
  },
  {
    "url": "实用工具/截图软件/index.html",
    "revision": "b8cdc62e2b62e41dc65c77fdd1d5fdfe"
  },
  {
    "url": "实用工具/播放器软件/index.html",
    "revision": "a19d187f98037ad379bccd449a68a5f7"
  },
  {
    "url": "实用工具/音乐软件/index.html",
    "revision": "6adf35f472c1f721892a1052b915544d"
  },
  {
    "url": "打赏/index.html",
    "revision": "d9e0b96a3b83f94b6eba0d317e3be154"
  },
  {
    "url": "数据库/MySQL/MySQL基础篇.html",
    "revision": "a1fa5ab20d8d3dc6fb833cec82346273"
  },
  {
    "url": "数据库/MySQL/MySQL进阶篇.html",
    "revision": "817ad7bf4b9ff798cc8569c0226ff8a4"
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
