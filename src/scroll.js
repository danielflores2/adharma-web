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
    const svgMAGE = document.getElementById('Magel');

  
  
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


      if (svgMAGE) {
        svgMAGE.setAttribute('fill', '#191919'); // Cambiar a color oscuro
      }

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

      if (svgMAGE) {
        svgMAGE.setAttribute('fill', '#F1EEE2'); // Volver al color claro
      }


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

document.getElementById('logo-link').addEventListener('click', function(e) {
  e.preventDefault(); // Evitar que el # se añada a la URL
  
  // Obtener la posición de la sección "landing" y "proyectos"
  const landingSection = document.getElementById('landing');
  const proyectosSection = document.getElementById('proyectos');
  
  // Obtener la posición actual de scroll
  const currentScroll = window.scrollY;
  
  // Si estamos en la sección "landing" (o cerca de ella), hacer scroll hacia "proyectos"
  if (currentScroll < landingSection.offsetHeight) {
    window.scrollTo({
      top: proyectosSection.offsetTop,
      behavior: 'smooth' // Desplazamiento suave hacia la sección "proyectos"
    });
  } else {
    // Si no estamos en "landing", hacer scroll hacia el principio
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave hasta arriba
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('header, section');
  let currentIndex = 0; // Índice de la sección actual
  let isScrolling = false; // Flag para evitar scroll repetido

  // Función para desplazarse a una sección específica
  function scrollToSection(index) {
      isScrolling = true;
      if (index >= 0 && index < sections.length) {
          sections[index].scrollIntoView({ behavior: 'smooth' });
      }

      setTimeout(() => {
          isScrolling = false;
      }, 500); // Tiempo para terminar la animación del scroll
  }

  // Detectar si es un dispositivo móvil
  function isMobileDevice() {
      return /Mobi|Android|iPhone/i.test(navigator.userAgent) || window.innerWidth <= 768;
  }

  // Función para manejar el scroll infinito en dispositivos móviles
  function handleScrollMobile(event) {
      if (!isScrolling) {
          if (event.deltaY > 0) {
              // Scroll hacia abajo
              currentIndex = currentIndex === sections.length - 1 ? 0 : currentIndex + 1;
          } else {
              // Scroll hacia arriba
              currentIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
          }
          scrollToSection(currentIndex);
      }
  }

  // Variables para el manejo de gestos de deslizar (swipe) en dispositivos móviles
  let touchStartY = 0;
  let touchEndY = 0;

  // Función para manejar el inicio del touch
  function handleTouchStart(event) {
      touchStartY = event.changedTouches[0].screenY;
  }

  // Función para manejar el final del touch y determinar si fue un swipe hacia arriba o abajo
  function handleTouchEnd(event) {
      touchEndY = event.changedTouches[0].screenY;
      handleSwipe();
  }

  // Función para determinar la dirección del swipe y manejar el scroll correspondiente
  function handleSwipe() {
      if (!isScrolling) {
          if (touchStartY > touchEndY + 50) {
              // Swipe hacia arriba
              currentIndex = currentIndex === sections.length - 1 ? 0 : currentIndex + 1;
              scrollToSection(currentIndex);
          } else if (touchStartY < touchEndY - 50) {
              // Swipe hacia abajo
              currentIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
              scrollToSection(currentIndex);
          }
      }
  }

  // Activar el comportamiento de scroll infinito solo en móviles
  if (isMobileDevice()) {
      // Escuchar eventos de touch para dispositivos móviles
      window.addEventListener('touchstart', handleTouchStart, false);
      window.addEventListener('touchend', handleTouchEnd, false);
  } else {
      // En dispositivos de escritorio, mantener el scroll estándar
      window.addEventListener('wheel', function(event) {
          if (!isScrolling) {
              if (event.deltaY > 0) {
                  currentIndex = Math.min(currentIndex + 1, sections.length - 1);
              } else {
                  currentIndex = Math.max(currentIndex - 1, 0);
              }
              scrollToSection(currentIndex);
          }
      });

      // Teclas de flechas en escritorio
      window.addEventListener('keydown', function (event) {
          if (!isScrolling) {
              if (event.key === 'ArrowDown') {
                  currentIndex = Math.min(currentIndex + 1, sections.length - 1);
                  scrollToSection(currentIndex);
              } else if (event.key === 'ArrowUp') {
                  currentIndex = Math.max(currentIndex - 1, 0);
                  scrollToSection(currentIndex);
              }
          }
      });
  }
});

