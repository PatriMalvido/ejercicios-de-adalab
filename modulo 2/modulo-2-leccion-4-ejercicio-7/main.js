//EJERCICIO 7

//Combinando funciones
//Partimos de un HTML con un párrafo que contiene un número. En nuestro fichero JavaScript nos copiamos la declaración de las funciones getEl y la que comprueba si un número es par o impar (ejercicio 5).
//Sin modificar estas dos funciones, vamos a hacer lo siguiente:
//usando nuestra función getEl accedemos al párrafo, y recogemos su valor (con innerHTML)
//convertimos ese valor a número y lo asignamos a una constante
//usamos nuestra función del ejercicio 4 para saber si es par o impar
//escribimos en la consola 'Este número es PAR: ...' o 'Este número es IMPAR: ...'

"use strict";

function getEl(selector) {
  const element = document.querySelector(selector);
  return element;
}
const label = getEl(".js_p");
const parseElement = parseInt(label.innerHTML);
console.log(parseElement);

if (label === null) {
  console.error(
    "No existe ningún elemento con clase, id o tag llamado {.js-label}"
  );
} else {
  console.log("Sí hay un elemento label");
}

function isOddOrEven(a) {
  if (a % 2 === 0) {
    true;
    console.log(a + " is an even number");
  } else {
    false;
    console.log(a + " is an odd number");
  }
}

isOddOrEven(parseElement);