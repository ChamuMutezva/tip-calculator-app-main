parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var e=Array.from(document.querySelectorAll(".percent")),r=document.querySelector(".num__people"),t=document.querySelector(".bill"),o=document.querySelector(".custom"),n=document.querySelector(".reset"),u=/^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/,c=document.querySelector(".form"),l=!1,a=0,s=0,d=0,i=0,m=0;function v(u,c,l){var a=5;console.log(e),console.log(o);var s=e.filter(function(e){return!0===e.checked});a=0===s.length?Number(o.value):Number(s[0].value),console.log(s),console.log(a),u?(Number(r.value)<=0||Number(t.value)<=0?(n.disabled=!0,l.innerHTML="Number can't be zero or less"):n.disabled=!1,Number(c.value)<=0?(l.classList.remove("hide__err"),c.classList.remove("correct__format"),c.classList.add("wrong__format"),_("0","0"),l.innerHTML="Number can't be zero or less"):(l.classList.add("hide__err"),c.classList.add("correct__format"),c.classList.remove("wrong__format"),f(t.value,a,r.value))):(l.classList.remove("hide__err"),c.classList.remove("correct__format"),c.classList.add("wrong__format"),l.innerHTML="Not a number",_("0","0"))}function f(e,r,t){if(!(""===e||Number(e<=0)||(a=Number(e),""===t||Number(t)<=0)))return s=a*Number(r)/100,d=a+s,i=s/Number(t),m=d/Number(t),l=!0,b(),!0}function _(e,r){var t=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),o=document.querySelector(".tip__value"),n=document.querySelector(".total__value");o.value=t.format(e),n.value=t.format(r)}function b(){_(i,m)}console.log(l),Number(r.value)<=0?n.disabled=!0:n.disabled=!1,e.forEach(function(e){e.addEventListener("change",function(e){f(t.value,e.target.value,r.value)})}),t.addEventListener("input",function(e){var r=u.test(t.value),o=document.querySelector(".bill__err");v(r,t,o)}),r.addEventListener("input",function(e){var t=u.test(r.value),o=document.querySelector(".people__err");v(t,r,o)}),o.addEventListener("focus",function(r){e.forEach(function(e){e.checked=!1})}),o.addEventListener("input",function(e){o.checked=!0,f(t.value,o.value,r.value)}),c.addEventListener("reset",function(e){a=0,s=0,d=0,i=0,m=0,n.disabled=!0,console.log("form reset")});
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.27ed5c8e.js.map