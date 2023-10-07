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
    "revision": "a6541a1c2fe169373fa0f86a13276b84"
  },
  {
    "url": "assets/css/0.styles.31f118f1.css",
    "revision": "d3aee5ceda13ace39f4dc21c71cc1a4c"
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
    "url": "assets/js/1.66295b0e.js",
    "revision": "fee9fa5426037a47849646441de26cc6"
  },
  {
    "url": "assets/js/10.9228e3c9.js",
    "revision": "82b193f0510e64ac15957595364e4f98"
  },
  {
    "url": "assets/js/14.9e55a03b.js",
    "revision": "8961fa7341c3ba13bf5d0b7233ff1b2f"
  },
  {
    "url": "assets/js/15.3c8f9e96.js",
    "revision": "4b7955f4fdeacbe9a2420891fc984a3a"
  },
  {
    "url": "assets/js/16.75a6b955.js",
    "revision": "adc71253ea6568d8bc5ae475ffcdd1a7"
  },
  {
    "url": "assets/js/17.8f1c2161.js",
    "revision": "ac11464e27e60c851b5bb6bdfddb85ba"
  },
  {
    "url": "assets/js/18.a140e5d3.js",
    "revision": "ec93eee4ad8f11e1b359241f736d1db6"
  },
  {
    "url": "assets/js/19.81aa7929.js",
    "revision": "eb25078dc1c27fd0395a9c5749d1f6ae"
  },
  {
    "url": "assets/js/2.ddcef04d.js",
    "revision": "4359b288b6dcbe98a922aaf276031fbd"
  },
  {
    "url": "assets/js/20.981051d5.js",
    "revision": "700d077d54b7fcabc3a3ad8712de9d71"
  },
  {
    "url": "assets/js/21.3026b1a5.js",
    "revision": "c575da6b33c62532a9f384becc63f399"
  },
  {
    "url": "assets/js/22.c9c2caa0.js",
    "revision": "72cac21eaa4cba457f994247d710f038"
  },
  {
    "url": "assets/js/23.57cdb8b1.js",
    "revision": "106d9adcb42fe338a82e6afca1081123"
  },
  {
    "url": "assets/js/24.aa9e7f2f.js",
    "revision": "04bab4e4762ea13b4768c8a5aacbfc62"
  },
  {
    "url": "assets/js/25.7c315e73.js",
    "revision": "f7ec4d47b4f03282b8fd075160b43823"
  },
  {
    "url": "assets/js/26.3dba70da.js",
    "revision": "028b994c76b32bbc3907575c45ed0dc1"
  },
  {
    "url": "assets/js/27.d593ca04.js",
    "revision": "a1f0ecd58c64ca737e97d2b695db2fcc"
  },
  {
    "url": "assets/js/28.9e4248db.js",
    "revision": "e17b22e8a679e7c583f32d20348b9d88"
  },
  {
    "url": "assets/js/29.9d9487a3.js",
    "revision": "78dc9c1db794d76fa19cbdb3493af37c"
  },
  {
    "url": "assets/js/3.06215513.js",
    "revision": "2810fd42c395c037b07a24efc3c65389"
  },
  {
    "url": "assets/js/30.922f2c4b.js",
    "revision": "d72e2879ff5db54f5a10e23d25126bd4"
  },
  {
    "url": "assets/js/31.2146902e.js",
    "revision": "3f513ad95a42a7674eeb4458b26519aa"
  },
  {
    "url": "assets/js/32.7ee961e3.js",
    "revision": "90f4fd58bd9cbe23e1da5345a2c634ca"
  },
  {
    "url": "assets/js/33.d3f40d0f.js",
    "revision": "b94393b90ee9fcf05c67551710bef376"
  },
  {
    "url": "assets/js/34.a10de94d.js",
    "revision": "7b10c997d01f69cf53d6a384648d87a9"
  },
  {
    "url": "assets/js/35.efa42cf5.js",
    "revision": "8181bb05fa082943c9eec22631e35ab8"
  },
  {
    "url": "assets/js/36.aee3b148.js",
    "revision": "1f30def8418513e1648b33528a3469ac"
  },
  {
    "url": "assets/js/37.6c2c0a6c.js",
    "revision": "025577f3c78ec3b069ccad6e9e7bad36"
  },
  {
    "url": "assets/js/38.5b4942aa.js",
    "revision": "5c95ff6b2aaf4769c445fba77e626567"
  },
  {
    "url": "assets/js/39.05ecdb82.js",
    "revision": "c50f89f068e383946584c5f2bf5a192c"
  },
  {
    "url": "assets/js/4.3ecfa362.js",
    "revision": "928840fa7232efb54dae7e082f205728"
  },
  {
    "url": "assets/js/40.be26ab4e.js",
    "revision": "c78d14ef04af38642c79efd2c1fd1d17"
  },
  {
    "url": "assets/js/41.e3b75d46.js",
    "revision": "946522ef44db455f35ec96921bc3cf67"
  },
  {
    "url": "assets/js/42.0e53895b.js",
    "revision": "91033dda18291890efb456a86667b834"
  },
  {
    "url": "assets/js/43.a3620ede.js",
    "revision": "273b8f029dec205c626526571af41525"
  },
  {
    "url": "assets/js/44.4a0d7d4c.js",
    "revision": "3df5cf124783507c04c6c508dbbc8d35"
  },
  {
    "url": "assets/js/45.cf8c629e.js",
    "revision": "d3159f8e66fe73317edcae8c1cf6e9cf"
  },
  {
    "url": "assets/js/46.d68216ca.js",
    "revision": "b272fd31096c0e5ff6c821da8df2f589"
  },
  {
    "url": "assets/js/47.effffd1e.js",
    "revision": "931f84a0ae4b8e45a13a2521ea5bd73c"
  },
  {
    "url": "assets/js/48.71b9d323.js",
    "revision": "d6848a117105375297a9fe704d7b5d39"
  },
  {
    "url": "assets/js/49.6651f0f5.js",
    "revision": "6c5772f1a5358d9ffda422703ca527fd"
  },
  {
    "url": "assets/js/5.e18019a0.js",
    "revision": "b574a166de96a15404caeefeb637377e"
  },
  {
    "url": "assets/js/50.33e6867e.js",
    "revision": "a381eee4fd3ba6eeeb9e4bff97c8db0d"
  },
  {
    "url": "assets/js/51.dcc77d1e.js",
    "revision": "41df66c033719c40565845627095d443"
  },
  {
    "url": "assets/js/6.20dd6c5a.js",
    "revision": "45cd374206f8f4a50a2b1602aec7a8f1"
  },
  {
    "url": "assets/js/7.a6544ae1.js",
    "revision": "4db42c9be27c01c9b1b5a7102376ccf0"
  },
  {
    "url": "assets/js/8.686bdb52.js",
    "revision": "f5af63984c8787c1573acda1cab8957b"
  },
  {
    "url": "assets/js/9.29af29e5.js",
    "revision": "4a3affad45b6c6db857eab595c72004b"
  },
  {
    "url": "assets/js/app.a22e1a2b.js",
    "revision": "24d8c17daa6c295dea1a4c4d25984273"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "0d5153a8e2a52904887161518b9bb41e"
  },
  {
    "url": "assets/js/vendors~docsearch.5025dcda.js",
    "revision": "e4792e54a86cfd7954369bf55afa8d0f"
  },
  {
    "url": "assets/js/vendors~flowchart.a4c5c074.js",
    "revision": "9d7199ab20a6c834918c8f5dc750cd87"
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
    "revision": "f313cb21047bc05be377775e23f56fad"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "4b6b3039da5ac4d0bae6d2a0da864e50"
  },
  {
    "url": "categories/Typora/index.html",
    "revision": "04576f09015cad11840f38e7d8bfbd29"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "2871122600f7a3a8664958d9a6ad475e"
  },
  {
    "url": "categories/实用工具/index.html",
    "revision": "288acdab4a80d9c246f85741d2be1692"
  },
  {
    "url": "css/style.css",
    "revision": "2a9aae5a485dcdea7f8f6cdb94a2bcd1"
  },
  {
    "url": "guide/index.html",
    "revision": "77d26de76f2b361ddba448341902e688"
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
    "revision": "af7b9acd7410e9c683a5e05c261b6ad9"
  },
  {
    "url": "js/custom.js",
    "revision": "79d0116a276846480bec306f014780ff"
  },
  {
    "url": "tag/index.html",
    "revision": "1412766c8793f66323fbc006c5757abe"
  },
  {
    "url": "tags/MySQL/index.html",
    "revision": "f43db4a7d2833b1ddf4e4146c7c85bdf"
  },
  {
    "url": "tags/npm/index.html",
    "revision": "b2a591b0e88e619db9fb6f7eed3d6133"
  },
  {
    "url": "tags/Typora/index.html",
    "revision": "1fb7fe9812cc3d384327adb6575123b0"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "21db4bea41da34adc45bd56eac45b622"
  },
  {
    "url": "tags/实用软件/index.html",
    "revision": "0928fb02bbbbe0ca51db37cd7315543f"
  },
  {
    "url": "timeline/index.html",
    "revision": "e7fd0bc8e710c7ba587e9f3b9c876178"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "实用工具/index.html",
    "revision": "92bcab36682e10dbbee3158d107ae24c"
  },
  {
    "url": "实用工具/压缩软件/index.html",
    "revision": "95f150906ad4d3a1cab064e2f03873e7"
  },
  {
    "url": "实用工具/截图软件/index.html",
    "revision": "7c59470c30bfeea00c0700133d9888dc"
  },
  {
    "url": "实用工具/播放器软件/index.html",
    "revision": "2d94625f5f6e1d9a7a6f627fdea34bd3"
  },
  {
    "url": "实用工具/音乐软件/index.html",
    "revision": "34e23b78cea2c4a6ba08dc1a8a617fb4"
  },
  {
    "url": "打赏/index.html",
    "revision": "8eca24334919b03d4461b5d40f67bfb8"
  },
  {
    "url": "数据库/MySQL/MySQL基础篇.html",
    "revision": "8ebca88ac4181490209b70da02948b66"
  },
  {
    "url": "数据库/MySQL/MySQL进阶篇.html",
    "revision": "3004f9f9444551d0dc46dd98712593c8"
  },
  {
    "url": "问题解决/Typora编辑器自适应屏幕宽度.html",
    "revision": "dcd20bee20ae816d0205642883640fcc"
  },
  {
    "url": "问题解决/vuepress图片加载不出来的问题.html",
    "revision": "087642cf9ae2cc0048ef4ad9101c1b0f"
  },
  {
    "url": "问题解决/关于npm安装完成慢，进度条卡在最后一步.html",
    "revision": "36445b3eb07acf61a1ab4f88c1eb8a52"
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
