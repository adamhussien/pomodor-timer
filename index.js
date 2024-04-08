'use strict'

const timer = document.querySelector(".timer");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause"); // Corrected selector
const resetBtn = document.querySelector(".reset");

let interval;
let minutes = 15;
let seconds = 0;

const startTimer = function() {
    interval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
            clearInterval(interval);
            return;
        }
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--; // Decrement seconds if not 0
        }
        updateTime();
    }, 1000);
};

function pauseTimer() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    minutes = 15;
    seconds = 0;
    updateTime();
}

function updateTime() {
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    timer.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", reset);
