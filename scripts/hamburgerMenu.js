
const mainNav = document.querySelector('.nav-bar');
const hambut = document.querySelector('#menu');

hambut.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hambut.classList.toggle('show');
});