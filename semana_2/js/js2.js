const tallaInput = document.getElementById("talla");
const pesoInput = document.getElementById("peso");
const result = document.getElementById("result");

function calcularIMC(event) {
    event.preventDefault();

    const talla = parseFloat(tallaInput.value);
    const peso = parseFloat(pesoInput.value);

    const imc = peso / (talla*talla);
    let clasificacion = '';

    if (imc <= 18.5) {
        clasificacion = 'Bajo Peso';
    } else if (imc > 18.5 && imc <= 24.9) {
        clasificacion = 'Peso Normal';
    } else if (imc >= 25 && imc <= 29.9) {
        clasificacion = 'Sobrepeso';
    } else if (imc >= 30) {
        clasificacion = 'Obesidad';
    } 

    console.log(clasificacion);

    result.textContent = `Su IMC es: ${imc.toFixed(2)} |  Clasificación: ${clasificacion}`;
}

document.getElementById("form").addEventListener("submit", calcularIMC);
