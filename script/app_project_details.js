
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
    const myProject = allProjects.find((el) => el.id === parseInt(projectId))
    let languagesBloc = myProject["languages"].map(item => `. ${item}<br>`).join('');
    let resourcesBloc = myProject["resources"].map(item => `. ${item}<br>`).join('');
    let constraintsBloc = myProject["contraintes"].map(item => `. ${item}<br>`).join('');
    let skillsBloc = myProject["competences"].map(item => `. ${item}<br>`).join('');

    document.title = `Portfolio de Sandrine Brival | Projets | Détail projet: ${myProject["title"]}`
    document.getElementById('project_title').innerHTML = `Projet: ${myProject["title"]}`
    document.getElementById('project_detail_img').src = `../resources/projets/${myProject["screenshot"]}`
    projectDetail.innerHTML = `
        <p class="details-bloc-text">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                    <rect x="2" y="2" width="12" height="12"/>
                </svg>
                DATE DE RÉALISATION:
            </span>
             <br>${myProject["period"]}
        </p>
        <p class="details-bloc-text">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                    <rect x="2" y="2" width="12" height="12"/>
                </svg>
                OBJECTIF:
            </span>
             <br>${myProject["goal"]}
        </p>
        <p class="details-bloc-text">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <rect x="2" y="2" width="12" height="12"/>
                </svg>
                SCÉNARIO:
            </span>
        <br>${myProject["scenario"]}</p>
        <p class="details-bloc-list">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <rect x="2" y="2" width="12" height="12"/>
                </svg>
                RESSOURCES:
            </span>
        <br>${resourcesBloc}</p>
        <p class="details-bloc-list">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <rect x="2" y="2" width="12" height="12"/>
                </svg>
                CONTRAINTES:
            </span>
        <br>${constraintsBloc}</p>
        <p class="details-bloc-list">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <rect x="2" y="2" width="12" height="12"/>
                </svg>
                COMPÉTENCES:
            </span>
        <br>${skillsBloc}</p>
        <p class="details-bloc-list">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <rect x="2" y="2" width="12" height="12"/>
                </svg>
                LANGAGES, OUTILS & MÉTHODES UTILISÉS:
            </span>
        <br>${languagesBloc}</p>
        <p class="details-bloc-text">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <rect x="2" y="2" width="12" height="12"/>
                </svg>
                REPO GITHUB:
            </span>
            <br><br>
            <a href="${myProject["urlRepo"]}" target="_blank" class="details-repo-link">Voir le repo</a>
        </p>
    `
}