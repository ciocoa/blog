# JavaScript

## 数据类型

- 基本类型：number、string、boolean、null、undefined、symbol、bigint
- 引用类型：array、object、function

基本类型数据保存在栈内存中；引用类型数据保存在堆内存中，存在栈中的是一个指向堆内存中实际对象的引用

`Undefined`类型只有一个值，即特殊值`undefined`。当使用`var`或`let`声明了变量但没有初始化时，就相当于给变量默认赋值`undefined`。而`Null`类型同样只有一个值，即特殊值`null`。表示一个空对象指针，因此`typeof null`会返回一个`object`。
