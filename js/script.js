import { isLoggedIn, getLoggedUser, logoutUser } from './authStorage.js';
import './authModal.js';
const burger = document.querySelector(".burger")
const menu = document.querySelector(".menu-header")
if (burger) {
    burger.addEventListener("click", () => {
        menu.classList.toggle("active")
        burger.classList.toggle("active")
    })
}
const slides = document.querySelectorAll(".testimonials__slide")
const prevBtn = document.querySelector(".testimonials__button.prev")
const nextBtn = document.querySelector(".testimonials__button.next")
if (slides.length > 0 && prevBtn && nextBtn) {
    const totalSlides = slides.length
    let currentIndex = 0

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'))
        slides[index].classList.add("active")
    }
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex)
    })
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex)
    })
}
const links = document.querySelectorAll('.menu-header__link')
const current = window.location.pathname.split('/').pop()
const pagesWithoutActive = ['cart.html'];
links.forEach(link => {
    link.classList.remove('active');
    if (
        !pagesWithoutActive.includes(current) &&
        link.getAttribute('href') === current
    ) {
        link.classList.add('active');
    }
})
const authIcon = document.getElementById('authorisation')
const authModal = document.querySelector('.header__modal')
const modals = document.querySelectorAll(".modal__view")
const loginView = document.getElementById('loginView')

const userView = document.getElementById('userView')
authIcon.addEventListener('click', () => {
    authModal.classList.remove('hidden')
    modals.forEach(m => m.classList.add('hidden'))
    if (isLoggedIn()) {
        userView.classList.remove('hidden')
    }
    else {
        loginView.classList.remove('hidden')
    }

})


