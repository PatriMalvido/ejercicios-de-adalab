"use strict";

//Ejercicio 3.1
const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNumber(numbers) {
  const myArray = [];

  numbers.forEach((item) => {
    if (item % 2 === 0) {
      myArray.push(item);
    }
  });
  return myArray;
}

console.log(bestLostNumber(lostNumbers));

// en la funcion bestLostNumber paso como parametro numbers, para que sea cual sea el valor de la constante declarada fuera de la funcion no me afecte y la funcion se pueda reutilizar.

//Ejercicio 3.2
function bestLostNumberTwo(numbers) {
  const myArray = [];

  numbers.forEach((item) => {
    if (item % 3 === 0) {
      myArray.push(item);
    }
  });
  return myArray;
}
console.log(bestLostNumberTwo(lostNumbers));

//Ejercicio 3.3

console.log(bestLostNumber(lostNumbers).concat(bestLostNumberTwo(lostNumbers)));
