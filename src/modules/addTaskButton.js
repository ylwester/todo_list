import {addTaskModal} from "./modalHandler";
import {storageData} from "../libs/storageData";
import {currentProject} from "./ProjectsFactory";


function addTaskButton() {
    const addTaskButton = document.getElementById('add-task-button');
    addTaskButton.addEventListener('click', () => {
        //Create modal with add task form
        addTaskModal();

        const selectButton = document.getElementById('task-confirm-button');
        selectButton.addEventListener('click', ()=> {
            const closestModal = selectButton.closest('.modal');

            const active = currentProject.getProject();

            const title = document.getElementById('task-title-input').value;
            const desc = document.getElementById('task-desc-input').value;
            const dueDate = document.getElementById('task-due-date-input').value;
            const priority = document.getElementById('task-priority-select');

            let projectsArray = storageData().getProjectsArray();
            console.log(active);
        })
    })
}

export {
    addTaskButton,
}