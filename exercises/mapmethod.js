/*
    1. Create an array called "practice" with the numbers 25-30 (inclusive)
    2. Create another array using map that squares each number in "practice"
    
    3. Print out both "practice" and the new mapped array
*/

let practice = [25, 26, 27, 28, 29, 30];

let squares = practice.map((number) => {
  return number * number;
});

console.log(practice);
console.log(squares);
/*
    1. Create an array called 'bools' of the following booleans:
        [true, true, false, true, false, false]
    2. Map over 'bools' and do the following:
        - if "true", return a random number in it's place
        - if "false", return 0
    3. Print out both arrays
    HINT: Google for "random number js" to find a random
          number function built-in to Javascript to use
*/

let bools = [true, true, false, true, false, false];

let newBools = bools.map((bool) => {
  if (bool === true) {
    return Math.random();
  } else {
    return 0;
  }
});
