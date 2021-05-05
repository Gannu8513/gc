burger = document.querySelector('.burger')
nav_list = document.querySelector('.nav_list')
right = document.querySelector('.right')
navbar = document.querySelector('.navbar')

burger.addEventListener('click', () => {
    nav_list.classList.toggle('visible');
    right.classList.toggle('visible');
    navbar.classList.toggle('resp');

})