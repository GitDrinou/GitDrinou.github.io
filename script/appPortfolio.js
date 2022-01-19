
/**
 * VARIABLES Declaration
 * CONST and LET
 * -------------------------------------------------------------------------
*/
const hamburger = document.querySelector('.navbar-toggler')
const navbar = document.querySelector('.navbar-collapse')

const requestURL = "../datas/datas.json"
const projectCard = document.getElementById('projectCards')
const projectModal = document.getElementById('modal')
const projectModalContent = document.querySelector('.modal-content')

let allProjects =  []

/**
 * Event click on hamburger button
 * Show/Not Show nav items
 */
 hamburger.addEventListener('click', (e) => {
    e.preventDefault()
    navbar.classList.toggle('show')
})

/**
 * FETCH
 * ------------------------------------------------------------
*/

fetch(requestURL)
    .then((resp) => {
        if (resp.ok) {
            resp.json().then((datas) => { 
                displayProjects(datas)                               
            })
        }
        else {
            console.log(resp.status, resp.statusText)
            // errorText.style.display="block"
            // errorText.innerHTML="Erreur<br>"+resp.status+" "+resp.statusText
        }
    });


/**
 * Function displayProjects
 * @param {object} obj list of all projects datas
 */
function displayProjects(obj) {

    let myProjects = obj.reverse()

    for(let project of myProjects) {

        allProjects.push(project)

        projectCard.innerHTML += `<div class="col-lg-4 col-md-6 col-12">
                <div class="card mb-4 shadow">
                    <img src="../ressources/${project.image_Portfolio}" alt="card image" class="card-img-top">
                    <div class="card-body">
                        <h4 class="project-title">${project.title}</h4>
                        <p class="card-text">${project.resume}</p>
                        <div class="btn-group">
                            <button class="btn btn-sm btn-outline-secondary me-2" onClick="setModal(${project.id})">
                                Détails du projet
                            </button>
                            <a href="${project.gitUrl}" rel="noopener" target="_blank" class="text-dark">
                                <button class="btn btn-sm btn-outline-secondary me-2">
                                    Code Source
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

}

/**
 * Function to display Modal
 * @param {number} idProject 
 */
function setModal(idProject) {

    let languagesBloc = ``  
    let bOpen = true  

    // Fill the modal

    const myProject = allProjects.find((el) => el.id === idProject)

    for(item in myProject.langages) {
        languagesBloc += `<img src="../ressources/logos/${myProject.langages[item]}.webp" alt="logo ${myProject.langages[item]}" title="${myProject.langages[item]}">`
    }
            
    projectModalContent.innerHTML += `
            <span class="close" id="closeDetails" onclick="closeModal()">&times;</span>                
            <h4 id="projectTitle">${myProject.title}</h4>
            <div class="project">   
                <img src="../ressources/projets/${myProject.image_Projet}" alt="screenshot project">
                <div class="project-details">
                    <div class="infos">
                        <p>Objectif : ${myProject.goal}</p>
                        <p><strong>Scénario :</strong> <br>${myProject.scenario}</p>
                    </div>
                    <div class="languages">
                        <h5>Languages & co </h5>
                        <div class="languages-list">${languagesBloc}</div>    
                    </div>
                </div>                                                     
            </div>`


    if (bOpen) {
      openModal()  
    }

    bOpen = false
    
}

/**
 * Function to display Modal by updating style attribut
 */
function openModal() {
    projectModal.style.display = "block"
}

/**
 * Function to undisplay Modal 
 * by updating style attribut
 * and reinit the modal selector
 */
function closeModal() {    
    projectModal.style.display = "none"
    projectModalContent.innerHTML = ``
}

