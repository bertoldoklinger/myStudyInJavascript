// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.// Examples: (Input --> Output)´

// const {assert} = require("chai");

// describe("Vowels Count Tests",function(){
//   it("should return 5 for 'abracadabra'",function(){
//     assert.strictEqual(getCount("abracadabra"), 5) ;
//   });
// });

const returnVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let arr = str.split("");
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (arr[i] === vowels[j]) {
        result++;
      }
    }
  }
  return result;
};
