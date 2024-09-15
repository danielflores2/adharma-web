function init() {
  const sections = document.querySelectorAll('header, section');
  let currentIndex = 0; // Índice de la sección actual
  let isScrolling = false; // Flag para evitar scroll repetido

  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('#nav-part2 .nav-link');
  const logo_adhr = document.querySelectorAll('#logo-img');
  let touchStartY = 0;
  let touchEndY = 0;

  // Función que actualiza el estilo según la sección actual
  function handleScroll() {
    if (currentIndex > 0) {
      nav.classList.add('sticky-navbar');
      nav.classList.remove('position-absolute', 'bottom-0');
    } else {
      nav.classList.remove('sticky-navbar');
      nav.classList.add('position-absolute', 'bottom-0');
    }

    if (currentIndex === sections.length - 1 || currentIndex === 0) {
      document.body.style.backgroundColor = '#FFFDF5'; // Fondo blanco
      logo_adhr.forEach(img => {
        img.src = '/src/images/logo/adhr_black.svg'; // Cambiar logo a negro
      });
      navLinks.forEach(link => {
        link.classList.remove('text-light');
        link.classList.add('text-dark'); // Cambiar los enlaces a oscuro
      });
    } else {
      document.body.style.backgroundColor = '#FFFDF5'; // Fondo blanco
      logo_adhr.forEach(img => {
        img.src = '/src/images/logo/adhr_white.svg'; // Cambiar logo a blanco
      });
      navLinks.forEach(link => {
        link.classList.remove('text-dark');
        link.classList.add('text-light'); // Cambiar los enlaces a claro
      });
    }
  }

  // Función para desplazarse a una sección específica
  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      isScrolling = true;
      sections[index].scrollIntoView({ behavior: 'smooth' });
      currentIndex = index;
      handleScroll();

      setTimeout(() => {
        isScrolling = false;
      }, 800); // Tiempo para terminar el scroll
    }
  }

  // Actualizar currentIndex según la sección visible
  function updateCurrentIndex() {
    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop >= -window.innerHeight * 0.3 && sectionTop < window.innerHeight * 0.7) {
        if (currentIndex !== index) {
          currentIndex = index;
          handleScroll();
        }
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
    const swipeThreshold = 50; // Umbral para considerar que ha sido un swipe

    if (!isScrolling) {
      if (touchStartY - touchEndY > swipeThreshold) {
        // Swipe hacia arriba
        currentIndex = currentIndex === sections.length - 1 ? sections.length - 1 : currentIndex + 1;
        scrollToSection(currentIndex);
      } else if (touchEndY - touchStartY > swipeThreshold) {
        // Swipe hacia abajo
        currentIndex = currentIndex === 0 ? 0 : currentIndex - 1;
        scrollToSection(currentIndex);
      }
    }
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

  function isMobileDevice() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent) || window.innerWidth <= 768;
  }

  if (isMobileDevice()) {
    window.addEventListener('touchstart', handleTouchStart, false);
    window.addEventListener('touchend', handleTouchEnd, false);
  } else {
    window.addEventListener('wheel', function (event) {
      if (!isScrolling) {
        currentIndex = event.deltaY > 0 ? Math.min(currentIndex + 1, sections.length - 1) : Math.max(currentIndex - 1, 0);
        scrollToSection(currentIndex);
      }
    });

    window.addEventListener('keydown', function (event) {
      if (!isScrolling) {
        if (event.key === 'ArrowDown') {
          currentIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else if (event.key === 'ArrowUp') {
          currentIndex = Math.max(currentIndex - 1, 0);
        }
        scrollToSection(currentIndex);
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", init);
