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

if (form) {
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
})}


// ANIMACIÓN SCROLL CONTACTO
const elementosAnimados = document.querySelectorAll(".animar");

function mostrarElementos() {
    elementosAnimados.forEach(el => {
        const rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", mostrarElementos);

// Ejecutar al cargar
mostrarElementos();

/*----------------Recomendacion de peliculas (base datos real en peliculas.json)---------------*/
console.log("JavaScript conectado correctamente");

//cargar peliculas desde JSON
let peliculas = [];
fetch("../js/peliculas.json")
    .then(response => response.json())
    .then(data => {
        peliculas = data;
        console.log("🎬 Películas cargadas:", peliculas);
    })
    .catch(error => console.error("❌ Error cargando JSON:", error));
/*-------------------------formulario recomendador ---------------------------*/
const formRecomendador = document.getElementById("form-recomendador");

if (formRecomendador) {
    formRecomendador.addEventListener("submit", function(e) {
        e.preventDefault();

        const input = document.getElementById("nombre").value.toLowerCase();
        const resultado = document.getElementById("resultado");

        if (peliculas.length === 0) {
            resultado.innerHTML = "⏳ Cargando películas...";
            return;
        }

        const peli = peliculas.find(p =>
            (p.title && p.title.toLowerCase().includes(input)) ||
            (p.year && p.year.toString().includes(input)) ||
            (p.genres && p.genres.join().toLowerCase().includes(input))
        );

        if (peli) {
            resultado.innerHTML = `
            <div style="margin-top:1rem;">
                <img src="${peli.poster_url}" 
                    alt="${peli.title}" 
                    style="width:150px; border-radius:8px; margin-bottom:10px; box-shadow:0 5px 15px rgba(0,0,0,0.5);">
                
                <p>
                    🎬 <strong>${peli.title}</strong><br>
                    📅 Año: ${peli.year || "No disponible"}<br>
                    ⭐ IMDB: ${peli.imdb_rating || "N/A"}<br>
                    📝 ${peli.overview || "Sin descripción"}
                </p>
            </div>
        `;
        } else {
            resultado.innerHTML = "❌ No encontramos esa película";
        }
    });
}


// MODO OSCURO / CLARO

const btnTheme = document.getElementById("toggle-theme");

// Aplicar tema guardado al cargar
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

if (btnTheme) {

    // Ajustar icono inicial
    if (document.body.classList.contains("light-mode")) {
        btnTheme.textContent = "🌙";
    } else {
        btnTheme.textContent = "☀️";
    }

    // Evento click
    btnTheme.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            btnTheme.textContent = "🌙";
            localStorage.setItem("theme", "light");
        } else {
            btnTheme.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        }
    });
}