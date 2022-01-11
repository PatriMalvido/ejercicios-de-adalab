/* Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.
    - Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid
    - Haz lo mismo para París y Nueva York */
    "use strict";
    const select = document.querySelector(".select");
    function changeImg(event) {
      const madrid = document.querySelector(".imgMadrid");
      const paris = document.querySelector(".imgParis");
      const ny = document.querySelector(".imgNY");
      if (select.value === "Madrid") {
        madrid.src = "./images/madrid.jpg";
        paris.src = "./images/madrid.jpg";
        ny.src = "./images/madrid.jpg";
      } else if (event.currentTarget.value === "Paris") {
        madrid.src = "./images/paris.jpg";
        paris.src = "./images/paris.jpg";
        ny.src = "./images/paris.jpg";
      } else {
        madrid.src = "./images/ny.jpg";
        paris.src = "./images/ny.jpg";
        ny.src = "./images/ny.jpg";
      }
    }
    select.addEventListener("change", changeImg);
    // selecti, radio button-> change
    // botón, img-> click