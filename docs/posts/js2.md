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

ES6 新增数据结构:

- Set: es6 提供的一种新的数据结构, 类似于数组, 成员的值都是唯一的
- Map: 同 es6 提供的一种新的数据结构, 类似于对象, 也是键值对的集合, 但键的范围不局限于字符串, 任何类型都行

- `let`和`const`具有块级作用域, 不存在变量提升
- 箭头函数简化了函数的写法, 巧用`this`
- `promise`解决地狱回调问题
- `import` `export`实现模块的导入导出
- 结构赋值和对象解构
- `class`类, 类似于对象

## 函数继承

- 原型链继承: 将父类作为子类的原型来继承(多个实例对引用类型的操作会被篡改)
- 构造函数继承: 通过父类的构造函数增强子类实例, 等同于复制父类的实例给子类
- 组合继承: 用原型链实现对原型属性和方法的继承, 用构造函数实现实例属性的继承, 并保留传参的优点, 通过父类实例作为子类原型实现函数复用 (调用了两次构造, 生成了两份实例)
- 原型式继承: 利用一个空对象作为中介, 将某个对象直接赋值给空对象构造函数的原型
- 寄生式继承: 在原型式继承的基础上, 增强对象, 返回构造函数
- 寄生组合继承: 结合构造函数传参和寄生模式实现, 是最优的继承方式
- ES6 类继承: `extends`关键字用于在类声明或类表达式中, 创建一个类, 该类是另一个类的子类. `constructor`表示构造函数(一个类只能有一个构造函数, 如果没有显示指定构造方法, 则会添加默认的`constructor`)

## 函数缓存

- 闭包
- 柯里化函数把接收多个参数的函数转换成接受一个单一参数的函数, 目的在于避免频繁的调用具有相同参数函数, 轻松重用
- 高阶函数: 通过接收其他函数作为参数或返回其他函数的函数

## 内存泄露

由于疏忽或错误导致程序未能释放已不再使用的内存, JS 的垃圾回收机制:

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

`AJAX`是一种创建交互式网页应用的网页开发技术, 在不重新加载整个网页的情况下, 与服务器交换数据更新部分网页. 其原理简单来说就是通过`XmlHttpRequest`对象来向服务器发送异步请求, 获取服务器数据, 再用`JS`来操作`DOM`更新页面

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

## Promise

支持链式调用解决回调地狱问题(多层函数相互嵌套)

- Promise 是一个构造函数, 原型链上有`.then`方法, 用来预先指定成功的回调函数和失败的回调函数
- `.catch` 用来捕获链式操作中的错误, 如果不希望前面的错误导致后续的`.then`无法进行, 可以将`.cache`的调用提前
- `Promise.all()` 会发起一个并行的`Promise`异步操作, 等所有异步操作全部结束才会执行下一步的`.then`(等待机制)
- `Promise.race()` 会发起一个并行的`Promise`异步操作, 只要任何一个异步操作完成就立即执行下一步的.then 操作(赛跑机制)

## 项目安全

- XSS: (Cross-Site Scripting) 跨域脚本攻击, 向网站注入 js 脚本, 然后执行脚本获取用户信息或篡改内容
  - 对用户输入的信息进行编码
  - 过滤用户输入的信息, 事件相关、style 节点
- CSRF: (Cross-Site Request Forgery) 跨站请求伪造, 需要用户先登录进去, 获取 cookie 请求网站的 API
  - Token 验证, 提交请求时携带`token`
  - Referer 验证, 只接受本站的请求

## 其他

**浏览器响应用户输入 URL 到加载页面过程:**

- 浏览器根据域名找到对应 ip 地址
- 浏览器根据 ip 地址向服务器发送 http 请求(TCP 三次握手)
- 服务器进行 301 重定向
- 浏览器根据重定向地址请求 www 的网址
- 浏览器根据服务器的 http 响应开始加载 DOM 树
- 浏览器请求嵌在 html 的资源(js,css,图片,音视频等)
- 浏览器显示完成页面
- 浏览器发送异步请求

**HTTP 状态码:**

- 1xx: http 请求已接受, 继续处理请求
- 2xx: http 请求已处理完成(200)
- 3xx: 请求访问重定向(304 资源没有变化重定向到本地资源)
- 4xx: 客户端请求出现错误(403 禁止访问, 404 资源不存在)
- 5xx: 服务器出现错误

**图片懒加载**

就是通过设置图片的属性, 如`data-set`来代替`src`来存储图片地址, (因为传入`src`就会直接触发`http`请求) 然后监控页面的滚动距离, 在恰当的时机(图片就要显示出来了)将`data-set`换回`src`, 此时发送请求图片资源

**lodash**
一致性、模块化、高性能的 JavaScript 开源工具库

- `_cloneDeep` 深度拷贝
- `_.reject` 根据条件去除某个元素
- `_.drop(array,[n=1])` 将`array`中前 n 个元素去掉, 返回剩余的部分
