/*
    1. Create a function called "fetchPokemon" that returns 
       a Promise that resolves with the value :
       { data: {name: "Pickachu", power: 20} } after 2 seconds
    2. Print out "Program starting..."
    
    3. Create an async function that uses await to wait for
       the data to comes back from "fetchPokemon" then log out
       the data
    4. Call the async function you created
    5. Log out "Program complete!"
    After your're done the above ^:
    6. Change "fetchPokemon" to reject after 2 seconds instead
       with a new Error Object with the message "Danger, danger!"
    7. How can you modify your async function to catch this error?
*/

const fetchPokemon = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve({ data: { name: "Pickachu", power: 20 } });
      reject();
    }, 2000);
  });
};

console.log("Program starting...");

const getPokemon = async () => {
  try {
    const result = await fetchPokemon();
    console.log(result);
    console.log("Done fetching...");
  } catch (error) {
    console.error(error);
  }
  console.log("There was a error into our code!");
};

getPokemon();

setTimeout(() => {
  console.log("Program completed!!");
}, 2500);


/*
    1. Create a function called "fetchUser" that returns 
       a Promise that resolves with the value :
       { data: {user: "Monkey", admin: true} } after 3 seconds
    2. Create a function called "login" that takes an Object
       as an argument. If the object has a property called 
       "admin" with a value of true, then log out
       "Successfully logged in!", otherwise log out
       "Failed to log in, please try again."
    3. Print out "Program starting..."
    
    4. Create an async function that uses await to wait for
       the data to comes back from "fetchUser".
    
    5. Pass the user that comes back from "fetchUser" to the
       "login" function you created above
    6. Call the async function you created
    7. Log out "Program complete!"
*/

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { user: "Bertoldo", admin: true } });
    }, 3000);
  });
};

const authenticateUser = (user) => {
  if (user.admin === true) {
    console.log("Successfully logged in as a admin!");
  } else {
    console.log("Failed to log in as a admin, please try again.");
  }
};

console.log("Program starting...");

const useAdmin = async () => {
  const result = await fetchUser();
  console.log(result);
  authenticateUser(result.data);
};

useAdmin();

setTimeout(() => {
  console.log("Program complete!");
}, 3500);
/*
    1. Create a function called "fetchFast" that returns 
       a Promise that resolves with the String "Fast Done!"
       after 2 seconds
    2. Create a function called "fetchSlow" that returns 
       a Promise that resolves with the String "Slow Done"
       after 6 seconds 
    3. Print out "Program starting..."
    
    4. Create an async function that uses await to wait for
       the data to comes back from "fetchFast" then log out
       the data. Then use await to wait for the data to come
       back from "fetchSlow" and log it out right after.
    5. Call the async function you created
    6. Log out "Program complete!"
    7. How long does this take and why?
    8. How could you speed it up?
*/

const fetchFast = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fast Done!");
    }, 2000);
  });
};

const fetchSlow = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Slow Done");
    }, 6000);
  });
};

console.log("Program starting...");

const getFetchedData = async () => {
  const dataFast = await fetchFast();
  console.log(dataFast);
  const dataSlow = await fetchSlow();
  console.log(dataSlow);
};

getFetchedData();

setTimeout(() => {
  console.log("Program complete!");
}, 8000);
