let initDelay = document.querySelector('input[name="delay"]');
let initStep = document.querySelector('input[name="step"]');
let initAmount = document.querySelector('input[name="amount"]');
let submit = document.querySelector('form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

let creator = event => {
  event.preventDefault();

  let deleyValue = Number(initDelay.value);
  let stepValue = Number(initStep.value);
  let amountValue = Number(initAmount.value);

  for (let i = 0; i < amountValue; i++) {
    createPromise(i, deleyValue)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    deleyValue += stepValue;
  }
};
submit.addEventListener('click', creator);
