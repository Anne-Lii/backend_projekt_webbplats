//code written by Anne-Lii Hansen VT 2024
"use strict";
const foodUrl = "https://backend-projekt-api-2zmb.onrender.com/api/foods";
const drinkUrl = "https://backend-projekt-api-2zmb.onrender.com/api/drink";
document.addEventListener("DOMContentLoaded", ()=>{
    //Link to show and edit food
    document.getElementById("link_edit_food").addEventListener("click", function(event) {
        event.preventDefault();
        fetchItems(foodUrl, "food");
    });
    //Link to show and edit drinks
    document.getElementById("link_edit_drinks").addEventListener("click", function(event) {
        event.preventDefault();
        fetchItems(drinkUrl, "drink");
    });
    function fetchItems(url, type) {
        fetch(url).then((response)=>response.json()).then((data)=>{
            // Sortera data enligt kategori
            const categories = [
                "VITT VIN",
                "R\xd6TT VIN",
                "ROS\xc9",
                "CHAMPAGNE",
                "DRINKAR",
                "\xd6L",
                "ALKOHOLFRITT"
            ];
            const itemsByCategory = {};
            // Skapa en tom lista för varje kategori
            categories.forEach((category)=>{
                itemsByCategory[category] = [];
            });
            // Sortera varje dryck i sin respektive kategori
            data.forEach((item)=>{
                if (categories.includes(item.category.toUpperCase())) itemsByCategory[item.category.toUpperCase()].push(item);
            });
            // Rita ut varje kategori
            categories.forEach((category)=>{
                drawItems(itemsByCategory[category], `${type}_${category.replace(" ", "_")}Table`);
            });
        }).catch((error)=>{
            console.error(`Error fetching ${type} items:`, error);
        });
    }
    function drawItems(items, tableId) {
        const table = document.getElementById(tableId);
        const tableBody = table.getElementsByTagName("tbody")[0];
        tableBody.innerHTML = "";
        items.forEach((item)=>{
            const row = tableBody.insertRow();
            const cellCategory = row.insertCell(0);
            const cellName = row.insertCell(1);
            const cellDescription = row.insertCell(2);
            const cellPrice = row.insertCell(3);
            const cellEdit = row.insertCell(4);
            const cellDelete = row.insertCell(5);
            cellCategory.textContent = item.category;
            cellName.textContent = item.food || item.drink;
            cellDescription.textContent = item.description;
            cellPrice.textContent = item.price;
            const editButton = document.createElement("button");
            editButton.className = "btn btn-edit";
            editButton.onclick = ()=>editItem(item.id, item.category);
            cellEdit.appendChild(editButton);
            const deleteButton = document.createElement("button");
            deleteButton.className = "btn btn-delete";
            deleteButton.onclick = ()=>deleteItem(item.id, item.category);
            cellDelete.appendChild(deleteButton);
        });
        // Visa tabellen efter att den har fyllts
        table.style.display = "table";
    }
    function editItem(id) {
        // Implement edit food item functionality
        console.log("Edit food item:", id);
    }
    function deleteItem(id) {
        // Implement delete food item functionality
        console.log("Delete food item:", id);
    }
});

//# sourceMappingURL=admin.882a59c0.js.map
