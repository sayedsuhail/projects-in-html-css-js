const txt_timer = document.getElementById("timer")
// buttons
const btn_start = document.getElementById("start")
const btn_stop = document.getElementById("stop")
const btn_reset = document.getElementById("reset")

let startTime = 0
let elapsedTime = 0
let timeInterval

function formatTime(elapsedTime) {
  const milisecs = Math.floor((elapsedTime % 1000) / 10)
  const secs = Math.floor((elapsedTime % (1000 * 60)) / 1000)
  const mins = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))
  const hrs = Math.floor(elapsedTime / (1000 * 60 * 60))

  let formattedTime = `
  ${hrs ? (hrs > 9 ? hrs : "0" + hrs) : "00"}:${
    mins ? (mins > 9 ? mins : "0" + mins) : "00"
  }:${secs ? (secs > 9 ? secs : "0" + secs) : "00"}<span>.${
    milisecs > 9 ? milisecs : "0" + milisecs
  }</span>`
  return formattedTime
} //formatTime

function startTimer() {
  startTime = Date.now() - elapsedTime

  timeInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime

    txt_timer.innerHTML = formatTime(elapsedTime)
  }, 10)

  btn_start.disabled = true
  btn_stop.disabled = false
} //startTimer

function stopTimer() {
  clearInterval(timeInterval)
  btn_stop.disabled = true
  btn_start.disabled = false
} //stopTimer

function resetTimer() {
  clearInterval(timeInterval)
  elapsedTime = 0

  txt_timer.innerHTML = "00:00:00"

  btn_start.disabled = false
  btn_stop.disabled = false
} //resetTimer

btn_start.addEventListener("click", startTimer)
btn_stop.addEventListener("click", stopTimer)
btn_reset.addEventListener("click", resetTimer)
