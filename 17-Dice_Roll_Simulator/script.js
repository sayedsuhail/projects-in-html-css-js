const btnEl = document.getElementById("roll-button")
const diceEl = document.getElementById("dice")
const rollHistoryEl = document.getElementById("roll-history")

let historyList = []

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1
  const diceFace = getDiceFace(rollResult)

  diceEl.innerHTML = diceFace
  historyList.push(rollResult)
  updateRollHistory()
}

function updateRollHistory() {
  rollHistoryEl.innerHTML = ""
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li")

    listItem.innerHTML = `Item ${i + 1}: <span>${getDiceFace(
      historyList[i]
    )}</span>`

    rollHistoryEl.appendChild(listItem)
  }
}

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;"
    case 2:
      return "&#9857;"
    case 3:
      return "&#9858;"
    case 4:
      return "&#9859;"
    case 5:
      return "&#9860;"
    case 6:
      return "&#9861;"
    default:
      return ""
  }
}

btnEl.addEventListener("click", () => {
  // add animation
  diceEl.classList.add("roll-animation")
  btnEl.disabled = true

  // roll the dice
  setTimeout(() => {
    rollDice()
  }, 500)

  // remove animation after 1 sec
  setTimeout(() => {
    diceEl.classList.remove("roll-animation")
    btnEl.disabled = false
  }, 1000)
})
