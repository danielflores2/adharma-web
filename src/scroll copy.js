function init() {
  function handleScroll() {
    const scrollY = window.scrollY;
    
    const changePoint = window.innerHeight - 800;
    const changePointNav = window.innerHeight - 96;
  
    const logo_adhr = document.querySelectorAll('#logo-img');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('#nav-part2 .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
  
  
    // Modificación del estilo del navbar en función del scroll para que se haga sticky cuando llegue arriba
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


// scroll smooth al darle click a los links del nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

//OCULTAR # DE LA URL AL DARLE CLICK AL NAV

// Selecciona todos los enlaces de navegación que empiezan con "#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Evita que el # se añada a la URL

    const targetId = this.getAttribute('href').substring(1); // Obtiene el ID del destino
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Desplázate al elemento objetivo
      targetElement.scrollIntoView({
        behavior: 'smooth' // Desplazamiento suave
      });
    }
  });
});

// Para el logo, desplazar hasta el principio sin modificar la URL
document.getElementById('logo-link').addEventListener('click', function(e) {
  e.preventDefault(); // Evitar que el # se añada a la URL
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Desplazamiento suave hasta arriba
  });
});