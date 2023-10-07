---
title: 关于npm安装完成慢，进度条卡在最后一步的问题解决
date: 2023-10-07
categories:
  - nodejs
tags:
  - npm
author: 猫的树
publish: true
---

造成 npm install 卡顿的原因可能是因为淘宝镜像源不是原来的 https://registry.npm.taobao.org 这个了

淘宝镜像源应该换成以下镜像源

```
https://registry.npmmirror.com
```

```bash
# 查看npm镜像源
npm config get registry

# 如果是这个更换新淘宝镜像源
http://registry.npm.taobao.org

# 淘宝新镜像源
npm config set registry https://registry.npmmirror.com

# 再次查看npm镜像源
npm config get registry
# 显示https://registry.npmmirror.com 完美解决
```

::: tip
npm install 卡顿问题完美解决
:::
