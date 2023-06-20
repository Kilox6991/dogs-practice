
//Evento Boton 
const newImg = document.getElementById('NewDog')
const newImgDiv = document.getElementById('grid')
const razaImg = ["spaniel-blenheim","lhasa","shihtzu"][Math.floor(Math.random()*3)]


const botonELDOM = document.getElementById('Btn')
botonELDOM.addEventListener("click", handleClick)
function handleClick() {
        fetch ('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((data) =>{
            console.log(data)
            pintarImagen(data.message, newImg)
            pintarImagen(data.message, newImgDiv)
            //funcion Vega 
            // if (condition) {
                
            //  }

    })
}


//Import Pintar Img
function pintarImagen(url,parentNode) {
	const img = document.createElement('img')
	img.src = url;
    parentNode.innerHTML = '';
    parentNode.appendChild(img)
}