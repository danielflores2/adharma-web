function init() {
  const videoHome = document.getElementById('videoHome');
  const videoHomeHref = document.getElementById('videoHomeLink');
  const overlayText = document.getElementById('overlay-text');

  // Función para cambiar el video y sincronizar el texto con la carga del video
  function changeVideo(src, href, text) {
    videoHome.src = src;
    videoHomeHref.href = href;

    // Ocultar el texto mientras se carga el video
    overlayText.style.opacity = '0';

    // Esperar a que el video esté cargado para cambiar el texto
    videoHome.onloadeddata = function() {
      videoHome.play();
      overlayText.innerHTML = text;
      // Mostrar el texto cuando el video esté listo
      overlayText.style.opacity = '1';
    };
  }

  // Eventos para cambiar el video y el texto al pasar el ratón sobre las miniaturas
  document.getElementById('min1').addEventListener('mouseover', function() {
    changeVideo(
      'https://static.stratebi.com/proyectos/temp/Myzz-Mala_1080_h264_45000kbs.mp4',
      'myzz_mala.html',
      '<span style="font-size: 13px;">Music Video</span><br><b>Myzz - Mala</b>'
    );
  });

  document.getElementById('min2').addEventListener('mouseover', function() {
    changeVideo(
      'https://static.stratebi.com/proyectos/temp/Myzz-Medusa_1080_h264_45000kbs.mp4',
      'myzz_medusa.html',
      '<span style="font-size: 13px;">Music Video</span><br><b>Myzz - Medusa</b>'
    );
  });

  document.getElementById('min3').addEventListener('mouseover', function() {
    changeVideo(
      'https://static.stratebi.com/proyectos/temp/Duality_1080_h264_45000kbs.mp4',
      'duality.html',
      '<span style="font-size: 13px;">Commercial</span><br>Duality</b>'
    );
  });
}

document.addEventListener("DOMContentLoaded", init);
