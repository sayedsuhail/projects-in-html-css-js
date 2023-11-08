const bill = document.getElementById("Bill")
const numberOfPeople = document.getElementById("Peopleamount")
const result = document.getElementById("Result")

let serviceQual = document.getElementById("ServiceQual")

result.style.display = "none"

const calculator = document.getElementById("Calculate")

calculator.addEventListener("click", calculatorTip)

// calculate tip
function calculatorTip() {
  if (bill.value === "" || serviceQual.value === 0) {
    alert("please enter a value!")
    return
  }

  if (numberOfPeople.value === "" || numberOfPeople.value < 1) {
    numberOfPeople.value = 1
    result.style.display = "none"
  } else {
    result.style.display = "block"
  }

  let totalTip = bill.value * serviceQual.value
  let divTip = totalTip / numberOfPeople.value
  let totalBill = totalTip + parseInt(bill.value)
  let divBillTip = totalBill / numberOfPeople.value

  document.getElementById("Result").style.display = "block"
  document.getElementById("Tip").innerText = "$" + totalTip.toFixed(2)
  document.getElementById("Total_Bill_Tip").innerText =
    "$" + totalBill.toFixed(2)
  document.getElementById("Div_Tip").innerHTML = "$" + divTip.toFixed(2)
  document.getElementById("Div_Tip-Person").innerHTML =
    "$" + divBillTip.toFixed(2)
}
