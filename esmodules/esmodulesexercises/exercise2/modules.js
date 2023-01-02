import { checkMovie } from "./moduleA.js";
import { topMovies } from "./moduleB.js";

export {checkMovie, topMovies}

console.log(checkMovie('The Matrix'))
console.log(topMovies)