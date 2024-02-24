//array de escabiosos
const escabiosos = [
    { id: 1, nombre: "Fernet",precio: 9500, imagen:"https://acdn.mitiendanube.com/stores/002/483/999/products/branca-1000ml11-7bba8feb245b1b83b116788319873735-480-0.webp"},
    { id: 2, nombre: "Absolut",precio: 7000, imagen:"https://acdn.mitiendanube.com/stores/002/483/999/products/absolut-regular1-964092eee7ca64887616772638332075-480-0.webp"},
    { id: 3, nombre: "Gin", precio: 10000, imagen:"https://acdn.mitiendanube.com/stores/002/483/999/products/aconcagua-edicion-lemongrass-750ml1-1e303846be5a84a6c416776212048148-480-0.webp"},
    { id: 4, nombre: "Campari",precio: 9000, imagen: "https://acdn.mitiendanube.com/stores/002/483/999/products/campari-750ml1-e5c524089906b308f016788330499939-480-0.webp"},
    { id: 5, nombre: "Ron", precio: 15000, imagen: "https://acdn.mitiendanube.com/stores/002/483/999/products/havana-club-anejo-especial-750ml1-b1b77c439907cf154916779413869683-480-0.webp"},
    { id: 6, nombre: "Whisky",precio: 28000, imagen:"https://acdn.mitiendanube.com/stores/002/483/999/products/johnnie-walker-red-750ml1-189a174b25106a47e116787441723435-480-0.webp"},
    { id: 7, nombre: "Coca cola",precio: 2100, imagen: "https://acdn.mitiendanube.com/stores/002/483/999/products/coca-cola-2-25lts1-fbe6ed4de78055812216869238690026-480-0.webp"},
    { id: 8, nombre: "Jugo Baggio",precio: 1900, imagen: "https://acdn.mitiendanube.com/stores/002/483/999/products/baggio-naranja-1-50lts1-b5086a36285558b59b16870097688414-480-0.webp"},
    { id: 9, nombre: "Sprite", precio: 2100, imagen:"https://acdn.mitiendanube.com/stores/002/483/999/products/sprite-2-25lts1-f3cd11e39e18f531c816869238855090-480-0.webp"},
    { id: 10, nombre: "Speed",precio: 1100, imagen: "https://acdn.mitiendanube.com/stores/002/483/999/products/speed-473ml1-b987580598c97355ac16869267799321-480-0.webp"},
];

console.log (escabiosos)



const guardarEscabiososLS = (escabiosos) => {

    localStorage.setItem("escabiosos", JSON.stringify(escabiosos)) || [];
}


const obtenerProductosLS = () =>{

    return JSON.parse(localStorage.getItem("escabiosos"))
}


const guardarCarritoLS = () => {

    localStorage.setItem("carrito", JSON.stringify(escabiosos))

}


const obtenerCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}



const obtenerIdEscabiosoLS = () => {
    return JSON.parse(localStorage.getItem("escabioso")) || 0 ;
}



const totalProductos = () => {
    const carrito = obtenerCarritoLS ();
    return carrito.lenght; 
}


const renderTotalCarrito =() =>{
    document.getElementById("totalCarrito").innerHTML= totalProductos();
}


const verEscabioso = (id) =>{
    localStorage.setItem("producto", JSON.stringify(id));
}

const obtenerEscabiosoLS = () => {
    const escabiosos = obtenerProductosLS();
    const id = obtenerIdEscabiosoLS (); 
    const escabioso = escabiosos.find( item => item.id === id) ;
    return escabioso;




}
guardarEscabiososLS(escabiosos);