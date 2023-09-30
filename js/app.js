const hamburger_menu = document.querySelector('.hamburger__menu');
const modal = document.querySelector('.modal__wrapper');
let isOpen = true;
const showNav_Modal = function () {
    if(isOpen){
        modal.classList.add('hidden')
        isOpen=false;
    }else{
        modal.classList.remove('hidden')
        isOpen=true;
    }
}
hamburger_menu.addEventListener('click', showNav_Modal);
