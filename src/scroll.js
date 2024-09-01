function init() {
  // Función para manejar el comportamiento en función del desplazamiento
  function handleScroll() {
    const scrollY = window.scrollY;
    const h1 = document.getElementById('header1');
    const h2 = document.getElementById('header2');
    const changePoint = window.innerHeight - 400;
    const changePointNav = window.innerHeight - 96;
    
    const logo_adhr = document.querySelectorAll('#logo-img');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('#nav-part2 .nav-link');
    
    // Efecto de transformación en los encabezados
    h1.style.transform = `translateX(${scrollY * 0.5}px)`;
    h2.style.transform = `translateX(-${scrollY * 0.5}px)`;

    // Modificación del estilo del navbar en función del scroll
    if (scrollY >= changePointNav) {
      nav.classList.add('sticky-navbar');
      nav.classList.remove('position-absolute', 'bottom-0');
    } else {
      nav.classList.remove('sticky-navbar');
      nav.classList.add('position-absolute', 'bottom-0');
    }

    // Cambiar el fondo y los estilos de los enlaces de navegación
    if (scrollY > changePoint) {
      document.body.classList.add('black-bg');
      logo_adhr.forEach(img => {
        if (img.src !== 'src/images/logo/adhr_white.svg') {
          img.src = 'src/images/logo/adhr_white.svg';
        }
      });
      navLinks.forEach(link => {
        link.classList.add('text-light');
      });
    } else {
      document.body.classList.remove('black-bg');
      logo_adhr.forEach(img => {
        if (img.src !== 'src/images/logo/adhr_black.svg') {
          img.src = 'src/images/logo/adhr_black.svg';
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('text-light');
      });
    }
  }

  // Agregar un evento de desplazamiento al documento
  window.addEventListener('scroll', handleScroll);
}

// Ejecutar la función de inicialización cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", init);
