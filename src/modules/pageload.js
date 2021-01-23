import {displayProjects} from "./displayProjects";
import {addProjectButton} from "./addProjectButton";
import {projectsContainer} from "./projectsContainer";
import {displayToDoContent} from "./displayToDoContent";
import {storageData} from "../libs/storageData";
import {activeProject, ProjectsFactory} from "./ProjectsFactory";
import {TaskFactory} from "./TaskFactory";
import {toDoContainer} from "./toDoContainer";
import {createModal, modalHandler} from "./modalHandler";
import {addTaskButton} from "./addTaskButton";

const currentProject = activeProject();


// if(storageData().getProjectsArray() === null){
    let projectsData = [];
    let tasksToProject = [];

    tasksToProject.push(TaskFactory( "Take out the trash", "", "", "2 days", false));
    tasksToProject.push(TaskFactory( "Take out the trash", "", "", "2 days", false));

    projectsData.push(ProjectsFactory("Default1","Enter your tasks here", tasksToProject));
    projectsData.push(ProjectsFactory("Default2","Enter your tasks here", tasksToProject));
    projectsData.push(ProjectsFactory("Default3","Enter your tasks here", tasksToProject));

    storageData().sendToLocalStorage(projectsData);
// }

    let projects = storageData().getProjectsArray();

    let projectsRestored = projects.map(project => {
        let tasksArr = project.tasksArray.map(task => {
            let tasks = TaskFactory(task.title, task.description, task.dueDate, task.priority, task.completed);
            return tasks;
        })
        let proj = ProjectsFactory(project.name, project.description, tasksArr);
        return proj;
    })



function pageLoad () {
    console.log(projectsRestored);

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