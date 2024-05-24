//code written by Anne-Lii Hansen VT 2024
"use strict";

const foodUrl = "https://backend-projekt-api-2zmb.onrender.com/api/foods";
const drinkUrl = "https://backend-projekt-api-2zmb.onrender.com/api/drink";

let currentItem = null;//stores the current item beeing edited global

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

        // Clear the existing rows in the table body
        tableBody.innerHTML = "";

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

    function clearFoodTables() {
        document.getElementById('smallDishesTable').getElementsByTagName('tbody')[0].innerHTML = "";
        document.getElementById('mainCoursesTable').getElementsByTagName('tbody')[0].innerHTML = "";
        document.getElementById('dessertTable').getElementsByTagName('tbody')[0].innerHTML = "";
    }

    function clearDrinkTables() {
        document.getElementById('whiteTable').getElementsByTagName('tbody')[0].innerHTML = "";
        document.getElementById('redTable').getElementsByTagName('tbody')[0].innerHTML = "";
        document.getElementById('roseTable').getElementsByTagName('tbody')[0].innerHTML = "";
        document.getElementById('champagneTable').getElementsByTagName('tbody')[0].innerHTML = "";
        document.getElementById('drinkTable').getElementsByTagName('tbody')[0].innerHTML = "";
        document.getElementById('beerTable').getElementsByTagName('tbody')[0].innerHTML = "";
        document.getElementById('alcoholfreeTable').getElementsByTagName('tbody')[0].innerHTML = "";
    }


    // Get the modal
    const modal = document.getElementById("updateModal");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Function to show the modal and fill in existing data
    function showModal(item) {
        currentItem = item; // Store the current item being edited
        document.getElementById("name").value = item.food || item.drinkname;
        document.getElementById("description").value = item.description;
        document.getElementById("price").value = item.price;
        document.getElementById("category").value = item.category.toLowerCase();

        modal.style.display = "block";
    }

    //function to handle update of items from form
    document.getElementById("updateForm").addEventListener("submit", async function (event){
        event.preventDefault();

        const updatedItem = {
            food: currentItem.food ? document.getElementById("name").value : undefined,
            drinkname: currentItem.drinkname ? document.getElementById("name").value : undefined,
            description: document.getElementById("description").value,
            price: document.getElementById("price").value,
            category: document.getElementById("category").value
        };

        const apiUrl = currentItem.food ? foodUrl : drinkUrl;

               try {
            const response = await fetch(`${apiUrl}/${currentItem._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedItem)
            });

            if (!response.ok) {
                throw new Error('Failed to update item');
            }

            const result = await response.json();
            console.log('Updated item:', result);

            // Refresh the list of items or update the table directly
            if (currentItem.food) {
                fetchFoodItemsAndDraw(currentItem.category);
            } else {
                fetchDrinkItemsAndDraw(currentItem.category);
            }

            modal.style.display = "none";

        } catch (error) {
            console.error('Error updating item:', error);
        }

    });
    
    function deleteItem(id, category, type) {
        const apiUrl = type === 'food' ? foodUrl : drinkUrl;

        fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete item');
            }
            return response.json();
        })
        .then(result => {
            console.log('Deleted item:', result);

            // Refresh the list of items or update the table directly
            if (type === 'food') {
                fetchFoodItemsAndDraw(category);
            } else {
                fetchDrinkItemsAndDraw(category);
            }
        })
        .catch(error => {
            console.error('Error deleting item:', error);
        });
    }
});
