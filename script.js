var minutesEl = document.getElementById('minutes')
var secondsEl = document.getElementById('seconds')
var millisecondsEl = document.getElementById('milliseconds')
var startBtn = document.getElementById('startBtn')
var pauseBtn = document.getElementById('pauseBtn')
var resumeBtn = document.getElementById('resumeBtn')
var reseBtn = document.getElementById('resetBtn')

let interval
let minutes = 0
let seconds = 0
let milliseconds = 0
let isPaused = false

startBtn.addEventListener("click", startTime)
pauseBtn.addEventListener("click", pauseTime)
resumeBtn.addEventListener("click", resumeTime)
reseBtn.addEventListener("click", reseTime)

function startTime(){
    interval = setInterval(() => {
        if(!isPaused){
            milliseconds += 10

            if(milliseconds === 1000){
                seconds++
                milliseconds=0
            }
            if(seconds === 60){
                minutes++
                seconds = 0
            }
            minutesEl.textContent = formaTime(minutes)
            secondsEl.textContent = formaTime(seconds)
            millisecondsEl.textContent = formatMilliseconds(milliseconds)
        }
    }, 10)
    startBtn.style.display= "none"
    pauseBtn.style.display = "block"
}
function pauseTime(){
    isPaused = true
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "block"

}

function resumeTime()
{
    isPaused = false
    resumeBtn.style.display= "none"
    pauseBtn.style.display = "block"
}

function reseTime(){
    clearInterval(interval)
    milliseconds = 0
    seconds = 0
    minutes = 0

    minutesEl.textContent= "00"
    secondsEl.textContent = "00"
    millisecondsEl.textContent="000"

    pauseBtn.style.display = "none"
    resumeBtn.style.display = "none"
    startBtn.style.display = "block"
}


function formaTime(time){
    return time < 10 ? `0${time}` : time
}

function formatMilliseconds(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time
}
