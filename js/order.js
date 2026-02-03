import { createCartItem } from './cart.js';
import { getCart, updateQuantity, removeFromCart } from './cartStorage.js';
const cart = getCart()
const orderData = {
    custumer: {
        firstName: '',
        lastName: "",
        phone: '',
        email: "",
    },

    delivery: {
        servise: '',
        type: '',
        adress: {},
    },
    items: cart,

}
const deliveryConfig = {
    nova: {
        types: ['branch', 'locker', 'courier']
    },
    ukrposhta: {
        types: ['branch', 'courier']
    },
    meest: {
        types: ['branch', 'courier']
    }
}
const container = document.querySelector('.cart__container')
function logOrder() {
    console.clear();
    console.log('ORDER DATA:', orderData);
}
cart.forEach(item => {
    container.appendChild(createCartItem(item, "order"))
});
const costumerForm = document.getElementById('customerForm')
costumerForm.addEventListener('input', (e) => {
    const name = e.target.name;
    const value = e.target.value
    orderData.custumer[name] = value
    logOrder()
})
const deliveryForm = document.getElementById('deliveryForm')
deliveryForm.addEventListener('change', (e) => {
    if (e.target.name !== 'delivery') return
    const service = e.target.value
    orderData.delivery.servise = service
    renderDeliveryTypes(service)
    logOrder()
})
function renderDeliveryTypes(service) {
    const deliveryType = document.getElementById('deliveryType')
    const types = deliveryConfig[service].types
    deliveryType.innerHTML = `
    <h2>Тип доставки</h2>
    ${types.map(type => `
        <label>
            <input type="radio" name="deliveryType" value="${type}">${getTypeLabel(type)}</input>
        </label>
    `).join('')}
    `
}
function getTypeLabel(type) {
    return {
        branch: 'Відділення',
        locker: 'Поштомат',
        courier: 'Курʼєр'
    }[type];
}

const deliveryType = document.getElementById('deliveryType')
deliveryType.addEventListener('change', (e) => {
    const type = e.target.value
    orderData.delivery.type = type
    renderAddressFields(type);
    logOrder()
})
const addressFields = document.getElementById('addressFields')
addressFields.addEventListener("input", (e) => {
    orderData.delivery.adress[e.target.name] = e.target.value
    logOrder()
})
function renderAddressFields(type) {
    orderData.delivery.adress = {}
    if (type === 'branch') {
        addressFields.innerHTML = `
    <input name="city" placeholder="Місто"> </input>
    <div class="error" data-error-for="city"></div>
     <input name="branchNumber" placeholder="Номер відділення"> </input>
      <div class="error" data-error-for="branchNumber"></div>
    `
    }
    else if (type === 'locker') {
        addressFields.innerHTML = `
    <input name="city" placeholder="Місто"> </input>
    <div class="error" data-error-for="city"></div>
    <input name="lockerNumber" placeholder="Номер поштомата" > </input>
    <div class="error" data-error-for="lockerNumber"></div>
    `
    }
    else if (type === 'courier') {
        addressFields.innerHTML = `
    <input name="city" placeholder="Місто"> </input>
     <div class="error" data-error-for="city"></div>
     <input name="street" placeholder="Вулиця "> </input>
      <div class="error" data-error-for="street"></div>
      <input name="house" placeholder="Номер будинка "> </input>
       <div class="error" data-error-for="house"></div>
       <input name="apartment" placeholder="Номер квартири" > </input>
       <div class="error" data-error-for="apartment"></div>
       
    `
    }
}

function showError(field, message) {
    const error = document.querySelector(`[data-error-for="${field}"]`)
    error.textContent = message
    error.classList.add("visible")
}
function clearError(field) {
    const error = document.querySelector(`[data-error-for="${field}"]`)
    error.textContent = ''
    error.classList.remove("visible")
}
function required(value) {
    return (value && value.trim() !== "")
}
function validateRequired({ name, value, label }) {
    if (!required(value)) {
        showError(name, `поле${label} не має бути порожнє`)
        return false
    }
    clearError(name)
    return true
}
function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}
function isPhone(value) {
    return /^[0-9+()\s-]{10,}$/.test(value)
}
function validateEmail() {
    const value = orderData.custumer.email
    if (!value) {
        showError("email", 'поле email не має бути порожнє')
        return false
    }
    if (!isEmail(value)) {
        showError("email", 'невірний формат email')
        return false
    }

    clearError("email")
    return true

}
function validatePhone() {
    const value = orderData.custumer.phone
    if (!value) {
        showError("phone", 'поле телефон не має бути порожнє')
        return false
    }
    if (!isPhone(value)) {
        showError("phone", 'невірний номер телефону')
        return false
    }

    clearError("phone")
    return true

}
const submitOrderBtn = document.getElementById("submitOrder")
submitOrderBtn.addEventListener("click", () => {
    if (validateForm()) {
        alert("Замовлення прийнято")

        clearCart()

    }
    else {
        alert("Ви не заповнили усі поля!")
    }
})
function validateForm() {
    let valid = true
    valid &= validateRequired({ name: "firstName", value: orderData.custumer.firstName, label: "ім'я" })
    valid &= validateRequired({ name: "lastName", value: orderData.custumer.lastName, label: "прізвище" })
    valid &= validatePhone()
    valid &= validateEmail()
    valid &= validateDeliveryService()
    valid &= validateDeliverytype()
    valid &= validateDeliveryDetails()
    return !!valid
}
function validateDeliveryService() {
    const value = orderData.delivery.servise
    if (!value) {
        showError("deliveryService", "оберіть службу доставки")
        return false
    }
    clearError("deliveryService")
    return true
}
function validateDeliverytype() {
    const value = orderData.delivery.type
    if (!value) {
        showError("deliveryType", "оберіть тип доставки")
        return false
    }
    clearError("deliveryType")
    return true
}
function validateDeliveryDetails() {
    const type = orderData.delivery.type
    let valid = true
    if (type === 'branch') {
        valid &= validateRequired({ name: "city", value: orderData.delivery.adress.city, label: 'місто' })
        valid &= validateRequired({ name: "branchNumber", value: orderData.delivery.adress.branchNumber, label: 'номер відділення' })
    }
    else if (type === 'locker') {
        valid &= validateRequired({ name: "city", value: orderData.delivery.adress.city, label: 'місто' })
        valid &= validateRequired({ name: "lockerNumber", value: orderData.delivery.adress.lockerNumber, label: 'номер поштомата' })
    }
    else if (type === 'courier') {
        valid &= validateRequired({ name: "city", value: orderData.delivery.adress.city, label: 'місто' })
        valid &= validateRequired({ name: "street", value: orderData.delivery.adress.street, label: "вулиця" })
        valid &= validateRequired({ name: "house", value: orderData.delivery.adress.house, label: "номер будинку" })
        valid &= validateRequired({ name: "apartment", value: orderData.delivery.adress.apartment, label: "номер квартири" })
    }
    return !!valid

}
function clearFormFields() {
    document.querySelectorAll('input[name]').forEach(input => input.value = '')

    // Очистка radio
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false)

    // Очистка orderData
    orderData.custumer = {
        firstName: "",
        lastName: "",
        phone: "",
        email: ""
    }
    orderData.delivery.servise = ''
    orderData.delivery.type = ''
    orderData.delivery.address = {}

    // Очистка помилок
    document.querySelectorAll('.error').forEach(el => el.textContent = '')

    // Очистка динамічних address полів
    addressFields.innerHTML = '' // вони з’являться лише після нового виб
}
function clearCart() {
    localStorage.removeItem('cart') // або твоя реалізація
    const cartContainer = document.querySelector('.cart__container')
    if (cartContainer) cartContainer.innerHTML = ''
}
