"use strict";

//1-Cojo todos los radiobuttons con el nombre theme y los guardo (es un array)
const radioElements = document.querySelectorAll(
  '.js-radiogroup input[name="theme"]'
);

//1-Cojo el body para poder cambiar las clases de colores
const bodyEl = document.querySelector("body");

//3- Funcion para saber que radiobutton esta seleccionado. Tambien guardo los datos en el storage
function handlerThemeChanges() {
  const checked = document.querySelector(
    ".js-radiogroup input[name=theme]:checked"
  );
  localStorage.setItem("theme", checked.value);

  if (checked.value === "light") {
    bodyEl.classList.add("light");
    bodyEl.classList.remove("dark");
  } else {
    bodyEl.classList.add("dark");
    bodyEl.classList.remove("light");
  }
}

//2-para cada uno de los inputs (radioelements) le asigno el handler al evento change
radioElements.forEach((element) => {
  element.addEventListener("change", handlerThemeChanges);
});

//4- Recupero el ultimo valor seleccionado del storage y hago el evento click para mostrarlo
const themeStorage = localStorage.getItem("theme");
if (themeStorage !== null) {
  const element = document.querySelector(
    `.js-radiogroup input[name=theme][value=${themeStorage}]`
  );
  element.click();
}
