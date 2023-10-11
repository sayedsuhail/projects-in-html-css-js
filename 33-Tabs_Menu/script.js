const mainContent = document.querySelector("main")
const tabs = document.querySelectorAll(".btn")
const contents = document.querySelectorAll(".content")

mainContent.onclick = (e) => {
  const id = e.target.dataset.id

  if (id) {
    //  remove active class from all tabs
    tabs.forEach((tab) => tab.classList.remove("active"))

    // add active class to selected tab
    e.target.classList.add("active")

    // remove active class from all contents
    contents.forEach((content) => content.classList.remove("active"))

    // add active class to selected content
    const activeTab = document.getElementById(id)
    activeTab.classList.add("active")
  }
}
