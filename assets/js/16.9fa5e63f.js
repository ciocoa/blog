(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{413:function(t,e,_){"use strict";_.r(e);var o=_(56),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"原型和原型链"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原型和原型链"}},[t._v("#")]),t._v(" 原型和原型链")]),t._v(" "),_("p",[t._v("在 js 中，所有对象都是 object 的实例，继承 "),_("code",[t._v("object.prototype")]),t._v(" 的属性和方法。\n原型可以看作是对象的蓝图，每个对象都拥有一个原型对象。\n所有的引用类型（数组、对象、函数）都具有对象的特性，可以自由扩展属性，它们都具有隐式原型"),_("code",[t._v("__proto__")]),t._v("属性，值是一个对象；所有的函数也都具有显式原型 "),_("code",[t._v("prototype")]),t._v(" 属性，值也是一个对象；所有引用类型的"),_("code",[t._v("__proto__")]),t._v("属性都指向其构造函数的 "),_("code",[t._v("prototype")]),t._v(" 属性。\n当试图获取对象属性的时候，如果对象本身没有这个属性，那么就会去其"),_("code",[t._v("__proto__")]),t._v("属性上寻找，一层层往上，直到找到或 null 为止。原型对象也可能拥有原型，并从中继承属性和方法，一层一层以此类推。这就是原型链。")]),t._v(" "),_("h2",{attrs:{id:"new-关键字"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#new-关键字"}},[t._v("#")]),t._v(" new 关键字")]),t._v(" "),_("p",[_("code",[t._v("new")]),t._v("关键字创建一个给定构造函数的实例对象，创建出来的实例对象可以访问到构造函数中的属性以及构造函数原型链中的属性")]),t._v(" "),_("p",[t._v("创建一个新对象，将对象与构造函数通过原型链连接起来，将构造函数中的 this 绑定到新建对象上，判断返回类型，如果返回原始值则被忽略，如果返回对象则正常处理")])])}),[],!1,null,null,null);e.default=r.exports}}]);