//code written by Anne-Lii Hansen VT 2024
"use strict"
"use strict";

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
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Pris: ${item.price} kr</p>
        `;

            switch (item.category) {
                case 'SMÅRÄTTER':
                    smallDishesDiv.appendChild(menuItem);
                    break;
                case 'VARMRÄTTER':
                    mainCoursesDiv.appendChild(menuItem);
                    break;
                case 'DESSERT':
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