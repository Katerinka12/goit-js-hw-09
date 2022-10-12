
const startBtn = document.querySelector('button[data-start]');
const endBtn = document.querySelector('button[data-stop]');
endBtn.disabled = true;
let  timer = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    endBtn.disabled = false;

    timer = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  })

  endBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    endBtn.disabled = true;
    clearInterval(timer);
  })