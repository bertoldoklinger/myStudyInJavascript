//Podemos ter um objeto que possui uma function dentro dele
const minhasInfo = (bertoldo = {
  secondName: "Klinger",
  age: 23,
  isBrazilian: true,
  weight: 106,
  itIsMyBirthday: function () {
    this.age++;
  },
});

//Podemos ter um object dentro de um object

const mypet  = {
  type:cat,
  age:7,
  color:black,
  vaccines: {
    sickness1:true,
    sickness2: true,
    umbrella: {
      firstOne:true,
      secondOne:false,
    }
  }
}

//Podemos uma function construtora de um object

function createDog (name, race, age) {
  return {
    name: name,
    race:race,
    age: age,
  }
}

let dog1 = createDog("bob", "akita", 1);
let dog2 = createDog("marley", "goldenretriever", 2);


// Podemos declarar um novo objeto com um método de criar uma function

let dog = {
  create:function(name,race,age){
    return {
      name:name,
      race:race,
      age:age,
    }
  }
}

let dogA = dog.create("deuce", "pinscher", 3);

dog.create("tiago", "husky", 1);

//Object Representation
const animal = {
  id: 42,
  name: "rawr",
  type: "dog",
  "num legs": 4,
  numLegs: 4,
};
//Access a property
console.log(animal.id)
//Change a property
animal.numLegs = 0;
//Remove a property
delete 'num legs' in animal;
// Object Methods
console.log(Object.keys(animal));
console.log(Object.values(animal));
console.log(Object.entries(animal));
