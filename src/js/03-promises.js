import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  let delayInput = evt.target.delay.value;
  let stepInput = evt.target.step.value;
  let amountInput = evt.target.amount.value;

  for (let position = 1; position <= amountInput; position += 1) {
    createPromise(position, delayInput)
      .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
      Notiflix.Notify.success(`❌ Rejected promise ${position} in ${delay}ms`);
      })
    delayInput += stepInput;
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    reject(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });