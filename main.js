const radioBtn = Array.from(document.querySelectorAll(".percent"))
const numPeople = document.querySelector(".num__people")
const bill = document.querySelector(".bill")
const custom = document.querySelector(".custom")

console.log(bill)
let totalAmount = 0
let totalTipAmount = 0
let totalAmountWithTip = 0
let tipPerPerson = 0
let totalPerPerson = 0

radioBtn.forEach(item => {   
    item.addEventListener("change", (evt) => {
        calculateBill(evt.target)     
    })
})

bill.addEventListener("input", (evt) => {
    console.log(bill.value)
    calculateBill(bill)
})

numPeople.addEventListener("input", (evt) => {
    console.log(numPeople.value)
    calculateBill(bill)
})

custom.addEventListener("focus", (evt) => {
    console.log(evt.target)
    radioBtn.forEach(item => {   
       item.checked = false
    })
    
})
custom.addEventListener("input", (evt) =>{
    console.log(custom.value)
    calculateBill(custom)
})
function calculateBill(tipAmount) {
    console.log(tipAmount) //evt.target
    console.log(bill.value, typeof bill.value)
    console.log(tipAmount.value, typeof tipAmount.value) //console.log(evt.target.value, typeof evt.target.value) 
    console.log(numPeople.value, typeof numPeople.value)

    if (bill.value === "" || Number(bill.value) <= 0) {
        //if the bill is an empty string (no data has been entered) or
        // if the bill entered is less that or equal to 0 , then return without doing anything
        console.log("escape")
        return false
    } 
    else 
    {
        totalAmount = Number(bill.value)
        console.log(bill.value !== "" || Number(bill.value) >= 0)
        console.log(`total amount is: ${totalAmount}`)
        if (numPeople.value === "" || Number(numPeople.value) <= 0) {
            console.log("do nothing")
            return false
        } else {
            totalTipAmount = totalAmount * Number(tipAmount.value) / 100 //evt.target
            totalAmountWithTip = totalAmount + totalTipAmount
            tipPerPerson = totalTipAmount / Number(numPeople.value)
            totalPerPerson = totalAmountWithTip / Number(numPeople.value)
            console.log(numPeople.value !== "" && Number(numPeople.value) >= 0)
            console.log(`Total tip is : ${totalTipAmount}`)
            console.log(`Total amount with tip is : ${totalAmountWithTip}`)
            console.log(`Tip amount per person : ${tipPerPerson}`)
            console.log(`Total amount per person : ${totalPerPerson}`)
            display()
            return true
        }
    }
}

function display(){
    const dollarsUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    })
    const displayTip = document.querySelector(".tip__value")
    const displayTotalAmount = document.querySelector(".total__value")
    displayTip.innerHTML = dollarsUS.format(tipPerPerson)
    displayTotalAmount.innerHTML = dollarsUS.format(totalPerPerson)
}