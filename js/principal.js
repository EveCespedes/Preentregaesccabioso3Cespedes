
function renderProductos (){

    const productos = obtenerProductosLS ()

    
    let contenido = "";

    for (const producto of productos) {
        
        contenido +=`<div class="col-md-4 text-center">
        <a href ="producto.html" onclick="verProducto(${producto.id};" class="text-decoration-none">
        <img src ="${producto.imagen}" alt="${producto.nombre}" />
        <p class= "fuente">${producto.nombre} </p>
        </a>
        </div>`;
    }

    document.getElementById("productos").innerHTML= contenido;
} 





renderProductos();