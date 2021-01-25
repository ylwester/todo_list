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


if(storageData().getProjectsArray() === null){
    let projectsData = [];
    let tasksToProject = [];

    tasksToProject.push(TaskFactory( "Take out the trash", "", "", "2 days", false));
    tasksToProject.push(TaskFactory( "Take out the trash", "", "", "2 days", false));

    projectsData.push(ProjectsFactory("Default1","Enter your tasks here", tasksToProject));
    projectsData.push(ProjectsFactory("Default2","Enter your tasks here", []));
    projectsData.push(ProjectsFactory("Default3","Enter your tasks here", tasksToProject));

    storageData().sendToLocalStorage(projectsData);
}

    let projects = storageData().getProjectsArray();

    let projectsRestored = projects.map(project => {
        let tasksArr = project.tasksArray.map(task => {
            return TaskFactory(task.title, task.description, task.dueDate, task.priority, task.completed);
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