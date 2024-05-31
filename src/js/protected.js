//code written by Anne-Lii Hansen VT 2024
"use strict";

window.onload = init;

//check if token exists then send to protected route, if not redirect to login.html
async function init() {

    const jwtToken = localStorage.getItem("token");
    if(!jwtToken) {
        window.location.href="login.html"
    }
};

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

    window.location.href = "index.html";
    localStorage.removeItem("token");

});