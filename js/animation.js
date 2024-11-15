document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll('.fade-in');
  
    function handleScroll() {
      animatedElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
  
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
  
    // Ejecutar una vez al cargar
    handleScroll();
  });
  