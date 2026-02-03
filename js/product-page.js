import { products } from "./data/products.js";
import { addToCart } from './cartStorage.js';
function createProductCard(product) {
    return `
  <div class="our-products__card products-body">
       <a href="product.html?id=${product.id}" class="products-body__card" data-category = "${product.category}">
          <div class ="products-body__image"><img class="products-body__img" src="${product.image}" alt="${product.title}"></div>
          <h3 class="products-body__title">${product.title}</h3>
          <span class="products-body__price">$${product.price}</span>
       </a>
       <button class="products-body__button" data-id="${product.id}">add to cart</button>
  </div>
    `
}
const container = document.getElementById('productsGrid');
container.addEventListener('click', (event) => {
    const button = event.target.closest('.products-body__button');
    if (!button) return;

    const productId = Number(button.dataset.id);

    addToCart(productId);

    alert('Added to cart!')
});
function renderProducts(products) {

    container.innerHTML = products.map(createProductCard).join('');

}
renderProducts(products);
const state = {
    category: "all",
    sort: "default"
}
function filterProducts(products, category) {
    if (category === "all") return products
    return products.filter(product => product.category === category)
}
function sortProducts(products, sortCategory) {
    const result = [...products]
    if (sortCategory === "price-asc") {
        return result.sort((a, b) => a.price - b.price)
    }
    if (sortCategory === "price-desc") {
        return result.sort((a, b) => b.price - a.price)
    }
    if (sortCategory === "alphabet") {
        return result.sort((a, b) => a.title.localeCompare(b.title))
    }
    return result
}
function applyFiltersAndSort() {
    let result = [...products]
    result = filterProducts(result, state.category)
    result = sortProducts(result, state.sort)
    renderProducts(result)

}
const filterButtons = document.querySelectorAll('[data-category]')
filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        state.category = e.currentTarget.dataset.category
        filterButtons.forEach(btn => btn.classList.remove('active'))
        e.currentTarget.classList.add('active')
        applyFiltersAndSort();
    })
})
document.getElementById('sortSelect').addEventListener('change', (e) => {
    state.sort = e.target.value
    applyFiltersAndSort()
})

