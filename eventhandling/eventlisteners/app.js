const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const li = document.createElement("li");

  li.textContent = "Novo Item";

  ul.prepend(li);
});

ul.addEventListener("click", (e) => {
  const clickedElement = e.target;

  if (clickedElement.tagName === "LI") {
    clickedElement.remove();
  }
});
