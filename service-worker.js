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
    "revision": "87eeb874a91bef8abd190f70a0d9e5e5"
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
    "url": "assets/js/40.44d822f7.js",
    "revision": "ff9c3b668fa425a4075bff2eb0109818"
  },
  {
    "url": "assets/js/41.8158dcb5.js",
    "revision": "22c9b5cfb2c176a2534d2ffe7fa2f68e"
  },
  {
    "url": "assets/js/42.0e53895b.js",
    "revision": "91033dda18291890efb456a86667b834"
  },
  {
    "url": "assets/js/43.1013f947.js",
    "revision": "2c98bb565b488d635670ef901fc149b8"
  },
  {
    "url": "assets/js/44.640a1722.js",
    "revision": "8099826f2be2ea8a0e25707eed010c7a"
  },
  {
    "url": "assets/js/45.26562eee.js",
    "revision": "2a15cd4134eed43625797229b9c7abd6"
  },
  {
    "url": "assets/js/46.360fc91e.js",
    "revision": "33c2b5f8e3deda8bbde1bb74efb95a84"
  },
  {
    "url": "assets/js/47.20add423.js",
    "revision": "4a79dab45955fe1ad1296d02f6145c3f"
  },
  {
    "url": "assets/js/48.4bf19523.js",
    "revision": "6abef33a7212a9111663353e9eaf4219"
  },
  {
    "url": "assets/js/49.1baae1ae.js",
    "revision": "18939eafe1f8311d68c197105b19b337"
  },
  {
    "url": "assets/js/5.e18019a0.js",
    "revision": "b574a166de96a15404caeefeb637377e"
  },
  {
    "url": "assets/js/50.352c07bb.js",
    "revision": "ba826634ab64a6d5f029adfbe6d17bb0"
  },
  {
    "url": "assets/js/51.9f535852.js",
    "revision": "04ddf2c32d550896f27be0ca14198c83"
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
    "url": "assets/js/app.283fabfa.js",
    "revision": "1cf58b1f3aafa877b8f61eb317640337"
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
    "revision": "0c07e40d29fcb0198328116c3b3aec2e"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "a17d3cd1731274001fa83f2253ea9ccd"
  },
  {
    "url": "categories/Typora/index.html",
    "revision": "05938f82198e7df2709f5ae8edb9100e"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "b128f9566cbac6f9938243bb0a426bbc"
  },
  {
    "url": "categories/实用工具/index.html",
    "revision": "4340496bb55362ea68feb44a0a215ebc"
  },
  {
    "url": "css/style.css",
    "revision": "2a9aae5a485dcdea7f8f6cdb94a2bcd1"
  },
  {
    "url": "guide/index.html",
    "revision": "eeeb5ded5b965e975809c1ab46f61186"
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
    "revision": "4fb96bd0745f8a29a355d71dbc2210a4"
  },
  {
    "url": "js/custom.js",
    "revision": "79d0116a276846480bec306f014780ff"
  },
  {
    "url": "tag/index.html",
    "revision": "c052d8b611dcf97c182614b79f498bde"
  },
  {
    "url": "tags/MySQL/index.html",
    "revision": "46bfcc82f45d7200f6be7965f9fe857a"
  },
  {
    "url": "tags/npm/index.html",
    "revision": "17915c30e8428026e9202f4419e67a2b"
  },
  {
    "url": "tags/Typora/index.html",
    "revision": "d34adf8e5dbd98592bf08a62f6d64558"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "585de66bca1b520314dd9bf0391045f9"
  },
  {
    "url": "tags/实用软件/index.html",
    "revision": "14e83c99ace318a2ea6443b7ab4cc5ef"
  },
  {
    "url": "timeline/index.html",
    "revision": "1995f778d95ad208f3d5e0bb93484944"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "实用工具/index.html",
    "revision": "4130faf2aba602ea0b1fc18659d0118e"
  },
  {
    "url": "实用工具/压缩软件/index.html",
    "revision": "cc191f69cc999a04290d3a16b62010ca"
  },
  {
    "url": "实用工具/截图软件/index.html",
    "revision": "139920da42bc7bdafe544ba3a4846197"
  },
  {
    "url": "实用工具/播放器软件/index.html",
    "revision": "95b31f741488b4a875d8d9d9818230a2"
  },
  {
    "url": "实用工具/音乐软件/index.html",
    "revision": "b7a56841d33dd8e87919ce91e7cb7168"
  },
  {
    "url": "打赏/index.html",
    "revision": "58935c8d26c5815f8f9a5b15d5c7527b"
  },
  {
    "url": "数据库/MySQL/MySQL基础篇.html",
    "revision": "a0dc7c1f3a5af25f7449d899226ff427"
  },
  {
    "url": "数据库/MySQL/MySQL进阶篇.html",
    "revision": "81c1d3674e1ed002f4b32f56af65fca1"
  },
  {
    "url": "问题解决/Typora编辑器自适应屏幕宽度.html",
    "revision": "6cf3e8a1e6e805fdaad25f87d16afd8a"
  },
  {
    "url": "问题解决/vuepress图片加载不出来的问题.html",
    "revision": "6c4fe443fdf760e52ad2478d94e848ba"
  },
  {
    "url": "问题解决/关于npm安装完成慢，进度条卡在最后一步.html",
    "revision": "d1555f0d231cfe4d4e302d30260f6e70"
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
