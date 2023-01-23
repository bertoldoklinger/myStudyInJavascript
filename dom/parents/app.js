// SELECIONANDO PARENT NO DOM
const article = document.querySelector("article");
console.log("🚀 ~ file: app.js:2 ~ article", article.children);
// ITERANDO SOBRE IRMAOS USANDO FOREACH(TRANSFORMANDO EM ARRAY PRIMEIRO COM ARRAY.FROM)
Array.from(article.children).forEach((element) => {
  element.classList.add("article-element");
});

const title = document.querySelector("h2");
//MÉTODOS PARA SABER PARENT,CHILDREN E SIBLINGS(IRMAOS) DE UM ELEMENTO HTML
title.parentElement;
console.log(
  "🚀 ~ file: app.js:11 ~ title.parentElement",
  title.previousElementSibling
);

title.nextElementSibling;

title.children;
