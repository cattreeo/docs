---
title: vuepress图片加载不出来的问题解决
date: 2023-10-07
categories:
  - vuepress
tags:
  - vuepress
author: 猫的树
publish: true
---

:::tip
config.js 中添加以下代码
:::

```javascript
module.exports = {
  head: [
    [
      "meta",
      {
        name: "referrer",
        content: "no-referrer",
      },
    ],
  ],
};
```
