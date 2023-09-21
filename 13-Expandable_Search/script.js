const btn_search = document.getElementById("search-btn")
const searchInput = document.querySelector(".search-input")

// console.log(btn_search)
// console.log(searchInput)

btn_search.addEventListener("click", () => {
  searchInput.classList.toggle("active-search")
})

document.querySelector("main").addEventListener("click", () => {
  searchInput.classList.remove("active-search")
})
