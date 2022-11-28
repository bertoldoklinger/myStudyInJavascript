/*
(5) Use ES2015 method to see if array contains the value.
    Eliminate more cruft.
*/
const check = (a,x)=>a.includes(x)




/*
  (4) Eliminate all the overhead setup.
      Use the ES2015 SOME method to see if one or more
      of the array entries matches our target.
      Written in the form of a lambda (arrow function) to make it streamlined
    
    const check = (a,x)=>a.some(v=>v==x)
*/

/*
(3) Filter the Array
    Reduce it down to matching values or an empty set ... [66]
    Test the length of the array   [66].length > 0

  function check(a,x){
    return (a.filter(v=>v==x)).length > 0
  }
*/

/*
(2) Walk the array without ability to break the loop.
    Create a variable to hold the state of our match.
    Check if the target is found and return the findings

  function check(a,x){
    let foundTarget = false
    a.forEach((v,i,A)=>{
      if (v==x){ foundTarget = true}
    })
    return foundTarget
  }
*/


/*
  (1) Manually Walk the array, 
    Break out of the loop (return true) if you find a match
    otherwise return false

  function check(a,x){
    for (let i=0; i<a.length;i++){
      console.log(a[i])
      if (a[i]==x){ return true }
    }
    return false
  }
*/

/*
    1. Create a variable called "multiple" and initialize it to 5
    2. Create an array with the numbers 10-15 (inclusive)
    3. Loop through the array and on each iteration:
        - Multiply the number by the multiple and print out the result
        - As you're printing, use this format (example):
            10 x 5 = 50
            11 x 5 = 55
            ...
            15 x 5 = 75
    BONUS: Try to see if you can make it so that all you need to change
    is the "multiple" variable and the program still works correctly.
*/

let multiple = 5;

let newArr = [10, 11, 12, 13, 14, 15];

let len = newArr.length;

for (let i = 0; i < len; i++) {
  let result = newArr[i] * multiple;

  console.log(`${newArr[i]} x ${multiple} = ${result}`);
}

/*
    Create a variable called "greeting" and initialize it to:
        "Hello, nice to meet you!"
    
    Use a loop to loop through this String (just like you would an array)
        - On each loop iteration, print out what is at that index
    WHY does this happen?
    WHAT is a String, really?
*/

let greeting = "Hello, nice to meet you!";

let leng = greeting.length;

for (let i = 0; i < leng; i++) {
  console.log(greeting[i]);
}

/*
    Create a variable called "total" that starts at 0
    Create an array called "grades" with the following values:
        - 55
        - 63
        - 82
        - 98
        - 91
        - 43
        
    Figure out how to print out the AVERAGE grade
    (This is the sum of all grades divided by the number of grades)
*/

let total = 0;

const grades = [55, 63, 82, 98, 91, 43];

for (let i = 0; i < grades.length; i++) {
  total += grades[i];
}
console.log(total / grades.length);

/*
    Create a variable called "bakery" that points to an array
    Fill the array with the following String:
        - "Cake"
        - "Cookie"
        - "Bread"
        - "Scone"
    Print out bakery to make sure it has these 4 Strings in it.
    Create another variable called "myBakery" and assign it
    to "bakery" that we declared previously
    Add the following items to "myBakery":
        - "Croissant"
        - "Granola"
    Print out myBakery and bakery and observe the contents.
    WHY is this?
*/

let bakery = [];
bakery.push("Cake");
bakery.push("Cookie");
bakery.push("Bread");
bakery.push("Scone");
console.log(bakery);

let myBakery = bakery;

myBakery.push("Croissant");
myBakery.push("Granola");

console.log(myBakery);
