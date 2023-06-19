//Buscar perro aleatorio
function getRandomDog() {
    const apiDog = fetch('https://dog.ceo/api/breed/hound/images')

    const apiDog2 = apiDog.then((res) => res.json())
    apiDog2.then((data) =>{
    })
}




//Evento Boton 
const botonELDOM = document.getElementById('btn')
botonELDOM.addEventListener("click", handleClick)
function handleClick() {
    getRandomDog()
    //Meter imagen en el div de arriba
}

//Buscar si la raza del perro esta ya seleccionada

//Comprobar si es la ultima celda para poner gato