//Return this array into a unique string!!

const animals = ["monkey", "dog", "cat", "koala"];

let allAnimals = animals.reduce((total, animal) => {
  return total + animal + ",";
}, "");
console.log(allAnimals);

// Return this array in a NEW ARRAY
const numbers = [5, 10, 15, 20, 25, 30, 35];
const reduced = numbers.reduce((result, number) => {
  result.push(number);
  return result;
}, []);

console.log(reduced);

/*
    1. Create an array called "points" with the numbers 55-60 (inclusive)
    2. Create a variable called "sum" using reduce that sums up the points in "points"
    
    3. Print out both "points" and "sum"
*/

let points = [55, 56, 57, 58, 59, 60];

let sum = points.reduce((result, point) => {
  return result + point;
}, 0);

console.log(points);
console.log(sum);

/*
    1. Create an array called 'companies' of the following strings:
        ["apple", "tesla", "spacex", "amazon", "meta", "google"]
    2. Create a const called "modded" that reduces the "companies"
       array to a string of companies that DO NOT start with the
       letter 'a', separated by dashes
    3. Print out "companies" and "modded"
    "modded" should be: "tesla-spacex-meta-google-"
    BONUS: How can you get rid of the trailing '-' ?
    TIP: Look up reduce on Google using docs like MDN
*/

const companies = ["apple", "tesla", "spacex", "amazon", "meta", "google"];

const modded = companies.reduce((result, company, i) => {
  if (company.startsWith("a")) {
    return result;
  }
  if (i === companies.length - 1) {
    return result + company;
  }
  return result + company + "-";
}, "");

console.log(companies);
console.log(modded);

/*
    1. Create an array called "prices" with the following values:
        [1.23, 19.99, 85.2, 32.87, 8, 5.2]
    2. Create a const called "afterTax" that does a sum like so:
        - If the price is greater than 6, add the price with no tax
        - Otherwise, add the price plus a tax of 20%
    3. Print out "prices" and "afterTax"
*/

let prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];
const afterTax = prices.reduce((result, price) => {
  if (price > 6) {
    return result + price;
  }
  return result + price * 1.2;
}, 0);

console.log(prices);
console.log(afterTax);

/*
    1. Create the following array called "items":
        ["light", "banana", "phone", "book", "mouse"]
    2. Create an new array called "caps" that:
        - maps over "items" and capitalizes each item
    3. Create a const called "concat" that:
        - uses reduce to concatenate all the strings in "caps"
          using a space to separate each item
    4. Print out "items", "caps" and "concat"
/*
    BONUS: Can you do steps 1-3 in one line?
*/

let items = ["light", "banana", "phone", "book", "mouse"];
let caps = items.map((item) => {
  return item.toUpperCase();
});
const concat = caps.reduce((result, str) => {
  return result + str + " ";
}, "");

console.log(items);
console.log(caps);
console.log(concat);

/*
    BONUS: Can you do steps 1-3 in one line?
*/

let concatstr = items
  .map((item) => {
    return item.toUpperCase();
  })
  .reduce((result, str) => {
    return result + str + " ";
  }, "");

console.log(concatstr);

/*
    1. Create the following array called "nums":
        [10, 30, 50, 70, 90]
    2. Create a new array called "squares" that:
        - maps over "nums" and return each item squared (x by itself)
    3. Create another new array called "over1000" that:
        - filters "squares" to contain only values over 1000
    4. Create a const called "finale" that:
        - reduces "over1000" to a single sum of it's elements
    5. Print out "nums", "squares", "over1000" and "finale"
    BONUS^2: Can you do 1-4 all in one line?
*/

let nums = [10, 30, 50, 70, 90];
let squares = nums.map((num) => {
  return num ** 2;
});
let over1000 = squares.filter((num) => {
  if (num > 1000) {
    return true;
  }
  return false;
});
const finale = over1000.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(nums);
console.log(squares);
console.log(over1000);
console.log(finale);

//BONUS^2: Can you do 1-4 all in one line?

let numbersOver1000sum = nums
  .map((num) => {
    return num ** 2;
  })
  .filter((num) => {
    return num > 1000;
  })
  .reduce((sum, num) => {
    return sum + num;
  }, 0);

console.log(numbersOver1000sum);
