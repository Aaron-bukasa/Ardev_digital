//MENU FUNCTION
function menuBtn(){
    let navbarLinks = document.querySelector('.header__navbar__links');
    let btnMenu = document.querySelector('.btn__menu');

    btnMenu.addEventListener('click', () => {
        navbarLinks.classList.toggle('header__navbar__links--active');
    })
}
menuBtn()