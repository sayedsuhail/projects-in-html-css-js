let text = document.getElementById("typewriter")

const textArr = text.textContent.split("")

let timeInterval

text.innerHTML = ""

function typewriterEffect() {
  if (textArr.length > 0) {
    text.innerHTML += textArr.shift()
  } else {
    clearTimeout(timeInterval)
  }

  timeInterval = setTimeout(
    "typewriterEffect()",
    Math.floor(Math.random() * (200, 250))
  )
}

typewriterEffect()
