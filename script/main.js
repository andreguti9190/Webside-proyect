

// let Titulo = document.getElementById("Titulo");
// Titulo.innerText = "Hola Mundo";
// Titulo.style.color="Red"

function Suma(num1,num2) {
    let suma = num1 + num2;
    alert("La suma es: " + suma);
}

let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));
Suma(numero1, numero2);

let Sumar = (num1,num2) => {
    let suma = num1 + num2;    
}