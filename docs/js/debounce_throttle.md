# 防抖和节流

本质上是优化高频率执行代码的一种手段

- 防抖：n 秒内只运行一次，若在 n 秒内重复触发，只生效一次。在连续的事件中只触发一次回调
  - 搜索框，用户在输入时，删删改改，只有回车或点击搜索按钮时才发送请求
  - 手机号等验证规则
  - 调整窗口大小
- 节流：n 秒后再执行，n 秒内重新触发则重新计时。在间隔一段时间，刷新间隔时间触发回调
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
