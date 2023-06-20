//Evento Boton 
const newImg = document.getElementById('newDog')
const newImgDiv = document.getElementsByClassName('table')
console.log(newImgDiv)


const botonELDOM = document.getElementById('Btn')
botonELDOM.addEventListener("click", handleClick)

function handleClick() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((data) => {

                newImg.innerHTML = "";
                let srcImg= data.message
                console.log("ERES TU", srcImg)
                pintarImagen(srcImg, newImg)

                    


                for (let i = 0; i < newImgDiv.length; i++) {
                    if (newImgDiv[i].firstChild === null) {
                        if (i === newImgDiv.length - 1) {
                            fetch('https://api.thecatapi.com/v1/images/search')
                                .then((res) => res.json())
                                .then((data) => {
                                    console.log(data[0].url)
                                    
                                    srcImg = data[0].url
                                    console.log("ERES UN GATO", srcImg)
                                    pintarImagen(srcImg,newImgDiv[i])

                                    newImg.firstChild.src = srcImg
                                    })                     
                                }
                            else {
                                pintarImagen(srcImg, newImgDiv[i])
                                
                            }
                            break
                        }
                    }
                    console.log(srcImg)
                })
        }


    //Pintar Img
    function pintarImagen(url, parentNode) {
        const img = document.createElement('img')
        img.src = url;
        parentNode.appendChild(img)
    }