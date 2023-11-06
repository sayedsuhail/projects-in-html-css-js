const ACCESS_KEY = "4v8VmzxyESEIOjN_77O9f1PhxDrELjmAb6XzHReUN4w"

const formEl = document.querySelector("form")
const searchInputEl = document.getElementById("search-input")
const searchResultsEl = document.querySelector(".search-results")
const btn_showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1

async function searchImages() {
  inputData = searchInputEl.value

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${ACCESS_KEY}`

  console.log(url)

  const response = await fetch(url)
  const data = await response.json()
  if (page === 1) {
    searchResultsEl.innerHTML = ""
  }

  const results = data.results

  results.map((result) => {
    const imageWrapper = document.createElement("div")
    imageWrapper.classList.add("search-result")
    const image = document.createElement("img")
    image.src = result.urls.small
    image.alt = result.alt_description
    const imageLink = document.createElement("a")
    imageLink.href = result.links.html
    imageLink.target = "_blank"
    imageLink.textContent = result.alt_description

    imageWrapper.appendChild(image)
    imageWrapper.appendChild(imageLink)
    searchResultsEl.appendChild(imageWrapper)
  })

  if (page > 1) {
    btn_showMore.style.display = block
  }

  console.log(data.results)
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault()
  page = 1
  searchImages()
})
