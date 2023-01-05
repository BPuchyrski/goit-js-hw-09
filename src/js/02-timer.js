import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;
const days = document.querySelector('span[data-days]');
const hrs = document.querySelector('span[data-hours]');
const mins = document.querySelector('span[data-minutes]');
const secs = document.querySelector('span[data-seconds]');

let userDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      startBtn.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      userDate = selectedDates[0].getTime();
    }
  },
};

const flatP = flatpickr('input#datetime-picker', options);

const countingDown = () => {
  let timer = setInterval(() => {
    startBtn.disabled = true;
    let ms = userDate - Date.now();
    const hours = Math.floor(ms / 3600000);
    let minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor(((ms % 360000) % 60000) / 1000);
    const msToDays = Math.floor(ms / 86400000);
    secs.textContent = seconds > 10 ? seconds : addLeadingZero(seconds);
    mins.textContent = minutes > 10 ? minutes : addLeadingZero(minutes);
    hrs.textContent = hours > 10 ? hours : addLeadingZero(hours);
    days.textContent = msToDays > 10 ? msToDays : addLeadingZero(msToDays);
    if (ms <= 0) {
      clearInterval(timer);
      secs.textContent = '00';
      mins.textContent = '00';
      hrs.textContent = '00';
      days.textContent = '00';
    }
  }, 1000);
};

startBtn.addEventListener('click', countingDown);
function addLeadingZero(val) {
  return String(val).padStart(2, '0');
}
