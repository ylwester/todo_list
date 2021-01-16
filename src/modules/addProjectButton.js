import {ProjectsFactory} from "./ProjectsFactory";
import {storageData} from "../libs/storageData";
import {displayProjects} from "./displayProjects";
import {displayToDoContent} from "./displayToDoContent";
import {addProjectModal, modal} from "./modal";

function addProjectButton() {
    const container = document.getElementById('projects-header');
    const addButton = document.createElement('button');
    addButton.setAttribute('data-modal-target', '#modal');
    addButton.setAttribute('id', 'add-project-button')
    addButton.textContent = "Add project";
    container.appendChild(addButton);

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

        modal().closeModal(closestModal);
        displayProjects();
        displayToDoContent();
    })


}
export {
    addProjectButton,
}