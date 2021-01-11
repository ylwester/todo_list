import {displayProjects} from "./displayProjects";
import {addProjectButton} from "./addProjectButton";
import {modal} from "./modal";
import {projectsContainer} from "./projectsContainer";

function pageLoad () {
    //Load projects container:
    projectsContainer();
    // const projectContainer = document.getElementById('projects-container');
    // const DOMProjectsNamesWrap = document.createElement('div');
    // DOMProjectsNamesWrap.setAttribute('id', "projects-names-wrap");
    // projectContainer.appendChild(DOMProjectsNamesWrap);

    addProjectButton();
    displayProjects();
}





export {
    pageLoad,
}