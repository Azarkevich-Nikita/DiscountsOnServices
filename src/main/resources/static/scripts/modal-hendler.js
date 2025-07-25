const loginBtn = document.querySelector('.main-logIn');
const modal = document.getElementById('loginModal');
const closeBtn = document.getElementById('closeModal');

const overlay = document.querySelector('.overlay');

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