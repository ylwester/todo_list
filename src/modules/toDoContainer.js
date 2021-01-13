function toDoContainer () {
    const container = document.getElementById('page-container');

    const tasksPageContainer = document.createElement('div');
    tasksPageContainer.setAttribute('id', 'tasks-content');
    const tasksPageTitle = document.createElement('div');
    const titleText = document.createElement('h1');
    tasksPageTitle.appendChild(titleText);
    tasksPageContainer.appendChild(tasksPageTitle);


    container.appendChild(tasksPageContainer);
}

export {
    toDoContainer,
}