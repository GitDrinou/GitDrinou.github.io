/**
 * Variables definition
 */
const hamburger = document.querySelector('.navbar-toggler')
const navbar = document.querySelector('.navbar-collapse')
const frmContact = document.getElementById('contact-form')

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



frmContact.addEventListener('submit',(e) => {
    e.preventDefault()

    let contact_title = "Prise de contact"
    let contact_firstName = document.getElementById('form_firstName').value
    let contact_lastName = document.getElementById('form_lastName').value
    let contact_email = document.getElementById('form_email').value
    let contact_message = document.getElementById('form_message').value

    let contact_body = `Demandeur : %0D%0A Prénom : ${contact_firstName} %0D%0A Nom : ${contact_lastName} %0D%0A E-mail : ${contact_email} %0D%0A %0D%0A Message : ${contact_message} %0D%0A`

    window.open(`mailto:contact.gitDrinou@gmail.com?subject=${contact_title}&body=${contact_body}`);
})