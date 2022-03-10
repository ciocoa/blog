---
layout: Post
title: CSS
subtitle: CSS 重点知识、高频面试点总结
author: Ciocola
date: 2022-02-23
useHeaderImage: true
headerImage: /img/posts/css/header.jpg
headerMask: rgb(67, 65, 47, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - CSS
---

# CSS

选择器及权重

- 内联样式 (1000)
- ID 选择器 (100)
- 类选择器、属性选择器、伪类选择器 (10)
- 标签选择器、伪元素选择器 (1)
- 兄弟选择器、后代选择器、子选择器、通配符选择器 (0)

## 继承属性

CSS 中, 子元素会继承父元素的一些属性:

- 可以继承的属性有: 字体系列属性, 文本系列属性, 表格布局属性, 列表属性等; 几个特殊点`a`标签字体颜色无法继承, `h1~h6`标签字体大小无法继承
- 无法继承的属性有: display, 盒子模型的属性, 背景属性, 定位浮动等

## 盒子模型

一个盒子由四个部分组成: `content` `padding` `border` `margin`, CSS 中盒子模型可以分为:

- W3C 标准盒子模型: `width/height` + `padding` + `border` + `margin`
- IE 怪异盒子模型: `width/height` + `margin`

CSS 中`box-sizing`属性定义了浏览器引擎该如何解析:

- `content-box`元素的`width/height`不包含`padding`、`border`, 与标准盒子模型表现一致
- `border-box`元素的`width/height`包含`padding`、`border`, 与怪异盒子模型表现一致
- `inherit`指定`box-sizing`属性的值应该从父元素继承

## CSS 布局单位

相对长度单位: em、ex、ch、rem、vw、vh、%、vmin、vmax; 绝对长度单位: px、cm、mm、pt、pc、in

- `px` 就是呈现在显示器上的小点, 表示终端设备屏幕所能显示的最小区域, 物理像素与设备的硬件密度有关, 任何设备的物理像素都是固定的
- `%` 当浏览器宽度或高度发生变化时, 通过百分比单位使浏览器中元素的宽高随之变化, 从而实现响应式的效果
- `em` 相对于当前对象内文本的字体尺寸, 如当前行内文本字体尺寸未设置, 则相对于浏览器的默认字体尺寸(1em = 16px)
- `rem` 与`em`不同点在于相对于 HTML 根元素`font-size`的值, 利用`rem`可以实现简单的响应式布局
- `vw`和`vh`是与视图窗口相关的单位, `vw`表示相对于视窗的宽度, `vh`表示相对于视窗的高度

## 响应式布局

页面的设计与开发根据用户行为及设备环境进行相应的响应与调整, 可以通过媒体查询(`@media`)检测不同设备屏幕尺寸做处理, 百分比、vw/vh、rem

浮动、定位、flex、grid、栅格系统

### Flex 布局

弹性盒布局, 采用`flex`布局的元素称为`flex`容器`container`; 子元素自动成为容器成员, 称为`flex`项目`item`. 容器默认存在两条轴, 水平的主轴和垂直的交叉轴

- 设置在容器上的属性有:
  - `flex-direction`: 决定主轴的方向 row、row-reverse、column、column-recerse
  - `flex-wrap`: 项目是否换行
  - `flex-flow`: `flex-direction`和`flex-wrap`的合并写法
  - `justify-content`: 项目在主轴的对齐方式
  - `align-items`: 项目在交叉轴上的对齐方式
  - `align-content`: 多根轴线的对齐方式, 只有一根轴线该属性不起作用
- 设置在项目上的属性有:
  - `order`: 项目的排列顺序, 数值越小排列越靠前
  - `flex-grow`: 项目的放大比例
  - `flex-shrink`: 项目的缩小比例
  - `flex-basis`: 分配多余空间之前, 项目占据的主轴空间
  - `flex`: `flex-grow` `flex-shrink` `flex-basis`的简写(0 1 auto)
  - `align-self`: 允许单个项目有与其他项目不同的对齐方式, 可覆盖`align-items`属性

### Grid 布局

网格布局是一种二维的布局方式, 由两组相交的网格线形成的框架形成的框架性布局结构, 能同时处理行与列

设置`display:grid/inline-grid`网格布局容器, `gird-template-columns`设置列宽, `grid-template-rows`设置行高

## BFC

块级格式化上下文, 是页面中的一块渲染区域:

- 内部的盒子会在垂直方向一个接一个的放置
- 对于同一个 BFC 的两个相邻的盒子的`margin`会发生重叠
- 每个元素的左外边距与包含块的左边界相接触
- BFC 的区域不会与`float`的元素区域重叠
- 计算 BFC 的高度时, 浮动元素也参与计算
- **BFC 就是页面上独立的一块区域, 内部的元素不会影响到外面的元素**

触发 BFC 的条件

- 根元素: body
- 设置浮动: float: left、right
- overflow: 为 auto、scroll、hidden, 不为 visible
- display: inline-block、inltable-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid
- 设置绝对定位: position: absolute、fixed

### 清除浮动

非 IE 下, 容器不设高度且子元素浮动时, 容器高度不能被内容撑开, 内容会溢出到容器外影响布局

- 浮动元素脱离文档流, 不占据空间
- 浮动元素碰到包含它的边框或其他浮动元素的边框时停留

清除浮动方式:

- 给父级 div 定义`height`属性
- 最后一个浮动元素后添加空 div, 并添加`clear:both`样式
- 包含浮动元素的父标签添加`overflow: hidden` 或 `overflow: auto`
- 使用:after 伪元素, IE6-7 使用 `*zoom:1`触发 hasLayout

```css
.clearfix::after {
  content: '';
  display: 'table';
  height: '0';
  clear: 'both';
}
.clearfix {
  *zoom: 1;
}
```

## 重绘和回流

浏览器使用流式布局模型(flow based layout), 将`HTML`解析成`DOM`, 将`CSS`解析成`CSSOM`, `DOM`和`CSSOM`结合就产生了`render tree`. 根据`render tree`计算好盒模型的位置、大小及其他属性后, 将节点绘制到页面上

回流: `render tree`中部分或全部元素的尺寸、结构等属性发生变化时, 浏览器重新渲染的过程

重绘: 页面样式的改变并不影响它在文档流中的位置时, 浏览器根据新样式重新绘制

回流必将引起重绘, 重绘不一定会引起回流

```css
/* 三角形 */
div {
  width: 0;
  height: 0;
  border-bottom: 50px solid red;
  border-right: 50px solid transparent;
  border-left: 50px solid transparent;
}
```

## CSS3 新增

边框样式: border-radius、border-shadow、border-image

- `transition` 过渡动画:

  - property: 需要变化的 css 属性
  - duration: 完成过渡需要的时间
  - timing-function: 完成效果的速度曲线
  - delay: 动画效果的延迟触发

- `transform` 转变动画:

  - translate：位移
  - scale：缩放
  - rotate：旋转
  - skew：倾斜

- `animation` 自定义动画: 设置动画属性, 包含 6 个属性, `@keyframes`定义关键帧

## 其他

**实现垂直居中:**

- 使用定位

```css
.container {
  width: 500px;
  height: 500px;
  position: relative;
}
.center {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
}
```

- 使用 CSS3 动画, 高宽未知也能实现

```css
.container {
  position: relative;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

- 使用 flex

```css
/* 使用flex */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.center {
}
```
