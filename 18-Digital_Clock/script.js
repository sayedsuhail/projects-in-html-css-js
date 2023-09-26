window.addEventListener("DOMContentLoaded", showTime())

function showTime() {
  let date = new Date()

  // date.setTime(5000)

  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  let session = "AM"

  if (h == 0) {
    h = 12
  }

  if (h == 12) {
    session = "PM"
  }

  if (h > 12) {
    h = h - 12
    session = "PM"
  }

  h = h < 10 ? "0" + h : h
  m = m < 10 ? "0" + m : m
  s = s < 10 ? "0" + s : s

  // const time = h + ":" + m + ":" + s + " | " + session
  const time = `${h}:${m}.<small>${s} | ${session}</small>`

  document.getElementById("DisplayClock").innerHTML = time

  setTimeout(showTime, 1000)

  // change body background\
  let bg

  const userName = "DevBrix!"
  const user = document.getElementById("User")

  if (h < 8 && session === "AM") {
    bg = `url('https://unsplash.com/photos/-G3rw6Y02D0')`
    user.innerHTML = `Good morning, ${userName}`
  } else if (h < 12 && session === "AM") {
    bg = `url('https://images.unsplash.com/photo-1539920951450-2b2d59cff66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60')`
    user.innerHTML = `Good day , ${userName}`
  } else if ((h < 8 || h == 12) && session === "PM") {
    bg = `url('https://images.unsplash.com/photo-1617709612070-54506a509e65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFmdGVybm9vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60')`
    user.innerHTML = `Good afternoon , ${userName}`
  } else {
    bg = `url('https://images.unsplash.com/photo-1536746803623-cef87080bfc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG5pZ2h0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60')`
    user.innerHTML = `Good night , ${userName}`
  }

  // insert bg img
  const body = document.querySelector("body")
  body.style.background = `${bg} center/cover`
}

const focus = document.querySelector(".focus-container input")

focus.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.querySelector(
      ".focus-container"
    ).innerHTML = `<h6>TODAY: </h6><h1>${focus.value}</h1>`
  }
})
