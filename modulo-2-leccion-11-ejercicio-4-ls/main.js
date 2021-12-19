"use strict";

const inputNameElement = document.querySelector(".js-inputname");
const textElement = document.querySelector(".js-text");

function handlerShowText() {
  const name = inputNameElement.value;
  textElement.textContent = name;
  localStorage.setItem("name", name);
}

inputNameElement.addEventListener("keyup", handlerShowText);

const nameStorage = localStorage.getItem("name");

if (nameStorage !== null) {
  inputNameElement.value = nameStorage;
  textElement.textContent = nameStorage;
}
