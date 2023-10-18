const e=Array.from(document.querySelectorAll(".percent")),r=document.querySelector(".num__people"),t=document.querySelector(".bill"),o=document.querySelector(".custom"),l=document.querySelector(".reset"),u=/^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$///NUMBER VALIDATION
,c=document.querySelector(".form");let n=0,a=0,s=0,d=0,m=0;function i(u,c,n){let a=5// default rate percentage to be used
;console.log(e),console.log(o);// check if a radio button is checked, if checked
// use the value of the checked button as the rate
let s=e.filter(e=>!0===e.checked);a=0===s.length?Number(o.value):Number(s[0].value),console.log(s),console.log(a),u?(0>=Number(r.value)||0>=Number(t.value)?(l.disabled=!0,n.innerHTML="Number can't be zero or less"):l.disabled=!1,0>=Number(c.value)?(// console.log("not a number")
n.classList.remove("hide__err"),c.classList.remove("correct__format"),c.classList.add("wrong__format"),_("0","0"),n.innerHTML="Number can't be zero or less"):(n.classList.add("hide__err"),c.classList.add("correct__format"),c.classList.remove("wrong__format"),v(t.value,a,r.value))):(//  console.log("not a number")
n.classList.remove("hide__err"),c.classList.remove("correct__format"),c.classList.add("wrong__format"),n.innerHTML="Not a number",_("0","0"))}function v(e,r,t){if(!(""===e||Number(e<=0))&&(n=Number(e),!(""===t||0>=Number(t))))return a=n*Number(r)/100//evt.target
,s=n+a,d=a/Number(t),m=s/Number(t),_(d,m),!0}function _(e,r){let t=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),o=document.querySelector(".tip__value"),l=document.querySelector(".total__value");o.innerHTML=t.format(e),l.innerHTML=t.format(r);//displayTip.innerHTML = dollarsUS.format(tips)
// displayTotalAmount.innerHTML = dollarsUS.format(totals)
}console.log(!1),0>=Number(r.value)?l.disabled=!0:l.disabled=!1,e.forEach(e=>{e.addEventListener("change",e=>{// console.log(evt.target.value)
// console.log(bill.value)
// calculateBill(evt.target) 1
v(t.value,e.target.value,r.value)})}),t.addEventListener("input",e=>{let r=u.test(t.value),o=document.querySelector(".bill__err");i(r,t,o)}),r.addEventListener("input",e=>{let t=u.test(r.value),o=document.querySelector(".people__err");i(t,r,o)}),o.addEventListener("focus",r=>{// console.log(evt.target)
e.forEach(e=>{e.checked=!1})}),o.addEventListener("input",e=>{// console.log(custom.value)
//  calculateBill(custom) 1
o.checked=!0,v(t.value,o.value,r.value)}),c.addEventListener("reset",e=>{// evt.preventDefault()
n=0,a=0,s=0,d=0,m=0,l.disabled=!0,console.log("form reset")});//# sourceMappingURL=index.da967253.js.map

//# sourceMappingURL=index.da967253.js.map
