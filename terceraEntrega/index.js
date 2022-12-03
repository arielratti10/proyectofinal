//CLASER PRODUCTO PARA AGREGAR PRODUCTOS

class Product {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

//CREO PRODUCTOS PARA TENDER DATOS EN EL ARRAY

const producto1 = new Product(1, "Musculosa Basquet Roja", 2500)
const producto2 = new Product(2, "Musculosa Basquet Blanca", 2500)
const producto3 = new Product(3, "Sudadera Basquet Negra", 2000)
const producto4 = new Product(4, "Equipo Largo Negro", 8500)
const producto5 = new Product(5, "Musculosa Reversible BN", 2300)
const producto6 = new Product(6, "Conjunto Futbol Remera y Short", 6300)
const producto7 = new Product(7, "Mochila Negra", 7500)
const producto8 = new Product(8, "Medias Blancas", 900)
const producto9 = new Product(9, "Medias Negras", 900)
const producto10 = new Product(10, "Remera Gris", 1900)

//ARRAY PRODUCTOS

const productos = [
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10,
]

//BUSCO ELEMENTOS EN EL DOM

const divProductos = document.getElementById('divProductos')
productos.forEach(producto => {
    divProductos.innerHTML += `
        <div id="${producto.id}" class="card cardProd">
        <img src="./img/logoClubMoron-200x200.jpg" class="card-img-top" alt="...">
        <div class="card-body">    
        <h4 class="card-title">${producto.nombre}</h4>
        <p class="card-text">${producto.precio}</p>
        <button id=${producto.id} class="btn btn-secondary">Agregar</button>
        </div>
        </div>
        `
})

//CARRITO DE COMPRAS

const carrito = []
const botonesAgregar = document.querySelectorAll('.btn-primary')

botonesAgregar.forEach(boton => {
    boton.onclick = () => {
        const productoSeleccionado = productos.find(prod => prod.id === parseInt(boton.id))

        const productoCarrito = { ...productoSeleccionado, cantidad: 1 } //creo una objeto con las mismas propiedades que productoSeleccionado agregando la propiedad: Cantidad; //devuelve -1 si no esta

        const indexCarrito = carrito.findIndex(prod => prod.id === productoCarrito.id) //miro si el producto ya esta en el carrito
        if (indexCarrito === -1) {
            carrito.push(productoCarrito)
        } else {
            carrito[indexCarrito].cantidad++
        }
        console.log(carrito)
    }
})

//BOTON FINALIZAR COMPRA

const botonFinalizar = document.querySelector('#finalizar')
botonFinalizar.onclick = () => {
    const valores = carrito.map(prod => prod.precios * prod.cantidad) //creo un array con los mismos elementos que carrito
    const totalCompra = 0
    valores.forEach(valor=>{
        totalCompra =+ valor
    })
}

