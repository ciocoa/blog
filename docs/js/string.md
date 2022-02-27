# 字符串

字符串的增删改查，因其是基本数据类型，创建后不可改变

[[toc]]

## 增

### concat - 拼接

## 删

### slice、 substr、 substring

接收一或两个参数，返回调用它们的字符串的子字符串

## 改

### trim、 trimLeft、 trimRight

删除前后的空格并返回新的字符串

### repeat

字符串复制，接收一个整数（复制次数）并返回复制后的结果

### padEnd

复制字符串并指定长度（第一个参数），不满足则填充字符（第二个参数）

### toLowerCase、 toUpperCase

字符串大小写转换

## 查

### chatAt

返回给定索引位置的字符

### indexOf

搜索传入的字符串并返回位置，没找到返回-1

### startWith、 includes

搜索传入的字符串并返回布尔值

## 转换

### split

将字符串按指定的分隔符，拆分成数组

## 模版匹配

### match

接收一个参数（正则，RegExp），返回数组

### search

接收一个参数（正则，RegExp），返回索引或-1

### relace

接收两个参数（匹配的内容，要替换的元素或函数）
