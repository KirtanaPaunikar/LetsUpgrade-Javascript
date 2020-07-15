console.log("Difference Between var, Let and const");
//var
//string
var name= "kirtana";
console.log(name);
//number
var age= 22;
console.log(age);
//array
var hobby= ["dancing", "painting"];
console.log(hobby);
//object
var friend= {fname: "Vishaka", age: "23", city: "Wardha"};
console.log(friend);

// var is the global variable and it can be used throughout the program.

//Let
console.log(name);
{
    let name= "Piyush";
    console.log(name);
}
console.log(name);

//let is the scope variable which works under a particular block.

//const
const abc= 10;
console.log(abc);
//abc=11; //this will give error
//const is used to declare the constant value. This value can't be changed.



console.log("Data Types in JS")
// There are mainly six data types which is string, number, boolean, objects, array and function.

//string
var name= "kirtana";
console.log(name);
//number
var age= 22;
console.log(age);
//boolean
var isWorking= true;
console.log(isWorking);
//array
var hobby= ["dancing", "painting"];
console.log(hobby);
//object
var friend= {fname: "Vishaka", age: "23", city: "Wardha"};
console.log(friend);
//function
var num= 20;
function fun(){
    let num= 30;
    console.log(num);
}
console.log(num);
fun();