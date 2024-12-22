document.addEventListener("DOMContentLoaded", () => {
  const videosToPreload = [
    'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Myzz-Mala_1080_h264_45000kbs.mp4',
    'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Myzz-Medusa_1080_h264_45000kbs.mp4',
    'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Duality_1080_h264_45000kbs.mp4',
    'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Jaydime-Croscheck_1080_h264_45000kbs.mp4',
    'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Distrue-The_Rebirth_1080_h264.mp4',
    'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/ReelSubli_1080_h264.mp4',
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
