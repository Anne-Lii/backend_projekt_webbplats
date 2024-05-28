//code written by Anne-Lii Hansen VT 2024
"use strict"

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded event fired");

    const url = "https://backend-projekt-api-2zmb.onrender.com/api/drink";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayDrinks(data);
           
        })
        .catch(error => console.error("Ett fel uppstod när dryck skulle hämtas", error));


    function displayDrinks(drinkItems) {
        const whiteDiv = document.getElementById('white');
        const redDiv = document.getElementById('red');
        const roseDiv = document.getElementById('rose');
        const champagneDiv = document.getElementById('champagne');
        const drinksDiv = document.getElementById('drinks');
        const beerDiv = document.getElementById('beer');
        const alcoholfreeDiv = document.getElementById('alcoholfree');

        drinkItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
            <h4>${item.drinkname}</h4>
            <p>${item.description}</p>
            <p>Pris: ${item.price} kr</p>
        `;

            switch (item.category) {
                case 'white':
                    whiteDiv.appendChild(menuItem);
                    break;
                case 'red':
                    redDiv.appendChild(menuItem);
                    break;
                case 'rose':
                    roseDiv.appendChild(menuItem);
                    break;
                case 'champagne':
                    champagneDiv.appendChild(menuItem);
                    break;
                case 'drink':
                    drinksDiv.appendChild(menuItem);
                    break;
                case 'beer':
                    beerDiv.appendChild(menuItem);
                    break;
                case 'alcoholfree':
                    alcoholfreeDiv.appendChild(menuItem);
                    break;
                default:
                    console.error('Ogiltig kategori:', item.category);
                    break;
            }
        });
    }

});