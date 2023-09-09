const checkbox = document.getElementById("checkbox")
const btn_submit = document.querySelector("button[type=submit]")
// disable checkbox
checkbox.disabled = true
btn_submit.disabled = true

const elements = document.querySelectorAll(".element")
const selectColor = document.getElementById("SelectColor")

let randomNumberForColor = Math.floor(Math.random() * 10)

let flag = 0

// assign color to elements
elements.forEach((e) => {
  const color = getRandomColor()

  e.style.backgroundColor = color
  e.innerHTML = color

  if (randomNumberForColor == flag) {
    selectColor.innerHTML = color
  }

  flag++
})

// generate random color
function getRandomColor() {
  const letter = "0123456789ABCDEF"
  let color = "#"

  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)]
  }

  return color
}

// check if right color
elements.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.innerHTML === selectColor.innerHTML) {
      alert("you are human!")
      checkbox.checked = true
      btn_submit.disabled = false

      btn_submit.classList.remove("btn-light")
      btn_submit.classList.add("btn-success")
    } else {
      alert("Please verify that you are human!")
      location.reload(true)
    }
  })
})
