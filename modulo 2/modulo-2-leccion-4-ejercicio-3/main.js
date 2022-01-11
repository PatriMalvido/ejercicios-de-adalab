//EJERCICIO 3
//Ticket con IVA
//Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".
//Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.

"use strict";

function price(a) {
  const tax = a*21/100 ;
  let noTax =  a + tax;
  

  return console.log("Precio sin IVA: " + a + " , IVA: " + tax + " y Total: " + noTax);
}

price(10);