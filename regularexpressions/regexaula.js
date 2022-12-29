//=========================Regular=Expressions========================
/*
const sentence = "There once was a monkey who knew Javascript...";

const pattern = /mon[a-l]ey/;

const exists = pattern.test(sentence);

const match = sentence.match(pattern);

console.log(exists);

console.log(match);
*/
//

const sentence = "There once was a monkey who knew Javascript...";

const pattern = /\.\.\./;

const test = pattern.test(sentence);
console.log(test);

const match = sentence.match(pattern);
console.log(match);
