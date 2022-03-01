# 异步和单线程

JS 主要时用来与用户交互以及操作 DOM 的，这决定了它只能是单线程，即同一时间只能处理一个事务，所有任务需要排队，只有前一个任务结束后才执行下一个任务。

H5 提供了新的 Web Worker 标准，允许创建多线程，但子线程受到主线程控制，且不能操作 DOM。

JS 中所有任务可以分为

- 同步任务：立即执行的任务，直接进入主线程执行，形成一个执行栈
- 异步任务：`ajax`函数，`setTimeout`定时函数等，进入任务队列

## 事件循环

主线程内的任务执行完毕再读取任务队列执行异步任务，如此不断重复就是事件循环

异步任务可以细分为宏任务和微任务，先执行宏任务，遇到微任务则放到微任务的执行对列，当宏任务执行完毕，再查看微任务的事件队列并依次执行。

- 微任务：`Promise.then` `process.nextTick（node.js）`
- 宏任务：`script（外层同步代码）` `setTimeout/setInterval` `UI rendering（UI 事件）` `postMessage/MessageChannel` `setImmediate、IO（node.js）`

## async await

`async`函数用来声明一个异步方法，返回一个`promise`对象，`await`等待异步方法执行，（阻塞后面的代码）后面若是一个`promise`对象，返回该对象的结果，若不是，就直接返回对应的值
