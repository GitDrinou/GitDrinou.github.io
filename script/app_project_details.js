
/**
 * VARIABLES Declaration
 * CONST and LET
 * -------------------------------------------------------------------------
*/

const requestURL = "../datas/datas.json"
const projectDetail = document.getElementById('projectDetails')

let allProjects =  []

const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Erreur lors de la récupération des données JSON.`);
    }
    return await response.json();
}




window.addEventListener('DOMContentLoaded', async () => {
    let projectDetails = await fetchData(requestURL);
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const projectId = params.get('id');

    for(let project of projectDetails) {
        allProjects.push(project)
    }

    displayProjectDetail(projectId);

})

const displayProjectDetail = (projectId)=> {
    let languagesBloc = ``
    const myProject = allProjects.find((el) => el.id === parseInt(projectId))
    for(let item in myProject.languages) {
            languagesBloc += `* ${myProject.languages[item]}<br>`
    }
    document.title = `Portfolio de Sandrine Brival | Projets | Détail projet: ${myProject["title"]}`
    document.getElementById('project_title').innerHTML = `Projet: ${myProject["title"]}`
    document.getElementById('project_detail_img').src = `../resources/projets/${myProject["screenshot"]}`
    projectDetail.innerHTML = `
        <p>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <rect x="2" y="2" width="12" height="12"/>
                </svg>
                OBJECTIF:
            </span>
             <br>${myProject["goal"]}
        </p>
        <p>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <rect x="2" y="2" width="12" height="12"/>
                </svg>
                SCÉNARIO:
            </span>
        <br>${myProject["scenario"]}</p>
        <p>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <rect x="2" y="2" width="12" height="12"/>
                </svg>
                LANGAGES & OUTILS:
            </span>
        <br>${languagesBloc}</p>
    `
}