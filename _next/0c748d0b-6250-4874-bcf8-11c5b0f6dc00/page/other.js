module.exports=__NEXT_REGISTER_PAGE("/other",function(){var e=webpackJsonp([3],{370:function(e,t,r){e.exports=r(371)},371:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(19);var o=r.n(n);var u=r(1);var i=r.n(u);var a=r(41);var c=r(42);var f=r(140);function p(e){p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return p(e)}function s(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var u=e.apply(t,r);function i(e,t){try{var r=u[e](t);var i=r.value}catch(e){o(e);return}r.done?n(i):Promise.resolve(i).then(a,c)}function a(e){i("next",e)}function c(e){i("throw",e)}a()})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function b(e,t,r){t&&y(e.prototype,t);r&&y(e,r);return e}function v(e,t){if(t&&("object"===p(t)||"function"===typeof t))return t;return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=function(e){m(t,e);function t(){l(this,t);return v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}b(t,[{key:"componentDidMount",value:function e(){this.props.dispatch(Object(c["h"])())}},{key:"render",value:function e(){return i.a.createElement(f["a"],{title:"Other Page",linkTo:"/",NavigateTo:"Index Page"})}}],[{key:"getInitialProps",value:function(){var e=s(o.a.mark(function e(t){var r,n,u;return o.a.wrap(function e(o){while(1)switch(o.prev=o.next){case 0:r=t.ctx,n=r.store,u=r.isServer;n.dispatch(Object(c["i"])(u));return o.abrupt("return",{isServer:u});case 3:case"end":return o.stop()}},e,this)}));return function t(r){return e.apply(this,arguments)}}()}]);return t}(i.a.Component);t["default"]=Object(a["b"])()(d)}},[370]);return{page:e.default}});