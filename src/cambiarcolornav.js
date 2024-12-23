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