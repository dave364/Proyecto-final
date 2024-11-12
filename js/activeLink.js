document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('main section');

    function updateActiveLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const isVisible = window.getComputedStyle(current).visibility !== "hidden";
        if (isVisible) {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 60;
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document
                    .querySelector(".navbar a[href*=" + sectionId + "]")
                    .classList.add("active");
            } else {
                document
                    .querySelector(".navbar a[href*=" + sectionId + "]")
                    .classList.remove("active");
            }
        }
    });
}

window.addEventListener("scroll", updateActiveLink);

});