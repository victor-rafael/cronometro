let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let thousandths = document.querySelector('.thousandths');

let start = document.querySelector('.start');
let stop = document.querySelector('.stop');

let cron;

let h = 0;
let m = 0;
let s = 0;
let mm = 0;

start.addEventListener('click', newStart);
stop.addEventListener('click', newStop);



function newStart() {
    if(start.innerHTML === 'Iniciar') {
        cron = setInterval(timer, 10);
        start.innerHTML = 'Pausar';
    } else if(start.innerHTML === 'Pausar') {
        start.innerHTML = 'Continuar';
        newPause();
    } else if(start.innerHTML === 'Continuar') {
        cron = setInterval(timer, 10);
        start.innerHTML = 'Pausar';
    }
}

function newPause() {
    clearInterval(cron);
}

function newStop() {
    newStart();
    start.innerHTML = 'Iniciar'
    newPause();
    h = 0;
    m = 0;
    s = 0;
    mm = 0;

    hours.innerHTML = `00`;
    minutes.innerHTML = `00`;
    seconds.innerHTML = `00`;
    thousandths.innerHTML = `00`;

}

function timer() {
    mm++;
    if(mm === 100) {
        mm = 0;
        s++;
    }
    if(s === 60) {
        s = 0;
        m++;
    }
    if(m === 60) {
        m = 0;
        h++
    }

    hours.innerHTML = `${h < 10 ? '0'+h : h}`;
    minutes.innerHTML = `${m < 10 ? '0'+m : m}`;
    seconds.innerHTML = `${s < 10 ? '0'+s : s}`;
    thousandths.innerHTML = `${mm < 10 ? '0'+mm : mm}`;
}
