import {ProjectsFactory} from "./ProjectsFactory";
import {modal} from "./modal";
import {storageData} from "../libs/storageData";
import {displayProjects} from "./displayProjects";

function addProjectButton() {
    const container = document.getElementById('projects-header');
    const addButton = document.createElement('button');
    addButton.setAttribute('data-modal-target', '#modal');
    addButton.setAttribute('id', 'add-project-button')
    addButton.textContent = "Add project";
    container.appendChild(addButton);

    //Creating modal with adding project form
    modal().addProjectModal();


    const selectButtonConfirm = document.getElementById('project-form-confirm');
    selectButtonConfirm.addEventListener('click', () => {
        const closestModal = selectButtonConfirm.closest('.modal');

        const name = document.getElementById('project-name-input').value;
        const desc = document.getElementById('project-description-input').value;

        let newArrayOfProjects = storageData().getProjectsArray();
        newArrayOfProjects.push(ProjectsFactory(name,desc, []));
        storageData().sendToLocalStorage(newArrayOfProjects);

        displayProjects();
        modal().closeModal(closestModal);
    })


}
export {
    addProjectButton,
}