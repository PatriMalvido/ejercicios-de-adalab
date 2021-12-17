'use strict'

const image = document.querySelector('.js_image');

//funcion 
function getRandomDog() {
    //pedir la lista de razas
    fetch("https://dog.ceo/api/breeds/list")
        .then(response => response.json())
        .then(breedsData => {
            //console.log(breedsData);
            const breeds = breedsData.message;
            //const breeds = Object.keys(breedsData.message);
            //console.log(breeds);

            //tomar una aleatoria, muestra un mensaje que diga la raza
            return fetch("https://api.rand.fun/number/integer?max=94")
                .then(numberResponde => numberResponde.json())
                .then(numberData => {
                    const randomNumber = numberData.result;
                    const dogBreed = breeds[randomNumber];
                    console.log(dogBreed);

                    //proxima petición //pintar la imagen de esa raza aleatoria
                    return fetch (`https://dog.ceo/api/breed/${dogBreed}/images/random`)
                    .then(imageResponse => imageResponse.json())
                    .then(imageData => {
                        console.log(imageData);
                        imageData = image.src;
                        image.src= `https://dog.ceo/api/breed/${dogBreed}/images/random`;
                        
                    })
                })

        });
}


document.addEventListener("click", getRandomDog);