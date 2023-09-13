const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const tens = document.getElementById("tens")

const btn_start = document.getElementById("start-btn")
const btn_stop = document.getElementById("stop-btn")
const btn_reset = document.getElementById("reset-btn")

let setMinutes = 0
let setSeconds = 0
let setTens = 0
let interval

btn_start.addEventListener("click", () => {
  clearInterval(interval)
  interval = setInterval(startTimer, 10)
  dimEffectON()
})

btn_stop.addEventListener("click", () => {
  clearInterval(interval)

  const lap = document.getElementById("laps")
  const li = document.createElement("li")
  li.innerHTML = `lap: <span>${minutes.innerHTML}:${seconds.innerHTML}.${tens.innerHTML}</span>`
  lap.appendChild(li)
  dimEffectOFF()
  // interval = setInterval(startTimer, 10)
})

btn_reset.addEventListener("click", () => {
  clearInterval(interval)
  setMinutes = 0
  setSeconds = 0
  setTens = 0

  minutes.innerHTML = "00"
  seconds.innerHTML = "00"
  tens.innerHTML = "00"

  document.getElementById("laps").innerHTML = ""
  dimEffectOFF()
})

function startTimer() {
  setTens++
  // console.log(tens)
  if (setTens < 9) {
    tens.innerHTML = "0" + setTens
  }

  if (setTens > 9) {
    tens.innerHTML = setTens
  }

  if (setTens > 99) {
    setSeconds++
    seconds.innerHTML = "0" + setSeconds
    setTens = 0
    tens.innerHTML = "00"
  }

  if (setSeconds > 9) {
    seconds.innerHTML = setSeconds
  }

  if (setSeconds == 60) {
    setMinutes++
    minutes.innerHTML = "0" + setMinutes
    setSeconds = 0
    seconds.innerHTML = "00"
  }

  if (setMinutes > 9) {
    minutes.innerHTML = setMinutes
  }
}

// dimming effect
function dimEffect(setOn) {
  const lapTime = document.querySelector(".lap-time")

  if (setOn) {
    lapTime.classList.add("diming-effect")
  }

  if (!setOn) {
    lapTime.classList.remove("diming-effect")
  }
}

function dimEffectON() {
  dimEffect(true)
}

function dimEffectOFF() {
  dimEffect(false)
}
