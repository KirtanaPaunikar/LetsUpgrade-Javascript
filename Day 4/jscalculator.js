function dis(val)
{
    document.getElementById("text").value += val;
}

function solve()
{
    let x= document.getElementById("text").value;
    let y= eval(x);
    document.getElementById("text").value= y;
}

function clr()
{
    document.getElementById("text").value = ""
}

// Only i am hving a problem in percentage
// function percentage()
// {

// }