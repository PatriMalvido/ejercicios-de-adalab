//Sotiremun
//Vamos a crear una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.


"use strict";

function get100Numbers() {
  const arr = [];
  const arrlength = 101;
  for (let i = 1; i < arrlength; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(get100Numbers());

function getReversed100Numbers() {
  const res = get100Numbers();
  return res.reverse();
}

console.log(getReversed100Numbers());
