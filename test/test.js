// 求n的阶层
function factorial(n, total = 1) {
  if (n === 1) return total
  return factorial(n - 1, n * total)
}
console.log(factorial(3))

// 数组求和
function sumArr(arr, total = 1) {
  if (arr.length === 1) return total
  return sumArr(arr, total + arr.pop())
}
console.log(sumArr([1, 2, 3, 4]))

function sumArr2(arr) {
  let sum = 0
  for (const i of arr) {
    sum += i
  }
  return sum
}
console.log(sumArr2([1, 2, 3, 4]))

// 斐波那契数列
function fibonacci(n, start = 1, total = 1) {
  if (n <= 2) return total
  return fibonacci(n - 1, total, total + start)
}
console.log(fibonacci(6))

// 使用闭包特性
var fibonacci2 = (function () {
  let memo = [0, 1]
  let fib = n => {
    if (memo[n] == undefined) memo[n] = fib(n - 2) + fib(n - 1)
    return memo[n]
  }
  return fib
})()
console.log(fibonacci2(30))

const obj = {
  seythis: () => {
    console.log(this)
  }
}
obj.seythis()

const say = obj.seythis

say()
