let nombre = prompt(`Bienvenida/o, ingrese su nombre`)
let producto = parseInt(prompt(`Hola ${nombre} Elige el producto que deseas comprar: 1.Remera de Juego Roja - 2.Remera de Juego Blanca - 3.Sudadera Negra - 4-Buzo`))
let totalCompra = 0
let seguirComprando = true
let decision

while (seguirComprando === true) {
    if (producto === 1) {
        totalCompra = totalCompra + 1500
    } else if (producto === 2) {
        totalCompra = totalCompra + 1500
    } else if (producto === 3) {
        totalCompra = totalCompra + 1300
    } else if (producto === 4) {
        totalCompra = totalCompra + 2400
    } else {
        producto = parseInt(prompt(`Elige el producto que deseas comprar: 1.Remera de Juego Roja - 2.Remera de Juego Blanca - 3.Sudadera Negra - 4-Buzo`))
        continue
    }
    decision = parseInt(prompt(`Quieres seguir comprando? 1.SI - 2.NO`))
    if (decision === 1) {
        producto = parseInt(prompt(`Elige el producto que deseas comprar: 1.Remera de Juego Roja - 2.Remera de Juego Blanca - 3.Sudadera Negra - 4-Buzo`))
    } else {
        seguirComprando = false
    }
}

registro = parseInt(prompt(`Desea recibir ofertas especiales? 1.SI - 2.NO`))

function descuentoPorSuscripcion(totalCompra) {
    let importeConDescuento = totalCompra * 0.85
    alert(`${nombre} Gracias por suscribirte a nuestro sitio. El importe de tu compra es ${totalCompra}`) 
    alert(`Si tu compra es mayor a $15.000, te regalamos 15% de descuento`)
}

if (totalCompra >= 15000) {
    descuentoPorSuscripcion(totalCompra)
    alert(`${nombre} El importe de tu compra con descuento es ${importeConDescuento}`) 
}
else {
    alert(`${nombre} El total de tu compra es ${totalCompra}`)
}  

