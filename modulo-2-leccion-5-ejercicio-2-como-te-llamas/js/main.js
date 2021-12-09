'use strict';

const button = document.querySelector ('.js-button');
const nameElement = document.querySelector ('#name');

function onClickButton (){
    console.log(`Hola ${nameElement.value}`);
     
}

button.addEventListener ('click', onClickButton);