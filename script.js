const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pageInput = document.querySelector("#pages");
const addButton = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

addButton.addEventListener("click", function (e) {
  e.preventDefault();

  // Create a new row for the book
  const bookRow = document.createElement("tr");

  // Create cells for book details
  const titleCell = document.createElement("td");
  titleCell.textContent = titleInput.value;
  bookRow.appendChild(titleCell);

  const authorCell = document.createElement("td");
  authorCell.textContent = authorInput.value;
  bookRow.appendChild(authorCell);

  const pageCell = document.createElement("td");
  pageCell.textContent = pageInput.value;
  bookRow.appendChild(pageCell);

  // Create a cell for the remove button
  const removeCell = document.createElement("td");
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("btn", "btn-danger");
  removeButton.addEventListener("click", function () {
    bookList.removeChild(bookRow); // Remove the book row from the table
  });
  removeCell.appendChild(removeButton);
  bookRow.appendChild(removeCell);

  // Append the book row to the table
  bookList.appendChild(bookRow);

  // Clear input fields after adding the book
  titleInput.value = "";
  authorInput.value = "";
  pageInput.value = "";
});
