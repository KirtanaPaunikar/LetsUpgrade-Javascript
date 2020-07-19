let n = prompt("Enter a number",2);
console.log(`Prime Number from 2 to ${n} is`)
label:
for(let i=2; i<=n; i++)
{
    for( let j=2; j<i; j++)
    {
        if(i%j == 0)
        continue label;    
    }
    console.log(i);
}
