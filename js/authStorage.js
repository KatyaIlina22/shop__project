const AUTH__KEY = 'auth'
const LOGGED_USER_KEY = 'loggedUser';
export function getUsers() {
    return JSON.parse(localStorage.getItem(AUTH__KEY)) || []
}
export function saveUsers(users) {
    localStorage.setItem(AUTH__KEY, JSON.stringify(users))
}
export function registerUsers(userData) {
    const users = getUsers()
    const exists = users.find(user => user.email === userData.email)
    if (exists) {
        throw new Error('Користувач з таким емейлом вже існує')
    }
    users.push(userData)
    saveUsers(users)
}
export function loginUsers(email, password) {
    const users = getUsers()
    const user = users.find(u => u.email === email && u.password === password)
    if (!user) {
        throw new Error("Невірний логін або пароль")

    }
    localStorage.setItem(LOGGED_USER_KEY, JSON.stringify(user))
}

export function getLoggedUser() {
    return JSON.parse(localStorage.getItem(LOGGED_USER_KEY)) || null
}
export function logoutUser() {
    localStorage.removeItem(LOGGED_USER_KEY)
}
export function isLoggedIn() {
    return !!getLoggedUser()
}