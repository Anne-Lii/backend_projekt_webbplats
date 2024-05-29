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
        switch (category.toLowerCase()) {
            case "smårätter":
                return "smallDishesTable";
            case "varmrätt":
                return "mainCoursesTable";
            case "dessert":
                return "dessertTable";
            case "white":
                return "whiteTable";
            case "red":
                return "redTable";
            case "rose":
                return "roseTable";
            case "champagne":
                return "champagneTable";
            case "drink":
                return "drinkTable";
            case "beer":
                return "beerTable";
            case "alcoholfree":
                return "alcoholfreeTable";
            default:
                return "";
        }
    }
    

    async function fetchDrinkItemsAndDraw(category) {
        try {
            const drinkItems = await fetchItems(drinkUrl);
            // Filtera dryckesobjekten baserat på kategori
            const filteredDrinkItems = drinkItems.filter(item => item.category.toLowerCase() === category.toLowerCase());
            drawItems(filteredDrinkItems, getTableIdFromCategory(category));
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
    const updateModal = document.getElementById("updateModal");
    const foodModal = document.getElementById("addFoodModal");
    const drinkModal = document.getElementById("addDrinkModal");

    // Get the <span> element that closes the modal
    const closeButtons = document.getElementsByClassName("close");

    // Add an event listener to each <span> to close the corresponding modal
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function () {
            updateModal.style.display = "none";
            foodModal.style.display = "none";
            drinkModal.style.display = "none";
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == updateModal) {
            updateModal.style.display = "none";
        } else if (event.target == foodModal) {
            foodModal.style.display = "none";
        } else if (event.target == drinkModal) {
            drinkModal.style.display = "none";
        }
    }

    // Button to add new food item
    document.getElementById('addFoodButton').addEventListener('click', () => {
        isAddingNew = true;
        showFoodModal({ category: '', food: '', description: '', price: '' }); // Set modal for adding new food
    });

    // Button to add new drink item
    document.getElementById('addDrinkButton').addEventListener('click', () => {
        isAddingNew = true;
        showDrinkModal({ category: '', drinkname: '', description: '', price: '' }); // Set modal for adding new drink
    });


    function showModal(item) {
        currentItem = item; // Store the current item being edited
        document.getElementById("name").value = item ? (item.food || item.drinkname) : '';
        document.getElementById("description").value = item ? item.description : '';
        document.getElementById("price").value = item ? item.price : '';
        document.getElementById("category").value = item ? item.category.toLowerCase() : '';

        // Set the text of the submit button based on whether we're adding or updating an item
        const submitBtn = document.getElementById("submitBtn");

        // Add event listener to update isAddingNew flag when submitting
        submitBtn.addEventListener("click", function () {
            isAddingNew = false; // Change the value to false when updating
        });

        updateModal.style.display = "block";
    }

    function showFoodModal(item) {
        currentItem = item; // Store the current item being edited
        document.getElementById("foodname").value = item ? (item.food) : '';
        document.getElementById("fooddescription").value = item ? item.description : '';
        document.getElementById("foodprice").value = item ? item.price : '';
        document.getElementById("foodcategory").value = item ? item.category : '';

        // Set the text of the submit button based on whether we're adding or updating an item
        const addFoodSubmitBtn = document.getElementById("addFoodSubmitBtn");

        // Add event listener to update isAddingNew flag when submitting
        addFoodSubmitBtn.addEventListener("click", async function () {
            isAddingNew = true; // Change the value to false when updating
            foodModal.style.display = "none"; // Hide the modal after adding
        });

        foodModal.style.display = "block";
    }

    function showDrinkModal(item) {
        currentItem = item; // Store the current item being edited
        document.getElementById("drinkname").value = item ? (item.drinkname) : '';
        document.getElementById("drinkdescription").value = item ? item.description : '';
        document.getElementById("drinkprice").value = item ? item.price : '';
        document.getElementById("drinkcategory").value = item ? item.category : '';

        // Set the text of the submit button based on whether we're adding or updating an item
        const addDrinkSubmitBtn = document.getElementById("addDrinkSubmitBtn");

        // Add event listener to update isAddingNew flag when submitting
        addDrinkSubmitBtn.addEventListener("click", function () {
            isAddingNew = true; // Change the value to false when updating
            drinkModal.style.display = "none"; // Hide the modal after adding
        });

        drinkModal.style.display = "block";
    }

    // Händelselyssnare för att lägga till ny matpost
    document.getElementById('foodForm').addEventListener('submit', async function (event) {
        event.preventDefault();

        // get values from foodForm
        const foodItem = {
            category: document.getElementById('foodcategory').value,
            food: document.getElementById('foodname').value.toUpperCase(),
            description: document.getElementById('fooddescription').value,
            price: document.getElementById('foodprice').value
        };


        try {
            const response = await fetch(foodUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(foodItem)
            });

            const data = await response.json();
            console.log('New food item added:', data);


        } catch (error) {
            console.error('Error adding new food item:', error);
        }

        const selectedCategory = document.getElementById("foodcategory").value.toLowerCase(); // Hämta vald kategori och gör om den till gemener
        fetchFoodItemsAndDraw(selectedCategory);//update table
    });

    // Händelselyssnare för att lägga till ny dryckspost
    document.getElementById('drinkForm').addEventListener('submit', async function (event) {
        event.preventDefault();

        // get values from drinkForm
        const drinkItem = {
            category: document.getElementById('drinkcategory').value,
            drinkname: document.getElementById('drinkname').value.toUpperCase(),
            description: document.getElementById('drinkdescription').value,
            price: document.getElementById('drinkprice').value
        };

        // Skicka POST-anrop till dryck-API för att lägga till ny dryckspost
        // Använd rätt API-URL för att lägga till drycksposten
        try {
            const response = await fetch(drinkUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(drinkItem)
            });

            const data = await response.json();
            console.log('New drink item added:', data);

            // Uppdatera dryckbordet eller gör någon annan åtgärd efter att ha lagt till drycksposten
        } catch (error) {
            console.error('Error adding new drink item:', error);
        }

        const selectedCategory = document.getElementById("drinkcategory").value.toLowerCase(); // Hämta vald kategori och gör om den till gemener
        fetchDrinkItemsAndDraw(selectedCategory);//update table
    });



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
            const response = await fetch(`${apiUrl}/${currentItem._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedItem)
            });

            if (!response.ok) {
                throw new Error(isAddingNew ? 'Failed to add new item' : 'Failed to update item');
            }

            const result = await response.json();
            console.log(result);

            // Refresh the list of items or update the table directly
            if (currentItem.food || updatedItem.food) {
                fetchFoodItemsAndDraw(currentItem.category);
            } else {
                fetchDrinkItemsAndDraw(currentItem.category);
            }

            updateModal.style.display = "none";

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

    /*
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
*/

});
