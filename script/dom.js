import { Productos } from "./db.js";

let contenedorProductos = document.querySelector(".productos");

Productos.forEach(i => { 
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("cards");
    tarjeta.innerHTML = `
            <img src="${i.image}" alt="${i.Nombre}" height="300px">
            <h1>${i.Nombre}</h1>
            <p>Precio: $${i.Precio}</p>
            <p>Stock: ${i.Stock}</p>
            <p>${i.Descripcion}</p>
    `
    contenedorProductos.appendChild(tarjeta);
})