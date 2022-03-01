# DOM & BOM

## DOM 文档对象模型

HTML 和 XML 文档的编程接口，它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容

- 创建节点：
  - `creatElement`创建新元素。接收要创建元素的标签名
  - `creatTextNode`创建一个文本节点
  - `creatDocumentFragment`创建一个文档碎片，它表示一种轻量级的文档，主要用来存储临时节点，然后一次性添加到 DOM
  - `creatAttribute`创建属性节点，自定义属性
- 获取节点：
  - `querySelector`传入任何有效的 css 选择器
  - `querySelectorAll` 返回所有与之相匹配的节点列表
  - `getEleentByID`。。。
- 更新节点：
  - `innerHTML`可以修改 DOM 节点的文本内容，还可以直接通过 HTML 片段修改 DOM 节点内部的子树
  - `innerText`、`textContent`自动对字符串进行编码，保证无法设置任何 HTML 标签
- 添加节点：
  - `appendChild`把一个子节点添加到父节点的最后
  - `insertBefore`把子节点添加到指定的位置
  - `setAttribute`在指定元素上添加一个属性节点，如果元素中已有则改变属性值
    `style`对应所有的 css，可以直接获取或设置
- 删除节点：
  - 先获取该节点本身及它的父节点，然后调用父节点的`removeChild`把自己删除

## BOM 浏览器对象模型

提供了独立于内容与浏览器窗口进行交互的对象，BOM 的核心对象是 window，它表示浏览器的一个实例，在浏览器中 window 有双重角色，既是浏览器窗口的一个接口又是全局对象。

主要作用就是跟浏览器做一些交互效果：

- `location` location.reload()页面重新刷新
- `navigator` 获取浏览器属性，区分浏览器类型
- `screen` 保存的客户端显示器信息，比如像素宽度和像素高度等
- `history` 操作浏览器的 URL 历史记录
  - `history.go()` 跳转到最近一个记录中符合要求的页面
  - `history.forward()` 前进一个页面
  - `history.back()` 回退到上一个页面
  - `history.length()` 获取历史记录数量
