// NOTIF

const buyButton = document.querySelector('.buyButton')

const countBasket = document.querySelector('.count-basket')
const finalBasket = document.querySelector('.final-basket')
let nbreArticle = 0

const form = document.querySelector('form')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    nbreArticle++
    localStorage.setItem('nbreArticle', nbreArticle)
    finalBasket.innerHTML = localStorage.getItem('nbreArticle')
    finalBasket.classList.add('active-notif')
    if(nbreArticle > 99) {
        nbreArticle = 99
    }
    setTimeout(() => {
        finalBasket.classList.remove('active-notif')
        countBasket.innerHTML = nbreArticle
    }, 1000)
})