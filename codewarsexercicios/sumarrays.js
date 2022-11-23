//Write a function that takes an array of numbers and returns the sum of the numbers.
//The numbers can be negative or non-integer.
//If the array does not contain any numbers then you should return 0.

function sum(numbers) {
  let sum = 0;
  if (numbers.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i];
    }
    return sum;
  }
}
