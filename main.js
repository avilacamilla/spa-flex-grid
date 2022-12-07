const menuButton = document.querySelector('.header__menu');
const menu = document.querySelector('.lateral-menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('lateral-menu--active');
}) 