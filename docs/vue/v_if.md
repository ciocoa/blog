# 指令系统

指令（Directives）是带有`v-`前缀的特殊属性。当表达式值改变时，将其产生的连带影响响应式的作用于 DOM。

在 Vue 模板编译的时候，会将指令系统转化成可执行的`render`函数

- 条件渲染 `v-if`
- 列表渲染 `v-for`
- 属性绑定 `v-bind`
- 双向数据绑定 `v-model`
- 事件绑定 `v-on`

## v-show 和 v-if

在 Vue 中`v-show`和`v-if`的作用效果是相同的，都能控制元素在页面中是否显示，当表达式为`true`时占据页面位置，表达式为`false`时不占据页面位置。

区别：

- 控制手段：`v-show`通过 css 属性`display:none`隐藏，dom 元素依然还在；而`v-if`则是将整个 dom 元素删除
- 编译过程：`v-if`在切换时有一个局部编译/卸载的过程，切换过程会适当的销毁和重建内部的事件监听及子组件；而`v-show`只是简单的基于 css
- 编译条件：`v-if`是真正的条件渲染，只有条件为真时才渲染，并且会触发生命周期钩子；`v-show`则不会触发组件的生命周期
- 性能消耗：`v-if`有更高的切换消耗；`v-show`有更高的初始渲染消耗

## v-if 和 v-for

`v-if`根据条件渲染一块内容，`v-for`基于一个数组来渲染一个列表。`v-for`指令需要使用`item in items`形式的特殊语法，使用时建议使用独一无二的`key`值，便于 Diff 算法进行优化。

`v-for`优先级要高于`v-if`，作用于同一个元素上时会带来性能上的浪费（先循环再进行判断）。使用时建议在元素外层套用`template`（页面渲染不生成 dom 节点）进行条件判断，内层再进行循环。