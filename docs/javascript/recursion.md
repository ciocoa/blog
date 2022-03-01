# 递归和尾递归

在函数内部可以调用其他函数，那么在函数内部调用自身，这个函数就是递归

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

尾递归是在函数尾部调用自身的特殊形式，通过优化计算仅占用常量栈空间。

在递归调用的过程中，系统为每一层的返回点、局部量等开辟了栈来存储，递归次数过多容易造成栈溢出。尾递归因为递归形式的调用出现在函数末尾，只存在一个调用记录，所以不会发生栈溢出

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
