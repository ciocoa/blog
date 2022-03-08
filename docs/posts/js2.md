---
layout: Post
title: JavaScript
subtitle: JS 重点知识、高频面试点总结 下
author: Ciocola
date: 2022-02-28
useHeaderImage: true
headerImage: /img/posts/js2/header.jpg
headerMask: rgb(67, 65, 47, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - JS
---

# JavaScript

## 函数继承

- 原型链继承: 将父类作为子类的原型
- 构造继承: 通过父类的构造函数增强子类实例
- 实例继承: 为父类添加新特征, 作为子类实例返回
- 组合继承: 调用父类构造、继承父类的属性并保留传参的优点, 通过父类实例作为子类原型实现函数复用 (调用了两次构造, 生成了两份实例)
- 寄生组合继承: 通过寄生的方式, 拿掉父类的实例属性, 避免了组合继承的缺点

## 函数缓存

- 闭包
- 柯里化函数把接收多个参数的函数转换成接受一个单一参数的函数, 目的在于避免频繁的调用具有相同参数函数, 轻松重用
- 高阶函数: 通过接收其他函数作为参数或返回其他函数的函数

## 内存泄露

由于疏忽或错误导致程序未能释放已不再使用的内存

JS 的垃圾回收机制:

- 标记清除: 变量在进入执行环境时被标记为进入环境, 在离开时被标记为离开环境; GC 在运行时, 会标记内存中所有变量, 然后将上下文中的变量及上下文引用的变量的标记去掉. 之后被标记的变量就是不再需要的, 待删除了的
- 引用计数: JS 引擎中有一张引用表, 保存了内存中的所有资源的引用次数, 当引用次数为 0, 即为不需要的, 就可以释放这块内存

## 防抖和节流

本质上是优化高频率执行代码的一种手段

- 防抖: n 秒内只运行一次, 若在 n 秒内重复触发, 只生效一次. 在连续的事件中只触发一次回调
  - 搜索框, 用户在输入时, 删删改改, 只有回车或点击搜索按钮时才发送请求
  - 手机号等验证规则
  - 调整窗口大小
- 节流: n 秒后再执行, n 秒内重新触发则重新计时. 在间隔一段时间, 刷新间隔时间触发回调
  - 滚动加载
  - 搜索词联想

可以使用时间戳和定时器`setTimeout`实现

```js
function throttle(fn, delay) {
  let timer = null
  let startTime = Date.now()
  return function () {
    let curTime = Date.now()
    let remaining = delay - (curTime - startTime)
    let context = this
    let args = arguments
    clearTimeout(timer)
    if (remaining <= 0) {
      fn.apply(context, args)
      startTime = Date.now()
    } else {
      timer = setTimeout(fn, remaining)
    }
  }
}
```

```js
function debounce(func, wait) {
  let timeout
  return function () {
    let context = this
    let args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}
```

## AJAX

`AJAX`是一种创建交互式网页应用的网页开发技术, 在不重新加载整个网页的情况下, 与服务器交换数据更新部分网页

其原理简单来说就是通过`XmlHttpRequest`对象来向服务器发送异步请求, 获取服务器数据, 再用`JS`来操作`DOM`更新页面

### 实现方式

- 创建核心对象`XmlHttpRequest`
- 调用`open()`方法与服务端建立连接
- 构建请求所需的数据内容, 通过`XmlHttpRequest`对象的`send()`方法发送给服务端
- 通过`XmlHttpRequest`对象的`onreadystatechange`监听服务端的通信状态
- 接收并处理服务端响应的数据结果
- 将处理结果更新到`HTML`页面中

```js
// 封装一个简单的`AJAX`请求
function ajax(options) {
  const xhr = new XMLHttpRequest()
  options = options || {}
  options.type = (options.type || 'GET').toUpperCase()

  if (options.type === 'GET') {
    xhr.open('GET', options.url + '?' + options.data, true)
    xhr.send(null)
  } else if (options.type === 'POST') {
    xhr.open('POST', options.url, true)
    xhr.send(options.data)
  }
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        options.success && options.success(xhr.responseText, xhr.responseXML)
      } else {
        options.fail && options.fail(xhr.status)
      }
    }
  }
}
// 调用
ajsx({
  type: 'POST',
  data: {},
  url: 'http://xxxxxxx',
  success: function (text, xml) {
    console.log(text)
  },
  fail: function (status) {
    console.log(status)
  }
})
```

## 单点登录

单点登录（SSO）定义在多个应用系统中, 用户只需要登录一次就可以访问所有相互信任的应用系统. SSO 一般需要一个独立的认证中心（passport）一个系统登录成功后, passport 将会颁发一个令牌给各个子系统, 拥有了令牌后就可以访问各个子系统受保护的资源, 减少频繁的向 passport 发起认证

### 相同域名下单点登录:

通过`cookie`的`domain`属性, 将其设置为父域域名, 同时将`cookie`的`path`设置为根路径, `token`或`session ID`保存在父域中, 这样所有的子域就都可以访问到这个`cookie`

### 不同域名下单点登录:

部署一个专门处理登录请求的认证中心, 用户统一在认证中心登录, 登录后认证中心记录用户的登录状态, 并将`token`写入`cookie`. 当打开一个应用系统时, 应用系统会检查当前请求有没有`token`, 若没有就会跳转到认证中心, 认证中心根据`cookie`判断用户此前是否登录, 若没有登录则跳转到登录页面等待用户登录, 若登录则携带生成的`token`跳转回目标 url. 目标应用系统拿到`token`后会再次向认证中心确认`token`的合法性, 以防止用户伪造. 确认无误后就会记录用户的登录状态, 并将`token`写入当前域的`cookie`中
