/* 
Timmy & Sarah think they are in love, but around where they live,
they will only know once they pick a flower each.
 If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

function lovefunc(flower1, flower2) {
  let petals1 = flower1;
  let petals2 = flower2;
  if (petals1 % 2 == 0 && petals2 % 2 !== 0) {
    return true;
  } else if (petals1 % 2 !== 0 && petals2 % 2 !== 0) {
    return false;
  } else if (petals1 % 2 == 0 && petals2 % 2 == 0) {
    return false;
  } else if (petals1 % 2 !== 0 && petals2 % 2 == 0) {
    return true;
  }
}
