//Various Methods in Console Function

alert("Click me to Proceed.");

//console.log() method
console.log("Hello There!!!");
console.log("My DOB is");
console.log(9);

/* console.log is used to print the output of code in console.
we can use string, integer, boolean, object inside the log. */

//console.error() method
console.error("There is an error");

// console.error() is used to display the error message to the console.

//console.warn() method
console.warn("This is a warning");

// console.warn() is used to display the warning message to the console.

//console.clear()
console.clear();

// console.clear is used to clear the console.

//console.time() and console.timeEnd()
console.time("Time taken");
var a= {name: "Kirtana", age: "22", city: "Amravati"};
var b= {name: "Piyush", age: "19", city: "Nagpur"};
var c= {name: "Vishaka", age: "22", city: "Wardha"};
console.log({a,b,c});
console.timeEnd("Time taken");

/*console.time() and console.timeEnd() is used to find the amount of time spend on a particular block.
The label must be same in time() and timeEnd() */

//console.table()
console.table({a,b,c});

//console.table() is used to generate the table in console.

