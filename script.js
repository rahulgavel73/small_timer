const hours = document.querySelector("#hrs");
const minutes = document.querySelector("#mins");
const seconds = document.querySelector("#seconds");
const milisec = document.querySelector("#ms");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");
let HoursTime = 0;
let MinutesTime = 0;
let SecondsTime = 0;
let MilisecTime = 0;
let interval;
startBtn.addEventListener("click", () => {
  interval = setInterval(() => {
    MilisecTime += 10;
    milisec.textContent = MilisecTime;
    if (MilisecTime === 1000) {
      MilisecTime = 0;
      SecondsTime++;
      seconds.textContent = SecondsTime;
      if (SecondsTime === 60) {
        SecondsTime = 0;
        MinutesTime++;
        minutes.textContent = MinutesTime;
        if (MinutesTime === 60) {
          MinutesTime = 0;
          HoursTime++;
          hours.textContent = HoursTime;
        }
      }
    }
  }, 10);
  startBtn.disabled = true;
});
stopBtn.addEventListener("click",()=>{
    clearInterval(interval);
    startBtn.disabled=false;
});
resetBtn.addEventListener("click", () => {
  HoursTime = 0;
  MinutesTime = 0;
  SecondsTime = 0;
  MilisecTime = 0;
  milisec.textContent ="00";
  seconds.textContent = "00";
  minutes.textContent = "00";
  hours.textContent = "00";
  clearInterval(interval);
  startBtn.disabled=false;
});
