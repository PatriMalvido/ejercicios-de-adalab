'use strict';

// primero creo las variables, llamo al HTML
const button = document.querySelector ('.js-button');
const button2 = document.querySelector ('.js-button2');

// tercero: creo la funcion que necesito para llevar a cabo mi accion
const changeButton = (event) => {
    
    event.currentTarget.classList.toggle('pink');
    
};

// segundo llamo a la accion que quiero hacer
button.addEventListener('click', changeButton);
button2.addEventListener('click', changeButton);