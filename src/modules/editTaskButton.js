import {editTaskModal, modalHandler} from "./modalHandler";
import {displayToDoContent} from "./displayToDoContent";

function editTaskButton(tasksArray) {
    const editButton = document.querySelectorAll('.edit-task-button');
    console.log(editButton);

    editButton.forEach((item) => {
        item.addEventListener('click', () => {
            const taskId = parseInt(item.getAttribute('task-id'));
            editTaskModal();

            const selectedTask = tasksArray.find(task => task.getId() === taskId);
            console.log(selectedTask);

            const confirmButton = document.getElementById('task-confirm-button');
            confirmButton.addEventListener('click', ()=> {
                const closestModal = confirmButton.closest('.modal');

                const title = document.getElementById('task-title-input').value;
                const desc = document.getElementById('task-desc-input').value;
                const dueDate = new Date(document.getElementById('task-due-date-input').value);
                const priority = document.getElementById('task-priority-select').value;

                selectedTask.setTitle(title);
                selectedTask.setDescription(desc);
                selectedTask.setDueDate(dueDate);
                selectedTask.setPriority(priority);
                
                modalHandler().closeModal(closestModal);

                displayToDoContent();

            });
        });
    });
}

export {
    editTaskButton,
}