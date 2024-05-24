//code written by Anne-Lii Hansen VT 2024
"use strict";

const foodUrl = "https://backend-projekt-api-2zmb.onrender.com/api/foods";
const drinkUrl = "https://backend-projekt-api-2zmb.onrender.com/api/drink";

document.addEventListener("DOMContentLoaded", () => {

    // Link to show and edit food
    document.getElementById('link_edit_food').addEventListener('click', function (event) {
        event.preventDefault();
        fetchFoodItemsAndDraw("smårätter");
        fetchFoodItemsAndDraw("varmrätt");
        fetchFoodItemsAndDraw("dessert");

        //change FOOD display:none to block
        document.getElementById('foodSection').style.display = 'block';
        //change DRINK display:block to none
        document.getElementById('drinkSection').style.display = 'none';
    });

    // Link to show and edit drinks
    document.getElementById('link_edit_drinks').addEventListener('click', function (event) {
        event.preventDefault();
        fetchDrinkItemsAndDraw("white");
        fetchDrinkItemsAndDraw("red");
        fetchDrinkItemsAndDraw("rose");
        fetchDrinkItemsAndDraw("champagne");
        fetchDrinkItemsAndDraw("drink");
        fetchDrinkItemsAndDraw("beer");
        fetchDrinkItemsAndDraw("alcoholfree");

        //change FOOD display:block to none
        document.getElementById('foodSection').style.display = 'none';
        //change DRINK display:none to block
        document.getElementById('drinkSection').style.display = 'block';
    });

    async function fetchFoodItemsAndDraw(category) {

        try {
            const foodItems = await fetchItems(foodUrl); // Hämta alla matobjekt            
            const filteredFoodItems = foodItems.filter(item => item.category.toLowerCase() === category.toLowerCase());
            console.log(filteredFoodItems); //----------------------------------------------------------TA BORT!
            drawItems(filteredFoodItems, getTableIdFromCategory(category)); // Rita matobjekt i rätt tabell baserat på kategori
        } catch (error) {
            console.error('Error fetching food items:', error);
        }
    }

    function getTableIdFromCategory(category) {
        switch (category) {
            case "smårätter":
                return "smallDishesTable";
            case "varmrätt":
                return "mainCoursesTable";
            case "dessert":
                return "dessertTable";
            default:
                return "";
        }
    }

    async function fetchDrinkItemsAndDraw(type) {
        try {
            const drinkItems = await fetchItems(drinkUrl, type);
            // Filtera dryckesobjekten baserat på kategori
            const filteredDrinkItems = drinkItems.filter(item => item.category.toLowerCase() === type.toLowerCase());
            drawItems(filteredDrinkItems, `${type}Table`);
        } catch (error) {
            console.error('Error fetching drink items:', error);
        }
    }


    async function fetchItems(url, type) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${type} items`);
            }
            return response.json();
        } catch (error) {
            throw error;
        }
    }

    function drawItems(items, tableId) {
        const table = document.getElementById(tableId);
        if (!table) {
            console.error(`Table with id '${tableId}' not found.`);
            return;
        }
        const tableBody = table.getElementsByTagName('tbody')[0];
        if (!tableBody) {
            console.error(`Table body not found in table with id '${tableId}'.`);
            return;
        }

        items.forEach(item => {
            const row = tableBody.insertRow();
            const cellCategory = row.insertCell(0);
            const cellName = row.insertCell(1);
            const cellDescription = row.insertCell(2);
            const cellPrice = row.insertCell(3);
            const cellEdit = row.insertCell(4);
            const cellDelete = row.insertCell(5);

            cellCategory.textContent = item.category;
            cellName.textContent = item.food || item.drinkname;
            cellDescription.textContent = item.description;
            cellPrice.textContent = item.price;

            const editButton = document.createElement('button');
            editButton.className = 'btn btn-edit';
            editButton.textContent = 'Redigera';
            editButton.onclick = () => showModal(item);
            cellEdit.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-delete';
            deleteButton.onclick = () => deleteItem(item.id, item.category);
            cellDelete.appendChild(deleteButton);
        });

        // Show the table after it has been filled
        table.style.display = 'table';
    }


    function editItem(id) {
        // Implement edit food/drink item functionality
        console.log('Edit item:', id);
    }

    function deleteItem(id) {
        // Implement delete food/drink item functionality
        console.log('Delete item:', id);
    }

});
