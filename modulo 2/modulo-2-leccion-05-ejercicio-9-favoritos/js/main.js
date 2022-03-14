'use strict';

const listElementOne = document.querySelector ('.teacher--isra');
const listElementTwo = document.querySelector ('.teacher--tuerto');
const listElementThree = document.querySelector ('.teacher--nasi');

const changeTeacher = (event) => {

    event.currentTarget.classList.toggle('teacher--selected');
    const favorite = event.currentTarget.querySelector('.favorite');
    if (favorite.innerHTML === 'Quitar') {
        favorite.innerHTML = 'Añadir';
    }else if (favorite.innerHTML === 'Añadir'){
        favorite.innerHTML ='Quitar';
    }
};

listElementOne.addEventListener('click', changeTeacher);
listElementTwo.addEventListener ('click', changeTeacher);
listElementThree.addEventListener('click', changeTeacher);




