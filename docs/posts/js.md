---
layout: Post
title: JavaScript
subtitle: JS相关面试点
author: Ciocola
date: 2022-02-25
useHeaderImage: true
headerImage: /img/posts/js/header.jpg
headerMask: rgb(67, 65, 47, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - JS
---

# JavaScript

## 数据类型

- 基本类型: number、string、boolean、null、undefined、symbol、bigint
- 引用类型: array、object、function

基本类型数据保存在栈内存中；引用类型数据保存在堆内存中, 存在栈中的是一个指向堆内存中实际对象的引用

`Undefined`类型只有一个值, 即特殊值`undefined`。当使用`var`或`let`声明了变量但没有初始化时, 就相当于给变量默认赋值`undefined`。而`Null`类型同样只有一个值, 即特殊值`null`。表示一个空对象指针, 因此`typeof null`会返回一个`object`。

## 字符串及其常用方法

字符串的增删改查, 因其是基本数据类型, 创建后不可改变

### 增

- concat: 字符串拼接

### 删

- slice、 substr、 substring: 接收一或两个参数, 返回调用它们的字符串的子字符串

### 改

- trim、 trimLeft、 trimRight: 删除前后的空格并返回新的字符串

- repeat: 字符串复制, 接收一个整数（复制次数）并返回复制后的结果

- padEnd: 复制字符串并指定长度（第一个参数）, 不满足则填充字符（第二个参数）

- toLowerCase、 toUpperCase: 字符串大小写转换

### 查

- chatAt: 返回给定索引位置的字符

- indexOf: 搜索传入的字符串并返回位置, 没找到返回-1

- startWith、 includes: 搜索传入的字符串并返回布尔值

### 转换

- split: 将字符串按指定的分隔符, 拆分成数组

### 模版匹配

- match: 接收一个参数（正则, RegExp）, 返回数组

- search: 接收一个参数（正则, RegExp）, 返回索引或-1

- relace: 接收两个参数（匹配的内容, 要替换的元素或函数）

---

给定一个只包含'(', ')', '[', ']', '{', '}'的字符串, 判断字符串是否有效, 满足如下条件:

- 左括号必须用相同类型的右括号闭合；
- 左括号必须以正确的顺序闭合。
- 空字符串可以被认为是有效字符串。

```js
const isVaild = str => {
  let arr = []
  str = str.split('')
  for (const i of str) {
    if (i === '') continue
    else if (i === '(') arr.push(')')
    else if (i === '[') arr.push(']')
    else if (i === '{') arr.push('}')
    else if (arr.length === 0 || arr.pop() !== i) return false
  }
  return arr.length === 0 ? true : false
}
```

## 数组及其常用方法

数组的基本操作都可以归类为增删改查、排序、转换、迭代

### 增

- push: 接收任意的参数并将它们添加到数组的末尾, 返回新数组的长度

- unshift: 接收任意的参数并将它们添加到数组的开头, 返回新数组的长度

- concat: 创建当前数组的副本, 再把接收的参数添加到副本末尾, 最后返回这个新数组（不影响原数组）

### 删

- pop: 删除数组的最后一项, 返回被删除的项

- shift: 删除数组的第一项, 返回被删除的项

- slice: 创建一个包含原有数组中一个或多个元素的新数组, 不影响原始数组

### 改

- splice: 接收三个参数, 开始位置、要删除的数量、插入的元素, 返回删除元素的数组

### 查

- indexOf: 返回要查找的元素在数组中的位置, 没找到则返回-1

- includes: 返回要查找的元素在数组中的位置, 返回`true`或`false`

- find: 返回第一个匹配的元素

```js
const a = [
  { name: abc, age: 25 },
  { name: bcd, age: 28 }
]
a.find((element, index, array) => element.age < 26) // { name: abc, age: 25 }
```

### 排序

- reverse: 反转数组元素

- sort: 接收一个比较函数, 依次判断数组元素的排序

### 转换

- join: 接收一个参数（字符串分隔符）, 返回包含所有项的字符串

### 迭代

- some: 对数组每一项运行传入的函数, 有一项为`true`, 则这个方法返回`true`

- every: 对数组每一项运行传入的函数, 所有的项为`true`, 则这个方法返回`true`

- forEach: 对数组的每一项都运行传入的函数, 无返回值

- filter: 即过滤, 传入一个函数, 符合的项组成一个新数组返回

- map: 传入一个函数, 每一项调用函数的结果组成新数组返回

## DOM 文档对象模型

HTML 和 XML 文档的编程接口, 它提供了对文档的结构化的表述, 并定义了一种方式可以使从程序中对该结构进行访问, 从而改变文档的结构, 样式和内容

- 创建节点:
  - `creatElement`创建新元素。接收要创建元素的标签名
  - `creatTextNode`创建一个文本节点
  - `creatDocumentFragment`创建一个文档碎片, 它表示一种轻量级的文档, 主要用来存储临时节点, 然后一次性添加到 DOM
  - `creatAttribute`创建属性节点, 自定义属性
- 获取节点:
  - `querySelector`传入任何有效的 css 选择器
  - `querySelectorAll` 返回所有与之相匹配的节点列表
  - `getEleentByID`。。。
- 更新节点:
  - `innerHTML`可以修改 DOM 节点的文本内容, 还可以直接通过 HTML 片段修改 DOM 节点内部的子树
  - `innerText`、`textContent`自动对字符串进行编码, 保证无法设置任何 HTML 标签
- 添加节点:
  - `appendChild`把一个子节点添加到父节点的最后
  - `insertBefore`把子节点添加到指定的位置
  - `setAttribute`在指定元素上添加一个属性节点, 如果元素中已有则改变属性值
    `style`对应所有的 css, 可以直接获取或设置
- 删除节点:
  - 先获取该节点本身及它的父节点, 然后调用父节点的`removeChild`把自己删除

## BOM 浏览器对象模型

提供了独立于内容与浏览器窗口进行交互的对象, BOM 的核心对象是 window, 它表示浏览器的一个实例, 在浏览器中 window 有双重角色, 既是浏览器窗口的一个接口又是全局对象。

主要作用就是跟浏览器做一些交互效果:

- `location` location.reload()页面重新刷新
- `navigator` 获取浏览器属性, 区分浏览器类型
- `screen` 保存的客户端显示器信息, 比如像素宽度和像素高度等
- `history` 操作浏览器的 URL 历史记录
  - `history.go()` 跳转到最近一个记录中符合要求的页面
  - `history.forward()` 前进一个页面
  - `history.back()` 回退到上一个页面
  - `history.length()` 获取历史记录数量

## 作用域

作用域就是可以有效访问变量或函数的区域, js 有三种类型的作用域:

- 全局作用域, 即在全局命名空间里声明的变量或函数, 在代码的任何地方都能访问
- 函数作用域, 也叫局部作用域即在函数内部进行声明, 每个函数都有自己的上下文和可变对象, 这些环境用于存储上下文的变量、参数、函数声明等
- 块级作用域, 即在`{}`中使用`let`和`const`声明的变量, 只能在其中访问

## 作用域链

作用域也可以看作是一组用于查找变量的规则, 变量在当前作用域中不存在, 则向上级作用域查找, 如果仍不存在则再次向上查找, 直至全局作用域, 这种查找也叫作用域链

## 闭包

闭包就是一个函数在声明时能记住当前作用域, 上级作用域以及其上声明的变量函数等, 直至全局作用域。闭包是在声明函数时创建的作用域, 可以在一个内层函数中访问到其他外层函数, 简单理解为定义在函数内部的函数, 函数作为返回值始终保持在内存中, 实际应用于封装变量, 收敛权限。闭包可能造成内存空间无法被 gc 回收, 内存消耗过高甚至内存泄露。

## 函数缓存

- 闭包
- 柯里化函数把接收多个参数的函数转换成接受一个单一参数的函数, 目的在于避免频繁的调用具有相同参数函数, 轻松重用。
- 高阶函数: 通过接收其他函数作为参数或返回其他函数的函数

## 内存泄露

由于疏忽或错误导致程序为能释放已不再使用的内存

JS 的垃圾回收机制:

- 标记清除: 变量在进入执行环境时被标记为进入环境, 在离开时被标记为离开环境；GC 在运行时, 会标记内存中所有变量, 然后将上下文中的变量及上下文引用的变量的标记去掉。之后被标记的变量就是不再需要的, 待删除了的
- 引用计数: JS 引擎中有一张引用表, 保存了内存中的所有资源的引用次数, 当引用次数为 0, 即为不需要的, 就可以释放这块内存

## 原型和原型链

在 js 中, 所有对象都是 object 的实例, 继承 `object.prototype` 的属性和方法。

原型可以看作是对象的蓝图, 每个对象都拥有一个原型对象。

所有的引用类型（数组、对象、函数）都具有对象的特性, 可以自由扩展属性, 它们都具有隐式原型`__proto__`属性, 值是一个对象；所有的函数也都具有显式原型 `prototype` 属性, 值也是一个对象；所有引用类型的`__proto__`属性都指向其构造函数的 `prototype` 属性。
当试图获取对象属性的时候, 如果对象本身没有这个属性, 那么就会去其`__proto__`属性上寻找, 一层层往上, 直到找到或 null 为止。原型对象也可能拥有原型, 并从中继承属性和方法, 一层一层以此类推。这就是原型链。

## new 关键字

`new`关键字创建一个给定构造函数的实例对象, 创建出来的实例对象可以访问到构造函数中的属性以及构造函数原型链中的属性。

`new`关键字创建一个新对象时, 将对象与构造函数通过原型链连接起来, 将构造函数中的 this 绑定到新建对象上, 判断返回类型, 如果返回原始值则被忽略, 如果返回对象则正常处理

## 异步和单线程

JS 主要时用来与用户交互以及操作 DOM 的, 这决定了它只能是单线程, 即同一时间只能处理一个事务, 所有任务需要排队, 只有前一个任务结束后才执行下一个任务。

H5 提供了新的 Web Worker 标准, 允许创建多线程, 但子线程受到主线程控制, 且不能操作 DOM。

JS 中所有任务可以分为

- 同步任务: 立即执行的任务, 直接进入主线程执行, 形成一个执行栈
- 异步任务: `ajax`函数, `setTimeout`定时函数等, 进入任务队列

## 事件循环

主线程内的任务执行完毕再读取任务队列执行异步任务, 如此不断重复就是事件循环

异步任务可以细分为宏任务和微任务, 先执行宏任务, 遇到微任务则放到微任务的执行对列, 当宏任务执行完毕, 再查看微任务的事件队列并依次执行。

- 微任务: `Promise.then` `process.nextTick（node.js）`
- 宏任务: `script（外层同步代码）` `setTimeout/setInterval` `UI rendering（UI 事件）` `postMessage/MessageChannel` `setImmediate、IO（node.js）`

## async await

`async`函数用来声明一个异步方法, 返回一个`promise`对象, `await`等待异步方法执行, （阻塞后面的代码）后面若是一个`promise`对象, 返回该对象的结果, 若不是, 就直接返回对应的值

## 事件

事件是指在 HTML 文档或浏览器发生的一种交互操作, 常见的有加载事件, 鼠标/键盘事件, 自定义事件等。

## 事件传播

事件会经历三个阶段

- 捕获阶段: 事件从 window 开始, 依次往下触发, 直到目标元素
- 目标阶段: 事件已位于目标元素
- 冒泡阶段: 事件从目标元素往上传播, 直到到 window

`event.stopPropagation`方法可以阻止事件在捕获或冒泡阶段的进一步传播

## 事件模型

- 原始事件模型: - HTML 中直接绑定`onclick`, 或 JS 中绑定。绑定速度快, 不支持捕获, 同一类型事件只能绑定一次
- 标准事件模型: - 绑定监听函数`addEventListener`, 可以在一个 DOM 元素上绑定多个事件处理器
- IE 事件模型: - `attachEvent`事件处理阶段, 事件到达目标元素, 触发目标元素的监听函数。事件冒泡阶段, 从目标元素冒泡到 Document, 依次检查经过的节点是否绑定了事件监听函数, 有则执行

## 事件委托

事件委托就是将一个元素响应事件的函数委托到另一个元素上, 事件委托是在事件流的冒泡阶段完成, 会把一个或一组元素的事件委托到父层或更外层元素上, 当事件响应到目标元素上时, 会通过事件冒泡机制从而触发它的外层元素的绑定事件上, 然后在外层元素上执行函数
一般运用于整个列表的响应事件, 减少整个页面所需内存提升性能, 动态绑定, 减少重复性工作

## this 指向

绝大多数情况下, 函数的调用方式决定了 this 的值, this 关键字是函数运行时自动生成一个内部对象, 只能在函数内部使用, 总指向调用它的对象

根据使用场合不同, this 有不同的值

- 默认绑定: 全局环境中定义的函数, 调用的函数在浏览器中位`window`, `this`默认指向`window`
- 隐式绑定: 函数作为某个对象的方法调用, `this`就指向这个对象
- 显式修改: `apply()`、`call()`、`bind()`接收的第一个参数表示改变后调用这个函数的对象
- new 绑定: 通过构建函数`new`一个实例对象, 此时`this`指向这个实例对象
- 箭头函数: 在编译时确定`this`的指向

## AJAX 及其原理

`AJAX`是一种创建交互式网页应用的网页开发技术, 在不重新加载整个网页的情况下, 与服务器交换数据更新部分网页。

其原理简单来说就是通过`XmlHttpRequest`对象来向服务器发送异步请求, 获取服务器数据, 再用`JS`来操作`DOM`更新页面.

## 实现方式

- 创建核心对象`XmlHttpRequest`
- 调用`open()`方法与服务端建立连接
- 构建请求所需的数据内容, 通过`XmlHttpRequest`对象的`send()`方法发送给服务端
- 通过`XmlHttpRequest`对象的`onreadystatechange`监听服务端的通信状态
- 接收并处理服务端响应的数据结果
- 将处理结果更新到`HTML`页面中

封装一个简单的`AJAX`请求

```js
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

## 浅拷贝

浅拷贝指的是创建新的数据时这个数据有着原始数据属性值的一份精确拷贝, 浅拷贝只复制指向某个对象的指针, 而不复制对象本身

如果属性是基本类型, 拷贝的就是基本类型的值, 如果属性是引用类型, 拷贝的就是内存地址

存在浅拷贝的现象

- `Object.assign`
- `Array.prototype.slice`
- `Array.prototype.concat`
- 拓展运算符实现的复制

## 深拷贝

深拷贝则是开辟一个新的栈, 两个对象属性完全相同, 但对应两个不同的地址, 修改一个对象的属性时不影响另一个属性

存在深拷贝的现象

- `_.cloneDeep`
- `jQuery.extend`
- `JSON.stringify`
- 循环递归

## 递归和尾递归

在函数内部可以调用其他函数, 那么在函数内部调用自身, 这个函数就是递归

> 其核心思想就是把一个大型复杂的问题层层转化为一个与原问题相似的规模较小的问题来求解

递归需要有边界条件、递归前进阶段和递归返回阶段。当边界条件不满足时递归前进；当条件满足时递归返回

计算 x 的 y 次方

```js
function pow(x, y) {
  let res = 1
  for (let i = 0; i < y; i++) {
    res *= x
  }
  return res
}
// 转换成递归
function pow2(x, y) {
  if (y == 1) return x
  return x * pow2(y - 1)
}
```

## 尾递归

尾递归是在函数尾部调用自身的特殊形式, 通过优化计算仅占用常量栈空间。

在递归调用的过程中, 系统为每一层的返回点、局部量等开辟了栈来存储, 递归次数过多容易造成栈溢出。尾递归因为递归形式的调用出现在函数末尾, 只存在一个调用记录, 所以不会发生栈溢出

求 n 的阶层

```js
function factorial(n) {
  if (n === 1) return 1
  return n * factorial(n - 1)
}
// 转换成尾递归
function factorial2(n, total = 1) {
  if (n === 1) return total
  return factorial2(n - 1, n * total)
}
factorial2(3) // 6
```

数组求和

```js
function sumArr(arr, total = 1) {
  if (arr.length === 1) return total
  return sumArr(arr, total + arr.pop())
}
sumArr([1, 2, 3, 4]) // 10
```

斐波那契数列

```js
function fibonacci(n, start = 1, total = 1) {
  if (n <= 2) return total
  return fibonacci(n - 1, total, total + start)
}
fibonacci(6) // 8
```

## 防抖和节流

本质上是优化高频率执行代码的一种手段

- 防抖: n 秒内只运行一次, 若在 n 秒内重复触发, 只生效一次。在连续的事件中只触发一次回调
  - 搜索框, 用户在输入时, 删删改改, 只有回车或点击搜索按钮时才发送请求
  - 手机号等验证规则
  - 调整窗口大小
- 节流: n 秒后再执行, n 秒内重新触发则重新计时。在间隔一段时间, 刷新间隔时间触发回调
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

# 单点登录

单点登录（SSO）定义在多个应用系统中, 用户只需要登录一次就可以访问所有相互信任的应用系统。SSO 一般需要一个独立的认证中心（passport）一个系统登录成功后, passport 将会颁发一个令牌给各个子系统, 拥有了令牌后就可以访问各个子系统受保护的资源, 减少频繁的向 passport 发起认证

## 如何实现

### 相同域名下单点登录:

通过`cookie`的`domain`属性, 将其设置为父域域名, 同时将`cookie`的`path`设置为根路径, `token`或`session ID`保存在父域中, 这样所有的子域就都可以访问到这个`cookie`

### 不同域名下单点登录:

部署一个专门处理登录请求的认证中心, 用户统一在认证中心登录, 登录后认证中心记录用户的登录状态, 并将`token`写入`cookie`。当打开一个应用系统时, 应用系统会检查当前请求有没有`token`, 若没有就会跳转到认证中心, 认证中心根据`cookie`判断用户此前是否登录, 若没有登录则跳转到登录页面等待用户登录, 若登录则携带生成的`token`跳转回目标 url。目标应用系统拿到`token`后会再次向认证中心确认`token`的合法性, 以防止用户伪造。确认无误后就会记录用户的登录状态, 并将`token`写入当前域的`cookie`中。
