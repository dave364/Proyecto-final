document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('main section');

    // Funcion para actualizar el enlace activo
    function updateActiveLink() {
        const sections = document.querySelectorAll("section[id]");
        const scrollY = window.scrollY;

        sections.forEach((current) => {
            const isVisible = window.getComputedStyle(current).visibility !== "hidden";
            if (isVisible) {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 60;  // Ajustar para la altura de la navbar
                const sectionId = current.getAttribute("id");

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector(".navbar a[href*=" + sectionId + "]")
                        .classList.add("active");
                } else {
                    document.querySelector(".navbar a[href*=" + sectionId + "]")
                        .classList.remove("active");
                }
            }
        });
    }

    // Evento de scroll para actualizar los enlaces activos
    window.addEventListener("scroll", updateActiveLink);

    // Click en el navbar
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();  // Prevenir el comportamiento de enlace por defecto

            // Obtener el id del enlace que se ha clickeado
            const targetId = this.getAttribute('href').substring(1);  // Eliminar el "#" del href
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Realizar scroll suave a la sección
                window.scrollTo({
                    top: targetSection.offsetTop - 80,  // Ajuste para la navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Llamar a la función de activación de enlace
    updateActiveLink();
});
