//ESTO FUE EXPLICADO EN CLASE DE REPASO Y DUDAS
//-------------------------------------------------

"use strict";

const inputs = document.querySelectorAll(".input.js");

function handlerInput(ev) {
  console.log(ev.currentTarget.value);

  const inputId = ev.currentTarget.id;
  info[inputId] = ev.currentTarget.value;
  console.log(info);
}
/*
for (const input of inputs) {
  input.addEventListener("change", handlerInput);
}*/
//--------------------------------------------------------
//-------------------------------------------------------

const btn = document.querySelector(".btn-js");
const infoArray = [];

function handlerClick(ev) {

  ev.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  infoArray.push(nombre);
  const apellido = document.querySelector("#apellido").value;
  infoArray.push(apellido);

  for (const element of infoArray){
console.log(element);
  }
};

btn.addEventListener("click", handlerClick);
