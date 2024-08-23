const numero = document.getElementById("numero");
const result = document.getElementById("result");



let numeroAleatorio = Math.floor(Math.random() * 100) + 1; 
let intentos = 3;

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const numeroIngresado = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('result');

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        resultado.textContent = 'Por favor, ingrese un número válido entre 1 y 100.';
        return;
    }

    if (numeroIngresado === numeroAleatorio) {
        resultado.textContent = '¡Felicidades! ¡Has adivinado el número!';
        resultado.classList.remove('bg-primary');
        resultado.classList.add('bg-success');
    } else {
        intentos--;
        if (intentos > 0) {
            resultado.textContent = `Número incorrecto. Te quedan ${intentos} intentos.`;
        } else {
            resultado.textContent = `Has agotado tus intentos. El número era ${numeroAleatorio}.`;
            resultado.classList.remove('bg-primary');
            resultado.classList.add('bg-danger');
        }
    }
});

