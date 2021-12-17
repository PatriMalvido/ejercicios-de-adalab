//EJERCICIO 5
//querySelector para todas
//Estamos trabajando en un proyecto bastante grande, donde hay que recoger muchos elementos de HTML desde JavaScript para interaccionar con ellos. Para no tener que escribir document.querySelector(...) tantas veces una compañera ha sugerido hacer una función llamada getEl.

"use strict";

function getEl(selector) {
  const element = document.querySelector(selector);
  return element;
}
const label = getEl(".js-label");
const parseElement = parseInt(label.innerHTML);
console.log(parseElement);

if (label === null) {
  console.error(
    "No existe ningún elemento con clase, id o tag llamado {.js-label}"
  );
} else {
  console.log("Sí hay un alemento label");
}

// ------- Arrow function and ternary operator---------------

const getEl = (selector) => {
  const element = document.querySelector(selector);
  return element;
};

const item = getEl(".js-label");

item === null
  ? console.error(
      "No existe ningún elemento con clase, id o tag llamado {.js-label}"
    )
  : console.log("Sí hay un alemento label");