// ==========================================
// PORTAL ACADÉMICO — script.js
// Módulo 0: Verificación del entorno
// ==========================================

// console.log() es tu herramienta principal de debugging
// Abre DevTools (F12) → pestaña Console para verlo
console.log("✅ JavaScript conectado correctamente");
console.log("🎓 Portal Académico listo");

// Información útil del entorno
console.log("Navegador:", navigator.userAgent);
console.log("URL actual:", window.location.href);
console.log("Fecha de hoy:", new Date().toLocaleDateString("es-CO"));

// CONSTANTES
const NOMBRE_MOVIX = "MOVIX";
const DESCRIPCION_MOVIX = "Sistema de Gestión de Bases de Datos Cinematográficas";
const INICIO_OPERACION = new Date(2026, 2, 18)

// VARIABLES
let bienvenida;
console.log(bienvenida)
bienvenida = "Explora y gestiona información sobre películas, actores, directores y géneros cinematográficos."

let definicion = "Movix es una plataforma para administrar información cinematográfica, permitiendo registrar, consultar y analizar datos de películas, actores, directores y géneros."

// Imprimir en consola

console.log("Nombre de la pagina: ", NOMBRE_MOVIX);
console.log("Descripcion de ",NOMBRE_MOVIX, ": ",DESCRIPCION_MOVIX);
console.log("Bienvenido a Movix: ", bienvenida);
console.log("¿Qué es Movix?: ", definicion);
console.log("Inicio de operaciones: ", INICIO_OPERACION);

// FUNCIONES

// Verificar si el nombre es valido
function esNombreValido(nombre) {
    return nombre.trim().length >= 3;
}

// Verificar si el correo es valido
function esEmailValido(email) {
    return email.includes("@") && email.includes(".");
}

// Conexion y validacion con el formulario contacto
const form = document.getElementById("form-contacto");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const nombre = document.getElementById("contacto-nombre").value;
    const email = document.getElementById("contacto-email").value;
    const mensaje = document.getElementById("contacto-mensaje").value;

    if (!esNombreValido(nombre)) {
        console.log("El nombre debe tener al menos 3 caracteres");
    }

    if (!esEmailValido(email)) {
        console.log("El correo no es válido");
    }

    if (mensaje.trim().length < 5) {
        console.log("El mensaje es muy corto");
    }

    if (esNombreValido(nombre) && esEmailValido(email) && mensaje.trim().length >= 5) {
        console.log("Formulario enviado correctamente");
    } else {
        alert("El formulario no fue enviado")
    }
})



