
/**
 * VARIABLES Declaration
 * CONST and LET
 * -------------------------------------------------------------------------
*/

const requestURL = "../datas/projects_datas.json"
const projectCard = document.getElementById('projectCards')
const projectDetail = document.getElementById('projectDetails')

let allProjects =  []

fetch(requestURL)
    .then((resp) => {
        if (resp.ok) {
            resp.json().then((data) => {
                displayProjects(data)
            })
        }
        else {
            console.log(resp.status, resp.statusText)
        }
    });


const displayProjects = (obj) => {
    let myProjects = obj.reverse()
    for(let project of myProjects) {
        allProjects.push(project)
        projectCard.innerHTML += `
            <article>
                <h2 class="project-title">${project.title}</h2>
                <img src="../resources/${project["illustration"]}" alt="card image" class="card-img-top">
                <p>${project.resume}</p>
                <a href="projet_details.html?id=${project.id}">Voir le détail</a>
            </article>
        `
    }
}
