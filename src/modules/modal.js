function modal() {
    const openModalButtons = document.querySelectorAll('[data-modal-target]');

    //Creating a modal, popup box
    const pageContainer = document.getElementById('page-container');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', 'modal');

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

    modal.appendChild(modalHeader);

    //Content in modal body
    const modalContent = document.createElement('div');
    modalContent.setAttribute('id', 'modal-body')
    modal.appendChild(modalContent)


    pageContainer.appendChild(modal);

    //Creating div with background shadow while open modal
    const overlay = document.createElement('div');
    overlay.setAttribute('id', 'overlay');
    pageContainer.appendChild(overlay);

    // Searches for buttons with data "data-modal-target" and opens modal.
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        });
    })

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


    function openModal(modal) {
        const overlay = document.getElementById('overlay');
        if(modal == null) return;
        modal.classList.add('active');
        overlay.classList.add('active');
    }

    function closeModal(modal) {
        if(modal == null) return;
        const overlay = document.getElementById('overlay');
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

    function addProjectModal() {
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
    }

    return {
        closeModal,
        addProjectModal,
    }

}

export { modal}