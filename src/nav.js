document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    var nav = document.getElementById('nav');
    var scrollTop = window.scrollY || document.documentElement.scrollTop; // Scroll actual
    var navInitialPosition = nav.offsetTop; // Detecta la posición inicial del nav

    var landing = document.getElementById('landing'); // Selecciona el elemento con ID "landing"

    if (landing) {
      var landingHeight = landing.offsetHeight; // Obtiene la altura del elemento
      var offsetNavbar = landingHeight - 100; // Resta 100px a landingHeight

      //console.log('Altura de landing:', landingHeight); // Imprime la altura de landing
      //console.log('Offset ajustado:', offsetNavbar); // Imprime el offset ajustado
      //console.log('Scroll actual:', scrollTop); // Imprime la posición del scroll actual

      if (scrollTop <= offsetNavbar) {
        // Cuando el usuario está por debajo del offset ajustado
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
      }
    } else {
      console.error('El elemento con ID "landing" no existe.');
    }
  });
});


window.addEventListener('scroll', function() {
  var contactoSection = document.getElementById('contacto');
  var nav = document.getElementById('nav');
  var logoImg = document.getElementById('logo-img');
  var navLinks = document.querySelectorAll('.nav-link');
  var contactoPosition = contactoSection.offsetTop;
  var scrollPosition = window.scrollY;

  // Cambiar color y logo cuando se llega a la sección de contacto
  if (scrollPosition >= contactoPosition - nav.offsetHeight) {
      // Cambiar la imagen del logo
      logoImg.src = '/src/images/logo/adhr_black.svg'; // Cambia esto por la ruta de tu nueva imagen

      // Cambiar el color del texto de los enlaces
      navLinks.forEach(function(link) {
          link.style.setProperty('color', 'black'); // Cambiar color del texto a negro
      });

  } else {
      // Restaurar la imagen original y el color cuando el usuario se desplaza hacia arriba
      logoImg.src = '/src/images/logo/adhr_white.svg'; // Ruta de la imagen original

      // Restaurar el color del texto a blanco
      navLinks.forEach(function(link) {
          link.style.setProperty('color', 'white'); // Restaurar color blanco del texto
      });
  }
});

// Obtener el enlace y las secciones
const logoLink = document.getElementById('logo-link');
const sections = document.querySelectorAll('section'); // Asegúrate de que las secciones tengan un <section> con un id o clase.

// Función para detectar la sección actual
const updateHrefBasedOnScroll = () => {
    let currentSection = null;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section;
        }
    });

    // Cambiar el href del logo según la sección actual
    if (currentSection) {
        if (currentSection.id === 'landing') {
            logoLink.href = '#proyectos';
        } else if (currentSection.id === 'proyectos') {
            logoLink.href = '#landing';
        } else if (currentSection.id === 'contacto') {
            logoLink.href = '#proyectos';
        } else {
            logoLink.href = '#proyectos'; // Valor por defecto
        }
    }
};

// Escuchar el evento de scroll
window.addEventListener('scroll', updateHrefBasedOnScroll);

// Llamar la función inicialmente para establecer el href correcto
updateHrefBasedOnScroll();