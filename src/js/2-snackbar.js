
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
  const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('input[name ="delay"]'),

  button: document.querySelector('button[type ="submit"]'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const delay = refs.input.value.trim();

  const stateInput = document.querySelector('input[type = "radio"]:checked');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateInput.value === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });


    promise.then(delay => {
        iziToast.show({
            title: 'Success',
            message: `✅ Fulfilled promise in ${delay}ms`,
            messageColor: '#fff',
            position: "center",
            titleColor: '#fff',
            titleSize: '16px',
            backgroundColor: '#59a10d',
            progressBar: '#326101',
            position: 'topRight',
        });
    })
.catch(delay => {
    iziToast.show({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'center',
        messageColor: '#fff',
        titleColor: '#fff',
        titleSize: '16px',
        backgroundColor: '#ef4040',
        progressBar: '#51b1b',
        position: 'topRight',
    });
});
});