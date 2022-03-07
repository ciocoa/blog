---
layout: Post
title: Vue 3
subtitle: Vue 3 重点知识、高频面试点总结
author: Ciocola
date: 2022-03-07
useHeaderImage: true
headerImage: /img/posts/vue3/header.jpg
headerMask: rgb(67, 65, 47, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - Vue3
---

# Vue 3

Vue 3 相比于 Vue 2 来说, 其更小、更快、添加 TypeScript 支持、API 设计一致性、提高自身可维护性、开放更多底层功能

vue 3 从很多层面做了优化:

- 源码: 基于`TypeScript`编写, 提供了更好的类型检查; 通过`monorepo`方式维护, 根据功能拆分不同模块, 更易于维护
- 性能: vue 2 中, 数据劫持是通过`Object.defineProperty`, 其缺陷在于不能检测对象属性的添加和删除; vue 3 通过`proxy`监听整个对象, 对于深层次的对象变化则是在`getter`中递归响应式, 真正访问到内部对象才会变成响应式
- `composition API`优化逻辑组织, 优化逻辑复用

## Diff 算法优化

增加了静态标记, 为会发生变化的地方添加一个`flag`标记, 变化发生的时候直接找到该地方进行比较
