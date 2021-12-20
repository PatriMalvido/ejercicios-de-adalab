'use strict';

const inputNameElement = document.querySelector('.js-inputname');
const inputLastNameElement = document.querySelector('.js-inputlastname');
const result = document.querySelector('.js-text');

const dataInfoUser = {
    name:"",
    lastname:"",
}
console.log(dataInfoUser);

function handlerShowText(){
const dataname =inputNameElement.value;
dataInfoUser.name = dataname;


console.log(dataname);

}





result.addEventListener('keyup',handlerShowText);