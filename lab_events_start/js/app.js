



document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleSubmit);
});

const handleSubmit = function(event) {
  event.preventDefault();
  // console.log("hello");
  const newListItem = document.createElement("li");
  newListItem.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`

  const list = document.querySelector("ul");
  list.appendChild(newListItem);
};
