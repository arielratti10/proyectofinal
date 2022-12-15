const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">$ ${product.precio}</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === prod.id) {
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        }

        console.log(carrito);
        carritoCounter();

        Toastify({
            text: "Agregado al carrito",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();

    });
});


const divDolar = document.getElementById("divDolar");
const cargarDolar = () => {
    fetch("https://criptoya.com/api/dolar")
        .then(response => response.json())
        .then(({ solidario, ccl, mep, ccb, blue }) => {
            console.log(solidario, ccl, mep, ccb, blue)
            divDolar.innerHTML = `
        <h4>✅ Aceptamos dólar billete</h4>
        <p>💸 Tipo de cambio:$ ${blue}</p>  
    `;
        })
};
cargarDolar();
setInterval(() => {
    cargarDolar()
}, 60000);


