/**
 * Variables definition
 */
const hamburger = document.querySelector('.navbar-toggler')
const navbar = document.querySelector('.navbar-collapse')
const modalHRNet = document.getElementById("modalHRNet")
const btnDetailsHRNet = document.getElementById("btnDetailsHRNet")
const closeDetailsHRNet = document.getElementById("closeDetailsHRNet")
const modalAgBank = document.getElementById("modalAgBank")
const btnDetailsAgBank = document.getElementById("btnDetailsAgBank")
const closeDetailsAgBank = document.getElementById("closeDetailsAgBank")

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


/** Open / Close Modals */

// Open functions
btnDetailsHRNet.onclick = () => { modalHRNet.style.display = "block" }
btnDetailsAgBank.onclick = () => { modalAgBank.style.display = "block" }

// Close functions
closeDetailsHRNet.onclick = () => { modalHRNet.style.display = "none" }
closeDetailsAgBank.onclick = () => { modalAgBank.style.display = "none" }

// if user clicks outside the modal
window.onclick = (e) => {
    switch(e.target) {
        case modalHRNet :
            modalHRNet.style.display = "none"
            break
        case modalAgBank : 
            modalAgBank.style.display = "none"
            break
        default : break
    }
}
