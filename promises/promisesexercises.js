/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" when the promise completes after 3 seconds
    HINT: Use setTimeout for the delay
*/

console.log("Program started");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
  // What is inside resolve is passed by value into .then() parameter
    resolve("Program complete");
  }, 3000);
});
console.log(myPromise);
console.log("Program in progress...");

myPromise.then((value) => {
  console.log(value);
});


/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" if the promise fulfills
    6. Print out "Program failure" if the promise rejects
    HINT: Use setTimeout for the delay
*/

console.log("Program started");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
  setTimeout(() => {
    reject();
  }, 2000);
});
myPromise
  .then(() => {
    console.log("Program complete");
  })
  .catch(() => {
    console.log("Program failure");
  });
console.log(myPromise);
console.log("Program in progress...");



/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Step 1 complete" when the first promise fulfills
    6. Have the first promise return another new Promise that will
       fulfill after 3 seconds with the message: "Step 2 Complete"
    7. Print out the message from the second promise after it
       fulfills ("Step 2 Complete")
    HINT: Use setTimeout for the delay
*/

console.log("Program started");
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});
myPromise.then(() => {
  console.log("Step 1 complete");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Step 2 Complete");
    }, 3000);
  }).then((resolveValue) => {
    console.log(resolveValue);
  });
});
console.log(myPromise);
console.log("Program in progress...");


/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 5 seconds with the
       value {data: "Hello, friend!", error: null}
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Create a first Promise chain using the promise above and
       Print out the resolved value when the first promise fulfills
    6. Have this first promise return another new Promise that will
       fulfill after 2 seconds with the message:
       "First promise chain complete!"
    7. Print out the message from the above promise after it
       fulfills ("First promise chain complete!")
    8. Create a second Promise chain using the first promise above and
       Print out the resolved value when the second promise fulfills
    9. Have this second promise return another new Promise that will
       fulfill after 10 seconds with the message:
       "Second promise chain complete!"
   10. Print out the message from the above promise after it
       fulfills ("Second promise chain complete!")
    HINT: Use setTimeout for the delay
    HINT2: This will be using the same promise two times:
           const myPromise = new Promise(...) // step 2
           myPromise.then(...).then(...) // steps 5-7
           myPromise.then(...).then(...) // steps 8-10
    BONUS: WHY does it work this way?
*/



console.log("Program started");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: "Hello, friend!", error: null });
  }, 5000);
});

console.log(myPromise);
console.log("Program in progress...");

myPromise
  .then((val) => {
    console.log(val);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("First promise chain complete!");
      }, 2000);
    });
  })
  .then((val) => {
    console.log(val);
  });

myPromise
  .then((val) => {
    console.log(val);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Second promise chain complete!");
      }, 10000);
    });
  })
  .then((val) => {
    console.log(val);
  });
  

/*
    1. Create a Promise that resolves with the number 10 after
       3 seconds
    2. Create another Promise that resolves with the number
       20 after 5 seconds
    How can we log out the sum (30) of these two resolved values
    once, after BOTH promises successfully fulfill?
    HINT: Use Google/Documentation to help find an answer
    HINT2: You can Google for something like:
           "resolve 2 promises at the same time javascript"
*/

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 5000);
});

Promise.all([promise1, promise2]).then((values) => {
  const firstValue = values[0];
  const secondValue = values[1];
  console.log(values);
  console.log(firstValue, secondValue);
  console.log(firstValue + secondValue);
});