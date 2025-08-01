const API_URL = 'http://localhost:8080/api/v1/users';

// Получаем данные из input-полей
function getUserInputRegistration() {
  return {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  };
}

function getUserInputLogin() {
  return {
    email: document.getElementById('email-log').value,
    password: document.getElementById('password-log').value
  };
}


// Регистрация
function register() {
  const user = getUserInputRegistration();
  console.log("Данные для регистрации:", user);

  fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(data => {
    alert('Регистрация прошла успешно: ' + data.email);
  })
  .catch(error => {
    alert('Ошибка при регистрации');
    console.error(error);
    console.log(error);
  });
}

//Авторизация
function login() {
  const user = getUserInputLogin();

  fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(response => response.text())
  .then(message => {
    alert('Ответ сервера: ' + message);
  })
  .catch(error => {
    alert('Ошибка при входе');
    console.error(error);
    console.log(error);
  });
}
