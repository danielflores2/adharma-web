// Verifica si el dispositivo es móvil
function isMobileDevice() {
  return /Mobi|Android|iPhone/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

// Solo ejecuta el script si no es un dispositivo móvil
if (!isMobileDevice()) {
 
  document.addEventListener("DOMContentLoaded", () => {
    const videosToPreload = [
      "/src/video/MagoCarga.mp4",
      "https://d17wmwjckt0fmo.cloudfront.net/videos/adharma__the_magician's_cut__-_demo_reel_2024%20(1080p)_vertical.mp4",
      "https://d17wmwjckt0fmo.cloudfront.net/videos/adharma__the_magician's_cut__-_demo_reel_2024%20(1080p).mp4",
      "https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Duality_1080_h264_45000kbs.mp4",
      "https://d17wmwjckt0fmo.cloudfront.net/videos/DUA CASINO_vertical.mp4",
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Myzz-Mala_1080_h264_45000kbs.mp4',
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Myzz-Medusa_1080_h264_45000kbs.mp4',
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Jaydime-Croscheck_1080_h264_45000kbs.mp4',
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Distrue-The_Rebirth_1080_h264.mp4',
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/ReelSubli_1080_h264.mp4',
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Ambar Garces - Tormenta.mp4',
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Everyone has their basketball_1080_v02.mov',
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Benzo - Paris 2 try 1.mp4',
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Benzo - Paris 1.mp4',
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/SINS_ENTREVISTACOMPLETA_1080_h264.mov',
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Kaños_Color_h264_1920.mov',
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Kaños_Color_h264_1920.mov',
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Cascorro_Enfadado_1080_h264_45000kbs.mov',
  
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