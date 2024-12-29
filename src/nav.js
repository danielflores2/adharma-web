window.addEventListener('scroll', function () {
  var nav = document.getElementById('nav');
  var scrollTop = window.scrollY || document.documentElement.scrollTop; // Scroll actual
  var navInitialPosition = nav.offsetTop; // Detecta la posición inicial del nav

  if (scrollTop === 0) {
    // Cuando el usuario está completamente en la parte superior
    nav.style.position = 'absolute'; // El nav regresa al flujo del contenido
    nav.style.top = ''; // Restablece la posición superior
    nav.style.bottom = '0'; // Lo coloca en la parte inferior
    nav.classList.remove('sticky-navbar');
  } else if (scrollTop >= navInitialPosition) {
    // Cuando el usuario ha hecho scroll y el nav debe quedarse fijo
    nav.style.position = 'fixed'; // Fija el nav en la parte superior
    nav.style.top = '0'; // Lo coloca en la parte superior
    nav.style.bottom = ''; // Limpia el estilo bottom
    nav.classList.add('sticky-navbar');
  } else {
    // Cuando el usuario está haciendo scroll pero aún no llega al sticky
    nav.style.position = 'absolute'; // Deja que el nav se mueva con el contenido
    nav.style.top = ''; // Limpia el estilo superior
    nav.style.bottom = '0'; // Lo mantiene pegado al contenido
    nav.classList.remove('sticky-navbar');
  }
});