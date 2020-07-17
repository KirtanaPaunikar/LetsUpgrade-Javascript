let marks= prompt("Enter your marks","0");
if(marks > 85)
{
    console.log(`Marks are ${marks} and grade is A.`);
}
else if(marks > 65 && marks <= 85)
{
    console.log(`Marks are ${marks} and grade is B.`);
}
else if(marks > 55 && marks <= 65)
{
    console.log(`Marks are ${marks} and grade is C.`);
}
else if(marks > 45 && marks <= 55)
{
    console.log(`Marks are ${marks} and grade is D.`);
}
else if(marks > 35 && marks <= 45)
{
    console.log(`Marks are ${marks} and grade is E.`);
}
else
{
    console.log(`Marks are ${marks} and grade is F.`);
}