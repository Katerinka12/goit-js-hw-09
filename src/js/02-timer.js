import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const text = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const second = document.querySelector('span[data-seconds]');
const minute = document.querySelector('span[data-minutes]');
const hour = document.querySelector('span[data-hours]');
const day = document.querySelector('span[data-days]');

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectDate = selectedDates[0];
    if (selectDate < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
    }
  },
};

flatpickr(text, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
console.log(text.value);
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

btnStart.addEventListener('click', () => {
  let timer = setInterval(() => {
    const selectDate = selectDate[0];
    const deltaMs = selectDate - new Date();
 
    let countdown = convertMs(deltaMs);
    console.log(countdown);
    btnStart.disabled = true;
    if (countdown >= 0) {
      let timeObject = convertMs(countdown);
      day.textContent = addLeadingZero(timeObject.days);
      hour.textContent = addLeadingZero(timeObject.hours);
      minute.textContent = addLeadingZero(timeObject.minutes);
      second.textContent = addLeadingZero(timeObject.seconds);
    } else {
      clearInterval(timer);
    }
  }, 1000);
});