// pantalla de carga -->

// Selecciona el video y el contenido
var video = document.getElementById('videoCarga');
var contenidoPrincipal = document.getElementById('contenidoPrincipal');
var videoContenedor = document.getElementById('videoContenedorCarga');

// Función para aplicar el fade-in
function fadeIn(element, duration) {
    element.style.opacity = 0;
    element.style.display = 'block';
    let last = +new Date();
    let tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
        last = +new Date();

        if (+element.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    tick();
}

// Detecta cuando el video está a 2 segundos de terminar
video.addEventListener('timeupdate', function() {
    if (video.currentTime >= video.duration - 2.5) {

        // Oculta el contenedor del vídeo
        videoContenedor.style.display = 'none';
        contenidoPrincipal.style.display = 'block';
        
        // Aplica el fade-in al contenido principal
        fadeIn(contenidoPrincipal, 1000); // 1000 ms = 1 segundo para el fade-in
    }
});
