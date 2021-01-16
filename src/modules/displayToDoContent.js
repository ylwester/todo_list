
import {storageData} from "../libs/storageData";

function displayToDoContent() {
    //Get header div
    const header = document.getElementById('project-header-todo');


    //Get header description div
    const headerDescription = document.getElementById('project-description-header');

    const selectAllProjects = document.querySelectorAll('.project-name');
    const projectsArray = storageData().getProjectsArray();

    const tasksSection = document.getElementById('todo-container');


    displayFirstDefaultProject();

    selectAllProjects.forEach((item) => {
        item.addEventListener('click', () => {
            const nameParse = item.id.split('-').join(' ').toLowerCase();
            const selectedProject = projectsArray.find(project => project.name.toLowerCase() === nameParse);
            header.textContent = selectedProject.name;
            headerDescription.textContent = selectedProject.description;
            console.log(selectedProject.tasksArray);
            if(selectedProject.tasksArray.length === 0) {
                clearToDoSection();
                const emptyProjectMessage = document.createElement('h3');
                emptyProjectMessage.setAttribute('id', 'empty-project-message');
                emptyProjectMessage.textContent = "Add new tasks to your project!"
                tasksSection.appendChild(emptyProjectMessage);
            } else {
                clearToDoSection();
                generateTasks(selectedProject);
                console.log("Something is there");
            }
        })
    })
}

function generateTasks(selectedProject) {
    const tasksSection = document.getElementById('todo-container');
    const tasksArray = selectedProject.tasksArray;
    tasksArray.forEach((task) => {
        const todo = document.createElement('div');
        todo.classList.add('task');
        todo.textContent = task.title;
        tasksSection.appendChild(todo);
    })


}

function displayFirstDefaultProject() {
    const header = document.getElementById('project-header-todo');
    const projectsArray = storageData().getProjectsArray();
    const activeProject = projectsArray[0];
    const tasksArray = activeProject.tasksArray;

    header.textContent = activeProject.name;
    const headerDescription = document.getElementById('project-description-header');
    headerDescription.textContent = activeProject.description;

}

function clearToDoSection() {
    const parent = document.getElementById('todo-container');
    while(parent.hasChildNodes()){
        parent.removeChild(parent.firstChild);
    }
}

export {
    displayToDoContent,
}