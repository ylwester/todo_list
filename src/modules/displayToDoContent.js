import {currentProject} from "./ProjectsFactory";
import {projectsRestored} from "./pageload";


function displayToDoContent() {
    //Get header div
    const header = document.getElementById('project-header-todo');


    //Get header description div
    const headerDescription = document.getElementById('project-description-header');

    const selectAllProjects = document.querySelectorAll('.project-name');
    const projectsArray = projectsRestored;

    const tasksSection = document.getElementById('todo-container');


    displayFirstDefaultProject();

    selectAllProjects.forEach((item) => {
        item.addEventListener('click', () => {
            const nameParse = item.id.split('-').join(' ').toLowerCase();
            const selectedProject = projectsArray.find(project => project.name.toLowerCase() === nameParse);
            header.textContent = selectedProject.getName();
            currentProject.setProject(selectedProject);
            headerDescription.textContent = selectedProject.getDescription();
            console.log(selectedProject.tasksArray);
            if(selectedProject.getTasksArray().length === 0) {
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
    const tasksArray = selectedProject.getTasksArray();
    tasksArray.forEach((task) => {
        const todo = document.createElement('div');
        todo.classList.add('task');
        todo.textContent = task.getTitle();
        tasksSection.appendChild(todo);
    })


}

function displayFirstDefaultProject() {
    const header = document.getElementById('project-header-todo');
    currentProject.setProject(projectsRestored[0]);
    const activeProject = currentProject.getProject(projectsRestored[0]);
    const tasksArray = activeProject.getTasksArray();

    header.textContent = activeProject.getName();
    const headerDescription = document.getElementById('project-description-header');
    headerDescription.textContent = activeProject.getDescription();

    const tasksSection = document.getElementById('todo-container');
    if(tasksArray.length === 0) {
        clearToDoSection();
        const emptyProjectMessage = document.createElement('h3');
        emptyProjectMessage.setAttribute('id', 'empty-project-message');
        emptyProjectMessage.textContent = "Add new tasks to your project!"
        currentProject.setProject(activeProject);
        tasksSection.appendChild(emptyProjectMessage);
    } else {
        clearToDoSection();
        generateTasks(activeProject);
    }

}

function clearToDoSection() {
    const parent = document.getElementById('todo-container');
    while(parent.hasChildNodes()){
        parent.removeChild(parent.firstChild);
    }
}

export {
    displayToDoContent,
    generateTasks,
    clearToDoSection,
}