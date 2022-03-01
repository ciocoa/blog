function ajax(options) {
  const xhr = new XMLHttpRequest()
  options = options || {}
  options.type = (options.type || 'GET').toUpperCase()
  options.dataType = options.dataType || 'JSON'

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

// ajsx({
//   type: 'POST',
//   dataType: 'json',
//   data: {},
//   url: 'http://xxxxxxx',
//   success: function (text, xml) {
//     console.log(text)
//   },
//   fail: function (status) {
//     console.log(status)
//   }
// })

/**
 * 给定一个只包含'('，')'，'['，']'，'{'，'}'的字符串，判断字符串是否有效，满足如下条件：
 * 左括号必须用相同类型的右括号闭合；左括号必须以正确的顺序闭合。
 * 注意：空字符串可以被认为是有效字符串。
 */
const isVaild = str => {
  console.log(this)
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
console.log(isVaild('({}}'))

function abc() {
  this.name = 'xiaoxiao'
  // return this
}
var a = new abc()
console.log(a.name)

// 尾递归
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
