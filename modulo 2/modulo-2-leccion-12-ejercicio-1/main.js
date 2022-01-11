//Crear una página HTML con una lista ul vacía. Vamos a partir de un array con 3 elementos const numbers = [1, 2, 3]. Vamos a añadir a la lista tres elementos li, que corresponden al contenido del array. Usaremos los métodos avanzados para manipular el DOM, no innerHTML.

"use strict";

const numbers = [1, 2, 3];
const items = document.querySelector(".items");

numbers.forEach((item) => {
  const newItem = document.createElement("li");
  const newContent = document.createTextNode(item);
  newItem.appendChild(newContent);

  items.appendChild(newItem);
});
