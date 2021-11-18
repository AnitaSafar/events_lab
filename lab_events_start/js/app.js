



document.addEventListener('DOMContentLoaded', () => {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleSubmit);

  const body = document.querySelector("body");
  body.appendChild(deleteButton);
  deleteButton.addEventListener("click", handleDelete);
});

const handleSubmit = function(event) {
  event.preventDefault();
  const newListItem = document.createElement("div");
  newListItem.classList.add("wrapper");
  newListItem.innerHTML = `<h3 class="reading-title">${event.target.title.value}</h3> <h4 class="subtitle">${event.target.author.value}</h4> <p class="description">${event.target.category.value}</p>`;

  const list = document.querySelector("ul");
  list.appendChild(newListItem);

  document.getElementById("new-item-form").reset();
};

const handleDelete = function(event) {
  const readingList = document.querySelector("ul");
  readingList.innerHTML = "";
};


