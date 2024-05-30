"use strict"

const bookingsUrl = "https://backend-projekt-api-2zmb.onrender.com/api/bookings";

document.addEventListener('DOMContentLoaded', function () {

    // Add new booking   
    const bookingForm = document.getElementById('bookingForm');

    if(bookingForm) {
        bookingForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            console.log("klickat på booooka");

            // Check if all required fields have been filled
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            const guests = document.getElementById("guests").value;

            // Ensure modalFieldMessage is correctly defined before using it
            const modalFieldMessage = document.querySelector('.modalFieldMessage');

            if (!name || !email || !phone || !date || !time || !guests) {
                if (modalFieldMessage) {
                    modalFieldMessage.textContent = 'Alla fält måste fyllas i';
                    modalFieldMessage.style.display = 'block';
                }
                bookingForm.style.display = 'block';
                return; // Stop further execution if required fields are not filled
            } else {
                if (modalFieldMessage) {
                    modalFieldMessage.style.display = 'none';
                }
            }

            // Get values from bookingForm
            const newBooking = { name, email, phone, date, time, guests };

            try {
                const response = await fetch(bookingsUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newBooking)
                });

               
                console.log('Response:', response); // Log the entire response for debugging
                // Ensure the response is OK (status 200-299)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const responseData = await response.json();

                // Log the response data for debugging
                console.log('Response Data:', responseData);
            } catch (error) {
                console.error('Error adding new booking:', error);
            }
        });
    }
});
