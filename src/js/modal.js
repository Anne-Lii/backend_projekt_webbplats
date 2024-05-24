// Get the modal
const modal = document.getElementById("updateModal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Function to show the modal and fill in existing data
function showModal(item) {
  document.getElementById("name").value = item.food || item.drinkname;
  document.getElementById("description").value = item.description;
  document.getElementById("price").value = item.price;
  document.getElementById("category").value = item.category.toLowerCase();

  modal.style.display = "block";
}

// Attach showModal to the edit button
function editItem(id, category) {
  const item = // get item by id and category
  showModal(item);
}
