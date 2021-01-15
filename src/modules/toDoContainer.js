function toDoContainer () {
    const container = document.getElementById('page-container');

    const tasksPageContainer = document.createElement('div');
    tasksPageContainer.setAttribute('id', 'tasks-content');
    const tasksPageHeader = document.createElement('div');
    const titleText = document.createElement('h1');
    titleText.setAttribute('id', 'project-header-todo')
    tasksPageHeader.appendChild(titleText);

    const projectDescriptionHeader = document.createElement('h5');
    projectDescriptionHeader.setAttribute('id', 'project-description-header');
    tasksPageContainer.appendChild(tasksPageHeader);
    tasksPageContainer.appendChild(projectDescriptionHeader);
    container.appendChild(tasksPageContainer);
}

export {
    toDoContainer,
}