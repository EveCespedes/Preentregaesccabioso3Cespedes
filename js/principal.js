

function renderProductos (){

    const escabiosos = obtenerProductosLS();

    let contenido="";

    for (const producto of escabiosos) {
        contenido +=`<div class="col-md-4">
        <a href= "escabiosos.html" onclick=verProducto(${producto.id});>
        <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid" />
        <p class="fuente">${producto.nombre}</p>
        </a>
        </div>`; 
        
    }

    document.getElementById("escabiosos").innerHTML=contenido;

}



renderProductos ();