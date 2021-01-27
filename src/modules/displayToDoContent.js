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
                generateTasksList(selectedProject);
                console.log("Something is there");
            }
        })
    })
}

function expandTask() {
    const allTasks = document.querySelectorAll('.task-item');

    allTasks.forEach((task) => {
        task.addEventListener("click", () => {
                if(!task.classList.contains('active')){
                    task.classList.add('active');
                } else {
                    task.classList.remove('active')
                }
            })
    })
}

function generateTasksList(selectedProject) {
    const tasksArray = selectedProject.getTasksArray();
    tasksArray.forEach((task) => {
        createTask(task);
    })
    expandTask();
}


function createTask(task) {
    const taskSection = document.getElementById('todo-container');

    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');


    const taskShort = document.createElement('div');
    taskShort.classList.add('task-short');
    const taskTitle = document.createElement('p');
    taskTitle.textContent = task.getTitle();

    taskShort.appendChild(taskTitle);

    const taskExtendedContent = document.createElement('div');
    taskExtendedContent.classList.add('task-extended-content');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title-extended');
    const titleExtend = document.createElement('p');
    titleExtend.textContent = task.getTitle();
    titleDiv.appendChild(titleExtend);

    const descriptionDiv = document.createElement('div');
    const descriptionExtend = document.createElement('p');
    descriptionExtend.textContent = task.getDescription();
    descriptionDiv.appendChild(descriptionExtend)

    taskExtendedContent.appendChild(titleDiv);
    taskExtendedContent.appendChild(descriptionDiv)

    taskItem.appendChild(taskShort);
    taskItem.appendChild(taskExtendedContent)

    taskSection.appendChild(taskItem);
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
        generateTasksList(activeProject);
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
    generateTasksList,
    clearToDoSection,
}