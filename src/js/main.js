import'../scss/style.scss';

const openMenuButton = document.querySelector('.main-header__button');
const Menu = document.querySelector('.main-header__nav');

openMenuButton.addEventListener('click',() => {
    menu.classList.add('open');
});