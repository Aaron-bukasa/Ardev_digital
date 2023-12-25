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

// Projets Github
getGithubProjets(document.querySelector('.portfolio__content'), 3);
getGithubProjets(document.querySelector('.portfolio__content-pg'), 0);

function getGithubProjets(portfolioContent, size) {
  let url = '../files/portfolio.json';
  fetch(url)
  .then((response) => response.json())
  .then((dataJSON) => {
    console.log(dataJSON);
    let j;
    if(size == 0) {
      j = dataJSON.length;
    } else if(size > 0) {
      j = size;
    } else {
      
    }
   
    for(let i = 0; i < j; i++) {
      const lien = document.createElement('a');
      const img = document.createElement('img');
      const divContent = document.createElement('div');
      const nom = document.createElement('h3');
      const description = document.createElement('p');
      const langage = document.createElement('p');
      const date = document.createElement('p');
  
      lien.href = dataJSON[i]['lien']
      lien.target = '_blank';
      lien.classList.add('portfolio__projet');
      lien.classList.add(`projet-${i}`);
      img.src = dataJSON[i]['image'];
      img.alt = dataJSON[i]['nom'];
      nom.textContent = dataJSON[i]['nom'];
      description.textContent = dataJSON[i]['description'];
      langage.textContent = dataJSON[i]['langage'];
      date.textContent = dataJSON[i]['date']
      
      divContent.appendChild(nom);
      divContent.appendChild(description);
      divContent.appendChild(langage);
      divContent.appendChild(date);
  
      lien.appendChild(img);
      lien.appendChild(divContent);
  
      portfolioContent.appendChild(lien)
    }
  })
  .catch((error) => {
    // Une erreur s'est produite
  });
}