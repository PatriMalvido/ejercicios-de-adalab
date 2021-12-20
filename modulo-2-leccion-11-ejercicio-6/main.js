'use strict';

const inputNameElement = document.querySelector('.js-inputname');
const inputLastNameElement = document.querySelector('.js-inputlastname');
const result = document.querySelector('.js-text');

let dataInfoUser = {
    name:"",
    lastname:"",
}
console.log(dataInfoUser);

function handlerShowText(){
const dataname =inputNameElement.value;
textElement.textContent= dataname;
dataInfoUser.name = dataname;




}





result.addEventListener('keyup',handlerShowText);