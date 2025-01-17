
    document.addEventListener("DOMContentLoaded", function() {
        const videoSubpagina = document.getElementById("videoSubpagina");
        const body = document.body;
        const texts = document.querySelectorAll("p, h3, li");
        const logos = document.querySelectorAll("#logo-img");
        const fadeDuration = 500; // Duración del fundido en milisegundos

        // Función para aplicar el efecto de fundido
        function applyFade() {
            // Fondo a negro
            body.style.transition = `background-color ${fadeDuration}ms`;
            body.style.backgroundColor = "black";

            // Textos a blanco
            texts.forEach(text => {
                text.style.transition = `color ${fadeDuration}ms`;
                text.style.color = "white";
            });

            // Logos a negro
            logos.forEach(logo => {
                logo.src = "/src/images/logo/adhr_white.svg"; // Cambia la ruta del logo
            });
        }

        // Función para restablecer el estado
        function resetStyle() {
            // Fondo a blanco
            body.style.transition = `background-color ${fadeDuration}ms`;
            body.style.backgroundColor = "white";

            // Textos a negro
            texts.forEach(text => {
                text.style.transition = `color ${fadeDuration}ms`;
                text.style.color = "black";
            });

            // Logos al original
            logos.forEach(logo => {
                logo.src = "/src/images/logo/adhr_black.svg"; // Cambia la ruta del logo
            });
        }

        // Verificar si el video existe
        if (videoSubpagina) {
            // Esperamos a que el video esté completamente cargado
            videoSubpagina.addEventListener("canplaythrough", function() {
                console.log("El video está listo para reproducirse.");
                
                // Verificamos si el video ya está en reproducción
                if (!videoSubpagina.paused) {
                    console.log("El video ya está reproduciéndose.");
                    applyFade(); // Aplicamos el cambio de estilo si el video ya se está reproduciendo
                }

                // Detectar cuando el video se reproduce
                videoSubpagina.addEventListener("play", function() {
                    console.log("El video ha comenzado a reproducirse.");
                    applyFade();
                });

                videoSubpagina.addEventListener("pause", function() {
                    console.log("El video ha sido pausado.");
                    resetStyle();
                });

                // En caso de que el video se reinicie o termine
                videoSubpagina.addEventListener("ended", function() {
                    console.log("El video ha terminado.");
                    resetStyle();
                });
            });
        } else {
            console.error("No se encontró el video.");
        }
    });
