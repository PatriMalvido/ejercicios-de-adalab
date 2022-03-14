'use strict';

const userName = 'Patri';
const text = document.querySelector('.js-text');

if (userName === 'Patri' || userName === 'Begoña') {
    text.innerHTML = `Bienvenida, ${userName}`;
} else {
    text.innerHTML = 'Lo siento pero el usuario que has introducido no está registrado';
}