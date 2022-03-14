'use strict';

const letters = document.querySelector ('.js-text');
const input = document.querySelector ('.js-input');


const presKey = (event) => {
    letters.innerHTML = event.currentTarget.value;

};



input.addEventListener('keyup', presKey);

