//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of 
//each element in a is strictly greater than the sum of the cubes of each element in b.



function arrayMadness(a, b) {
  let sumArrA = 0;
  let sumArrB = 0;
  for(let i = 0; i < a.length; i++){
    sumArrA += (a[i] * a[i]);
  }
  for(let i = 0; i < b.length; i++){
    sumArrB += (b[i] ** 3)
  }
  if(sumArrA > sumArrB){
    return true;
  }else {
    return false;
  }
}