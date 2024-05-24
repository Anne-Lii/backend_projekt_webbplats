//code written by Anne-Lii Hansen VT 2024
"use strict";

const foodUrl = "https://backend-projekt-api-2zmb.onrender.com/api/foods";
const drinkUrl = "https://backend-projekt-api-2zmb.onrender.com/api/drink";

let currentItem = null;//stores the current item beeing edited global
let isAddingNew = false; //flag for knowing if modal adds new or updates

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
            editButton.onclick = () => {
                isAddingNew = false; // Set to false when editing
                showModal(item);
            };
            cellEdit.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.setAttribute('data-id', item._id);
            deleteButton.className = 'btn btn-delete';
            deleteButton.onclick = () => deleteItem(deleteButton.getAttribute('data-id'), item.category, item.food ? 'food' : 'drink'); // Använd ID:et från data-attributet i deleteItem-funktionen
            cellDelete.appendChild(deleteButton);

        });

        // Show the table after it has been filled
        table.style.display = 'table';
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


    // Button to add new foodItems
    document.getElementById('addFoodButton').addEventListener('click', () => {
        isAddingNew = true;
        showModal({ category: 'smårätter', food: '', description: '', price: '' }); // Förinställ modal för ny mat
    });

    // Button to add new drinkitems
    document.getElementById('addDrinkButton').addEventListener('click', () => {
        isAddingNew = true;
        showModal({ category: 'white', drinkname: '', description: '', price: '' }); // Förinställ modal för ny dryck
    });

    function showModal(item) {
        currentItem = item; // Store the current item being edited
        document.getElementById("name").value = item ? (item.food || item.drinkname) : '';
        document.getElementById("description").value = item ? item.description : '';
        document.getElementById("price").value = item ? item.price : '';
        document.getElementById("category").value = item ? item.category.toLowerCase() : '';

        // Set the text of the submit button based on whether we're adding or updating an item
        const submitBtn = document.getElementById("submitBtn");
        submitBtn.textContent = isAddingNew ? "Lägg till" : "Uppdatera";

        // Add event listener to update isAddingNew flag when submitting
        submitBtn.addEventListener("click", function () {
            isAddingNew = false; // Change the value to false when updating
        });

        modal.style.display = "block";
    }




    //function to handle update of items from form
    document.getElementById("updateForm").addEventListener("submit", async function (event) {
        event.preventDefault();

        const updatedItem = {
            food: currentItem.food ? document.getElementById("name").value.toUpperCase() : undefined,
            drinkname: currentItem.drinkname ? document.getElementById("name").value.toUpperCase() : undefined,
            description: document.getElementById("description").value,
            price: document.getElementById("price").value,
            category: document.getElementById("category").value
        };

        const apiUrl = currentItem.food ? foodUrl : drinkUrl;

        try {
            let response;
            if (isAddingNew) {
                response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedItem)
                });
            } else {
                response = await fetch(`${apiUrl}/${currentItem._id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedItem)
                });
            }

            if (!response.ok) {
                throw new Error(isAddingNew ? 'Failed to add new item' : 'Failed to update item');
            }

            const result = await response.json();
            console.log(isAddingNew ? 'Added new item:' : 'Updated item:', result);

            // Refresh the list of items or update the table directly
            if (currentItem.food || isAddingNew && updatedItem.food) {
                fetchFoodItemsAndDraw(currentItem.category);
            } else {
                fetchDrinkItemsAndDraw(currentItem.category);
            }

            modal.style.display = "none";
            isAddingNew = false;

        } catch (error) {
            console.error('Error updating or adding item:', error);
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

    //function to register a new admin
    document.getElementById('registrationSection').addEventListener('click', function (event) {
        event.preventDefault();

        //change REGISTER display:none to block
        document.getElementById('registrationSection').style.display = 'block';
        //change FOOD display:block to none
        document.getElementById('foodSection').style.display = 'none';
        //change DRINK display:block to none
        document.getElementById('drinkSection').style.display = 'none';

    });


});
