"use strict"

const bookingsUrl = "https://backend-projekt-api-2zmb.onrender.com/api/bookings";
const modalFieldMessage = document.querySelector('.modalFieldMessage');

document.addEventListener('DOMContentLoaded', function () {

    // Add new booking   
    const bookingForm = document.getElementById('bookingForm');
    const messageBooking = document.getElementById('messageBooking');

    if (bookingForm) {
        bookingForm.addEventListener('submit', async function (event) {
            event.preventDefault();
            // Check if all required fields have been filled
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            const guests = document.getElementById("guests").value;

            if (!name || !email || !phone || !date || !time || !guests) {
                messageBooking.textContent = 'Alla fält måste fyllas i';
                messageBooking.style.display = 'block';
                return; // Stoppa vidare utförande om nödvändiga fält inte är ifyllda
            } else {
                messageBooking.style.display = 'none';
            }

            // Get values from bookingForm
            const newBooking = { name, email, phone, date, time, guests };

            try {
                const response = await fetch(bookingsUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newBooking)
                });

                // Ensure the response is OK (status 200-299)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                await response.json();

                // Reset the form after successful submission
                bookingForm.reset();

                // Show success message
                if ( messageBooking) {
                
                    messageBooking.textContent = 'Din bokning har registrerats';
                    messageBooking.style.display = 'block';
                } 
            } catch (error) {
                console.error('Error adding new booking:', error);
            }
        });
    }

     // Add event listeners to input fields to reset message when clicked
     const inputFields = document.querySelectorAll('input');
     inputFields.forEach(input => {
         input.addEventListener('click', function () {
             messageBooking.textContent = ''; // Reset message
             messageBooking.style.display = 'none'; // Hide message
         });
     });
});
