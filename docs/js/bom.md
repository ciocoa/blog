# BOM 浏览器对象模型

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
