import {ProjectsFactory} from "./ProjectsFactory";
import {modal} from "./modal";

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
    projectNameInput.setAttribute('id', 'project-name-input');
    modalBody.appendChild(projectNameInput);
    modalBody.appendChild(document.createElement("br"));

    const projectDescriptionLabel = document.createElement("label");
    projectDescriptionLabel.textContent = "Description: ";
    modalBody.appendChild(projectDescriptionLabel);
    modalBody.appendChild(document.createElement("br"));

    const projectDescriptionInput = document.createElement('input');
    projectDescriptionInput.setAttribute('type', 'text');
    projectDescriptionInput.setAttribute('id', 'project-description-input');
    modalBody.appendChild(projectDescriptionInput);
    modalBody.appendChild(document.createElement("br"));

    const addProjectFormConfirm = document.createElement('button');
    addProjectFormConfirm.setAttribute('id', 'project-form-confirm');
    addProjectFormConfirm.textContent = "Add project";
    modalBody.appendChild(addProjectFormConfirm);

    const selectButtonConfirm = document.getElementById('project-form-confirm');
    selectButtonConfirm.addEventListener('click', () => {
        const modalek = selectButtonConfirm.closest('.modal');
        modal().closeModal(modalek);

    })



}
export {
    addProjectButton,
}