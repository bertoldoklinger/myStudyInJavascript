const paragraph = document.querySelector(".copy-me");

paragraph.addEventListener("copy", () => {
  console.log("texto copiado");
});
console.log("🚀 ~ file: app.js:2 ~ paragraph", paragraph);

const div = document.querySelector("div");

div.addEventListener("mousemove", (event) => {
  div.textContent = `X ${event.offsetX} | Y ${event.offsetY}`;
  console.log(event.offsetX, event.offsetY);
});

document.addEventListener("wheel", (event) => {
  console.log(event.pageX, event.pageY);
});
