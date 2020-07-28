

document.addEventListener('DOMContentLoaded', () => {
    console.log('Content  loaded');
    var Interval;
    var minute = 00;
    var sec = 00;
    var msec = 00;
    var minute_id = document.getElementById('minute');
    var second_id = document.getElementById('second');;
    var msec_id = document.getElementById('msec');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');

    start.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startStopwatch, 10);

    }
    stop.onclick = function () {
        clearInterval(Interval);
    }
    reset.onclick = function () {
        clearInterval(Interval);
        minute = sec = msec = '00';
        minute_id.innerHTML = minute;
        second_id.innerHTML = sec;
        msec_id.innerHTML = msec;

    }

    function startStopwatch() {
        msec++;
        if (msec < 9)
            msec_id.innerHTML = "0" + msec;
        if (msec > 9)
            msec_id.innerHTML = msec;
        if (msec > 99) {
            sec++;
            msec = 0;
            msec_id.innerHTML = "00";
            if (sec > 9) {
                if (sec > 59) {
                    sec = 0;
                    minute++;
                    if (minute < 60)
                        minute_id.innerHTML = "0" + minute;
                    else
                        minute_id.innerHTML = minutes;
                }
                else {
                    second_id.innerHTML = sec;
                }
            }
            else
                second_id.innerHTML = "0" + sec;


        }


    }
});
