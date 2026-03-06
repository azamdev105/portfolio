const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('#menu');
const close = document.querySelector('#close');

menu.addEventListener('click', (det) => {
    sidebar.style.display = 'flex';
})

close.addEventListener('click', (det) => {
    sidebar.style.display = 'none';
})