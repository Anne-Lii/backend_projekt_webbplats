//code written by Anne-Lii Hansen VT 2024
"use strict"

document.addEventListener("DOMContentLoaded", () => {

      /* Smooth scrolling to selected section */
      function smoothScroll(target) {
        const element = document.getElementById(target);
        element.scrollIntoView({
            behavior: "smooth"
        });
    }
    

    /* Burgermenu for smaller screens than 1000px */
    let menuVisible = true; // Initialize menu as visible

    function handleResize() {
        const navMenu = document.getElementById("nav-menu");
        if (window.innerWidth >= 1000) {
            navMenu.style.display = "block";
            menuVisible = true;
        }
    }

    window.addEventListener("resize", handleResize);

    window.addEventListener("scroll", function() {
        let nav = document.querySelector('nav');
        if (this.window.scrollY > 0) {
            nav.classList.add("nav-scroll");
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });

    document.getElementById("open-menu").addEventListener("click", () => {
        
        const navMenu = document.getElementById("nav-menu");
        if (!menuVisible) {
            navMenu.style.display = "block";
            menuVisible = true;
        } else {
            navMenu.style.display = "none";
            menuVisible = false;
        }
    });

    document.getElementById("close-menu").addEventListener("click", () => {
        const navMenu = document.getElementById("nav-menu");
        if (window.innerWidth < 1000) {
            if (menuVisible) {
                navMenu.style.display = "none";
                menuVisible = false;
            }
        }
    });

    handleResize(); // Call handleResize initially to set menu display on page load


  
});
