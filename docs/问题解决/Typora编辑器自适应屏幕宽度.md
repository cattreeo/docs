---
title: Typora编辑器自适应屏幕宽度
date: 2023-10-07
categories:
  - Typora
tags:
  - Typora
author: 猫的树
publish: true
---

**第一步**：在导航栏主题这里找到当前使用的主题，然后在心里记下它，如下图：

![image-20220907071615809](https://gitee.com/cattreeo/typora-picture/raw/master/typora-picture/202209070716873.webp)

**第二步**：在 Mac 版本上依次点击打开`偏好设置，外观，打开主题文件夹`，然后找到第一步主题对应的`css`文件，如下图；

<img src="https://gitee.com/cattreeo/typora-picture/raw/master/typora-picture/202209070717044.webp" alt="image-20220907071755980"  />

使用文本编辑器打开`css`文件。

**第三步**：通过`ctrl+f`搜索`#write`找到如下代码：

```css
#write {
  max-width: 840px;
  margin: 0 auto;
  padding: 20px 30px 100px;
}
```

在上面代码中`max-width`的值固定为`840px`，因此才会出现[Typora](https://www.jsnds.cn/tags/typora/)在全屏状态下无论我们的屏幕有多宽，[Typora](https://so.csdn.net/so/search?q=Typora&spm=1001.2101.3001.7020)编辑器窗口仍然都是固定大小。

对上面代码做如下改动，如下代码：

```css
#write {
  max-width: 94%;
  margin: 0 auto;
  padding: 20px 30px 100px;
}
```

将`max-width`的值调整为`94%`，意思是在全屏状态下编辑器窗口宽度会自动占用`94%`的宽度。

调整完成以后保存`css`文件，然后重启启动[Typora](https://www.jsnds.cn/tags/typora/)即可看到自适应宽度效果。

对于**高阶版**用户可能还会调整源文件编辑器宽度，依然是调整对应主题的`css`文件，代码如下：

```css
#typora-source .CodeMirror-lines {
  max-width: 94%;
}
```

直接将上面代码粘贴到 css 的任意位置即可。

**总结：**

```css
<!--需要修改的css-- > #write {
  max-width: 94%;
  margin: 0 auto;
  padding: 20px 30px 100px;
}
<!--需要添加的css-- > #typora-source .CodeMirror-lines {
  max-width: 94%;
}
```
