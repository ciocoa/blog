# 字符串及其常用方法

字符串的增删改查，因其是基本数据类型，创建后不可改变

[[toc]]

## 增

- concat：字符串拼接

## 删

- slice、 substr、 substring：接收一或两个参数，返回调用它们的字符串的子字符串

## 改

- trim、 trimLeft、 trimRight：删除前后的空格并返回新的字符串

- repeat：字符串复制，接收一个整数（复制次数）并返回复制后的结果

- padEnd：复制字符串并指定长度（第一个参数），不满足则填充字符（第二个参数）

- toLowerCase、 toUpperCase：字符串大小写转换

## 查

- chatAt：返回给定索引位置的字符

- indexOf：搜索传入的字符串并返回位置，没找到返回-1

- startWith、 includes：搜索传入的字符串并返回布尔值

## 转换

- split：将字符串按指定的分隔符，拆分成数组

## 模版匹配

- match：接收一个参数（正则，RegExp），返回数组

- search：接收一个参数（正则，RegExp），返回索引或-1

- relace：接收两个参数（匹配的内容，要替换的元素或函数）

---

给定一个只包含'('，')'，'['，']'，'{'，'}'的字符串，判断字符串是否有效，满足如下条件：

- 左括号必须用相同类型的右括号闭合；
- 左括号必须以正确的顺序闭合。
- 空字符串可以被认为是有效字符串。

```js
const isVaild = str => {
  let arr = []
  str = str.split('')
  for (const i of atr) {
    if (i === '') continue
    else if (i === '(') arr.push(')')
    else if (i === '[') arr.push(']')
    else if (i === '{') arr.push('}')
    else if (arr.length === 0 || arr.pop() !== i) return false
  }
  return arr.length === 0 ? true : false
}
```
