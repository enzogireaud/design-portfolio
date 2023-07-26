const btnOpen = document.getElementById("hamburger")
const btnClose = document.getElementById("hamburger-close")
const menuLinks = document.querySelectorAll(".menu-links")

btnOpen?.addEventListener("click",() => {
  document.getElementById("menu")?.classList.add("active")
})
btnClose?.addEventListener("click",() => {
  document.getElementById("menu")?.classList.remove("active")
})

menuLinks.forEach((link) => {
  link.addEventListener("click",() => {
    document.getElementById("menu")?.classList.remove("active")
  })
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("show")
    } else {
      entry.target.classList.remove("show")
    }
  })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))