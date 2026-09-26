// Inicia la música e interactividad al dar clic al primer botón
function iniciarExperiencia() {
    let nombre = document.getElementById("inputNombre").value;
    if (nombre.trim() === "") {
        alert("¡Por favor, ingresa tu nombre para empezar! 🌹");
        return;
    }

    // Guardar nombre y actualizar etiquetas correspondientes
    document.getElementById("nombreUsuario").innerText = nombre;
    let elementosNombre = document.querySelectorAll(".nombre-carta");
    elementosNombre.forEach(el => el.innerText = nombre);

    // Intentar reproducir la música de fondo (Iris)
    let musica = document.getElementById("musicaFondo");
    musica.volume = 0.5; // Volumen moderado
    musica.play().catch(error => {
        console.log("Auto-play bloqueado por el navegador, se activará en la siguiente interacción.");
    });

    // Iniciar lluvia 3D de gatitos en el fondo
    crearFondoGatitos();

    // Cambiar de pantalla
    siguientePantalla(1, 2);
}

function siguientePantalla(pantallaActual, pantallaSiguiente) {
    // Asegurar reproducción de música por si el navegador bloqueó el primer intento
    document.getElementById("musicaFondo").play();

    document.getElementById("pantalla" + pantallaActual).classList.remove("activa");
    document.getElementById("pantalla" + pantallaSiguiente).classList.add("activa");
}

// Lógica del botón escurridizo
function moverBotonNo() {
    let btnNo = document.getElementById("btnNo");
    let x = Math.random() * (window.innerWidth - btnNo.offsetWidth - 40);
    let y = Math.random() * (window.innerHeight - btnNo.offsetHeight - 40);
    
    btnNo.style.position = "fixed";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
}

// Generador del fondo 3D flotante con diferentes tipos de gatitos
function crearFondoGatitos() {
    const contenedor = document.getElementById("contenedor-gatitos");
    const emojisGatitos = ['🐈', '🐈‍⬛', '🐱', '😹', '😻', '🐾', '💖', '🌹'];

    setInterval(() => {
        const gatito = document.createElement("div");
        gatito.classList.add("gatito-flotante");
        
        // Asignar icono aleatorio
        gatito.innerText = emojisGatitos[Math.floor(Math.random() * emojisGatitos.length)];
        
        // Posición horizontal aleatoria y retraso
        gatito.style.left = Math.random() * 100 + "vw";
        
        // Tamaño tridimensional aleatorio (unos más cerca, otros más lejos)
        let escala = Math.random() * (1.3 - 0.6) + 0.6;
        gatito.style.transform = `scale(${escala})`;
        
        // Velocidades diferentes para dar sensación de profundidad
        gatito.style.animationDuration = Math.random() * (10 - 5) + 5 + "s";

        contenedor.appendChild(gatito);

        // Limpiar elementos viejos para evitar que la página se ponga lenta
        setTimeout(() => {
            gatito.remove();
        }, 10000);
    }, 600); // Aparece un gatito nuevo cada 600ms
}
