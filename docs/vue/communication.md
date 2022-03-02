# 组件通信

组件通信指的就是组件`.vue`之间通过某种方式传递信息。

组件通信可以分为：

- 父子组件
- 兄弟组件
- 祖孙与后代组件
- 非关系组件

## 通信方案

- props：父向子传值，父组件使用子组件标签通过字面量传递，子组件通过设置`props`属性接收
- $emit：子向父传值，子组件通过`$emit`触发自定义事件第二个参数为传递的值，父组件通过绑定的事件监听器获取子组件传递过来的数据
- ref：父组件使用子组件的时候设置`ref`属性，通过`this.$refs`获取对应的数据
- EventBus：兄弟组件传值，创建一个中央事件总线`EventBus`，其中一个通过`$emit`触发自定义事件，另一个通过`$on`监听自定义事件
- $parent或$root：通过共同祖辈`$parent`或`root`搭建通信桥梁，其中一个`this.$parent.on()`，另一个`this.$parent.emit()`
- $attrs 与 $listeners：祖辈传递给子孙，设置批量下传属性`$attrs`和`$listeners`，包含了父级作用域不作为`prop`被识别的特性绑定，通过`v-bind="$attrs"`传入内部组件
- provide 与 inject：在祖辈组件定义`Provide`属性返回传递的值，在子孙组件通过`Inject`接收

## Vuex

适用于复杂关系的组件之间数据传递，Vuex 作用相当于一个共享变量的容器。

- state：用来存放共享变量
- getter：增加一个`getter`派生状态，用来获取 共享变量的值
- mutations：用来存放修改`state`的方法
- actions：也用来存放修改`state`的方法，不过是在`mutations`的基础上进行，常用于一些异步操作
