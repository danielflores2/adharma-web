document.addEventListener("DOMContentLoaded", () => {
    const videosToPreload = [
      'https://static.stratebi.com/proyectos/temp/Myzz-Mala_1080_h264_45000kbs.mp4',
      'https://static.stratebi.com/proyectos/temp/Myzz-Medusa_1080_h264_45000kbs.mp4',
      'https://static.stratebi.com/proyectos/temp/Duality_1080_h264_45000kbs.mp4',
      'https://static.stratebi.com/proyectos/temp/Jaydime_Jaycas_crosscheck_DEFINIT_1.mp4',
      'https://static.stratebi.com/proyectos/temp/THE%20REBIRTH%20%281080p%2C%20h264%2C%20youtube%29.mp4',
      'https://static.stratebi.com/proyectos/temp/ReelSubli.mp4',
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
  