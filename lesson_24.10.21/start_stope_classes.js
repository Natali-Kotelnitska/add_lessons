const refs = {
  startBtn: document.querySelector('.js-start-btn'),
  clearBtn: document.querySelector('.js-clear-btn'),
  stopBtn: document.querySelector('.js-stop-btn'),
  par: document.querySelector('.js-timer'),
};

class Timer {
  constructor({ startBtn, clearBtn, stopBtn, par }) {
    this.startTime = 0;
    this.distance = 0;
    this.intervalID = null;
    this.startBtn = startBtn;
    this.clearBtn = clearBtn;
    this.stopBtn = stopBtn;
    this.par = par;
  }

  addListeners = () => {
    this.startBtn.addEventListener('click', this.onStart);
    this.clearBtn.addEventListener('click', this.onClear);
    this.stopBtn.addEventListener('click', this.onStop);
  };

  init = () => {
    this.addListeners();
  };

  onStart = () => {
    if (this.intervalID) {
      return;
    }

    this.startTime = Date.now();
    this.intervalID = setInterval(() => {
      if (this.distance === 0) {
        this.distance = Date.now() - this.startTime;
      } else {
        this.distance += 1000;
      }

      this.displayTimer(this.distance, this.par);
    }, 1000);
  };

  onClear = () => {
    this.onStop();
    this.distance = 0;
    this.startTime = 0;
    this.displayTimer(this.distance, this.par);
  };

  onStop = () => {
    clearInterval(this.intervalID);
    this.intervalID = null;
  };

  displayTimer(distance, domElement) {
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
}

const timer = new Timer(refs);

console.log(timer);

timer.init();
