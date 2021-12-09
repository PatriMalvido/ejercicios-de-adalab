'use strict';

const adalaber1 = {};
adalaber1.name= 'Susana';
adalaber1.age= '34';
adalaber1.profesion= 'periodista';
adalaber1.run = phrase => `Estoy corriendo: `;
adalaber1.runMarathon = distance => `un maraton de ${distance} kilometros`;

console.log(adalaber1.run);
console.log(adalaber1.runMarathon('50'));