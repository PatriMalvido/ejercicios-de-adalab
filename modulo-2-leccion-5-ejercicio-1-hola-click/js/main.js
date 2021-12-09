'use strict';

const button = document.querySelector('.click');
const textElement = document.querySelector ('p');

function showClick(){
    textElement.innerHTML = 'Mi primer click';
   
}

button.addEventListener('click' ,showClick);
