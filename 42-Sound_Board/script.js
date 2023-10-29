const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"]

sounds.forEach((sound) => {
  const btn = document.createElement("button")
  btn.classList.add("btn")

  btn.innerText = sound

  // play sound when button clicked
  btn.addEventListener("click", () => {
    // stop other sounds
    stopSounds()

    // play current sound
    document.getElementById(sound).play()
  })

  document.getElementById("buttons").appendChild(btn)
})

function stopSounds() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound)

    audio.pause()
    audio.currentTime = 0
  })
}
