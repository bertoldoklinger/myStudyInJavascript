// const form = document.querySelector(".signup-form");
// // const usernameInput = document.querySelector("#username");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   console.log(event.target.username.value);
// });

const username = "bertoldo";
const pattern = /^[a-z]{6,}$/;
const isAMatch = pattern.test(username);
// console.log("🚀 ~ file: app.js:14 ~ result", isAMatch);

// if (isAMatch) {
//   console.log("o test da regex passou");
// } else {
//   console.log("o test da regex falhou");
// }

const result = username.search(pattern);
console.log("🚀 ~ file: app.js:22 ~ result", result);
