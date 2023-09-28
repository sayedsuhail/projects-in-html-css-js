const loadText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let load = 0

let loadInterval = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(loadInterval)
  }

  loadText.innerHTML = `${load}%`
  loadText.style.opacity = mapNumber(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${mapNumber(load, 0, 100, 30, 0)}px)`
} // blurring

function mapNumber(value, fromMin, fromMax, toMin, toMax) {
  // First, normalize the input value to a range between 0 and 1 within the source range
  const normalizedValue = (value - fromMin) / (fromMax - fromMin)

  // Then, map the normalized value to the target range
  const mappedValue = normalizedValue * (toMax - toMin) + toMin

  return mappedValue
}
