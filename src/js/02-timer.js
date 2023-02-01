import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";
import "notiflix/dist/notiflix-3.2.6.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() > Date.now()) {
            startTime = selectedDates[0].getTime();
            refs.startBtn.disabled = false;
            return;
        } else {
            Notiflix.Notify.failure("Please choose a date in the future");
            refs.startBtn.disabled = true;
            clearInterval(timerId)
        }
    },
};

const refs = {
    inputEl: document.querySelector('input#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    daysSpn: document.querySelector('span[data-days]'),
    hoursSpn: document.querySelector('span[data-hours]'),
    minutesSpn: document.querySelector('span[data-minutes]'),
    secondsSpn: document.querySelector('span[data-seconds]'),
}

refs.startBtn.disabled = true;
let startTime = 0;
let timerId = null;
refs.startBtn.addEventListener('click', onStartBtnClick);

flatpickr(refs.inputEl, options);

function onStartBtnClick() {
    countDownTimer();
    timerId = setInterval(countDownTimer, 1000);
    refs.startBtn.disabled = true;
}

function countDownTimer() {
    const nowTime = startTime - Date.now();
    const diff = convertMs(nowTime);
    refs.daysSpn.textContent = diff.days;
    refs.hoursSpn.textContent = diff.hours;
    refs.minutesSpn.textContent = diff.minutes;
    refs.secondsSpn.textContent = diff.seconds;
    if (nowTime <= 1000) {
        clearInterval(timerId);
        refs.startBtn.disabled = false;
    }
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}




