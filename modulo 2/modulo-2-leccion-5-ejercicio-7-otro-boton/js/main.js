'use strict';

// primero creo las variables, llamo al HTML
const button = document.querySelector ('.js-button');

// tercero: creo la funcion que necesito para llevar a cabo mi accion
const changeButton = () => {
    button.classList.toggle('pink');
};

// segundo llamo a la accion que quiero hacer
button.addEventListener('click', changeButton);