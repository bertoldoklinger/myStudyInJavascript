//Return this array into a unique string!!

const animals = ["monkey", "dog", "cat", "koala"];

let allAnimals = animals.reduce((total, animal) => {
  return total + animal + ",";
}, "");
console.log(allAnimals);

// Return this array in a NEW ARRAY
const nums = [5, 10, 15, 20, 25, 30, 35];
const reduced = nums.reduce((result, num) => {
  result.push(num);
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
    TIP: Look up reduce on Google using docs like MDN
*/

const companies = ["apple", "tesla", "spacex", "amazon", "meta", "google"];

const modded = companies.reduce((result, company) => {
  if (!company.startsWith("a")) {
    return result + company + "-";
  }
  return result;
}, "");

console.log(companies);
console.log(modded);
