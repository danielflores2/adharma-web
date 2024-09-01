function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true, // Asegúrate de que el smooth scroll esté habilitado si lo necesitas
    getDirection: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (arguments.length) {
        locoScroll.scrollTo(value, { duration: 0, disableLerp: true }); // Cambia el scroll instantáneamente
      } else {
        return locoScroll.scroll.instance.scroll.y;
      }
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: document.querySelector("[data-scroll-container]").style.transform
      ? "transform"
      : "fixed"
  });
  // Refrescar ScrollTrigger después de que LocomotiveScroll actualice
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  // Verificar el scroll para cambiar el fondo y el logo
  locoScroll.on("scroll", () => {
    checkScroll();
    console.log("Scroll Y:", locoScroll.scroll.instance.scroll.y);

  });

  function checkScroll() {
    const changePoint = window.innerHeight - 50;

    const logo_adhr = document.querySelectorAll('#logo-img');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('#nav-part2 .nav-link');

    if (locoScroll.scroll.instance.scroll.y > changePoint) {
      nav.classList.add('sticky-navbar');

      document.body.classList.add('black-bg');
      logo_adhr.forEach(img => {
        if (img.src !== 'src/images/logo/adhr_white.svg') {
          img.src = 'src/images/logo/adhr_white.svg';
        }
      });
      navLinks.forEach(link => {
        link.classList.add('text-light');
      });
    } else {
      document.body.classList.remove('black-bg');
      nav.classList.remove('sticky-navbar');

      logo_adhr.forEach(img => {
        if (img.src !== 'src/images/logo/adhr_black.svg') {
          img.src = 'src/images/logo/adhr_black.svg';
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('text-light');
      });
    }
  }

  // Animaciones GSAP
  gsap.timeline({
    scrollTrigger: {
      trigger: ".h1",
      scroller: "[data-scroll-container]",
      start: "top 20%",
      end: "top 0",
      scrub: 3
    }
  })
    .to(".adhrHead h1", { x: -200, duration: 1 })
    .to(".adhrHead h2", { x: 200, duration: 1 }, "<")
    .to("#videoHome", { width: "100%", duration: 1 }, "<");
}

document.addEventListener("DOMContentLoaded", init);
