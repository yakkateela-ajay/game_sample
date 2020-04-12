var tiger_img = document.getElementById('7');
var tiger_name = document.getElementById('9');
//for timer
var timer = 30;
var min = 0;
var sec = 0;

function startTimer() {
    min = parseInt(timer / 60);
    sec = parseInt(timer % 60);
    if (timer < 1) {
        window.location = "./gameover.html"
    }
    document.getElementById("time").innerHTML = "<b>TIMER LEFT:   </b>" + min.toString() + ":" + sec.toString();
    timer--;
    setTimeout(function () {
        startTimer();
    }, 1000);
}


link()

function link() {
    var count = 0;
    for (var i = 1; i <= 25; i++) {
        if (i >= 7 && i <= 9) {
            document.getElementById(i).onclick = evt => {
                evt.target.style.backgroundColor = 'yellow';
                count++
            }
        }
        if (i >= 1 && i <= 17 && i != 7 && i != 8 && i != 9 && i != 13 && i != 14 && i != 15) {
            document.getElementById(i).onclick = evt => {
                evt.target.style.backgroundColor = 'green';
                count++
            }
        }
        if (i >= 13 && i <= 23 && i != 17 && i != 19 && i != 24 && i != 25) {
            document.getElementById(i).onclick = evt => {
                evt.target.style.backgroundColor = 'violet';
                count++
            }
        }
        if (i >= 19 && i <= 25 && i != 20 && i != 21 && i != 22 && i != 23) {
            document.getElementById(i).onclick = evt => {
                evt.target.style.backgroundColor = 'orangered';
                count++
            }
        }
    }



}