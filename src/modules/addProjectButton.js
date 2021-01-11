import {ProjectsFactory} from "./ProjectsFactory";
import {modal} from "./modal";
import {storageData} from "../libs/storageData";
import {displayProjects} from "./displayProjects";

function addProjectButton() {
    const container = document.getElementById('projects-header');
    const addButton = document.createElement('button');
    addButton.setAttribute('data-modal-target', '#modal');
    addButton.textContent = "Add project";
    container.appendChild(addButton);

    modal();

    const modalHeaderText = document.getElementById('modal-header-text');
    modalHeaderText.textContent = "Add new project";


    const modalBody = document.getElementById('modal-body');
    const projectNameLabel = document.createElement("label");
    projectNameLabel.textContent = "Project name:";
    modalBody.appendChild(projectNameLabel);
    modalBody.appendChild(document.createElement("br"));

    const projectNameInput = document.createElement('input');
    projectNameInput.setAttribute('type', 'text');
    projectNameInput.setAttribute('maxlength', '32');
    projectNameInput.setAttribute('id', 'project-name-input');
    projectNameInput.classList.add('modal-form-input');
    modalBody.appendChild(projectNameInput);
    modalBody.appendChild(document.createElement("br"));

    const projectDescriptionLabel = document.createElement("label");
    projectDescriptionLabel.textContent = "Description: ";
    modalBody.appendChild(projectDescriptionLabel);
    modalBody.appendChild(document.createElement("br"));

    const projectDescriptionInput = document.createElement('textarea');
    projectDescriptionInput.setAttribute('type', 'text');
    projectDescriptionInput.classList.add('modal-form-input');
    projectDescriptionInput.setAttribute('maxlength', '100');
    projectDescriptionInput.setAttribute('id', 'project-description-input');
    modalBody.appendChild(projectDescriptionInput);
    modalBody.appendChild(document.createElement("br"));

    const addProjectFormConfirm = document.createElement('button');
    addProjectFormConfirm.setAttribute('id', 'project-form-confirm');
    addProjectFormConfirm.textContent = "Add project";
    modalBody.appendChild(addProjectFormConfirm);

    const selectButtonConfirm = document.getElementById('project-form-confirm');
    selectButtonConfirm.addEventListener('click', () => {
        const closestModal = selectButtonConfirm.closest('.modal');

        const name = document.getElementById('project-name-input').value;
        const desc = document.getElementById('project-description-input').value;

        let newArrayOfProjects = storageData().getProjectsArray();

        newArrayOfProjects.push({name: name, description: desc});

        storageData().sendToLocalStorage(newArrayOfProjects);

        displayProjects();
;
        modal().closeModal(closestModal);
    })


}
export {
    addProjectButton,
}