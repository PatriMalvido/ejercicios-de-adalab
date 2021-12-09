'use strict';

const adalaber1 = {
name: 'Susana',
age: '34',
profesion: 'periodista',
};

const adalaber2 = {
    name: 'Rocio',
    age: '25',
    profesion: 'actriz',
};

console.log(adalaber1.name, adalaber1.age, adalaber1.profesion);

document.querySelector('.js-text').innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profesion}`;

document.querySelector('.js-text').innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.profesion}`;
