//Display menu navigateur
const btnMenu = document.querySelector('.btn-menu');
btnMenu.addEventListener('click', () => {
    let headerNav = document.querySelector('.header__nav');
    headerNav.classList.toggle('header__nav-active');
});