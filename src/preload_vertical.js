
// Verifica si el dispositivo es móvil
function isMobileDevice() {
  return /Mobi|Android|iPhone/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

// Solo ejecuta el script si es un dispositivo móvil
if (isMobileDevice()) {
  document.addEventListener("DOMContentLoaded", () => {
    const videosToPreload = [
      //"https://d17wmwjckt0fmo.cloudfront.net/videos/MagoCarga.mp4",
      "https://d17wmwjckt0fmo.cloudfront.net/videos/REEL_TRY1_16mbps.mp4",
  
    ];
  
    // Preload videos on page load
    videosToPreload.forEach((src) => {
      const video = document.createElement('video');
      video.src = src;
      video.preload = 'auto';
      video.muted = true; // Avoid autoplay issues
      video.style.display = 'none'; // Keep video hidden
      document.body.appendChild(video); // Attach to DOM for loading
    });
  });
}