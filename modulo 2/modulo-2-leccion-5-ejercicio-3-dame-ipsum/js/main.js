'use strict';

const textElement = document.querySelector('.js-text');
const containerElement = document.querySelector ('.js-container');

function showNewText (){
    
    containerElement.innerHTML += `<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quaerat inventore corporis assumenda vero fuga incidunt porro sapiente voluptatibus distinctio nisi officia, facilis nesciunt officiis! Sint perferendis iste laborum accusamus!</p>`;
}

textElement.addEventListener ('mouseover', showNewText);

