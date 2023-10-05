const buttons = document.querySelectorAll("button")
const txt_result = document.getElementById("result")
const txt_userScore = document.getElementById("user-score")
const txt_computerScore = document.getElementById("computer-score")

const selection = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
}

const totalScore = {
  user: 0,
  computer: 0,
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay())

    animate()

    // console.log(result)
    txt_result.innerHTML = result
    txt_userScore.innerHTML = totalScore.user
    txt_computerScore.innerHTML = totalScore.computer
  })
})

function computerPlay() {
  const choices = [selection.rock, selection.paper, selection.scissors]
  const randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    totalScore.user++
    totalScore.computer++
    return `It's a tie!`
  }

  if (
    (playerSelection === selection.rock &&
      computerSelection == selection.scissors) ||
    (playerSelection === selection.paper &&
      computerSelection === selection.rock) ||
    (playerSelection === selection.scissors &&
      computerSelection === selection.paper)
  ) {
    totalScore.user++
    return `You Win! ${playerSelection} beats ${computerSelection}`
  }

  totalScore.computer++
  return `You Lost! ${computerSelection} beats ${playerSelection}`
}

function animate() {
  if (txt_userScore.innerText != totalScore.user) {
    txt_userScore.classList.add("active")
  }

  if (txt_computerScore.innerText != totalScore.computer) {
    txt_computerScore.classList.add("active")
  }

  txt_result.classList.add("active")

  setTimeout(() => {
    txt_userScore.classList.remove("active")
    txt_computerScore.classList.remove("active")
    txt_result.classList.remove("active")
  }, 500)
}
