const API_KEY = "96ffe8cb212932b9faf179b5f688f573"

const weatherDataEl = document.getElementById("weather-data")
const cityInputEl = document.getElementById("city-input")

const formEl = document.querySelector("form")

formEl.addEventListener("submit", (e) => {
  e.preventDefault()
  const cityValue = cityInputEl.value

  getWeatherData(cityValue)
})

async function getWeatherData(cityValue) {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric`

  try {
    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error("Network response failed!")
    }

    // convert response to json
    const data = await response.json()

    const temperature = Math.round(data.main.temp)
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind Speed: ${data.wind.speed} m/s`,
    ]

    weatherDataEl.querySelector(
      ".icon"
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather-icon">`

    weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`

    weatherDataEl.querySelector(".description").textContent = `${description}`

    weatherDataEl.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("")
  } catch (error) {
    weatherDataEl.querySelector(".icon").innerHTML = ""

    weatherDataEl.querySelector(".temperature").textContent = ""

    weatherDataEl.querySelector(".description").textContent =
      "An error occured, please try again later."

    weatherDataEl.querySelector(".details").innerHTML = ""
  }
}
