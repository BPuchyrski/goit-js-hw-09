let startBtn = document.querySelector('button[data-start]');
let stopBtn = document.querySelector('button[data-stop]');
let background = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timer = null;
stopBtn.disabled = true;

let start = () => {
  let colorsBg = () => {
    background.style.backgroundColor = `${getRandomHexColor()}`;
  };
  timer = setInterval(colorsBg, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
};

let stop = () => {
  clearInterval(timer);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
