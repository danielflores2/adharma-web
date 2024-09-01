function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Inicializa Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });

  // Sincroniza ScrollTrigger con Locomotive Scroll
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  // Función para cambiar el fondo del cuerpo al hacer scroll
  function checkScroll() {
    const changePoint = 100; // Puedes ajustar este valor

    const logo_adhr = document.getElementById('logo-img');

    if (locoScroll.scroll.instance.scroll.y > changePoint) {
      document.body.classList.add('black-bg');
      logo_adhr.src = '/src/Images/logo/adhr_white.svg'; // Cambia el logo a negro
    } else {
      document.body.classList.remove('black-bg');
      logo_adhr.src = '/src/images/logo/adhr_black.svg'; // Cambia el logo a blanco
    }
  }

  // Escuchar el evento de scroll y actualizar la clase de fondo
  locoScroll.on("scroll", () => {
    checkScroll(); // Llama a checkScroll en cada desplazamiento
    ScrollTrigger.update();
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

  // Animaciones con GSAP
  gsap.timeline({
    scrollTrigger: {
      trigger: "h1",
      scroller: ".main",
      start: "top 20%",
      end: "top 0",
      scrub: 3
    }
  })
  .to(".page1 h1", { x: -200 })
  .to(".page1 h2", { x: 200 })
  .to("#videoHome", { width: "100%" });

  // Cambiar el video al pasar el ratón sobre las miniaturas
  const videoHome = document.getElementById('videoHome');

  document.getElementById('min1').addEventListener('mouseover', function() {
    videoHome.src = 'https://static.stratebi.com/proyectos/temp/Myzz-Mala_1080_h264_45000kbs.mp4';
  });

  document.getElementById('min2').addEventListener('mouseover', function() {
    videoHome.src = 'https://static.stratebi.com/proyectos/temp/Myzz-Medusa_1080_h264_45000kbs.mp4';
  });

  document.getElementById('min3').addEventListener('mouseover', function() {
    videoHome.src = 'https://static.stratebi.com/proyectos/temp/Duality_1080_h264_45000kbs.mp4';
  });

  // Los siguientes elementos están comentados; descoméntalos si es necesario
  // document.getElementById('min4').addEventListener('mouseover', function() {
  //   videoHome.src = 'Duality_1080_h264_45000kbs.mp4'; 
  // });

  // document.getElementById('min5').addEventListener('mouseover', function() {
  //   videoHome.src = 'videoejemplo.mp4';
  // });
}

// Inicializa la funcionalidad
init();

