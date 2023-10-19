const loginContainerEl = document.querySelector(".login-container")
const loginFormEl = document.getElementById("loginForm")
const loginUsernameEl = document.getElementById("loginUsername")
const loginPassEl = document.getElementById("loginPassword")
const showPassIconEl = document.querySelector("i.fa-eye")

// Show/Hide password
showPassIconEl.addEventListener("click", () => {
  if (loginPassEl.type === "password") {
    loginPassEl.type = "text"
    showPassIconEl.style.color = "#f00"
  } else {
    loginPassEl.type = "password"
    showPassIconEl.style.color = "#ddd"
  }
})

// Simple validation
loginFormEl.addEventListener("submit", (e) => {
  e.preventDefault()

  // for username
  if (loginUsernameEl.value === "" || loginUsernameEl.value.length < 4) {
    // show error
    showError(loginUsernameEl, "username must be greater than 3")
  } else {
    // show success, hide error
    showSuccess(loginUsernameEl)
  }

  // for password
  if (loginPassEl.value === "" || loginPassEl.value.length < 6) {
    // show error
    showError(loginPassEl, "password must be greater than 5")
  } else {
    // show success, hide error
    showSuccess(loginPassEl)
  }
})

// Show error
function showError(input, message) {
  const formField = input.parentElement

  formField.className = "form-field error"

  if (formField.className == "form-field error") {
    const alert_msg = formField.querySelector(".alert-message")
    alert_msg.style.visibility = "visible"
    alert_msg.style.color = "#f00"
    alert_msg.innerText = message
  }
}

// show success
function showSuccess(input) {
  const formField = input.parentElement

  formField.className = "form-field success"

  if (formField.className == "form-field success") {
    const alert_msg = formField.querySelector(".alert-message")
    alert_msg.style.visibility = "hidden"
  }
}

// request form
const requestForm = document.querySelector(".form-request")
requestForm.style.display = "none"

const showRequestForm = document.querySelector(".reset-password")
showRequestForm.addEventListener("click", (e) => {
  e.preventDefault()
  if (requestForm.style.display !== "block") {
    loginContainerEl.style.minHeight = "650px"
    requestForm.style.display = "block"
  } else {
    requestForm.style.display = "none"
    loginContainerEl.style.minHeight = "initial"
  }
})

// reset form
requestForm.addEventListener("click", (e) => {
  e.preventDefault()

  if (requestForm.style.display === "block") {
    const requestEmail = document.getElementById("requestEmail")

    if (requestEmail.value === "") {
      showError(requestEmail, "Email cannot be empty")
    } else {
      showSuccess(requestEmail)
    }
  }
})
