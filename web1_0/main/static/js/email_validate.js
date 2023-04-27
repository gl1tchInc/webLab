const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');


email.addEventListener('input', function (event) {

  if (email.validity.valid) {
    emailError.textContent = ''; // Сбросить содержимое сообщения
    emailError.className = 'error'; // Сбросить визуальное состояние сообщения
  } else {
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // Если поле email валдно, позволяем форме отправляться

  if(!email.validity.valid) {

    showError();
    event.preventDefault();//Прервать отправку формы
  }
});

function showError() {
  if(email.validity.valueMissing) {
    emailError.textContent = 'Введите адрес электронной почты';
  } else if(email.validity.typeMismatch) {
    emailError.textContent = 'Некорректный адрес электронной почты';
  }else if(email.validity.patternMismatch) {
    emailError.textContent = 'Некорректное адрес электронной почты';
  }
  // Задаём соответствующую стилизацию
  emailError.className = 'error active';
}