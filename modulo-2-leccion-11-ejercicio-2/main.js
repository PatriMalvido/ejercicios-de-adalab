'use sctrict';
console.log("bla bla bla");


//Elementos de HTML que necesito traer
const list = document.querySelector('.js_characters');
const searchInput = document.querySelector ('.js_searchInput');
const buttonSearch = document.querySelector('.js_button');


//Funcion: tengo que recoger el input de lo que escribe el usuario, creo una variable para recoger esos datos, y luego los muestro 
function handleGetCharacter() {
    fetch(`https://swapi.py4e.com/api/people/?search=${searchInput.value}`)
    .then((response) => response.json())
    .then((data) => {

        const characteres = data.results;
        list.innerHTML = '';
        for (let i = 0; i< characteres.length; i++){
            list.innerHTML += `<li>Nombre: ${characteres[i].name} Género: ${characteres[i].gender} </li>`;
        }

    });
}

//Evento de pulsar el boton
buttonSearch.addEventListener ('click',handleGetCharacter);