var mySeconds;
var intervalHandle;

function resetPage(){
    document.getElementById("timer").style.display= 'none';
}

function startTimer(){
    var myInput= document.getElementById('input').value;
    if(isNaN(myInput)){
        alert("Enter a valid number");
        return;
    }
    mySeconds= myInput*60;

    intervalHandle= setInterval(counter, 1000);

    document.getElementById("timer").style.display= 'none';
}

function counter(){
    var timeDisplay= document.getElementById('time');

    var min= Math.floor(mySeconds/60);
    var sec= mySeconds-(min*60);

    if(sec < 10){
        sec= '0' + sec;
    }

    var message= min.toString() + ':' + sec;

    timeDisplay.innerHTML= message;

    if(mySeconds===0){
        alert("Time is up");
        clearInterval(intervalHandle);
        resetPage();
    }

    mySeconds--;
}



window.addEventListener('load', function(){
    var start= document.getElementById('start');
    start.addEventListener('click', startTimer);
});
