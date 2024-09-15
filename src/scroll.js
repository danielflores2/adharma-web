function init() {
  const sections = document.querySelectorAll('header, section');
  let currentIndex = 0; // Índice de la sección actual
  let isScrolling = false; // Flag para evitar scroll repetido
  let touchStartY = 0;
  let touchEndY = 0;

  // Función que actualiza el estilo según la sección actual
  function handleScroll() {
    if (currentIndex > 0) {
      document.getElementById('nav').classList.add('sticky-navbar');
    } else {
      document.getElementById('nav').classList.remove('sticky-navbar');
    }

    // Aquí puedes modificar el estilo de las secciones o el nav según el índice actual
  }

  // Función para desplazarse a una sección específica
  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      isScrolling = true;
      sections[index].scrollIntoView({ behavior: 'smooth' });
      currentIndex = index;
      handleScroll();

      // Esperar que la animación termine antes de permitir más scrolls
      setTimeout(() => {
        isScrolling = false;
      }, 800); // Tiempo para terminar el scroll
    }
  }

  // Actualizar currentIndex según la sección visible
  function updateCurrentIndex() {
    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop >= 0 && sectionTop < window.innerHeight / 2) {
        currentIndex = index;
      }
    });
  }

  // Detectar el inicio del touch
  function handleTouchStart(event) {
    touchStartY = event.touches[0].clientY;
  }

  // Detectar el final del touch y gestionar el swipe
  function handleTouchEnd(event) {
    touchEndY = event.changedTouches[0].clientY;
    const swipeThreshold = 50; // Umbral para considerar un swipe

    if (!isScrolling) {
      if (touchStartY - touchEndY > swipeThreshold) {
        // Swipe hacia arriba (siguiente sección)
        currentIndex = currentIndex === sections.length - 1 ? sections.length - 1 : currentIndex + 1;
        scrollToSection(currentIndex);
      } else if (touchEndY - touchStartY > swipeThreshold) {
        // Swipe hacia abajo (sección anterior)
        currentIndex = currentIndex === 0 ? 0 : currentIndex - 1;
        scrollToSection(currentIndex);
      }
    }
  }

  // Bloquear el scroll libre y forzar la fijación en una sección
  function blockFreeScroll() {
    window.addEventListener('wheel', function (event) {
      event.preventDefault(); // Prevenir el scroll nativo
      if (!isScrolling) {
        if (event.deltaY > 0) {
          currentIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else {
          currentIndex = Math.max(currentIndex - 1, 0);
        }
        scrollToSection(currentIndex);
      }
    }, { passive: false }); // Hacer que el evento no sea pasivo para evitar el scroll nativo
  }

  // Manejar el clic en el logo para alternar entre "landing" y "proyectos"
  document.getElementById('logo-link').addEventListener('click', function (e) {
    e.preventDefault();

    const landingSection = document.getElementById('landing');
    const proyectosSection = document.getElementById('proyectos');
    const currentScroll = window.scrollY;

    if (currentScroll < landingSection.offsetHeight) {
      // Desplazarse a la sección de "proyectos"
      window.scrollTo({
        top: proyectosSection.offsetTop,
        behavior: 'smooth'
      });
      currentIndex = 1;
    } else {
      // Desplazarse a la parte superior (landing)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      currentIndex = 0;
    }
    handleScroll(); // Actualizar el estilo tras el desplazamiento manual
  });

  window.addEventListener('scroll', updateCurrentIndex);

  // Detectar si es un dispositivo móvil
  function isMobileDevice() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent) || window.innerWidth <= 768;
  }

  if (isMobileDevice()) {
    window.addEventListener('touchstart', handleTouchStart, false);
    window.addEventListener('touchend', handleTouchEnd, false);
  } else {
    // Bloquear el scroll libre en desktop
    blockFreeScroll();
  }
}

document.addEventListener("DOMContentLoaded", init);
