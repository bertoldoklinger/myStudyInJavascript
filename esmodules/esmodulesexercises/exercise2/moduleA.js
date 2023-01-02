import { topMovies } from "./moduleB.js";

const checkMovie = (movieName) => {
  if(topMovies.includes(movieName)) {
    return true
  } 
  return false
}
export { checkMovie }

