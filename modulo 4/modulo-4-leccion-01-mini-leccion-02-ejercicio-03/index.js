//crea un fichero input-file.json con el objeto
//Crea un index.js: 
//  - Lee el contenido del fichero input-file.json y guárdalo en una constante.
//  - El contenido de dicha constante será un texto. Conviértelo a objeto
//  - Modifica alguna propiedad del objeto, como por ejemplo el nombre o la edad
//  - Guarda el objeto en modo texto en un fichero de destino llamado output-file.json


const fs = require ('fs');

//Leer el documento json
fs.readFile ('./input-file.json','utf8',(err,fileContent)=>{
    if (err) {
        console.log(err);
    } else {
        const dataFromFile = JSON.parse(fileContent);
        dataFromFile.age=40;
        console.log(dataFromFile);
//escribir el documento json
        fs.writeFile('./output-file.json', JSON.stringify(dataFromFile),(err)=>{
            if (err){
                console.log(err);
            }else {
                console.log('Guardado');
            }
        });
    }
});

