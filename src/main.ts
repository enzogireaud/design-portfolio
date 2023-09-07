import { gsap } from "gsap";

/*****
 *
 * Menu + Fade animation
 *
 ****/
const btnOpen = document.getElementById("hamburger");
const btnClose = document.getElementById("hamburger-close");
const menuLinks = document.querySelectorAll(".menu-links");

btnOpen?.addEventListener("click", () => {
  document.getElementById("menu")?.classList.add("active");
});
btnClose?.addEventListener("click", () => {
  document.getElementById("menu")?.classList.remove("active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu")?.classList.remove("active");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

/******** Loader *******/

function startLoader() {
  let counterElement = document.querySelector(".counter")
  let currentValue = 0

  function updateCounter() {
    if(currentValue === 100) {
      return;
    }
    currentValue += Math.floor(Math.random() * 10) + 1

    if(currentValue >100) {
      currentValue = 100
    }

    if(counterElement) {
      counterElement.textContent = currentValue +  "%"
    }

    let delay = Math.floor(Math.random() * 200) + 250;
    setTimeout(updateCounter,delay) 
  }
  updateCounter()
}
startLoader()
let ease = "power4.inOut"
gsap.from(".circles", {
  duration:2,
  top:"-100%",
  ease:"elastic.out",
  delay:0.5
})
gsap.to(".circle-inner",{
  duration:1,
  width:"75px",
  height:"75px",
  ease:ease,
  delay:2
})
gsap.to(".circle-inner-rotator",{
  duration:1,
  scale:1,
  ease:ease,
  delay:2.5
})
gsap.to(".circles",{
  duration:1.5,
  rotation:360,
  ease:ease,
  delay:3
})
if(window.innerWidth > 1050) {
  gsap.to(".block",{
    duration:0.75,
    height:"200px",
    display:"block",
    ease:ease,
    delay:4
  })
}

gsap.to(".block",{
  duration:0.75,
  width:"800px",
  ease:ease,
  delay:4.5
})
gsap.fromTo(".container",{
  duration:2,
  left:"100%",
  scale:0.5,
  ease:ease,
  delay:4
},{
  duration:2,
  left:"50%",
  scale:0.5,
  ease:ease,
  transform:"translateX(-50%)",
  delay:4
})
gsap.to(".block",{
  duration:1.5,
  width:"0px",
  ease:ease,
  delay:5
})
gsap.to(".block",{
  duration:1.5,
  height:"0px",
  ease:ease,
  delay:6
})
gsap.to(".circles",{
  duration:1.5,
  rotation:0,
  ease:ease,
  delay:6.5
})
gsap.to(".loader",{
  duration:2.5,
  scale:0,
  ease:ease,
  delay:7
})
gsap.to(".container",{
  duration:2.5,
  scale:1,
  ease:ease,
  delay:7.5
})
gsap.to("#title-container h1",{
  duration:1,
  opacity:1,
  transform:"translateY(0)",
  ease:ease,
  delay:9
})
gsap.to("#mobile-nav",{
  duration:2,
  opacity:1,
  ease:ease,
  delay:9
})
gsap.to("#imgs-container",{
  duration:1,
  transform:"translateY(0)",
  delay: 8
})
gsap.fromTo("#informations", {
  duration:1,
  transform:"translateX(-100%)",
  opacity:0,
  delay:7
},{
duration:0.6,
opacity:1,
transform:"translateX(0px)",
delay:9.5
})
gsap.fromTo("#informations", {
  duration:1,
  transform:"translateX(-100%)",
  opacity:0,
  delay:0
},{
duration:0.6,
opacity:1,
transform:"translateX(0px)",
delay:9.5
})
gsap.fromTo("#stats", {
  duration:1,
  transform:"translateX(100%)",
  opacity:0,
  delay:0
},{
duration:0.6,
opacity:1,
transform:"translateX(0px)",
delay:10
})