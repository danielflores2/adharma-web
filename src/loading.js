// Verifica si el dispositivo es móvil
function isMobileDevice() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

// Solo ejecuta el script si no es un dispositivo móvil
if (!isMobileDevice()) {
    // Selecciona el video de carga, el contenido principal y el footer
    var videoCarga = document.getElementById('videoCarga');
    var contenidoPrincipal = document.getElementById('contenidoPrincipal');
    var videoContenedor = document.getElementById('videoContenedorCarga');
    var videoReel = document.getElementById('videoReel');  // Video principal que se está cargando
    var footer = document.getElementById("footer");

    // Detecta cuando el video principal (videoReel) está listo para reproducirse
    videoReel.addEventListener('canplaythrough', function() {
        // Espera hasta que el video principal esté cargado y listo para reproducirse

        // Establece un retraso de 2.5 segundos
        setTimeout(function() {
            // Oculta el contenedor del vídeo de carga
            videoContenedor.style.display = 'none';
            // Muestra el contenido principal
            contenidoPrincipal.style.display = 'block';
            // Muestra el footer después de que se haya cargado el contenido
            footer.style.display = "block";
        }, 1500); // 2.5 segundos
    });
}




