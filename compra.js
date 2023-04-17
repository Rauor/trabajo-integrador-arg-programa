const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const libro = urlParams.get('libro');

let nombreLibro;
let precioLibro;

if (libro === "1") {
    nombreLibro = '1 Kilo de Recetas';
    precioLibro = '$49.99';
} else if (libro === "2") {
    nombreLibro = 'Masa Dulce';
    precioLibro = '$29.99';
} else {
    window.location.href = "/";
}

document.getElementById("libro").innerHTML = nombreLibro;
document.getElementById("precio").innerHTML = precioLibro;
