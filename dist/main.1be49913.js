parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var e=Array.from(document.querySelectorAll(".percent")),r=document.querySelector(".num__people"),t=document.querySelector(".bill"),o=document.querySelector(".custom"),u=document.querySelector(".reset"),n=/^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/,a=document.querySelector(".form"),c=!1,l=0,s=0,d=0,m=0,i=0;function v(e,o,n){e?(console.log(c),Number(r.value)<=0||Number(t.value)<=0?u.disabled=!0:u.disabled=!1,Number(o.value)<=0?(console.log("not a number"),n.classList.remove("hide__err"),o.classList.remove("correct__format"),o.classList.add("wrong__format")):(n.classList.add("hide__err"),o.classList.add("correct__format"),o.classList.remove("wrong__format"),_(t))):(console.log("not a number"),n.classList.remove("hide__err"),o.classList.remove("correct__format"),o.classList.add("wrong__format"),n.innerHTML="Not a number")}function _(e){return!(""===t.value||Number(t.value)<=0)&&(l=Number(t.value),!(""===r.value||Number(r.value)<=0)&&(s=l*Number(e.value)/100,d=l+s,m=s/Number(r.value),i=d/Number(r.value),c=!0,b(),!0))}function f(e,r){var t=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),o=document.querySelector(".tip__value"),u=document.querySelector(".total__value");o.value=t.format(e),u.value=t.format(r)}function b(){f(m,i)}console.log(c),Number(r.value)<=0?u.disabled=!0:u.disabled=!1,e.forEach(function(e){e.addEventListener("change",function(e){_(e.target)})}),t.addEventListener("input",function(e){var r=n.test(t.value),o=document.querySelector(".bill__err");v(r,t,o)}),r.addEventListener("input",function(e){var t=n.test(r.value),o=document.querySelector(".people__err");v(t,r,o)}),o.addEventListener("focus",function(r){e.forEach(function(e){e.checked=!1})}),o.addEventListener("input",function(e){_(o)}),a.addEventListener("reset",function(e){l=0,s=0,d=0,m=0,i=0,u.disabled=!0,console.log("form reset")});
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.1be49913.js.map