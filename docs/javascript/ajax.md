# AJAX 及其原理

`AJAX`是一种创建交互式网页应用的网页开发技术，在不重新加载整个网页的情况下，与服务器交换数据更新部分网页。

其原理简单来说就是通过`XmlHttpRequest`对象来向服务器发送异步请求，获取服务器数据，再用`JS`来操作`DOM`更新页面.

## 实现方式

- 创建核心对象`XmlHttpRequest`
- 调用`open()`方法与服务端建立连接
- 构建请求所需的数据内容，通过`XmlHttpRequest`对象的`send()`方法发送给服务端
- 通过`XmlHttpRequest`对象的`onreadystatechange`监听服务端的通信状态
- 接收并处理服务端响应的数据结果
- 将处理结果更新到`HTML`页面中

封装一个简单的`AJAX`请求

```js
function ajax(options) {
  const xhr = new XMLHttpRequest()
  options = options || {}
  options.type = (options.type || 'GET').toUpperCase()

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
// 调用
ajsx({
  type: 'POST',
  data: {},
  url: 'http://xxxxxxx',
  success: function (text, xml) {
    console.log(text)
  },
  fail: function (status) {
    console.log(status)
  }
})
```
