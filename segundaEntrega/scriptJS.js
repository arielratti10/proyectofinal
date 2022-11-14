/* e-Commerce tienda ropa club

array -> base de datos / carrito
clases -> constructor productos
objetos-> productos
function -> para sumar items al carrito

*/


class Producto{
  constructor(id, nombre, precio, stock){
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
  }
  restaStock(){
      this.stock = this.stock - 1;
      console.log(`El Stock de ${this.nombre} ha sido actualizado`)
  }
}

const producto0 = new Producto(0, "Remera Juego Roja", 1500, 100);
const producto1 = new Producto(1, "Remera Juego Blanca", 1500, 200);
const producto2 = new Producto(2, "Sudadera Negra", 1300, 150);
const producto3 = new Producto(3, "Buzo", 2400, 60);


const productos = [producto0, producto1, producto2, producto3];
const carrito = []

let productosOfrecidos = "Productos en Stock: "

function validaDato(respuestaUsuario){
  while(isNaN(respuestaUsuario)){
      alert("Por favor ingrese sólo números")
      respuesta = parseInt(prompt(productosOfrecidos)) 
  }
  return respuesta
}

function agregaCarrito(){

  for (item of productos){
      productosOfrecidos +=  ` \n ${item.id} - ${item.nombre} valor $ ${item.precio}`
  }

  productosOfrecidos += `\n Ingrese el nro de Item que desea agregar a su carrito. Para finalizar ingrese 99`

  let respuesta = parseInt(prompt(productosOfrecidos))


  let respuestaValidada = validaDato(respuesta)

  while(respuestaValidada != 99){
    
      switch(respuestaValidada){
          case 0: 
              carrito.push(productos[0])
              alert(`Agregamos al carrito el producto ${productos[0].nombre}`)
              productos[0].restaStock()
              break;
          case 1:
              carrito.push(productos[1])
              alert(`Agregamos al carrito el producto ${productos[1].nombre}`)
              productos[1].restaStock()
              break;
          case 2:
              carrito.push(productos[2])
              alert(`Agregamos al carrito el producto ${productos[2].nombre}`)
              productos[2].restaStock()
              break;
          case 3:
              carrito.push(productos[3])
              alert(`Agregamos al carrito el producto ${productos[3].nombre}`)
              productos[3].restaStock()
              break;
          default:
              alert(`No tenemos el producto que elegiste`)
              break;
      }
      respuesta = parseInt(prompt(productosOfrecidos))
  }
  alert("Cerramos tu pedido")
  mostrarCarrito()
}

let productosCarrito = `Vas a llevar: `
let precioCarrito = 0
//agregaCarrito()

function mostrarCarrito(){
  for (itemsElegidos of carrito){
      productosCarrito += `\n - ${itemsElegidos.nombre}`
      precioCarrito += itemsElegidos.precio
  }

  alert(`Repasemos: \n ${productosCarrito} \n Por un total de ${precioCarrito}`)
}

function creaProducto(){
  let prodNombre = prompt("Nombre del producto a crear")
  let prodPrecio = parseInt(prompt("Valor del prodcuto a crear"))
  let prodStock = parseInt(prompt("Cantidad del prodcuto a crear"))
  while(prodNombre == "" || isNaN(prodPrecio) || isNaN(prodStock)){
      alert("Alguno de los datos ingresados no es correcto, reintente.")
       prodNombre = prompt("Nombre del producto a crear")
       prodPrecio = parseInt(prompt("Valor del prodcuto a crear"))
       prodStock = parseInt(prompt("Cantidad del prodcuto a crear"))
  }
  const productoManual = new Producto (4, prodNombre, prodPrecio, prodStock)

  productos.push(productoManual)
  agregaCarrito()
}


creaProducto()