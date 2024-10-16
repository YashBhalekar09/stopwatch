var startt = document.getElementById("start");
var lapp = document.getElementById("lap");
var stopp = document.getElementById("stop");
var resett = document.getElementById("reset");

var time = document.getElementById("time");
var lapone = document.getElementById("lap1");
var laptwo = document.getElementById("lap2");
var lapthree = document.getElementById("lap3");
var lapfour = document.getElementById("lap4");
var lapfive = document.getElementById("lap5");

startt.addEventListener("click", start);
lapp.addEventListener("click", lap);
stopp.addEventListener("click", stop);
resett.addEventListener("click", reset);

let ctr = 0;
let timer;
let isRunning = false;
let elapsedTime = 0;

function updateTime() {
  elapsedTime++;
  let hours = Math.floor(elapsedTime / 3600);
  let minutes = Math.floor((elapsedTime % 3600) / 60);
  let seconds = elapsedTime % 60;

  document.getElementById("time").innerText = `${String(hours).padStart(
    2,
    "0"
  )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function start() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTime, 1000);
  }
}

function lap() {
  ctr++;
  if (ctr % 5 == 1) lapone.innerHTML = "Lap" + ctr + " : " + time.innerHTML;

  if (ctr % 5 == 2) laptwo.innerHTML = "Lap" + ctr + " : " + time.innerHTML;

  if (ctr % 5 == 3) lapthree.innerHTML = "Lap" + ctr + " : " + time.innerHTML;

  if (ctr % 5 == 4) lapfour.innerHTML = "Lap" + ctr + " : " + time.innerHTML;

  if (ctr % 5 == 0) lapfive.innerHTML = "Lap" + ctr + " : " + time.innerHTML;
}

function stop() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}

function reset() {
  stop();
  elapsedTime = 0;
  document.getElementById("time").innerText = "00:00:00";
}
