const c1Input = document.getElementById("c1");
const c2Input = document.getElementById("c2");
const c3Input = document.getElementById("c3");
const c4Input = document.getElementById("c4");
const c5Input = document.getElementById("c5");

const result = document.getElementById("result");

function calcularPromedio(e){
    e.preventDefault();

    const c1 = parseFloat(c1Input.value);
    const c2 = parseFloat(c2Input.value);
    const c3 = parseFloat(c3Input.value);
    const c4 = parseFloat(c4Input.value);
    const c5 = parseFloat(c5Input.value);

    const promedio = (c1+c2+c3+c4+c5) / 5;
    let clasificacion;

    if (promedio >= 90) {
        clasificacion = 'Excelente';
    } else if (promedio >= 70 && promedio <= 89) {
        clasificacion = 'Bueno';
    } else if (promedio >= 50 && promedio <= 69) {
        clasificacion = 'Aprobado';
    } else if (promedio < 50) {
        clasificacion = 'No Aprobado';
    }

    result.textContent = `Su estado es: ${clasificacion}`;
}

document.getElementById("form").addEventListener("submit", calcularPromedio);