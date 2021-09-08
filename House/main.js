const Btn = document.querySelector('.Btn');
const menu = document.querySelector('.menu');

Btn.addEventListener('click', () => {
    menu.classList.toggle('active');
})