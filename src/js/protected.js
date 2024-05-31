//code written by Anne-Lii Hansen VT 2024
"use strict";

window.onload = init;

// Check if a JWT token exists in local storage. If not, redirect to the login page.
async function init() {

    const jwtToken = localStorage.getItem("token"); // Get JWT token from local storage

    // If no token is found, redirect to login page
    if (!jwtToken) {
        window.location.href = "login.html"
    }
};

const logoutBtn = document.getElementById("logoutBtn");

// Event listener for click on logout button 
logoutBtn.addEventListener("click", () => {

    // Redirect to index page
    window.location.href = "index.html";
    // Remove JWT token from local storage
    localStorage.removeItem("token");

});