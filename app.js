//Display menu navigateur
const btnMenu = document.querySelector('.btn-menu');
btnMenu.addEventListener('click', () => {
    let headerNav = document.querySelector('.header__nav');
    headerNav.classList.toggle('header__nav-active');
});

// //Prefers color scheme
// let theme = "light";

// const btnTheme = document.querySelector('.btn__theme');
// btnTheme.addEventListener("click", () => {

//   const newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
//   theme = newTheme;
//   applyTheme(theme);

// });

// // Fonction pour appliquer le thème
// function applyTheme(theme) {
//   document.querySelector("body").style.backgroundColor = theme === "light" ? "#fff" : "#333";
//   document.querySelector("body").style.color = theme === "light" ? "#000" : "#fff";
// }

const skillsProgress = document.querySelectorAll(".skills progress");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        
        let progressValue = 0;

        switch (entry.target.id) {
          case 'javascript':
            progressBar(entry.target, 85);
            break;
          case 'reactjs':
            progressBar(entry.target, 95);
            break;
          case 'nodejs':
            progressBar(entry.target, 92);
            break;
          case 'mysql':
            progressBar(entry.target, 80);
            break;
          default:
        }

        function progressBar(elementProgress, elementValue) {
          const intervalId = setInterval(() => {
            progressValue += 5;
            elementProgress.value = progressValue;
            if (progressValue >= elementValue) {
              clearInterval(intervalId);
            }
          }, 200);
        }

      }
    });
}, {threshold: 1});
  
skillsProgress.forEach((progress) => {
    observer.observe(progress);
})

  