let num= prompt("Enter an integer number", 1);
document.write(`Multiplication Table of ${num} is- <br><br>`)
for(let i = 1; i<= 10; i++){
document.writeln(`${num} * ${i} = ${num*i}`);
document.write("<br>");
}