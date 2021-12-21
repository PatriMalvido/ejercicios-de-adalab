'use strict';

const marks = [5, 4, 6, 7, 9];
const getInflatedMarks = marks => (marks + 1);

const inflatedMarks = marks.map(getInflatedMarks);

console.log(inflatedMarks);


//MAP: devuelve un array del mismo tamaño que el original con el resultado de aplicar una función a cada elemento del array.