
  // Cambiar el video al pasar el ratón sobre las miniaturas
  function init() {
    
    const videoHome = document.getElementById('videoHome');

  document.getElementById('min1').addEventListener('mouseover', function() {
    videoHome.src = 'https://static.stratebi.com/proyectos/temp/Myzz-Mala_1080_h264_45000kbs.mp4';
    videoHome.play();
  });

  document.getElementById('min2').addEventListener('mouseover', function() {
    videoHome.src = 'https://static.stratebi.com/proyectos/temp/Myzz-Medusa_1080_h264_45000kbs.mp4';
    videoHome.play();
  });

  document.getElementById('min3').addEventListener('mouseover', function() {
    videoHome.src = 'https://static.stratebi.com/proyectos/temp/Duality_1080_h264_45000kbs.mp4';
    videoHome.play();
  });

}


document.addEventListener("DOMContentLoaded", init);

