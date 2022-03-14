'use strict';

// avatar por defecto
const default_Avatar = 'http://placehold.it/300x300';

// avatar que eligió el usuario al registrarse
let userAvatar = 'https://www.fillmurray.com/300/300';

// 1. añadir imagen userAvatar a la etiqueta img de HTML
const image = document.querySelector('.js-user__avatar');
image.src = userAvatar;

// 2. cambiar contenido de userAvatar a comillas vacías
userAvatar = '';
image.src = userAvatar;

// 3. mostrar avatar de usuario o avatar por defecto
image.src = userAvatar || default_Avatar;