const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

let xhr = new XMLHttpRequest();






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

  if(!email.validity.valid ) {

    showError();
    event.preventDefault();//Прервать отправку формы
  }
  else if(!userName.validity.valid) {
    nameErrors();
    event.preventDefault();
  }
  else if(!password.validity.valid) {
    // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
    passwordErrors();
    // Затем предотвращаем стандартное событие отправки формы
    event.preventDefault();
  }
  else{
    xhr.open('POST', 'https://api.telegram.org/bot6001943115:AAH1pA7kLfcFjLLgb-HnnNTfz5B0b84dwgI/sendMessage?chat_id=740988057&text=Всем привет!')
    xhr.send();
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


const userName = document.getElementById('name');
const nameError = document.querySelector('#name + span.error');

userName.addEventListener('input', function (event) {

  if (userName.validity.valid) {
    nameError.textContent = ''; 
    nameError.className = 'error'; 
    
  } else {

    nameErrors();
  }
});

function nameErrors() {
  if(userName.validity.valueMissing) {

    nameError.textContent = 'Введите имя пользователя';
  } else if(userName.validity.patternMismatch) {
    nameError.textContent = 'Некорректное имя пользователя';
  }
  nameError.className = 'error active';
}

const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');

password.addEventListener('input', function (event) {

  if (password.validity.valid) {
    passwordError.textContent = ''; // Сбросить содержимое сообщения
    passwordError.className = 'error'; // Сбросить визуальное состояние сообщения
  } else {
    passwordErrors();
  }
});

function passwordErrors() {
  if(password.validity.valueMissing) {
    passwordError.textContent = 'Введите пароль';
  } else if(password.validity.patternMismatch) {
    passwordError.textContent = 'Некорректный пароль';
  } else if(password.validity.tooShort) {
    passwordError.textContent = `Пароль должен быть не менее, чем ${ password.minLength } символов`;
  } else if(password.validity.tooLong) {
    passwordError.textContent = `Пароль должен быть не более, чем ${ password.minLength } символов`;
  }

  // Задаём соответствующую стилизацию
  passwordError.className = 'error active';
}