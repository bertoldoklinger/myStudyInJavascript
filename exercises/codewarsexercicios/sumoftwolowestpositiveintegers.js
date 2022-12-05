//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
//No floats or non-positive integers will be passed.
//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {  
  let longestArr = [];
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] < longestArr[0] || longestArr[0] == null) {
      if(longestArr[0] < longestArr[1] || longestArr[1] == null) {
        longestArr[1] = longestArr[0];
      }
      longestArr[0] = numbers[i];
    } else if(numbers[i] < longestArr[1] || longestArr[1] == null) {
      longestArr[1] = numbers[i];
    }
  }
  return longestArr[0] + longestArr[1];
}







