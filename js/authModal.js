import { loginUsers, logoutUser, getLoggedUser, isLoggedIn, registerUsers } from './authStorage.js';
// Modal root element
const closeModal = document.getElementById('closeModal')
const modalItem = document.querySelector('.header__modal')

// Modal views
const loginView = document.getElementById('loginView')
const registerView = document.getElementById('registerView')
const userView = document.getElementById('userView')
// Navigation buttons
const goLoginBtn = document.getElementById('goLogin')
const goRegisterBtn = document.getElementById('goRegister')

// Action buttons
const registerBtn = document.getElementById('registerBtn')
const loginBtn = document.getElementById('loginBtn')
const logoutBtn = document.getElementById('logoutBtn')

const registerForm = document.getElementById('registerForm')
const loginForm = document.getElementById('loginForm')

setupAuthFormValidation(registerForm, emailValidator, strongPasswordValidator)
setupAuthFormValidation(loginForm, emailValidator, passwordValidator)



function setupAuthFormValidation(form, emailValidator, passwordValidator) {
    const emailInput = form.querySelector('[name="email"]')
    const passwordInput = form.querySelector('[name="password"]')
    const passwordError = form.querySelector('[name="password-error"]')
    const emailError = form.querySelector('[name="email-error"]')
    emailInput.addEventListener("input", () => {
        const error = emailValidator(emailInput.value)
        emailError.textContent = error
    })
    passwordInput.addEventListener("input", () => {
        const error = passwordValidator(passwordInput.value)
        passwordError.textContent = error
    })



}
// Handle user registration
registerBtn.addEventListener("click", () => {
    const data = getFormData(registerForm)
    const passwordErrorText = registerForm.querySelector('[name="password-error"]')
    const emailErrorText = registerForm.querySelector('[name="email-error"]')
    passwordErrorText.textContent = ''
    emailErrorText.textContent = ''
    const emailError = emailValidator(data.email)
    const passwordError = strongPasswordValidator(data.password)

    if (!emailError && !passwordError) {
        handleRegister(data)
        registerForm.reset()
    }
    else {
        passwordErrorText.textContent = passwordError
        emailErrorText.textContent = emailError
        registerForm.querySelector('[name="password"]').value = ''
    }

})
// Handle user login
loginBtn.addEventListener("click", () => {
    const data = getFormData(loginForm)
    const passwordErrorText = loginForm.querySelector('[name="password-error"]')
    const emailErrorText = loginForm.querySelector('[name="email-error"]')
    passwordErrorText.textContent = ''
    emailErrorText.textContent = ''
    const emailError = emailValidator(data.email)
    const passwordError = passwordValidator(data.password)

    if (!emailError && !passwordError) {
        handleLogin(data.email, data.password)
        loginForm.reset()
    }
    else {
        passwordErrorText.textContent = passwordError
        emailErrorText.textContent = emailError
        loginForm.querySelector('[name="password"]').value = ''
    }

})




function emailValidator(email) {
    if (!email) return 'Введіть email';
    if (!/^\S+@\S+\.\S+$/.test(email)) return 'Некоректний email';
    return '';
}
function passwordValidator(password) {
    if (!password) return 'Введіть пароль';
    return '';
}
function strongPasswordValidator(password) {
    if (!password) return 'Введіть пароль';
    if (password.length < 8) return 'Мінімум 8 символів';
    if (!/[a-zA-Z]/.test(password)) return 'Додайте літеру';
    if (!/\d/.test(password)) return 'Додайте цифру';
    return '';
}

// Close modal
closeModal.addEventListener('click', () => {
    modalItem.classList.add('hidden')
})


logoutBtn.addEventListener('click', () => {
    logoutUser()
    showModal(registerView)
})
// Switch to Register view
goRegisterBtn.addEventListener('click', () => {
    registerView.classList.remove('hidden')
    loginView.classList.add('hidden')
})

// Switch to Login view
goLoginBtn.addEventListener('click', () => {
    loginView.classList.remove('hidden')
    registerView.classList.add('hidden')
})
// Extract values from form inputs
function getFormData(form) {
    const data = {}
    const inputs = form.querySelectorAll('.modal__input')
    inputs.forEach(input => {
        data[input.name] = input.value
    })
    return data
}
// Login flow
function handleLogin(email, password) {
    try {
        loginUsers(email, password)
        showModal(userView)
    }
    catch (error) {
        alert(error.message)
    }
}
// Registration flow
function handleRegister(userData) {
    try {
        registerUsers(userData)
        alert("Успішна реєстрація")
        showModal(loginView)
    }
    catch (error) {
        alert(error.message)
    }
}
// Hide all modal views
function hideAllModals() {
    const modals = document.querySelectorAll(".modal__view")
    modals.forEach(m => m.classList.add('hidden'))
}
// Show specific modal view
function showModal(modal) {
    hideAllModals()
    modal.classList.remove("hidden")
}