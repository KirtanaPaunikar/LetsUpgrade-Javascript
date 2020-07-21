let num= [];
let odd;
while(true)
{
    let input = prompt("Enter a positive number",0);
    if(input === "" || input === null)
    break;
    num.push(+input);

    odd = num.filter(el => el%2 != 0).map(el => el ** 3);

}
console.log("The cube of odd number is-");
console.log(odd);