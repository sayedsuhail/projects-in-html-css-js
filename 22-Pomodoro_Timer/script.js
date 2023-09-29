// buttons
const btn_start = document.getElementById("start")
const btn_stop = document.getElementById("stop")
const btn_reset = document.getElementById("reset")
// timer
const txt_timer = document.getElementById("timer")

let timerInterval
let flag = false
let timeLeft = 1500 // 25mins

function updateTimer() {
  let min = Math.floor(timeLeft / 60)
  let sec = timeLeft % 60
  // let formattedTime = min + ":" + sec
  let formattedTime = `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}` // if less than 2 digits then add 0 at start

  txt_timer.innerHTML = formattedTime
}

btn_start.addEventListener("click", () => {
  if (!flag) {
    flag = true
    timerInterval = setInterval(() => {
      timeLeft--
      updateTimer()

      if (timeLeft === 0) {
        clearInterval(timerInterval)
        alert(`Time's Up!`)
        timeLeft = 1500
        flag = false
      }
    }, 1000)
  }
})

btn_stop.addEventListener("click", () => {
  clearInterval(timerInterval)
  flag = false
})

btn_reset.addEventListener("click", () => {
  clearInterval(timerInterval)
  flag = false
  timeLeft = 1500
  updateTimer()
  // txt_timer.innerHTML = "25:00"
})
