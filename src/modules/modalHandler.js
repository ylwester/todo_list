function createModal() {
    //Creating a modal, popup box
    const pageContainer = document.getElementById('page-container');
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal');
    modalContainer.setAttribute('id', 'modal');

    //Content in modal header
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    const modalHeaderText = document.createElement('h3');
    modalHeaderText.setAttribute('id', 'modal-header-text');
    modalHeader.appendChild(modalHeaderText);

    //Close button
    const modalHeaderButton = document.createElement('button');
    modalHeaderButton.setAttribute('data-close-button', '');
    modalHeaderButton.classList.add('modal-close-button');
    const xSignButton = document.createElement('i');
    xSignButton.classList.add("fas");
    xSignButton.classList.add("fa-times");
    modalHeaderButton.appendChild(xSignButton);
    modalHeader.appendChild(modalHeaderButton);

    modalContainer.appendChild(modalHeader);

    //Content in modal body
    const modalContent = document.createElement('div');
    modalContent.setAttribute('id', 'modal-body')
    modalContainer.appendChild(modalContent)

    //Creating div with background shadow while open modal
    const overlay = document.createElement('div');
    overlay.setAttribute('id', 'overlay');

    pageContainer.appendChild(modalContainer);
    pageContainer.appendChild(overlay);
}

function modalHandler() {
    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            closeModal(modal);
        })
    })

    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });

    function closeModal(modal) {
        if(modal == null) return;
        const overlay = document.getElementById('overlay');
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

    return {
        closeModal,
    }

}

function openModal() {
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal')
    if(modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}


function clearModalContent() {
    const modalBody = document.getElementById('modal-body');
    while(modalBody.hasChildNodes()){
        modalBody.removeChild(modalBody.firstChild);
    }
}


function addProjectModal() {
    clearModalContent();
    openModal();

    const modalHeaderText = document.getElementById('modal-header-text');
    modalHeaderText.textContent = "Add new project";

    // const modal = document.getElementById('modal');
    //
    // const modalHeader = document.createElement('div');
    // modalHeader.classList.add('modal-header');
    // const modalHeaderText = document.createElement('h3');
    // modalHeaderText.setAttribute('id', 'modal-header-text');
    // modalHeaderText.textContent = "Add new project";
    // modalHeader.appendChild(modalHeaderText);


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
}

function addTaskModal() {
    clearModalContent();
    openModal();

    const modalHeaderText = document.getElementById('modal-header-text');
    modalHeaderText.textContent = "Add new task";

}

export {
    createModal,
    openModal,
    modalHandler,
    addProjectModal,
    addTaskModal,
}