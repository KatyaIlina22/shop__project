const burger = document.querySelector(".burger")
const menu = document.querySelector(".menu-header")
burger.addEventListener("click", () => {
    menu.classList.toggle("active")
    burger.classList.toggle("active")
})
const slides = document.querySelectorAll(".testimonials__slide")
const prevBtn = document.querySelector(".testimonials__button.prev")
const nextBtn = document.querySelector(".testimonials__button.next")
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
