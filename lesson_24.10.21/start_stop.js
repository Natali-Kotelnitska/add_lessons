const refs = {
  startBtn: document.querySelector('.js-start-btn'),
  clearBtn: document.querySelector('.js-clear-btn'),
  stopBtn: document.querySelector('.js-stop-btn'),
  par: document.querySelector('.js-timer'),
};

let startTime = 0;
let distance = 0;
let intervalID = null;

refs.startBtn.addEventListener('click', onStart);
refs.clearBtn.addEventListener('click', onClear);
refs.stopBtn.addEventListener('click', onStop);

function onStart() {
  if (intervalID) {
    return;
  }

  startTime = Date.now();
  intervalID = setInterval(() => {
    if (distance === 0) {
      distance = Date.now() - startTime;
    } else {
      distance += 1000;
    }

    displayTimer(distance, refs.par);
  }, 1000);
}

function onClear() {
  onStop();
  distance = 0;
  startTime = 0;
  displayTimer(distance, refs.par);
}

function onStop() {
  clearInterval(intervalID);
  intervalID = null;
}

function displayTimer(distance, domElement) {
  if (distance !== 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    domElement.innerHTML = `days: ${days} hours: ${hours} mins: ${mins} seconds: ${seconds}`;
  } else {
    domElement.innerHTML = 'days: 00 hours: 00 mins: 00 seconds: 00';
  }
}
