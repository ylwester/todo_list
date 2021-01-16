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

    document.body.appendChild(modalContainer);
    document.body.appendChild(overlay);
    // pageContainer.appendChild(modalContainer);
    // pageContainer.appendChild(overlay);
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

    const modalBody = document.getElementById('modal-body');
    const projectNameLabel = document.createElement("label");
    projectNameLabel.textContent = "Name";
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
    projectDescriptionLabel.textContent = "Description";
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

    const modalBody = document.getElementById('modal-body');
    const taskTitleLabel = document.createElement('label');
    taskTitleLabel.setAttribute('for', 'task-title-input');
    taskTitleLabel.textContent = "Title";
    modalBody.appendChild(taskTitleLabel);
    modalBody.appendChild(document.createElement("br"));

    const taskTitleInput = document.createElement('input');
    taskTitleInput.setAttribute('type', 'text');
    taskTitleInput.setAttribute('id', 'task-title-input');
    taskTitleInput.setAttribute('maxlength', '32');
    modalBody.appendChild(taskTitleInput);
    modalBody.appendChild(document.createElement("br"));

    const taskDescLabel = document.createElement('label');
    taskDescLabel.textContent = "Description";
    taskDescLabel.setAttribute('for', 'task-desc-input');
    modalBody.appendChild(taskDescLabel);
    modalBody.appendChild(document.createElement("br"));

    const taskDescInput = document.createElement('textarea');
    taskDescInput.setAttribute('type', 'text');
    taskDescInput.setAttribute('maxlength', '100');
    taskDescInput.setAttribute('id', 'task-desc-input');
    modalBody.appendChild(taskDescInput);
    modalBody.appendChild(document.createElement("br"));

    const taskDueDateLabel = document.createElement('label');
    taskDueDateLabel.textContent = "Due date";
    taskDueDateLabel.setAttribute('for', 'task-due-date-input');
    modalBody.appendChild(taskDueDateLabel);
    modalBody.appendChild(document.createElement("br"));

    const taskDueDateInput = document.createElement('input');
    taskDueDateInput.setAttribute('type', 'date');
    taskDueDateInput.setAttribute('id', 'task-due-date-input');
    modalBody.appendChild(taskDueDateInput);
    modalBody.appendChild(document.createElement("br"));

    const taskPriorityLabel = document.createElement('label');
    taskPriorityLabel.setAttribute('id', 'task-priority-select')
    taskPriorityLabel.textContent = "Priority";
    modalBody.appendChild(taskPriorityLabel);
    modalBody.appendChild(document.createElement("br"));

    const taskPrioritySelect = document.createElement('select');
    taskPrioritySelect.setAttribute('id', 'task-priority-select');

    const taskPriorityLow = document.createElement('option');
    taskPriorityLow.textContent = "Low";
    taskPriorityLow.value = "low";
    taskPrioritySelect.appendChild(taskPriorityLow);

    const taskPriorityMedium = document.createElement('option');
    taskPriorityMedium.textContent = "Medium";
    taskPriorityMedium.value = "medium";
    taskPrioritySelect.appendChild(taskPriorityMedium);

    const taskPriorityHigh = document.createElement('option');
    taskPriorityHigh.textContent = "High";
    taskPriorityHigh.value = "high";
    taskPrioritySelect.appendChild(taskPriorityHigh);

    modalBody.appendChild(taskPrioritySelect);
    modalBody.appendChild(document.createElement("br"));

    const taskConfirmButton = document.createElement('button');
    taskConfirmButton.textContent = "Add task";
    taskConfirmButton.setAttribute('id', 'task-confirm-button')
    modalBody.appendChild(taskConfirmButton);

}

export {
    createModal,
    openModal,
    modalHandler,
    addProjectModal,
    addTaskModal,
}