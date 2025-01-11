const videoReel = document.getElementById('videoReel');
const soundButton = document.getElementById('soundButton');

soundButton.addEventListener('click', () => {
  if (videoReel.muted) {
    videoReel.muted = false;
    soundButton.textContent = '🔊'; // Cambiar icono a sonido activado
  } else {
    videoReel.muted = true;
    soundButton.textContent = '🔇'; // Cambiar icono a sonido desactivado
  }
});