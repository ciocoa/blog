---
layout: Post
title: HTML/CSS
subtitle: HTML/CSS相关面试点
author: Ciocola
date: 2022-03-02
useHeaderImage: true
headerImage: /img/posts/css/header.jpg
headerMask: rgb(67, 65, 47, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - CSS
---

# CSS

常用选择器:

Id 选择器
类选择器
标签选择器
后代选择器
子选择器
相邻元素选择器
群组选择器
伪类选择器
伪元素选择器
属性选择器
层次选择器

内联 > ID > 类 > 标签

## 继承属性

在 CSS 中, 父元素的一些属性, 后代元素会自动拥有这些属性

可以继承点属性有: 字体系列属性, 文本系列属性, 表格布局属性, 列表属性等; 几个特殊点`a`标签字体颜色无法继承, `h1~h6`标签字体大小无法继承
无法继承点属性有: display, 盒子模型的属性, 背景属性, 定位浮动等

## 盒子模型

一个盒子由四个部分组成: `content` `padding` `border` `margin`

CSS 中盒子模型可以分为:

- W3C 标准盒子模型: `width/height` + `padding` + `border` + `margin`
- IE 怪异盒子模型: `width/height` + `margin`

CSS 中`box-sizing`属性定义了浏览器引擎该如何解析:

- `content-box`元素的`width/height`不包含`padding`、`border`, 与标准盒子模型表现一致
- `border-box`元素的`width/height`包含`padding`、`border`, 与怪异盒子模型表现一致
- `inherit`指定`box-sizing`属性的值应该从父元素继承

## 单位

相对长度单位: em、ex、ch、rem、vw、vh、%、vmin、vmax
绝对长度单位: px、cm、mm、pt、pc、in

px 表示像素, 就是呈现在显示器上的小点, 每个像素点都是大小等同的

em 相对于当前对象内文本的字体尺寸, 如当前行内文本字体尺寸未设置, 则相对于浏览器的默认字体尺寸(1em = 16px)

rem 相对单位, 相对于 HTML 根元素`font-size`的值, rem 相对大小的绝对大小的优点于一身
