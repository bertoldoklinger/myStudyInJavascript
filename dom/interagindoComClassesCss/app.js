//console.log("🚀 ~ file: app.js:2 ~ paragraph", paragraph.classList);
// ADICIONANDO E REMOVENDO CLASSES CSS
// paragraph.classList.add("error");
// paragraph.classList.remove("error");

// paragraph.classList.add("success");
const paragraph = document.querySelectorAll("p");

const paragraphs = paragraph.forEach((p) => {
  if (p.textContent.includes("error")) {
    p.classList.add("error");
  }
  if (p.textContent.includes("success")) {
    p.classList.add("success");
  }
});

// ALTERNANDO CLASSES CSS USANDO TOGGLE(LIGANDO E DESLIGANDO A CLASSE)
const title = document.querySelector("h1");

h1.classList.toggle("test");
title.classList.toggle("test");
