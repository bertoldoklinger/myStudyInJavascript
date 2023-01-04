/*
    1. Create an object called "mexico" with the following properties:
        - id -> 24
        - name -> "Mexico"
        - capital -> "Mexico City"
        - neighbours -> ["USA", "Guatemala", "Belize"]
    2. Print out "mexico" to the terminal
    3. Change "id" to be 25
    4. Add "Honduras" to the list of neighbours to "mexico"
    
    5. Print out "mexico" to the terminal again
*/

let mexico = {
  id: 24,
  name: "Mexico",
  capital: "Mexico City",
  neighbours: ["USA", "Guatemala", "Belize"],
};
console.log(mexico);

mexico.id = 25;

mexico.neighbours.push("Honduras");

console.log(mexico);

/*
    1. Create an object called "myPet" with the following properties:
        - name -> "Sudo"
        - type -> "Dog"
        - breed -> "Poodle"
        - age -> 7
        - friends -> ["Bit", "Byte", "Data"]
    2. Print out "myPet" to the terminal
    3. Add a new property: colour -> "Black"
    4. Change "breed" to be "Beagle"
    5. Remove "Data" from the list of friends for "myPet"
    
    6. Print out "myPet" to the terminal again
    7. Add "Chip" to the list of friends for "myPet"
    8. Print out "myPet" to the terminal again
*/

let myPet = {
  name: "Sudo",
  type: "Dog",
  breed: "Poodle",
  age: 7,
  friends: ["Bit", "Byte", "Data"],
};

myPet.colour = "Black";
myPet.breed = "Beagle";
myPet.friends.pop();
myPet.friends.push("Chip");

console.log(myPet);

/*
    1. Create the following 3 objects:
        - const banana = {name: "banana", quantity: 1, price: 1.95}
        - const apple = {name: "apple", quantity: 1, price: 1.45}
        - const candy = {name: "candy", quantity: 1, price: 3.50}
    2. Create an object called "store" with the following properties:
        - storeNumber -> 5
        - locationCity -> "Milan"
        - locationCountry -> "Italy"
        - products: [banana, apple, candy]
    3. Print out "store" to the terminal
    4. Only print out all the product objects in "store"
    5. Only print out the 3rd product object in "store"
    6. Change the price of the banana object through the store object
       to be 1.75..
    7. Print out both "store" and "banana"
    8. Change the price of the candy object directly to be 4.99
    9. Print out both "store" and "candy"
*/
const banana = {
  name: "banana",
  quantity: 1,
  price: 1.95,
};
const apple = {
  name: "apple",
  quantity: 1,
  price: 1.45,
};
const candy = {
  name: "candy",
  quantity: 1,
  price: 3.5,
};

let store = {
  storeNumber: 5,
  locationCity: "Milan",
  locationCountry: "Italy",
  products: [banana, apple, candy],
};

console.log(store);

console.log(store.products);

for (let i = 0; i < store.products.length; i++) {
  console.log(store.products[i]);
}

console.log(store.products[2]);

banana.price = 1.75;
store.products[0].price = 1.75;

console.log(store);
console.log(banana);

candy.price = 4.99;
store.products[2].price = 4.99;

console.log(store);
console.log(candy);

/*
    1. Create an object called "houseForSale" with the following properties:
        - area -> 940
        - value -> 320000
        - streetName -> "Fifth Street"
        - built -> "2012"
        - owner -> {name: "Blake", age: 29}
        - offers -> [290000, 295000, 315000, 312000]
    2. Print out "houseForSale" to the terminal
    3. Delete the property with the key "built"
    4. Change the age of the owner to be 30 inside "houseForSale"
    5. Print out the maximum offerPrice (use reduce)
    6. Add a new property: "sale price" -> 312000
    7. Print out "houseForSale" to the terminal
    *This is a challenging exercise - take it slow and step by step
*/

let houseForSale = {
  area: 940,
  value: 320000,
  streetName: "Fifth Street",
  built: "2012",
  owner: { name: "Blake", age: 29 },
  offers: [290000, 295000, 315000, 312000],
};
console.log(houseForSale);

delete houseForSale.built;

houseForSale.owner.age = 30;

const maximumOfferPrice = houseForSale.offers.reduce((max, offer) => {
  if (max < offer) {
    return offer;
  }
  return max;
}, 0);
console.log(maximumOfferPrice);

houseForSale.salePrice = 312000;

console.log(houseForSale);

/*
    1. Create an object called "myConsole"
    
    2. Assign "myConsole" the key "log" with a value that is
       an arrow function.
       This arrow function will have one parameter called "message"
       The function will just console.log out the "message"
    3. How would you call this "log" function inside the object?
    You should be able to do: myConsole.log("Hello, friend!");
    BONUS: How might the built-in "console" work?
*/

const myConsole = {};
myConsole.log = (message) => {
  console.log(message);
};
console.log(console)