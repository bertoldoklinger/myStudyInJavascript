/*
    1. Create a variable called "hungry" that start as true;
    2. Create an if/else statement that:
       - If "hungry" is true, print out "Have a cookie!"
       - Otherwise, print out: "No cookies for you!";
    3. Execute the code to make sure it works.
    4. Repeat steps 2-3 but with a ternary expression.
*/

//const hungry = true

//if (hungry === true){
//  console.log('Have a cookie!')
//}else {
// console.log('No cookies for you!')
//}

//hungry === true ? console.log('Have a cookie!'): console.log('No cookies for you!')

/*
  1. Create a function called "over9000" that has a single
     parameter which is a Number. This function:
     - Returns "It's over 9000!!!" if the argument is > 9000
     - Returns "Taking a Nappa..." in all other cases
  2. Do step 1 with a regular if/else clause first
  3. Re-do step 1 with a ternary expressions
  BONUS: Can you shorten this with the short "arrow function
         expression" syntax?
*/

//const over9000 = (power) => {
//  if(power > 9000){
//    return console.log('Its over 9000!!!')
//  } else {
//    return console.log('Taking Nappa...')
//  }
//}

//over9000(9200)

// const over9000 = (power) => { return power > 9000 ? console.log('Its over 9000!!!') : console.log('Taking Nappa...')}

// over9000(12000)

// const over9000 = power => power > 9000 ? console.log('Its over 9000!!!') : console.log('Taking Nappa...')

/*
    1. Create a variable called "wizards" that points at the array:
       ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Merlin"]
    2. Map over "wizards" to create a new array that does the following:
      - If the name contains the letter "n" return the name but with
        all the "n"'s replaced with a "*" character
      - Otherwise return the name, but upper-cased
      - Use a regular if/else statement for this
   
    3. Repeat step 2 but with a ternary expression
    BONUS: Can you shorten this with the short "arrow function
           expression" syntax?
*/

// const wizards = ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Merlin"]

//const mappedWizards = wizards.map ((wizard)=>{
//  if(wizard.includes('n')){
//   return wizard.replaceAll('n', '*')
//  } else {//
//    return wizard.toUpperCase()
//  }
//})

//console.log(mappedWizards)

// const mappedWizards = wizards.map((wizard)=> wizard.includes('n') ? wizard.replaceAll('n', '*'): wizard.toUpperCase())
// console.log(mappedWizards)


/*
    1. Create a variable called "characters" that points at the array:
       ["Han Solo", "Spock", "Darth Vader", "Yoda", "Neo", "Sarah Connor"]
    2. Filter over "characters" to create a new array that does the following:
      - If the name has a space in it " ", keep it in the result (return true)
      - Otherwise, filter it out (return false)
      - Use a regular if/else statement for this
   
    3. Repeat step 2 but with a ternary expression
    BONUS: Can you shorten this with the short "arrow function
           expression" syntax?
*/


const characters = ["Han Solo", "Spock", "Darth Vader", "Yoda", "Neo", "Sarah Connor"]

const filteredCharacters1 = characters.filter((character)=>{
  if(character.includes(' ')){
    return true
  }else {
    return false
  }
})
console.log(filteredCharacters1)

const filteredCharacters2 = characters.filter ((character)=>{
  return character.includes(' ') ? true : false;
})
console.log(filteredCharacters2)


const filteredCharacters3 = characters.filter((character)=>character.includes(' ') ? true : false)
console.log(filteredCharacters3)


