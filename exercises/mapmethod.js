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


/*
    1. Create an array called "prices" with the following values:
        [1.23, 19.99, 85.2, 32.87, 8, 5.2]
    2. Create a new array using map called "taxedPrices" that:
        - If the price is greater than 10, add 20% tax to it
        - Otherwise, do not add any tax
    3. Print out both arrays
*/

let prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

let taxedPrices = prices.map((price) => {
  if (price > 10) {
    return 1.2 * price;
  }
  return price;
});

/*
    1. Create the following array called "items":
        ["light", "banana", "phone", "book", "mouse"]
    2. Create an new array called "plurals" that:
        - maps over "items" and adds an 's' to each one
    3. Print out both arrays
    4. Change it so if we see "mouse", we instead return "mice"
*/

let items = ["light", "banana", "phone", "book", "mouse"];

let plurals = items.map((item) => {
  if (item === "mouse") {
    return "mice";
  }

  return item + "s";
});

/*
    1. Create the following array called "row":
        [10, 20, 30, 40, 50]
    2. Create an new array called "matrix" that:
        - maps over "row" and return each item, but in an array
        (We should have a 2-dimensional array as a result)
    3. Print out both arrays
    "matrix" should look like this:
        [[10], [20], [30], [40], [50]]
*/

let row = [10, 20, 30, 40, 50];

let matrix = row.map((number) => {
  let newArr = [];
  newArr.push(number);
  return newArr;
});

console.log(row);
console.log(matrix);