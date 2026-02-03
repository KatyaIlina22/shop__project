import { products } from './data/products.js';
import { getCart, updateQuantity, removeFromCart } from './cartStorage.js';


const cartContainer = document.querySelector(".cart__items");
if (cartContainer) {
    renderCart();
}

function renderCart() {
    const container = document.querySelector(".cart__items")
    container.innerHTML = ''
    const cart = getCart()
    if (cart.length === 0) {
        container.innerHTML = `
        <p> cart is empty</p>
        `
        updateCartTotal()
        return
    }
    cart.forEach(item => {
        container.appendChild(createCartItem(item, "cart"));

    });
    updateCartTotal();
}
export function createCartItem(item, mode) {
    const product = products.find(p => p.id === item.productId)
    const productItem = document.createElement('div')
    productItem.classList.add('cart__item')

    productItem.innerHTML = `
    <div class ="cart__image"><img class="cart__img" src="${product.image}" alt="${product.title}"></div>
   <div class="cart__body">
   <div class="cart__info"> <h3 class="cart__title">${product.title}</h3></div>
       <div class="cart__controls">
            <div class="cart__quantity quantity"> 
            <button class="quantity__button btn-decrease">-</button>
            <span class="quantity__value">${item.quantity}</span>
             <button class="quantity__button btn-increase">+</button>
            </div>
            <span class="item__price">$ ${(product.price * item.quantity).toFixed(2)
        }</span >
        ${mode === 'cart' ? `
           <button class="item__button remove-btn"><img class="item__img"  src="images/remove.jpg"> </button>
        ` : ''}
           
       </div>
   </div>
    `
    if (mode === 'cart') {
        attachCartItemEvents(productItem, item, product)
    }
    return productItem;
}
function attachCartItemEvents(productItem, item, product) {
    const quantityValue = productItem.querySelector('.quantity__value')
    const itemPrice = productItem.querySelector(".item__price")
    productItem.querySelector('.btn-increase').addEventListener('click', () => {
        if (item.quantity < product.quantity) {
            updateQuantity(product.id, item.quantity + 1)
            item.quantity++
            updateCartItemUI(quantityValue, itemPrice, product.price, item.quantity);
            updateCartTotal();
        }
    })
    productItem.querySelector('.btn-decrease').addEventListener('click', () => {
        if (item.quantity > 1) {
            updateQuantity(product.id, item.quantity - 1)
            item.quantity--
            updateCartItemUI(quantityValue, itemPrice, product.price, item.quantity);
            updateCartTotal();
        }
    }
    )
    productItem.querySelector('.remove-btn').addEventListener('click', () => {
        removeFromCart(product.id)
        renderCart()
        updateCartTotal();
    })

}
function updateCartItemUI(qtyEl, priceEl, price, quantity) {
    qtyEl.textContent = quantity
    priceEl.textContent = `$${(price * quantity).toFixed(2)}`
}
function updateCartTotal() {
    const cart = getCart()

    const totalEl = document.querySelector('.cart__total')
    if (!totalEl) return;
    if (cart.length === 0) {
        totalEl.textContent = ``
        return
    }
    const total = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.productId)
        return sum + product.price * item.quantity
    }, 0)
    totalEl.textContent = `Total: $${total.toFixed(2)}`
}
