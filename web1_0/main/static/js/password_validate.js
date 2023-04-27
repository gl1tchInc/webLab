const passwordForm  = document.getElementsByTagName('form')[0];

const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');

password.addEventListener('input', function (event) {

  if (password.validity.valid) {
    passwordError.textContent = ''; // Сбросить содержимое сообщения
    passwordError.className = 'error'; // Сбросить визуальное состояние сообщения
  } else {
    // Если поле не валидно, показываем правильную ошибку
    passwordErrors();
  }
});

passwordForm.addEventListener('submit', function (event) {
  // Если поле email валдно, позволяем форме отправляться

  if(!password.validity.valid) {
    // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
    passwordErrors();
    // Затем предотвращаем стандартное событие отправки формы
    event.preventDefault();
  }
});

function passwordErrors() {
  if(password.validity.valueMissing) {
    passwordError.textContent = 'Введите пароль';
  } else if(password.validity.patternMismatch) {
    // Если поле содержит не email-адрес,
    // отображаем следующее сообщение об ошибке
    passwordError.textContent = 'Некорректное пароль';
  } else if(password.validity.tooShort) {

    passwordError.textContent = `Пароль должен быть не менее, чем ${ password.minLength } символов`;
  } else if(password.validity.tooLong) {
    passwordError.textContent = `Пароль должен быть не более, чем ${ password.minLength } символов`;
  }

  // Задаём соответствующую стилизацию
  passwordError.className = 'error active';
}