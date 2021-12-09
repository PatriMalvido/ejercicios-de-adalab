'use strict';

const scrollColor = document.querySelector ('.js_fondo');

window.onscroll = function (){
    if (window.scrollY > 250){
        scrollColor.classList.add("fondo1");
        scrollColor.classList.remove ("fondo2");
    } else {
        scrollColor.classList.remove("fondo1");
        scrollColor.classList.add ("fondo2");
    }
};
