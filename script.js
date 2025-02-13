let start = document.querySelector(".jsStart");
let restart = document.querySelector(".jsRestart");

let hours = document.querySelector(".jsHours");
let minutes = document.querySelector(".jsMinutes");
let seconds = document.querySelector(".jsSeconds");

let timer;

let secondsCount = 0;
let minutesCount = 0;
let hoursCount = 0;

let isCounting = false;

function startCount() {
  timer = setInterval(() => {
    secondsCount++;
    if (secondsCount === 60) {
      secondsCount = 0;
      minutesCount++;
    }
    if (minutesCount === 60) {
      minutesCount = 0;
      hoursCount++;
    }
    if (secondsCount < 10) {
      seconds.innerHTML = `0${secondsCount}`;
    } else {
      seconds.innerHTML = `${secondsCount}`;
    }

    if (minutesCount < 10) {
      minutes.innerHTML = `0${minutesCount}`;
    } else {
      minutes.innerHTML = `${minutesCount}`;
    }

    if (hoursCount < 10) {
      hours.innerHTML = `0${hoursCount}`;
    } else {
      hours.innerHTML = `${hoursCount}`;
    }
  }, 1000);
}

function pauseCount() {
  clearInterval(timer);
}

start.addEventListener("click", () => {
  if (!isCounting) {
    isCounting = true;
    start.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    start.style.backgroundColor = "rgb(255, 165, 0)";
    startCount();
  } else if (isCounting) {
    isCounting = false;
    start.innerHTML = `<i class="fa-solid fa-play"></i>`;
    start.style.backgroundColor = "rgb(0, 255, 0)";
    pauseCount();
  }
});

restart.addEventListener("click", () => {
  start.innerHTML = `<i class="fa-solid fa-play"></i>`;
  start.style.backgroundColor = "rgb(0, 255, 0)";
  isCounting = false;
  pauseCount();
  secondsCount = 0;
  minutesCount = 0;
  hoursCount = 0;
  seconds.innerHTML = `0${secondsCount}`;
  minutes.innerHTML = `0${minutesCount}`;
  hours.innerHTML = `0${hoursCount}`;
});
