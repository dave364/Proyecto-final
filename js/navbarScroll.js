document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
});

// Esperamos a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarTogglerIcon = document.getElementById('navbar-toggler-icon');

  // Añadimos un evento 'click' en todos los enlaces del navbar
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Verificamos si el menú de hamburguesa está abierto
      if (navbarCollapse.classList.contains('show')) {
        // Cerramos el menú de hamburguesa
        navbarToggler.click();
      }
    });
  });

  // Función para cambiar el icono a X cuando el navbar se abre
  navbarToggler.addEventListener('click', () => {
    navbarTogglerIcon.classList.toggle('open');
  });
});
