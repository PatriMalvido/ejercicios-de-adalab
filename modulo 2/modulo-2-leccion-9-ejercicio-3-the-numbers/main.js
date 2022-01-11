"use strict";

//Ejercicio 3.1
//Crear un nuevo array que contiene solo los números pares que hay en ////////////lostNumbers. Para conseguirlo vamos a crear un nuevo array vacío y recorrer ////el array lostNumbers para al encontrar un número par, meterlo en el nuevo //////array.

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
//Crear un nuevo array que contiene solo los números múltiplos de 3 que hay en ///lostNumbers, de una forma similar al anterior.

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
//Devolver una concatenación de los 2 arrays anteriores, es decir, que tendrá ////primero los números pares y luego los múltiplos de 3.

console.log(bestLostNumber(lostNumbers).concat(bestLostNumberTwo(lostNumbers)));
