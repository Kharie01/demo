document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

   
    function setActiveLink(link) {
        navLinks.forEach(nav => nav.classList.remove("active")); 
        link.classList.add("active"); 
        localStorage.setItem("activeNav", link.getAttribute("href"));
    }

    
    const storedActiveNav = localStorage.getItem("activeNav");
    if (storedActiveNav) {
        const activeLink = document.querySelector(`.nav-link[href='${storedActiveNav}']`);
        if (activeLink) activeLink.classList.add("active");
    }

    
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            setActiveLink(this);
        });
    });
});
