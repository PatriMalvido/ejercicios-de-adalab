'use strcit';

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const getGreetNames = names => ('Bienvenida ' + names);

const greetNames = names.map(getGreetNames);
console.log(greetNames);