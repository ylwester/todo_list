import {displayProjects} from "./displayProjects";
import {addProjectButton} from "./addProjectButton";
import {projectsContainer} from "./projectsContainer";
import {displayToDoContent} from "./displayToDoContent";
import {storageData} from "../libs/storageData";
import {ProjectsFactory} from "./ProjectsFactory";
import {TaskFactory} from "./TaskFactory";
import {toDoContainer} from "./toDoContainer";
import {createModal, modalHandler} from "./modalHandler";
import {addTaskButton} from "./addTaskButton";


// if(storageData().getProjectsArray() === null){
let projectsData = [];
let tasksToProject = [];

tasksToProject.push(TaskFactory.task( "Take out the trash", "You should take out those trash", new Date(), "Low", false));
tasksToProject.push(TaskFactory.task( "Take out", "You should take out those trash", new Date(), "High", false));


projectsData.push(ProjectsFactory("Default1","Enter your tasks here", tasksToProject));
projectsData.push(ProjectsFactory("Default2","Enter your tasks here", []));
projectsData.push(ProjectsFactory("Default3","Enter your tasks here", tasksToProject));

console.log(projectsData);
storageData().sendToLocalStorage(projectsData);
// }

let projects = storageData().getProjectsArray();

let projectsRestored = projects.map(project => {
    let tasksArr = project.tasksArray.map(task => {
        return TaskFactory.task(task.title, task.description, new Date(task.dueDate), task.priority, task.completed);
    })
    return ProjectsFactory(project.name, project.description, tasksArr);
})

console.log(projectsRestored);



function pageLoad () {
    createModal();
    projectsContainer();
    toDoContainer();
    addProjectButton();
    displayProjects();
    //To Do content
    displayToDoContent();
    addTaskButton();
    modalHandler();
}

export {
    pageLoad,
    projectsRestored,
}