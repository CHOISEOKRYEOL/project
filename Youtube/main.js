const Btn = document.querySelector('.info .titleAndBtn .Btn');
const title = document.querySelector('.info .titleAndBtn .title');

Btn.addEventListener('click', () => {
    Btn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});
