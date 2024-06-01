//code written by Anne-Lii Hansen VT 2024
"use strict"

document.addEventListener("DOMContentLoaded", () => {

    /* Burgermenu for smaller screens than 1000px */
    let menuVisible = true; // Initialize menu as visible

     // Function to handle resizing of the window
     function handleResize() {
        const navMenu = document.getElementById("nav-menu");

        // If window width is greater than or equal to 1000px, display the horizontal menu
        if (window.innerWidth >= 1000) {
            navMenu.style.display = "block";
            menuVisible = true;
        } else {
            navMenu.style.display = "none";
            menuVisible = false;
        }
    }

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Event listener for smooth scroll when window scroll
    window.addEventListener("scroll", function () {
        let nav = document.querySelector('nav');
        // Add or remove class based on scroll position to change appearance of navigation
        if (this.window.scrollY > 0) {
            nav.classList.add("nav-scroll");
        } else {
            nav.classList.remove('nav-scrolled'); // set to 'nav-scroll' instead of 'nav-scrolled'
        }
    });

    // Event listener for opening menu
    document.getElementById("open-menu").addEventListener("click", () => {

        const navMenu = document.getElementById("nav-menu");

        // Toggle menu visibility
        if (!menuVisible) {
            navMenu.style.display = "block";
            menuVisible = true;
        } else {
            navMenu.style.display = "none";
            menuVisible = false;
        }
    });

    // Event listener for closing menu
    document.getElementById("close-menu").addEventListener("click", () => {
        const navMenu = document.getElementById("nav-menu");
        // Close menu only if window width is less than 1000px
        if (window.innerWidth < 1000) {
            if (menuVisible) {
                navMenu.style.display = "none";
                menuVisible = false;
            }
        }
    });

    handleResize(); // Call handleResize initially to set menu display on page load



});
