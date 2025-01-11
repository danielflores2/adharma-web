
//BOTON ORDENADOR
const soundButton = document.getElementById('soundButton');

// Función para alternar el sonido en todos los videos
function toggleSound() {
    const videos = document.querySelectorAll('video'); // Seleccionamos todos los videos

    videos.forEach(video => {
        if (video.muted) {
            video.muted = false; // Desactivar mute
        } else {
            video.muted = true; // Activar mute
        }
    });

    // Cambiar el texto del botón dependiendo del estado del sonido
    if (videos[0].muted) {
        soundButton.textContent = 'volume_off'; // Icono de sonido apagado
    } else {
        soundButton.textContent = 'volume_up'; // Icono de sonido activado
    }
}

// Asignar el evento al botón
soundButton.addEventListener('click', toggleSound);



//BOTON MOVIL
const videoReelVertical = document.getElementById('videoReelVertical');
const soundButtonVertical = document.getElementById('soundButtonVertical');

soundButtonVertical.addEventListener('click', () => {
  if (videoReelVertical.muted) {
    videoReelVertical.muted = false;
    soundButtonVertical.textContent = 'volume_up'; // Cambiar icono a sonido activado
  } else {
    videoReelVertical.muted = true;
    soundButtonVertical.textContent = 'volume_off'; // Cambiar icono a sonido desactivado
  }
});