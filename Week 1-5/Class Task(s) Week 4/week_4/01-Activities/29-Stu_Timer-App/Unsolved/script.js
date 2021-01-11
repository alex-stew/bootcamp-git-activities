var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

function startTimer() {
  var seconds = parseInt(secondsDisplay.textContent);
  var minutes = parseInt(minutesDisplay.textContent);
  clearInterval(interval);
  // Write code to start the timer here
  interval = setInterval(() => {
    seconds -= 1;
    totalSeconds += 1;
    secondsElapsed += 1;
    if (seconds < 0) {
      seconds = 59;
      minutes -= 1;
    }
    secondsDisplay.textContent = seconds;
    minutesDisplay.textContent = minutes;
  }, 1000)
}

playButton.addEventListener("click", startTimer);

function pauseTimer() {
    // code to reset the timer once in is counting down
  clearInterval(interval);
}

pauseButton.addEventListener("click", pauseTimer);

function stopTimer(){
  
}