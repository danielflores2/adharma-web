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
      const overlayText = document.getElementById('overlay-text');
  
      function changeVideoByIndex(index) {
          const videoData = videos[index];
          videoHome.src = videoData.src;
          overlayText.innerHTML = videoData.text;
          videoHome.play();
      }
  
      // Detectar eventos táctiles
      let startX = 0;
      let startY = 0;
      let isSwiping = false;
  
      videoHome.addEventListener('touchstart', (e) => {
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
          isSwiping = false; // Reinicia el estado de swipe
      });
  
      videoHome.addEventListener('touchmove', (e) => {
          const currentX = e.touches[0].clientX;
          const diffX = currentX - startX;
  
          if (Math.abs(diffX) > Math.abs(e.touches[0].clientY - startY)) {
              // Swipe horizontal detectado
              isSwiping = true;
  
              // Mover el video según el swipe en tiempo real
              videoHome.style.transform = `translateX(${diffX}px)`;
          }
      });
  
      videoHome.addEventListener('touchend', (e) => {
          if (!isSwiping) return;
  
          const endX = e.changedTouches[0].clientX;
          const diffX = startX - endX;
  
          // Detecta swipe solo si la distancia horizontal es mayor que la vertical y suficientemente grande
          if (Math.abs(diffX) > 50) {
              if (diffX > 0) {
                  // Swipe hacia la izquierda, mostrar siguiente video
                  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
                  videoHome.classList.add('video-leave'); // Añade la clase para salida
              } else {
                  // Swipe hacia la derecha, mostrar video anterior
                  currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
                  videoHome.classList.add('video-leave'); // Añade la clase para salida
              }
  
              // Espera a que termine la transición antes de cambiar el video
              setTimeout(() => {
                  changeVideoByIndex(currentVideoIndex);
                  videoHome.classList.remove('video-leave');
                  videoHome.classList.add('video-enter'); // Añade la clase de entrada
                  videoHome.style.transform = 'translateX(0)';
  
                  // Finalmente, remueve la clase de entrada después de la transición
                  setTimeout(() => {
                      videoHome.classList.remove('video-enter');
                  }, 500); // Tiempo igual a la duración de la transición
              }, 500); // Tiempo igual a la duración de la transición
          } else {
              // Si el swipe es demasiado corto, vuelve a la posición original
              videoHome.style.transform = 'translateX(0)';
          }
      });
  }
  
  // Inicializa el swipe solo en móvil
  if (window.innerWidth <= 992) {
      initSwipeVideos();
  }

}

document.addEventListener("DOMContentLoaded", init);
