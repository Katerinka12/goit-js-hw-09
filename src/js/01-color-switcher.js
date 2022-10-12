
const startBtn = document.querySelector('button[data-start]');
const endBtn = document.querySelector('button[data-stop]');
endBtn.disabled = true;


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  startBtn.addEventListener('click', getRandomHexColor);