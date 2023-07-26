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

document.addEventListener("DOMContentLoaded", () => {
  // La page HTML est chargée, commencez le chargement des autres ressources ici
  let progress = 0;
  const loaderProgress = document.querySelector(".loader-progress") as HTMLSpanElement;
  const contents = document.querySelectorAll(".content") as NodeListOf<HTMLDivElement>;

  function updateLoader() {
    // Mettez à jour le chiffre pour afficher le pourcentage de chargement
    loaderProgress.textContent = `${progress}%`;
  }

  function showContents() {
    // Affiche tous les éléments avec la classe ".content"
    contents.forEach((content) => {
      content.style.display = "block";
    });
  }

  function incrementLoader() {
    // Incrémentez la valeur de "progress" jusqu'à atteindre 100
    if (progress < 100) {
      progress += 1; // Augmentez la valeur pour contrôler la vitesse du loader
      updateLoader();
      setTimeout(incrementLoader, 30); // Délai avant d'augmenter la valeur suivante (plus petit pour une meilleure animation)
    } else {
      // Une fois le chargement terminé, affichez tous les éléments avec la classe ".content"
      showContents();

      // Masquez le loader
      const loader = document.querySelector(".loader") as HTMLDivElement;
      if (loader) {
        loader.style.display = "none";
      }
    }
  }

  incrementLoader();
});



