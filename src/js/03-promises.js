import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  let delayInput = +evt.target.delay.value;
  let stepInput = +evt.target.step.value;
  let amountInput = +evt.target.amount.value;

  for (let position = 1; position <= amountInput; position += 1) {
    createPromise(position, delayInput)
      .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
    delayInput += stepInput;
  }
  formEl.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}