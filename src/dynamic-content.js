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



  // Eventos para cambiar el video y el texto al poner el ratón sobre las miniaturas
  document.getElementById('mini_mala').addEventListener('mouseover', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Myzz-Mala_1080_h265.mp4',
      '/proyectos/myzz-mala.html',
      '<b>MYZZ - MALA</b><br>MUSIC VIDEO'
    );
  });

  document.getElementById('mini_myzz_medusa').addEventListener('mouseover', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Myzz-Medusa_1080_h265.mp4',
      '/proyectos/myzz-medusa.html',
      '<b>MYZZ - MEDUSA</b><br>MUSIC VIDEO'
    );
  });

  document.getElementById('mini_duality').addEventListener('mouseover', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Duality_1080_h264_45000kbs.mp4',
      '/proyectos/duality.html',
      '<b>DÜADÜA - DUALITY</b><br>COMMERCIAL'
    );
  });

  document.getElementById('mini_croschek').addEventListener('mouseover', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Jaydime-Croscheck_1080_h265.mp4',
      '/proyectos/jaydime-crosscheck.html',
      '<b>JAY DIME - CROSS CHECK</b><br>MUSIC VIDEO'
    );
  });

  document.getElementById('mini_distrue_rebirth').addEventListener('mouseover', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Distrue-The_Rebirth_1080_h264.mp4',
      '/proyectos/therebirth.html',
      '<b>THE REBIRTH</b><br>COMMERCIAL'
    );
  });

  document.getElementById('mini_subli').addEventListener('mouseover', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/ReelSubli_1080_h265.mp4',
      '/proyectos/sublimotion.html',
      '<b>SUBLIMOTION</b><br>COMMERCIAL'
    );
  });

  document.getElementById('mini_ambar_tormenta').addEventListener('mouseover', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Ambar Garces - Tormenta.mp4',
      '/proyectos/ambar-tormenta.html',
      '<b>AMBAR - TORMENTA</b><br>MUSIC VIDEO'
    );
  });

  document.getElementById('mini_3wb').addEventListener('mouseover', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Everyone has their basketball_1080_h265.mp4',
      '/proyectos/everyone-has-their-basketball.html',
      '<b>3WB EVERYONE HAS THEIR BASKETBALL</b><br>COMMERCIAL'
    );
  });

  document.getElementById('mini_benzo_paris_dia2').addEventListener('mouseover', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Benzo - Paris 2 try 1.mp4',
      '/proyectos/benzo-paris-dia.html',
      '<b>BENZO - PARIS</b><br>MUSIC VIDEO'
    );
  });

  document.getElementById('mini_benzo_paris').addEventListener('mouseover', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Benzo - Paris 1.mp4',
      '/proyectos/benzo-paris-noche.html',
      '<b>BENZO - PARIS</b><br>MUSIC VIDEO'
    );
  });

  document.getElementById('mini_footdistrict').addEventListener('mouseover', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/SINS_ENTREVISTACOMPLETA_1080_h265.mp4',
      '/proyectos/footdistrict-sinsart.html',
      '<b>FOOT DISTRICT X SINS ART</b><br>INTERVIEW'
    );
  });

  document.getElementById('mini_kaños').addEventListener('mouseover', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Kaños_Color_h265_1920.mp4',
      '/proyectos/kaños-besarte-los-labios.html',
      '<b>KAÑOS - BESARTE LOS LABIOS</b><br>MUSIC VIDEO'
    );
  });

  document.getElementById('mini_video_rafa').addEventListener('mouseover', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/Cascorro_Enfadado_1080_h265.mp4',
      '/proyectos/cascorro-enfermo.html',
      '<b>ANDREU SLIM - CASCORRO ENFERMO</b><br>COLOR'
    );
  });

  document.getElementById('mini_bucle').addEventListener('mouseover', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/chiara-oliver-bucle-video-oficial_h265.mp4',
      '/proyectos/chiara-bucle.html',
      '<b>CHIARA OLIVER - BUCLE</b><br>MUSIC VIDEO'
    );
  });

  document.getElementById('mini_dua_boncalso').addEventListener('mouseover', function() {
    changeVideo(
      'https://d17wmwjckt0fmo.cloudfront.net/videos/ProyectosMP4/uno-de-uno-bon-calso.mp4',
      '/proyectos/duaduaboncalso.html',
      '<b>BON CALSO - UNO DE UNO by DÜADÜA</b><br>MUSIC VIDEO'
    );
  });


}

document.addEventListener("DOMContentLoaded", init);