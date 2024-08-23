const montoInput = document.getElementById("monto");
const opcion = document.getElementById("opcion");
const result = document.getElementById("result");

function manejoDeOpciones(event) {
    event.preventDefault(); 

    
    const monto = parseFloat(montoInput.value);
    const selectedValue = opcion.value;
    let nuevoMonto;

    if (monto >= 100 && selectedValue === 'miembro') {
        nuevoMonto = monto - (monto * 0.10);
    } else if (monto >= 100 && selectedValue === 'nomiembro') {
        nuevoMonto = monto - (monto * 0.05);
    } else if (monto < 100 && selectedValue === 'miembro') {
        nuevoMonto = monto - (monto * 0.15);
    } else if (monto < 100 && selectedValue === 'nomiembro') {
        nuevoMonto = monto;
    }

    
    console.log(nuevoMonto);
    result.textContent = `El nuevo monto es: ${nuevoMonto.toFixed(2)}`;
}

document.getElementById("form").addEventListener("submit", manejoDeOpciones);
