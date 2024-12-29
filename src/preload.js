// Verifica si el dispositivo es móvil
function isMobileDevice() {
  return /Mobi|Android|iPhone/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

// Solo ejecuta el script si no es un dispositivo móvil
if (!isMobileDevice()) {
 
  document.addEventListener("DOMContentLoaded", () => {
    const videosToPreload = [
      "https://d17wmwjckt0fmo.cloudfront.net/videos/MagoCarga.mp4",
      "https://d17wmwjckt0fmo.cloudfront.net/videos/adharma__the_magician's_cut__-_demo_reel_2024%20(1080p).mp4",
      "https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Duality_1080_h264_45000kbs.mp4",
  
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