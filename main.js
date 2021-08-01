const radioBtn = Array.from(document.querySelectorAll(".percent"))
const numPeople = document.querySelector(".num__people")
const bill = document.querySelector(".bill")
const custom = document.querySelector(".custom")
const resetBtn = document.querySelector(".reset")
const numberRegex = /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/
let validate = false

//console.log(bill)
let totalAmount = 0
let totalTipAmount = 0
let totalAmountWithTip = 0
let tipPerPerson = 0
let totalPerPerson = 0

console.log(validate)
if (validate) {
    resetBtn.disabled = false
} else {
    resetBtn.disabled = true
}

radioBtn.forEach(item => {
    item.addEventListener("change", (evt) => {
        calculateBill(evt.target)
    })
})

function validateNumbers(numToValidate, element, errSpan) {
    if (numToValidate) {
        if (Number(element.value) <= 0) {
            console.log("not a number")
            errSpan.classList.remove("hide__err")
            element.classList.remove("correct__format")
            element.classList.add("wrong__format")
            peopleErr.innerHTML = "Number can not be zero or less"
        } else {
            errSpan.classList.add("hide__err")
            element.classList.add("correct__format")
            element.classList.remove("wrong__format")
            calculateBill(bill)
        }
    }
    else {
        console.log("not a number")
        errSpan.classList.remove("hide__err")
        element.classList.remove("correct__format")
        element.classList.add("wrong__format")
        errSpan.innerHTML = "Not a number"
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
    calculateBill(custom)
})


function calculateBill(billedAmount) {
    validate = false

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

            if (validate) {
                resetBtn.disabled = false
            } else {
                resetBtn.disabled = true
            }

            display()
            return true
        }
    }

}

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

resetBtn.addEventListener("reset", () => {
    tipPerPerson = 0
    totalPerPerson = 0
    calculateDisplayTotals(tipPerPerson, totalPerPerson)
    console.log(tipPerPerson)
})