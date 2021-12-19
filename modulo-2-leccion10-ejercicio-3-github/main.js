"use strict";

console.log("probando,probando");

const infoUser = document.querySelector(".js_info");
const searchInput = document.querySelector(".js_search_input_name");
const buttonSearch = document.querySelector(".js_search_button");

function handleShowUser() {
  fetch(`https://api.github.com/users/${searchInput.value}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      const info = data;
      infoUser.innerHTML = "";

      infoUser.innerHTML += `<li>Nombre: ${info.name} </li>`;

      infoUser.innerHTML += `<li>Foto: <img src="${info.avatar_url}"/></li>`;
      infoUser.innerHTML += `<li>Número de Repositorios: ${info.public_repos}</li>`;
    });
}

buttonSearch.addEventListener("click", handleShowUser);
