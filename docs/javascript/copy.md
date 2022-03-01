# 浅拷贝和深拷贝

## 数据类型

- 基本类型：number、string、boolean、null、undefined、symbol、bigint
- 引用类型：array、object、function

基本类型数据保存在栈内存中；引用类型数据保存在堆内存中，存在栈中的是一个指向堆内存中实际对象的引用

## 浅拷贝

浅拷贝指的是创建新的数据时这个数据有着原始数据属性值的一份精确拷贝，浅拷贝只复制指向某个对象的指针，而不复制对象本身

如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址

存在浅拷贝的现象

- `Object.assign`
- `Array.prototype.slice`
- `Array.prototype.concat`
- 拓展运算符实现的复制

## 深拷贝

深拷贝则是开辟一个新的栈，两个对象属性完全相同，但对应两个不同的地址，修改一个对象的属性时不影响另一个属性

存在深拷贝的现象

- `_.cloneDeep`
- `jQuery.extend`
- `JSON.stringify`
- 循环递归
