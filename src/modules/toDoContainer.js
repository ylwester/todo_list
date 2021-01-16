import {addTaskButton} from "./addTaskButton";


function toDoContainer () {
    const container = document.getElementById('page-container');

    const tasksPageContainer = document.createElement('div');
    tasksPageContainer.setAttribute('id', 'tasks-content');
    const tasksPageHeader = document.createElement('div');
    tasksPageHeader.setAttribute('id', 'header-tasks-section');
    const titleText = document.createElement('h1');
    titleText.setAttribute('id', 'project-header-todo')
    tasksPageHeader.appendChild(titleText);

    //Create add task button
    const addTask = document.createElement('button');
    addTask.setAttribute('id', 'add-task-button')
    addTask.textContent = "Add task";
    tasksPageHeader.appendChild(addTask);

    const projectDescriptionHeader = document.createElement('h5');
    projectDescriptionHeader.setAttribute('id', 'project-description-header');
    tasksPageContainer.appendChild(tasksPageHeader);
    tasksPageContainer.appendChild(projectDescriptionHeader);


    const todoContainer = document.createElement('div');
    todoContainer.setAttribute('id', 'todo-container');

    tasksPageContainer.appendChild(todoContainer);

    container.appendChild(tasksPageContainer);
}

export {
    toDoContainer,
}