(self["webpackChunkauthvueproject"]=self["webpackChunkauthvueproject"]||[]).push([[967],{84964:function(t,r,e){var n=e(5112),o=n("match");t.exports=function(t){var r=/./;try{"/./"[t](r)}catch(e){try{return r[o]=!1,"/./"[t](r)}catch(n){}}return!1}},27065:function(t,r,e){"use strict";var n=e(1702),o=e(19662),i=e(70111),a=e(92597),c=e(50206),u=e(34374),f=Function,s=n([].concat),l=n([].join),h={},p=function(t,r,e){if(!a(h,r)){for(var n=[],o=0;o<r;o++)n[o]="a["+o+"]";h[r]=f("C,a","return new C("+l(n,",")+")")}return h[r](t,e)};t.exports=u?f.bind:function(t){var r=o(this),e=r.prototype,n=c(arguments,1),a=function(){var e=s(n,c(arguments));return this instanceof a?p(r,e.length,e):r.apply(t,e)};return i(e)&&(a.prototype=e),a}},3929:function(t,r,e){var n=e(47850),o=TypeError;t.exports=function(t){if(n(t))throw o("The method doesn't accept regular expressions");return t}},91038:function(t,r,e){var n=e(82109),o=e(48457),i=e(17072),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},26699:function(t,r,e){"use strict";var n=e(82109),o=e(41318).includes,i=e(47293),a=e(51223),c=i((function(){return!Array(1).includes()}));n({target:"Array",proto:!0,forced:c},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},35837:function(t,r,e){var n=e(82109),o=e(17854);n({global:!0},{globalThis:o})},69098:function(t,r,e){"use strict";var n=e(77710),o=e(95631);n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},51532:function(t,r,e){e(69098)},49337:function(t,r,e){var n=e(82109),o=e(19781),i=e(53887),a=e(45656),c=e(31236),u=e(86135);n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var r,e,n=a(t),o=c.f,f=i(n),s={},l=0;while(f.length>l)e=o(n,r=f[l++]),void 0!==e&&u(s,r,e);return s}})},36535:function(t,r,e){var n=e(82109),o=e(22104),i=e(19662),a=e(19670),c=e(47293),u=!c((function(){Reflect.apply((function(){}))}));n({target:"Reflect",stat:!0,forced:u},{apply:function(t,r,e){return o(i(t),r,a(e))}})},12419:function(t,r,e){var n=e(82109),o=e(35005),i=e(22104),a=e(27065),c=e(39483),u=e(19670),f=e(70111),s=e(70030),l=e(47293),h=o("Reflect","construct"),p=Object.prototype,y=[].push,v=l((function(){function t(){}return!(h((function(){}),[],t)instanceof t)})),d=!l((function(){h((function(){}))})),g=v||d;n({target:"Reflect",stat:!0,forced:g,sham:g},{construct:function(t,r){c(t),u(r);var e=arguments.length<3?t:c(arguments[2]);if(d&&!v)return h(t,r,e);if(t==e){switch(r.length){case 0:return new t;case 1:return new t(r[0]);case 2:return new t(r[0],r[1]);case 3:return new t(r[0],r[1],r[2]);case 4:return new t(r[0],r[1],r[2],r[3])}var n=[null];return i(y,n,r),new(i(a,t,n))}var o=e.prototype,l=s(f(o)?o:p),g=i(t,l,r);return f(g)?g:l}})},32023:function(t,r,e){"use strict";var n=e(82109),o=e(1702),i=e(3929),a=e(84488),c=e(41340),u=e(84964),f=o("".indexOf);n({target:"String",proto:!0,forced:!u("includes")},{includes:function(t){return!!~f(c(a(this)),c(i(t)),arguments.length>1?arguments[1]:void 0)}})},28861:function(t,r,e){e(82526),e(41817),e(41539),e(32165),e(78783),e(33948),e(72443),e(39341),e(73706),e(10408),e(21703),e(30489),e(54747),e(68309),e(47042);var n=e(17964)["default"];function o(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports["default"]=t.exports;var r={},e=Object.prototype,i=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(G){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=E(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=h(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(G){return{type:"throw",arg:G}}}r.wrap=l;var p={};function y(){}function v(){}function d(){}var g={};s(g,c,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(S([])));w&&w!==e&&i.call(w,c)&&(g=w);var x=d.prototype=y.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function e(o,a,c,u){var f=h(t[o],t,a);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"==n(l)&&i.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):r.resolve(l).then((function(t){s.value=t,c(s)}),(function(t){return e("throw",t,c,u)}))}u(f.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function E(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=h(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,p;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(i.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=d,s(x,"constructor",d),s(d,"constructor",v),v.displayName=s(d,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,f,"GeneratorFunction")),t.prototype=Object.create(x),t},r.awrap=function(t){return{__await:t}},b(L.prototype),s(L.prototype,u,(function(){return this})),r.AsyncIterator=L,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new L(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),s(x,f,"Generator"),s(x,c,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:S(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},r}t.exports=o,t.exports.__esModule=!0,t.exports["default"]=t.exports},17964:function(t,r,e){function n(r){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports["default"]=t.exports,n(r)}e(82526),e(41817),e(41539),e(32165),e(78783),e(33948),t.exports=n,t.exports.__esModule=!0,t.exports["default"]=t.exports}}]);
//# sourceMappingURL=967-legacy.47adde5c.js.map