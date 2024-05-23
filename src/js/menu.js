//code written by Anne-Lii Hansen VT 2024
"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const url = "https://backend-projekt-api-2zmb.onrender.com/api/foods";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayMenu(data);           
        })
        .catch(error => console.error("Ett fel uppstod när menyn skulle hämtas", error));


    function displayMenu(menuItems) {
        const smallDishesDiv = document.getElementById('smårätter');
        const mainCoursesDiv = document.getElementById('varmrätt');
        const dessertDiv = document.getElementById('dessert');
        const drinksDiv = document.getElementById('drinks');

        menuItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
            <h4>${item.food}</h4>
            <p>${item.description}</p>
            <p>Pris: ${item.price} kr</p>
        `;

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