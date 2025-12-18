
/**
 * VARIABLES Declaration
 * CONST and LET
 * -------------------------------------------------------------------------
*/

const requestURL = "../datas/datas.json"
const projectCard = document.getElementById('projectCards')

let allProjects =  []

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
        projectCard.innerHTML += `
            <article>
                <h2 class="project-title">${project.title}</h2>
                <img src="../resources/${project.illustration}" alt="card image" class="card-img-top">
                <p>${project.resume}</p>
                <a href="#">Voir le détail</a>
            </article>
        `
    }

}
