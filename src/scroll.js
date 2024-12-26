function init() {
  // Verifica si el dispositivo es móvil
  const isMobileDevice = () => /Mobi|Android|iPhone/i.test(navigator.userAgent) || window.innerWidth <= 768;
  if (isMobileDevice()) return; // Si es móvil, no ejecuta el resto del código

  // Selección de las secciones
  const sections = document.querySelectorAll('header, section'); // Todas las secciones de la página

  // Variables para gestionar el scroll y navegación
  let currentIndex = 0; // Índice de la sección actual
  let isScrolling = false; // Bandera para evitar scroll repetido
  let touchStartY = 0; // Coordenada Y inicial del touch (para swipe)

  // Desplaza la página hacia la sección correspondiente
  const scrollToSection = (index) => {
    if (index >= 0 && index < sections.length) { // Verifica que el índice sea válido
      isScrolling = true; // Marca que está en proceso de desplazamiento
      sections[index].scrollIntoView({ behavior: 'smooth' }); // Realiza el desplazamiento suave
      currentIndex = index; // Actualiza el índice actual
      setTimeout(() => isScrolling = false, 800); // Libera el scroll después de 800 ms
    }
  };

  // Maneja el final del gesto de swipe (toque en pantallas táctiles)
  const handleTouchEnd = ({ changedTouches }) => {
    const touchEndY = changedTouches[0].clientY; // Obtiene la coordenada Y del touch final
    const swipeThreshold = 30; // Umbral de desplazamiento para considerar un swipe
    if (isScrolling || Math.abs(touchStartY - touchEndY) <= swipeThreshold) return; // Ignora si no hay suficiente movimiento

    // Calcula la dirección del swipe y ajusta el índice actual
    currentIndex += (touchStartY - touchEndY > 0) ? 1 : -1;
    currentIndex = Math.min(Math.max(currentIndex, 0), sections.length - 1); // Asegura que el índice esté en rango
    scrollToSection(currentIndex); // Desplaza a la sección correspondiente
  };

  // Maneja el desplazamiento con el scroll del mouse o trackpad
  const handleWheel = (event) => {
    if (isScrolling) return; // Ignora el desplazamiento si ya se está procesando uno
    const deltaY = event.deltaY;
    if (Math.abs(deltaY) <= 4) return; // Ignora movimientos pequeños

    // Calcula la dirección del desplazamiento
    if (deltaY > 0) {
      // Desplazamiento hacia abajo
      currentIndex = Math.min(currentIndex + 1, sections.length - 1); // Asegura que no se pase del límite
    } else {
      // Desplazamiento hacia arriba
      currentIndex = Math.max(currentIndex - 1, 0); // Asegura que no se pase del límite
    }
    scrollToSection(currentIndex); // Desplaza a la sección correspondiente
  };

  // Maneja el clic en el logo para navegar entre las secciones
  const handleLogoClick = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const scrollY = window.scrollY; // Obtiene la posición actual del scroll

    if (scrollY < sections[0].offsetHeight) {
      scrollToSection(1); // Si está en la primera sección, va a la segunda
    } else if (scrollY >= sections[1].offsetTop && scrollY < sections[2].offsetTop) {
      scrollToSection(2); // Si está en la segunda sección, va a la tercera
    } else {
      scrollToSection(0); // Si está en la tercera sección, vuelve a la primera
    }
  };

  // Maneja el scroll manual para actualizar el índice actual
  const handleScroll = () => {
    const scrollY = window.scrollY; // Obtiene la posición actual del scroll
    if (scrollY < sections[0].offsetHeight) {
      currentIndex = 0; // Está en la primera sección
    } else if (scrollY >= sections[1].offsetTop && scrollY < sections[2].offsetTop) {
      currentIndex = 1; // Está en la segunda sección
    } else {
      currentIndex = 2; // Está en la tercera sección
    }
  };

  // Eventos principales
  window.addEventListener('scroll', handleScroll); // Actualiza el índice al hacer scroll manual
  window.addEventListener('wheel', handleWheel); // Desplazamiento con el mouse/trackpad
  window.addEventListener('touchstart', ({ touches }) => touchStartY = touches[0].clientY); // Captura el inicio del touch
  window.addEventListener('touchend', handleTouchEnd); // Detecta el final del swipe
  document.getElementById('logo-link').addEventListener('click', handleLogoClick); // Clic en el logo para navegación
}

// Ejecuta la función `init` una vez que el DOM se ha cargado
document.addEventListener("DOMContentLoaded", init);