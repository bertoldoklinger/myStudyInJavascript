const person = {
  name: "Bertoldo",
  age: 23,
  hobbies: ["nba2k", "fifa23", "csgo"],
};

const printHobbies = () => {
  console.log(person.hobbies);
};

const car = {
  model: "Chevrolet",
  year: 2009,
};

export { person, car };
export default printHobbies;
