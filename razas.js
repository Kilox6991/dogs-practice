//función devolver raza desde url 

function getBreedFromURL(url){

    const urlDog = url
    
    let arr = urlDog.split('/');
     console.log(arr);

     return arr[4]
        
}



let breed = getBreedFromURL("https://images.dog.ceo/breeds/finnish-lapphund/n02091244_4086.jpg")
let breed2 = getBreedFromURL ("https://images.dog.ceo/breeds/cattledog-australian/n02091244_4086.jpg")
console.log(breed)
console.log(breed2)