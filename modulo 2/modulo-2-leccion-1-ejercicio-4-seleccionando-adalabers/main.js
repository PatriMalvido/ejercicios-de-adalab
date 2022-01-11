"use strict";

const titleElement =document.querySelector(".title");
const nameElement = document.querySelector (".name");
titleElement.innerHTML = titleElement.innerHTML + nameElement.innerHTML;

//si quiero que el nombre sea el de la segunda persona de la lista tendria que hacer otra constante con la clase name2, y poner:

/*titleElement.innerHTML = titleElement.innerHTML + name2Element.innerHTML*/