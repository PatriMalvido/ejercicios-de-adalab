'use strict'

//traer elementos del html
const main = document.querySelector(".js-main");

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
        name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
        completed: false
    }
];

//funcion de render
/**
 * Se recorre el array de con los datos de las tareas.
 * Cada posición del array es un objeto js con los datos de una tarea.
 * 
 * Recorro el array con un bucle for-clásico para asociar la posición de cada tarea al input, para posteriormente actualizar los datos de las tareas 
 */
function render() {
    main.innerHTML = "";
    for (let index = 0; index < tasks.length; index++) {
        console.log(tasks[index]);
        if (tasks[index].completed) {
            main.innerHTML += `<li class="completed"><input id=${index} class="js-input" type="checkbox" checked> ${tasks[index].name}</li>`;
        } else {
            main.innerHTML += `<li><input id=${index} class="js-input" type="checkbox">${tasks[index].name}</li>`;
        }
    }

    /**
    * Busco todos los input-checkbox de la página (uno por tarea) y
    *   les asocio la función handleClickTask() cuando la usuaria haga click.
    */
    const allInput = document.querySelectorAll(".js-input");
    console.log(allInput);
    for (const eachInput of allInput) {
        eachInput.addEventListener("click", handleClickTask);
    }
}

/**
 * Cuando la usuaria haga click en un input-checkbox, tengo que marcar la tarea como completada
 *   (si estaba completada, pues lo contrario).
 * Necesito saber dónde estan los datos de la tarea:
 *   - En el atributo id del <input> donde se hace click tiene la posición/índice del array JS
 *     en el que están los datos de la tarea 
 * Saco ese dato, el índice, a la variable posTask.
 * Localizo los datos de la tarea en el array JS con tasks[ posTask ].
 * Con un condicional, compruebo si la tarea estaba completada y la pongo a lo contrario.
 * 
 * Para que los datos del array de JS y la página estén sincronizados/consistentes, 
 *   vuelvo a generar todo el HTML de las tareas ¡A lo bruto, se pintan todas otra vez!
 *   (a lo bruto pero también a lo fácil).
 * 
 * todo: Quitar los console.log (nota: todo == to do == por hacer en inglés)
 * 
 * @param {MouseEvent} ev Evento del navegador (con su .target, .currentTarget, .preventDefault, ...)
 */

function handleClickTask(event) {
    /*console.log(event.currentTarget.parentNode);
    event.currentTarget.parentNode.classList.toggle("completed");*/
    console.log(event.currentTarget.id);
    const posTask = event.currentTarget.id;
    if (tasks[posTask].completed === true) {
        tasks[posTask].completed = false;
    } else {
        tasks[posTask].completed = true;
    }
    console.log(tasks);
    render();
}

render();