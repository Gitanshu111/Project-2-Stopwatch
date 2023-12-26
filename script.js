let [seconds, minutes, hours]= [0,0,0]
let displayTime = document.getElementById("displayTime");
let startG = document.getElementById("start");
let stopG = document.getElementById("stop");
let resetG = document.getElementById("reset");

let timer=null;

function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if (minutes==60) {
            minutes=0;
            hours++;
            
        }
    }
    let h= hours < 10 ? "0" +hours:hours;
    let m= minutes < 10 ? "0" +minutes:minutes;
    let s= seconds < 10 ? "0" +seconds:seconds;

    displayTime.innerHTML = h+":"+ m+":"+ s;
}
function watchstart(){
    if(timer!== null){
        clearInterval(timer);
        stopG.disabled=false;
        resetG.disabled=false;
    }
    timer = setInterval(stopwatch,1000);
}
function watchStop(){
    clearInterval(timer);
    startG.disabled=false;
    stopG.disabled=true;


}
function watcreset(){
    clearInterval(timer);
    [seconds, minutes, hours]= [0,0,0]
    displayTime.innerHTML= "00:00:00";
    startG.disabled=false;
    stopG.disabled=true;
}