---
layout: Post
title: Vue
subtitle: Vue相关面试点
author: Ciocola
date: 2022-03-05
useHeaderImage: true
headerImage: /img/posts/vue/header.jpg
headerMask: rgb(67, 65, 47, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - Vue
---

# Vue.js

Vue.js 是一个用于创建用户界面的开源 JavaScript 框架，也是一个创建单页面应用的 Web 应用框架。Vue 所关注的核心是 MVC 模式中的视图层，它能方便的获取数据更新，通过组件内部特定的方法实现视图与模型的交互。

## 核心特性

数据驱动（MVVM）

- Model：模型层，负责处理业务逻辑和服务端交互
- View：视图层，将数据模型转化为 UI 页面效果
- ViewModel：视图模型层，连接 Model 和 View，通信桥梁

## 组件化

组件化就是将图形、非图形的各种逻辑抽象成一个统一的概念（组件）来实现开发，Vue 中每个`.vue`文件都可以视作为一个组件。这样做好处：

- 降低了整个系统的耦合度，保持接口不变的情况下替换不同的组件快速完成需求
- 方便调试，可以根据报错的组件快速定位问题，甚至直接移除整个组件
- 可维护性高，每个组件职责单一且在系统中被复用，对代码优化可获得整个系统的升级

## 单页面应用

单页面应用（SPA），是一种网络应用程序或网站的模型，通过动态重写当前页面来与用户交互。具有桌面应用的即时性，可移植性和可访问性；用户体验好，前后端分离，分工更加明确。

多页面应用（MPA），每个页面都是一个主页面。访问另一个页面时需要重新加载`.html` `.css` `.js`文件。

|          | SPA                         | MPA                                   |
| :------- | :-------------------------- | :------------------------------------ |
| 组成     | 一个主页面和多个页面片段    | 多个主页面                            |
| 刷新方式 | 局部刷新                    | 整页刷新                              |
| url 模式 | 哈希模式                    | 历史模式                              |
| SEO      | 难实现，可使用 SSR 方式改善 | 容易实现                              |
| 数据传递 | 容易                        | 通过 url、cookie、localStorage 等传递 |
| 页面切换 | 速度快，用户体验良好        | 切换加载资源，速度慢，用户体验差      |
| 维护成本 | 相对容易                    | 相对复杂                              |

## 首屏时间

首屏加载是用户体验最重要的环节，浏览器响应用户输入网址，到首屏内容渲染完成的时间即为首屏时间。

SPA 首屏加载慢主要可能的原因是网络延迟、资源文件过大、资源请求重复、加载脚本时，渲染内容阻塞等。通常可以通过减小入口文件大小、静态资源本地缓存、UI 框架按需加载、图片资源压缩、组件重复打包、开启 Gzip、使用 SSR （服务端渲染）等方式解决优化。

## 挂载 Vue 实例

- `new vue()`时会调用`_init`方法
  - 定义`$set` `$get` `$delete` `$watch`等方法
  - 定义`$on` `$off` `$emit`等事件
  - 定义`_update` `$forceUpdate` `$destory`生命周期
- 调用`$mount`进行页面的挂载，通过`mountComponent`方法
- 定义`updateComponent`更新函数
- 执行`render`生成虚拟 DOM
- `_update`将虚拟 DOM 生成真实 DOM 结构并渲染到页面中

## data()

在 Vue 实例中定义`data`可以是一个对象，也可以是一个函数。但是在组件中定义`data`时，只能是一个函数。这是因为以对象来定义会对其他组件里的数据造成污染。

假设在 A 组件和 B 组件里使用对象的方式定义了`data`，那么会发现这两个`data`对象共用了同一个内存地址，当修改 A 组件里`data`的值时，会影响到 B 组件里`data`的值。采用函数的形式，`initData`时会将其作为工厂函数返回全新的`data`对象，从而不产生数据污染。

## 指令系统

指令（Directives）是带有`v-`前缀的特殊属性。当表达式值改变时，将其产生的连带影响响应式的作用于 DOM。

在 Vue 模板编译的时候，会将指令系统转化成可执行的`render`函数

- 条件渲染 `v-if`
- 列表渲染 `v-for`
- 属性绑定 `v-bind`
- 双向数据绑定 `v-model`
- 事件绑定 `v-on`

## v-show 和 v-if

在 Vue 中`v-show`和`v-if`的作用效果是相同的，都能控制元素在页面中是否显示，当表达式为`true`时占据页面位置，表达式为`false`时不占据页面位置。

区别：

- 控制手段：`v-show`通过 css 属性`display:none`隐藏，dom 元素依然还在；而`v-if`则是将整个 dom 元素删除
- 编译过程：`v-if`在切换时有一个局部编译/卸载的过程，切换过程会适当的销毁和重建内部的事件监听及子组件；而`v-show`只是简单的基于 css
- 编译条件：`v-if`是真正的条件渲染，只有条件为真时才渲染，并且会触发生命周期钩子；`v-show`则不会触发组件的生命周期
- 性能消耗：`v-if`有更高的切换消耗；`v-show`有更高的初始渲染消耗

## v-if 和 v-for

`v-if`根据条件渲染一块内容，`v-for`基于一个数组来渲染一个列表。`v-for`指令需要使用`item in items`形式的特殊语法，使用时建议使用独一无二的`key`值，便于 Diff 算法进行优化。

`v-for`优先级要高于`v-if`，作用于同一个元素上时会带来性能上的浪费（先循环再进行判断）。使用时建议在元素外层套用`template`（页面渲染不生成 dom 节点）进行条件判断，内层再进行循环。

## 双向绑定

单向绑定就是把 model 绑定到 view，当使用 JS 代码更新 model 时，view 就会自动更新。双向绑定就是在单向绑定的基础上，用户更新了 view，model 的数据也会自动更新。

### 原理

双向绑定由三个重要部分构成即 Model、View、ViewModel。ViewModel 是负责连接模型层与视图层的桥梁，其核心功能便是数据双向绑定，数据变化时更新视图，视图变化后更新数据。

ViewModel 有两个主要组成部分：

- 监视器（Observer）：对所有数据属性进行监听
- 解析器（Complier）：对每个元素节点的指令进行扫描与解析，根据指令模版替换数据，绑定相应的更新函数

1. `new vue()`首先执行初始化，对`data`执行响应化处理，这个过程发生在 Observe 中
2. 编译模版，从`data`中找到动态绑定的数据并初始化视图，这个过程发生在 Compile 中
3. 定义一个更新函数和`watcher`，当数据变化时`watcher`会调用更新函数
4. `data`中的某个`key`在一个视图中可能出现多次，所以每个`key`需要一个管家`dep`来管理多个`wacther`
5. `data`中数据一旦发生改变，会先找到对应的`dep`，通知所有`wacther`执行更新函数

## 生命周期

生命周期通俗的讲就是一个从摇篮到坟墓的过程，在 Vue 中就是实例从创建到销毁。包含创建、初始化数据、编译模版、挂载 Dom -> 渲染、更新 -> 渲染、卸载等一系列过程。在 Vue 生命周期钩子会自动绑定`this`上下文到实例中，因此可以访问数据，对属性和方法进行运算。

生命周期阶段及使用场景：

| 生命周期      | 描述                                                          |
| :------------ | :------------------------------------------------------------ |
| beforeCreate  | 组件实例还未创建，常用于执行一些初始化任务                    |
| created       | 组件初始化完毕，各种数据已可以使用，常用于异步数据获取        |
| beforeMount   | 组件挂载之前，还未执行渲染，DOM 还未创建                      |
| mounted       | 组件挂载到实例上，DOM 创建完毕，可用于获取访问数据和 DOM 元素 |
| beforeUpdate  | 组件数据发生变化，view 层还未更新，可用于获取更新前状态       |
| updated       | 组件数据更新完毕，同步最新数据                                |
| beforeDestroy | 组件实例销毁之前，可用于一些定时器或订阅的取消                |
| destroyed     | 组件已经销毁                                                  |
| activated     | keep-alive 缓存的组件激活时调用                               |
| deactivated   | keep-alive 缓存的组件停用时调用                               |
| errorCaptured | 捕获一个子孙组件的错误时调用                                  |

## 组件通信

组件通信指的就是组件`.vue`之间通过某种方式传递信息。

组件通信可以分为：

- 父子组件
- 兄弟组件
- 祖辈与后代组件
- 非关系组件

### 通信方案

- props：父向子传值，父组件使用子组件标签通过字面量传递，子组件通过设置`props`属性接收
- $emit：子向父传值，子组件通过`$emit`触发自定义事件第二个参数为传递的值，父组件通过绑定的事件监听器获取子组件传递过来的数据
- ref：父组件使用子组件的时候设置`ref`属性，通过`this.$refs`获取对应的数据
- EventBus：兄弟组件传值，创建一个中央事件总线`EventBus`，其中一个通过`$emit`触发自定义事件，另一个通过`$on`监听自定义事件
- $parent或$root：通过共同祖辈`$parent`或`$root`搭建通信桥梁，其中一个`this.$parent.on()`，另一个`this.$parent.emit()`
- $attrs 与 $listeners：祖辈传递给子孙，设置批量下传属性`$attrs`和`$listeners`，包含了父级作用域不作为`prop`被识别的特性绑定，通过`v-bind="$attrs"`传入内部组件
- provide 与 inject：在祖辈组件定义`Provide`属性返回传递的值，在子孙组件通过`Inject`接收

### Vuex

适用于复杂关系的组件之间数据传递，Vuex 作用相当于一个共享变量的容器。

- state：用来存放共享变量
- getter：增加一个`getter`派生状态，用来获取共享变量的值
- mutations：用来存放修改`state`的方法
- actions：也用来存放修改`state`的方法，不过是在`mutations`的基础上进行，常用于一些异步操作

## 虚拟 DOM

虚拟 DOM：一个用来表示真实 DOM 的对象，用对象的属性来描述节点，最少包含标签名、属性、子元素对象三个属性。创建虚拟 DOM 就是为了能更好的将虚拟节点渲染到页面视图中，所以虚拟 DOM 对象的节点与真实 DOM 的属性一一对应。

页面的性能问题大多是由 DOM 操作引起的，真实的 DOM 包含很多属性，频繁的操作还是会出现页面卡顿，引起性能问题。

### Diff 算法

Diff 算法是一种对比算法，对比新旧虚拟 DOM，找出更改的虚拟节点，从而精准的更新真实 DOM 提高效率，新旧`VNode`对比时，深度优先，同层比较。

当数据改变时，触发`setter`，通过`Dep.notify`通知`wacther`（订阅者），`wacther` 调用`patch`方法给真实 DOM 打补丁更新相应的视图。

`patch`函数使用`sameVnode`方法，判断同层虚拟节点是否为同一类标签。如果是，调用`patchVnode`进行深层比对；如果否，则直接替换。

`patchVnode`进行深层比对时，会找到对应的真实 DOM，称为`el`。主要作几个判断

- 新旧都是文本节点且不相等，新文本节点的内容更新到`el`上
- `oldVnode`有子节点而`vnode`没有，则删除`el`子节点
- `oldVnode`没有子节点而`vnode`有，则将`vnode`的子节点真实化后添加到`el`
- 新旧都有子节点，调用`updateChildren`进行比对（首尾指针法，头头、尾尾、头尾、尾头，进行对比查询复用）

## Slot

`Slot` 占位符，在组件模版中占据位置，当使用该组件标签的时候，组件标签里的内容就会自动填充，作为承载分发内容的出口。

通过插槽可以让用户拓展组件，更好的复用及定制。通过`slot`插槽向组件内部指定位置传递内容，完成在不同场景的应用，如布局组件、表格列、下拉选框、弹框显示等

### 默认插槽

子组件用`<slot>`标签确定渲染的位置，标签里存放 DOM 结构，当父组件使用的时候没有往插槽传入内容，标签内 DOM 结构就会显示在页面上

### 具名插槽

子组件用`name`属性来表示插槽的名字，不传为默认插槽。父组件在使用时在默认插槽的基础上添加`slot `属性，值为子组件插槽的`name`属性值。

### 作用域插槽

子组件在作用域上绑定属性来将子组件的信息传给父组件使用，这些属性会被挂载在父组件`v-slot`接收的对象上。父组件在使用时通过`v-slot:`或`#`获取子组件的信息并使用

## $nextTick

> 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立刻执行这个方法，获取更新后的 DOM

Vue 在更新 DOM 时是异步执行的，数据发生变化时 Vue 将开启一个异步更新队列，视图需要等待队列中所有数据变化完成之后再统一进行更新。

`nextTick`本质是一种优化策略，如果想要修改数据后立刻得到更新后的 DOM 结构，可以使用`Vue.nextTick()`，第一个参数为回调函数，第二个参数为执行函数上下文。组件内使用`vm.$nextTick()`只需要通过`this.$nextTick()`回调函数中的`this`将自动绑定到当前 Vue 实例上，`$nextTick()`会返回一个`Promise`对象，可以用`async` `await`完成相同作用的事情。

## Mixin

> `mixin`（混入），提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。

`Mixin`是面向对象程序设计语言中的类，提供了方法的实现。其他类可以访问 `Mixin`的方法而不必成为其子类，`Mixin`通常作为功能模块使用，在需要时“混入”，有利于代码复用又避免了多继承的复杂。

`Mixin`本质就是一个 JS 对象，将共用的功能传入`mixins`中，当组件使用`mixins`对象时所有`mixins`对象的选项都将被混入该组件本身的选项中。

- 全局混入：通过`Vue.mixin()`进行全局混入，常用于插件的编写，会影响到所有组件实例
- 局部混入：定义一个对象，有组件`options`的`data` `methods`属性，组件通过`mixins`属性调用`mixin`对象

## 跨域

跨域的本质是浏览器基于同源策略的一种安全手段，所谓同源即协议相同、主机相同、端口相同，当其中任何一种不同时就会产生跨域。

解决跨域最早是使用 JSONP，在 Vue 中，主要使用 CORS 和 Proxy 两种方案

### CORS

跨域资源共享（Cross-Origin Resource Sharing）是一个系统，由一系列传输的 HTTP 头组成，这些 HTTP 头决定浏览器是否阻止前端 JS 代码获取跨域请求的响应。只需要增加一些 HTTP 头，让后端服务器声明允许的访问来源即可实现跨域。

### Proxy

网络代理，是一特殊的网络服务，允许客户端通过此服务与服务端建立非直连的连接。代理服务有利于网络终端的隐私或安全。

- 在 Vue 中通过设置 webpack 建立一个本地服务器，通过本地服务器转发请求至目标服务器，得到结果再转发回前端。（上线时 web 应用和接口不在一起仍会跨域）
- 服务端实现代理请求转发，express 框架（http-proxy-middleware）
- 配置 nginx 实现代理