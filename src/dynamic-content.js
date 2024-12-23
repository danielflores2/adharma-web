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
  document.getElementById('mini_mala').addEventListener('click', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Myzz-Mala_1080_h264_45000kbs.mp4',
      //'/proyectos/myzz_mala.html',
      '#',
      '<b>MYZZ - MALA</b><br>MUSIC VIDEO'
    );
  });

  document.getElementById('mini_myzz_medusa').addEventListener('click', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Myzz-Medusa_1080_h264_45000kbs.mp4',
      //'/proyectos/myzz_medusa.html',
      '#',

      '<b>MYZZ - MEDUSA</b><br>MUSIC VIDEO'
    );
  });

  document.getElementById('mini_duality').addEventListener('click', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Duality_1080_h264_45000kbs.mp4',
      //'/proyectos/duality.html',
      '#',

      '<b>DÜADÜA - DUALITY</b><br>COMMERCIAL'
    );
  });

  document.getElementById('mini_croschek').addEventListener('click', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Jaydime-Croscheck_1080_h264_45000kbs.mp4',
      //'/proyectos/crosscheck.html',
      '#',

      '<b>JAY DIME - CROSS CHECK</b><br>MUSIC VIDEO'

    );
  });  

  document.getElementById('mini_distrue_rebirth').addEventListener('click', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Distrue-The_Rebirth_1080_h264.mp4',
      //'/proyectos/the rebirth.html',
      '#',

      '<b>THE REBIRTH</b><br>COMMERCIAL'

    );
  });

  document.getElementById('mini_subli').addEventListener('click', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/ReelSubli_1080_h264.mp4',
      //'/proyectos/sublimotion.html',
      '#',

      '<b>SUBLIMOTION</b><br>COMMERCIAL'

    );
  });

  document.getElementById('mini_ambar_tormenta').addEventListener('click', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Ambar Garces - Tormenta.mp4',
      //'/proyectos/ambar-tormenta.html',
      '#',

      '<b>AMBAR - TORMENTA</b><br>MUSIC VIDEO'

    );
  });

  document.getElementById('mini_3wb').addEventListener('click', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Everyone has their basketball_1080_v02.mov',
      //'/proyectos/3wb.html',
      '#',

      '<b>3WB EVERYONE HAS THEIR BASKETBALL</b><br>COMMERCIAL'

    );
  });

  document.getElementById('mini_benzo_paris_dia2').addEventListener('click', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Benzo - Paris 2 try 1.mp4',
      //'/proyectos/benzo-paris-dia.html',
      '#',

      '<b>BENZO - PARIS</b><br>MUSIC VIDEO'

    );
  });

  document.getElementById('mini_benzo_paris').addEventListener('click', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Benzo - Paris 1.mp4',
      //'/proyectos/benzo-paris.html',
      '#',

      '<b>BENZO - PARIS</b><br>MUSIC VIDEO'

    );
  });


  document.getElementById('mini_footdistrict').addEventListener('click', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/SINS_ENTREVISTACOMPLETA_1080_h264.mov',
      //'/proyectos/footdistric.html',
      '#',

      '<b>FOOT DISTRICT X SINS ART</b><br>INTERVIEW'

    );
  });

  document.getElementById('mini_kaños').addEventListener('click', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Kaños_Color_h264_1920.mov',
      //'/proyectos/kaños-besarteloslabios.html',
      '#',

      '<b>KAÑOS - BESARTE LOS LABIOS</b><br>MUSIC VIDEO'

    );
  });

  document.getElementById('mini_video_rafa').addEventListener('click', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Cascorro_Enfadado_1080_h264_45000kbs.mov',
      //'/proyectos/andreuslim-cascorroenfermo.html',
      '#',

      '<b>ANDREU SLIM - CASCORRO ENFERMO</b><br>COLOR'

    );
  });

  document.getElementById('mini_bucle').addEventListener('click', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/chiara-oliver-bucle-video-oficial.mp4',
      //'/proyectos/chiara-bucle.html',
      '#',

      '<b>CHIARA OLIVER - BUCLE</b><br>MUSIC VIDEO'

    );
  });

  document.getElementById('mini_dua_boncalso').addEventListener('click', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/uno-de-uno-bon-calso.mp4',
      //'/proyectos/chiara-bucle.html',
      '#',

      '<b>BON CALSO - UNO DE UNO by DÜADÜA</b><br>MUSIC VIDEO'

    );
  });

 /*
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

    // Estado de swipe
    let startX = 0;
    let isSwiping = false;
    let diffX = 0;
    let threshold = 150; // Distancia mínima para considerar un swipe válido

    // Función para cambiar vídeo
    function changeVideoByIndex(index) {
        const videoData = videos[index];
        videoHome.src = videoData.src;
        overlayText.innerHTML = videoData.text;
        videoHome.play();
    }

    videoHome.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
        videoHome.style.transition = 'none'; // Desactiva la transición mientras se mueve con el dedo
    });

    videoHome.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        const currentX = e.touches[0].clientX;
        diffX = currentX - startX;

        // Movimiento en tiempo real con el dedo
        videoHome.style.transform = `translateX(${diffX}px)`;
    });

    videoHome.addEventListener('touchend', (e) => {
        if (!isSwiping) return;

        // Restablece el swipe
        isSwiping = false;
        videoHome.style.transition = 'transform 0.5s ease'; // Transición suave al soltar

        // Si se ha desplazado más de threshold, se cambia de vídeo
        if (diffX < -threshold) {
            // Swipe a la izquierda: siguiente vídeo
            currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        } else if (diffX > threshold) {
            // Swipe a la derecha: vídeo anterior
            currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
        }

        // Reestablece la posición final, encajando el vídeo en la pantalla
        videoHome.style.transform = 'translateX(0)';

        // Cambia el vídeo después de la transición si hubo swipe válido
        setTimeout(() => {
            changeVideoByIndex(currentVideoIndex);
        }, 500); // Espera a que la transición finalice
    });
}

// Verificar si el dispositivo es táctil
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Inicializar swipe solo en dispositivos móviles táctiles
if (isTouchDevice() && window.innerWidth <= 992) {
    initSwipeVideos();
}

*/
}

document.addEventListener("DOMContentLoaded", init);
