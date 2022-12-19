//============SpreadOperatorEmArrays===============

const array = [10, 20, 30, 40, 50];

const arrayCopy1 = [];

for (const value of array) {
  arrayCopy1.push(value);
}
arrayCopy1.push(60);

console.log(array);
console.log(arrayCopy1);

const arrayCopy2 = [...array, 60, 70, 80];

// =============SpreadOperatorEmStrings===================

const greeting = "Bonjour";

const newGreetings = ["!", ...greeting, "!"];

console.log(newGreetings);

const phrase = "Hello, my friend!";

const copy = [...phrase];

console.log(copy);

//====================SpreadOperatorEmSetObject============

const mySet = new Set();

mySet.add("Batman");
mySet.add("Robin");
mySet.add("Spiderman");
mySet.add("Batman");

console.log(mySet);

const mySetCopy = ["Robin", ...mySet, "Batman"];
console.log(mySetCopy);

//=============SpreadOperatorEmMapsObject============

const stock = new Map();

stock.set("Apples", 3);
stock.add("Mangos", 20);
stock.add("bananas", 7);

const stockArray = [...stock];

const myMap = new Map();

myMap.set("Monkey", 5);
myMap.set("Tiger", 1);
myMap.set("Elephant", 2);

console.log(myMap);

const myMapArray = [...myMap, "boo!"];

console.log(myMapArray);

//====SpreadOperatorEmObject===============

const countryPop = {
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
};

console.log(countryPop);

const countryPopExtended = {};

for (const entry of Object.entries(countryPop)) {
  const country = entry[0];
  const pop = entry[1];
  countryPopExtended[country] = pop;
}

const countryPopExtended2 = {
  ...countryPop,
  Indonesia: 273,
  Japan: 125,
};

console.log(countryPopExtended);
console.log(countryPopExtended2);
