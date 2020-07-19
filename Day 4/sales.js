let amt= Number(prompt("Enter your salary"));
if(amt > 0 && amt<=5000)
{
    let comm= amt*0.02;
    console.log("Your Commision is- ",comm+amt);
}

else if(amt > 5000 && amt<=10000)
{
    let comm= amt*0.05;
    console.log("Your Commision is- ",comm+amt);
}

else if(amt > 10000 && amt<=20000)
{
    let comm= amt*0.07;
    console.log("Your Commision is- ",comm+amt);
}

else
{
    let comm= amt*0.10;
    console.log("Your Commision is- ",comm+amt);
}