/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={106:(t,n,e)=>{e.d(n,{A:()=>c});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([t.id,'.error {\n  color: #ff0000;\n  font-size: 0.8rem;\n  margin-top: 5px;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color: #f5f5f5;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\nheader {\n  background-color: #1900ff83;\n  color: #fff;\n  padding: 20px;\n  text-align: left;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  padding: 20px;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 10px;\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\ninput[type="text"],\ntextarea {\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\nbutton {\n  padding: 10px 20px;\n  background-color: #1900ff83;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #1900ff8a;\n}\n\n#noteList {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n\n#archivedNoteList {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n\n.noteItem {\n  border: 1px solid #ccc;\n  padding: 10px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n}\n\n.archiveItem {\n  border: 1px solid #ccc;\n  padding: 10px;\n  margin-bottom: 10px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n}\n\n.loading-indicator {\n  display: none;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9999;\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.loading-indicator::after {\n  content: "Loading...";\n  display: block;\n  text-align: center;\n  color: #333;\n}\n\nfooter {\n  background-color: #1900ff83;\n  color: #fff;\n  padding: 20px;\n  text-align: center;\n  margin-top: auto;\n}\n\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes slideOut {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n}\n\n#archiveButton:hover {\n  background-color: #dddddd;\n  color: #1101a183;\n}\n\n#archivedNoteList {\n  display: none;\n  animation: slideIn 0.3s ease-in-out;\n}\n\n.archive-p {\n  color: rgb(0, 221, 0);\n}\n\n.search-archive-container {\n  display: flex;\n  align-items: center;\n}\n\n#archiveButton {\n  background-color: #1900ff83;\n  color: #ffffff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition:\n    background-color 0.3s,\n    color 0.3s;\n  width: 100px;\n  margin-left: auto;\n}\n\n#searchInput {\n  transition: width 0.4s ease-in-out;\n  width: 150px;\n  margin-right: 10px;\n}\n\n#searchInput:focus {\n  width: 250px;\n}\n\n@media (max-width: 768px) {\n  #noteList {\n    grid-template-columns: 1fr;\n  }\n\n  header {\n    background-color: #1900ff83;\n    color: #fff;\n    padding: 20px;\n    text-align: center;\n  }\n}\n',""]);const c=i},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],l=a[s]||0,f="".concat(s," ").concat(l);a[s]=l+1;var p=e(f),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)n[p].references++,n[p].updater(d);else{var h=o(d,r);r.byIndex=c,n.splice(c,0,{identifier:f,updater:h,references:1})}i.push(f)}return i}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var u=r(t,o),s=0;s<a.length;s++){var l=e(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=u}}},659:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return t[r](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{var t=e(72),n=e.n(t),r=e(825),o=e.n(r),a=e(659),i=e.n(a),c=e(56),u=e.n(c),s=e(540),l=e.n(s),f=e(113),p=e.n(f),d=e(106),h={};function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function y(){y=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,e){return t[n]=e}}function l(t,n,e,r){var a=n&&n.prototype instanceof b?n:b,i=Object.create(a.prototype),c=new M(r||[]);return o(i,"_invoke",{value:I(t,e,c)}),i}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var p="suspendedStart",d="suspendedYield",h="executing",m="completed",g={};function b(){}function x(){}function w(){}var E={};s(E,i,(function(){return this}));var k=Object.getPrototypeOf,L=k&&k(k(F([])));L&&L!==e&&r.call(L,i)&&(E=L);var T=w.prototype=b.prototype=Object.create(E);function O(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function j(t,n){function e(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==v(l)&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):n.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return a=a?a.then(o,o):o()}})}function I(n,e,r){var o=p;return function(a,i){if(o===h)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=S(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var s=f(n,e,r);if("normal"===s.type){if(o=r.done?m:d,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=m,r.method="throw",r.arg=s.arg)}}}function S(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,S(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=f(o,n.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function _(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function F(n){if(n||""===n){var e=n[i];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,a=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(v(n)+" is not iterable")}return x.prototype=w,o(T,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:x,configurable:!0}),x.displayName=s(w,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===x||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(T),t},n.awrap=function(t){return{__await:t}},O(j.prototype),s(j.prototype,c,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new j(l(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(T),s(T,u,"Generator"),s(T,i,(function(){return this})),s(T,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=F,M.prototype={constructor:M,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;_(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:F(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function m(t,n,e,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}function g(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){m(a,r,o,i,c,"next",t)}function c(t){m(a,r,o,i,c,"throw",t)}i(void 0)}))}}function b(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function x(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,E(r.key),r)}}function w(t,n,e){return n&&x(t.prototype,n),e&&x(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function E(t){var n=function(t,n){if("object"!=v(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==v(n)?n:n+""}function k(t,n,e){return n=I(n),function(t,n){if(n&&("object"===v(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,O()?Reflect.construct(n,e||[],I(t).constructor):n.apply(t,e))}function L(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&j(t,n)}function T(t){var n="function"==typeof Map?new Map:void 0;return T=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(n){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return function(t,n,e){if(O())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,n);var o=new(t.bind.apply(t,r));return e&&j(o,e.prototype),o}(t,arguments,I(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),j(e,t)},T(t)}function O(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(O=function(){return!!t})()}function j(t,n){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},j(t,n)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}h.styleTagTransform=p(),h.setAttributes=u(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(d.A,h),d.A&&d.A.locals&&d.A.locals;var S=function(t){function n(){return b(this,n),k(this,n,arguments)}return L(n,t),w(n,[{key:"connectedCallback",value:function(){this.innerHTML="\n      <header>\n        <h1>My Notes App</h1>\n      </header>"}}])}(T(HTMLElement)),P=function(t){function n(){return b(this,n),k(this,n,arguments)}return L(n,t),w(n,[{key:"connectedCallback",value:function(){this.innerHTML='\n      <form id="noteForm">\n        <input type="text" id="noteTitle" placeholder="Judul">\n        <textarea id="noteBody" placeholder="Buat Catatan..."></textarea>\n        <button type="submit">Add Note</button>\n        <div id="formError" class="error"></div>\n      </form>\n    '}}])}(T(HTMLElement)),_=function(t){function n(){return b(this,n),k(this,n,arguments)}return L(n,t),w(n,[{key:"note",set:function(t){this.innerHTML='\n      <div class="noteItem">\n        <h3>'.concat(t.title,"</h3>\n        <p>").concat(t.body,'</p>\n        <button class="delete-btn">Delete</button>\n        <button class="archive-btn">Archive</button>\n      </div>\n    ')}}])}(T(HTMLElement)),M=function(t){function n(){var t;return b(this,n),(t=k(this,n)).attachShadow({mode:"open"}),t.render(),t}return L(n,t),w(n)}(T(HTMLElement)),F=function(t){function n(){return b(this,n),k(this,n,arguments)}return L(n,t),w(n,[{key:"note",set:function(t){var n=document.createElement("div");n.classList.add("archiveItem"),n.innerHTML='\n      <p class ="archive-p">Archive</p>\n      <h3>'.concat(t.title,"</h3>\n      <p>").concat(t.body,'</p>\n      <button class="unarchive-btn">Unarchive</button>\n    '),n.querySelector(".unarchive-btn").addEventListener("click",g(y().mark((function n(){return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Y(t.id);case 2:W(),K();case 4:case"end":return n.stop()}}),n)})))),this.appendChild(n)}}])}(T(HTMLElement));function B(){return C.apply(this,arguments)}function C(){return(C=g(y().mark((function t(){var n,e;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://notes-api.dicoding.dev/v2/notes");case 3:if((n=t.sent).ok){t.next=6;break}throw new Error("Failed to fetch notes");case 6:return t.next=8,n.json();case 8:return e=t.sent,t.abrupt("return",e);case 12:return t.prev=12,t.t0=t.catch(0),console.error("Error fetching notes:",t.t0),t.abrupt("return",{data:[]});case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function N(t,n){return A.apply(this,arguments)}function A(){return(A=g(y().mark((function t(n,e){var r,o;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://notes-api.dicoding.dev/v2/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n,body:e})});case 3:if((r=t.sent).ok){t.next=6;break}throw new Error("Failed to add note");case 6:return t.next=8,r.json();case 8:return o=t.sent,t.abrupt("return",o);case 12:throw t.prev=12,t.t0=t.catch(0),console.error("Error adding note:",t.t0),t.t0;case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function H(t){return G.apply(this,arguments)}function G(){return(G=g(y().mark((function t(n){return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://notes-api.dicoding.dev/v2/notes/".concat(n),{method:"DELETE"});case 3:if(t.sent.ok){t.next=6;break}throw new Error("Failed to delete note");case 6:t.next=12;break;case 8:throw t.prev=8,t.t0=t.catch(0),console.error("Error deleting note:",t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function q(t){return R.apply(this,arguments)}function R(){return(R=g(y().mark((function t(n){var e,r;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://notes-api.dicoding.dev/v2/notes/".concat(n,"/archive"),{method:"POST"});case 3:if((e=t.sent).ok){t.next=6;break}throw new Error("Failed to archive note");case 6:return t.next=8,e.json();case 8:return r=t.sent,t.abrupt("return",r);case 12:throw t.prev=12,t.t0=t.catch(0),console.error("Error archiving note:",t.t0),t.t0;case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function Y(t){return D.apply(this,arguments)}function D(){return(D=g(y().mark((function t(n){var e,r;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://notes-api.dicoding.dev/v2/notes/".concat(n,"/unarchive"),{method:"POST"});case 3:if((e=t.sent).ok){t.next=6;break}throw new Error("Failed to unarchive note");case 6:return t.next=8,e.json();case 8:return r=t.sent,t.abrupt("return",r);case 12:throw t.prev=12,t.t0=t.catch(0),console.error("Error unarchiving note:",t.t0),t.t0;case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function J(){return z.apply(this,arguments)}function z(){return(z=g(y().mark((function t(){var n,e;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://notes-api.dicoding.dev/v2/notes/archived");case 3:if((n=t.sent).ok){t.next=6;break}throw new Error("Failed to fetch archived notes");case 6:return t.next=8,n.json();case 8:return e=t.sent,t.abrupt("return",e);case 12:return t.prev=12,t.t0=t.catch(0),console.error("Error fetching archived notes:",t.t0),t.abrupt("return",{status:"error",message:"Failed to fetch archived notes",data:[]});case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function U(t){t.querySelector(".delete-btn").addEventListener("click",g(y().mark((function n(){var e;return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.dataset.noteId,n.next=3,H(e);case 3:W();case 4:case"end":return n.stop()}}),n)})))),t.querySelector(".archive-btn").addEventListener("click",g(y().mark((function n(){var e;return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.dataset.noteId,n.next=3,q(e);case 3:W();case 4:case"end":return n.stop()}}),n)}))))}function K(){return Q.apply(this,arguments)}function Q(){return(Q=g(y().mark((function t(){var n,e;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=document.getElementById("archivedNoteList")).innerHTML="",t.next=4,J();case 4:e=t.sent;try{e.data.forEach((function(t){var e=document.createElement("archive-item");e.note=t,n.appendChild(e)}))}catch(t){console.error("Error displaying archived notes:",t),alert("Failed to display archived notes. Please try again later.")}case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}customElements.define("loading-indicator",M),customElements.define("app-header",S),customElements.define("note-form",P),customElements.define("note-item",_),customElements.define("archive-item",F),document.getElementById("archiveButton").addEventListener("click",g(y().mark((function t(){var n;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("none"!==(n=document.getElementById("archivedNoteList")).style.display){t.next=7;break}return n.style.display="block",t.next=5,K();case 5:t.next=8;break;case 7:n.style.display="none";case 8:case"end":return t.stop()}}),t)}))));var V=document.getElementById("searchInput");function W(){return X.apply(this,arguments)}function X(){return(X=g(y().mark((function t(){var n,e,r;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=document.getElementById("loadingIndicator")).style.display="block",t.next=4,B();case 4:e=t.sent,(r=document.getElementById("noteList")).innerHTML="";try{e.data.forEach((function(t){var n=document.createElement("note-item");n.note=t,n.dataset.noteId=t.id,r.appendChild(n),U(n)}))}catch(t){console.error("Error displaying notes:",t),alert("Failed to display notes. Please try again later.")}finally{n.style.display="none"}case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Z(){return(Z=g(y().mark((function t(){var n,e,r;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=document.getElementById("noteForm"),e=document.getElementById("noteTitle").value,r=document.getElementById("noteBody").value,e&&r){t.next=6;break}return document.getElementById("formError").innerText="Mohon isi Judul dan Catatan!",t.abrupt("return");case 6:return t.prev=6,t.next=9,N(e,r);case 9:return t.next=11,W();case 11:n.reset(),document.getElementById("formError").innerText="",t.next=19;break;case 15:t.prev=15,t.t0=t.catch(6),console.error("Error adding note:",t.t0),alert("Failed to add note. Please try again later.");case 19:case"end":return t.stop()}}),t,null,[[6,15]])})))).apply(this,arguments)}V.addEventListener("input",(function(){var t=V.value.toLowerCase();document.querySelectorAll("note-item").forEach((function(n){var e=n.querySelector("h3").innerText.toLowerCase(),r=n.querySelector("p").innerText.toLowerCase(),o=e.includes(t)||r.includes(t);n.style.display=o?"block":"none"}))})),document.getElementById("noteForm").addEventListener("submit",(function(t){t.preventDefault(),function(){Z.apply(this,arguments)}()})),W(),K()})()})();