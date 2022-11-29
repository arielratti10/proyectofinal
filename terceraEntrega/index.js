//CLASER PRODUCTO PARA AGREGAR PRODUCTOS

class Product{
    constructor (id, nombre, precio){
        this.id=id
        this.nombre=nombre
        this.precio=precio
    }
}

//CREO PRODUCTOS PARA TENDER DATOS EN EL ARRAY

const producto1 = new Product(1,"iPhone",600)
const producto2 = new Product(2, "iPad", 200)
const producto3 = new Product(3, "Watch", 300)
const producto4 = new Product(4, "Airpod", 150)
const producto5 = new Product(5, "iMac", 1500)
const producto6 = new Product(6, "MacBook", 1200)
const producto7 = new Product(7, "Samsung Galaxy", 700)
const producto8 = new Product(8, "Nokia 1100", 100)
const producto9 = new Product(9, "Comodore 64", 900)
const producto10 = new Product(10, "PS4", 400)

//ARRAY PRODUCTOS

const productos = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10]

//BUSCO ELEMENTOS EN EL DOM

const divProductos = document.getElementById('divProductos')
productos.forEach(producto=>{
    divProductos.innerHTML = 
    <div id="${producto.id}" class="card">
    <div class="cardBody">    
        <h4 class="card-title">${producto.nombr}</h4>
        <p class="card-text">${producto.precio}</p>
        <button id= class="btn btn-primary">AGREGAR</button>

    </div>
    </div>
    
})