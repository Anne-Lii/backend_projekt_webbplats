//code written by Anne-Lii Hansen VT 2024
"use strict"

document.addEventListener("DOMContentLoaded", () => {


    const loginForm = document.getElementById("loginForm");//get form for login
    const loginMessage = document.getElementById("loginMessage");
    const loadingMessage = document.getElementById("loadingMessage");

    //URL
    const url = "https://backend-projekt-api-2zmb.onrender.com/api";

    // Add focus event listeners to input fields to clear loginMessage
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    //reset loginmessage when clicking on input
    if (usernameInput && passwordInput) {
        usernameInput.addEventListener("focus", () => {
            loginMessage.textContent = "";
        });
        passwordInput.addEventListener("focus", () => {
            loginMessage.textContent = "";
        });
    }

    //start 'Loading...' animation when login
    let loadingInterval;
    function startLoadingAnimation() {
        let dotCount = 0;
        loadingInterval = setInterval(() => {
            let dots = ".".repeat(dotCount % 4)// Cycle through 0 to 3 dots
            loadingMessage.innerText = `Loading${dots}`;
            dotCount++;
        }, 500);
    }

    //stop Loading... animation
    function stopLoadingAnimation() {
        clearInterval(loadingInterval);
        loadingMessage.innerText = ""; //clear loading message
    }

    //event submit loginForm
    if (loginForm) {
        loginForm.addEventListener("submit", async function (event) {
            event.preventDefault();//prevent standard form behavior

            loadingMessage.style.display = "none";//set to display none

            //Text "Loading" shows while awaiting fetch
            if (loadingMessage) {

                loadingMessage.style.display = "block";
                startLoadingAnimation();// Start loading message
            }

            // Get username and password from inlogForm
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            try {

                //send inlog to API
                const response = await fetch(url + "/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                });

                // Check if inlog was succesful
                if (response.ok) {
                    const data = await response.json();
                    const token = data.token;

                    // save token in localStorage
                    localStorage.setItem("token", token);

                    //save username in localstorage
                    localStorage.setItem("username", username);

                    //clear messages
                    loginMessage.innerHTML = "";
                    stopLoadingAnimation();// Stop loading message

                    // check if user is authenticated
                    const localtoken = localStorage.getItem("token");
                    if (!localtoken) {

                        //unvalid JTW message redirect to login
                        window.location.href = "login.html";

                    } else {
                        // Redirect user to admin protected route
                        window.location.href = "admin.html";
                    }

                } else {
                    const errorMessage = await response.json();
                    loginMessage.textContent = errorMessage.error || "Fel användarnamn eller lösenord!!";
                    stopLoadingAnimation();// Stop loading message
                }

            } catch (error) {
                console.error('Inloggningsfel:', error);
                loginMessage.textContent = 'Ett fel inträffade vid inloggningen. Försök igen senare.';
                stopLoadingAnimation(); // Stop loading message

            }

        });
    }
});
