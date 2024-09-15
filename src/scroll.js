function init() {
  const sections = document.querySelectorAll('header, section');
  let currentIndex = 0; // Índice de la sección actual
  let isScrolling = false; // Flag para evitar scroll repetido
  let touchStartY = 0;
  let touchEndY = 0;

  // Función para manejar el scroll a una sección específica
  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      isScrolling = true;
      sections[index].scrollIntoView({ behavior: 'smooth' });
      currentIndex = index;

      // Previene nuevos swipes hasta que termine el scroll
      setTimeout(() => {
        isScrolling = false;
      }, 800);
    }
  }

  // Función para detectar el inicio del touch
  function handleTouchStart(event) {
    touchStartY = event.touches[0].clientY;
  }

  // Función para detectar el final del touch y manejar el swipe
  function handleTouchEnd(event) {
    touchEndY = event.changedTouches[0].clientY;
    const swipeThreshold = 50; // Umbral para considerar un swipe

    if (!isScrolling) {
      if (touchStartY - touchEndY > swipeThreshold) {
        // Swipe hacia arriba (siguiente sección)
        if (currentIndex < sections.length - 1) {
          currentIndex++;
          scrollToSection(currentIndex);
        }
      } else if (touchEndY - touchStartY > swipeThreshold) {
        // Swipe hacia abajo (sección anterior)
        if (currentIndex > 0) {
          currentIndex--;
          scrollToSection(currentIndex);
        }
      }
    }
  }

  // Evento de scroll para mantener actualizado el currentIndex
  function updateCurrentIndex() {
    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop >= 0 && sectionTop < window.innerHeight / 2) {
        currentIndex = index;
      }
    });
  }

  // Asignamos los eventos de touch para móviles
  window.addEventListener('touchstart', handleTouchStart, false);
  window.addEventListener('touchend', handleTouchEnd, false);

  // Actualizar currentIndex en cada scroll
  window.addEventListener('scroll', updateCurrentIndex);

  // Función para el logo (scroll entre "landing" y "proyectos")
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
  });
}

document.addEventListener("DOMContentLoaded", init);
