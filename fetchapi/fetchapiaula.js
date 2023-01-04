import fetch from "node-fetch";

//const response = fetch("https://www.wallhaven.cc");

//response
//.then((result) => {
//for (const key in result) {
//  console.log(key);
// }
//const text = result.text();
//text.then((html) => {
//  console.log(html);
//});
//return result.text();
//})
// .then((html) => {
//  console.log(html);
//});

const fetchData = async () => {
  const response = await fetch("https://www.wallhaven.cc");
  const text = await response.text();
  console.log(text);
};

fetchData();
