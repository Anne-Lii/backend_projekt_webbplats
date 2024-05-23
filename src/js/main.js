//code written by Anne-Lii Hansen VT 2024
"use strict"


document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("scroll", function() {
        let nav = document.querySelector('nav');
        if(this.window.scrollY > 0) {
            nav.classList.add("nav-scroll");
        } else {
            nav.classList.remove('nav-scrolled');
        }
    })

});