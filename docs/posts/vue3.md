---
layout: Post
title: Vue 3
subtitle: Vue 3 重点知识、高频面试点总结
author: Ciocola
date: 2022-03-07
useHeaderImage: true
headerImage: /images/posts/vue3/header.jpg
headerMask: rgb(67, 65, 47, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - Vue
---

# Vue 3

Vue 3 相比于 Vue 2 来说, 其更小、更快、添加 TypeScript 支持、API 设计一致性、提高自身可维护性、开放更多底层功能, vue 3 从很多层面做了优化:

支持自定义渲染器, 支持多个根节点等

## 源码体积

基于`TypeScript`编写, 提供了更好的类型检查; 通过`monorepo`方式维护, 根据功能拆分不同模块, 更易于维护. 移除了一些不常用的 API, 模块只在用到的时候打包

## 性能优化

- Diff 算法: 增加了静态标记, 为会发生变化的地方添加一个`flag`标记, 变化发生的时候直接找到该地方进行比较
- 静态提升: 不参与更新的元素只会被创建一次, 在渲染时直接复用
- 事件监听缓存: 默认情况下, 绑定事件会被视为动态绑定, 每次都会去追踪它的变化
- SSR 优化: 静态内容大到一定量级时, 会在客户端生成一个静态节点, 会被直接`innerHTML`

## 数据劫持

vue 2 中,是通过`Object.defineProperty`实现, 其缺陷在于不能检测对象属性的添加和删除; vue 3 通过`proxy`监听整个对象, 对于深层次的对象变化则是在`getter`中递归响应式, 真正访问到内部对象才会变成响应式

## Composition API

- 优化了逻辑组织 (高内聚, 低耦合) 和逻辑复用,
- `Tree shaking`友好, 代码更容易压缩
- 几乎不使用`this`, 减少`this`指向不明的情况
- 几乎是函数, 有更好的类型推断

**Tree shaking** 是一种通过清除多余代码方式来优化项目打包体积的技术, 保持代码运行结果不变的前提下, 去除无用的代码
