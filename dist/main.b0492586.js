parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var e=Array.from(document.querySelectorAll(".percent")),r=document.querySelector(".num__people"),t=document.querySelector(".bill"),o=document.querySelector(".custom"),n=document.querySelector(".reset"),a=/^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/,s=!1,c=0,l=0,u=0,d=0,i=0;function m(e){return s=!1,!(""===t.value||Number(t.value)<=0)&&(c=Number(t.value),!(""===r.value||Number(r.value)<=0)&&(l=c*Number(e.value)/100,u=c+l,d=l/Number(r.value),i=u/Number(r.value),s=!0,n.disabled=!s,_(),!0))}function _(){var e=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),r=document.querySelector(".tip__value"),t=document.querySelector(".total__value");r.innerHTML=e.format(d),t.innerHTML=e.format(i)}console.log(s),n.disabled=!s,e.forEach(function(e){e.addEventListener("change",function(e){m(e.target)})}),t.addEventListener("input",function(e){var r=a.test(t.value),o=document.querySelector(".bill__err");console.log(r),r?Number(t.value)<=0?(console.log("not a number"),o.classList.remove("hide__err"),t.classList.remove("correct__format"),t.classList.add("wrong__format"),o.innerHTML="Cannot be zero or less"):(o.classList.add("hide__err"),t.classList.add("correct__format"),t.classList.remove("wrong__format"),m(t)):(o.classList.remove("hide__err"),t.classList.remove("correct__format"),t.classList.add("wrong__format"),o.innerHTML="Not a number")}),r.addEventListener("input",function(e){var o=a.test(r.value),n=document.querySelector(".people__err");o?Number(r.value)<=0?(console.log("not a number"),n.classList.remove("hide__err"),r.classList.remove("correct__format"),r.classList.add("wrong__format"),r.innerHTML="Number can not be zero or less"):(n.classList.add("hide__err"),r.classList.add("correct__format"),r.classList.remove("wrong__format"),m(t)):(console.log("not a number"),n.classList.remove("hide__err"),r.classList.remove("correct__format"),r.classList.add("wrong__format"),r.innerHTML="Not a number")}),o.addEventListener("focus",function(r){e.forEach(function(e){e.checked=!1})}),o.addEventListener("input",function(e){m(o)});
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.b0492586.js.map