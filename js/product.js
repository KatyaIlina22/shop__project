import { products } from "./data/products.js";
import { reviews } from "./data/raviews.js";
import { addToCart } from './cartStorage.js';
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get('id'));
const product = products.find(product => product.id === productId)
const addToCartButton = document.querySelector('.product__cart')
if (addToCartButton) {
    addToCartButton.addEventListener("click", () => {
        addToCart(product.id)
    })
}
renderProduct(product)
function renderProduct(product) {
    if (!product) {
        document.querySelector('.page__product').innerHTML = '<p>Product not found</p>';
        return;
    }
    document.querySelector('.product__image').src = product.image
    document.querySelector('.product__title').textContent = product.title
    document.querySelector('.product__price').textContent = product.price
    renderCharacteristics(product.characteristics)
    document.querySelector('.description__text').textContent = product.description
    renderReviews(productId)
    initQuantitySelector(product)

}
function renderCharacteristics(characteristics) {
    const container = document.querySelector('.characteristics__items')
    container.innerHTML = ' '
    for (const [key, value] of Object.entries(characteristics)) {
        const row = document.createElement('div')
        row.classList.add('characteristics__item')
        const characteristic = document.createElement('span')
        characteristic.classList.add('product__characteristic')
        characteristic.textContent = key + ":"
        const val = document.createElement('span')
        val.classList.add('product__value')
        val.textContent = value
        row.appendChild(characteristic)
        row.appendChild(val)
        container.appendChild(row)
    }
}
function renderReviews(productId) {
    const container = document.querySelector('.reviews__items')
    container.innerHTML = ' '
    const productReviews = reviews.filter(review => review.productId === productId)
    if (productReviews.length === 0) {
        container.innerHTML = '<p>No reviews yet.</p>';
        return;
    }
    productReviews.forEach(reviews => {
        const reviewContainer = document.createElement('div')
        reviewContainer.classList.add("reviews__item")

        const reviewBody = document.createElement('div')
        reviewBody.classList.add('review__body')

        const author = document.createElement('h4')
        author.classList.add('review__author')
        author.textContent = reviews.author

        const data = document.createElement('small')
        data.classList.add('review__data')
        data.textContent = reviews.date

        const rate = document.createElement('span')
        rate.classList.add('review__rate')
        rate.textContent = `${reviews.rating}/5`

        const reviewText = document.createElement('p')
        reviewText.classList.add('review__text')
        reviewText.textContent = reviews.comment

        reviewBody.appendChild(author)
        reviewBody.appendChild(data)

        reviewContainer.appendChild(reviewBody)
        reviewContainer.appendChild(rate)
        reviewContainer.appendChild(reviewText)
        container.appendChild(reviewContainer);
    })
}
