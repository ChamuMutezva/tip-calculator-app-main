const radioBtn = Array.from(document.querySelectorAll(".percent"))


radioBtn.forEach(item => {
    const bill = document.querySelector(".bill")
    item.addEventListener("change", (evt) => {
       console.log(evt.target)
       console.log(bill.value)
    })
})