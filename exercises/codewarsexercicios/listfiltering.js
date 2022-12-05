//In this kata you will
//create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

let filter_list = (l) => 
l.filter(element => typeof element == 'number')