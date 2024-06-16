(function(){
    let hour = document.querySelector(".hour");
    let minute = document.querySelector(".minute");
    let second = document.querySelector(".second");
    let start = document.querySelector(".start");
    let stop = document.querySelector(".stop");
    let reset = document.querySelector(".reset");
    let countDownTimer = null;
    start.addEventListener("click",(e)=>{
        if(hour.value == 0 && minute.value ==0 && second.value==0) {
            alert("Plz input time.")
            return;
        } 

        function startCountDown() {
            start.style.display = "none";
            stop.style.display = "block";
            countDownTimer = setInterval(timer,1000)
        }
        startCountDown();
    });

    function stopInterval(state = '') {
        clearInterval(countDownTimer);
        if(state == 'pause') {
            start.innerHTML = "continue";
            start.style.display = "block";
            stop.style.display = "none";
        } else {
            start.innerHTML = "start";
            start.style.display = "block";
            stop.style.display = "none";
            hour.value="";
            minute.value="";
            second.value="";
        }
    }

    function timer() {
        if(second.value>60) {
            minute.value = minute.value + 1;
            second.value = second.value - 59;
        }
        if(minute.value>60) {
            hour.value = hour.value + 1;
            minute.value = minute.value - 60;
        }
        if(hour.value == 0 && minute.value ==0 && second.value==0) {
            hour.value="";
            minute.value="";
            second.value="";
            stopInterval('stop');
        } else if(second.value!=0) {
            if(second.value<=10) {
                second.value = `0${second.value-1}`
            } else {
                second.value = second.value - 1;
            }
        } else if(minute.value!=0) {
                second.value = 59;
                minute.value = `${minute.value<=10 ? "0" : ""}${minute.value-1}`
        } else if(hour.value!=0) {
                minute.value = 60;
                hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
        }
    }

    stop.addEventListener("click",(e)=>{
        stopInterval('pause')
    });

    reset.addEventListener("click",(e)=>{
        stopInterval();
    })
    
})();