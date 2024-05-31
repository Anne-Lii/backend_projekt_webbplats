//code written by Anne-Lii Hansen VT 2024
"use strict"

document.addEventListener("DOMContentLoaded", () => {

    //URL
    const url = "https://backend-projekt-api-2zmb.onrender.com/api/foods";

    // Fetch menu items from the API
    fetch(url)
        .then(response => response.json())// Convert response to JSON
        .then(data => {
            displayMenu(data); // Call displayMenu function with fetched data      
        })
        .catch(error => console.error("Ett fel uppstod när menyn skulle hämtas", error));

    // Function to display menu items 
    function displayMenu(menuItems) {

        // Get div elements where menu items will be displayed
        const smallDishesDiv = document.getElementById('smårätter');
        const mainCoursesDiv = document.getElementById('varmrätt');
        const dessertDiv = document.getElementById('dessert');
        const drinksDiv = document.getElementById('drinks');

        menuItems.forEach(item => { // Loop through each menu item
            // Create a div for each menu item
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');// Add class to the menu item div

            // Set inner HTML of the menu item div with item details
            menuItem.innerHTML = ` 
            <h4>${item.food}</h4>
            <p>${item.description}</p>
            <p>Pris: ${item.price} kr</p>
            `;
            
            // Append menu item div to the right category div based on item category
            switch (item.category) {
                case 'smårätter':
                    smallDishesDiv.appendChild(menuItem);
                    break;
                case 'varmrätt':
                    mainCoursesDiv.appendChild(menuItem);
                    break;
                case 'dessert':
                    dessertDiv.appendChild(menuItem);
                    break;
                case 'DRYCK':
                    drinksDiv.appendChild(menuItem);
                    break;
                default:
                    console.error('Ogiltig kategori:', item.category);
                    break;
            }
        });
    }

});