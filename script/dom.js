import { Productos } from "./db.js";

let contenedorProductos = document.querySelector(".productos");

Productos.forEach(i => { 
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("cards");
    tarjeta.innerHTML = `
            <h1>${i.Nombre}</h1>
            <p>${i.Descripcion}</p>
            <p>Precio: $${i.Precio}</p>
            <p>Stock: ${i.Stock}</p>
    `
    contenedorProductos.appendChild(tarjeta);
})