function init() {
  function handleScroll() {
    const scrollY = window.scrollY;
    const h1 = document.getElementById('header1');
    const h2 = document.getElementById('header2');
    
    const changePoint = window.innerHeight - 800;
    const changePointNav = window.innerHeight - 96;

    const logo_adhr = document.querySelectorAll('#logo-img');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('#nav-part2 .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Efecto de transformación en los encabezados
    h1.style.transform = `translateX(${scrollY * 0.5}px)`;
    h2.style.transform = `translateX(-${scrollY * 0.5}px)`;

    // Modificación del estilo del navbar en función del scroll
    if (scrollY >= changePointNav) {
      nav.classList.add('sticky-navbar');
      nav.classList.remove('position-absolute', 'bottom-0');

      // Añadir clases de animación para mostrar los enlaces de navegación y el logo
      logo_adhr.forEach(img => {
        img.classList.remove('logo-animation-exit');
        img.classList.add('logo-animation-enter');
      });
      navLinks.forEach(link => {
        link.classList.remove('nav-item-animation-exit');
        link.classList.add('nav-item-animation-enter');
      });
    } else {
      nav.classList.remove('sticky-navbar');
      nav.classList.add('position-absolute', 'bottom-0');

      // Añadir clases de animación para ocultar los enlaces de navegación y el logo
      logo_adhr.forEach(img => {
        img.classList.remove('logo-animation-enter');
        img.classList.add('logo-animation-exit');
      });
      navLinks.forEach(link => {
        link.classList.remove('nav-item-animation-enter');
        link.classList.add('nav-item-animation-exit');
      });
    }

    // Desplegar el menú automáticamente cuando se haga scroll hacia arriba
    if (scrollY <= 10) {
      navbarCollapse.classList.add('show');
    } else {
      navbarCollapse.classList.remove('show');
    }

    // Cambiar el fondo y los estilos de los enlaces de navegación
    if (scrollY > changePoint) {
      document.body.classList.add('black-bg');
      logo_adhr.forEach(img => {
        if (img.src !== '/src/images/logo/adhr_white.svg') {
          img.src = '/src/images/logo/adhr_white.svg';
        }
      });
      navLinks.forEach(link => {
        link.classList.add('text-light');
      });
    } else {
      document.body.classList.remove('black-bg');
      logo_adhr.forEach(img => {
        if (img.src !== '/src/images/logo/adhr_black.svg') {
          img.src = '/src/images/logo/adhr_black.svg';
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('text-light');
      });
    }
  }

  // Evento de clic para el botón de hamburguesa para pantallas móviles
  const navbarToggler = document.querySelector('.navbar-toggler');
  navbarToggler.addEventListener('click', () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      // Cuando el menú está visible
      navbarCollapse.classList.remove('show');
      navbarCollapse.classList.add('nav-item-animation-exit');
    } else {
      // Cuando el menú está oculto
      navbarCollapse.classList.add('show');
      navbarCollapse.classList.add('nav-item-animation-enter');
    }
  });

  // Agregar un evento de desplazamiento al documento
  window.addEventListener('scroll', handleScroll);
}

// Ejecutar la función de inicialización cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", init);
