for(i=1; i<= 100; i++)
{
    
    if(i%3 == 0 && i%5 == 0)
    {
        console.log(i+ " fizzbuzz")
        continue;
    }

    if(i%3 == 0)
    {
        console.log(i+ " fizz");
        continue;
    }

    if(i%5 == 0)
    {
        console.log(i+ " buzz");
        continue;
    }

    console.log(i);

}