import {displayProjects} from "./displayProjects";
import {addProjectButton} from "./addProjectButton";

function pageLoad () {
    const container = document.getElementById('page-container');
    container.appendChild(displayProjects());
    addProjectButton();
}





export {
    pageLoad,
}