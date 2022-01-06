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

/** Animation  */

const txtAnim = document.querySelector('.text-animation')

let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
})

typewriter
    .pauseFor(1200)
    .changeDelay(20)
    .typeString('Moi c\'est Sandrine')
    .pauseFor(300)
    .typeString('<strong>, Développeuse HTML / CSS</strong> !')
    .pauseFor(1000)
    .deleteChars(13)
    .typeString('<span style="color: #27ae60;"> JavaScript</span> !')
    .pauseFor(1000)
    .deleteChars(13)
    .typeString('<span style="color: orange"> React</span> !')
    .start()