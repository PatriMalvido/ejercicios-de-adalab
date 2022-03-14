'use strict';

//crear una página vacia. Al pulsar la tecla r el color de fondo es rojo. Al pulsar la tecla m el color de fondo es morado.


//Primero de llama al HTML
const page = document.querySelector ('.js-color');

//Segundo, se crea la funcion

const pressKey = (e) => {
    if (e.key === 'r') {
        page.classList.remove('purple');
        page.classList.add('red');
    }else if (e.key === 'm') {
        page.classList.add ('purple');
        page.classList.remove ('red');

    }else {
        page.classList.remove('purple');
        page.classList.add('red');
    }
    page.innerHTML= e.key;
};



//Tercero, se llama al evento con la funcion creada
document.addEventListener ('keydown',pressKey);