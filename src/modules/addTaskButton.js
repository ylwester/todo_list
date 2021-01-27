import {addTaskModal, modalHandler} from "./modalHandler";
import {storageData} from "../libs/storageData";
import {currentProject} from "./ProjectsFactory";
import {clearToDoSection, generateTasksList} from "./displayToDoContent";
import {projectsRestored} from "./pageload";
import {TaskFactory} from "./TaskFactory";


function addTaskButton() {
    const addTaskButton = document.getElementById('add-task-button');
    addTaskButton.addEventListener('click', () => {
        //Create modal with add task form
        addTaskModal();

        const selectButton = document.getElementById('task-confirm-button');
        selectButton.addEventListener('click', ()=> {
            const closestModal = selectButton.closest('.modal');
            const activeTasks = currentProject.getProject().getTasksArray();
            const activeIndex = projectsRestored.indexOf(currentProject.getProject());


            const title = document.getElementById('task-title-input').value;
            const desc = document.getElementById('task-desc-input').value;
            const dueDate = document.getElementById('task-due-date-input').value;
            const priority = document.getElementById('task-priority-select');


            activeTasks.push(TaskFactory(title,desc,dueDate,priority, false));

            projectsRestored[activeIndex].setTasksArray(activeTasks);

            storageData().sendToLocalStorage(projectsRestored);

            clearToDoSection();
            generateTasksList(projectsRestored[activeIndex]);

            modalHandler().closeModal(closestModal);
        })
    })
}

export {
    addTaskButton,
}