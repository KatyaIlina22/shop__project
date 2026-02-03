const CART_KEY = 'cart'
export function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || []
}
export function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
}
export function addToCart(productId) {
    const cart = getCart()
    const item = cart.find(p => p.productId === productId)
    if (item) {
        item.quantity += 1
    }
    else {
        cart.push({ productId, quantity: 1 })
    }
    saveCart(cart)
}
export function removeFromCart(productId) {
    const cart = getCart().filter(p => p.productId !== productId)
    saveCart(cart)

}
export function updateQuantity(productId, quantity) {
    const cart = getCart()
    const item = cart.find(p => p.productId === productId)
    if (item && quantity >= 1) item.quantity = quantity
    saveCart(cart)
}