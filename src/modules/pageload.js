import {displayProjects} from "./displayProjects";
import {addProjectButton} from "./addProjectButton";
import {modal} from "./modal";

function pageLoad () {
    const container = document.getElementById('page-container');
    container.appendChild(displayProjects());
    addProjectButton();
}





export {
    pageLoad,
}