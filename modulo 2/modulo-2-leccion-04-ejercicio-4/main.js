//EJERCICIO 4
//Pares o nones
//Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar.
//Ejecutala e imprime el resultado para comprobar que funciona.

"use strict";

function isOddOrEven(a) {
  if (a % 2 === 0){
    true;
    console.log(a + " is an even number");
  }
  else {
    false;
    console.log(a + " is an odd number");
  }
}

isOddOrEven(5);


// misma función pero con ternario

function isOddOrEven(a) {
  a % 2 === 0 ? console.log(a + " is an even number") :  console.log(a + " is an odd number"); 
}

isOddOrEven(5);