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