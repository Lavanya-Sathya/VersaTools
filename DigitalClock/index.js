let ampm = document.getElementById("ampm");
const month = [
  "Jan",
  "Feb",
  "Mar",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let date = new Date();

let d = date.getDate();
let m = date.getMonth();
let y = date.getFullYear();

document.getElementById("date").innerHTML = d;
document.getElementById("month").innerHTML = month[m];
document.getElementById("year").innerHTML = y;

function displayTime() {
  let date = new Date();
  let hr = date.getHours();
  let mins = padZero(date.getMinutes());
  let secs = padZero(date.getSeconds());

  if (hr > 12) {
    hr = padZero(hr - 12);
    ampm.innerHTML = "PM";
  } else {
    ampm.innerHTML = "AM";
  }
  document.getElementById("hour").innerHTML = hr;
  document.getElementById("minute").innerHTML = mins;
  document.getElementById("second").innerHTML = secs;

  function padZero(num) {
    return num < 10 ? "0" + num : num;
  }
}

function start() {
  timer = setInterval(updateTime, 1000);
  isRunning = !isRunning;
}
function stop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = !isRunning;
  }
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").innerHTML = "00:00:00";
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const display = document.getElementById("display");
  display.innerHTML =
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;
}

reset();

setInterval(displayTime, 70);
