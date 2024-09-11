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
      '/proyectos/myzz_mala.html',
      '<span style="font-size: 13px;">Music Video</span><br><b>Myzz - Mala</b>'
    );
  });

  document.getElementById('min2').addEventListener('mouseover', function() {
    changeVideo(
      'https://static.stratebi.com/proyectos/temp/Myzz-Medusa_1080_h264_45000kbs.mp4',
      '/proyectos/myzz_medusa.html',
      '<span style="font-size: 13px;">Music Video</span><br><b>Myzz - Medusa</b>'
    );
  });

  document.getElementById('min3').addEventListener('mouseover', function() {
    changeVideo(
      'https://static.stratebi.com/proyectos/temp/Duality_1080_h264_45000kbs.mp4',
      '/proyectos/duality.html',
      '<span style="font-size: 13px;">Commercial</span><br>Duality</b>'
    );
  });

  document.getElementById('min4').addEventListener('mouseover', function() {
    changeVideo(
      'https://static.stratebi.com/proyectos/temp/Jaydime_Jaycas_crosscheck_DEFINIT_1.mp4',
      '/proyectos/crosscheck.html',
      '<span style="font-size: 13px;">Music Video</span><br>Cross Check</b>'
    );
  });

    // Función para inicializar el swipe solo en versión móvil
    function initSwipeVideos() {
      const videos = [
          {
              src: 'https://static.stratebi.com/proyectos/temp/Myzz-Mala_1080_h264_45000kbs.mp4',
              href: '/proyectos/myzz_mala.html',
              text: '<span style="font-size: 13px;">Music Video</span><br><b>Myzz - Mala</b>'
          },
          {
              src: 'https://static.stratebi.com/proyectos/temp/Myzz-Medusa_1080_h264_45000kbs.mp4',
              href: '/proyectos/myzz_medusa.html',
              text: '<span style="font-size: 13px;">Music Video</span><br><b>Myzz - Medusa</b>'
          },
          {
              src: 'https://static.stratebi.com/proyectos/temp/Duality_1080_h264_45000kbs.mp4',
              href: '/proyectos/duality.html',
              text: '<span style="font-size: 13px;">Commercial</span><br>Duality</b>'
          },
          {
              src: 'https://static.stratebi.com/proyectos/temp/Jaydime_Jaycas_crosscheck_DEFINIT_1.mp4',
              href: '/proyectos/crosscheck.html',
              text: '<span style="font-size: 13px;">Music Video</span><br>Cross Check</b>'
          }
      ];

      let currentVideoIndex = 0;
      const videoHome = document.getElementById('videoHome');

      function changeVideoByIndex(index) {
          const videoData = videos[index];
          videoHome.src = videoData.src;
          document.getElementById('overlay-text').innerHTML = videoData.text;
          videoHome.play();
      }

      // Detectar eventos táctiles
      let startX = 0;
      let startY = 0;

      videoHome.addEventListener('touchstart', (e) => {
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
      });

      videoHome.addEventListener('touchend', (e) => {
          const endX = e.changedTouches[0].clientX;
          const endY = e.changedTouches[0].clientY;
          const diffX = startX - endX;
          const diffY = startY - endY;

          // Detecta swipe solo si la distancia horizontal es mayor que la vertical
          if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
              if (diffX > 0) {
                  // Swipe hacia la izquierda, mostrar siguiente video
                  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
              } else {
                  // Swipe hacia la derecha, mostrar video anterior
                  currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
              }
              changeVideoByIndex(currentVideoIndex);
          }
      });
  }

  // Inicializa el swipe solo en móvil
  if (window.innerWidth <= 992) {
      initSwipeVideos();
  }

}

document.addEventListener("DOMContentLoaded", init);
