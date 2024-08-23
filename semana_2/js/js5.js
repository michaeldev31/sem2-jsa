const contraseñaInput = document.getElementById("contraseña");
const result = document.getElementById("result");

function verificarContraseña(e) {
    e.preventDefault();

    const contraseña = contraseñaInput.value;

    // Verificar si tiene al menos 8 caracteres
    const longitudSuficiente = contraseña.length >= 8;
    // Verificar si contiene al menos una letra mayúscula
    const tieneMayuscula = /[A-Z]/.test(contraseña);
    // Verificar si contiene al menos una letra minúscula
    const tieneMinuscula = /[a-z]/.test(contraseña);
    // Verificar si contiene al menos un número
    const tieneNumero = /[0-9]/.test(contraseña);
    // Verificar si contiene al menos un carácter especial
    const tieneEspecial = /[!@#$%&*]/.test(contraseña);

    if (longitudSuficiente && tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
        result.textContent = "Contraseña fuerte.";
        result.style.color = "green";
    } else {
        result.textContent = "Contraseña débil. Asegúrate de que cumpla con todos los requisitos.";
        result.style.color = "red";
    }
}
document.getElementById("form").addEventListener("submit", verificarContraseña);

