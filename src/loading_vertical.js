// Verifica si el dispositivo es móvil
function isMobileDevice() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

// Solo ejecuta el script si es un dispositivo móvil
if (isMobileDevice()) {
    // Selecciona el video de carga y el contenido principal
    var videoCarga = document.getElementById('videoCarga');
    var contenidoPrincipal = document.getElementById('contenidoPrincipal');
    var videoContenedor = document.getElementById('videoContenedorCarga');
    var videoReel = document.getElementById('videoReelVertical');  // Video principal que se está cargando

    // Detecta cuando el video de carga está a 2 segundos de terminar
    videoCarga.addEventListener('timeupdate', function() {
        if (videoCarga.currentTime >= videoCarga.duration - 2.5) {
            // No es necesario hacer nada aquí, ya que ocultamos la animación de carga después
        }
    });

    // Detecta cuando el video principal (videoReel) está listo para reproducirse
    videoReel.addEventListener('canplaythrough', function() {
        // Espera hasta que el video principal esté cargado y listo para reproducirse

        // Establece un retraso de 2.5 segundos
        setTimeout(function() {
            // Oculta el contenedor del vídeo de carga
            videoContenedor.style.display = 'none';
            // Muestra el contenido principal
            contenidoPrincipal.style.display = 'block';
        }, 2500); // 2.5 segundos
    });
}