//code written by Anne-Lii Hansen VT 2024
"use strict"

document.addEventListener("DOMContentLoaded", () => {


    const loginForm = document.getElementById("loginForm");//get form for login
    const loginMessage = document.getElementById("loginMessage");
    const loadingMessage = document.getElementById("loadingMessage");

    const url = "https://backend-projekt-api-2zmb.onrender.com/api";

    //event submit loginForm
    if (loginForm) {
        loginForm.addEventListener("submit", async function (event) {
            event.preventDefault();//prevent standard form behavior

            //Text "Loading" shows while awaiting fetch
            if (loadingMessage) {

                loadingMessage.innerText = "Loading";

                loadingMessage.innerText = "Loading.";
                setTimeout(() => {
                    loadingMessage.innerText = "Loading..";
                }, 500);
                setTimeout(() => {
                    loadingMessage.innerText = "Loading...";
                }, 1000);
            }


            // Get username and password from inlogForm
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            console.log(username);//----------------------------------------------TA BORT
          

            try {
                //send inlog to API
                const response = await fetch(url+ "/login", {
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
                    console.log(token);//----------------------------------------------TA BORT

                    // save token in localStorage
                    localStorage.setItem("token", token);

                    //save username in localstorage
                    localStorage.setItem("username", username);

                    //clear messages
                    loginMessage.innerHTML = "";
                    if (loadingMessage) loadingMessage.innerText = "";

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
                    loginMessage.textContent = errorMessage.error;
                }

            } catch (error) {
                console.error('Inloggningsfel:', error);
                loginMessage.textContent = 'Ett fel inträffade vid inloggningen. Försök igen senare.';
            }
        });
    }
});
