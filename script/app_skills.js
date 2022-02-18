/**
 * VARIABLES Declaration
 * CONST and LET
 * -------------------------------------------------------------------------
*/
const requestURL = "../datas/hardSkills.json"
const skillCard = document.getElementById("skillCards")
const DEFAULT_LEVEL = 10

/**
 * FETCH
 * ------------------------------------------------------------
*/
fetch(requestURL)
    .then((resp) => {
        if (resp.ok) {
            resp.json().then((datas) => { 
                displaySkills(datas)                               
            })
        }
        else {
            console.log(resp.status, resp.statusText)
            // errorText.style.display="block"
            // errorText.innerHTML="Erreur<br>"+resp.status+" "+resp.statusText
        }
    })

/**
 * Function displaySkills
 * @param {object} obj list of all skills datas
 */
function displaySkills(obj) {

    for(let skill of obj) {

        let fullSquare = ``
        let emptySquare = ``

        for (let i=1; i<=skill.level; i++) {

            fullSquare += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" fill="#5607be"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z" class="skill-full"/></svg> `

        }

        for (let i=1; i<=(DEFAULT_LEVEL-skill.level); i++) {

            emptySquare += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" fill="#a192b4"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z" class="skill-full"/></svg> `
            
        }

        skillCard.innerHTML += `<div class="col-lg-3 col-md-6 col-12">
                <div class="card mb-2 shadow w-20 h-80">
                    <div class="card-body skill-body">
                        <div>
                            <h4 class="skill-label">${skill.label}</h4>
                            <div>${fullSquare} ${emptySquare}</div>
                        </div>
                        <div><img src="../ressources/logos/${skill.logo}" alt="logo image" class="skill-logo"></div>
                    </div>
                </div>
            </div>
        `
    }

}
