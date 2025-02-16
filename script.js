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

function navbar() {
    const navbar = document.querySelector('.navbar');
    const navbutton = document.querySelector('.navbutton');
    const navbuttonclose = document.querySelector('.navbuttonclose');

    navbar.classList.remove('hidden'); // Show navbar
    navbar.classList.add('flex'); 
    navbutton.classList.add('hidden'); // Hide menu button
    navbuttonclose.classList.remove('hidden'); // Show close button
}

function navbarclose() {
    const navbar = document.querySelector('.navbar');
    const navbuttonclose = document.querySelector('.navbuttonclose');
    const navbutton = document.querySelector('.navbutton');

    navbar.classList.add('hidden'); // Hide navbar
    navbar.classList.remove('flex'); 
    navbuttonclose.classList.add('hidden'); // Hide close button
    navbutton.classList.remove('hidden'); // Show menu button
}

// Hide mobile menu button on larger screens
window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        document.querySelector('.navbutton').classList.add('hidden'); 
        document.querySelector('.navbuttonclose').classList.add('hidden'); 
        document.querySelector('.navbar').classList.remove('hidden'); // Ensure navbar stays visible
    } else {
        document.querySelector('.navbutton').classList.remove('hidden'); 
        document.querySelector('.navbar').classList.add('hidden'); // Hide menu again if on small screen
    }
});