const link = document.querySelector("a");

link.setAttribute("href", "https://rogermelo.com.br");

link.innerText = "Website do Roger Melo";

const paragraph = document.querySelector("p");
console.log("🚀 ~ file: app.js:8 ~ paragraph", paragraph.getAttribute("class"));

paragraph.setAttribute("class", "success");

paragraph.setAttribute("style", "color:green;");

const h2 = document.querySelector("h2");
// SETANDO ESTILOS PARA UM ELEMENTO HTML POR MEIO DO JAVASCRIPT
h2.style.margin = "50px";
h2.style.color = "red";
h2.style.display = "flex";
h2.style.justifyContent = "center";
h2.style.fontSize = "40px";
//REMOVENDO ESTILOS POR MEIO DO JAVASCRIPT
h2.style.margin = "";
