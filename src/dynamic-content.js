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
  document.getElementById('min1').addEventListener('click', function() {
    changeVideo(
      'https://adharmavideos.s3.eu-north-1.amazonaws.com/videos/Myzz-Mala_1080_h264_45000kbs.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCmV1LW5vcnRoLTEiRjBEAiAHFyiC9pxOoJs6idWCW5u%2FIcgvzm7qUAuFKTHHem0%2FJAIgf8VEYdgrzMdFjQe02Fl7zz%2BrMUBMnhGQKKEcuQAIYIgq7QIIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2MTUyOTk3NzI5NjQiDBM98PPE1H9dnhtlkSrBAsdD1KAYzDwuEYe1jafz4EyZMmO2db6OcEdAhKf%2BZx5sCogeko3jqPKqKYOhNztjcB%2FEL6WTGQN1Jti5omgnhRPZlqtHTkOCfKYCMPd8Yj9CvaMEvimwHOYWQWOijT%2FXU8aeBP3WIz3Qaf2uoIRc3U%2FpQCdemL8Orq7%2FRws5ifEVdrJNkjF3TXANrfutLZiMooq5eJ0ZaN9OAVa%2FaymrYVGDep25XfR5einxLvp642E5SPWyiHC4Toh9haJt5d8hYUfgyip7%2FVXu6yFulpZbThBB4DoW6JG3tr%2F2BstJQ7%2B2cxDDUec70IzpUtPU4fHiK31s5rx6qscnEWoKTSdOOijA7VBxEmHyZLgjTg1D5GHsO89%2BICXyxoRgGwJ0VUcRejLB4Sek5cv1xmaMsGXemcMMk3d1DDNBqlQmwrOMq%2BJUxDDvo7y3Bjq0AkO15PV%2BlHEDbTKs2B%2B2IddOTJaIC3QWh%2BNl9csH6ZaIMkFHPqQ0dN5iEPV5HPtWTBOBTtBx7xR1pFbeuM73LajEvVcmVJrpSAW9wf6h3bvsGMEDU39ZD3dfs3%2FTeEXfINUsp5vP6M5JJjGA9m%2Fq7b86AulEAU6U1oNoXxNCeYc7ic6BZDJjGiiCN2n%2FCA1Qd5OS7eT4VfPPB0YKxh9%2F%2Fq3xgUFO%2BJyaziKxmraAYLKBcIAmfHBxxxccv7pxDDkbJGFj9cnr1Qir6wQQugFEZQCTCE6CZL9FQe1WaFh0dFoUdVbXCTBuc8MCCinWfzP0Q8kmZ7cWfXLgwSjgtuCc4k6hYsvFlXoBNktLA5tUUGRO1%2BYT%2FaeV3AdET5a9IWAlJq5mGQonvsItH99egrOTF%2F5jzLXN&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240921T184225Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAY6QVZOISF34JYH74%2F20240921%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=c5e6bf87c564920ab8baf36432dfd476b5711f978d031e3d6c7a04a564ec807e',
      //'/proyectos/myzz_mala.html',
      '#',
      '<b>MALA</b><br>MUSIC VIDEO'
    );
  });

  document.getElementById('min2').addEventListener('click', function() {
    changeVideo(
      'https://adharmavideos.s3.eu-north-1.amazonaws.com/videos/Myzz-Medusa_1080_h264_45000kbs.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCmV1LW5vcnRoLTEiRjBEAiAHFyiC9pxOoJs6idWCW5u%2FIcgvzm7qUAuFKTHHem0%2FJAIgf8VEYdgrzMdFjQe02Fl7zz%2BrMUBMnhGQKKEcuQAIYIgq7QIIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2MTUyOTk3NzI5NjQiDBM98PPE1H9dnhtlkSrBAsdD1KAYzDwuEYe1jafz4EyZMmO2db6OcEdAhKf%2BZx5sCogeko3jqPKqKYOhNztjcB%2FEL6WTGQN1Jti5omgnhRPZlqtHTkOCfKYCMPd8Yj9CvaMEvimwHOYWQWOijT%2FXU8aeBP3WIz3Qaf2uoIRc3U%2FpQCdemL8Orq7%2FRws5ifEVdrJNkjF3TXANrfutLZiMooq5eJ0ZaN9OAVa%2FaymrYVGDep25XfR5einxLvp642E5SPWyiHC4Toh9haJt5d8hYUfgyip7%2FVXu6yFulpZbThBB4DoW6JG3tr%2F2BstJQ7%2B2cxDDUec70IzpUtPU4fHiK31s5rx6qscnEWoKTSdOOijA7VBxEmHyZLgjTg1D5GHsO89%2BICXyxoRgGwJ0VUcRejLB4Sek5cv1xmaMsGXemcMMk3d1DDNBqlQmwrOMq%2BJUxDDvo7y3Bjq0AkO15PV%2BlHEDbTKs2B%2B2IddOTJaIC3QWh%2BNl9csH6ZaIMkFHPqQ0dN5iEPV5HPtWTBOBTtBx7xR1pFbeuM73LajEvVcmVJrpSAW9wf6h3bvsGMEDU39ZD3dfs3%2FTeEXfINUsp5vP6M5JJjGA9m%2Fq7b86AulEAU6U1oNoXxNCeYc7ic6BZDJjGiiCN2n%2FCA1Qd5OS7eT4VfPPB0YKxh9%2F%2Fq3xgUFO%2BJyaziKxmraAYLKBcIAmfHBxxxccv7pxDDkbJGFj9cnr1Qir6wQQugFEZQCTCE6CZL9FQe1WaFh0dFoUdVbXCTBuc8MCCinWfzP0Q8kmZ7cWfXLgwSjgtuCc4k6hYsvFlXoBNktLA5tUUGRO1%2BYT%2FaeV3AdET5a9IWAlJq5mGQonvsItH99egrOTF%2F5jzLXN&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240921T185709Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAY6QVZOISF34JYH74%2F20240921%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=0a9ee94678f00f8d78098deafefcf3f1cbca2316875081d40b86f186ab3bbb93',
      //'/proyectos/myzz_medusa.html',
      '#',

      '<b>MEDUSA</b><br>MUSIC VIDEO'
    );
  });

  document.getElementById('min3').addEventListener('click', function() {
    changeVideo(
      'https://adharmavideos.s3.eu-north-1.amazonaws.com/videos/Duality_1080_h264_45000kbs.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCmV1LW5vcnRoLTEiRjBEAiAHFyiC9pxOoJs6idWCW5u%2FIcgvzm7qUAuFKTHHem0%2FJAIgf8VEYdgrzMdFjQe02Fl7zz%2BrMUBMnhGQKKEcuQAIYIgq7QIIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2MTUyOTk3NzI5NjQiDBM98PPE1H9dnhtlkSrBAsdD1KAYzDwuEYe1jafz4EyZMmO2db6OcEdAhKf%2BZx5sCogeko3jqPKqKYOhNztjcB%2FEL6WTGQN1Jti5omgnhRPZlqtHTkOCfKYCMPd8Yj9CvaMEvimwHOYWQWOijT%2FXU8aeBP3WIz3Qaf2uoIRc3U%2FpQCdemL8Orq7%2FRws5ifEVdrJNkjF3TXANrfutLZiMooq5eJ0ZaN9OAVa%2FaymrYVGDep25XfR5einxLvp642E5SPWyiHC4Toh9haJt5d8hYUfgyip7%2FVXu6yFulpZbThBB4DoW6JG3tr%2F2BstJQ7%2B2cxDDUec70IzpUtPU4fHiK31s5rx6qscnEWoKTSdOOijA7VBxEmHyZLgjTg1D5GHsO89%2BICXyxoRgGwJ0VUcRejLB4Sek5cv1xmaMsGXemcMMk3d1DDNBqlQmwrOMq%2BJUxDDvo7y3Bjq0AkO15PV%2BlHEDbTKs2B%2B2IddOTJaIC3QWh%2BNl9csH6ZaIMkFHPqQ0dN5iEPV5HPtWTBOBTtBx7xR1pFbeuM73LajEvVcmVJrpSAW9wf6h3bvsGMEDU39ZD3dfs3%2FTeEXfINUsp5vP6M5JJjGA9m%2Fq7b86AulEAU6U1oNoXxNCeYc7ic6BZDJjGiiCN2n%2FCA1Qd5OS7eT4VfPPB0YKxh9%2F%2Fq3xgUFO%2BJyaziKxmraAYLKBcIAmfHBxxxccv7pxDDkbJGFj9cnr1Qir6wQQugFEZQCTCE6CZL9FQe1WaFh0dFoUdVbXCTBuc8MCCinWfzP0Q8kmZ7cWfXLgwSjgtuCc4k6hYsvFlXoBNktLA5tUUGRO1%2BYT%2FaeV3AdET5a9IWAlJq5mGQonvsItH99egrOTF%2F5jzLXN&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240921T185637Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAY6QVZOISF34JYH74%2F20240921%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=8c163fd5cfe276e89d92a3f1e04a08ecac4ef84591325f5670dd60fb245007ae',
      //'/proyectos/duality.html',
      '#',

      '<b>DUALITY</b><br>COMMERCIAL'
    );
  });

  document.getElementById('min4').addEventListener('click', function() {
    changeVideo(
      'https://adharmavideos.s3.eu-north-1.amazonaws.com/videos/Jaydime_Jaycas_crosscheck_DEFINIT_1.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCmV1LW5vcnRoLTEiRjBEAiAHFyiC9pxOoJs6idWCW5u%2FIcgvzm7qUAuFKTHHem0%2FJAIgf8VEYdgrzMdFjQe02Fl7zz%2BrMUBMnhGQKKEcuQAIYIgq7QIIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2MTUyOTk3NzI5NjQiDBM98PPE1H9dnhtlkSrBAsdD1KAYzDwuEYe1jafz4EyZMmO2db6OcEdAhKf%2BZx5sCogeko3jqPKqKYOhNztjcB%2FEL6WTGQN1Jti5omgnhRPZlqtHTkOCfKYCMPd8Yj9CvaMEvimwHOYWQWOijT%2FXU8aeBP3WIz3Qaf2uoIRc3U%2FpQCdemL8Orq7%2FRws5ifEVdrJNkjF3TXANrfutLZiMooq5eJ0ZaN9OAVa%2FaymrYVGDep25XfR5einxLvp642E5SPWyiHC4Toh9haJt5d8hYUfgyip7%2FVXu6yFulpZbThBB4DoW6JG3tr%2F2BstJQ7%2B2cxDDUec70IzpUtPU4fHiK31s5rx6qscnEWoKTSdOOijA7VBxEmHyZLgjTg1D5GHsO89%2BICXyxoRgGwJ0VUcRejLB4Sek5cv1xmaMsGXemcMMk3d1DDNBqlQmwrOMq%2BJUxDDvo7y3Bjq0AkO15PV%2BlHEDbTKs2B%2B2IddOTJaIC3QWh%2BNl9csH6ZaIMkFHPqQ0dN5iEPV5HPtWTBOBTtBx7xR1pFbeuM73LajEvVcmVJrpSAW9wf6h3bvsGMEDU39ZD3dfs3%2FTeEXfINUsp5vP6M5JJjGA9m%2Fq7b86AulEAU6U1oNoXxNCeYc7ic6BZDJjGiiCN2n%2FCA1Qd5OS7eT4VfPPB0YKxh9%2F%2Fq3xgUFO%2BJyaziKxmraAYLKBcIAmfHBxxxccv7pxDDkbJGFj9cnr1Qir6wQQugFEZQCTCE6CZL9FQe1WaFh0dFoUdVbXCTBuc8MCCinWfzP0Q8kmZ7cWfXLgwSjgtuCc4k6hYsvFlXoBNktLA5tUUGRO1%2BYT%2FaeV3AdET5a9IWAlJq5mGQonvsItH99egrOTF%2F5jzLXN&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240921T184508Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAY6QVZOISF34JYH74%2F20240921%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=6dc6c291144a2929d46c506069837e66ef12fe868216b78ccbdcda029aae0836',
      //'/proyectos/crosscheck.html',
      '#',

      '<b>CROSS CHECK</b><br>MUSIC VIDEO'

    );
  });

  document.getElementById('min5').addEventListener('click', function() {
    changeVideo(
      'https://adharmavideos.s3.eu-north-1.amazonaws.com/videos/THE%20REBIRTH%20%281080p%2C%20h264%2C%20youtube%29.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCmV1LW5vcnRoLTEiRjBEAiAHFyiC9pxOoJs6idWCW5u%2FIcgvzm7qUAuFKTHHem0%2FJAIgf8VEYdgrzMdFjQe02Fl7zz%2BrMUBMnhGQKKEcuQAIYIgq7QIIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2MTUyOTk3NzI5NjQiDBM98PPE1H9dnhtlkSrBAsdD1KAYzDwuEYe1jafz4EyZMmO2db6OcEdAhKf%2BZx5sCogeko3jqPKqKYOhNztjcB%2FEL6WTGQN1Jti5omgnhRPZlqtHTkOCfKYCMPd8Yj9CvaMEvimwHOYWQWOijT%2FXU8aeBP3WIz3Qaf2uoIRc3U%2FpQCdemL8Orq7%2FRws5ifEVdrJNkjF3TXANrfutLZiMooq5eJ0ZaN9OAVa%2FaymrYVGDep25XfR5einxLvp642E5SPWyiHC4Toh9haJt5d8hYUfgyip7%2FVXu6yFulpZbThBB4DoW6JG3tr%2F2BstJQ7%2B2cxDDUec70IzpUtPU4fHiK31s5rx6qscnEWoKTSdOOijA7VBxEmHyZLgjTg1D5GHsO89%2BICXyxoRgGwJ0VUcRejLB4Sek5cv1xmaMsGXemcMMk3d1DDNBqlQmwrOMq%2BJUxDDvo7y3Bjq0AkO15PV%2BlHEDbTKs2B%2B2IddOTJaIC3QWh%2BNl9csH6ZaIMkFHPqQ0dN5iEPV5HPtWTBOBTtBx7xR1pFbeuM73LajEvVcmVJrpSAW9wf6h3bvsGMEDU39ZD3dfs3%2FTeEXfINUsp5vP6M5JJjGA9m%2Fq7b86AulEAU6U1oNoXxNCeYc7ic6BZDJjGiiCN2n%2FCA1Qd5OS7eT4VfPPB0YKxh9%2F%2Fq3xgUFO%2BJyaziKxmraAYLKBcIAmfHBxxxccv7pxDDkbJGFj9cnr1Qir6wQQugFEZQCTCE6CZL9FQe1WaFh0dFoUdVbXCTBuc8MCCinWfzP0Q8kmZ7cWfXLgwSjgtuCc4k6hYsvFlXoBNktLA5tUUGRO1%2BYT%2FaeV3AdET5a9IWAlJq5mGQonvsItH99egrOTF%2F5jzLXN&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240921T185856Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAY6QVZOISF34JYH74%2F20240921%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=a7a02f7cf8bf5acde2e7441da196f0e4b28cb63fc76268379539810e14c5ea97',
      //'/proyectos/crosscheck.html',
      '#',

      '<b>THE REBIRTH</b><br>COMMERCIAL'

    );
  });

  document.getElementById('min6').addEventListener('click', function() {
    changeVideo(
      'https://adharmavideos.s3.eu-north-1.amazonaws.com/videos/ReelSubli.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCmV1LW5vcnRoLTEiRjBEAiAHFyiC9pxOoJs6idWCW5u%2FIcgvzm7qUAuFKTHHem0%2FJAIgf8VEYdgrzMdFjQe02Fl7zz%2BrMUBMnhGQKKEcuQAIYIgq7QIIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2MTUyOTk3NzI5NjQiDBM98PPE1H9dnhtlkSrBAsdD1KAYzDwuEYe1jafz4EyZMmO2db6OcEdAhKf%2BZx5sCogeko3jqPKqKYOhNztjcB%2FEL6WTGQN1Jti5omgnhRPZlqtHTkOCfKYCMPd8Yj9CvaMEvimwHOYWQWOijT%2FXU8aeBP3WIz3Qaf2uoIRc3U%2FpQCdemL8Orq7%2FRws5ifEVdrJNkjF3TXANrfutLZiMooq5eJ0ZaN9OAVa%2FaymrYVGDep25XfR5einxLvp642E5SPWyiHC4Toh9haJt5d8hYUfgyip7%2FVXu6yFulpZbThBB4DoW6JG3tr%2F2BstJQ7%2B2cxDDUec70IzpUtPU4fHiK31s5rx6qscnEWoKTSdOOijA7VBxEmHyZLgjTg1D5GHsO89%2BICXyxoRgGwJ0VUcRejLB4Sek5cv1xmaMsGXemcMMk3d1DDNBqlQmwrOMq%2BJUxDDvo7y3Bjq0AkO15PV%2BlHEDbTKs2B%2B2IddOTJaIC3QWh%2BNl9csH6ZaIMkFHPqQ0dN5iEPV5HPtWTBOBTtBx7xR1pFbeuM73LajEvVcmVJrpSAW9wf6h3bvsGMEDU39ZD3dfs3%2FTeEXfINUsp5vP6M5JJjGA9m%2Fq7b86AulEAU6U1oNoXxNCeYc7ic6BZDJjGiiCN2n%2FCA1Qd5OS7eT4VfPPB0YKxh9%2F%2Fq3xgUFO%2BJyaziKxmraAYLKBcIAmfHBxxxccv7pxDDkbJGFj9cnr1Qir6wQQugFEZQCTCE6CZL9FQe1WaFh0dFoUdVbXCTBuc8MCCinWfzP0Q8kmZ7cWfXLgwSjgtuCc4k6hYsvFlXoBNktLA5tUUGRO1%2BYT%2FaeV3AdET5a9IWAlJq5mGQonvsItH99egrOTF%2F5jzLXN&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240921T185826Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAY6QVZOISF34JYH74%2F20240921%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=76bcded0558f932a65305a70715d73d7c4c53a57c24400cc5cf345b3feb35b38',
      //'/proyectos/crosscheck.html',
      '#',

      '<b>SUBLIMOTION</b><br>COMMERCIAL'

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
