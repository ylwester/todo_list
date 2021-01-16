function modal() {
    const openModalButtons = document.querySelectorAll('[data-modal-target]');

    // Searches for buttons with data "data-modal-target" and opens modal.
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        });
    })

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

function openModal(modal) {
    const overlay = document.getElementById('overlay');
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
    openModal()
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    const modalHeaderText = document.createElement('h3');
    modalHeaderText.setAttribute('id', 'modal-header-text');
    modalHeaderText.textContent = "Add new project";
    modalHeader.appendChild(modalHeaderText);

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

}

export {
    modal,
    addProjectModal,
    addTaskModal,
}