var tiger_img = document.getElementById('2');
var tiger_name = document.getElementById('7');
//for timer
var timer = 30;
var min = 0;
var sec = 0;

function startTimer() {
    min = parseInt(timer / 60);
    sec = parseInt(timer % 60);
    if (timer < 1) {
        window.location = "./gameover5.html";
    }
    document.getElementById("time").innerHTML = "<b>TIMER LEFT:   </b>" + min.toString() + ":" + sec.toString();
    timer--;
    setTimeout(function () {
        startTimer();
    }, 1000);
}


link()

function link() {
    for (var i = 1; i <= 25; i++) {
        if (i >= 1 && i <= 19 && i != 5 && i != 6 && i != 7 && i != 8 && i != 10 && i != 11 && i != 12 && i != 13 && i != 15 && i != 16 && i != 17) {
            document.getElementById(i).onclick = evt => {
                evt.target.style.backgroundColor = 'orange';
            }
        }
        if (i >= 5 && i <= 25 && i != 9 && i != 6 && i != 7 && i != 8 && i != 13 && i != 11 && i != 12 && i != 14 && i != 16 && i != 17 && i != 18 && i != 19 && i != 21 && i != 22) {
            document.getElementById(i).onclick = evt => {
                evt.target.style.backgroundColor = 'yellow';
            }
        }
        if (i >= 6 && i <= 20 && i != 9 && i != 10 && i != 12 && i != 14 && i != 15 && i != 17 && i != 18 && i != 19 && i != 20) {
            document.getElementById(i).onclick = evt => {
                evt.target.style.backgroundColor = 'violet';
            }
        }
        if (i >= 12 && i <= 22 && i != 13 && i != 16 && i != 14 && i != 15 && i != 21 && i != 18 && i != 19 && i != 20) {
            document.getElementById(i).onclick = evt => {
                evt.target.style.backgroundColor = 'orangered';
            }
        }

    }

}