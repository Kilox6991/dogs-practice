const endpoint = "#"
const imgDOM = document.querySelector("img")
const tableDOM = document.querySelector("table")


function pintarImagen(url) {
    fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
            (data.message)
            data.message = url
            imgDOM.src = url
            tableDOM[0].appendChild(imgDOM)
        })
}