let num= prompt("Enter an integer number","0");
function evenOdd(num)
{
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
let result= evenOdd(num);
if(result== true){
    console.log(`The number entered is ${num} and Number is even`);
}
else{
    console.log(`The number entered is ${num} and Number is odd`);
}
