let closeWarninng = document.querySelector('.warninng_close');


closeWarninng.onclick = function(e) {
    e.preventDefault();   
    document.querySelector('.warninng').classList.add('close');
    document.querySelector('.header').classList.add('noWarninng')
} 
let header_burger = document.querySelector('.header_burger');
let header_nav = document.querySelector('.header_nav');
let back = document.querySelector('body');
let header__list = document.querySelector('.header_list');

header_burger.onclick = function(){
    
    header_burger.classList.toggle('active');
    header_nav.classList.toggle('active');
    back.classList.toggle('lock');
};

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}