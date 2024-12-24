// script.js

document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.getElementById("nav");
  
    // Calcula el punto en el que el `nav` debe fijarse
    const navOffsetTop = navBar.offsetTop;
  
    window.addEventListener("scroll", () => {
      // Si el usuario ha hecho scroll más allá de la posición original del `nav`
      if (window.scrollY >= navOffsetTop) {
        navBar.classList.add("sticky");
      } else {
        navBar.classList.remove("sticky");
      }
    });
  });
  