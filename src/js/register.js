"use strict"

document.addEventListener('DOMContentLoaded', function () {
   
    const regForm = document.getElementById('regForm');

    regForm.addEventListener('submit', async function (event) {
        event.preventDefault(); // Förhindra att formuläret skickas normalt

        console.log("Klickat på registrera");

        // Hämta användarnamn och lösenord från formuläret
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log("Användarinformation:", { username, password });

        try {
            // Anropa register-funktionen från user.js för att registrera användaren
            const newUser = await registerUser(username, password);
            console.log("Registrering lyckades:", newUser);
           
        } catch (error) {
            console.error("Registrering misslyckades:", error);
           
        }
    });
});
