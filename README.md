# Movix — Sistema de Gestión Cinematográfica 

**Movix** es una plataforma profesional diseñada para la administración de información cinematográfica. Este sistema permite a los usuarios y administradores registrar, consultar y analizar datos detallados sobre películas, actores, directores y géneros, integrando métricas reales de fuentes como IMDB.

---

## Tabla de Contenidos
- [Descripción General](#-descripción-general)
- [Características Principales](#-características-principales)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Base de Datos](#-base-de-datos)
- [Instalación y Uso](#-instalación-y-uso)
- [Créditos](#-créditos)

---

## Descripción General
Movix nace como una solución para centralizar la gestión de catálogos cinematográficos. El sistema ofrece una interfaz elegante inspirada en la estética de las salas de cine clásicas, combinando un diseño visualmente atractivo con una estructura de datos robusta para el manejo de información técnica del séptimo arte.

**Fecha de inicio:** 18 de marzo de 2026
**Público objetivo:** Amantes del cine y administradores de bases de datos.

---

## Características Principales

El sistema se divide en varios módulos funcionales:

- **Consulta de Películas:** Buscador avanzado que incluye títulos, directores, repartos y calificaciones de IMDB.
- **WatchList Personalizada:** Permite a los usuarios crear y gestionar su propia lista de películas pendientes por ver.
- **Registro de Contenido:**ativa para la inserativa para la inserción de nuevos títulos, actores y directores al catálogo.
- **Dashboard de Estadísticas:** Visualización de métricas clave y tendencias del catálogo cinematográfico.
- **Reaciones Inteligentes:** Algoritmo de sugerencias ("¿Qué película ver hoy?") basado en preferencias de género y personalidades del cine.

---

## Tecnologías Utilizadas

Este proyecto ha sido desarrollado utilizando estándares web modernos:

- **HTML5:** Estructura semántica avanzada para accesibilidad y SEO.
- **CSS3:** Diseño personalizado utilizando Variables CSS (Custom Properties) y Flexbox.
- **Google Fonts:** Tipografía premium (*Playfair Display* para títulos y *Source Serif 4* para lectura).
- **Diseño Visual:** Paleta de colores "Sala de Cine" (Negro profundo, crema cálida y ámbar dorado).

---

## Estructura del Proyecto

```bash
Movies/
├── assets/                 # Recursos multimedia (trailers, videos)
├── css/                    # Estilos globales y específicos
│   └── estilos.css         # Hoja de estilos principal
├── img/                    # Imágenes, pósters y diagramas
│   └── diagrama-bd.png     # Modelo relacional de la base de datos
├── js/                     # Lógica JS (validaciones, interacciones)
│   ├── peliculas.json      # base de datos en json
│   └── script.js           # Scripts del sistema         
├── portal-bd-movies/       # Páginas principales del sistema
│   ├── index.html          # Landing page y presentación
│   ├── formulario.html     # Interfaz de registro y consultas
│   └── tablas.html         # Visualización de datos y reportes
└── README.md               # Documentación del proyecto
```

---

## Base de Datos

El sistema se apoya en un modelo relacional compuesto por las siguientes tablas principales:

- `tbl_peliculas`: Almacena la información técnica de los filmes.
- `tbl_actores` & `tbl_directores`: Gestión de talento humano.
- `tbl_generos`: Clasificación temática.
- `tbl_watchlist`: Relación de seguimiento de usuarios.

> Puedes encontrar el diseño lógico en [diagrama-bd.png](img/diagrama-bd.png).

---

## Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/SofiaRV03/Movies.git
   ```
2. **Abrir el proyecto:**
   Navega a la carpeta `portal-bd-movies/` y abre el archivo `index.html` en cualquier navegador web moderno.
3. **Exploración:**
   Utiliza el menú de navegación superior para moverte entre el inicio, la visualización de tablas y los formularios de consulta.

---

## Créditos

Proyecto desarrollado por estudiantes de **6.° Semestre**:

- **Sofia Restrepo**
- **Claudia Patricia Galvis**
- **Allison Mariana Restrepo**

**Fuente de datos:** [IMDB — Página Oficial](https://www.imdb.com/es/)

---
*Movix © 2026 — Programación Web*
