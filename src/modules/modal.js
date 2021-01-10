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

    //Searches of buttons with data "data-modal-target" and opens modal.
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

    return {
        closeModal,
    }

}

export { modal}