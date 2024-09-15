function init() {
  const sections = document.querySelectorAll('header, section');
  let currentIndex = 0; // Índice de la sección actual
  let isScrolling = false; // Flag para evitar scroll repetido

  const logo_adhr = document.querySelectorAll('#logo-img');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('#nav-part2 .nav-link');
  const svgMAGE = document.getElementById('Magel');

  function handleScroll() {
    const scrollY = window.scrollY;
    const changePointNav = window.innerHeight - 96;

    // Modificación del estilo del navbar en función del scroll para que se haga sticky
    if (currentIndex > 0) {
      nav.classList.add('sticky-navbar');
      nav.classList.remove('position-absolute', 'bottom-0');
    } else {
      nav.classList.remove('sticky-navbar');
      nav.classList.add('position-absolute', 'bottom-0');
    }

    // Cambiar el fondo y los estilos de los enlaces de navegación según la sección actual
    if (currentIndex === sections.length - 1) {
      // Si estamos en la sección "contact", cambiar el fondo a blanco y el logo a negro
      document.body.style.backgroundColor = '#FFFDF5'; // Fondo blanco

      //if (svgMAGE) {
        //svgMAGE.setAttribute('fill', '#000000'); // Cambiar el logo a negro
      //}

      logo_adhr.forEach(img => {
        if (img.src !== '/src/images/logo/adhr_black.svg') {
          img.src = '/src/images/logo/adhr_black.svg'; // Cambiar logo a negro
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('text-light');
        link.classList.add('text-dark'); // Cambiar los enlaces a oscuro
      });

    } else if (currentIndex === 0){
      // Si no estamos en la sección "contact", aplicar el fondo oscuro
      document.body.style.backgroundColor = '#FFFDF5'; // Fondo blanco


      

      logo_adhr.forEach(img => {
        if (img.src !== '/src/images/logo/adhr_black.svg') {
          img.src = '/src/images/logo/adhr_black.svg'; // Cambiar logo a blanco
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('text-light');
        link.classList.add('text-dark'); // Cambiar los enlaces a oscuro
      });
    } else if (currentIndex === 1){
      // Si no estamos en la sección "contact", aplicar el fondo oscuro
      document.body.style.backgroundColor = '#FFFDF5'; // Fondo blanco


      

      logo_adhr.forEach(img => {
        if (img.src !== '/src/images/logo/adhr_white.svg') {
          img.src = '/src/images/logo/adhr_white.svg'; // Cambiar logo a blanco
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('text-dark');
        link.classList.add('text-light'); // Cambiar los enlaces a claro
      });
    }
  }

  // Función para desplazarse a una sección específica
  function scrollToSection(index) {
    isScrolling = true;
    if (index >= 0 && index < sections.length) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
      currentIndex = index; // Actualizamos el índice actual
      handleScroll(); // Actualizamos el estilo basado en el índice actual
    }

    setTimeout(() => {
      isScrolling = false;
    }, 500); // Tiempo para terminar la animación del scroll
  }

  // Actualizar currentIndex según la sección visible
  function updateCurrentIndex() {
    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;

      // Si la sección está aproximadamente a entrar (sección top en el 30% de la pantalla)
      if (sectionTop >= -window.innerHeight * 0.3 && sectionTop < window.innerHeight * 0.7) {
        if (currentIndex !== index) { // Solo actualizar si cambió la sección
          currentIndex = index; // Actualizamos el currentIndex
          handleScroll(); // Aplicamos los cambios de estilo según la sección
        }
      }
    });
  }

  // Evento de clic para el botón de hamburguesa para pantallas móviles
  const navbarToggler = document.querySelector('.navbar-toggler');
  navbarToggler.addEventListener('click', () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
      navbarCollapse.classList.add('nav-item-animation-exit');
    } else {
      navbarCollapse.classList.add('show');
      navbarCollapse.classList.add('nav-item-animation-enter');
    }
  });

  // Evento click en el logo para hacer scroll hacia "landing" o "proyectos"
  document.getElementById('logo-link').addEventListener('click', function (e) {
    e.preventDefault();

    const landingSection = document.getElementById('landing');
    const proyectosSection = document.getElementById('proyectos');
    const currentScroll = window.scrollY;

    if (currentScroll < landingSection.offsetHeight) {
      window.scrollTo({
        top: proyectosSection.offsetTop,
        behavior: 'smooth'
      });
      currentIndex = 1;
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      currentIndex = 0;
    }
    handleScroll(); // Actualizar estilo tras scroll manual
  });

  // Escuchar el evento de scroll para actualizar el currentIndex
  window.addEventListener('scroll', updateCurrentIndex);

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
    window.addEventListener('touchstart', handleTouchStart, false);
    window.addEventListener('touchend', handleTouchEnd, false);
  } else {
    // En dispositivos de escritorio, mantener el scroll estándar
    window.addEventListener('wheel', function (event) {
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
}

// Ejecutar la función de inicialización cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", init);
