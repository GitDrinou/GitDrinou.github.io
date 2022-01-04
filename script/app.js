/**
 * Variables definition
 */
const hamburger = document.querySelector('.navbar-toggler')
const navbar = document.querySelector('.navbar-collapse')

/**
 * Event click on hamburger button
 * Show/Not Show nav items
 */
hamburger.addEventListener('click', (e) => {
    e.preventDefault()
    navbar.classList.toggle('show')
})


