function init() {
  const sections = document.querySelectorAll('header, section');
  let currentIndex = 0; // Índice de la sección actual
  let isScrolling = false; // Flag para evitar scroll repetido
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('#nav-part2 .nav-link');
  const logo_adhr = document.querySelectorAll('#logo-img');
  let touchStartY = 0;
  let touchEndY = 0;

  // FUNCIÓN QUE CONTROLA EL NAV
 function handleScroll() {
  if (currentIndex > 0) {
    nav.classList.add('sticky-navbar');
    nav.classList.remove('position-absolute', 'bottom-0');
  } else {
    nav.classList.remove('sticky-navbar');
    nav.classList.add('position-absolute', 'bottom-0');
  }
}

   // FUNCION QUE CONTROLA EL SCROLL

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

  // Detectar el inicio del touch
  function handleTouchStart(event) {
    touchStartY = event.touches[0].clientY;
  }

  // Detectar el final del touch y gestionar el swipe
  function handleTouchEnd(event) {
    touchEndY = event.changedTouches[0].clientY;
    const swipeThreshold = 30; // Umbral de desplazamiento
    if (!isScrolling && Math.abs(touchStartY - touchEndY) > swipeThreshold) {
      if (touchStartY - touchEndY > swipeThreshold) {
        // Swipe hacia arriba
        currentIndex = Math.min(currentIndex + 1, sections.length - 1); // Asegura que no sobrepase la última sección
        scrollToSection(currentIndex);
      } else if (touchEndY - touchStartY > swipeThreshold) {
        // Swipe hacia abajo (permitir el paso de "Proyectos" a "Contacto")
        if (currentIndex === 0) {
          currentIndex = 1; // Asegura que solo vayamos a la sección de "Proyectos"
          scrollToSection(currentIndex);
        } else if (currentIndex === 1) {
          currentIndex = 2; // Ahora podemos ir a "Contacto"
          scrollToSection(currentIndex);
        }
      }
    }
  }

  // Manejo del evento wheel para trackpad
  function handleWheel(event) {
    if (!isScrolling) {
      const deltaY = event.deltaY;
      if (Math.abs(deltaY) > 4) { // Ajustar umbral para que sea sensible
        if (deltaY > 0) {
          // Desplazamiento hacia abajo (permitir el paso de "Proyectos" a "Contacto")
          if (currentIndex === 0) {
            currentIndex = 1;
            scrollToSection(currentIndex);
          } else if (currentIndex === 1) {
            currentIndex = 2; // Desplazar a "Contacto"
            scrollToSection(currentIndex);
          }
        } else {
          // Desplazamiento hacia arriba
          currentIndex = Math.max(currentIndex - 1, 0); // Limitar a la primera sección
          scrollToSection(currentIndex);
        }
      }
    }
  }

  // Clic en el logo para alternar entre "landing" y "proyectos"
  document.getElementById('logo-link').addEventListener('click', function (e) {
    e.preventDefault();

    const landingSection = document.getElementById('landing');
    const proyectosSection = document.getElementById('proyectos');
    const contactoSection = document.getElementById('contacto');
    const currentScroll = window.scrollY;

    if (currentScroll < landingSection.offsetHeight) {
      // Desplazarse a la sección de "proyectos"
      window.scrollTo({
        top: proyectosSection.offsetTop,
        behavior: 'smooth'
      });
      currentIndex = 1;
    } else if (currentScroll >= proyectosSection.offsetTop && currentScroll < contactoSection.offsetTop) {
      // Desplazarse a la sección de "contacto"
      window.scrollTo({
        top: contactoSection.offsetTop,
        behavior: 'smooth'
      });
      currentIndex = 2;
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

  window.addEventListener('scroll', function () {
    const currentScroll = window.scrollY;
    const proyectosSection = document.getElementById('proyectos');
    const contactoSection = document.getElementById('contacto');

    if (currentScroll < document.getElementById('landing').offsetHeight) {
      currentIndex = 0;
    } else if (currentScroll >= proyectosSection.offsetTop && currentScroll < contactoSection.offsetTop) {
      currentIndex = 1;
    } else if (currentScroll >= contactoSection.offsetTop) {
      currentIndex = 2;
    }

    handleScroll(); // Actualizar el estilo tras el scroll manual
  });

  function isMobileDevice() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent) || window.innerWidth <= 768;
  }

  if (isMobileDevice()) {
    window.addEventListener('touchstart', handleTouchStart, false);
    window.addEventListener('touchend', handleTouchEnd, false);
  } else {
    window.addEventListener('wheel', handleWheel, false); // Usar wheel en lugar de touch para trackpads
  }
}

document.addEventListener("DOMContentLoaded", init);