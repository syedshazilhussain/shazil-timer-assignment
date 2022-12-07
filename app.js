var input = document.getElementById("timerInput");
var interval;
var countDownSecond;

function timerStart() {
    interval = setInterval(start, 1000);
    document.getElementById("doubleZero").innerHTML = input.value;
    countDownSecond = input.value;
    input.value = ""
}

function start() {
    countDownSecond--;
    document.getElementById("doubleZero").innerHTML = countDownSecond;
     if (countDownSecond == 0) {
        timerStop();
    }
    
 }

function timerStop() {
    clearInterval(interval);
}

function timerClear(){
    timerStop();
    dubble = 0;
    document.getElementById("doubleZero").innerHTML = "0";
}

