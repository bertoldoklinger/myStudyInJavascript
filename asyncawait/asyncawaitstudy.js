// Async await basic structure and difference to promises and .then

const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done!");
    }, ms);
  });

  return timeout;
};

console.log("Program starting...");

makeTimeout(1000).then((result) => {
  console.log("from .then", result);
});
const fetchStuff = async () => {
  const result = await makeTimeout(2000);
  console.log("from async function", result);
};

fetchStuff();

console.log("Program complete...");


//=================================================

// Whats the order ??
const useData = async () => {
  //2
  console.log("Buscando alguns dados...");
  const result = await fetchSomeData();
  //4
  console.log(result);
};
//1
console.log("Programa iniciado!");
useData();
//3
console.log("Tudo pronto!");

//======================================================

const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done!");
    }, ms);
  });

  return timeout;
};

console.log("Program starting..."); // 1

const fetchData = async () => {
  console.log("Buscando primeiro conjunto de dados..."); // 2
  const result1 = await makeTimeout(2000); // vao rodar no mesmo tempo
  console.log("Buscando segundo conjunto de dados...", result1); // 4
  const result2 = await maketimeout(2000); // vao rodar no mesmo tempo
  console.log("Terminei de buscar os dados!", result2); //5
};

fetchData();

console.log("Program done!"); // 3

//qual a ordem dos codigos??
//quanto tempo vai demorar pra rodar todo o codigo ??
//  4 segundos

//==========================================================

const fetchData = async () => {
  return "hello!";
};
const result = fetchData();
console.log(result);

result
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

const useHello = async () => {
  const result = await fetchData();
  console.log(result);
};
useHello();

// ======================= Error handling on async / await function

const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve("All done!");
      reject("there was a error");
    }, ms);
  });

  return timeout;
};

const causeError = async () => {
  try {
    const result = await makeTimeout(2000);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
console.log("Program starting...");
causeError();
console.log("Program done!");
