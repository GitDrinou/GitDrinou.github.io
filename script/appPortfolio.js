/** Definitions */


const modalHRNet = document.getElementById("modalHRNet")
const btnDetailsHRNet = document.getElementById("btnDetailsHRNet")
const closeDetailsHRNet = document.getElementById("closeDetailsHRNet")
const modalAgBank = document.getElementById("modalAgBank")
const btnDetailsAgBank = document.getElementById("btnDetailsAgBank")
const closeDetailsAgBank = document.getElementById("closeDetailsAgBank")
const modalSportSee = document.getElementById("modalSportSee")
const btnDetailsSportSee = document.getElementById("btnDetailsSportSee")
const closeDetailsSportSee = document.getElementById("closeDetailsSportSee")
const modalKasa = document.getElementById("modalKasa")
const btnDetailsKasa = document.getElementById("btnDetailsKasa")
const closeDetailsKasa = document.getElementById("closeDetailsKasa")
const modalLearn = document.getElementById("modalLearn")
const btnDetailsLearn = document.getElementById("btnDetailsLearn")
const closeDetailsLearn = document.getElementById("closeDetailsLearn")
const modalBilled = document.getElementById("modalBilled")
const btnDetailsBilled = document.getElementById("btnDetailsBilled")
const closeDetailsBilled = document.getElementById("closeDetailsBilled")
const modalLPP = document.getElementById("modalLPP")
const btnDetailsLPP = document.getElementById("btnDetailsLPP")
const closeDetailsLPP = document.getElementById("closeDetailsLPP")
const modalFishEye = document.getElementById("modalFishEye")
const btnDetailsFishEye = document.getElementById("btnDetailsFishEye")
const closeDetailsFishEye = document.getElementById("closeDetailsFishEye")
const modalGameOn = document.getElementById("modalGameOn")
const btnDetailsGameOn = document.getElementById("btnDetailsGameOn")
const closeDetailsGameOn = document.getElementById("closeDetailsGameOn")
const modalOhMy = document.getElementById("modalOhMy")
const btnDetailsOhMy = document.getElementById("btnDetailsOhMy")
const closeDetailsOhMy = document.getElementById("closeDetailsOhMy")
const modalReservia = document.getElementById("modalReservia")
const btnDetailsReservia = document.getElementById("btnDetailsReservia")
const closeDetailsReservia = document.getElementById("closeDetailsReservia")


/** Open / Close Modals */

// Open functions
btnDetailsHRNet.addEventListener('onclick', () => { modalHRNet.style.display = "block" })
btnDetailsAgBank.addEventListener('onclick', () => { modalAgBank.style.display = "block" })
btnDetailsSportSee.addEventListener('onclick', () => { modalSportSee.style.display = "block" })
btnDetailsKasa.addEventListener('onclick', () => { modalKasa.style.display = "block" })
btnDetailsLearn.addEventListener('onclick', () => { modalLearn.style.display = "block" })
btnDetailsBilled.addEventListener('onclick', () => { modalBilled.style.display = "block" })
btnDetailsLPP.addEventListener('onclick', () => { modalLPP.style.display = "block" })
btnDetailsFishEye.addEventListener('onclick', () => { modalFishEye.style.display = "block" })
btnDetailsGameOn.addEventListener('onclick', () => { modalGameOn.style.display = "block" })
btnDetailsOhMy.addEventListener('onclick', () => { modalOhMy.style.display = "block" })
btnDetailsReservia.addEventListener('onclick', () => { modalReservia.style.display = "block" })

// Close functions
closeDetailsHRNet.onclick = () => { modalHRNet.style.display = "none" }
closeDetailsAgBank.onclick = () => { modalAgBank.style.display = "none" }
closeDetailsSportSee.onclick = () => { modalSportSee.style.display = "none" }
closeDetailsKasa.onclick = () => { modalKasa.style.display = "none" }
closeDetailsLearn.onclick = () => { modalLearn.style.display = "none" }
closeDetailsBilled.onclick = () => { modalBilled.style.display = "none" }
closeDetailsLPP.onclick = () => { modalLPP.style.display = "none" }
closeDetailsFishEye.onclick = () => { modalFishEye.style.display = "none" }
closeDetailsGameOn.onclick = () => { modalGameOn.style.display = "none" }
closeDetailsOhMy.onclick = () => { modalOhMy.style.display = "none" }
closeDetailsReservia.onclick = () => { modalReservia.style.display = "none" }

// if user clicks outside the modal
window.onclick = (e) => {
    switch(e.target) {
        case modalHRNet :
            modalHRNet.style.display = "none"
            break
        case modalAgBank : 
            modalAgBank.style.display = "none"
            break
        case modalSportSee : 
            modalSportSee.style.display = "none"
            break
        case modalKasa : 
            modalKasa.style.display = "none"
            break
        case modalLearn : 
            modalLearn.style.display = "none"
            break
        case modalBilled : 
            modalBilled.style.display = "none"
            break
        case modalLPP : 
            modalLPP.style.display = "none"
            break
        case modalFishEye : 
            modalFishEye.style.display = "none"
            break
        case modalGameOn : 
            modalGameOn.style.display = "none"
            break
        case modalOhMy : 
            modalOhMy.style.display = "none"
            break
        case modalReservia : 
            modalReservia.style.display = "none"
            break
        default : break
    }
}