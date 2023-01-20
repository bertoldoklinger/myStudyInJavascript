const link = document.querySelector("a");

link.setAttribute("href", "https://rogermelo.com.br");

link.innerText = "Website do Roger Melo";

const paragraph = document.querySelector("p");
console.log("🚀 ~ file: app.js:8 ~ paragraph", paragraph.getAttribute("class"));

paragraph.setAttribute("class", "success");

paragraph.setAttribute("style", "color:green;");
