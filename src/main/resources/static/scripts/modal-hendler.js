const loginBtn = document.querySelector('.main-logIn');
const modal = document.getElementById('loginModal');
const closeBtn = document.getElementById('closeModal');
const overlay = document.querySelector('.overlay');

const forgetPasswordModal = document.getElementById('forgetPassword');
const switchforgetPassword = document.getElementById('switchforgetPassword');
const closeforgetPassword = document.getElementById('closeforgetPassword');
const registerModal = document.getElementById('registerModal');
const closeRegister = document.getElementById('closeRegister');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');

// Открыть логин-модал
loginBtn.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
});

// Закрыть логин-модал
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
});

// Переключиться на регистрацию
switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
    registerModal.classList.add('active');
});

// Переключиться на логин из регистрации
switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.classList.remove('active');
    modal.classList.add('active');
});

// Закрыть регистрацию
closeRegister.addEventListener('click', () => {
    registerModal.classList.remove('active');
    overlay.classList.remove('active');
});

// Закрытие по клику вне окна
window.addEventListener('click', (e) => {
    if (e.target === overlay) {
        modal.classList.remove('active');
        registerModal.classList.remove('active');
        overlay.classList.remove('active');
    }
});

// Переключиться на востановление пароля
switchforgetPassword.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
    forgetPasswordModal.classList.add('active');
});


// Закрыть востановление пароля
closeforgetPassword.addEventListener('click', () => {
    forgetPasswordModal.classList.remove('active');
    overlay.classList.remove('active');
});

const stepEmail = document.getElementById('stepEmail');
const stepCode = document.getElementById('stepCode');
const stepNewPass = document.getElementById('stepNewPass');

document.getElementById('formEmail').addEventListener('submit', function (e) {
  e.preventDefault();
  stepEmail.classList.remove('active');
  stepCode.classList.add('active');
});

document.getElementById('formCode').addEventListener('submit', function (e) {
  e.preventDefault();
  stepCode.classList.remove('active');
  stepNewPass.classList.add('active');
});

document.getElementById('formNewPass').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Password successfully reset!');
  // Тут можешь закрыть модал
});
