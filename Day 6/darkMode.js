let name= prompt("Enter your name","Anonymous");
title.innerText += `Welcome to the family ${name}`;

const ctime= document.getElementById('time');

function clock(){
    let date= new Date();
    let time= date.toLocaleTimeString();
    ctime.innerText= time;
}

setInterval(clock, 1000);

const dmode=  document.getElementById('btn');

dmode.onclick= function myFunction()
{
    document.body.classList.toggle("dark");
}