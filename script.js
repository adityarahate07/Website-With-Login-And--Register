const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Show Register Form
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Show Login Form
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Open Popup
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

// Close Popup
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});