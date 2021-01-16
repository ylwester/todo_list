import {ProjectsFactory} from "./ProjectsFactory";
import {storageData} from "../libs/storageData";
import {displayProjects} from "./displayProjects";
import {displayToDoContent} from "./displayToDoContent";
import {addProjectModal, modalHandler} from "./modalHandler";

function addProjectButton() {
    const addButton = document.getElementById('add-project-button');
    addButton.addEventListener('click', () => {
        //Creating modal with adding project form
        addProjectModal();

        const selectButtonConfirm = document.getElementById('project-form-confirm');
        selectButtonConfirm.addEventListener('click', () => {
            const closestModal = selectButtonConfirm.closest('.modal');

            const name = document.getElementById('project-name-input').value;
            const desc = document.getElementById('project-description-input').value;

            let newArrayOfProjects = storageData().getProjectsArray();
            let todos = [];


            newArrayOfProjects.push(ProjectsFactory(name,desc, todos));
            storageData().sendToLocalStorage(newArrayOfProjects);

            modalHandler().closeModal(closestModal);
            displayProjects();
            displayToDoContent();
        })
    })


}
export {
    addProjectButton,
}