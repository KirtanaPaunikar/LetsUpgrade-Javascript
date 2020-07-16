console.log("Methods of Arrays");

/*toString()
This method converts the array into string seperated by commas*/

var names= ["Kirtana", "Piyush", "Arun", "Kavita"];
console.log("Arrays converted to string and seperated by commas.");
console.log(names.toString());

/*concat()
This method creates a new array by merging existing arrays */

var fruits= ["Apple","Banana","Grapes","Mango"];
var vegetables= ["Cabbage","Ladyfinger","Carrot"];
var arr= fruits.concat(vegetables);
console.log("Arrays get concatinated")
console.log(arr.toString());

/*slice()
This method slices out the piece of array into new array */

var fruits= ["Apple","Banana","Grapes","Mango"];
var arr2= fruits.slice(0,2);
console.log(arr2);

console.log("Methods of Strings");

/*search()
This method searches a string for particukar value and returns the position of the match */

var str= "Hello There, Welcome to the LetsUpgrade class."
var pos= str.search("Welcome");
console.log(pos);

/*replace()
This method replace the specified value with another value in string */

var str= "Hello There, Welcome to the LetsUpgrade class."
var n= str.replace("class", "group");
console.log(n);

/*trim()
This method removes the white spaces from both sides of the string */

var strg= "         Hello There!!        ";
console.log(strg.trim());