{}
const nameForm  = document.getElementsByTagName('form')[0];

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

nameForm.addEventListener('submit', function (event) {


  if(!userName.validity.valid) {
    nameErrors();
    event.preventDefault();
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