const btnOpen = document.getElementById("hamburger")
const btnClose = document.getElementById("hamburger-close")

btnOpen?.addEventListener("click",() => {
  document.getElementById("menu")?.classList.add("active")
})
btnClose?.addEventListener("click",() => {
  document.getElementById("menu")?.classList.remove("active")
})

