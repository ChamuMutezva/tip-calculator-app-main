const radioBtn = Array.from(document.querySelectorAll(".percent"))
const numPeople = document.querySelector(".num__people")
const bill = document.querySelector(".bill")
const custom = document.querySelector(".custom")
const resetBtn = document.querySelector(".reset")
const numberRegex = /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/
const form = document.querySelector(".form")
let validate = false

//console.log(bill)
let totalAmount = 0
let totalTipAmount = 0
let totalAmountWithTip = 0
let tipPerPerson = 0
let totalPerPerson = 0

console.log(validate)
if (Number(numPeople.value) <= 0) {
    resetBtn.disabled = true
} else {
    resetBtn.disabled = false
}

radioBtn.forEach(item => {
    item.addEventListener("change", (evt) => {
       // console.log(evt.target.value)
        // console.log(bill.value)
       // calculateBill(evt.target) 1
         calculateBill(bill.value, evt.target.value, numPeople.value)
    })
})

function validateNumbers(numToValidate, element, errSpan) {
    let rate = 5 // default rate percentage to be used
    console.log(radioBtn)
    console.log(custom)

    // check if a radio button is checked, if checked
    // use the value of the checked button as the rate
    const radioFiltered = radioBtn.filter(btn => btn.checked === true)

    // if radioFiltered contains an empty array , then no radio
    // button is selected - meaning that the custom button is to be used
    if (radioFiltered.length === 0) {
        rate = Number(custom.value)
    } else {
        rate = Number(radioFiltered[0].value)
    }
    console.log(radioFiltered)
    console.log(rate)

    if (numToValidate) {
       // console.log(validate)
        if (Number(numPeople.value) <= 0 || Number(bill.value) <= 0) {
            resetBtn.disabled = true
           errSpan.innerHTML = "Number can't be zero or less"
        } else {
            resetBtn.disabled = false
        }        

        if (Number(element.value) <= 0) {
           // console.log("not a number")
            errSpan.classList.remove("hide__err")
            element.classList.remove("correct__format")
            element.classList.add("wrong__format")
            calculateDisplayTotals("0", "0")
            errSpan.innerHTML = "Number can't be zero or less"
            //  resetBtn.disabled = false
        } else {
            errSpan.classList.add("hide__err")
            element.classList.add("correct__format")
            element.classList.remove("wrong__format")
            calculateBill(bill.value, rate , numPeople.value)
           // calculateBill(bill) 1
            // resetBtn.disabled = false
        }
    }
    else {
      //  console.log("not a number")
        errSpan.classList.remove("hide__err")
        element.classList.remove("correct__format")
        element.classList.add("wrong__format")
        errSpan.innerHTML = "Not a number"
        calculateDisplayTotals("0", "0")
        // resetBtn.disabled = true
    }

}

bill.addEventListener("input", (evt) => {
    const validNum = numberRegex.test(bill.value)
    const billErr = document.querySelector(".bill__err")
    validateNumbers(validNum, bill, billErr)
})

numPeople.addEventListener("input", (evt) => {
  
    const validNum = numberRegex.test(numPeople.value)
    const peopleErr = document.querySelector(".people__err")
    validateNumbers(validNum, numPeople, peopleErr)
})

custom.addEventListener("focus", (evt) => {
    // console.log(evt.target)
    radioBtn.forEach(item => {
        item.checked = false
    })

})
custom.addEventListener("input", (evt) => {
    // console.log(custom.value)
  //  calculateBill(custom) 1
  custom.checked = true
  calculateBill(bill.value, custom.value, numPeople.value)
})

function calculateBill(billedAmount, rate, numpeople) {
    if (billedAmount === "" || Number(billedAmount <= 0)) {
        return 
    } else {
        totalAmount = Number(billedAmount)
    }

    if (numpeople === "" || Number(numpeople) <= 0) {       
        return 
    }

    totalTipAmount = totalAmount * Number(rate) / 100 //evt.target
    totalAmountWithTip = totalAmount + totalTipAmount
    tipPerPerson = totalTipAmount / Number(numpeople)
    totalPerPerson = totalAmountWithTip / Number(numpeople)
    validate = true

    display()
    return true
}

/*
function calculateBill(billedAmount) {
   
    if (bill.value === "" || Number(bill.value) <= 0) {
        //if the bill is an empty string (no data has been entered) or
        // if the bill entered is less that or equal to 0 , then return without doing anything
        // console.log("escape")
        return false
    }
    else {
        totalAmount = Number(bill.value)
        //  console.log(bill.value !== "" || Number(bill.value) >= 0)
        //   console.log(`total amount is: ${totalAmount}`)
        if (numPeople.value === "" || Number(numPeople.value) <= 0) {
            // console.log("do nothing")
            // validate = false
            return false
        } else {

            totalTipAmount = totalAmount * Number(billedAmount.value) / 100 //evt.target
            totalAmountWithTip = totalAmount + totalTipAmount
            tipPerPerson = totalTipAmount / Number(numPeople.value)
            totalPerPerson = totalAmountWithTip / Number(numPeople.value)
            validate = true

            display()
            return true
        }
    }

}
*/

function calculateDisplayTotals(tips, totals) {
    const dollarsUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    })
    const displayTip = document.querySelector(".tip__value")
    const displayTotalAmount = document.querySelector(".total__value")
    displayTip.value = dollarsUS.format(tips)
    displayTotalAmount.value = dollarsUS.format(totals)
    //displayTip.innerHTML = dollarsUS.format(tips)
    // displayTotalAmount.innerHTML = dollarsUS.format(totals)
}

function display() {
    calculateDisplayTotals(tipPerPerson, totalPerPerson)
}

form.addEventListener("reset", (evt) => {
    // evt.preventDefault()
    totalAmount = 0
    totalTipAmount = 0
    totalAmountWithTip = 0
    tipPerPerson = 0
    totalPerPerson = 0
    resetBtn.disabled = true
    console.log("form reset")
})
