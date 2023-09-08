const btnEl = document.getElementById("btn")
const birthdayEl = document.getElementById("birthday")
const resultEl = document.getElementById("result")

function calculateAge() {
  const birthdayValue = birthdayEl.value

  // show result
  resultEl.classList.remove("hideResult")

  if (birthdayValue === "") {
    resultEl.innerText = "Please Enter Your Birthday!"
    // alert("Please Enter Your Birthday!")
    return
  }

  const age = getAge(birthdayValue)

  if (age < 0) {
    resultEl.innerText = "Please enter a valid date of birth!"

    return
  }

  resultEl.innerText = `Your are ${age} ${age > 1 ? "years" : "year"} old!`
}

function getAge(birthdayValue) {
  const currentDate = new Date()
  const birthDate = new Date(birthdayValue)

  let age = currentDate.getFullYear() - birthDate.getFullYear()
  let month = currentDate.getMonth() - birthDate.getMonth()

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--
  }
  return age
}

btnEl.addEventListener("click", calculateAge)
