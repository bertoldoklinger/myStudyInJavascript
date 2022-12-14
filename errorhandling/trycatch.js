// Exemplo de try... catch
try {
  throw new Error("boom!");
} catch (error) {
  console.error(error);
  console.error("caugth");
}
console.log("hi!");

// Tipo de erros

try {
  const user = {
    name: "Alex",
    age: 21,
    profile: {
      colour: "blue",
    },
  };
  console.log(user.profile.colour);
} catch (error) {
  console.error(error);
}

// Escopos do try...catch

try {
  const message = "hello";
  console.log(message);
  throw new Error("Oh no!");
} catch (error) {
  console.error(error);
  console.error(message);
}

console.log("Program completed!");
