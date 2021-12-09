'use sctrict';

const adalaber1 = {};
adalaber1.name= 'Susana';
adalaber1.age= '34';
adalaber1.profesion= 'periodista';
adalaber1.showBio = function() {
    return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.profesion}`;

}


console.log(adalaber1.showBio());