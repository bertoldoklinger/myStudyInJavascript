const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello my Friend!");
    resolve("Here's your ice cream!");
    reject("Sorry, no ice cream for you!");
  }, 2000);
});

myPromise
  .then((resolvedValue) => {
    console.log("promises seens to be done!");
    console.log(resolvedValue);
    console.log(myPromise);
  })
  .catch((error) => {
    console.log("There is a error!");
    console.log(myPromise);
  });

console.log("Hello?");
console.log(myPromise);
