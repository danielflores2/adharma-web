window.addEventListener('scroll', function() {
  var nav = document.getElementById('nav');
  var rect = nav.getBoundingClientRect();

  if (rect.top <= 0) {  // Cuando la parte superior del nav llegue al top de la pantalla
      nav.classList.add('sticky-navbar');
  } else {
      nav.classList.remove('sticky-navbar');
  }
});