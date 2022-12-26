/*
const cities = ["Vancouver", "Mexico City", "Toronto", "London", "Berlin"];

const [vancouver, mexicoCity] = cities;

console.log(vancouver);
console.log(mexicoCity);
*/

//=============================
const cities = ["Vancouver", "Mexico City", "Toronto", "London", "Berlin"];

const [, mexicoCity, , , berlin, nonExistent = "Dubai"] = cities;

console.log(nonExistent);

//============================

const movie = {
  title: "Dune",
  year: "2021",
  length: 155,
  book: true,
};

const { book, rating = 83 } = movie;

console.log(book);
console.log(rating);
